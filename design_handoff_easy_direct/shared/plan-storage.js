/* ============================================================
   Easy-Direct 플랜 저장 / 사용자 정보 / 견적 (localStorage)
   ============================================================ */
window.ED = (function () {
  const K_PLANS = 'easydirect_plans';
  const K_USER  = 'easydirect_user';
  const K_QUOTE = 'easydirect_quote';
  const K_CART  = 'easydirect_cart';

  function read(k, fallback) {
    try { return JSON.parse(localStorage.getItem(k)) ?? fallback; }
    catch (e) { return fallback; }
  }
  function write(k, v) { localStorage.setItem(k, JSON.stringify(v)); }

  // ---- 사용자 정보 ----
  function getUser() {
    return read(K_USER, {
      name: '김이지', birth: '1989.03.21', gender: 'M', phone: '010-****-7821',
      job: '사무직', address: '서울시 강서구', loggedIn: false,
    });
  }
  function setUser(u) { write(K_USER, { ...getUser(), ...u }); }
  function login(provider) { setUser({ loggedIn: true, provider }); }
  function logout() { setUser({ loggedIn: false, provider: null }); }

  // ---- 플랜 저장 ----
  function getPlans() { return read(K_PLANS, []); }
  function savePlan(p) {
    const all = getPlans();
    const plan = { id: 'plan_' + Date.now(), createdAt: new Date().toISOString(), ...p };
    all.unshift(plan);
    write(K_PLANS, all);
    return plan;
  }
  function removePlan(id) {
    write(K_PLANS, getPlans().filter(p => p.id !== id));
  }

  // ---- 견적 (조회 정보) ----
  function getQuote() {
    return read(K_QUOTE, {
      birth: '1989.03.21', gender: 'M', job: '사무직', isSmoker: false,
      drivingYears: 8, hasChild: false, address: '서울 강서구',
    });
  }
  function setQuote(q) { write(K_QUOTE, { ...getQuote(), ...q }); }

  // ---- 장바구니 / 진행중 청약 ----
  function getCart() { return read(K_CART, []); }
  function addToCart(product) {
    const cart = getCart();
    if (!cart.find(c => c.id === product.id)) {
      cart.push(product); write(K_CART, cart);
    }
  }
  function clearCart() { write(K_CART, []); }

  // ---- 시드 (데모용 초기 플랜) ----
  function seedDemo() {
    if (getPlans().length === 0) {
      write(K_PLANS, [
        { id: 'plan_seed_1', name: '나만의 암 종합플랜', category: 'cancer',
          productIds: ['c1','c4'], premium: 106500,
          memo: '진단비 집중 + 5대암 1억',
          createdAt: '2026-06-12T10:00:00Z' },
        { id: 'plan_seed_2', name: '자녀 출생 대비 가족 플랜', category: 'medical',
          productIds: ['m1','h1'], premium: 98800,
          memo: '실손 + 종합건강 묶음',
          createdAt: '2026-06-20T15:30:00Z' },
      ]);
    }
  }

  return {
    getUser, setUser, login, logout,
    getPlans, savePlan, removePlan,
    getQuote, setQuote,
    getCart, addToCart, clearCart,
    seedDemo,
  };
})();

// 자동 시드
if (typeof window !== 'undefined') window.ED.seedDemo();
