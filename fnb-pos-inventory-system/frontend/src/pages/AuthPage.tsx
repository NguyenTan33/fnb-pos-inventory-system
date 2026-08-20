import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import * as THREE from 'three';
import {
  Lock,
  User as UserIcon,
  Smartphone,
  Eye,
  EyeOff,
  KeyRound,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

export const AuthPage: React.FC = () => {
  const navigate = useNavigate();
  const { login, loginAsDemoRole, register, verifyOtp } = useAuth();

  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const [showPassword, setShowPassword] = useState(false);

  // Form states
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  // Messages & Loading
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // OTP Modal
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otpDigits, setOtpDigits] = useState<string[]>(['', '', '', '', '', '']);
  const [pendingPhone, setPendingPhone] = useState('');
  const [resendTimer, setResendTimer] = useState(60);

  // Three.js Canvas Reference
  const mountRef = useRef<HTMLDivElement | null>(null);

  // -------------------------------------------------------------
  // THREE.JS POIMANDRES FULL 3D INTERACTIVE DRAG & TOSS PHYSICS
  // -------------------------------------------------------------
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth;
    let height = container.clientHeight;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#eef2f6'); // Soft light bluish white as pmnd.rs

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 28);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    container.appendChild(renderer.domElement);

    // 2. Studio Lighting (Light pastel ambiance & soft shadows)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.3);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 2.5);
    dirLight.position.set(15, 25, 20);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    scene.add(dirLight);

    const pointLight = new THREE.PointLight(0xffb3b3, 3, 50);
    pointLight.position.set(-10, -10, 10);
    scene.add(pointLight);

    // 3. Materials
    const sphereMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#ffb3b3'), // Soft Pink / Coral
      roughness: 0.2,
      metalness: 0.05,
      clearcoat: 0.4,
      clearcoatRoughness: 0.1,
    });

    const metallicCapMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#8a4427'), // Metallic Bronze / Copper
      metalness: 0.9,
      roughness: 0.2,
    });

    // 4. Create 40 Floating Spheres with Caps & Physics State
    const count = 42;
    interface SphereInstance {
      mesh: THREE.Group;
      sphereMesh: THREE.Mesh;
      velocity: THREE.Vector3;
      radius: number;
      initialPos: THREE.Vector3;
      isDragged: boolean;
      prevPosition: THREE.Vector3;
    }

    const sphereInstances: SphereInstance[] = [];
    const sphereGeo = new THREE.SphereGeometry(1, 32, 32);
    const capGeo = new THREE.BoxGeometry(0.35, 0.35, 0.35);

    for (let i = 0; i < count; i++) {
      const group = new THREE.Group();

      const radius = 0.7 + Math.random() * 1.3;

      const sphereMesh = new THREE.Mesh(sphereGeo, sphereMaterial);
      sphereMesh.scale.set(radius, radius, radius);
      sphereMesh.castShadow = true;
      sphereMesh.receiveShadow = true;
      group.add(sphereMesh);

      const capMesh = new THREE.Mesh(capGeo, metallicCapMaterial);
      capMesh.position.set(0, radius + 0.1, 0);
      capMesh.castShadow = true;
      group.add(capMesh);

      const pos = new THREE.Vector3(
        (Math.random() - 0.5) * 18,
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 10
      );
      group.position.copy(pos);

      scene.add(group);

      sphereInstances.push({
        mesh: group,
        sphereMesh,
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02
        ),
        radius,
        initialPos: pos.clone(),
        isDragged: false,
        prevPosition: pos.clone(),
      });
    }

    // 5. RAYCASTING INTERACTION: DRAG, TOSS, & IMPULSE SHOCKWAVE
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2(-999, -999);
    const dragPlane = new THREE.Plane();
    const planeIntersect = new THREE.Vector3();

    let draggedItem: SphereInstance | null = null;
    let dragOffset = new THREE.Vector3();

    const getRaycastIntersects = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / height) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);

      const meshes = sphereInstances.map((s) => s.sphereMesh);
      return raycaster.intersectObjects(meshes, false);
    };

    const handlePointerDown = (e: MouseEvent) => {
      const intersects = getRaycastIntersects(e);

      if (intersects.length > 0) {
        const clickedMesh = intersects[0].object;
        const item = sphereInstances.find((s) => s.sphereMesh === clickedMesh);

        if (item) {
          draggedItem = item;
          item.isDragged = true;
          item.velocity.set(0, 0, 0);

          // Define plane parallel to camera at item's Z depth
          dragPlane.setFromNormalAndCoplanarPoint(
            camera.getWorldDirection(new THREE.Vector3()).negate(),
            item.mesh.position
          );

          if (raycaster.ray.intersectPlane(dragPlane, planeIntersect)) {
            dragOffset.copy(item.mesh.position).sub(planeIntersect);
          }

          container.style.cursor = 'grabbing';
        }
      } else {
        // Empty space clicked -> Trigger 3D Shockwave Impulse
        raycaster.setFromCamera(mouse, camera);
        const impulseCenter = raycaster.ray.origin
          .clone()
          .add(raycaster.ray.direction.clone().multiplyScalar(20));

        sphereInstances.forEach((item) => {
          const dir = item.mesh.position.clone().sub(impulseCenter);
          const dist = dir.length();
          if (dist < 15) {
            const force = (15 - dist) * 0.05;
            item.velocity.add(dir.normalize().multiplyScalar(force));
          }
        });
      }
    };

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / height) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);

      if (draggedItem) {
        dragPlane.setFromNormalAndCoplanarPoint(
          camera.getWorldDirection(new THREE.Vector3()).negate(),
          draggedItem.mesh.position
        );

        if (raycaster.ray.intersectPlane(dragPlane, planeIntersect)) {
          const targetPos = planeIntersect.clone().add(dragOffset);
          // Calculate instant velocity vector for throwing
          draggedItem.velocity
            .copy(targetPos)
            .sub(draggedItem.mesh.position)
            .multiplyScalar(0.3);
          draggedItem.mesh.position.copy(targetPos);
        }
      } else {
        // Cursor hover feedback
        const intersects = getRaycastIntersects(e);
        if (intersects.length > 0) {
          container.style.cursor = 'grab';
        } else {
          container.style.cursor = 'default';
        }
      }
    };

    const handlePointerUp = () => {
      if (draggedItem) {
        draggedItem.isDragged = false;
        container.style.cursor = 'grab';
        draggedItem = null;
      }
    };

    container.addEventListener('mousedown', handlePointerDown);
    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('mouseup', handlePointerUp);

    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // 6. ANIMATION & PHYSICS SIMULATION LOOP (SPHERE COLLISIONS & BOUNCES)
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Sphere-to-Sphere Collision Resolution
      for (let i = 0; i < sphereInstances.length; i++) {
        for (let j = i + 1; j < sphereInstances.length; j++) {
          const s1 = sphereInstances[i];
          const s2 = sphereInstances[j];
          const dist = s1.mesh.position.distanceTo(s2.mesh.position);
          const minDist = s1.radius + s2.radius;

          if (dist < minDist && dist > 0) {
            const overlap = minDist - dist;
            const normal = s1.mesh.position.clone().sub(s2.mesh.position).normalize();

            // Push apart
            if (!s1.isDragged) s1.mesh.position.add(normal.clone().multiplyScalar(overlap * 0.5));
            if (!s2.isDragged) s2.mesh.position.sub(normal.clone().multiplyScalar(overlap * 0.5));

            // Elastic bounce velocities
            const relativeVelocity = s1.velocity.clone().sub(s2.velocity);
            const velAlongNormal = relativeVelocity.dot(normal);

            if (velAlongNormal < 0) {
              const impulse = normal.multiplyScalar(-1.5 * velAlongNormal);
              if (!s1.isDragged) s1.velocity.add(impulse);
              if (!s2.isDragged) s2.velocity.sub(impulse);
            }
          }
        }
      }

      // Update positions and velocities
      for (let i = 0; i < sphereInstances.length; i++) {
        const item = sphereInstances[i];
        const p = item.mesh.position;

        if (!item.isDragged) {
          // Floating turbulence
          p.x += Math.sin(elapsedTime * 0.8 + i) * 0.005;
          p.y += Math.cos(elapsedTime * 0.9 + i * 2) * 0.005;

          // Apply velocity momentum
          p.add(item.velocity);
          item.velocity.multiplyScalar(0.96); // Damping friction

          // Spring pull towards initial cluster center
          const distToCenter = p.distanceTo(item.initialPos);
          if (distToCenter > 12) {
            const pullForce = p.clone().sub(item.initialPos).multiplyScalar(-0.008);
            item.velocity.add(pullForce);
          }
        }

        // Slow 3D rotation
        item.mesh.rotation.x += 0.003;
        item.mesh.rotation.y += 0.005;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      container.removeEventListener('mousedown', handlePointerDown);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('mouseup', handlePointerUp);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // OTP Countdown timer
  useEffect(() => {
    let interval: any = null;
    if (showOtpModal && resendTimer > 0) {
      interval = setInterval(() => setResendTimer((prev) => prev - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [showOtpModal, resendTimer]);

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');
    setIsLoading(true);

    try {
      await login(username, password);
      navigate('/pos');
    } catch (err: any) {
      const backendMsg = err.response?.data?.message || err.response?.data;
      setErrorMessage(
        backendMsg || 'Đăng nhập không thành công. Bạn có thể bấm Đăng nhập Demo bên dưới!'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');
    setIsLoading(true);

    try {
      const res = await register(username, password, phoneNumber);
      setPendingPhone(phoneNumber);
      setResendTimer(60);
      setShowOtpModal(true);
      setSuccessMessage(res.message || 'Mã OTP đã được gửi! Vui lòng nhập OTP để xác thực.');
    } catch (err: any) {
      const backendMsg = err.response?.data?.message || err.response?.data;
      setErrorMessage(
        backendMsg || 'Đăng ký thất bại. Tên đăng nhập hoặc Số điện thoại có thể đã tồn tại.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleOtpDigitChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    const newDigits = [...otpDigits];
    newDigits[index] = value.slice(-1);
    setOtpDigits(newDigits);

    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otpDigits[index] && index > 0) {
      const prevInput = document.getElementById(`otp-input-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleVerifyOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const fullOtp = otpDigits.join('');
    if (fullOtp.length < 6) {
      setErrorMessage('Vui lòng nhập đủ 6 chữ số OTP.');
      return;
    }

    setErrorMessage('');
    setIsLoading(true);

    try {
      const res = await verifyOtp(pendingPhone, fullOtp);
      setShowOtpModal(false);
      setSuccessMessage(res.message || 'Xác thực OTP thành công! Bạn có thể đăng nhập ngay.');
      setActiveTab('login');
    } catch (err: any) {
      const backendMsg = err.response?.data?.message || err.response?.data;
      setErrorMessage(backendMsg || 'Mã OTP không hợp lệ hoặc đã hết hạn.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickDemoRole = (role: any) => {
    loginAsDemoRole(role);
    if (role === 'Kitchen') navigate('/kitchen');
    else if (role === 'Admin') navigate('/dashboard');
    else if (role === 'Warehouse') navigate('/inventory');
    else navigate('/pos');
  };

  return (
    <div className="relative min-h-screen bg-[#eef2f6] text-gray-900 font-sans overflow-hidden flex flex-col justify-between select-none">
      {/* 1. THREE.JS REAL-TIME FULLY INTERACTIVE DRAG & TOSS CANVAS */}
      <div ref={mountRef} className="absolute inset-0 z-0 w-full h-full pointer-events-auto" />

      {/* 2. POIMANDRES TOP NAVIGATION HEADER */}
      <header className="relative z-20 flex items-center justify-between px-8 py-6 pointer-events-none">
        <div className="flex items-center space-x-2 pointer-events-auto">
          <span className="text-2xl font-black tracking-tighter text-black uppercase font-mono">
            POIMANDRES
          </span>
          <span className="text-[10px] font-bold tracking-widest text-pink-600 bg-pink-100 px-2 py-0.5 rounded-full uppercase border border-pink-200">
            Interactive 3D Physics
          </span>
        </div>

        <div className="flex items-center space-x-6 text-xs font-bold text-gray-700 pointer-events-auto">
          <span className="hover:text-black cursor-pointer hidden sm:inline">Docs</span>
          <span className="hover:text-black cursor-pointer hidden sm:inline">Blog</span>
          <span className="hover:text-black cursor-pointer hidden sm:inline">Tags</span>
          <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-gray-300 shadow-md">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-[11px] font-extrabold text-gray-900 uppercase tracking-wider">
              BẤM & KÉO QUẢ CẦU 3D 🟢
            </span>
          </div>
        </div>
      </header>

      {/* 3. POIMANDRES MAIN LAYOUT WRAPPER */}
      <main className="relative z-20 flex-1 flex items-center justify-between px-6 sm:px-12 pointer-events-none">
        {/* Left Side Big Typography */}
        <div className="hidden lg:flex flex-col justify-between h-[420px] pointer-events-auto">
          <div>
            <div className="text-[11px] font-bold tracking-widest text-gray-500 uppercase">
              Stones, Metals and Gems
            </div>
            <div className="text-xs font-black text-gray-900 mt-0.5">A Universal Deity</div>
            <div className="w-6 h-0.5 bg-black mt-2" />
          </div>

          <div className="text-9xl font-black tracking-tighter text-black leading-none font-mono">
            X
          </div>

          <div>
            <div className="text-xs font-extrabold text-gray-900">Wonders of Antiquity</div>
            <div className="text-[11px] font-medium text-gray-500">Pythagorean Mathematics</div>
          </div>
        </div>

        {/* CENTER-RIGHT: Sleek High-End Glassmorphism Auth Card */}
        <div className="w-full max-w-md bg-white/85 backdrop-blur-2xl rounded-3xl p-7 border border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.08)] pointer-events-auto my-auto ml-auto">
          {/* Auth Tab Buttons */}
          <div className="flex p-1 bg-gray-100/90 rounded-2xl border border-gray-200/80 mb-5">
            <button
              type="button"
              onClick={() => {
                setActiveTab('login');
                setErrorMessage('');
                setSuccessMessage('');
              }}
              className={`flex-1 py-2.5 rounded-xl text-xs font-black tracking-wider transition-all duration-200 ${
                activeTab === 'login'
                  ? 'bg-black text-white shadow-md'
                  : 'text-gray-500 hover:text-black'
              }`}
            >
              ĐĂNG NHẬP
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveTab('register');
                setErrorMessage('');
                setSuccessMessage('');
              }}
              className={`flex-1 py-2.5 rounded-xl text-xs font-black tracking-wider transition-all duration-200 ${
                activeTab === 'register'
                  ? 'bg-black text-white shadow-md'
                  : 'text-gray-500 hover:text-black'
              }`}
            >
              ĐĂNG KÝ
            </button>
          </div>

          {/* Feedback Messages */}
          {errorMessage && (
            <div className="mb-4 flex items-start p-3 text-xs text-rose-800 bg-rose-50 rounded-2xl border border-rose-200 font-medium">
              <AlertCircle className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5 text-rose-600" />
              <span>{errorMessage}</span>
            </div>
          )}

          {successMessage && (
            <div className="mb-4 flex items-start p-3 text-xs text-emerald-800 bg-emerald-50 rounded-2xl border border-emerald-200 font-medium">
              <CheckCircle2 className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5 text-emerald-600" />
              <span>{successMessage}</span>
            </div>
          )}

          {/* LOGIN FORM */}
          {activeTab === 'login' ? (
            <form onSubmit={handleLoginSubmit} className="space-y-3.5">
              <div>
                <label className="block text-[11px] font-extrabold text-gray-700 mb-1 uppercase tracking-wider">
                  Tên Đăng Nhập / SĐT
                </label>
                <div className="relative">
                  <UserIcon className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="admin hoặc 0909123456"
                    className="w-full pl-10 pr-4 py-2.5 text-xs bg-gray-50/80 border border-gray-200 rounded-2xl text-gray-900 focus:bg-white focus:border-black focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-extrabold text-gray-700 mb-1 uppercase tracking-wider">
                  Mật Khẩu
                </label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Mật khẩu truy cập"
                    className="w-full pl-10 pr-10 py-2.5 text-xs bg-gray-50/80 border border-gray-200 rounded-2xl text-gray-900 focus:bg-white focus:border-black focus:outline-none transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-3 text-gray-400 hover:text-black"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="flex items-center justify-center w-full py-3 text-xs font-black text-white bg-black hover:bg-gray-800 rounded-2xl shadow-lg transition-all"
              >
                {isLoading ? 'ĐANG KẾT NỐI...' : 'ĐĂNG NHẬP NGAY'}
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </button>
            </form>
          ) : (
            /* REGISTER FORM */
            <form onSubmit={handleRegisterSubmit} className="space-y-3.5">
              <div>
                <label className="block text-[11px] font-extrabold text-gray-700 mb-1 uppercase tracking-wider">
                  Tên Đăng Nhập Mới
                </label>
                <div className="relative">
                  <UserIcon className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username mới"
                    className="w-full pl-10 pr-4 py-2.5 text-xs bg-gray-50/80 border border-gray-200 rounded-2xl text-gray-900 focus:bg-white focus:border-black focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-extrabold text-gray-700 mb-1 uppercase tracking-wider">
                  Số Điện Thoại (OTP)
                </label>
                <div className="relative">
                  <Smartphone className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
                  <input
                    type="tel"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="0909123456"
                    className="w-full pl-10 pr-4 py-2.5 text-xs bg-gray-50/80 border border-gray-200 rounded-2xl text-gray-900 focus:bg-white focus:border-black focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-extrabold text-gray-700 mb-1 uppercase tracking-wider">
                  Mật Khẩu
                </label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Mật khẩu"
                    className="w-full pl-10 pr-10 py-2.5 text-xs bg-gray-50/80 border border-gray-200 rounded-2xl text-gray-900 focus:bg-white focus:border-black focus:outline-none transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-3 text-gray-400 hover:text-black"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="flex items-center justify-center w-full py-3 text-xs font-black text-white bg-black hover:bg-gray-800 rounded-2xl shadow-lg transition-all"
              >
                {isLoading ? 'ĐANG KHỞI TẠO...' : 'TẠO TÀI KHOẢN & KHỞI TẠO OTP'}
              </button>
            </form>
          )}

          {/* Quick Demo Buttons */}
          <div className="mt-5 pt-4 border-t border-gray-100">
            <div className="flex items-center justify-between mb-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              <span>Đăng Nhập Xem Demo Nhanh:</span>
              <Sparkles className="w-3.5 h-3.5 text-pink-500" />
            </div>

            <div className="grid grid-cols-2 gap-1.5">
              <button
                type="button"
                onClick={() => handleQuickDemoRole('Admin')}
                className="py-1.5 px-2 bg-gray-100 hover:bg-black hover:text-white rounded-xl text-[11px] font-bold text-gray-800 transition-colors"
              >
                👑 Admin
              </button>
              <button
                type="button"
                onClick={() => handleQuickDemoRole('Cashier')}
                className="py-1.5 px-2 bg-gray-100 hover:bg-black hover:text-white rounded-xl text-[11px] font-bold text-gray-800 transition-colors"
              >
                💵 Thu Ngân (POS)
              </button>
              <button
                type="button"
                onClick={() => handleQuickDemoRole('Kitchen')}
                className="py-1.5 px-2 bg-gray-100 hover:bg-black hover:text-white rounded-xl text-[11px] font-bold text-gray-800 transition-colors"
              >
                🍳 Bếp (KDS)
              </button>
              <button
                type="button"
                onClick={() => handleQuickDemoRole('Warehouse')}
                className="py-1.5 px-2 bg-gray-100 hover:bg-black hover:text-white rounded-xl text-[11px] font-bold text-gray-800 transition-colors"
              >
                📦 Kho Hàng
              </button>
            </div>
          </div>
        </div>

        {/* Right Side Big Typography */}
        <div className="hidden xl:flex flex-col justify-between h-[420px] pointer-events-auto text-right">
          <div className="text-[11px] font-bold tracking-widest text-gray-400 uppercase">
            THE SUMMIT OF THE MANY
          </div>

          <div className="text-9xl font-black tracking-tighter text-black leading-none font-mono">
            _01
          </div>

          <div className="text-[11px] font-extrabold text-gray-400 space-x-2">
            <span className="hover:text-black cursor-pointer">pmnd.rs</span>
            <span>•</span>
            <span className="hover:text-black cursor-pointer">git</span>
            <span>•</span>
            <span className="hover:text-black cursor-pointer">csb</span>
          </div>
        </div>
      </main>

      {/* 4. POIMANDRES FOOTER */}
      <footer className="relative z-20 flex items-center justify-between px-8 py-4 text-[11px] font-bold text-gray-500 border-t border-gray-200/50 pointer-events-none">
        <div className="pointer-events-auto">THE SUMMIT OF THE MANY</div>
        <div className="flex items-center space-x-2 pointer-events-auto">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>F&B POS & Inventory System © 2026</span>
        </div>
      </footer>

      {/* 5. 6-DIGIT OTP VERIFICATION MODAL */}
      {showOtpModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md animate-in fade-in duration-200">
          <div className="w-full max-w-sm bg-white rounded-3xl p-6 shadow-2xl text-center relative border border-gray-100">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 bg-pink-50 text-pink-600 rounded-2xl">
              <KeyRound className="w-6 h-6" />
            </div>
            <h3 className="text-base font-black text-gray-900">XÁC THỰC MÃ OTP SĐT</h3>
            <p className="mt-1 text-xs text-gray-500">
              Nhập mã OTP 6 chữ số gửi tới <strong>{pendingPhone}</strong>
            </p>

            <form onSubmit={handleVerifyOtpSubmit} className="mt-5 space-y-4">
              <div className="flex justify-between items-center gap-1.5">
                {otpDigits.map((digit, idx) => (
                  <input
                    key={idx}
                    id={`otp-input-${idx}`}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpDigitChange(idx, e.target.value)}
                    onKeyDown={(e) => handleOtpKeyDown(idx, e)}
                    className="w-10 h-12 text-center text-lg font-black bg-gray-50 border border-gray-200 rounded-xl text-black focus:border-black focus:ring-2 focus:ring-black/10 focus:outline-none"
                  />
                ))}
              </div>

              <div className="flex space-x-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowOtpModal(false)}
                  className="flex-1 py-2.5 text-xs font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl"
                >
                  HỦY
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 py-2.5 text-xs font-black text-white bg-black hover:bg-gray-800 rounded-xl shadow-md"
                >
                  {isLoading ? '...' : 'XÁC THỰC'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
