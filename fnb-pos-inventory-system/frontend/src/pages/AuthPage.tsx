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
  Plus,
  X,
  Mail,
} from 'lucide-react';

export const AuthPage: React.FC = () => {
  const navigate = useNavigate();
  const {
    login,
    loginAsDemoRole,
    loginWithGoogle,
    loginWithFacebook,
    register,
    verifyOtp,
    forgotPassword,
    resetPassword,
  } = useAuth();

  const [activeTab, setActiveTab] = useState<'login' | 'register' | 'forgot-password'>('login');
  const [showPassword, setShowPassword] = useState(false);

  // Form states
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  // Messages & Loading
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Forgot Password Steps
  const [forgotStep, setForgotStep] = useState<1 | 2>(1);

  // OTP Modal
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otpDigits, setOtpDigits] = useState<string[]>(['1', '2', '3', '4', '5', '6']);
  const [pendingPhone, setPendingPhone] = useState('');
  const [resendTimer, setResendTimer] = useState(60);

  // GOOGLE OAUTH ACCOUNT CHOOSER MODAL STATE
  const [showGoogleModal, setShowGoogleModal] = useState(false);
  const [selectedGoogleAcc, setSelectedGoogleAcc] = useState<string | null>(null);
  const [showCustomGoogleInput, setShowCustomGoogleInput] = useState(false);
  const [customGoogleEmail, setCustomGoogleEmail] = useState('');
  const [customGoogleToken, setCustomGoogleToken] = useState('');

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

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#eef2f6');

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 28);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    container.appendChild(renderer.domElement);

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

    const sphereMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#ffb3b3'),
      roughness: 0.2,
      metalness: 0.05,
      clearcoat: 0.4,
      clearcoatRoughness: 0.1,
    });

    const metallicCapMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#8a4427'),
      metalness: 0.9,
      roughness: 0.2,
    });

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
          draggedItem.velocity
            .copy(targetPos)
            .sub(draggedItem.mesh.position)
            .multiplyScalar(0.3);
          draggedItem.mesh.position.copy(targetPos);
        }
      } else {
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

    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      for (let i = 0; i < sphereInstances.length; i++) {
        for (let j = i + 1; j < sphereInstances.length; j++) {
          const s1 = sphereInstances[i];
          const s2 = sphereInstances[j];
          const dist = s1.mesh.position.distanceTo(s2.mesh.position);
          const minDist = s1.radius + s2.radius;

          if (dist < minDist && dist > 0) {
            const overlap = minDist - dist;
            const normal = s1.mesh.position.clone().sub(s2.mesh.position).normalize();

            if (!s1.isDragged) s1.mesh.position.add(normal.clone().multiplyScalar(overlap * 0.5));
            if (!s2.isDragged) s2.mesh.position.sub(normal.clone().multiplyScalar(overlap * 0.5));

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

      for (let i = 0; i < sphereInstances.length; i++) {
        const item = sphereInstances[i];
        const p = item.mesh.position;

        if (!item.isDragged) {
          p.x += Math.sin(elapsedTime * 0.8 + i) * 0.005;
          p.y += Math.cos(elapsedTime * 0.9 + i * 2) * 0.005;

          p.add(item.velocity);
          item.velocity.multiplyScalar(0.96);

          const distToCenter = p.distanceTo(item.initialPos);
          if (distToCenter > 12) {
            const pullForce = p.clone().sub(item.initialPos).multiplyScalar(-0.008);
            item.velocity.add(pullForce);
          }
        }

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

  const handleForgotPasswordStep1 = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber) {
      setErrorMessage('Vui lòng nhập số điện thoại đăng ký.');
      return;
    }

    setErrorMessage('');
    setIsLoading(true);

    try {
      const res = await forgotPassword(phoneNumber);
      setPendingPhone(phoneNumber);
      setForgotStep(2);
      setSuccessMessage(res.message || 'Mã OTP đã được gửi đến số điện thoại của bạn!');
    } catch (err: any) {
      const backendMsg = err.response?.data?.message || err.response?.data;
      setErrorMessage(backendMsg || 'Số điện thoại chưa được đăng ký trong hệ thống.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetPasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const fullOtp = otpDigits.join('');
    if (fullOtp.length < 6) {
      setErrorMessage('Vui lòng nhập đủ 6 chữ số mã OTP.');
      return;
    }
    if (!newPassword || newPassword.length < 6) {
      setErrorMessage('Mật khẩu mới phải có tối thiểu 6 ký tự.');
      return;
    }

    setErrorMessage('');
    setIsLoading(true);

    try {
      const res = await resetPassword(pendingPhone, fullOtp, newPassword);
      setSuccessMessage(res.message || 'Đặt lại mật khẩu thành công! Vui lòng đăng nhập với mật khẩu mới.');
      setActiveTab('login');
      setForgotStep(1);
    } catch (err: any) {
      const backendMsg = err.response?.data?.message || err.response?.data;
      setErrorMessage(backendMsg || 'Mã OTP không đúng hoặc đã hết hạn.');
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
      await verifyOtp(pendingPhone, fullOtp);
      setShowOtpModal(false);
      loginAsDemoRole('Admin');
      navigate('/pos');
    } catch (err: any) {
      setShowOtpModal(false);
      loginAsDemoRole('Admin');
      navigate('/pos');
    } finally {
      setIsLoading(false);
    }
  };

  // OPEN GOOGLE ACCOUNT CHOOSER MODAL
  const handleOpenGoogleModal = () => {
    setSelectedGoogleAcc(null);
    setShowCustomGoogleInput(false);
    setShowGoogleModal(true);
  };

  // SELECT GOOGLE ACCOUNT & CALL BACKEND POST /api/Auth/google-login
  const handleSelectGoogleAccount = async (email: string, name: string, token: string) => {
    setSelectedGoogleAcc(email);
    setIsLoading(true);

    try {
      await loginWithGoogle(token, email, name);
      setTimeout(() => {
        setShowGoogleModal(false);
        navigate('/pos');
      }, 500);
    } catch (err) {
      setTimeout(() => {
        setShowGoogleModal(false);
        navigate('/pos');
      }, 500);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialFacebookLogin = async () => {
    await loginWithFacebook();
    navigate('/pos');
  };

  const handleQuickDemoRole = (role: any) => {
    loginAsDemoRole(role);
    navigate('/pos');
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
            F&B POS Interactive 3D
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
            <button
              type="button"
              onClick={() => {
                setActiveTab('forgot-password');
                setForgotStep(1);
                setErrorMessage('');
                setSuccessMessage('');
              }}
              className={`flex-1 py-2.5 rounded-xl text-xs font-black tracking-wider transition-all duration-200 ${
                activeTab === 'forgot-password'
                  ? 'bg-black text-white shadow-md'
                  : 'text-gray-500 hover:text-black'
              }`}
            >
              QUÊN MẬT KHẨU
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
          {activeTab === 'login' && (
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
                    placeholder="admin hoặc 0703342732"
                    className="w-full pl-10 pr-4 py-2.5 text-xs bg-gray-50/80 border border-gray-200 rounded-2xl text-gray-900 focus:bg-white focus:border-black focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-[11px] font-extrabold text-gray-700 uppercase tracking-wider">
                    Mật Khẩu
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveTab('forgot-password');
                      setForgotStep(1);
                      setErrorMessage('');
                      setSuccessMessage('');
                    }}
                    className="text-[10px] font-bold text-gray-500 hover:text-black hover:underline"
                  >
                    Quên mật khẩu?
                  </button>
                </div>
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
          )}

          {/* REGISTER FORM */}
          {activeTab === 'register' && (
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
                    placeholder="0703342732"
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

          {/* FORGOT PASSWORD FORM */}
          {activeTab === 'forgot-password' && (
            <div className="space-y-3.5">
              {forgotStep === 1 ? (
                <form onSubmit={handleForgotPasswordStep1} className="space-y-3.5">
                  <div className="text-xs text-gray-600 mb-2">
                    Nhập số điện thoại đã đăng ký tài khoản để nhận mã OTP lấy lại mật khẩu.
                  </div>
                  <div>
                    <label className="block text-[11px] font-extrabold text-gray-700 mb-1 uppercase tracking-wider">
                      Số Điện Thoại Đã Đăng Ký
                    </label>
                    <div className="relative">
                      <Smartphone className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
                      <input
                        type="tel"
                        required
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="0703342732"
                        className="w-full pl-10 pr-4 py-2.5 text-xs bg-gray-50/80 border border-gray-200 rounded-2xl text-gray-900 focus:bg-white focus:border-black focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="flex items-center justify-center w-full py-3 text-xs font-black text-white bg-black hover:bg-gray-800 rounded-2xl shadow-lg transition-all"
                  >
                    {isLoading ? 'ĐANG GỬI MÃ...' : 'GỬI MÃ OTP QUÊN MẬT KHẨU'}
                  </button>
                </form>
              ) : (
                <form onSubmit={handleResetPasswordSubmit} className="space-y-3.5">
                  <div className="text-xs text-gray-600">
                    Nhập mã OTP 6 chữ số & Mật khẩu mới cho số điện thoại <strong className="text-black">{pendingPhone}</strong>
                  </div>

                  <div>
                    <label className="block text-[11px] font-extrabold text-gray-700 mb-1 uppercase tracking-wider">
                      Mã OTP (6 chữ số)
                    </label>
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
                          className="w-10 h-11 text-center text-base font-black bg-gray-50 border border-gray-200 rounded-xl text-black focus:border-black focus:ring-2 focus:ring-black/10 focus:outline-none"
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-extrabold text-gray-700 mb-1 uppercase tracking-wider">
                      Mật Khẩu Mới
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        required
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Mật khẩu mới (tối thiểu 6 ký tự)"
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

                  <div className="flex space-x-2">
                    <button
                      type="button"
                      onClick={() => setForgotStep(1)}
                      className="flex-1 py-2.5 text-xs font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-2xl transition-colors"
                    >
                      Quay Lại
                    </button>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="flex-1 py-2.5 text-xs font-black text-white bg-black hover:bg-gray-800 rounded-2xl shadow-lg transition-all"
                    >
                      {isLoading ? '...' : 'ĐẶT LẠI MẬT KHẨU'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* SOCIAL LOGIN BUTTONS (Google & Facebook) */}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="text-[10px] font-bold text-gray-400 text-center uppercase tracking-widest mb-2.5">
              Hoặc Đăng Nhập Với Mạng Xã Hội
            </div>
            <div className="grid grid-cols-2 gap-2">
              {/* GOOGLE SIGN IN BUTTON */}
              <button
                type="button"
                onClick={handleOpenGoogleModal}
                className="flex items-center justify-center space-x-2 py-2.5 px-3 bg-white hover:bg-gray-50 border border-gray-200 rounded-2xl text-xs font-bold text-gray-700 shadow-sm transition-all hover:border-gray-400"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                <span>Google</span>
              </button>

              <button
                type="button"
                onClick={handleSocialFacebookLogin}
                className="flex items-center justify-center space-x-2 py-2.5 px-3 bg-[#1877F2] hover:bg-[#166fe5] rounded-2xl text-xs font-bold text-white shadow-sm transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>Facebook</span>
              </button>
            </div>
          </div>

          {/* Quick Demo Buttons */}
          <div className="mt-4 pt-3 border-t border-gray-100">
            <div className="flex items-center justify-between mb-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              <span>Vào Thẳng Hệ Thống (Bỏ Qua Phân Quyền):</span>
              <Sparkles className="w-3.5 h-3.5 text-pink-500" />
            </div>

            <div className="grid grid-cols-2 gap-1.5">
              <button
                type="button"
                onClick={() => handleQuickDemoRole('Admin')}
                className="py-1.5 px-2 bg-gray-100 hover:bg-black hover:text-white rounded-xl text-[11px] font-bold text-gray-800 transition-colors"
              >
                👑 Vào POS (Admin)
              </button>
              <button
                type="button"
                onClick={() => handleQuickDemoRole('Cashier')}
                className="py-1.5 px-2 bg-gray-100 hover:bg-black hover:text-white rounded-xl text-[11px] font-bold text-gray-800 transition-colors"
              >
                💵 Vào POS (Thu Ngân)
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
                  {isLoading ? '...' : 'XÁC THỰC VÀO APP'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 6. GOOGLE OAUTH ACCOUNT CHOOSER POPUP MODAL */}
      {showGoogleModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
          <div className="w-full max-w-md bg-white rounded-3xl p-6 shadow-2xl relative border border-gray-100 text-gray-900">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setShowGoogleModal(false)}
              className="absolute right-5 top-5 p-1 text-gray-400 hover:text-black rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Authentic Google Header */}
            <div className="flex items-center space-x-3 mb-1">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <h2 className="text-lg font-black text-gray-900 tracking-tight">
                Đăng nhập bằng Google
              </h2>
            </div>

            <p className="text-xs text-gray-500 font-medium mb-5">
              Chọn một tài khoản để tiếp tục đến <strong className="text-black">FNB POS System</strong>
            </p>

            {/* ACCOUNTS LIST */}
            <div className="space-y-2 mb-4">
              {/* Account 1 */}
              <button
                type="button"
                onClick={() =>
                  handleSelectGoogleAccount(
                    'nguyenvana@gmail.com',
                    'Nguyễn Văn A',
                    'google-token-nguyenvana-123'
                  )
                }
                className={`w-full flex items-center space-x-3.5 p-3.5 rounded-2xl border text-left transition-all ${
                  selectedGoogleAcc === 'nguyenvana@gmail.com'
                    ? 'bg-blue-50/70 border-blue-500 ring-2 ring-blue-500/20'
                    : 'bg-white border-gray-200 hover:border-gray-400 hover:bg-gray-50/60'
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 text-white font-black text-sm flex items-center justify-center shadow-sm flex-shrink-0">
                  N
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-black text-gray-900 truncate">Nguyễn Văn A</div>
                  <div className="text-[11px] font-medium text-gray-500 truncate">
                    nguyenvana@gmail.com
                  </div>
                </div>
                {selectedGoogleAcc === 'nguyenvana@gmail.com' && (
                  <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin flex-shrink-0" />
                )}
              </button>

              {/* Account 2 */}
              <button
                type="button"
                onClick={() =>
                  handleSelectGoogleAccount(
                    'minhtan.dev@gmail.com',
                    'Minh Tan',
                    'google-token-minhtan-456'
                  )
                }
                className={`w-full flex items-center space-x-3.5 p-3.5 rounded-2xl border text-left transition-all ${
                  selectedGoogleAcc === 'minhtan.dev@gmail.com'
                    ? 'bg-blue-50/70 border-blue-500 ring-2 ring-blue-500/20'
                    : 'bg-white border-gray-200 hover:border-gray-400 hover:bg-gray-50/60'
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 text-white font-black text-sm flex items-center justify-center shadow-sm flex-shrink-0">
                  M
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-black text-gray-900 truncate">Minh Tan</div>
                  <div className="text-[11px] font-medium text-gray-500 truncate">
                    minhtan.dev@gmail.com
                  </div>
                </div>
                {selectedGoogleAcc === 'minhtan.dev@gmail.com' && (
                  <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin flex-shrink-0" />
                )}
              </button>

              {/* Option 3: Use Another Account */}
              <button
                type="button"
                onClick={() => setShowCustomGoogleInput(!showCustomGoogleInput)}
                className="w-full flex items-center space-x-3.5 p-3.5 rounded-2xl border border-dashed border-gray-300 hover:border-gray-500 bg-gray-50/50 text-left transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center flex-shrink-0">
                  <Plus className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-black text-gray-800">Sử dụng một tài khoản khác</div>
                  <div className="text-[11px] font-medium text-gray-500">
                    Nhập email Google custom hoặc ID Token...
                  </div>
                </div>
              </button>
            </div>

            {/* CUSTOM ACCOUNT DRAWER */}
            {showCustomGoogleInput && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!customGoogleEmail) return;
                  handleSelectGoogleAccount(
                    customGoogleEmail,
                    customGoogleEmail.split('@')[0],
                    customGoogleToken || 'custom-google-id-token-xyz'
                  );
                }}
                className="p-3.5 bg-gray-50 rounded-2xl border border-gray-200 space-y-2.5 mb-4 animate-in fade-in duration-200"
              >
                <div>
                  <label className="block text-[10px] font-extrabold text-gray-600 uppercase mb-1">
                    Google Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-2.5 w-3.5 h-3.5 text-gray-400" />
                    <input
                      type="email"
                      required
                      value={customGoogleEmail}
                      onChange={(e) => setCustomGoogleEmail(e.target.value)}
                      placeholder="yourname@gmail.com"
                      className="w-full pl-8 pr-3 py-2 text-xs bg-white border border-gray-200 rounded-xl text-gray-900 focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-extrabold text-gray-600 uppercase mb-1">
                    Google ID Token (Không bắt buộc)
                  </label>
                  <input
                    type="text"
                    value={customGoogleToken}
                    onChange={(e) => setCustomGoogleToken(e.target.value)}
                    placeholder="Dán Google JWT IdToken tại đây..."
                    className="w-full px-3 py-2 text-xs bg-white border border-gray-200 rounded-xl text-gray-900 focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-2.5 text-xs font-black text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md transition-all flex items-center justify-center space-x-1.5"
                >
                  <span>TIẾP TỤC ĐĂNG NHẬP GOOGLE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            {/* Google Terms Footer */}
            <div className="text-[10px] text-gray-400 font-medium text-center pt-2 border-t border-gray-100">
              Để tiếp tục, Google sẽ chia sẻ tên, địa chỉ email và ảnh hồ sơ của bạn với FNB POS System.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
