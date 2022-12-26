function Np(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const l in r)
        if (l !== 'default' && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o &&
            Object.defineProperty(e, l, o.get ? o : { enumerable: !0, get: () => r[l] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }));
}
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === 'childList')
        for (const i of o.addedNodes)
          i.tagName === 'LINK' && i.rel === 'modulepreload' && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerpolicy && (o.referrerPolicy = l.referrerpolicy),
      l.crossorigin === 'use-credentials'
        ? (o.credentials = 'include')
        : l.crossorigin === 'anonymous'
        ? (o.credentials = 'omit')
        : (o.credentials = 'same-origin'),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function Ip(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var uo = {},
  Fp = {
    get exports() {
      return uo;
    },
    set exports(e) {
      uo = e;
    },
  },
  jo = {},
  O = {},
  $p = {
    get exports() {
      return O;
    },
    set exports(e) {
      O = e;
    },
  },
  ee = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var El = Symbol.for('react.element'),
  jp = Symbol.for('react.portal'),
  Bp = Symbol.for('react.fragment'),
  Up = Symbol.for('react.strict_mode'),
  bp = Symbol.for('react.profiler'),
  Hp = Symbol.for('react.provider'),
  Wp = Symbol.for('react.context'),
  Vp = Symbol.for('react.forward_ref'),
  Gp = Symbol.for('react.suspense'),
  Qp = Symbol.for('react.memo'),
  Yp = Symbol.for('react.lazy'),
  qu = Symbol.iterator;
function Kp(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (qu && e[qu]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var Uc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  bc = Object.assign,
  Hc = {};
function Er(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = Hc), (this.updater = n || Uc);
}
Er.prototype.isReactComponent = {};
Er.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
Er.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Wc() {}
Wc.prototype = Er.prototype;
function Ya(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = Hc), (this.updater = n || Uc);
}
var Ka = (Ya.prototype = new Wc());
Ka.constructor = Ya;
bc(Ka, Er.prototype);
Ka.isPureReactComponent = !0;
var es = Array.isArray,
  Vc = Object.prototype.hasOwnProperty,
  Xa = { current: null },
  Gc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Qc(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = '' + t.key), t))
      Vc.call(t, r) && !Gc.hasOwnProperty(r) && (l[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) l.children = n;
  else if (1 < a) {
    for (var u = Array(a), c = 0; c < a; c++) u[c] = arguments[c + 2];
    l.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) l[r] === void 0 && (l[r] = a[r]);
  return { $$typeof: El, type: e, key: o, ref: i, props: l, _owner: Xa.current };
}
function Xp(e, t) {
  return {
    $$typeof: El,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Ja(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === El;
}
function Jp(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ts = /\/+/g;
function gi(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? Jp('' + e.key)
    : t.toString(36);
}
function Kl(e, t, n, r, l) {
  var o = typeof e;
  (o === 'undefined' || o === 'boolean') && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case 'string':
      case 'number':
        i = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case El:
          case jp:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === '' ? '.' + gi(i, 0) : r),
      es(l)
        ? ((n = ''),
          e != null && (n = e.replace(ts, '$&/') + '/'),
          Kl(l, t, n, '', function (c) {
            return c;
          }))
        : l != null &&
          (Ja(l) &&
            (l = Xp(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ''
                  : ('' + l.key).replace(ts, '$&/') + '/') +
                e,
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === '' ? '.' : r + ':'), es(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var u = r + gi(o, a);
      i += Kl(o, t, n, u, l);
    }
  else if (((u = Kp(e)), typeof u == 'function'))
    for (e = u.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (u = r + gi(o, a++)), (i += Kl(o, t, n, u, l));
  else if (o === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.',
      ))
    );
  return i;
}
function Al(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Kl(e, r, '', '', function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function Zp(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Je = { current: null },
  Xl = { transition: null },
  qp = { ReactCurrentDispatcher: Je, ReactCurrentBatchConfig: Xl, ReactCurrentOwner: Xa };
ee.Children = {
  map: Al,
  forEach: function (e, t, n) {
    Al(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Al(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Al(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ja(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.',
      );
    return e;
  },
};
ee.Component = Er;
ee.Fragment = Bp;
ee.Profiler = bp;
ee.PureComponent = Ya;
ee.StrictMode = Up;
ee.Suspense = Gp;
ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = qp;
ee.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.',
    );
  var r = bc({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = Xa.current)),
      t.key !== void 0 && (l = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (u in t)
      Vc.call(t, u) &&
        !Gc.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var c = 0; c < u; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: El, type: e.type, key: l, ref: o, props: r, _owner: i };
};
ee.createContext = function (e) {
  return (
    (e = {
      $$typeof: Wp,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Hp, _context: e }),
    (e.Consumer = e)
  );
};
ee.createElement = Qc;
ee.createFactory = function (e) {
  var t = Qc.bind(null, e);
  return (t.type = e), t;
};
ee.createRef = function () {
  return { current: null };
};
ee.forwardRef = function (e) {
  return { $$typeof: Vp, render: e };
};
ee.isValidElement = Ja;
ee.lazy = function (e) {
  return { $$typeof: Yp, _payload: { _status: -1, _result: e }, _init: Zp };
};
ee.memo = function (e, t) {
  return { $$typeof: Qp, type: e, compare: t === void 0 ? null : t };
};
ee.startTransition = function (e) {
  var t = Xl.transition;
  Xl.transition = {};
  try {
    e();
  } finally {
    Xl.transition = t;
  }
};
ee.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
ee.useCallback = function (e, t) {
  return Je.current.useCallback(e, t);
};
ee.useContext = function (e) {
  return Je.current.useContext(e);
};
ee.useDebugValue = function () {};
ee.useDeferredValue = function (e) {
  return Je.current.useDeferredValue(e);
};
ee.useEffect = function (e, t) {
  return Je.current.useEffect(e, t);
};
ee.useId = function () {
  return Je.current.useId();
};
ee.useImperativeHandle = function (e, t, n) {
  return Je.current.useImperativeHandle(e, t, n);
};
ee.useInsertionEffect = function (e, t) {
  return Je.current.useInsertionEffect(e, t);
};
ee.useLayoutEffect = function (e, t) {
  return Je.current.useLayoutEffect(e, t);
};
ee.useMemo = function (e, t) {
  return Je.current.useMemo(e, t);
};
ee.useReducer = function (e, t, n) {
  return Je.current.useReducer(e, t, n);
};
ee.useRef = function (e) {
  return Je.current.useRef(e);
};
ee.useState = function (e) {
  return Je.current.useState(e);
};
ee.useSyncExternalStore = function (e, t, n) {
  return Je.current.useSyncExternalStore(e, t, n);
};
ee.useTransition = function () {
  return Je.current.useTransition();
};
ee.version = '18.2.0';
(function (e) {
  e.exports = ee;
})($p);
const s = Ip(O),
  Qi = Np({ __proto__: null, default: s }, [O]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var eh = O,
  th = Symbol.for('react.element'),
  nh = Symbol.for('react.fragment'),
  rh = Object.prototype.hasOwnProperty,
  lh = eh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  oh = { key: !0, ref: !0, __self: !0, __source: !0 };
function Yc(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = '' + n),
    t.key !== void 0 && (o = '' + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) rh.call(t, r) && !oh.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: th, type: e, key: o, ref: i, props: l, _owner: lh.current };
}
jo.Fragment = nh;
jo.jsx = Yc;
jo.jsxs = Yc;
(function (e) {
  e.exports = jo;
})(Fp);
const Y = uo.jsx,
  Dt = uo.jsxs;
var Yi = {},
  ih = {
    get exports() {
      return Yi;
    },
    set exports(e) {
      Yi = e;
    },
  },
  st = {},
  Ki = {},
  ah = {
    get exports() {
      return Ki;
    },
    set exports(e) {
      Ki = e;
    },
  },
  Kc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(M, V) {
    var G = M.length;
    M.push(V);
    e: for (; 0 < G; ) {
      var ie = (G - 1) >>> 1,
        L = M[ie];
      if (0 < l(L, V)) (M[ie] = V), (M[G] = L), (G = ie);
      else break e;
    }
  }
  function n(M) {
    return M.length === 0 ? null : M[0];
  }
  function r(M) {
    if (M.length === 0) return null;
    var V = M[0],
      G = M.pop();
    if (G !== V) {
      M[0] = G;
      e: for (var ie = 0, L = M.length, I = L >>> 1; ie < I; ) {
        var F = 2 * (ie + 1) - 1,
          H = M[F],
          S = F + 1,
          Z = M[S];
        if (0 > l(H, G))
          S < L && 0 > l(Z, H)
            ? ((M[ie] = Z), (M[S] = G), (ie = S))
            : ((M[ie] = H), (M[F] = G), (ie = F));
        else if (S < L && 0 > l(Z, G)) (M[ie] = Z), (M[S] = G), (ie = S);
        else break e;
      }
    }
    return V;
  }
  function l(M, V) {
    var G = M.sortIndex - V.sortIndex;
    return G !== 0 ? G : M.id - V.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      a = i.now();
    e.unstable_now = function () {
      return i.now() - a;
    };
  }
  var u = [],
    c = [],
    h = 1,
    m = null,
    d = 3,
    v = !1,
    w = !1,
    y = !1,
    _ = typeof setTimeout == 'function' ? setTimeout : null,
    p = typeof clearTimeout == 'function' ? clearTimeout : null,
    f = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(M) {
    for (var V = n(c); V !== null; ) {
      if (V.callback === null) r(c);
      else if (V.startTime <= M) r(c), (V.sortIndex = V.expirationTime), t(u, V);
      else break;
      V = n(c);
    }
  }
  function E(M) {
    if (((y = !1), g(M), !w))
      if (n(u) !== null) (w = !0), yt(C);
      else {
        var V = n(c);
        V !== null && Fe(E, V.startTime - M);
      }
  }
  function C(M, V) {
    (w = !1), y && ((y = !1), p(T), (T = -1)), (v = !0);
    var G = d;
    try {
      for (g(V), m = n(u); m !== null && (!(m.expirationTime > V) || (M && !Pe())); ) {
        var ie = m.callback;
        if (typeof ie == 'function') {
          (m.callback = null), (d = m.priorityLevel);
          var L = ie(m.expirationTime <= V);
          (V = e.unstable_now()),
            typeof L == 'function' ? (m.callback = L) : m === n(u) && r(u),
            g(V);
        } else r(u);
        m = n(u);
      }
      if (m !== null) var I = !0;
      else {
        var F = n(c);
        F !== null && Fe(E, F.startTime - V), (I = !1);
      }
      return I;
    } finally {
      (m = null), (d = G), (v = !1);
    }
  }
  var z = !1,
    N = null,
    T = -1,
    J = 5,
    b = -1;
  function Pe() {
    return !(e.unstable_now() - b < J);
  }
  function xe() {
    if (N !== null) {
      var M = e.unstable_now();
      b = M;
      var V = !0;
      try {
        V = N(!0, M);
      } finally {
        V ? Oe() : ((z = !1), (N = null));
      }
    } else z = !1;
  }
  var Oe;
  if (typeof f == 'function')
    Oe = function () {
      f(xe);
    };
  else if (typeof MessageChannel < 'u') {
    var se = new MessageChannel(),
      Ee = se.port2;
    (se.port1.onmessage = xe),
      (Oe = function () {
        Ee.postMessage(null);
      });
  } else
    Oe = function () {
      _(xe, 0);
    };
  function yt(M) {
    (N = M), z || ((z = !0), Oe());
  }
  function Fe(M, V) {
    T = _(function () {
      M(e.unstable_now());
    }, V);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (M) {
      M.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || v || ((w = !0), yt(C));
    }),
    (e.unstable_forceFrameRate = function (M) {
      0 > M || 125 < M
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
          )
        : (J = 0 < M ? Math.floor(1e3 / M) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (M) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var V = 3;
          break;
        default:
          V = d;
      }
      var G = d;
      d = V;
      try {
        return M();
      } finally {
        d = G;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (M, V) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var G = d;
      d = M;
      try {
        return V();
      } finally {
        d = G;
      }
    }),
    (e.unstable_scheduleCallback = function (M, V, G) {
      var ie = e.unstable_now();
      switch (
        (typeof G == 'object' && G !== null
          ? ((G = G.delay), (G = typeof G == 'number' && 0 < G ? ie + G : ie))
          : (G = ie),
        M)
      ) {
        case 1:
          var L = -1;
          break;
        case 2:
          L = 250;
          break;
        case 5:
          L = 1073741823;
          break;
        case 4:
          L = 1e4;
          break;
        default:
          L = 5e3;
      }
      return (
        (L = G + L),
        (M = {
          id: h++,
          callback: V,
          priorityLevel: M,
          startTime: G,
          expirationTime: L,
          sortIndex: -1,
        }),
        G > ie
          ? ((M.sortIndex = G),
            t(c, M),
            n(u) === null &&
              M === n(c) &&
              (y ? (p(T), (T = -1)) : (y = !0), Fe(E, G - ie)))
          : ((M.sortIndex = L), t(u, M), w || v || ((w = !0), yt(C))),
        M
      );
    }),
    (e.unstable_shouldYield = Pe),
    (e.unstable_wrapCallback = function (M) {
      var V = d;
      return function () {
        var G = d;
        d = V;
        try {
          return M.apply(this, arguments);
        } finally {
          d = G;
        }
      };
    });
})(Kc);
(function (e) {
  e.exports = Kc;
})(ah);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xc = O,
  ut = Ki;
function R(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var Jc = new Set(),
  Zr = {};
function $n(e, t) {
  dr(e, t), dr(e + 'Capture', t);
}
function dr(e, t) {
  for (Zr[e] = t, e = 0; e < t.length; e++) Jc.add(t[e]);
}
var Vt = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Xi = Object.prototype.hasOwnProperty,
  uh =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ns = {},
  rs = {};
function sh(e) {
  return Xi.call(rs, e)
    ? !0
    : Xi.call(ns, e)
    ? !1
    : uh.test(e)
    ? (rs[e] = !0)
    : ((ns[e] = !0), !1);
}
function ch(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function dh(e, t, n, r) {
  if (t === null || typeof t > 'u' || ch(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ze(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var be = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    be[e] = new Ze(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  be[t] = new Ze(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  be[e] = new Ze(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(
  function (e) {
    be[e] = new Ze(e, 2, !1, e, null, !1, !1);
  },
);
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    be[e] = new Ze(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  be[e] = new Ze(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  be[e] = new Ze(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  be[e] = new Ze(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  be[e] = new Ze(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Za = /[\-:]([a-z])/g;
function qa(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Za, qa);
    be[t] = new Ze(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Za, qa);
    be[t] = new Ze(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Za, qa);
  be[t] = new Ze(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  be[e] = new Ze(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
be.xlinkHref = new Ze(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1,
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  be[e] = new Ze(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function eu(e, t, n, r) {
  var l = be.hasOwnProperty(t) ? be[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (dh(t, n, l, r) && (n = null),
    r || l === null
      ? sh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : '') : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Kt = Xc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Dl = Symbol.for('react.element'),
  Wn = Symbol.for('react.portal'),
  Vn = Symbol.for('react.fragment'),
  tu = Symbol.for('react.strict_mode'),
  Ji = Symbol.for('react.profiler'),
  Zc = Symbol.for('react.provider'),
  qc = Symbol.for('react.context'),
  nu = Symbol.for('react.forward_ref'),
  Zi = Symbol.for('react.suspense'),
  qi = Symbol.for('react.suspense_list'),
  ru = Symbol.for('react.memo'),
  Jt = Symbol.for('react.lazy'),
  ed = Symbol.for('react.offscreen'),
  ls = Symbol.iterator;
function _r(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (ls && e[ls]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var we = Object.assign,
  vi;
function Ir(e) {
  if (vi === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      vi = (t && t[1]) || '';
    }
  return (
    `
` +
    vi +
    e
  );
}
var yi = !1;
function wi(e, t) {
  if (!e || yi) return '';
  yi = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == 'string') {
      for (
        var l = c.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          a = o.length - 1;
        1 <= i && 0 <= a && l[i] !== o[a];

      )
        a--;
      for (; 1 <= i && 0 <= a; i--, a--)
        if (l[i] !== o[a]) {
          if (i !== 1 || a !== 1)
            do
              if ((i--, a--, 0 > a || l[i] !== o[a])) {
                var u =
                  `
` + l[i].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    u.includes('<anonymous>') &&
                    (u = u.replace('<anonymous>', e.displayName)),
                  u
                );
              }
            while (1 <= i && 0 <= a);
          break;
        }
    }
  } finally {
    (yi = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? Ir(e) : '';
}
function fh(e) {
  switch (e.tag) {
    case 5:
      return Ir(e.type);
    case 16:
      return Ir('Lazy');
    case 13:
      return Ir('Suspense');
    case 19:
      return Ir('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = wi(e.type, !1)), e;
    case 11:
      return (e = wi(e.type.render, !1)), e;
    case 1:
      return (e = wi(e.type, !0)), e;
    default:
      return '';
  }
}
function ea(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case Vn:
      return 'Fragment';
    case Wn:
      return 'Portal';
    case Ji:
      return 'Profiler';
    case tu:
      return 'StrictMode';
    case Zi:
      return 'Suspense';
    case qi:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case qc:
        return (e.displayName || 'Context') + '.Consumer';
      case Zc:
        return (e._context.displayName || 'Context') + '.Provider';
      case nu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case ru:
        return (t = e.displayName || null), t !== null ? t : ea(e.type) || 'Memo';
      case Jt:
        (t = e._payload), (e = e._init);
        try {
          return ea(e(t));
        } catch {}
    }
  return null;
}
function ph(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return ea(t);
    case 8:
      return t === tu ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function hn(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function td(e) {
  var t = e.type;
  return (
    (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio')
  );
}
function hh(e) {
  var t = td(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = '' + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = '' + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ll(e) {
  e._valueTracker || (e._valueTracker = hh(e));
}
function nd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = td(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function so(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ta(e, t) {
  var n = t.checked;
  return we({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function os(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = hn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
    });
}
function rd(e, t) {
  (t = t.checked), t != null && eu(e, 'checked', t, !1);
}
function na(e, t) {
  rd(e, t);
  var n = hn(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? ra(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && ra(e, t.type, hn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function is(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (!((r !== 'submit' && r !== 'reset') || (t.value !== void 0 && t.value !== null)))
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function ra(e, t, n) {
  (t !== 'number' || so(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Fr = Array.isArray;
function lr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + hn(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function la(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(R(91));
  return we({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function as(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(R(92));
      if (Fr(n)) {
        if (1 < n.length) throw Error(R(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: hn(n) };
}
function ld(e, t) {
  var n = hn(t.value),
    r = hn(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function us(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function od(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function oa(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? od(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var zl,
  id = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        zl = zl || document.createElement('div'),
          zl.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = zl.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function qr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ur = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  mh = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Ur).forEach(function (e) {
  mh.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ur[t] = Ur[e]);
  });
});
function ad(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (Ur.hasOwnProperty(e) && Ur[e])
    ? ('' + t).trim()
    : t + 'px';
}
function ud(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        l = ad(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var gh = we(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function ia(e, t) {
  if (t) {
    if (gh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(R(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(R(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(R(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(R(62));
  }
}
function aa(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var ua = null;
function lu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var sa = null,
  or = null,
  ir = null;
function ss(e) {
  if ((e = kl(e))) {
    if (typeof sa != 'function') throw Error(R(280));
    var t = e.stateNode;
    t && ((t = Wo(t)), sa(e.stateNode, e.type, t));
  }
}
function sd(e) {
  or ? (ir ? ir.push(e) : (ir = [e])) : (or = e);
}
function cd() {
  if (or) {
    var e = or,
      t = ir;
    if (((ir = or = null), ss(e), t)) for (e = 0; e < t.length; e++) ss(t[e]);
  }
}
function dd(e, t) {
  return e(t);
}
function fd() {}
var Ei = !1;
function pd(e, t, n) {
  if (Ei) return e(t, n);
  Ei = !0;
  try {
    return dd(e, t, n);
  } finally {
    (Ei = !1), (or !== null || ir !== null) && (fd(), cd());
  }
}
function el(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Wo(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(R(231, t, typeof n));
  return n;
}
var ca = !1;
if (Vt)
  try {
    var Rr = {};
    Object.defineProperty(Rr, 'passive', {
      get: function () {
        ca = !0;
      },
    }),
      window.addEventListener('test', Rr, Rr),
      window.removeEventListener('test', Rr, Rr);
  } catch {
    ca = !1;
  }
function vh(e, t, n, r, l, o, i, a, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (h) {
    this.onError(h);
  }
}
var br = !1,
  co = null,
  fo = !1,
  da = null,
  yh = {
    onError: function (e) {
      (br = !0), (co = e);
    },
  };
function wh(e, t, n, r, l, o, i, a, u) {
  (br = !1), (co = null), vh.apply(yh, arguments);
}
function Eh(e, t, n, r, l, o, i, a, u) {
  if ((wh.apply(this, arguments), br)) {
    if (br) {
      var c = co;
      (br = !1), (co = null);
    } else throw Error(R(198));
    fo || ((fo = !0), (da = c));
  }
}
function jn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function hd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function cs(e) {
  if (jn(e) !== e) throw Error(R(188));
}
function Sh(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = jn(e)), t === null)) throw Error(R(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return cs(l), e;
        if (o === r) return cs(l), t;
        o = o.sibling;
      }
      throw Error(R(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, a = l.child; a; ) {
        if (a === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (a === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        a = a.sibling;
      }
      if (!i) {
        for (a = o.child; a; ) {
          if (a === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (a === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          a = a.sibling;
        }
        if (!i) throw Error(R(189));
      }
    }
    if (n.alternate !== r) throw Error(R(190));
  }
  if (n.tag !== 3) throw Error(R(188));
  return n.stateNode.current === n ? e : t;
}
function md(e) {
  return (e = Sh(e)), e !== null ? gd(e) : null;
}
function gd(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = gd(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var vd = ut.unstable_scheduleCallback,
  ds = ut.unstable_cancelCallback,
  xh = ut.unstable_shouldYield,
  kh = ut.unstable_requestPaint,
  Ce = ut.unstable_now,
  Ch = ut.unstable_getCurrentPriorityLevel,
  ou = ut.unstable_ImmediatePriority,
  yd = ut.unstable_UserBlockingPriority,
  po = ut.unstable_NormalPriority,
  Ph = ut.unstable_LowPriority,
  wd = ut.unstable_IdlePriority,
  Bo = null,
  zt = null;
function _h(e) {
  if (zt && typeof zt.onCommitFiberRoot == 'function')
    try {
      zt.onCommitFiberRoot(Bo, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var _t = Math.clz32 ? Math.clz32 : Oh,
  Rh = Math.log,
  Mh = Math.LN2;
function Oh(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Rh(e) / Mh) | 0)) | 0;
}
var Tl = 64,
  Nl = 4194304;
function $r(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ho(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var a = i & ~l;
    a !== 0 ? (r = $r(a)) : ((o &= i), o !== 0 && (r = $r(o)));
  } else (i = n & ~l), i !== 0 ? (r = $r(i)) : o !== 0 && (r = $r(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - _t(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Ah(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Dh(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - _t(o),
      a = 1 << i,
      u = l[i];
    u === -1 ? (!(a & n) || a & r) && (l[i] = Ah(a, t)) : u <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function fa(e) {
  return (
    (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ed() {
  var e = Tl;
  return (Tl <<= 1), !(Tl & 4194240) && (Tl = 64), e;
}
function Si(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Sl(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - _t(t)),
    (e[t] = n);
}
function Lh(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - _t(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function iu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - _t(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var ae = 0;
function Sd(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var xd,
  au,
  kd,
  Cd,
  Pd,
  pa = !1,
  Il = [],
  rn = null,
  ln = null,
  on = null,
  tl = new Map(),
  nl = new Map(),
  qt = [],
  zh =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' ',
    );
function fs(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      rn = null;
      break;
    case 'dragenter':
    case 'dragleave':
      ln = null;
      break;
    case 'mouseover':
    case 'mouseout':
      on = null;
      break;
    case 'pointerover':
    case 'pointerout':
      tl.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      nl.delete(t.pointerId);
  }
}
function Mr(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = kl(t)), t !== null && au(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Th(e, t, n, r, l) {
  switch (t) {
    case 'focusin':
      return (rn = Mr(rn, e, t, n, r, l)), !0;
    case 'dragenter':
      return (ln = Mr(ln, e, t, n, r, l)), !0;
    case 'mouseover':
      return (on = Mr(on, e, t, n, r, l)), !0;
    case 'pointerover':
      var o = l.pointerId;
      return tl.set(o, Mr(tl.get(o) || null, e, t, n, r, l)), !0;
    case 'gotpointercapture':
      return (o = l.pointerId), nl.set(o, Mr(nl.get(o) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function _d(e) {
  var t = Pn(e.target);
  if (t !== null) {
    var n = jn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = hd(n)), t !== null)) {
          (e.blockedOn = t),
            Pd(e.priority, function () {
              kd(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Jl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ha(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ua = r), n.target.dispatchEvent(r), (ua = null);
    } else return (t = kl(n)), t !== null && au(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function ps(e, t, n) {
  Jl(e) && n.delete(t);
}
function Nh() {
  (pa = !1),
    rn !== null && Jl(rn) && (rn = null),
    ln !== null && Jl(ln) && (ln = null),
    on !== null && Jl(on) && (on = null),
    tl.forEach(ps),
    nl.forEach(ps);
}
function Or(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    pa || ((pa = !0), ut.unstable_scheduleCallback(ut.unstable_NormalPriority, Nh)));
}
function rl(e) {
  function t(l) {
    return Or(l, e);
  }
  if (0 < Il.length) {
    Or(Il[0], e);
    for (var n = 1; n < Il.length; n++) {
      var r = Il[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    rn !== null && Or(rn, e),
      ln !== null && Or(ln, e),
      on !== null && Or(on, e),
      tl.forEach(t),
      nl.forEach(t),
      n = 0;
    n < qt.length;
    n++
  )
    (r = qt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < qt.length && ((n = qt[0]), n.blockedOn === null); )
    _d(n), n.blockedOn === null && qt.shift();
}
var ar = Kt.ReactCurrentBatchConfig,
  mo = !0;
function Ih(e, t, n, r) {
  var l = ae,
    o = ar.transition;
  ar.transition = null;
  try {
    (ae = 1), uu(e, t, n, r);
  } finally {
    (ae = l), (ar.transition = o);
  }
}
function Fh(e, t, n, r) {
  var l = ae,
    o = ar.transition;
  ar.transition = null;
  try {
    (ae = 4), uu(e, t, n, r);
  } finally {
    (ae = l), (ar.transition = o);
  }
}
function uu(e, t, n, r) {
  if (mo) {
    var l = ha(e, t, n, r);
    if (l === null) Di(e, t, r, go, n), fs(e, r);
    else if (Th(l, e, t, n, r)) r.stopPropagation();
    else if ((fs(e, r), t & 4 && -1 < zh.indexOf(e))) {
      for (; l !== null; ) {
        var o = kl(l);
        if (
          (o !== null && xd(o),
          (o = ha(e, t, n, r)),
          o === null && Di(e, t, r, go, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Di(e, t, r, null, n);
  }
}
var go = null;
function ha(e, t, n, r) {
  if (((go = null), (e = lu(r)), (e = Pn(e)), e !== null))
    if (((t = jn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = hd(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (go = e), null;
}
function Rd(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (Ch()) {
        case ou:
          return 1;
        case yd:
          return 4;
        case po:
        case Ph:
          return 16;
        case wd:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var tn = null,
  su = null,
  Zl = null;
function Md() {
  if (Zl) return Zl;
  var e,
    t = su,
    n = t.length,
    r,
    l = 'value' in tn ? tn.value : tn.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Zl = l.slice(e, 1 < r ? 1 - r : void 0));
}
function ql(e) {
  var t = e.keyCode;
  return (
    'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Fl() {
  return !0;
}
function hs() {
  return !1;
}
function ct(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var a in e) e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Fl
        : hs),
      (this.isPropagationStopped = hs),
      this
    );
  }
  return (
    we(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = Fl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Fl));
      },
      persist: function () {},
      isPersistent: Fl,
    }),
    t
  );
}
var Sr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  cu = ct(Sr),
  xl = we({}, Sr, { view: 0, detail: 0 }),
  $h = ct(xl),
  xi,
  ki,
  Ar,
  Uo = we({}, xl, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: du,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== Ar &&
            (Ar && e.type === 'mousemove'
              ? ((xi = e.screenX - Ar.screenX), (ki = e.screenY - Ar.screenY))
              : (ki = xi = 0),
            (Ar = e)),
          xi);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : ki;
    },
  }),
  ms = ct(Uo),
  jh = we({}, Uo, { dataTransfer: 0 }),
  Bh = ct(jh),
  Uh = we({}, xl, { relatedTarget: 0 }),
  Ci = ct(Uh),
  bh = we({}, Sr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Hh = ct(bh),
  Wh = we({}, Sr, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Vh = ct(Wh),
  Gh = we({}, Sr, { data: 0 }),
  gs = ct(Gh),
  Qh = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  Yh = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  Kh = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
function Xh(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Kh[e]) ? !!t[e] : !1;
}
function du() {
  return Xh;
}
var Jh = we({}, xl, {
    key: function (e) {
      if (e.key) {
        var t = Qh[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = ql(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? Yh[e.keyCode] || 'Unidentified'
        : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: du,
    charCode: function (e) {
      return e.type === 'keypress' ? ql(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? ql(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0;
    },
  }),
  Zh = ct(Jh),
  qh = we({}, Uo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  vs = ct(qh),
  em = we({}, xl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: du,
  }),
  tm = ct(em),
  nm = we({}, Sr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  rm = ct(nm),
  lm = we({}, Uo, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  om = ct(lm),
  im = [9, 13, 27, 32],
  fu = Vt && 'CompositionEvent' in window,
  Hr = null;
Vt && 'documentMode' in document && (Hr = document.documentMode);
var am = Vt && 'TextEvent' in window && !Hr,
  Od = Vt && (!fu || (Hr && 8 < Hr && 11 >= Hr)),
  ys = String.fromCharCode(32),
  ws = !1;
function Ad(e, t) {
  switch (e) {
    case 'keyup':
      return im.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function Dd(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var Gn = !1;
function um(e, t) {
  switch (e) {
    case 'compositionend':
      return Dd(t);
    case 'keypress':
      return t.which !== 32 ? null : ((ws = !0), ys);
    case 'textInput':
      return (e = t.data), e === ys && ws ? null : e;
    default:
      return null;
  }
}
function sm(e, t) {
  if (Gn)
    return e === 'compositionend' || (!fu && Ad(e, t))
      ? ((e = Md()), (Zl = su = tn = null), (Gn = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return Od && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var cm = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Es(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!cm[e.type] : t === 'textarea';
}
function Ld(e, t, n, r) {
  sd(r),
    (t = vo(t, 'onChange')),
    0 < t.length &&
      ((n = new cu('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Wr = null,
  ll = null;
function dm(e) {
  Hd(e, 0);
}
function bo(e) {
  var t = Kn(e);
  if (nd(t)) return e;
}
function fm(e, t) {
  if (e === 'change') return t;
}
var zd = !1;
if (Vt) {
  var Pi;
  if (Vt) {
    var _i = 'oninput' in document;
    if (!_i) {
      var Ss = document.createElement('div');
      Ss.setAttribute('oninput', 'return;'), (_i = typeof Ss.oninput == 'function');
    }
    Pi = _i;
  } else Pi = !1;
  zd = Pi && (!document.documentMode || 9 < document.documentMode);
}
function xs() {
  Wr && (Wr.detachEvent('onpropertychange', Td), (ll = Wr = null));
}
function Td(e) {
  if (e.propertyName === 'value' && bo(ll)) {
    var t = [];
    Ld(t, ll, e, lu(e)), pd(dm, t);
  }
}
function pm(e, t, n) {
  e === 'focusin'
    ? (xs(), (Wr = t), (ll = n), Wr.attachEvent('onpropertychange', Td))
    : e === 'focusout' && xs();
}
function hm(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return bo(ll);
}
function mm(e, t) {
  if (e === 'click') return bo(t);
}
function gm(e, t) {
  if (e === 'input' || e === 'change') return bo(t);
}
function vm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Mt = typeof Object.is == 'function' ? Object.is : vm;
function ol(e, t) {
  if (Mt(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Xi.call(t, l) || !Mt(e[l], t[l])) return !1;
  }
  return !0;
}
function ks(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Cs(e, t) {
  var n = ks(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = ks(n);
  }
}
function Nd(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Nd(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Id() {
  for (var e = window, t = so(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = so(e.document);
  }
  return t;
}
function pu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function ym(e) {
  var t = Id(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Nd(n.ownerDocument.documentElement, n)) {
    if (r !== null && pu(n)) {
      if (((t = r.start), (e = r.end), e === void 0 && (e = t), 'selectionStart' in n))
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = Cs(n, o));
        var i = Cs(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
  }
}
var wm = Vt && 'documentMode' in document && 11 >= document.documentMode,
  Qn = null,
  ma = null,
  Vr = null,
  ga = !1;
function Ps(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ga ||
    Qn == null ||
    Qn !== so(r) ||
    ((r = Qn),
    'selectionStart' in r && pu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Vr && ol(Vr, r)) ||
      ((Vr = r),
      (r = vo(ma, 'onSelect')),
      0 < r.length &&
        ((t = new cu('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Qn))));
}
function $l(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var Yn = {
    animationend: $l('Animation', 'AnimationEnd'),
    animationiteration: $l('Animation', 'AnimationIteration'),
    animationstart: $l('Animation', 'AnimationStart'),
    transitionend: $l('Transition', 'TransitionEnd'),
  },
  Ri = {},
  Fd = {};
Vt &&
  ((Fd = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Yn.animationend.animation,
    delete Yn.animationiteration.animation,
    delete Yn.animationstart.animation),
  'TransitionEvent' in window || delete Yn.transitionend.transition);
function Ho(e) {
  if (Ri[e]) return Ri[e];
  if (!Yn[e]) return e;
  var t = Yn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Fd) return (Ri[e] = t[n]);
  return e;
}
var $d = Ho('animationend'),
  jd = Ho('animationiteration'),
  Bd = Ho('animationstart'),
  Ud = Ho('transitionend'),
  bd = new Map(),
  _s =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' ',
    );
function gn(e, t) {
  bd.set(e, t), $n(t, [e]);
}
for (var Mi = 0; Mi < _s.length; Mi++) {
  var Oi = _s[Mi],
    Em = Oi.toLowerCase(),
    Sm = Oi[0].toUpperCase() + Oi.slice(1);
  gn(Em, 'on' + Sm);
}
gn($d, 'onAnimationEnd');
gn(jd, 'onAnimationIteration');
gn(Bd, 'onAnimationStart');
gn('dblclick', 'onDoubleClick');
gn('focusin', 'onFocus');
gn('focusout', 'onBlur');
gn(Ud, 'onTransitionEnd');
dr('onMouseEnter', ['mouseout', 'mouseover']);
dr('onMouseLeave', ['mouseout', 'mouseover']);
dr('onPointerEnter', ['pointerout', 'pointerover']);
dr('onPointerLeave', ['pointerout', 'pointerover']);
$n(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' '),
);
$n(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' ',
  ),
);
$n('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
$n(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' '),
);
$n(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
);
$n(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
);
var jr =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' ',
    ),
  xm = new Set('cancel close invalid load scroll toggle'.split(' ').concat(jr));
function Rs(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), Eh(r, t, void 0, e), (e.currentTarget = null);
}
function Hd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var a = r[i],
            u = a.instance,
            c = a.currentTarget;
          if (((a = a.listener), u !== o && l.isPropagationStopped())) break e;
          Rs(l, a, c), (o = u);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((a = r[i]),
            (u = a.instance),
            (c = a.currentTarget),
            (a = a.listener),
            u !== o && l.isPropagationStopped())
          )
            break e;
          Rs(l, a, c), (o = u);
        }
    }
  }
  if (fo) throw ((e = da), (fo = !1), (da = null), e);
}
function pe(e, t) {
  var n = t[Sa];
  n === void 0 && (n = t[Sa] = new Set());
  var r = e + '__bubble';
  n.has(r) || (Wd(t, e, 2, !1), n.add(r));
}
function Ai(e, t, n) {
  var r = 0;
  t && (r |= 4), Wd(n, e, r, t);
}
var jl = '_reactListening' + Math.random().toString(36).slice(2);
function il(e) {
  if (!e[jl]) {
    (e[jl] = !0),
      Jc.forEach(function (n) {
        n !== 'selectionchange' && (xm.has(n) || Ai(n, !1, e), Ai(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[jl] || ((t[jl] = !0), Ai('selectionchange', !1, t));
  }
}
function Wd(e, t, n, r) {
  switch (Rd(t)) {
    case 1:
      var l = Ih;
      break;
    case 4:
      l = Fh;
      break;
    default:
      l = uu;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !ca || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Di(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var a = r.stateNode.containerInfo;
        if (a === l || (a.nodeType === 8 && a.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var u = i.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = i.stateNode.containerInfo),
              u === l || (u.nodeType === 8 && u.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; a !== null; ) {
          if (((i = Pn(a)), i === null)) return;
          if (((u = i.tag), u === 5 || u === 6)) {
            r = o = i;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  pd(function () {
    var c = o,
      h = lu(n),
      m = [];
    e: {
      var d = bd.get(e);
      if (d !== void 0) {
        var v = cu,
          w = e;
        switch (e) {
          case 'keypress':
            if (ql(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            v = Zh;
            break;
          case 'focusin':
            (w = 'focus'), (v = Ci);
            break;
          case 'focusout':
            (w = 'blur'), (v = Ci);
            break;
          case 'beforeblur':
          case 'afterblur':
            v = Ci;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            v = ms;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            v = Bh;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            v = tm;
            break;
          case $d:
          case jd:
          case Bd:
            v = Hh;
            break;
          case Ud:
            v = rm;
            break;
          case 'scroll':
            v = $h;
            break;
          case 'wheel':
            v = om;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            v = Vh;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            v = vs;
        }
        var y = (t & 4) !== 0,
          _ = !y && e === 'scroll',
          p = y ? (d !== null ? d + 'Capture' : null) : d;
        y = [];
        for (var f = c, g; f !== null; ) {
          g = f;
          var E = g.stateNode;
          if (
            (g.tag === 5 &&
              E !== null &&
              ((g = E), p !== null && ((E = el(f, p)), E != null && y.push(al(f, E, g)))),
            _)
          )
            break;
          f = f.return;
        }
        0 < y.length &&
          ((d = new v(d, w, null, n, h)), m.push({ event: d, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === 'mouseover' || e === 'pointerover'),
          (v = e === 'mouseout' || e === 'pointerout'),
          d && n !== ua && (w = n.relatedTarget || n.fromElement) && (Pn(w) || w[Gt]))
        )
          break e;
        if (
          (v || d) &&
          ((d =
            h.window === h
              ? h
              : (d = h.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          v
            ? ((w = n.relatedTarget || n.toElement),
              (v = c),
              (w = w ? Pn(w) : null),
              w !== null &&
                ((_ = jn(w)), w !== _ || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((v = null), (w = c)),
          v !== w)
        ) {
          if (
            ((y = ms),
            (E = 'onMouseLeave'),
            (p = 'onMouseEnter'),
            (f = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((y = vs), (E = 'onPointerLeave'), (p = 'onPointerEnter'), (f = 'pointer')),
            (_ = v == null ? d : Kn(v)),
            (g = w == null ? d : Kn(w)),
            (d = new y(E, f + 'leave', v, n, h)),
            (d.target = _),
            (d.relatedTarget = g),
            (E = null),
            Pn(h) === c &&
              ((y = new y(p, f + 'enter', w, n, h)),
              (y.target = g),
              (y.relatedTarget = _),
              (E = y)),
            (_ = E),
            v && w)
          )
            t: {
              for (y = v, p = w, f = 0, g = y; g; g = Hn(g)) f++;
              for (g = 0, E = p; E; E = Hn(E)) g++;
              for (; 0 < f - g; ) (y = Hn(y)), f--;
              for (; 0 < g - f; ) (p = Hn(p)), g--;
              for (; f--; ) {
                if (y === p || (p !== null && y === p.alternate)) break t;
                (y = Hn(y)), (p = Hn(p));
              }
              y = null;
            }
          else y = null;
          v !== null && Ms(m, d, v, y, !1),
            w !== null && _ !== null && Ms(m, _, w, y, !0);
        }
      }
      e: {
        if (
          ((d = c ? Kn(c) : window),
          (v = d.nodeName && d.nodeName.toLowerCase()),
          v === 'select' || (v === 'input' && d.type === 'file'))
        )
          var C = fm;
        else if (Es(d))
          if (zd) C = gm;
          else {
            C = hm;
            var z = pm;
          }
        else
          (v = d.nodeName) &&
            v.toLowerCase() === 'input' &&
            (d.type === 'checkbox' || d.type === 'radio') &&
            (C = mm);
        if (C && (C = C(e, c))) {
          Ld(m, C, n, h);
          break e;
        }
        z && z(e, d, c),
          e === 'focusout' &&
            (z = d._wrapperState) &&
            z.controlled &&
            d.type === 'number' &&
            ra(d, 'number', d.value);
      }
      switch (((z = c ? Kn(c) : window), e)) {
        case 'focusin':
          (Es(z) || z.contentEditable === 'true') && ((Qn = z), (ma = c), (Vr = null));
          break;
        case 'focusout':
          Vr = ma = Qn = null;
          break;
        case 'mousedown':
          ga = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (ga = !1), Ps(m, n, h);
          break;
        case 'selectionchange':
          if (wm) break;
        case 'keydown':
        case 'keyup':
          Ps(m, n, h);
      }
      var N;
      if (fu)
        e: {
          switch (e) {
            case 'compositionstart':
              var T = 'onCompositionStart';
              break e;
            case 'compositionend':
              T = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              T = 'onCompositionUpdate';
              break e;
          }
          T = void 0;
        }
      else
        Gn
          ? Ad(e, n) && (T = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (T = 'onCompositionStart');
      T &&
        (Od &&
          n.locale !== 'ko' &&
          (Gn || T !== 'onCompositionStart'
            ? T === 'onCompositionEnd' && Gn && (N = Md())
            : ((tn = h), (su = 'value' in tn ? tn.value : tn.textContent), (Gn = !0))),
        (z = vo(c, T)),
        0 < z.length &&
          ((T = new gs(T, e, null, n, h)),
          m.push({ event: T, listeners: z }),
          N ? (T.data = N) : ((N = Dd(n)), N !== null && (T.data = N)))),
        (N = am ? um(e, n) : sm(e, n)) &&
          ((c = vo(c, 'onBeforeInput')),
          0 < c.length &&
            ((h = new gs('onBeforeInput', 'beforeinput', null, n, h)),
            m.push({ event: h, listeners: c }),
            (h.data = N)));
    }
    Hd(m, t);
  });
}
function al(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function vo(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = el(e, n)),
      o != null && r.unshift(al(e, o, l)),
      (o = el(e, t)),
      o != null && r.push(al(e, o, l))),
      (e = e.return);
  }
  return r;
}
function Hn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ms(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var a = n,
      u = a.alternate,
      c = a.stateNode;
    if (u !== null && u === r) break;
    a.tag === 5 &&
      c !== null &&
      ((a = c),
      l
        ? ((u = el(n, o)), u != null && i.unshift(al(n, u, a)))
        : l || ((u = el(n, o)), u != null && i.push(al(n, u, a)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var km = /\r\n?/g,
  Cm = /\u0000|\uFFFD/g;
function Os(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      km,
      `
`,
    )
    .replace(Cm, '');
}
function Bl(e, t, n) {
  if (((t = Os(t)), Os(e) !== t && n)) throw Error(R(425));
}
function yo() {}
var va = null,
  ya = null;
function wa(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ea = typeof setTimeout == 'function' ? setTimeout : void 0,
  Pm = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  As = typeof Promise == 'function' ? Promise : void 0,
  _m =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof As < 'u'
      ? function (e) {
          return As.resolve(null).then(e).catch(Rm);
        }
      : Ea;
function Rm(e) {
  setTimeout(function () {
    throw e;
  });
}
function Li(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(l), rl(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = l;
  } while (n);
  rl(t);
}
function an(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function Ds(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var xr = Math.random().toString(36).slice(2),
  Lt = '__reactFiber$' + xr,
  ul = '__reactProps$' + xr,
  Gt = '__reactContainer$' + xr,
  Sa = '__reactEvents$' + xr,
  Mm = '__reactListeners$' + xr,
  Om = '__reactHandles$' + xr;
function Pn(e) {
  var t = e[Lt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Gt] || n[Lt])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = Ds(e); e !== null; ) {
          if ((n = e[Lt])) return n;
          e = Ds(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function kl(e) {
  return (
    (e = e[Lt] || e[Gt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Kn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(R(33));
}
function Wo(e) {
  return e[ul] || null;
}
var xa = [],
  Xn = -1;
function vn(e) {
  return { current: e };
}
function he(e) {
  0 > Xn || ((e.current = xa[Xn]), (xa[Xn] = null), Xn--);
}
function fe(e, t) {
  Xn++, (xa[Xn] = e.current), (e.current = t);
}
var mn = {},
  Qe = vn(mn),
  tt = vn(!1),
  Dn = mn;
function fr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return mn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function nt(e) {
  return (e = e.childContextTypes), e != null;
}
function wo() {
  he(tt), he(Qe);
}
function Ls(e, t, n) {
  if (Qe.current !== mn) throw Error(R(168));
  fe(Qe, t), fe(tt, n);
}
function Vd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(R(108, ph(e) || 'Unknown', l));
  return we({}, n, r);
}
function Eo(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || mn),
    (Dn = Qe.current),
    fe(Qe, e),
    fe(tt, tt.current),
    !0
  );
}
function zs(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(R(169));
  n
    ? ((e = Vd(e, t, Dn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      he(tt),
      he(Qe),
      fe(Qe, e))
    : he(tt),
    fe(tt, n);
}
var Bt = null,
  Vo = !1,
  zi = !1;
function Gd(e) {
  Bt === null ? (Bt = [e]) : Bt.push(e);
}
function Am(e) {
  (Vo = !0), Gd(e);
}
function yn() {
  if (!zi && Bt !== null) {
    zi = !0;
    var e = 0,
      t = ae;
    try {
      var n = Bt;
      for (ae = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Bt = null), (Vo = !1);
    } catch (l) {
      throw (Bt !== null && (Bt = Bt.slice(e + 1)), vd(ou, yn), l);
    } finally {
      (ae = t), (zi = !1);
    }
  }
  return null;
}
var Jn = [],
  Zn = 0,
  So = null,
  xo = 0,
  ft = [],
  pt = 0,
  Ln = null,
  Ut = 1,
  bt = '';
function Sn(e, t) {
  (Jn[Zn++] = xo), (Jn[Zn++] = So), (So = e), (xo = t);
}
function Qd(e, t, n) {
  (ft[pt++] = Ut), (ft[pt++] = bt), (ft[pt++] = Ln), (Ln = e);
  var r = Ut;
  e = bt;
  var l = 32 - _t(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - _t(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (Ut = (1 << (32 - _t(t) + l)) | (n << l) | r),
      (bt = o + e);
  } else (Ut = (1 << o) | (n << l) | r), (bt = e);
}
function hu(e) {
  e.return !== null && (Sn(e, 1), Qd(e, 1, 0));
}
function mu(e) {
  for (; e === So; ) (So = Jn[--Zn]), (Jn[Zn] = null), (xo = Jn[--Zn]), (Jn[Zn] = null);
  for (; e === Ln; )
    (Ln = ft[--pt]),
      (ft[pt] = null),
      (bt = ft[--pt]),
      (ft[pt] = null),
      (Ut = ft[--pt]),
      (ft[pt] = null);
}
var at = null,
  it = null,
  ge = !1,
  Ct = null;
function Yd(e, t) {
  var n = ht(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Ts(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), (at = e), (it = an(t.firstChild)), !0) : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (at = e), (it = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Ln !== null ? { id: Ut, overflow: bt } : null),
            (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
            (n = ht(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (at = e),
            (it = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ka(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ca(e) {
  if (ge) {
    var t = it;
    if (t) {
      var n = t;
      if (!Ts(e, t)) {
        if (ka(e)) throw Error(R(418));
        t = an(n.nextSibling);
        var r = at;
        t && Ts(e, t)
          ? Yd(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ge = !1), (at = e));
      }
    } else {
      if (ka(e)) throw Error(R(418));
      (e.flags = (e.flags & -4097) | 2), (ge = !1), (at = e);
    }
  }
}
function Ns(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  at = e;
}
function Ul(e) {
  if (e !== at) return !1;
  if (!ge) return Ns(e), (ge = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type), (t = t !== 'head' && t !== 'body' && !wa(e.type, e.memoizedProps))),
    t && (t = it))
  ) {
    if (ka(e)) throw (Kd(), Error(R(418)));
    for (; t; ) Yd(e, t), (t = an(t.nextSibling));
  }
  if ((Ns(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(R(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              it = an(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      it = null;
    }
  } else it = at ? an(e.stateNode.nextSibling) : null;
  return !0;
}
function Kd() {
  for (var e = it; e; ) e = an(e.nextSibling);
}
function pr() {
  (it = at = null), (ge = !1);
}
function gu(e) {
  Ct === null ? (Ct = [e]) : Ct.push(e);
}
var Dm = Kt.ReactCurrentBatchConfig;
function xt(e, t) {
  if (e && e.defaultProps) {
    (t = we({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var ko = vn(null),
  Co = null,
  qn = null,
  vu = null;
function yu() {
  vu = qn = Co = null;
}
function wu(e) {
  var t = ko.current;
  he(ko), (e._currentValue = t);
}
function Pa(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function ur(e, t) {
  (Co = e),
    (vu = qn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (et = !0), (e.firstContext = null));
}
function gt(e) {
  var t = e._currentValue;
  if (vu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), qn === null)) {
      if (Co === null) throw Error(R(308));
      (qn = e), (Co.dependencies = { lanes: 0, firstContext: e });
    } else qn = qn.next = e;
  return t;
}
var _n = null;
function Eu(e) {
  _n === null ? (_n = [e]) : _n.push(e);
}
function Xd(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Eu(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Qt(e, r)
  );
}
function Qt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Zt = !1;
function Su(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Jd(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ht(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function un(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), le & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Qt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Eu(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Qt(e, n)
  );
}
function eo(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), iu(e, n);
  }
}
function Is(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Po(e, t, n, r) {
  var l = e.updateQueue;
  Zt = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    a = l.shared.pending;
  if (a !== null) {
    l.shared.pending = null;
    var u = a,
      c = u.next;
    (u.next = null), i === null ? (o = c) : (i.next = c), (i = u);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (a = h.lastBaseUpdate),
      a !== i &&
        (a === null ? (h.firstBaseUpdate = c) : (a.next = c), (h.lastBaseUpdate = u)));
  }
  if (o !== null) {
    var m = l.baseState;
    (i = 0), (h = c = u = null), (a = o);
    do {
      var d = a.lane,
        v = a.eventTime;
      if ((r & d) === d) {
        h !== null &&
          (h = h.next =
            {
              eventTime: v,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var w = e,
            y = a;
          switch (((d = t), (v = n), y.tag)) {
            case 1:
              if (((w = y.payload), typeof w == 'function')) {
                m = w.call(v, m, d);
                break e;
              }
              m = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = y.payload),
                (d = typeof w == 'function' ? w.call(v, m, d) : w),
                d == null)
              )
                break e;
              m = we({}, m, d);
              break e;
            case 2:
              Zt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64), (d = l.effects), d === null ? (l.effects = [a]) : d.push(a));
      } else
        (v = {
          eventTime: v,
          lane: d,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          h === null ? ((c = h = v), (u = m)) : (h = h.next = v),
          (i |= d);
      if (((a = a.next), a === null)) {
        if (((a = l.shared.pending), a === null)) break;
        (d = a),
          (a = d.next),
          (d.next = null),
          (l.lastBaseUpdate = d),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (h === null && (u = m),
      (l.baseState = u),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = h),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (Tn |= i), (e.lanes = i), (e.memoizedState = m);
  }
}
function Fs(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != 'function'))
          throw Error(R(191, l));
        l.call(r);
      }
    }
}
var Zd = new Xc.Component().refs;
function _a(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : we({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Go = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? jn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Xe(),
      l = cn(e),
      o = Ht(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = un(e, o, l)),
      t !== null && (Rt(t, e, l, r), eo(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Xe(),
      l = cn(e),
      o = Ht(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = un(e, o, l)),
      t !== null && (Rt(t, e, l, r), eo(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Xe(),
      r = cn(e),
      l = Ht(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = un(e, l, r)),
      t !== null && (Rt(t, e, r, n), eo(t, e, r));
  },
};
function $s(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !ol(n, r) || !ol(l, o)
      : !0
  );
}
function qd(e, t, n) {
  var r = !1,
    l = mn,
    o = t.contextType;
  return (
    typeof o == 'object' && o !== null
      ? (o = gt(o))
      : ((l = nt(t) ? Dn : Qe.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? fr(e, l) : mn)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Go),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function js(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Go.enqueueReplaceState(t, t.state, null);
}
function Ra(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = Zd), Su(e);
  var o = t.contextType;
  typeof o == 'object' && o !== null
    ? (l.context = gt(o))
    : ((o = nt(t) ? Dn : Qe.current), (l.context = fr(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == 'function' && (_a(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof l.getSnapshotBeforeUpdate == 'function' ||
      (typeof l.UNSAFE_componentWillMount != 'function' &&
        typeof l.componentWillMount != 'function') ||
      ((t = l.state),
      typeof l.componentWillMount == 'function' && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == 'function' && l.UNSAFE_componentWillMount(),
      t !== l.state && Go.enqueueReplaceState(l, l.state, null),
      Po(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == 'function' && (e.flags |= 4194308);
}
function Dr(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(R(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(R(147, e));
      var l = r,
        o = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var a = l.refs;
            a === Zd && (a = l.refs = {}), i === null ? delete a[o] : (a[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != 'string') throw Error(R(284));
    if (!n._owner) throw Error(R(290, e));
  }
  return e;
}
function bl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      R(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e,
      ),
    ))
  );
}
function Bs(e) {
  var t = e._init;
  return t(e._payload);
}
function ef(e) {
  function t(p, f) {
    if (e) {
      var g = p.deletions;
      g === null ? ((p.deletions = [f]), (p.flags |= 16)) : g.push(f);
    }
  }
  function n(p, f) {
    if (!e) return null;
    for (; f !== null; ) t(p, f), (f = f.sibling);
    return null;
  }
  function r(p, f) {
    for (p = new Map(); f !== null; )
      f.key !== null ? p.set(f.key, f) : p.set(f.index, f), (f = f.sibling);
    return p;
  }
  function l(p, f) {
    return (p = dn(p, f)), (p.index = 0), (p.sibling = null), p;
  }
  function o(p, f, g) {
    return (
      (p.index = g),
      e
        ? ((g = p.alternate),
          g !== null
            ? ((g = g.index), g < f ? ((p.flags |= 2), f) : g)
            : ((p.flags |= 2), f))
        : ((p.flags |= 1048576), f)
    );
  }
  function i(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function a(p, f, g, E) {
    return f === null || f.tag !== 6
      ? ((f = Bi(g, p.mode, E)), (f.return = p), f)
      : ((f = l(f, g)), (f.return = p), f);
  }
  function u(p, f, g, E) {
    var C = g.type;
    return C === Vn
      ? h(p, f, g.props.children, E, g.key)
      : f !== null &&
        (f.elementType === C ||
          (typeof C == 'object' && C !== null && C.$$typeof === Jt && Bs(C) === f.type))
      ? ((E = l(f, g.props)), (E.ref = Dr(p, f, g)), (E.return = p), E)
      : ((E = io(g.type, g.key, g.props, null, p.mode, E)),
        (E.ref = Dr(p, f, g)),
        (E.return = p),
        E);
  }
  function c(p, f, g, E) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== g.containerInfo ||
      f.stateNode.implementation !== g.implementation
      ? ((f = Ui(g, p.mode, E)), (f.return = p), f)
      : ((f = l(f, g.children || [])), (f.return = p), f);
  }
  function h(p, f, g, E, C) {
    return f === null || f.tag !== 7
      ? ((f = An(g, p.mode, E, C)), (f.return = p), f)
      : ((f = l(f, g)), (f.return = p), f);
  }
  function m(p, f, g) {
    if ((typeof f == 'string' && f !== '') || typeof f == 'number')
      return (f = Bi('' + f, p.mode, g)), (f.return = p), f;
    if (typeof f == 'object' && f !== null) {
      switch (f.$$typeof) {
        case Dl:
          return (
            (g = io(f.type, f.key, f.props, null, p.mode, g)),
            (g.ref = Dr(p, null, f)),
            (g.return = p),
            g
          );
        case Wn:
          return (f = Ui(f, p.mode, g)), (f.return = p), f;
        case Jt:
          var E = f._init;
          return m(p, E(f._payload), g);
      }
      if (Fr(f) || _r(f)) return (f = An(f, p.mode, g, null)), (f.return = p), f;
      bl(p, f);
    }
    return null;
  }
  function d(p, f, g, E) {
    var C = f !== null ? f.key : null;
    if ((typeof g == 'string' && g !== '') || typeof g == 'number')
      return C !== null ? null : a(p, f, '' + g, E);
    if (typeof g == 'object' && g !== null) {
      switch (g.$$typeof) {
        case Dl:
          return g.key === C ? u(p, f, g, E) : null;
        case Wn:
          return g.key === C ? c(p, f, g, E) : null;
        case Jt:
          return (C = g._init), d(p, f, C(g._payload), E);
      }
      if (Fr(g) || _r(g)) return C !== null ? null : h(p, f, g, E, null);
      bl(p, g);
    }
    return null;
  }
  function v(p, f, g, E, C) {
    if ((typeof E == 'string' && E !== '') || typeof E == 'number')
      return (p = p.get(g) || null), a(f, p, '' + E, C);
    if (typeof E == 'object' && E !== null) {
      switch (E.$$typeof) {
        case Dl:
          return (p = p.get(E.key === null ? g : E.key) || null), u(f, p, E, C);
        case Wn:
          return (p = p.get(E.key === null ? g : E.key) || null), c(f, p, E, C);
        case Jt:
          var z = E._init;
          return v(p, f, g, z(E._payload), C);
      }
      if (Fr(E) || _r(E)) return (p = p.get(g) || null), h(f, p, E, C, null);
      bl(f, E);
    }
    return null;
  }
  function w(p, f, g, E) {
    for (
      var C = null, z = null, N = f, T = (f = 0), J = null;
      N !== null && T < g.length;
      T++
    ) {
      N.index > T ? ((J = N), (N = null)) : (J = N.sibling);
      var b = d(p, N, g[T], E);
      if (b === null) {
        N === null && (N = J);
        break;
      }
      e && N && b.alternate === null && t(p, N),
        (f = o(b, f, T)),
        z === null ? (C = b) : (z.sibling = b),
        (z = b),
        (N = J);
    }
    if (T === g.length) return n(p, N), ge && Sn(p, T), C;
    if (N === null) {
      for (; T < g.length; T++)
        (N = m(p, g[T], E)),
          N !== null &&
            ((f = o(N, f, T)), z === null ? (C = N) : (z.sibling = N), (z = N));
      return ge && Sn(p, T), C;
    }
    for (N = r(p, N); T < g.length; T++)
      (J = v(N, p, T, g[T], E)),
        J !== null &&
          (e && J.alternate !== null && N.delete(J.key === null ? T : J.key),
          (f = o(J, f, T)),
          z === null ? (C = J) : (z.sibling = J),
          (z = J));
    return (
      e &&
        N.forEach(function (Pe) {
          return t(p, Pe);
        }),
      ge && Sn(p, T),
      C
    );
  }
  function y(p, f, g, E) {
    var C = _r(g);
    if (typeof C != 'function') throw Error(R(150));
    if (((g = C.call(g)), g == null)) throw Error(R(151));
    for (
      var z = (C = null), N = f, T = (f = 0), J = null, b = g.next();
      N !== null && !b.done;
      T++, b = g.next()
    ) {
      N.index > T ? ((J = N), (N = null)) : (J = N.sibling);
      var Pe = d(p, N, b.value, E);
      if (Pe === null) {
        N === null && (N = J);
        break;
      }
      e && N && Pe.alternate === null && t(p, N),
        (f = o(Pe, f, T)),
        z === null ? (C = Pe) : (z.sibling = Pe),
        (z = Pe),
        (N = J);
    }
    if (b.done) return n(p, N), ge && Sn(p, T), C;
    if (N === null) {
      for (; !b.done; T++, b = g.next())
        (b = m(p, b.value, E)),
          b !== null &&
            ((f = o(b, f, T)), z === null ? (C = b) : (z.sibling = b), (z = b));
      return ge && Sn(p, T), C;
    }
    for (N = r(p, N); !b.done; T++, b = g.next())
      (b = v(N, p, T, b.value, E)),
        b !== null &&
          (e && b.alternate !== null && N.delete(b.key === null ? T : b.key),
          (f = o(b, f, T)),
          z === null ? (C = b) : (z.sibling = b),
          (z = b));
    return (
      e &&
        N.forEach(function (xe) {
          return t(p, xe);
        }),
      ge && Sn(p, T),
      C
    );
  }
  function _(p, f, g, E) {
    if (
      (typeof g == 'object' &&
        g !== null &&
        g.type === Vn &&
        g.key === null &&
        (g = g.props.children),
      typeof g == 'object' && g !== null)
    ) {
      switch (g.$$typeof) {
        case Dl:
          e: {
            for (var C = g.key, z = f; z !== null; ) {
              if (z.key === C) {
                if (((C = g.type), C === Vn)) {
                  if (z.tag === 7) {
                    n(p, z.sibling),
                      (f = l(z, g.props.children)),
                      (f.return = p),
                      (p = f);
                    break e;
                  }
                } else if (
                  z.elementType === C ||
                  (typeof C == 'object' &&
                    C !== null &&
                    C.$$typeof === Jt &&
                    Bs(C) === z.type)
                ) {
                  n(p, z.sibling),
                    (f = l(z, g.props)),
                    (f.ref = Dr(p, z, g)),
                    (f.return = p),
                    (p = f);
                  break e;
                }
                n(p, z);
                break;
              } else t(p, z);
              z = z.sibling;
            }
            g.type === Vn
              ? ((f = An(g.props.children, p.mode, E, g.key)), (f.return = p), (p = f))
              : ((E = io(g.type, g.key, g.props, null, p.mode, E)),
                (E.ref = Dr(p, f, g)),
                (E.return = p),
                (p = E));
          }
          return i(p);
        case Wn:
          e: {
            for (z = g.key; f !== null; ) {
              if (f.key === z)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === g.containerInfo &&
                  f.stateNode.implementation === g.implementation
                ) {
                  n(p, f.sibling), (f = l(f, g.children || [])), (f.return = p), (p = f);
                  break e;
                } else {
                  n(p, f);
                  break;
                }
              else t(p, f);
              f = f.sibling;
            }
            (f = Ui(g, p.mode, E)), (f.return = p), (p = f);
          }
          return i(p);
        case Jt:
          return (z = g._init), _(p, f, z(g._payload), E);
      }
      if (Fr(g)) return w(p, f, g, E);
      if (_r(g)) return y(p, f, g, E);
      bl(p, g);
    }
    return (typeof g == 'string' && g !== '') || typeof g == 'number'
      ? ((g = '' + g),
        f !== null && f.tag === 6
          ? (n(p, f.sibling), (f = l(f, g)), (f.return = p), (p = f))
          : (n(p, f), (f = Bi(g, p.mode, E)), (f.return = p), (p = f)),
        i(p))
      : n(p, f);
  }
  return _;
}
var hr = ef(!0),
  tf = ef(!1),
  Cl = {},
  Tt = vn(Cl),
  sl = vn(Cl),
  cl = vn(Cl);
function Rn(e) {
  if (e === Cl) throw Error(R(174));
  return e;
}
function xu(e, t) {
  switch ((fe(cl, t), fe(sl, e), fe(Tt, Cl), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : oa(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = oa(t, e));
  }
  he(Tt), fe(Tt, t);
}
function mr() {
  he(Tt), he(sl), he(cl);
}
function nf(e) {
  Rn(cl.current);
  var t = Rn(Tt.current),
    n = oa(t, e.type);
  t !== n && (fe(sl, e), fe(Tt, n));
}
function ku(e) {
  sl.current === e && (he(Tt), he(sl));
}
var ve = vn(0);
function _o(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Ti = [];
function Cu() {
  for (var e = 0; e < Ti.length; e++) Ti[e]._workInProgressVersionPrimary = null;
  Ti.length = 0;
}
var to = Kt.ReactCurrentDispatcher,
  Ni = Kt.ReactCurrentBatchConfig,
  zn = 0,
  ye = null,
  Ae = null,
  Te = null,
  Ro = !1,
  Gr = !1,
  dl = 0,
  Lm = 0;
function We() {
  throw Error(R(321));
}
function Pu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Mt(e[n], t[n])) return !1;
  return !0;
}
function _u(e, t, n, r, l, o) {
  if (
    ((zn = o),
    (ye = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (to.current = e === null || e.memoizedState === null ? Im : Fm),
    (e = n(r, l)),
    Gr)
  ) {
    o = 0;
    do {
      if (((Gr = !1), (dl = 0), 25 <= o)) throw Error(R(301));
      (o += 1),
        (Te = Ae = null),
        (t.updateQueue = null),
        (to.current = $m),
        (e = n(r, l));
    } while (Gr);
  }
  if (
    ((to.current = Mo),
    (t = Ae !== null && Ae.next !== null),
    (zn = 0),
    (Te = Ae = ye = null),
    (Ro = !1),
    t)
  )
    throw Error(R(300));
  return e;
}
function Ru() {
  var e = dl !== 0;
  return (dl = 0), e;
}
function At() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Te === null ? (ye.memoizedState = Te = e) : (Te = Te.next = e), Te;
}
function vt() {
  if (Ae === null) {
    var e = ye.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ae.next;
  var t = Te === null ? ye.memoizedState : Te.next;
  if (t !== null) (Te = t), (Ae = e);
  else {
    if (e === null) throw Error(R(310));
    (Ae = e),
      (e = {
        memoizedState: Ae.memoizedState,
        baseState: Ae.baseState,
        baseQueue: Ae.baseQueue,
        queue: Ae.queue,
        next: null,
      }),
      Te === null ? (ye.memoizedState = Te = e) : (Te = Te.next = e);
  }
  return Te;
}
function fl(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function Ii(e) {
  var t = vt(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = Ae,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var a = (i = null),
      u = null,
      c = o;
    do {
      var h = c.lane;
      if ((zn & h) === h)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var m = {
          lane: h,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        u === null ? ((a = u = m), (i = r)) : (u = u.next = m),
          (ye.lanes |= h),
          (Tn |= h);
      }
      c = c.next;
    } while (c !== null && c !== o);
    u === null ? (i = r) : (u.next = a),
      Mt(r, t.memoizedState) || (et = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (ye.lanes |= o), (Tn |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Fi(e) {
  var t = vt(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    Mt(o, t.memoizedState) || (et = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function rf() {}
function lf(e, t) {
  var n = ye,
    r = vt(),
    l = t(),
    o = !Mt(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (et = !0)),
    (r = r.queue),
    Mu(uf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Te !== null && Te.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), pl(9, af.bind(null, n, r, l, t), void 0, null), Ne === null))
      throw Error(R(349));
    zn & 30 || of(n, t, l);
  }
  return l;
}
function of(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ye.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (ye.updateQueue = t), (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function af(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), sf(t) && cf(e);
}
function uf(e, t, n) {
  return n(function () {
    sf(t) && cf(e);
  });
}
function sf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Mt(e, n);
  } catch {
    return !0;
  }
}
function cf(e) {
  var t = Qt(e, 1);
  t !== null && Rt(t, e, 1, -1);
}
function Us(e) {
  var t = At();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: fl,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Nm.bind(null, ye, e)),
    [t.memoizedState, e]
  );
}
function pl(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ye.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ye.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function df() {
  return vt().memoizedState;
}
function no(e, t, n, r) {
  var l = At();
  (ye.flags |= e), (l.memoizedState = pl(1 | t, n, void 0, r === void 0 ? null : r));
}
function Qo(e, t, n, r) {
  var l = vt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Ae !== null) {
    var i = Ae.memoizedState;
    if (((o = i.destroy), r !== null && Pu(r, i.deps))) {
      l.memoizedState = pl(t, n, o, r);
      return;
    }
  }
  (ye.flags |= e), (l.memoizedState = pl(1 | t, n, o, r));
}
function bs(e, t) {
  return no(8390656, 8, e, t);
}
function Mu(e, t) {
  return Qo(2048, 8, e, t);
}
function ff(e, t) {
  return Qo(4, 2, e, t);
}
function pf(e, t) {
  return Qo(4, 4, e, t);
}
function hf(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function mf(e, t, n) {
  return (n = n != null ? n.concat([e]) : null), Qo(4, 4, hf.bind(null, t, e), n);
}
function Ou() {}
function gf(e, t) {
  var n = vt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Pu(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function vf(e, t) {
  var n = vt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Pu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function yf(e, t, n) {
  return zn & 21
    ? (Mt(n, t) || ((n = Ed()), (ye.lanes |= n), (Tn |= n), (e.baseState = !0)), t)
    : (e.baseState && ((e.baseState = !1), (et = !0)), (e.memoizedState = n));
}
function zm(e, t) {
  var n = ae;
  (ae = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Ni.transition;
  Ni.transition = {};
  try {
    e(!1), t();
  } finally {
    (ae = n), (Ni.transition = r);
  }
}
function wf() {
  return vt().memoizedState;
}
function Tm(e, t, n) {
  var r = cn(e);
  if (
    ((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Ef(e))
  )
    Sf(t, n);
  else if (((n = Xd(e, t, n, r)), n !== null)) {
    var l = Xe();
    Rt(n, e, r, l), xf(n, t, r);
  }
}
function Nm(e, t, n) {
  var r = cn(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ef(e)) Sf(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          a = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = a), Mt(a, i))) {
          var u = t.interleaved;
          u === null ? ((l.next = l), Eu(t)) : ((l.next = u.next), (u.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Xd(e, t, l, r)), n !== null && ((l = Xe()), Rt(n, e, r, l), xf(n, t, r));
  }
}
function Ef(e) {
  var t = e.alternate;
  return e === ye || (t !== null && t === ye);
}
function Sf(e, t) {
  Gr = Ro = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function xf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), iu(e, n);
  }
}
var Mo = {
    readContext: gt,
    useCallback: We,
    useContext: We,
    useEffect: We,
    useImperativeHandle: We,
    useInsertionEffect: We,
    useLayoutEffect: We,
    useMemo: We,
    useReducer: We,
    useRef: We,
    useState: We,
    useDebugValue: We,
    useDeferredValue: We,
    useTransition: We,
    useMutableSource: We,
    useSyncExternalStore: We,
    useId: We,
    unstable_isNewReconciler: !1,
  },
  Im = {
    readContext: gt,
    useCallback: function (e, t) {
      return (At().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: gt,
    useEffect: bs,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null), no(4194308, 4, hf.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return no(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return no(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = At();
      return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
    },
    useReducer: function (e, t, n) {
      var r = At();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Tm.bind(null, ye, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = At();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Us,
    useDebugValue: Ou,
    useDeferredValue: function (e) {
      return (At().memoizedState = e);
    },
    useTransition: function () {
      var e = Us(!1),
        t = e[0];
      return (e = zm.bind(null, e[1])), (At().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ye,
        l = At();
      if (ge) {
        if (n === void 0) throw Error(R(407));
        n = n();
      } else {
        if (((n = t()), Ne === null)) throw Error(R(349));
        zn & 30 || of(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        bs(uf.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        pl(9, af.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = At(),
        t = Ne.identifierPrefix;
      if (ge) {
        var n = bt,
          r = Ut;
        (n = (r & ~(1 << (32 - _t(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = dl++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = Lm++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Fm = {
    readContext: gt,
    useCallback: gf,
    useContext: gt,
    useEffect: Mu,
    useImperativeHandle: mf,
    useInsertionEffect: ff,
    useLayoutEffect: pf,
    useMemo: vf,
    useReducer: Ii,
    useRef: df,
    useState: function () {
      return Ii(fl);
    },
    useDebugValue: Ou,
    useDeferredValue: function (e) {
      var t = vt();
      return yf(t, Ae.memoizedState, e);
    },
    useTransition: function () {
      var e = Ii(fl)[0],
        t = vt().memoizedState;
      return [e, t];
    },
    useMutableSource: rf,
    useSyncExternalStore: lf,
    useId: wf,
    unstable_isNewReconciler: !1,
  },
  $m = {
    readContext: gt,
    useCallback: gf,
    useContext: gt,
    useEffect: Mu,
    useImperativeHandle: mf,
    useInsertionEffect: ff,
    useLayoutEffect: pf,
    useMemo: vf,
    useReducer: Fi,
    useRef: df,
    useState: function () {
      return Fi(fl);
    },
    useDebugValue: Ou,
    useDeferredValue: function (e) {
      var t = vt();
      return Ae === null ? (t.memoizedState = e) : yf(t, Ae.memoizedState, e);
    },
    useTransition: function () {
      var e = Fi(fl)[0],
        t = vt().memoizedState;
      return [e, t];
    },
    useMutableSource: rf,
    useSyncExternalStore: lf,
    useId: wf,
    unstable_isNewReconciler: !1,
  };
function gr(e, t) {
  try {
    var n = '',
      r = t;
    do (n += fh(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function $i(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ma(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var jm = typeof WeakMap == 'function' ? WeakMap : Map;
function kf(e, t, n) {
  (n = Ht(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Ao || ((Ao = !0), ($a = r)), Ma(e, t);
    }),
    n
  );
}
function Cf(e, t, n) {
  (n = Ht(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Ma(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == 'function' &&
      (n.callback = function () {
        Ma(e, t),
          typeof r != 'function' && (sn === null ? (sn = new Set([this])) : sn.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, { componentStack: i !== null ? i : '' });
      }),
    n
  );
}
function Hs(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new jm();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = qm.bind(null, e, t, n)), t.then(e, e));
}
function Ws(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Vs(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ht(-1, 1)), (t.tag = 2), un(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Bm = Kt.ReactCurrentOwner,
  et = !1;
function Ke(e, t, n, r) {
  t.child = e === null ? tf(t, null, n, r) : hr(t, e.child, n, r);
}
function Gs(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    ur(t, l),
    (r = _u(e, t, n, r, o, l)),
    (n = Ru()),
    e !== null && !et
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Yt(e, t, l))
      : (ge && n && hu(t), (t.flags |= 1), Ke(e, t, r, l), t.child)
  );
}
function Qs(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == 'function' &&
      !Fu(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Pf(e, t, o, r, l))
      : ((e = io(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (((n = n.compare), (n = n !== null ? n : ol), n(i, r) && e.ref === t.ref))
      return Yt(e, t, l);
  }
  return (t.flags |= 1), (e = dn(o, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function Pf(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (ol(o, r) && e.ref === t.ref)
      if (((et = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (et = !0);
      else return (t.lanes = e.lanes), Yt(e, t, l);
  }
  return Oa(e, t, n, r, l);
}
function _f(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        fe(tr, ot),
        (ot |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
          (t.updateQueue = null),
          fe(tr, ot),
          (ot |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        fe(tr, ot),
        (ot |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      fe(tr, ot),
      (ot |= r);
  return Ke(e, t, l, n), t.child;
}
function Rf(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Oa(e, t, n, r, l) {
  var o = nt(n) ? Dn : Qe.current;
  return (
    (o = fr(t, o)),
    ur(t, l),
    (n = _u(e, t, n, r, o, l)),
    (r = Ru()),
    e !== null && !et
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Yt(e, t, l))
      : (ge && r && hu(t), (t.flags |= 1), Ke(e, t, n, l), t.child)
  );
}
function Ys(e, t, n, r, l) {
  if (nt(n)) {
    var o = !0;
    Eo(t);
  } else o = !1;
  if ((ur(t, l), t.stateNode === null)) ro(e, t), qd(t, n, r), Ra(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      a = t.memoizedProps;
    i.props = a;
    var u = i.context,
      c = n.contextType;
    typeof c == 'object' && c !== null
      ? (c = gt(c))
      : ((c = nt(n) ? Dn : Qe.current), (c = fr(t, c)));
    var h = n.getDerivedStateFromProps,
      m = typeof h == 'function' || typeof i.getSnapshotBeforeUpdate == 'function';
    m ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((a !== r || u !== c) && js(t, i, r, c)),
      (Zt = !1);
    var d = t.memoizedState;
    (i.state = d),
      Po(t, r, i, l),
      (u = t.memoizedState),
      a !== r || d !== u || tt.current || Zt
        ? (typeof h == 'function' && (_a(t, n, h, r), (u = t.memoizedState)),
          (a = Zt || $s(t, n, a, r, d, u, c))
            ? (m ||
                (typeof i.UNSAFE_componentWillMount != 'function' &&
                  typeof i.componentWillMount != 'function') ||
                (typeof i.componentWillMount == 'function' && i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == 'function' &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (i.props = r),
          (i.state = u),
          (i.context = c),
          (r = a))
        : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308), (r = !1));
  } else {
    (i = t.stateNode),
      Jd(e, t),
      (a = t.memoizedProps),
      (c = t.type === t.elementType ? a : xt(t.type, a)),
      (i.props = c),
      (m = t.pendingProps),
      (d = i.context),
      (u = n.contextType),
      typeof u == 'object' && u !== null
        ? (u = gt(u))
        : ((u = nt(n) ? Dn : Qe.current), (u = fr(t, u)));
    var v = n.getDerivedStateFromProps;
    (h = typeof v == 'function' || typeof i.getSnapshotBeforeUpdate == 'function') ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((a !== m || d !== u) && js(t, i, r, u)),
      (Zt = !1),
      (d = t.memoizedState),
      (i.state = d),
      Po(t, r, i, l);
    var w = t.memoizedState;
    a !== m || d !== w || tt.current || Zt
      ? (typeof v == 'function' && (_a(t, n, v, r), (w = t.memoizedState)),
        (c = Zt || $s(t, n, c, r, d, w, u) || !1)
          ? (h ||
              (typeof i.UNSAFE_componentWillUpdate != 'function' &&
                typeof i.componentWillUpdate != 'function') ||
              (typeof i.componentWillUpdate == 'function' &&
                i.componentWillUpdate(r, w, u),
              typeof i.UNSAFE_componentWillUpdate == 'function' &&
                i.UNSAFE_componentWillUpdate(r, w, u)),
            typeof i.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != 'function' ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != 'function' ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (i.props = r),
        (i.state = w),
        (i.context = u),
        (r = c))
      : (typeof i.componentDidUpdate != 'function' ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != 'function' ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Aa(e, t, n, r, o, l);
}
function Aa(e, t, n, r, l, o) {
  Rf(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && zs(t, n, !1), Yt(e, t, o);
  (r = t.stateNode), (Bm.current = t);
  var a = i && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = hr(t, e.child, null, o)), (t.child = hr(t, null, a, o)))
      : Ke(e, t, a, o),
    (t.memoizedState = r.state),
    l && zs(t, n, !0),
    t.child
  );
}
function Mf(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Ls(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ls(e, t.context, !1),
    xu(e, t.containerInfo);
}
function Ks(e, t, n, r, l) {
  return pr(), gu(l), (t.flags |= 256), Ke(e, t, n, r), t.child;
}
var Da = { dehydrated: null, treeContext: null, retryLane: 0 };
function La(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Of(e, t, n) {
  var r = t.pendingProps,
    l = ve.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    a;
  if (
    ((a = i) || (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    fe(ve, l & 1),
    e === null)
  )
    return (
      Ca(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: 'hidden', children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = Xo(i, r, 0, null)),
              (e = An(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = La(n)),
              (t.memoizedState = Da),
              e)
            : Au(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null)))
    return Um(e, t, i, r, a, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (a = l.sibling);
    var u = { mode: 'hidden', children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = u), (t.deletions = null))
        : ((r = dn(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      a !== null ? (o = dn(a, o)) : ((o = An(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? La(n)
          : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Da),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = dn(o, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Au(e, t) {
  return (
    (t = Xo({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Hl(e, t, n, r) {
  return (
    r !== null && gu(r),
    hr(t, e.child, null, n),
    (e = Au(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Um(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = $i(Error(R(422)))), Hl(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = Xo({ mode: 'visible', children: r.children }, l, 0, null)),
        (o = An(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && hr(t, e.child, null, i),
        (t.child.memoizedState = La(i)),
        (t.memoizedState = Da),
        o);
  if (!(t.mode & 1)) return Hl(e, t, i, null);
  if (l.data === '$!') {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(R(419))), (r = $i(o, r, void 0)), Hl(e, t, i, r);
  }
  if (((a = (i & e.childLanes) !== 0), et || a)) {
    if (((r = Ne), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 && l !== o.retryLane && ((o.retryLane = l), Qt(e, l), Rt(r, e, l, -1));
    }
    return Iu(), (r = $i(Error(R(421)))), Hl(e, t, i, r);
  }
  return l.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = eg.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (it = an(l.nextSibling)),
      (at = t),
      (ge = !0),
      (Ct = null),
      e !== null &&
        ((ft[pt++] = Ut),
        (ft[pt++] = bt),
        (ft[pt++] = Ln),
        (Ut = e.id),
        (bt = e.overflow),
        (Ln = t)),
      (t = Au(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Xs(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Pa(e.return, t, n);
}
function ji(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function Af(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((Ke(e, t, r.children, n), (r = ve.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Xs(e, n, t);
        else if (e.tag === 19) Xs(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((fe(ve, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case 'forwards':
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate), e !== null && _o(e) === null && (l = n), (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          ji(t, !1, l, n, o);
        break;
      case 'backwards':
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && _o(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        ji(t, !0, n, null, o);
        break;
      case 'together':
        ji(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ro(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Yt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Tn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(R(153));
  if (t.child !== null) {
    for (
      e = t.child, n = dn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = dn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function bm(e, t, n) {
  switch (t.tag) {
    case 3:
      Mf(t), pr();
      break;
    case 5:
      nf(t);
      break;
    case 1:
      nt(t.type) && Eo(t);
      break;
    case 4:
      xu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      fe(ko, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (fe(ve, ve.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Of(e, t, n)
          : (fe(ve, ve.current & 1), (e = Yt(e, t, n)), e !== null ? e.sibling : null);
      fe(ve, ve.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Af(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        fe(ve, ve.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), _f(e, t, n);
  }
  return Yt(e, t, n);
}
var Df, za, Lf, zf;
Df = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
za = function () {};
Lf = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Rn(Tt.current);
    var o = null;
    switch (n) {
      case 'input':
        (l = ta(e, l)), (r = ta(e, r)), (o = []);
        break;
      case 'select':
        (l = we({}, l, { value: void 0 })), (r = we({}, r, { value: void 0 })), (o = []);
        break;
      case 'textarea':
        (l = la(e, l)), (r = la(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = yo);
    }
    ia(n, r);
    var i;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === 'style') {
          var a = l[c];
          for (i in a) a.hasOwnProperty(i) && (n || (n = {}), (n[i] = ''));
        } else
          c !== 'dangerouslySetInnerHTML' &&
            c !== 'children' &&
            c !== 'suppressContentEditableWarning' &&
            c !== 'suppressHydrationWarning' &&
            c !== 'autoFocus' &&
            (Zr.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
    for (c in r) {
      var u = r[c];
      if (
        ((a = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && u !== a && (u != null || a != null))
      )
        if (c === 'style')
          if (a) {
            for (i in a)
              !a.hasOwnProperty(i) ||
                (u && u.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ''));
            for (i in u)
              u.hasOwnProperty(i) && a[i] !== u[i] && (n || (n = {}), (n[i] = u[i]));
          } else n || (o || (o = []), o.push(c, n)), (n = u);
        else
          c === 'dangerouslySetInnerHTML'
            ? ((u = u ? u.__html : void 0),
              (a = a ? a.__html : void 0),
              u != null && a !== u && (o = o || []).push(c, u))
            : c === 'children'
            ? (typeof u != 'string' && typeof u != 'number') ||
              (o = o || []).push(c, '' + u)
            : c !== 'suppressContentEditableWarning' &&
              c !== 'suppressHydrationWarning' &&
              (Zr.hasOwnProperty(c)
                ? (u != null && c === 'onScroll' && pe('scroll', e),
                  o || a === u || (o = []))
                : (o = o || []).push(c, u));
    }
    n && (o = o || []).push('style', n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
zf = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Lr(e, t) {
  if (!ge)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ve(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Hm(e, t, n) {
  var r = t.pendingProps;
  switch ((mu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ve(t), null;
    case 1:
      return nt(t.type) && wo(), Ve(t), null;
    case 3:
      return (
        (r = t.stateNode),
        mr(),
        he(tt),
        he(Qe),
        Cu(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ul(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ct !== null && (Ua(Ct), (Ct = null)))),
        za(e, t),
        Ve(t),
        null
      );
    case 5:
      ku(t);
      var l = Rn(cl.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Lf(e, t, n, r, l), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(R(166));
          return Ve(t), null;
        }
        if (((e = Rn(Tt.current)), Ul(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Lt] = t), (r[ul] = o), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              pe('cancel', r), pe('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              pe('load', r);
              break;
            case 'video':
            case 'audio':
              for (l = 0; l < jr.length; l++) pe(jr[l], r);
              break;
            case 'source':
              pe('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              pe('error', r), pe('load', r);
              break;
            case 'details':
              pe('toggle', r);
              break;
            case 'input':
              os(r, o), pe('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!o.multiple }), pe('invalid', r);
              break;
            case 'textarea':
              as(r, o), pe('invalid', r);
          }
          ia(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var a = o[i];
              i === 'children'
                ? typeof a == 'string'
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 && Bl(r.textContent, a, e),
                    (l = ['children', a]))
                  : typeof a == 'number' &&
                    r.textContent !== '' + a &&
                    (o.suppressHydrationWarning !== !0 && Bl(r.textContent, a, e),
                    (l = ['children', '' + a]))
                : Zr.hasOwnProperty(i) &&
                  a != null &&
                  i === 'onScroll' &&
                  pe('scroll', r);
            }
          switch (n) {
            case 'input':
              Ll(r), is(r, o, !0);
              break;
            case 'textarea':
              Ll(r), us(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof o.onClick == 'function' && (r.onclick = yo);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = od(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = i.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === 'select' &&
                    ((i = e),
                    r.multiple ? (i.multiple = !0) : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[Lt] = t),
            (e[ul] = r),
            Df(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = aa(n, r)), n)) {
              case 'dialog':
                pe('cancel', e), pe('close', e), (l = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                pe('load', e), (l = r);
                break;
              case 'video':
              case 'audio':
                for (l = 0; l < jr.length; l++) pe(jr[l], e);
                l = r;
                break;
              case 'source':
                pe('error', e), (l = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                pe('error', e), pe('load', e), (l = r);
                break;
              case 'details':
                pe('toggle', e), (l = r);
                break;
              case 'input':
                os(e, r), (l = ta(e, r)), pe('invalid', e);
                break;
              case 'option':
                l = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = we({}, r, { value: void 0 })),
                  pe('invalid', e);
                break;
              case 'textarea':
                as(e, r), (l = la(e, r)), pe('invalid', e);
                break;
              default:
                l = r;
            }
            ia(n, l), (a = l);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var u = a[o];
                o === 'style'
                  ? ud(e, u)
                  : o === 'dangerouslySetInnerHTML'
                  ? ((u = u ? u.__html : void 0), u != null && id(e, u))
                  : o === 'children'
                  ? typeof u == 'string'
                    ? (n !== 'textarea' || u !== '') && qr(e, u)
                    : typeof u == 'number' && qr(e, '' + u)
                  : o !== 'suppressContentEditableWarning' &&
                    o !== 'suppressHydrationWarning' &&
                    o !== 'autoFocus' &&
                    (Zr.hasOwnProperty(o)
                      ? u != null && o === 'onScroll' && pe('scroll', e)
                      : u != null && eu(e, o, u, i));
              }
            switch (n) {
              case 'input':
                Ll(e), is(e, r, !1);
                break;
              case 'textarea':
                Ll(e), us(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + hn(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? lr(e, !!r.multiple, o, !1)
                    : r.defaultValue != null && lr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == 'function' && (e.onclick = yo);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ve(t), null;
    case 6:
      if (e && t.stateNode != null) zf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(R(166));
        if (((n = Rn(cl.current)), Rn(Tt.current), Ul(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Lt] = t),
            (o = r.nodeValue !== n) && ((e = at), e !== null))
          )
            switch (e.tag) {
              case 3:
                Bl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Bl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Lt] = t),
            (t.stateNode = r);
      }
      return Ve(t), null;
    case 13:
      if (
        (he(ve),
        (r = t.memoizedState),
        e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ge && it !== null && t.mode & 1 && !(t.flags & 128))
          Kd(), pr(), (t.flags |= 98560), (o = !1);
        else if (((o = Ul(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(R(318));
            if (((o = t.memoizedState), (o = o !== null ? o.dehydrated : null), !o))
              throw Error(R(317));
            o[Lt] = t;
          } else pr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ve(t), (o = !1);
        } else Ct !== null && (Ua(Ct), (Ct = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 && (e === null || ve.current & 1 ? De === 0 && (De = 3) : Iu())),
          t.updateQueue !== null && (t.flags |= 4),
          Ve(t),
          null);
    case 4:
      return mr(), za(e, t), e === null && il(t.stateNode.containerInfo), Ve(t), null;
    case 10:
      return wu(t.type._context), Ve(t), null;
    case 17:
      return nt(t.type) && wo(), Ve(t), null;
    case 19:
      if ((he(ve), (o = t.memoizedState), o === null)) return Ve(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) Lr(o, !1);
        else {
          if (De !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = _o(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Lr(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : { lanes: e.lanes, firstContext: e.firstContext })),
                    (n = n.sibling);
                return fe(ve, (ve.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Ce() > vr &&
            ((t.flags |= 128), (r = !0), Lr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = _o(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Lr(o, !0),
              o.tail === null && o.tailMode === 'hidden' && !i.alternate && !ge)
            )
              return Ve(t), null;
          } else
            2 * Ce() - o.renderingStartTime > vr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Lr(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last), n !== null ? (n.sibling = i) : (t.child = i), (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Ce()),
          (t.sibling = null),
          (n = ve.current),
          fe(ve, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ve(t), null);
    case 22:
    case 23:
      return (
        Nu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ot & 1073741824 && (Ve(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ve(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(R(156, t.tag));
}
function Wm(e, t) {
  switch ((mu(t), t.tag)) {
    case 1:
      return (
        nt(t.type) && wo(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        mr(),
        he(tt),
        he(Qe),
        Cu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return ku(t), null;
    case 13:
      if ((he(ve), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(R(340));
        pr();
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 19:
      return he(ve), null;
    case 4:
      return mr(), null;
    case 10:
      return wu(t.type._context), null;
    case 22:
    case 23:
      return Nu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Wl = !1,
  Ge = !1,
  Vm = typeof WeakSet == 'function' ? WeakSet : Set,
  j = null;
function er(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        Se(e, t, r);
      }
    else n.current = null;
}
function Ta(e, t, n) {
  try {
    n();
  } catch (r) {
    Se(e, t, r);
  }
}
var Js = !1;
function Gm(e, t) {
  if (((va = mo), (e = Id()), pu(e))) {
    if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            a = -1,
            u = -1,
            c = 0,
            h = 0,
            m = e,
            d = null;
          t: for (;;) {
            for (
              var v;
              m !== n || (l !== 0 && m.nodeType !== 3) || (a = i + l),
                m !== o || (r !== 0 && m.nodeType !== 3) || (u = i + r),
                m.nodeType === 3 && (i += m.nodeValue.length),
                (v = m.firstChild) !== null;

            )
              (d = m), (m = v);
            for (;;) {
              if (m === e) break t;
              if (
                (d === n && ++c === l && (a = i),
                d === o && ++h === r && (u = i),
                (v = m.nextSibling) !== null)
              )
                break;
              (m = d), (d = m.parentNode);
            }
            m = v;
          }
          n = a === -1 || u === -1 ? null : { start: a, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ya = { focusedElem: e, selectionRange: n }, mo = !1, j = t; j !== null; )
    if (((t = j), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (j = e);
    else
      for (; j !== null; ) {
        t = j;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var y = w.memoizedProps,
                    _ = w.memoizedState,
                    p = t.stateNode,
                    f = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : xt(t.type, y),
                      _,
                    );
                  p.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = '')
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(R(163));
            }
        } catch (E) {
          Se(t, t.return, E);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (j = e);
          break;
        }
        j = t.return;
      }
  return (w = Js), (Js = !1), w;
}
function Qr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && Ta(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Yo(e, t) {
  if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Na(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function Tf(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Tf(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Lt], delete t[ul], delete t[Sa], delete t[Mm], delete t[Om])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Nf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Zs(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Nf(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ia(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = yo));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ia(e, t, n), e = e.sibling; e !== null; ) Ia(e, t, n), (e = e.sibling);
}
function Fa(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Fa(e, t, n), e = e.sibling; e !== null; ) Fa(e, t, n), (e = e.sibling);
}
var $e = null,
  kt = !1;
function Xt(e, t, n) {
  for (n = n.child; n !== null; ) If(e, t, n), (n = n.sibling);
}
function If(e, t, n) {
  if (zt && typeof zt.onCommitFiberUnmount == 'function')
    try {
      zt.onCommitFiberUnmount(Bo, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ge || er(n, t);
    case 6:
      var r = $e,
        l = kt;
      ($e = null),
        Xt(e, t, n),
        ($e = r),
        (kt = l),
        $e !== null &&
          (kt
            ? ((e = $e),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : $e.removeChild(n.stateNode));
      break;
    case 18:
      $e !== null &&
        (kt
          ? ((e = $e),
            (n = n.stateNode),
            e.nodeType === 8 ? Li(e.parentNode, n) : e.nodeType === 1 && Li(e, n),
            rl(e))
          : Li($e, n.stateNode));
      break;
    case 4:
      (r = $e),
        (l = kt),
        ($e = n.stateNode.containerInfo),
        (kt = !0),
        Xt(e, t, n),
        ($e = r),
        (kt = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Ge && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag), i !== void 0 && (o & 2 || o & 4) && Ta(n, t, i), (l = l.next);
        } while (l !== r);
      }
      Xt(e, t, n);
      break;
    case 1:
      if (
        !Ge &&
        (er(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          Se(n, t, a);
        }
      Xt(e, t, n);
      break;
    case 21:
      Xt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ge = (r = Ge) || n.memoizedState !== null), Xt(e, t, n), (Ge = r))
        : Xt(e, t, n);
      break;
    default:
      Xt(e, t, n);
  }
}
function qs(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Vm()),
      t.forEach(function (r) {
        var l = tg.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function St(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          a = i;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              ($e = a.stateNode), (kt = !1);
              break e;
            case 3:
              ($e = a.stateNode.containerInfo), (kt = !0);
              break e;
            case 4:
              ($e = a.stateNode.containerInfo), (kt = !0);
              break e;
          }
          a = a.return;
        }
        if ($e === null) throw Error(R(160));
        If(o, i, l), ($e = null), (kt = !1);
        var u = l.alternate;
        u !== null && (u.return = null), (l.return = null);
      } catch (c) {
        Se(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Ff(t, e), (t = t.sibling);
}
function Ff(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((St(t, e), Ot(e), r & 4)) {
        try {
          Qr(3, e, e.return), Yo(3, e);
        } catch (y) {
          Se(e, e.return, y);
        }
        try {
          Qr(5, e, e.return);
        } catch (y) {
          Se(e, e.return, y);
        }
      }
      break;
    case 1:
      St(t, e), Ot(e), r & 512 && n !== null && er(n, n.return);
      break;
    case 5:
      if ((St(t, e), Ot(e), r & 512 && n !== null && er(n, n.return), e.flags & 32)) {
        var l = e.stateNode;
        try {
          qr(l, '');
        } catch (y) {
          Se(e, e.return, y);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          a = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            a === 'input' && o.type === 'radio' && o.name != null && rd(l, o), aa(a, i);
            var c = aa(a, o);
            for (i = 0; i < u.length; i += 2) {
              var h = u[i],
                m = u[i + 1];
              h === 'style'
                ? ud(l, m)
                : h === 'dangerouslySetInnerHTML'
                ? id(l, m)
                : h === 'children'
                ? qr(l, m)
                : eu(l, h, m, c);
            }
            switch (a) {
              case 'input':
                na(l, o);
                break;
              case 'textarea':
                ld(l, o);
                break;
              case 'select':
                var d = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var v = o.value;
                v != null
                  ? lr(l, !!o.multiple, v, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? lr(l, !!o.multiple, o.defaultValue, !0)
                      : lr(l, !!o.multiple, o.multiple ? [] : '', !1));
            }
            l[ul] = o;
          } catch (y) {
            Se(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((St(t, e), Ot(e), r & 4)) {
        if (e.stateNode === null) throw Error(R(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (y) {
          Se(e, e.return, y);
        }
      }
      break;
    case 3:
      if ((St(t, e), Ot(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          rl(t.containerInfo);
        } catch (y) {
          Se(e, e.return, y);
        }
      break;
    case 4:
      St(t, e), Ot(e);
      break;
    case 13:
      St(t, e),
        Ot(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (zu = Ce())),
        r & 4 && qs(e);
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ge = (c = Ge) || h), St(t, e), (Ge = c)) : St(t, e),
        Ot(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null), (e.stateNode.isHidden = c) && !h && e.mode & 1)
        )
          for (j = e, h = e.child; h !== null; ) {
            for (m = j = h; j !== null; ) {
              switch (((d = j), (v = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Qr(4, d, d.return);
                  break;
                case 1:
                  er(d, d.return);
                  var w = d.stateNode;
                  if (typeof w.componentWillUnmount == 'function') {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (y) {
                      Se(r, n, y);
                    }
                  }
                  break;
                case 5:
                  er(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    tc(m);
                    continue;
                  }
              }
              v !== null ? ((v.return = d), (j = v)) : tc(m);
            }
            h = h.sibling;
          }
        e: for (h = null, m = e; ; ) {
          if (m.tag === 5) {
            if (h === null) {
              h = m;
              try {
                (l = m.stateNode),
                  c
                    ? ((o = l.style),
                      typeof o.setProperty == 'function'
                        ? o.setProperty('display', 'none', 'important')
                        : (o.display = 'none'))
                    : ((a = m.stateNode),
                      (u = m.memoizedProps.style),
                      (i = u != null && u.hasOwnProperty('display') ? u.display : null),
                      (a.style.display = ad('display', i)));
              } catch (y) {
                Se(e, e.return, y);
              }
            }
          } else if (m.tag === 6) {
            if (h === null)
              try {
                m.stateNode.nodeValue = c ? '' : m.memoizedProps;
              } catch (y) {
                Se(e, e.return, y);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) || m.memoizedState === null || m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            h === m && (h = null), (m = m.return);
          }
          h === m && (h = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      St(t, e), Ot(e), r & 4 && qs(e);
      break;
    case 21:
      break;
    default:
      St(t, e), Ot(e);
  }
}
function Ot(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Nf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(R(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (qr(l, ''), (r.flags &= -33));
          var o = Zs(e);
          Fa(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            a = Zs(e);
          Ia(e, a, i);
          break;
        default:
          throw Error(R(161));
      }
    } catch (u) {
      Se(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Qm(e, t, n) {
  (j = e), $f(e);
}
function $f(e, t, n) {
  for (var r = (e.mode & 1) !== 0; j !== null; ) {
    var l = j,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Wl;
      if (!i) {
        var a = l.alternate,
          u = (a !== null && a.memoizedState !== null) || Ge;
        a = Wl;
        var c = Ge;
        if (((Wl = i), (Ge = u) && !c))
          for (j = l; j !== null; )
            (i = j),
              (u = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? nc(l)
                : u !== null
                ? ((u.return = i), (j = u))
                : nc(l);
        for (; o !== null; ) (j = o), $f(o), (o = o.sibling);
        (j = l), (Wl = a), (Ge = c);
      }
      ec(e);
    } else l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (j = o)) : ec(e);
  }
}
function ec(e) {
  for (; j !== null; ) {
    var t = j;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ge || Yo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ge)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : xt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var o = t.updateQueue;
              o !== null && Fs(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Fs(t, i, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var u = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    u.autoFocus && n.focus();
                    break;
                  case 'img':
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var h = c.memoizedState;
                  if (h !== null) {
                    var m = h.dehydrated;
                    m !== null && rl(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(R(163));
          }
        Ge || (t.flags & 512 && Na(t));
      } catch (d) {
        Se(t, t.return, d);
      }
    }
    if (t === e) {
      j = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (j = n);
      break;
    }
    j = t.return;
  }
}
function tc(e) {
  for (; j !== null; ) {
    var t = j;
    if (t === e) {
      j = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (j = n);
      break;
    }
    j = t.return;
  }
}
function nc(e) {
  for (; j !== null; ) {
    var t = j;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Yo(4, t);
          } catch (u) {
            Se(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              Se(t, l, u);
            }
          }
          var o = t.return;
          try {
            Na(t);
          } catch (u) {
            Se(t, o, u);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Na(t);
          } catch (u) {
            Se(t, i, u);
          }
      }
    } catch (u) {
      Se(t, t.return, u);
    }
    if (t === e) {
      j = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (j = a);
      break;
    }
    j = t.return;
  }
}
var Ym = Math.ceil,
  Oo = Kt.ReactCurrentDispatcher,
  Du = Kt.ReactCurrentOwner,
  mt = Kt.ReactCurrentBatchConfig,
  le = 0,
  Ne = null,
  Me = null,
  Be = 0,
  ot = 0,
  tr = vn(0),
  De = 0,
  hl = null,
  Tn = 0,
  Ko = 0,
  Lu = 0,
  Yr = null,
  qe = null,
  zu = 0,
  vr = 1 / 0,
  jt = null,
  Ao = !1,
  $a = null,
  sn = null,
  Vl = !1,
  nn = null,
  Do = 0,
  Kr = 0,
  ja = null,
  lo = -1,
  oo = 0;
function Xe() {
  return le & 6 ? Ce() : lo !== -1 ? lo : (lo = Ce());
}
function cn(e) {
  return e.mode & 1
    ? le & 2 && Be !== 0
      ? Be & -Be
      : Dm.transition !== null
      ? (oo === 0 && (oo = Ed()), oo)
      : ((e = ae),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Rd(e.type))),
        e)
    : 1;
}
function Rt(e, t, n, r) {
  if (50 < Kr) throw ((Kr = 0), (ja = null), Error(R(185)));
  Sl(e, n, r),
    (!(le & 2) || e !== Ne) &&
      (e === Ne && (!(le & 2) && (Ko |= n), De === 4 && en(e, Be)),
      rt(e, r),
      n === 1 && le === 0 && !(t.mode & 1) && ((vr = Ce() + 500), Vo && yn()));
}
function rt(e, t) {
  var n = e.callbackNode;
  Dh(e, t);
  var r = ho(e, e === Ne ? Be : 0);
  if (r === 0) n !== null && ds(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && ds(n), t === 1))
      e.tag === 0 ? Am(rc.bind(null, e)) : Gd(rc.bind(null, e)),
        _m(function () {
          !(le & 6) && yn();
        }),
        (n = null);
    else {
      switch (Sd(r)) {
        case 1:
          n = ou;
          break;
        case 4:
          n = yd;
          break;
        case 16:
          n = po;
          break;
        case 536870912:
          n = wd;
          break;
        default:
          n = po;
      }
      n = Gf(n, jf.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function jf(e, t) {
  if (((lo = -1), (oo = 0), le & 6)) throw Error(R(327));
  var n = e.callbackNode;
  if (sr() && e.callbackNode !== n) return null;
  var r = ho(e, e === Ne ? Be : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Lo(e, r);
  else {
    t = r;
    var l = le;
    le |= 2;
    var o = Uf();
    (Ne !== e || Be !== t) && ((jt = null), (vr = Ce() + 500), On(e, t));
    do
      try {
        Jm();
        break;
      } catch (a) {
        Bf(e, a);
      }
    while (1);
    yu(),
      (Oo.current = o),
      (le = l),
      Me !== null ? (t = 0) : ((Ne = null), (Be = 0), (t = De));
  }
  if (t !== 0) {
    if ((t === 2 && ((l = fa(e)), l !== 0 && ((r = l), (t = Ba(e, l)))), t === 1))
      throw ((n = hl), On(e, 0), en(e, r), rt(e, Ce()), n);
    if (t === 6) en(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Km(l) &&
          ((t = Lo(e, r)),
          t === 2 && ((o = fa(e)), o !== 0 && ((r = o), (t = Ba(e, o)))),
          t === 1))
      )
        throw ((n = hl), On(e, 0), en(e, r), rt(e, Ce()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(R(345));
        case 2:
          xn(e, qe, jt);
          break;
        case 3:
          if ((en(e, r), (r & 130023424) === r && ((t = zu + 500 - Ce()), 10 < t))) {
            if (ho(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              Xe(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Ea(xn.bind(null, e, qe, jt), t);
            break;
          }
          xn(e, qe, jt);
          break;
        case 4:
          if ((en(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - _t(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = Ce() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Ym(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ea(xn.bind(null, e, qe, jt), r);
            break;
          }
          xn(e, qe, jt);
          break;
        case 5:
          xn(e, qe, jt);
          break;
        default:
          throw Error(R(329));
      }
    }
  }
  return rt(e, Ce()), e.callbackNode === n ? jf.bind(null, e) : null;
}
function Ba(e, t) {
  var n = Yr;
  return (
    e.current.memoizedState.isDehydrated && (On(e, t).flags |= 256),
    (e = Lo(e, t)),
    e !== 2 && ((t = qe), (qe = n), t !== null && Ua(t)),
    e
  );
}
function Ua(e) {
  qe === null ? (qe = e) : qe.push.apply(qe, e);
}
function Km(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!Mt(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function en(e, t) {
  for (
    t &= ~Lu, t &= ~Ko, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - _t(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function rc(e) {
  if (le & 6) throw Error(R(327));
  sr();
  var t = ho(e, 0);
  if (!(t & 1)) return rt(e, Ce()), null;
  var n = Lo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = fa(e);
    r !== 0 && ((t = r), (n = Ba(e, r)));
  }
  if (n === 1) throw ((n = hl), On(e, 0), en(e, t), rt(e, Ce()), n);
  if (n === 6) throw Error(R(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    xn(e, qe, jt),
    rt(e, Ce()),
    null
  );
}
function Tu(e, t) {
  var n = le;
  le |= 1;
  try {
    return e(t);
  } finally {
    (le = n), le === 0 && ((vr = Ce() + 500), Vo && yn());
  }
}
function Nn(e) {
  nn !== null && nn.tag === 0 && !(le & 6) && sr();
  var t = le;
  le |= 1;
  var n = mt.transition,
    r = ae;
  try {
    if (((mt.transition = null), (ae = 1), e)) return e();
  } finally {
    (ae = r), (mt.transition = n), (le = t), !(le & 6) && yn();
  }
}
function Nu() {
  (ot = tr.current), he(tr);
}
function On(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Pm(n)), Me !== null))
    for (n = Me.return; n !== null; ) {
      var r = n;
      switch ((mu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && wo();
          break;
        case 3:
          mr(), he(tt), he(Qe), Cu();
          break;
        case 5:
          ku(r);
          break;
        case 4:
          mr();
          break;
        case 13:
          he(ve);
          break;
        case 19:
          he(ve);
          break;
        case 10:
          wu(r.type._context);
          break;
        case 22:
        case 23:
          Nu();
      }
      n = n.return;
    }
  if (
    ((Ne = e),
    (Me = e = dn(e.current, null)),
    (Be = ot = t),
    (De = 0),
    (hl = null),
    (Lu = Ko = Tn = 0),
    (qe = Yr = null),
    _n !== null)
  ) {
    for (t = 0; t < _n.length; t++)
      if (((n = _n[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    _n = null;
  }
  return e;
}
function Bf(e, t) {
  do {
    var n = Me;
    try {
      if ((yu(), (to.current = Mo), Ro)) {
        for (var r = ye.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Ro = !1;
      }
      if (
        ((zn = 0),
        (Te = Ae = ye = null),
        (Gr = !1),
        (dl = 0),
        (Du.current = null),
        n === null || n.return === null)
      ) {
        (De = 1), (hl = t), (Me = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          a = n,
          u = t;
        if (
          ((t = Be),
          (a.flags |= 32768),
          u !== null && typeof u == 'object' && typeof u.then == 'function')
        ) {
          var c = u,
            h = a,
            m = h.tag;
          if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var d = h.alternate;
            d
              ? ((h.updateQueue = d.updateQueue),
                (h.memoizedState = d.memoizedState),
                (h.lanes = d.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var v = Ws(i);
          if (v !== null) {
            (v.flags &= -257),
              Vs(v, i, a, o, t),
              v.mode & 1 && Hs(o, c, t),
              (t = v),
              (u = c);
            var w = t.updateQueue;
            if (w === null) {
              var y = new Set();
              y.add(u), (t.updateQueue = y);
            } else w.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Hs(o, c, t), Iu();
              break e;
            }
            u = Error(R(426));
          }
        } else if (ge && a.mode & 1) {
          var _ = Ws(i);
          if (_ !== null) {
            !(_.flags & 65536) && (_.flags |= 256), Vs(_, i, a, o, t), gu(gr(u, a));
            break e;
          }
        }
        (o = u = gr(u, a)),
          De !== 4 && (De = 2),
          Yr === null ? (Yr = [o]) : Yr.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var p = kf(o, u, t);
              Is(o, p);
              break e;
            case 1:
              a = u;
              var f = o.type,
                g = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof f.getDerivedStateFromError == 'function' ||
                  (g !== null &&
                    typeof g.componentDidCatch == 'function' &&
                    (sn === null || !sn.has(g))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var E = Cf(o, a, t);
                Is(o, E);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Hf(n);
    } catch (C) {
      (t = C), Me === n && n !== null && (Me = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Uf() {
  var e = Oo.current;
  return (Oo.current = Mo), e === null ? Mo : e;
}
function Iu() {
  (De === 0 || De === 3 || De === 2) && (De = 4),
    Ne === null || (!(Tn & 268435455) && !(Ko & 268435455)) || en(Ne, Be);
}
function Lo(e, t) {
  var n = le;
  le |= 2;
  var r = Uf();
  (Ne !== e || Be !== t) && ((jt = null), On(e, t));
  do
    try {
      Xm();
      break;
    } catch (l) {
      Bf(e, l);
    }
  while (1);
  if ((yu(), (le = n), (Oo.current = r), Me !== null)) throw Error(R(261));
  return (Ne = null), (Be = 0), De;
}
function Xm() {
  for (; Me !== null; ) bf(Me);
}
function Jm() {
  for (; Me !== null && !xh(); ) bf(Me);
}
function bf(e) {
  var t = Vf(e.alternate, e, ot);
  (e.memoizedProps = e.pendingProps), t === null ? Hf(e) : (Me = t), (Du.current = null);
}
function Hf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Wm(n, t)), n !== null)) {
        (n.flags &= 32767), (Me = n);
        return;
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (De = 6), (Me = null);
        return;
      }
    } else if (((n = Hm(n, t, ot)), n !== null)) {
      Me = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Me = t;
      return;
    }
    Me = t = e;
  } while (t !== null);
  De === 0 && (De = 5);
}
function xn(e, t, n) {
  var r = ae,
    l = mt.transition;
  try {
    (mt.transition = null), (ae = 1), Zm(e, t, n, r);
  } finally {
    (mt.transition = l), (ae = r);
  }
  return null;
}
function Zm(e, t, n, r) {
  do sr();
  while (nn !== null);
  if (le & 6) throw Error(R(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(R(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Lh(e, o),
    e === Ne && ((Me = Ne = null), (Be = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Vl ||
      ((Vl = !0),
      Gf(po, function () {
        return sr(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = mt.transition), (mt.transition = null);
    var i = ae;
    ae = 1;
    var a = le;
    (le |= 4),
      (Du.current = null),
      Gm(e, n),
      Ff(n, e),
      ym(ya),
      (mo = !!va),
      (ya = va = null),
      (e.current = n),
      Qm(n),
      kh(),
      (le = a),
      (ae = i),
      (mt.transition = o);
  } else e.current = n;
  if (
    (Vl && ((Vl = !1), (nn = e), (Do = l)),
    (o = e.pendingLanes),
    o === 0 && (sn = null),
    _h(n.stateNode),
    rt(e, Ce()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Ao) throw ((Ao = !1), (e = $a), ($a = null), e);
  return (
    Do & 1 && e.tag !== 0 && sr(),
    (o = e.pendingLanes),
    o & 1 ? (e === ja ? Kr++ : ((Kr = 0), (ja = e))) : (Kr = 0),
    yn(),
    null
  );
}
function sr() {
  if (nn !== null) {
    var e = Sd(Do),
      t = mt.transition,
      n = ae;
    try {
      if (((mt.transition = null), (ae = 16 > e ? 16 : e), nn === null)) var r = !1;
      else {
        if (((e = nn), (nn = null), (Do = 0), le & 6)) throw Error(R(331));
        var l = le;
        for (le |= 4, j = e.current; j !== null; ) {
          var o = j,
            i = o.child;
          if (j.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var c = a[u];
                for (j = c; j !== null; ) {
                  var h = j;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qr(8, h, o);
                  }
                  var m = h.child;
                  if (m !== null) (m.return = h), (j = m);
                  else
                    for (; j !== null; ) {
                      h = j;
                      var d = h.sibling,
                        v = h.return;
                      if ((Tf(h), h === c)) {
                        j = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = v), (j = d);
                        break;
                      }
                      j = v;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var y = w.child;
                if (y !== null) {
                  w.child = null;
                  do {
                    var _ = y.sibling;
                    (y.sibling = null), (y = _);
                  } while (y !== null);
                }
              }
              j = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (j = i);
          else
            e: for (; j !== null; ) {
              if (((o = j), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Qr(9, o, o.return);
                }
              var p = o.sibling;
              if (p !== null) {
                (p.return = o.return), (j = p);
                break e;
              }
              j = o.return;
            }
        }
        var f = e.current;
        for (j = f; j !== null; ) {
          i = j;
          var g = i.child;
          if (i.subtreeFlags & 2064 && g !== null) (g.return = i), (j = g);
          else
            e: for (i = f; j !== null; ) {
              if (((a = j), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Yo(9, a);
                  }
                } catch (C) {
                  Se(a, a.return, C);
                }
              if (a === i) {
                j = null;
                break e;
              }
              var E = a.sibling;
              if (E !== null) {
                (E.return = a.return), (j = E);
                break e;
              }
              j = a.return;
            }
        }
        if (((le = l), yn(), zt && typeof zt.onPostCommitFiberRoot == 'function'))
          try {
            zt.onPostCommitFiberRoot(Bo, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ae = n), (mt.transition = t);
    }
  }
  return !1;
}
function lc(e, t, n) {
  (t = gr(n, t)),
    (t = kf(e, t, 1)),
    (e = un(e, t, 1)),
    (t = Xe()),
    e !== null && (Sl(e, 1, t), rt(e, t));
}
function Se(e, t, n) {
  if (e.tag === 3) lc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        lc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' && (sn === null || !sn.has(r)))
        ) {
          (e = gr(n, e)),
            (e = Cf(t, e, 1)),
            (t = un(t, e, 1)),
            (e = Xe()),
            t !== null && (Sl(t, 1, e), rt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function qm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Xe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ne === e &&
      (Be & n) === n &&
      (De === 4 || (De === 3 && (Be & 130023424) === Be && 500 > Ce() - zu)
        ? On(e, 0)
        : (Lu |= n)),
    rt(e, t);
}
function Wf(e, t) {
  t === 0 &&
    (e.mode & 1 ? ((t = Nl), (Nl <<= 1), !(Nl & 130023424) && (Nl = 4194304)) : (t = 1));
  var n = Xe();
  (e = Qt(e, t)), e !== null && (Sl(e, t, n), rt(e, n));
}
function eg(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Wf(e, n);
}
function tg(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(R(314));
  }
  r !== null && r.delete(t), Wf(e, n);
}
var Vf;
Vf = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || tt.current) et = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (et = !1), bm(e, t, n);
      et = !!(e.flags & 131072);
    }
  else (et = !1), ge && t.flags & 1048576 && Qd(t, xo, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      ro(e, t), (e = t.pendingProps);
      var l = fr(t, Qe.current);
      ur(t, n), (l = _u(null, t, r, e, l, n));
      var o = Ru();
      return (
        (t.flags |= 1),
        typeof l == 'object' &&
        l !== null &&
        typeof l.render == 'function' &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            nt(r) ? ((o = !0), Eo(t)) : (o = !1),
            (t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null),
            Su(t),
            (l.updater = Go),
            (t.stateNode = l),
            (l._reactInternals = t),
            Ra(t, r, e, n),
            (t = Aa(null, t, r, !0, o, n)))
          : ((t.tag = 0), ge && o && hu(t), Ke(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (ro(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = rg(r)),
          (e = xt(r, e)),
          l)
        ) {
          case 0:
            t = Oa(null, t, r, e, n);
            break e;
          case 1:
            t = Ys(null, t, r, e, n);
            break e;
          case 11:
            t = Gs(null, t, r, e, n);
            break e;
          case 14:
            t = Qs(null, t, r, xt(r.type, e), n);
            break e;
        }
        throw Error(R(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : xt(r, l)),
        Oa(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : xt(r, l)),
        Ys(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Mf(t), e === null)) throw Error(R(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          Jd(e, t),
          Po(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = gr(Error(R(423)), t)), (t = Ks(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = gr(Error(R(424)), t)), (t = Ks(e, t, r, n, l));
            break e;
          } else
            for (
              it = an(t.stateNode.containerInfo.firstChild),
                at = t,
                ge = !0,
                Ct = null,
                n = tf(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((pr(), r === l)) {
            t = Yt(e, t, n);
            break e;
          }
          Ke(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        nf(t),
        e === null && Ca(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        wa(r, l) ? (i = null) : o !== null && wa(r, o) && (t.flags |= 32),
        Rf(e, t),
        Ke(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Ca(t), null;
    case 13:
      return Of(e, t, n);
    case 4:
      return (
        xu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = hr(t, null, r, n)) : Ke(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : xt(r, l)),
        Gs(e, t, r, l, n)
      );
    case 7:
      return Ke(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ke(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ke(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          fe(ko, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (Mt(o.value, i)) {
            if (o.children === l.children && !tt.current) {
              t = Yt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                i = o.child;
                for (var u = a.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (o.tag === 1) {
                      (u = Ht(-1, n & -n)), (u.tag = 2);
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var h = c.pending;
                        h === null ? (u.next = u) : ((u.next = h.next), (h.next = u)),
                          (c.pending = u);
                      }
                    }
                    (o.lanes |= n),
                      (u = o.alternate),
                      u !== null && (u.lanes |= n),
                      Pa(o.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(R(341));
                (i.lanes |= n),
                  (a = i.alternate),
                  a !== null && (a.lanes |= n),
                  Pa(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        Ke(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        ur(t, n),
        (l = gt(l)),
        (r = r(l)),
        (t.flags |= 1),
        Ke(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type), (l = xt(r, t.pendingProps)), (l = xt(r.type, l)), Qs(e, t, r, l, n)
      );
    case 15:
      return Pf(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : xt(r, l)),
        ro(e, t),
        (t.tag = 1),
        nt(r) ? ((e = !0), Eo(t)) : (e = !1),
        ur(t, n),
        qd(t, r, l),
        Ra(t, r, l, n),
        Aa(null, t, r, !0, e, n)
      );
    case 19:
      return Af(e, t, n);
    case 22:
      return _f(e, t, n);
  }
  throw Error(R(156, t.tag));
};
function Gf(e, t) {
  return vd(e, t);
}
function ng(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ht(e, t, n, r) {
  return new ng(e, t, n, r);
}
function Fu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function rg(e) {
  if (typeof e == 'function') return Fu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === nu)) return 11;
    if (e === ru) return 14;
  }
  return 2;
}
function dn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ht(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function io(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == 'function')) Fu(e) && (i = 1);
  else if (typeof e == 'string') i = 5;
  else
    e: switch (e) {
      case Vn:
        return An(n.children, l, o, t);
      case tu:
        (i = 8), (l |= 8);
        break;
      case Ji:
        return (e = ht(12, n, t, l | 2)), (e.elementType = Ji), (e.lanes = o), e;
      case Zi:
        return (e = ht(13, n, t, l)), (e.elementType = Zi), (e.lanes = o), e;
      case qi:
        return (e = ht(19, n, t, l)), (e.elementType = qi), (e.lanes = o), e;
      case ed:
        return Xo(n, l, o, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Zc:
              i = 10;
              break e;
            case qc:
              i = 9;
              break e;
            case nu:
              i = 11;
              break e;
            case ru:
              i = 14;
              break e;
            case Jt:
              (i = 16), (r = null);
              break e;
          }
        throw Error(R(130, e == null ? e : typeof e, ''));
    }
  return (t = ht(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t;
}
function An(e, t, n, r) {
  return (e = ht(7, e, r, t)), (e.lanes = n), e;
}
function Xo(e, t, n, r) {
  return (
    (e = ht(22, e, r, t)),
    (e.elementType = ed),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Bi(e, t, n) {
  return (e = ht(6, e, null, t)), (e.lanes = n), e;
}
function Ui(e, t, n) {
  return (
    (t = ht(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function lg(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Si(0)),
    (this.expirationTimes = Si(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Si(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function $u(e, t, n, r, l, o, i, a, u) {
  return (
    (e = new lg(e, t, n, a, u)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = ht(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Su(o),
    e
  );
}
function og(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Wn,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Qf(e) {
  if (!e) return mn;
  e = e._reactInternals;
  e: {
    if (jn(e) !== e || e.tag !== 1) throw Error(R(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (nt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(R(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (nt(n)) return Vd(e, n, t);
  }
  return t;
}
function Yf(e, t, n, r, l, o, i, a, u) {
  return (
    (e = $u(n, r, !0, e, l, o, i, a, u)),
    (e.context = Qf(null)),
    (n = e.current),
    (r = Xe()),
    (l = cn(n)),
    (o = Ht(r, l)),
    (o.callback = t ?? null),
    un(n, o, l),
    (e.current.lanes = l),
    Sl(e, l, r),
    rt(e, r),
    e
  );
}
function Jo(e, t, n, r) {
  var l = t.current,
    o = Xe(),
    i = cn(l);
  return (
    (n = Qf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ht(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = un(l, t, i)),
    e !== null && (Rt(e, l, i, o), eo(e, l, i)),
    i
  );
}
function zo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function oc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ju(e, t) {
  oc(e, t), (e = e.alternate) && oc(e, t);
}
function ig() {
  return null;
}
var Kf =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function Bu(e) {
  this._internalRoot = e;
}
Zo.prototype.render = Bu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(R(409));
  Jo(e, t, null, null);
};
Zo.prototype.unmount = Bu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Nn(function () {
      Jo(null, e, null, null);
    }),
      (t[Gt] = null);
  }
};
function Zo(e) {
  this._internalRoot = e;
}
Zo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Cd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < qt.length && t !== 0 && t < qt[n].priority; n++);
    qt.splice(n, 0, e), n === 0 && _d(e);
  }
};
function Uu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function qo(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function ic() {}
function ag(e, t, n, r, l) {
  if (l) {
    if (typeof r == 'function') {
      var o = r;
      r = function () {
        var c = zo(i);
        o.call(c);
      };
    }
    var i = Yf(t, r, e, 0, null, !1, !1, '', ic);
    return (
      (e._reactRootContainer = i),
      (e[Gt] = i.current),
      il(e.nodeType === 8 ? e.parentNode : e),
      Nn(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == 'function') {
    var a = r;
    r = function () {
      var c = zo(u);
      a.call(c);
    };
  }
  var u = $u(e, 0, !1, null, null, !1, !1, '', ic);
  return (
    (e._reactRootContainer = u),
    (e[Gt] = u.current),
    il(e.nodeType === 8 ? e.parentNode : e),
    Nn(function () {
      Jo(t, u, n, r);
    }),
    u
  );
}
function ei(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == 'function') {
      var a = l;
      l = function () {
        var u = zo(i);
        a.call(u);
      };
    }
    Jo(t, i, e, l);
  } else i = ag(n, t, e, l, r);
  return zo(i);
}
xd = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = $r(t.pendingLanes);
        n !== 0 && (iu(t, n | 1), rt(t, Ce()), !(le & 6) && ((vr = Ce() + 500), yn()));
      }
      break;
    case 13:
      Nn(function () {
        var r = Qt(e, 1);
        if (r !== null) {
          var l = Xe();
          Rt(r, e, 1, l);
        }
      }),
        ju(e, 1);
  }
};
au = function (e) {
  if (e.tag === 13) {
    var t = Qt(e, 134217728);
    if (t !== null) {
      var n = Xe();
      Rt(t, e, 134217728, n);
    }
    ju(e, 134217728);
  }
};
kd = function (e) {
  if (e.tag === 13) {
    var t = cn(e),
      n = Qt(e, t);
    if (n !== null) {
      var r = Xe();
      Rt(n, e, t, r);
    }
    ju(e, t);
  }
};
Cd = function () {
  return ae;
};
Pd = function (e, t) {
  var n = ae;
  try {
    return (ae = e), t();
  } finally {
    ae = n;
  }
};
sa = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((na(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Wo(r);
            if (!l) throw Error(R(90));
            nd(r), na(r, l);
          }
        }
      }
      break;
    case 'textarea':
      ld(e, n);
      break;
    case 'select':
      (t = n.value), t != null && lr(e, !!n.multiple, t, !1);
  }
};
dd = Tu;
fd = Nn;
var ug = { usingClientEntryPoint: !1, Events: [kl, Kn, Wo, sd, cd, Tu] },
  zr = {
    findFiberByHostInstance: Pn,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  sg = {
    bundleType: zr.bundleType,
    version: zr.version,
    rendererPackageName: zr.rendererPackageName,
    rendererConfig: zr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Kt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = md(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: zr.findFiberByHostInstance || ig,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Gl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Gl.isDisabled && Gl.supportsFiber)
    try {
      (Bo = Gl.inject(sg)), (zt = Gl);
    } catch {}
}
st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ug;
st.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Uu(t)) throw Error(R(200));
  return og(e, t, null, n);
};
st.createRoot = function (e, t) {
  if (!Uu(e)) throw Error(R(299));
  var n = !1,
    r = '',
    l = Kf;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = $u(e, 1, !1, null, null, n, !1, r, l)),
    (e[Gt] = t.current),
    il(e.nodeType === 8 ? e.parentNode : e),
    new Bu(t)
  );
};
st.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(R(188))
      : ((e = Object.keys(e).join(',')), Error(R(268, e)));
  return (e = md(t)), (e = e === null ? null : e.stateNode), e;
};
st.flushSync = function (e) {
  return Nn(e);
};
st.hydrate = function (e, t, n) {
  if (!qo(t)) throw Error(R(200));
  return ei(null, e, t, !0, n);
};
st.hydrateRoot = function (e, t, n) {
  if (!Uu(e)) throw Error(R(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = '',
    i = Kf;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Yf(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[Gt] = t.current),
    il(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new Zo(t);
};
st.render = function (e, t, n) {
  if (!qo(t)) throw Error(R(200));
  return ei(null, e, t, !1, n);
};
st.unmountComponentAtNode = function (e) {
  if (!qo(e)) throw Error(R(40));
  return e._reactRootContainer
    ? (Nn(function () {
        ei(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Gt] = null);
        });
      }),
      !0)
    : !1;
};
st.unstable_batchedUpdates = Tu;
st.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!qo(n)) throw Error(R(200));
  if (e == null || e._reactInternals === void 0) throw Error(R(38));
  return ei(e, t, n, !1, r);
};
st.version = '18.2.0-next-9e3b772b8-20220608';
(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), (e.exports = st);
})(ih);
var Xf,
  ac = Yi;
(Xf = ac.createRoot), ac.hydrateRoot;
/**
 * @remix-run/router v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ce() {
  return (
    (ce = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ce.apply(this, arguments)
  );
}
var Re;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(Re || (Re = {}));
const uc = 'popstate';
function cg(e) {
  e === void 0 && (e = {});
  function t(l, o) {
    let {
      pathname: i = '/',
      search: a = '',
      hash: u = '',
    } = It(l.location.hash.substr(1));
    return ml(
      '',
      { pathname: i, search: a, hash: u },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || 'default',
    );
  }
  function n(l, o) {
    let i = l.document.querySelector('base'),
      a = '';
    if (i && i.getAttribute('href')) {
      let u = l.location.href,
        c = u.indexOf('#');
      a = c === -1 ? u : u.slice(0, c);
    }
    return a + '#' + (typeof o == 'string' ? o : Nt(o));
  }
  function r(l, o) {
    dg(
      l.pathname.charAt(0) === '/',
      'relative pathnames are not supported in hash history.push(' +
        JSON.stringify(o) +
        ')',
    );
  }
  return pg(t, n, r, e);
}
function q(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function dg(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function fg() {
  return Math.random().toString(36).substr(2, 8);
}
function sc(e) {
  return { usr: e.state, key: e.key };
}
function ml(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ce(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? It(t) : t,
      { state: n, key: (t && t.key) || r || fg() },
    )
  );
}
function Nt(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e;
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  );
}
function It(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf('?');
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e);
  }
  return t;
}
function gl(e) {
  let t =
      typeof window < 'u' &&
      typeof window.location < 'u' &&
      window.location.origin !== 'null'
        ? window.location.origin
        : window.location.href,
    n = typeof e == 'string' ? e : Nt(e);
  return (
    q(t, 'No window.location.(origin|href) available to create URL for href: ' + n),
    new URL(n, t)
  );
}
function pg(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: o = !1 } = r,
    i = l.history,
    a = Re.Pop,
    u = null;
  function c() {
    (a = Re.Pop), u && u({ action: a, location: d.location });
  }
  function h(v, w) {
    a = Re.Push;
    let y = ml(d.location, v, w);
    n && n(y, v);
    let _ = sc(y),
      p = d.createHref(y);
    try {
      i.pushState(_, '', p);
    } catch {
      l.location.assign(p);
    }
    o && u && u({ action: a, location: d.location });
  }
  function m(v, w) {
    a = Re.Replace;
    let y = ml(d.location, v, w);
    n && n(y, v);
    let _ = sc(y),
      p = d.createHref(y);
    i.replaceState(_, '', p), o && u && u({ action: a, location: d.location });
  }
  let d = {
    get action() {
      return a;
    },
    get location() {
      return e(l, i);
    },
    listen(v) {
      if (u) throw new Error('A history only accepts one active listener');
      return (
        l.addEventListener(uc, c),
        (u = v),
        () => {
          l.removeEventListener(uc, c), (u = null);
        }
      );
    },
    createHref(v) {
      return t(l, v);
    },
    encodeLocation(v) {
      let w = gl(typeof v == 'string' ? v : Nt(v));
      return { pathname: w.pathname, search: w.search, hash: w.hash };
    },
    push: h,
    replace: m,
    go(v) {
      return i.go(v);
    },
  };
  return d;
}
var je;
(function (e) {
  (e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error');
})(je || (je = {}));
function hg(e) {
  return e.index === !0;
}
function Jf(e, t, n) {
  return (
    t === void 0 && (t = []),
    n === void 0 && (n = new Set()),
    e.map((r, l) => {
      let o = [...t, l],
        i = typeof r.id == 'string' ? r.id : o.join('-');
      return (
        q(r.index !== !0 || !r.children, 'Cannot specify children on an index route'),
        q(
          !n.has(i),
          'Found a route id collision on id "' +
            i +
            `".  Route id's must be globally unique within Data Router usages`,
        ),
        n.add(i),
        hg(r)
          ? ce({}, r, { id: i })
          : ce({}, r, { id: i, children: r.children ? Jf(r.children, o, n) : void 0 })
      );
    })
  );
}
function Br(e, t, n) {
  n === void 0 && (n = '/');
  let r = typeof t == 'string' ? It(t) : t,
    l = ep(r.pathname || '/', n);
  if (l == null) return null;
  let o = Zf(e);
  mg(o);
  let i = null;
  for (let a = 0; i == null && a < o.length; ++a) i = Cg(o[a], Rg(l));
  return i;
}
function Zf(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
  let l = (o, i, a) => {
    let u = {
      relativePath: a === void 0 ? o.path || '' : a,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o,
    };
    u.relativePath.startsWith('/') &&
      (q(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.',
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let c = Wt([r, u.relativePath]),
      h = n.concat(u);
    o.children &&
      o.children.length > 0 &&
      (q(
        o.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + c + '".'),
      ),
      Zf(o.children, t, h, c)),
      !(o.path == null && !o.index) &&
        t.push({ path: c, score: xg(c, o.index), routesMeta: h });
  };
  return (
    e.forEach((o, i) => {
      var a;
      if (o.path === '' || !((a = o.path) != null && a.includes('?'))) l(o, i);
      else for (let u of qf(o.path)) l(o, i, u);
    }),
    t
  );
}
function qf(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith('?'),
    o = n.replace(/\?$/, '');
  if (r.length === 0) return l ? [o, ''] : [o];
  let i = qf(r.join('/')),
    a = [];
  return (
    a.push(...i.map((u) => (u === '' ? o : [o, u].join('/')))),
    l && a.push(...i),
    a.map((u) => (e.startsWith('/') && u === '' ? '/' : u))
  );
}
function mg(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : kg(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const gg = /^:\w+$/,
  vg = 3,
  yg = 2,
  wg = 1,
  Eg = 10,
  Sg = -2,
  cc = (e) => e === '*';
function xg(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(cc) && (r += Sg),
    t && (r += yg),
    n
      .filter((l) => !cc(l))
      .reduce((l, o) => l + (gg.test(o) ? vg : o === '' ? wg : Eg), r)
  );
}
function kg(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Cg(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = '/',
    o = [];
  for (let i = 0; i < n.length; ++i) {
    let a = n[i],
      u = i === n.length - 1,
      c = l === '/' ? t : t.slice(l.length) || '/',
      h = Pg({ path: a.relativePath, caseSensitive: a.caseSensitive, end: u }, c);
    if (!h) return null;
    Object.assign(r, h.params);
    let m = a.route;
    o.push({
      params: r,
      pathname: Wt([l, h.pathname]),
      pathnameBase: Dg(Wt([l, h.pathnameBase])),
      route: m,
    }),
      h.pathnameBase !== '/' && (l = Wt([l, h.pathnameBase]));
  }
  return o;
}
function Pg(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = _g(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let o = l[0],
    i = o.replace(/(.)\/+$/, '$1'),
    a = l.slice(1);
  return {
    params: r.reduce((c, h, m) => {
      if (h === '*') {
        let d = a[m] || '';
        i = o.slice(0, o.length - d.length).replace(/(.)\/+$/, '$1');
      }
      return (c[h] = Mg(a[m] || '', h)), c;
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function _g(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    bu(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".'),
    );
  let r = [],
    l =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^$?{}|()[\]]/g, '\\$&')
        .replace(/\/:(\w+)/g, (i, a) => (r.push(a), '/([^\\/]+)'));
  return (
    e.endsWith('*')
      ? (r.push('*'), (l += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
      ? (l += '\\/*$')
      : e !== '' && e !== '/' && (l += '(?:(?=\\/|$))'),
    [new RegExp(l, t ? void 0 : 'i'), r]
  );
}
function Rg(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      bu(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').'),
      ),
      e
    );
  }
}
function Mg(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      bu(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' + e + '" is a malformed URL segment. This is probably') +
          (' due to a bad percent encoding (' + n + ').'),
      ),
      e
    );
  }
}
function ep(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
function bu(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Og(e, t) {
  t === void 0 && (t = '/');
  let { pathname: n, search: r = '', hash: l = '' } = typeof e == 'string' ? It(e) : e;
  return {
    pathname: n ? (n.startsWith('/') ? n : Ag(n, t)) : t,
    search: Lg(r),
    hash: zg(l),
  };
}
function Ag(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((l) => {
      l === '..' ? n.length > 1 && n.pop() : l !== '.' && n.push(l);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function bi(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' +
      t +
      '` field [' +
      JSON.stringify(r) +
      '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function ti(e) {
  return e.filter((t, n) => n === 0 || (t.route.path && t.route.path.length > 0));
}
function Hu(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == 'string'
    ? (l = It(e))
    : ((l = ce({}, e)),
      q(!l.pathname || !l.pathname.includes('?'), bi('?', 'pathname', 'search', l)),
      q(!l.pathname || !l.pathname.includes('#'), bi('#', 'pathname', 'hash', l)),
      q(!l.search || !l.search.includes('#'), bi('#', 'search', 'hash', l)));
  let o = e === '' || l.pathname === '',
    i = o ? '/' : l.pathname,
    a;
  if (r || i == null) a = n;
  else {
    let m = t.length - 1;
    if (i.startsWith('..')) {
      let d = i.split('/');
      for (; d[0] === '..'; ) d.shift(), (m -= 1);
      l.pathname = d.join('/');
    }
    a = m >= 0 ? t[m] : '/';
  }
  let u = Og(l, a),
    c = i && i !== '/' && i.endsWith('/'),
    h = (o || i === '.') && n.endsWith('/');
  return !u.pathname.endsWith('/') && (c || h) && (u.pathname += '/'), u;
}
const Wt = (e) => e.join('/').replace(/\/\/+/g, '/'),
  Dg = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  Lg = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  zg = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
class dc extends Error {}
class Tg {
  constructor(t) {
    (this.pendingKeys = new Set()),
      (this.subscriber = void 0),
      q(
        t && typeof t == 'object' && !Array.isArray(t),
        'defer() only accepts plain objects',
      );
    let n;
    (this.abortPromise = new Promise((l, o) => (n = o))),
      (this.controller = new AbortController());
    let r = () => n(new dc('Deferred data aborted'));
    (this.unlistenAbortSignal = () =>
      this.controller.signal.removeEventListener('abort', r)),
      this.controller.signal.addEventListener('abort', r),
      (this.data = Object.entries(t).reduce((l, o) => {
        let [i, a] = o;
        return Object.assign(l, { [i]: this.trackPromise(i, a) });
      }, {}));
  }
  trackPromise(t, n) {
    if (!(n instanceof Promise)) return n;
    this.pendingKeys.add(t);
    let r = Promise.race([n, this.abortPromise]).then(
      (l) => this.onSettle(r, t, null, l),
      (l) => this.onSettle(r, t, l),
    );
    return r.catch(() => {}), Object.defineProperty(r, '_tracked', { get: () => !0 }), r;
  }
  onSettle(t, n, r, l) {
    if (this.controller.signal.aborted && r instanceof dc)
      return (
        this.unlistenAbortSignal(),
        Object.defineProperty(t, '_error', { get: () => r }),
        Promise.reject(r)
      );
    this.pendingKeys.delete(n), this.done && this.unlistenAbortSignal();
    const o = this.subscriber;
    return r
      ? (Object.defineProperty(t, '_error', { get: () => r }),
        o && o(!1),
        Promise.reject(r))
      : (Object.defineProperty(t, '_data', { get: () => l }), o && o(!1), l);
  }
  subscribe(t) {
    this.subscriber = t;
  }
  cancel() {
    this.controller.abort(),
      this.pendingKeys.forEach((n, r) => this.pendingKeys.delete(r));
    let t = this.subscriber;
    t && t(!0);
  }
  async resolveData(t) {
    let n = !1;
    if (!this.done) {
      let r = () => this.cancel();
      t.addEventListener('abort', r),
        (n = await new Promise((l) => {
          this.subscribe((o) => {
            t.removeEventListener('abort', r), (o || this.done) && l(o);
          });
        }));
    }
    return n;
  }
  get done() {
    return this.pendingKeys.size === 0;
  }
  get unwrappedData() {
    return (
      q(
        this.data !== null && this.done,
        'Can only unwrap data on initialized and settled deferreds',
      ),
      Object.entries(this.data).reduce((t, n) => {
        let [r, l] = n;
        return Object.assign(t, { [r]: Ig(l) });
      }, {})
    );
  }
}
function Ng(e) {
  return e instanceof Promise && e._tracked === !0;
}
function Ig(e) {
  if (!Ng(e)) return e;
  if (e._error) throw e._error;
  return e._data;
}
class ni {
  constructor(t, n, r, l) {
    l === void 0 && (l = !1),
      (this.status = t),
      (this.statusText = n || ''),
      (this.internal = l),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function tp(e) {
  return e instanceof ni;
}
const np = ['post', 'put', 'patch', 'delete'],
  Fg = new Set(np),
  $g = ['get', ...np],
  jg = new Set($g),
  Bg = new Set([301, 302, 303, 307, 308]),
  Ug = new Set([307, 308]),
  Hi = {
    state: 'idle',
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
  },
  bg = {
    state: 'idle',
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
  },
  Hg =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  Wg = !Hg;
function Vg(e) {
  q(e.routes.length > 0, 'You must provide a non-empty routes array to createRouter');
  let t = Jf(e.routes),
    n = null,
    r = new Set(),
    l = null,
    o = null,
    i = null,
    a = e.hydrationData != null,
    u = Br(t, e.history.location, e.basename),
    c = null;
  if (u == null) {
    let x = kn(404, { pathname: e.history.location.pathname }),
      { matches: k, route: P } = vc(t);
    (u = k), (c = { [P.id]: x });
  }
  let h = !u.some((x) => x.route.loader) || e.hydrationData != null,
    m,
    d = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: u,
      initialized: h,
      navigation: Hi,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: 'idle',
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || c,
      fetchers: new Map(),
    },
    v = Re.Pop,
    w = !1,
    y,
    _ = !1,
    p = !1,
    f = [],
    g = [],
    E = new Map(),
    C = 0,
    z = -1,
    N = new Map(),
    T = new Set(),
    J = new Map(),
    b = new Map();
  function Pe() {
    return (
      (n = e.history.listen((x) => {
        let { action: k, location: P } = x;
        return M(k, P);
      })),
      d.initialized || M(Re.Pop, d.location),
      m
    );
  }
  function xe() {
    n && n(), r.clear(), y && y.abort(), d.fetchers.forEach((x, k) => de(k));
  }
  function Oe(x) {
    return r.add(x), () => r.delete(x);
  }
  function se(x) {
    (d = ce({}, d, x)), r.forEach((k) => k(d));
  }
  function Ee(x, k) {
    var P;
    let U =
        d.actionData != null &&
        d.navigation.formMethod != null &&
        Cn(d.navigation.formMethod) &&
        d.navigation.state === 'loading' &&
        ((P = x.state) == null ? void 0 : P._isRedirect) !== !0,
      $;
    k.actionData
      ? Object.keys(k.actionData).length > 0
        ? ($ = k.actionData)
        : ($ = null)
      : U
      ? ($ = d.actionData)
      : ($ = null);
    let W = k.loaderData
      ? gc(d.loaderData, k.loaderData, k.matches || [], k.errors)
      : d.loaderData;
    se(
      ce({}, k, {
        actionData: $,
        loaderData: W,
        historyAction: v,
        location: x,
        initialized: !0,
        navigation: Hi,
        revalidation: 'idle',
        restoreScrollPosition: d.navigation.formData ? !1 : re(x, k.matches || d.matches),
        preventScrollReset: w,
      }),
    ),
      _ ||
        v === Re.Pop ||
        (v === Re.Push
          ? e.history.push(x, x.state)
          : v === Re.Replace && e.history.replace(x, x.state)),
      (v = Re.Pop),
      (w = !1),
      (_ = !1),
      (p = !1),
      (f = []),
      (g = []);
  }
  async function yt(x, k) {
    if (typeof x == 'number') {
      e.history.go(x);
      return;
    }
    let { path: P, submission: U, error: $ } = fc(x, k),
      W = ml(d.location, P, k && k.state);
    W = ce({}, W, e.history.encodeLocation(W));
    let A = k && k.replace != null ? k.replace : void 0,
      B = Re.Push;
    A === !0
      ? (B = Re.Replace)
      : A === !1 ||
        (U != null &&
          Cn(U.formMethod) &&
          U.formAction === d.location.pathname + d.location.search &&
          (B = Re.Replace));
    let Q = k && 'preventScrollReset' in k ? k.preventScrollReset === !0 : void 0;
    return await M(B, W, {
      submission: U,
      pendingError: $,
      preventScrollReset: Q,
      replace: k && k.replace,
    });
  }
  function Fe() {
    if ((Z(), se({ revalidation: 'loading' }), d.navigation.state !== 'submitting')) {
      if (d.navigation.state === 'idle') {
        M(d.historyAction, d.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      M(v || d.historyAction, d.navigation.location, {
        overrideNavigation: d.navigation,
      });
    }
  }
  async function M(x, k, P) {
    y && y.abort(),
      (y = null),
      (v = x),
      (_ = (P && P.startUninterruptedRevalidation) === !0),
      ze(d.location, d.matches),
      (w = (P && P.preventScrollReset) === !0);
    let U = P && P.overrideNavigation,
      $ = Br(t, k, e.basename);
    if (!$) {
      let me = kn(404, { pathname: k.pathname }),
        { matches: wt, route: Et } = vc(t);
      Le(), Ee(k, { matches: wt, loaderData: {}, errors: { [Et.id]: me } });
      return;
    }
    if (Xg(d.location, k)) {
      Ee(k, { matches: $ });
      return;
    }
    y = new AbortController();
    let W = Nr(k, y.signal, P && P.submission),
      A,
      B;
    if (P && P.pendingError) B = { [nr($).route.id]: P.pendingError };
    else if (P && P.submission && Cn(P.submission.formMethod)) {
      let me = await V(W, k, P.submission, $, { replace: P.replace });
      if (me.shortCircuited) return;
      (A = me.pendingActionData),
        (B = me.pendingActionError),
        (U = ce({ state: 'loading', location: k }, P.submission)),
        (W = new Request(W.url, { signal: W.signal }));
    }
    let {
      shortCircuited: Q,
      loaderData: ke,
      errors: X,
    } = await G(W, k, $, U, P && P.submission, P && P.replace, A, B);
    Q ||
      ((y = null),
      Ee(
        k,
        ce({ matches: $ }, A ? { actionData: A } : {}, { loaderData: ke, errors: X }),
      ));
  }
  async function V(x, k, P, U, $) {
    Z();
    let W = ce({ state: 'submitting', location: k }, P);
    se({ navigation: W });
    let A,
      B = Sc(U, k);
    if (!B.route.action)
      A = {
        type: je.error,
        error: kn(405, { method: x.method, pathname: k.pathname, routeId: B.route.id }),
      };
    else if (((A = await Tr('action', x, B, U, m.basename)), x.signal.aborted))
      return { shortCircuited: !0 };
    if (cr(A)) {
      let Q;
      return (
        $ && $.replace != null
          ? (Q = $.replace)
          : (Q = A.location === d.location.pathname + d.location.search),
        await H(d, A, { submission: P, replace: Q }),
        { shortCircuited: !0 }
      );
    }
    if (Xr(A)) {
      let Q = nr(U, B.route.id);
      return (
        ($ && $.replace) !== !0 && (v = Re.Push),
        { pendingActionData: {}, pendingActionError: { [Q.route.id]: A.error } }
      );
    }
    if (Mn(A)) throw new Error('defer() is not supported in actions');
    return { pendingActionData: { [B.route.id]: A.data } };
  }
  async function G(x, k, P, U, $, W, A, B) {
    let Q = U;
    Q ||
      (Q = ce(
        {
          state: 'loading',
          location: k,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
        },
        $,
      ));
    let ke =
        $ ||
        (Q.formMethod && Q.formAction && Q.formData && Q.formEncType
          ? {
              formMethod: Q.formMethod,
              formAction: Q.formAction,
              formData: Q.formData,
              formEncType: Q.formEncType,
            }
          : void 0),
      [X, me] = pc(d, P, ke, k, p, f, g, A, B, J);
    if (
      (Le(
        (He) =>
          !(P && P.some((lt) => lt.route.id === He)) ||
          (X && X.some((lt) => lt.route.id === He)),
      ),
      X.length === 0 && me.length === 0)
    )
      return (
        Ee(
          k,
          ce(
            { matches: P, loaderData: {}, errors: B || null },
            A ? { actionData: A } : {},
          ),
        ),
        { shortCircuited: !0 }
      );
    if (!_) {
      me.forEach((lt) => {
        let [wn] = lt,
          Cr = d.fetchers.get(wn),
          Pr = {
            state: 'loading',
            data: Cr && Cr.data,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
            ' _hasFetcherDoneAnything ': !0,
          };
        d.fetchers.set(wn, Pr);
      });
      let He = A || d.actionData;
      se(
        ce(
          { navigation: Q },
          He
            ? Object.keys(He).length === 0
              ? { actionData: null }
              : { actionData: He }
            : {},
          me.length > 0 ? { fetchers: new Map(d.fetchers) } : {},
        ),
      );
    }
    (z = ++C),
      me.forEach((He) => {
        let [lt] = He;
        return E.set(lt, y);
      });
    let {
      results: wt,
      loaderResults: Et,
      fetcherResults: kr,
    } = await S(d.matches, P, X, me, x);
    if (x.signal.aborted) return { shortCircuited: !0 };
    me.forEach((He) => {
      let [lt] = He;
      return E.delete(lt);
    });
    let Ml = yc(wt);
    if (Ml) return await H(d, Ml, { replace: W }), { shortCircuited: !0 };
    let { loaderData: Ol, errors: bn } = mc(d, P, X, Et, B, me, kr, b);
    b.forEach((He, lt) => {
      He.subscribe((wn) => {
        (wn || He.done) && b.delete(lt);
      });
    }),
      K();
    let mi = _e(z);
    return ce(
      { loaderData: Ol, errors: bn },
      mi || me.length > 0 ? { fetchers: new Map(d.fetchers) } : {},
    );
  }
  function ie(x) {
    return d.fetchers.get(x) || bg;
  }
  function L(x, k, P, U) {
    if (Wg)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
      );
    E.has(x) && te(x);
    let $ = Br(t, P, e.basename);
    if (!$) {
      D(x, k, kn(404, { pathname: P }));
      return;
    }
    let { path: W, submission: A } = fc(P, U, !0),
      B = Sc($, W);
    if (A && Cn(A.formMethod)) {
      I(x, k, W, B, $, A);
      return;
    }
    J.set(x, [W, B, $]), F(x, k, W, B, $, A);
  }
  async function I(x, k, P, U, $, W) {
    if ((Z(), J.delete(x), !U.route.action)) {
      let Ft = kn(405, { method: W.formMethod, pathname: P, routeId: k });
      D(x, k, Ft);
      return;
    }
    let A = d.fetchers.get(x),
      B = ce({ state: 'submitting' }, W, {
        data: A && A.data,
        ' _hasFetcherDoneAnything ': !0,
      });
    d.fetchers.set(x, B), se({ fetchers: new Map(d.fetchers) });
    let Q = new AbortController(),
      ke = Nr(P, Q.signal, W);
    E.set(x, Q);
    let X = await Tr('action', ke, U, $, m.basename);
    if (ke.signal.aborted) {
      E.get(x) === Q && E.delete(x);
      return;
    }
    if (cr(X)) {
      E.delete(x), T.add(x);
      let Ft = ce({ state: 'loading' }, W, {
        data: void 0,
        ' _hasFetcherDoneAnything ': !0,
      });
      return (
        d.fetchers.set(x, Ft),
        se({ fetchers: new Map(d.fetchers) }),
        H(d, X, { isFetchActionRedirect: !0 })
      );
    }
    if (Xr(X)) {
      D(x, k, X.error);
      return;
    }
    Mn(X) && q(!1, 'defer() is not supported in actions');
    let me = d.navigation.location || d.location,
      wt = Nr(me, Q.signal),
      Et =
        d.navigation.state !== 'idle'
          ? Br(t, d.navigation.location, e.basename)
          : d.matches;
    q(Et, "Didn't find any matches after fetcher action");
    let kr = ++C;
    N.set(x, kr);
    let Ml = ce({ state: 'loading', data: X.data }, W, {
      ' _hasFetcherDoneAnything ': !0,
    });
    d.fetchers.set(x, Ml);
    let [Ol, bn] = pc(d, Et, W, me, p, f, g, { [U.route.id]: X.data }, void 0, J);
    bn
      .filter((Ft) => {
        let [En] = Ft;
        return En !== x;
      })
      .forEach((Ft) => {
        let [En] = Ft,
          Zu = d.fetchers.get(En),
          Tp = {
            state: 'loading',
            data: Zu && Zu.data,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
            ' _hasFetcherDoneAnything ': !0,
          };
        d.fetchers.set(En, Tp), E.set(En, Q);
      }),
      se({ fetchers: new Map(d.fetchers) });
    let {
      results: mi,
      loaderResults: He,
      fetcherResults: lt,
    } = await S(d.matches, Et, Ol, bn, wt);
    if (Q.signal.aborted) return;
    N.delete(x),
      E.delete(x),
      bn.forEach((Ft) => {
        let [En] = Ft;
        return E.delete(En);
      });
    let wn = yc(mi);
    if (wn) return H(d, wn);
    let { loaderData: Cr, errors: Pr } = mc(d, d.matches, Ol, He, void 0, bn, lt, b),
      Lp = {
        state: 'idle',
        data: X.data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        ' _hasFetcherDoneAnything ': !0,
      };
    d.fetchers.set(x, Lp);
    let zp = _e(kr);
    d.navigation.state === 'loading' && kr > z
      ? (q(v, 'Expected pending action'),
        y && y.abort(),
        Ee(d.navigation.location, {
          matches: Et,
          loaderData: Cr,
          errors: Pr,
          fetchers: new Map(d.fetchers),
        }))
      : (se(
          ce(
            { errors: Pr, loaderData: gc(d.loaderData, Cr, Et, Pr) },
            zp ? { fetchers: new Map(d.fetchers) } : {},
          ),
        ),
        (p = !1));
  }
  async function F(x, k, P, U, $, W) {
    let A = d.fetchers.get(x),
      B = ce(
        {
          state: 'loading',
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
        },
        W,
        { data: A && A.data, ' _hasFetcherDoneAnything ': !0 },
      );
    d.fetchers.set(x, B), se({ fetchers: new Map(d.fetchers) });
    let Q = new AbortController(),
      ke = Nr(P, Q.signal);
    E.set(x, Q);
    let X = await Tr('loader', ke, U, $, m.basename);
    if (
      (Mn(X) && (X = (await ip(X, ke.signal, !0)) || X),
      E.get(x) === Q && E.delete(x),
      ke.signal.aborted)
    )
      return;
    if (cr(X)) {
      await H(d, X);
      return;
    }
    if (Xr(X)) {
      let wt = nr(d.matches, k);
      d.fetchers.delete(x),
        se({ fetchers: new Map(d.fetchers), errors: { [wt.route.id]: X.error } });
      return;
    }
    q(!Mn(X), 'Unhandled fetcher deferred data');
    let me = {
      state: 'idle',
      data: X.data,
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      ' _hasFetcherDoneAnything ': !0,
    };
    d.fetchers.set(x, me), se({ fetchers: new Map(d.fetchers) });
  }
  async function H(x, k, P) {
    var U;
    let { submission: $, replace: W, isFetchActionRedirect: A } = P === void 0 ? {} : P;
    k.revalidate && (p = !0);
    let B = ml(
      x.location,
      k.location,
      ce({ _isRedirect: !0 }, A ? { _isFetchActionRedirect: !0 } : {}),
    );
    if (
      (q(B, 'Expected a location on the redirect navigation'),
      typeof ((U = window) == null ? void 0 : U.location) < 'u')
    ) {
      let Et = gl(k.location).origin;
      if (window.location.origin !== Et) {
        W ? window.location.replace(k.location) : window.location.assign(k.location);
        return;
      }
    }
    y = null;
    let Q = W === !0 ? Re.Replace : Re.Push,
      { formMethod: ke, formAction: X, formEncType: me, formData: wt } = x.navigation;
    !$ &&
      ke &&
      X &&
      wt &&
      me &&
      ($ = { formMethod: ke, formAction: X, formEncType: me, formData: wt }),
      Ug.has(k.status) && $ && Cn($.formMethod)
        ? await M(Q, B, { submission: ce({}, $, { formAction: k.location }) })
        : await M(Q, B, {
            overrideNavigation: {
              state: 'loading',
              location: B,
              formMethod: $ ? $.formMethod : void 0,
              formAction: $ ? $.formAction : void 0,
              formEncType: $ ? $.formEncType : void 0,
              formData: $ ? $.formData : void 0,
            },
          });
  }
  async function S(x, k, P, U, $) {
    let W = await Promise.all([
        ...P.map((Q) => Tr('loader', $, Q, k, m.basename)),
        ...U.map((Q) => {
          let [, ke, X, me] = Q;
          return Tr('loader', Nr(ke, $.signal), X, me, m.basename);
        }),
      ]),
      A = W.slice(0, P.length),
      B = W.slice(P.length);
    return (
      await Promise.all([
        wc(x, P, A, $.signal, !1, d.loaderData),
        wc(
          x,
          U.map((Q) => {
            let [, , ke] = Q;
            return ke;
          }),
          B,
          $.signal,
          !0,
        ),
      ]),
      { results: W, loaderResults: A, fetcherResults: B }
    );
  }
  function Z() {
    (p = !0),
      f.push(...Le()),
      J.forEach((x, k) => {
        E.has(k) && (g.push(k), te(k));
      });
  }
  function D(x, k, P) {
    let U = nr(d.matches, k);
    de(x), se({ errors: { [U.route.id]: P }, fetchers: new Map(d.fetchers) });
  }
  function de(x) {
    E.has(x) && te(x), J.delete(x), N.delete(x), T.delete(x), d.fetchers.delete(x);
  }
  function te(x) {
    let k = E.get(x);
    q(k, 'Expected fetch controller: ' + x), k.abort(), E.delete(x);
  }
  function oe(x) {
    for (let k of x) {
      let U = {
        state: 'idle',
        data: ie(k).data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        ' _hasFetcherDoneAnything ': !0,
      };
      d.fetchers.set(k, U);
    }
  }
  function K() {
    let x = [];
    for (let k of T) {
      let P = d.fetchers.get(k);
      q(P, 'Expected fetcher: ' + k), P.state === 'loading' && (T.delete(k), x.push(k));
    }
    oe(x);
  }
  function _e(x) {
    let k = [];
    for (let [P, U] of N)
      if (U < x) {
        let $ = d.fetchers.get(P);
        q($, 'Expected fetcher: ' + P),
          $.state === 'loading' && (te(P), N.delete(P), k.push(P));
      }
    return oe(k), k.length > 0;
  }
  function Le(x) {
    let k = [];
    return (
      b.forEach((P, U) => {
        (!x || x(U)) && (P.cancel(), k.push(U), b.delete(U));
      }),
      k
    );
  }
  function ne(x, k, P) {
    if (((l = x), (i = k), (o = P || ((U) => U.key)), !a && d.navigation === Hi)) {
      a = !0;
      let U = re(d.location, d.matches);
      U != null && se({ restoreScrollPosition: U });
    }
    return () => {
      (l = null), (i = null), (o = null);
    };
  }
  function ze(x, k) {
    if (l && o && i) {
      let P = k.map(($) => Ec($, d.loaderData)),
        U = o(x, P) || x.key;
      l[U] = i();
    }
  }
  function re(x, k) {
    if (l && o && i) {
      let P = k.map((W) => Ec(W, d.loaderData)),
        U = o(x, P) || x.key,
        $ = l[U];
      if (typeof $ == 'number') return $;
    }
    return null;
  }
  return (
    (m = {
      get basename() {
        return e.basename;
      },
      get state() {
        return d;
      },
      get routes() {
        return t;
      },
      initialize: Pe,
      subscribe: Oe,
      enableScrollRestoration: ne,
      navigate: yt,
      fetch: L,
      revalidate: Fe,
      createHref: (x) => e.history.createHref(x),
      encodeLocation: (x) => e.history.encodeLocation(x),
      getFetcher: ie,
      deleteFetcher: de,
      dispose: xe,
      _internalFetchControllers: E,
      _internalActiveDeferreds: b,
    }),
    m
  );
}
function Gg(e) {
  return e != null && 'formData' in e;
}
function fc(e, t, n) {
  n === void 0 && (n = !1);
  let r = typeof e == 'string' ? e : Nt(e);
  if (!t || !Gg(t)) return { path: r };
  if (t.formMethod && !Zg(t.formMethod))
    return { path: r, error: kn(405, { method: t.formMethod }) };
  let l;
  if (
    t.formData &&
    ((l = {
      formMethod: t.formMethod || 'get',
      formAction: op(r),
      formEncType: (t && t.formEncType) || 'application/x-www-form-urlencoded',
      formData: t.formData,
    }),
    Cn(l.formMethod))
  )
    return { path: r, submission: l };
  let o = It(r);
  try {
    let i = lp(t.formData);
    n && o.search && ap(o.search) && i.append('index', ''), (o.search = '?' + i);
  } catch {
    return { path: r, error: kn(400) };
  }
  return { path: Nt(o), submission: l };
}
function Qg(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((l) => l.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function pc(e, t, n, r, l, o, i, a, u, c) {
  let h = u ? Object.values(u)[0] : a ? Object.values(a)[0] : void 0,
    m = u ? Object.keys(u)[0] : void 0,
    v = Qg(t, m).filter(
      (y, _) =>
        y.route.loader != null &&
        (Yg(e.loaderData, e.matches[_], y) ||
          o.some((p) => p === y.route.id) ||
          hc(e.location, e.matches[_], n, r, y, l, h)),
    ),
    w = [];
  return (
    c &&
      c.forEach((y, _) => {
        let [p, f, g] = y;
        i.includes(_)
          ? w.push([_, p, f, g])
          : l && hc(p, f, n, p, f, l, h) && w.push([_, p, f, g]);
      }),
    [v, w]
  );
}
function Yg(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    l = e[n.route.id] === void 0;
  return r || l;
}
function rp(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname || (n && n.endsWith('*') && e.params['*'] !== t.params['*'])
  );
}
function hc(e, t, n, r, l, o, i) {
  let a = gl(e),
    u = t.params,
    c = gl(r),
    h = l.params,
    m = rp(t, l) || a.toString() === c.toString() || a.search !== c.search || o;
  if (l.route.shouldRevalidate) {
    let d = l.route.shouldRevalidate(
      ce({ currentUrl: a, currentParams: u, nextUrl: c, nextParams: h }, n, {
        actionResult: i,
        defaultShouldRevalidate: m,
      }),
    );
    if (typeof d == 'boolean') return d;
  }
  return m;
}
async function Tr(e, t, n, r, l, o, i, a) {
  l === void 0 && (l = '/'), o === void 0 && (o = !1), i === void 0 && (i = !1);
  let u,
    c,
    h,
    m = new Promise((v, w) => (h = w)),
    d = () => h();
  t.signal.addEventListener('abort', d);
  try {
    let v = n.route[e];
    q(v, 'Could not find the ' + e + ' to run on the "' + n.route.id + '" route'),
      (c = await Promise.race([v({ request: t, params: n.params, context: a }), m])),
      q(
        c !== void 0,
        'You defined ' +
          (e === 'action' ? 'an action' : 'a loader') +
          ' for route ' +
          ('"' + n.route.id + '" but didn\'t return anything from your `' + e + '` ') +
          'function. Please return a value or `null`.',
      );
  } catch (v) {
    (u = je.error), (c = v);
  } finally {
    t.signal.removeEventListener('abort', d);
  }
  if (Jg(c)) {
    let v = c.status;
    if (Bg.has(v)) {
      let _ = c.headers.get('Location');
      if (
        (q(
          _,
          'Redirects returned/thrown from loaders/actions must have a Location header',
        ),
        !(/^[a-z+]+:\/\//i.test(_) || _.startsWith('//')))
      ) {
        let f = r.slice(0, r.indexOf(n) + 1),
          g = ti(f).map((C) => C.pathnameBase),
          E = Hu(_, g, new URL(t.url).pathname);
        if ((q(Nt(E), 'Unable to resolve redirect location: ' + _), l)) {
          let C = E.pathname;
          E.pathname = C === '/' ? l : Wt([l, C]);
        }
        _ = Nt(E);
      }
      if (o) throw (c.headers.set('Location', _), c);
      return {
        type: je.redirect,
        status: v,
        location: _,
        revalidate: c.headers.get('X-Remix-Revalidate') !== null,
      };
    }
    if (i) throw { type: u || je.data, response: c };
    let w,
      y = c.headers.get('Content-Type');
    return (
      y && /\bapplication\/json\b/.test(y) ? (w = await c.json()) : (w = await c.text()),
      u === je.error
        ? { type: u, error: new ni(v, c.statusText, w), headers: c.headers }
        : { type: je.data, data: w, statusCode: c.status, headers: c.headers }
    );
  }
  return u === je.error
    ? { type: u, error: c }
    : c instanceof Tg
    ? { type: je.deferred, deferredData: c }
    : { type: je.data, data: c };
}
function Nr(e, t, n) {
  let r = gl(op(e)).toString(),
    l = { signal: t };
  if (n && Cn(n.formMethod)) {
    let { formMethod: o, formEncType: i, formData: a } = n;
    (l.method = o.toUpperCase()),
      (l.body = i === 'application/x-www-form-urlencoded' ? lp(a) : a);
  }
  return new Request(r, l);
}
function lp(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    q(
      typeof r == 'string',
      'File inputs are not supported with encType "application/x-www-form-urlencoded", please use "multipart/form-data" instead.',
    ),
      t.append(n, r);
  return t;
}
function Kg(e, t, n, r, l) {
  let o = {},
    i = null,
    a,
    u = !1,
    c = {};
  return (
    n.forEach((h, m) => {
      let d = t[m].route.id;
      if ((q(!cr(h), 'Cannot handle redirect results in processLoaderData'), Xr(h))) {
        let v = nr(e, d),
          w = h.error;
        r && ((w = Object.values(r)[0]), (r = void 0)),
          (i = i || {}),
          i[v.route.id] == null && (i[v.route.id] = w),
          (o[d] = void 0),
          u || ((u = !0), (a = tp(h.error) ? h.error.status : 500)),
          h.headers && (c[d] = h.headers);
      } else
        Mn(h)
          ? (l && l.set(d, h.deferredData), (o[d] = h.deferredData.data))
          : ((o[d] = h.data),
            h.statusCode != null && h.statusCode !== 200 && !u && (a = h.statusCode),
            h.headers && (c[d] = h.headers));
    }),
    r && ((i = r), (o[Object.keys(r)[0]] = void 0)),
    { loaderData: o, errors: i, statusCode: a || 200, loaderHeaders: c }
  );
}
function mc(e, t, n, r, l, o, i, a) {
  let { loaderData: u, errors: c } = Kg(t, n, r, l, a);
  for (let h = 0; h < o.length; h++) {
    let [m, , d] = o[h];
    q(i !== void 0 && i[h] !== void 0, 'Did not find corresponding fetcher result');
    let v = i[h];
    if (Xr(v)) {
      let w = nr(e.matches, d.route.id);
      (c && c[w.route.id]) || (c = ce({}, c, { [w.route.id]: v.error })),
        e.fetchers.delete(m);
    } else {
      if (cr(v)) throw new Error('Unhandled fetcher revalidation redirect');
      if (Mn(v)) throw new Error('Unhandled fetcher deferred data');
      {
        let w = {
          state: 'idle',
          data: v.data,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          ' _hasFetcherDoneAnything ': !0,
        };
        e.fetchers.set(m, w);
      }
    }
  }
  return { loaderData: u, errors: c };
}
function gc(e, t, n, r) {
  let l = ce({}, t);
  for (let o of n) {
    let i = o.route.id;
    if (
      (t.hasOwnProperty(i)
        ? t[i] !== void 0 && (l[i] = t[i])
        : e[i] !== void 0 && (l[i] = e[i]),
      r && r.hasOwnProperty(i))
    )
      break;
  }
  return l;
}
function nr(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function vc(e) {
  let t = e.find((n) => n.index || !n.path || n.path === '/') || {
    id: '__shim-error-route__',
  };
  return {
    matches: [{ params: {}, pathname: '', pathnameBase: '', route: t }],
    route: t,
  };
}
function kn(e, t) {
  let { pathname: n, routeId: r, method: l } = t === void 0 ? {} : t,
    o = 'Unknown Server Error',
    i = 'Unknown @remix-run/router error';
  return (
    e === 400
      ? ((o = 'Bad Request'),
        l && n && r
          ? (i =
              'You made a ' +
              l +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              'so there is no way to handle the request.')
          : (i = 'Cannot submit binary form data using GET'))
      : e === 403
      ? ((o = 'Forbidden'), (i = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((o = 'Not Found'), (i = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((o = 'Method Not Allowed'),
        l && n && r
          ? (i =
              'You made a ' +
              l.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              'so there is no way to handle the request.')
          : l && (i = 'Invalid request method "' + l.toUpperCase() + '"')),
    new ni(e || 500, o, new Error(i), !0)
  );
}
function yc(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (cr(n)) return n;
  }
}
function op(e) {
  let t = typeof e == 'string' ? It(e) : e;
  return Nt(ce({}, t, { hash: '' }));
}
function Xg(e, t) {
  return e.pathname === t.pathname && e.search === t.search && e.hash !== t.hash;
}
function Mn(e) {
  return e.type === je.deferred;
}
function Xr(e) {
  return e.type === je.error;
}
function cr(e) {
  return (e && e.type) === je.redirect;
}
function Jg(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.headers == 'object' &&
    typeof e.body < 'u'
  );
}
function Zg(e) {
  return jg.has(e);
}
function Cn(e) {
  return Fg.has(e);
}
async function wc(e, t, n, r, l, o) {
  for (let i = 0; i < n.length; i++) {
    let a = n[i],
      u = t[i],
      c = e.find((m) => m.route.id === u.route.id),
      h = c != null && !rp(c, u) && (o && o[u.route.id]) !== void 0;
    Mn(a) &&
      (l || h) &&
      (await ip(a, r, l).then((m) => {
        m && (n[i] = m || n[i]);
      }));
  }
}
async function ip(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: je.data, data: e.deferredData.unwrappedData };
      } catch (l) {
        return { type: je.error, error: l };
      }
    return { type: je.data, data: e.deferredData.data };
  }
}
function ap(e) {
  return new URLSearchParams(e).getAll('index').some((t) => t === '');
}
function Ec(e, t) {
  let { route: n, pathname: r, params: l } = e;
  return { id: n.id, pathname: r, params: l, data: t[n.id], handle: n.handle };
}
function Sc(e, t) {
  let n = typeof t == 'string' ? It(t).search : t.search;
  if (e[e.length - 1].route.index && ap(n || '')) return e[e.length - 1];
  let r = ti(e);
  return r[r.length - 1];
}
/**
 * React Router v6.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function To() {
  return (
    (To = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    To.apply(this, arguments)
  );
}
function qg(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const e0 = typeof Object.is == 'function' ? Object.is : qg,
  { useState: t0, useEffect: n0, useLayoutEffect: r0, useDebugValue: l0 } = Qi;
function o0(e, t, n) {
  const r = t(),
    [{ inst: l }, o] = t0({ inst: { value: r, getSnapshot: t } });
  return (
    r0(() => {
      (l.value = r), (l.getSnapshot = t), Wi(l) && o({ inst: l });
    }, [e, r, t]),
    n0(
      () => (
        Wi(l) && o({ inst: l }),
        e(() => {
          Wi(l) && o({ inst: l });
        })
      ),
      [e],
    ),
    l0(r),
    r
  );
}
function Wi(e) {
  const t = e.getSnapshot,
    n = e.value;
  try {
    const r = t();
    return !e0(n, r);
  } catch {
    return !0;
  }
}
function i0(e, t, n) {
  return t();
}
const a0 =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  u0 = !a0,
  s0 = u0 ? i0 : o0,
  c0 = 'useSyncExternalStore' in Qi ? ((e) => e.useSyncExternalStore)(Qi) : s0,
  d0 = O.createContext(null),
  up = O.createContext(null),
  ri = O.createContext(null),
  Pl = O.createContext(null),
  li = O.createContext(null),
  Bn = O.createContext({ outlet: null, matches: [] }),
  sp = O.createContext(null);
function f0(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  _l() || q(!1);
  let { basename: r, navigator: l } = O.useContext(Pl),
    { hash: o, pathname: i, search: a } = Wu(e, { relative: n }),
    u = i;
  return (
    r !== '/' && (u = i === '/' ? r : Wt([r, i])),
    l.createHref({ pathname: u, search: a, hash: o })
  );
}
function _l() {
  return O.useContext(li) != null;
}
function Rl() {
  return _l() || q(!1), O.useContext(li).location;
}
function p0() {
  _l() || q(!1);
  let { basename: e, navigator: t } = O.useContext(Pl),
    { matches: n } = O.useContext(Bn),
    { pathname: r } = Rl(),
    l = JSON.stringify(ti(n).map((a) => a.pathnameBase)),
    o = O.useRef(!1);
  return (
    O.useEffect(() => {
      o.current = !0;
    }),
    O.useCallback(
      function (a, u) {
        if ((u === void 0 && (u = {}), !o.current)) return;
        if (typeof a == 'number') {
          t.go(a);
          return;
        }
        let c = Hu(a, JSON.parse(l), r, u.relative === 'path');
        e !== '/' && (c.pathname = c.pathname === '/' ? e : Wt([e, c.pathname])),
          (u.replace ? t.replace : t.push)(c, u.state, u);
      },
      [e, t, l, r],
    )
  );
}
const h0 = O.createContext(null);
function m0(e) {
  let t = O.useContext(Bn).outlet;
  return t && O.createElement(h0.Provider, { value: e }, t);
}
function Wu(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = O.useContext(Bn),
    { pathname: l } = Rl(),
    o = JSON.stringify(ti(r).map((i) => i.pathnameBase));
  return O.useMemo(() => Hu(e, JSON.parse(o), l, n === 'path'), [e, o, l, n]);
}
function g0(e, t) {
  _l() || q(!1);
  let { navigator: n } = O.useContext(Pl),
    r = O.useContext(ri),
    { matches: l } = O.useContext(Bn),
    o = l[l.length - 1],
    i = o ? o.params : {};
  o && o.pathname;
  let a = o ? o.pathnameBase : '/';
  o && o.route;
  let u = Rl(),
    c;
  if (t) {
    var h;
    let y = typeof t == 'string' ? It(t) : t;
    a === '/' || ((h = y.pathname) != null && h.startsWith(a)) || q(!1), (c = y);
  } else c = u;
  let m = c.pathname || '/',
    d = a === '/' ? m : m.slice(a.length) || '/',
    v = Br(e, { pathname: d }),
    w = E0(
      v &&
        v.map((y) =>
          Object.assign({}, y, {
            params: Object.assign({}, i, y.params),
            pathname: Wt([
              a,
              n.encodeLocation ? n.encodeLocation(y.pathname).pathname : y.pathname,
            ]),
            pathnameBase:
              y.pathnameBase === '/'
                ? a
                : Wt([
                    a,
                    n.encodeLocation
                      ? n.encodeLocation(y.pathnameBase).pathname
                      : y.pathnameBase,
                  ]),
          }),
        ),
      l,
      r || void 0,
    );
  return t && w
    ? O.createElement(
        li.Provider,
        {
          value: {
            location: To(
              { pathname: '/', search: '', hash: '', state: null, key: 'default' },
              c,
            ),
            navigationType: Re.Pop,
          },
        },
        w,
      )
    : w;
}
function v0() {
  let e = C0(),
    t = tp(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    r = 'rgba(200,200,200, 0.5)',
    l = { padding: '0.5rem', backgroundColor: r },
    o = { padding: '2px 4px', backgroundColor: r };
  return O.createElement(
    O.Fragment,
    null,
    O.createElement('h2', null, 'Unhandled Thrown Error!'),
    O.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? O.createElement('pre', { style: l }, n) : null,
    O.createElement('p', null, '💿 Hey developer 👋'),
    O.createElement(
      'p',
      null,
      'You can provide a way better UX than this when your app throws errors by providing your own ',
      O.createElement('code', { style: o }, 'errorElement'),
      ' props on ',
      O.createElement('code', { style: o }, '<Route>'),
    ),
  );
}
class y0 extends O.Component {
  constructor(t) {
    super(t), (this.state = { location: t.location, error: t.error });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location
      ? { error: t.error, location: t.location }
      : { error: t.error || n.error, location: n.location };
  }
  componentDidCatch(t, n) {
    console.error('React Router caught the following error during render', t, n);
  }
  render() {
    return this.state.error
      ? O.createElement(
          Bn.Provider,
          { value: this.props.routeContext },
          O.createElement(sp.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function w0(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = O.useContext(d0);
  return (
    l && n.route.errorElement && (l._deepestRenderedBoundaryId = n.route.id),
    O.createElement(Bn.Provider, { value: t }, r)
  );
}
function E0(e, t, n) {
  if ((t === void 0 && (t = []), e == null))
    if (n != null && n.errors) e = n.matches;
    else return null;
  let r = e,
    l = n == null ? void 0 : n.errors;
  if (l != null) {
    let o = r.findIndex((i) => i.route.id && (l == null ? void 0 : l[i.route.id]));
    o >= 0 || q(!1), (r = r.slice(0, Math.min(r.length, o + 1)));
  }
  return r.reduceRight((o, i, a) => {
    let u = i.route.id ? (l == null ? void 0 : l[i.route.id]) : null,
      c = n ? i.route.errorElement || O.createElement(v0, null) : null,
      h = t.concat(r.slice(0, a + 1)),
      m = () =>
        O.createElement(
          w0,
          { match: i, routeContext: { outlet: o, matches: h } },
          u ? c : i.route.element !== void 0 ? i.route.element : o,
        );
    return n && (i.route.errorElement || a === 0)
      ? O.createElement(y0, {
          location: n.location,
          component: c,
          error: u,
          children: m(),
          routeContext: { outlet: null, matches: h },
        })
      : m();
  }, null);
}
var xc;
(function (e) {
  e.UseRevalidator = 'useRevalidator';
})(xc || (xc = {}));
var No;
(function (e) {
  (e.UseLoaderData = 'useLoaderData'),
    (e.UseActionData = 'useActionData'),
    (e.UseRouteError = 'useRouteError'),
    (e.UseNavigation = 'useNavigation'),
    (e.UseRouteLoaderData = 'useRouteLoaderData'),
    (e.UseMatches = 'useMatches'),
    (e.UseRevalidator = 'useRevalidator');
})(No || (No = {}));
function S0(e) {
  let t = O.useContext(ri);
  return t || q(!1), t;
}
function x0(e) {
  let t = O.useContext(Bn);
  return t || q(!1), t;
}
function k0(e) {
  let t = x0(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || q(!1), n.route.id;
}
function C0() {
  var e;
  let t = O.useContext(sp),
    n = S0(No.UseRouteError),
    r = k0(No.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function P0(e) {
  let { fallbackElement: t, router: n } = e,
    r = c0(
      n.subscribe,
      () => n.state,
      () => n.state,
    ),
    l = O.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (i) => n.navigate(i),
        push: (i, a, u) =>
          n.navigate(i, {
            state: a,
            preventScrollReset: u == null ? void 0 : u.preventScrollReset,
          }),
        replace: (i, a, u) =>
          n.navigate(i, {
            replace: !0,
            state: a,
            preventScrollReset: u == null ? void 0 : u.preventScrollReset,
          }),
      }),
      [n],
    ),
    o = n.basename || '/';
  return O.createElement(
    up.Provider,
    { value: { router: n, navigator: l, static: !1, basename: o } },
    O.createElement(
      ri.Provider,
      { value: r },
      O.createElement(
        M0,
        {
          basename: n.basename,
          location: n.state.location,
          navigationType: n.state.historyAction,
          navigator: l,
        },
        n.state.initialized ? O.createElement(O0, null) : t,
      ),
    ),
  );
}
function _0(e) {
  return m0(e.context);
}
function R0(e) {
  q(!1);
}
function M0(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: l = Re.Pop,
    navigator: o,
    static: i = !1,
  } = e;
  _l() && q(!1);
  let a = t.replace(/^\/*/, '/'),
    u = O.useMemo(() => ({ basename: a, navigator: o, static: i }), [a, o, i]);
  typeof r == 'string' && (r = It(r));
  let {
      pathname: c = '/',
      search: h = '',
      hash: m = '',
      state: d = null,
      key: v = 'default',
    } = r,
    w = O.useMemo(() => {
      let y = ep(c, a);
      return y == null ? null : { pathname: y, search: h, hash: m, state: d, key: v };
    }, [a, c, h, m, d, v]);
  return w == null
    ? null
    : O.createElement(
        Pl.Provider,
        { value: u },
        O.createElement(li.Provider, {
          children: n,
          value: { location: w, navigationType: l },
        }),
      );
}
function O0(e) {
  let { children: t, location: n } = e,
    r = O.useContext(up),
    l = r && !t ? r.router.routes : ba(t);
  return g0(l, n);
}
var kc;
(function (e) {
  (e[(e.pending = 0)] = 'pending'),
    (e[(e.success = 1)] = 'success'),
    (e[(e.error = 2)] = 'error');
})(kc || (kc = {}));
new Promise(() => {});
function ba(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    O.Children.forEach(e, (r, l) => {
      if (!O.isValidElement(r)) return;
      if (r.type === O.Fragment) {
        n.push.apply(n, ba(r.props.children, t));
        return;
      }
      r.type !== R0 && q(!1), !r.props.index || !r.props.children || q(!1);
      let o = [...t, l],
        i = {
          id: r.props.id || o.join('-'),
          caseSensitive: r.props.caseSensitive,
          element: r.props.element,
          index: r.props.index,
          path: r.props.path,
          loader: r.props.loader,
          action: r.props.action,
          errorElement: r.props.errorElement,
          hasErrorBoundary: r.props.errorElement != null,
          shouldRevalidate: r.props.shouldRevalidate,
          handle: r.props.handle,
        };
      r.props.children && (i.children = ba(r.props.children, o)), n.push(i);
    }),
    n
  );
}
function cp(e) {
  return e.map((t) => {
    let n = To({}, t);
    return (
      n.hasErrorBoundary == null && (n.hasErrorBoundary = n.errorElement != null),
      n.children && (n.children = cp(n.children)),
      n
    );
  });
}
/**
 * React Router DOM v6.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function vl() {
  return (
    (vl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    vl.apply(this, arguments)
  );
}
function dp(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    o;
  for (o = 0; o < r.length; o++) (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function A0(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function D0(e, t) {
  return e.button === 0 && (!t || t === '_self') && !A0(e);
}
const L0 = [
    'onClick',
    'relative',
    'reloadDocument',
    'replace',
    'state',
    'target',
    'to',
    'preventScrollReset',
  ],
  z0 = ['aria-current', 'caseSensitive', 'className', 'end', 'style', 'to', 'children'];
function T0(e, t) {
  return Vg({
    basename: t == null ? void 0 : t.basename,
    history: cg({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || N0(),
    routes: cp(e),
  }).initialize();
}
function N0() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = vl({}, t, { errors: I0(t.errors) })), t;
}
function I0(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, l] of t)
    if (l && l.__type === 'RouteErrorResponse')
      n[r] = new ni(l.status, l.statusText, l.data, l.internal === !0);
    else if (l && l.__type === 'Error') {
      let o = new Error(l.message);
      (o.stack = ''), (n[r] = o);
    } else n[r] = l;
  return n;
}
const F0 = O.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: o,
        replace: i,
        state: a,
        target: u,
        to: c,
        preventScrollReset: h,
      } = t,
      m = dp(t, L0),
      d = f0(c, { relative: l }),
      v = j0(c, { replace: i, state: a, target: u, preventScrollReset: h, relative: l });
    function w(y) {
      r && r(y), y.defaultPrevented || v(y);
    }
    return O.createElement(
      'a',
      vl({}, m, { href: d, onClick: o ? r : w, ref: n, target: u }),
    );
  }),
  $0 = O.forwardRef(function (t, n) {
    let {
        'aria-current': r = 'page',
        caseSensitive: l = !1,
        className: o = '',
        end: i = !1,
        style: a,
        to: u,
        children: c,
      } = t,
      h = dp(t, z0),
      m = Wu(u, { relative: h.relative }),
      d = Rl(),
      v = O.useContext(ri),
      { navigator: w } = O.useContext(Pl),
      y = w.encodeLocation ? w.encodeLocation(m).pathname : m.pathname,
      _ = d.pathname,
      p =
        v && v.navigation && v.navigation.location
          ? v.navigation.location.pathname
          : null;
    l || ((_ = _.toLowerCase()), (p = p ? p.toLowerCase() : null), (y = y.toLowerCase()));
    let f = _ === y || (!i && _.startsWith(y) && _.charAt(y.length) === '/'),
      g = p != null && (p === y || (!i && p.startsWith(y) && p.charAt(y.length) === '/')),
      E = f ? r : void 0,
      C;
    typeof o == 'function'
      ? (C = o({ isActive: f, isPending: g }))
      : (C = [o, f ? 'active' : null, g ? 'pending' : null].filter(Boolean).join(' '));
    let z = typeof a == 'function' ? a({ isActive: f, isPending: g }) : a;
    return O.createElement(
      F0,
      vl({}, h, { 'aria-current': E, className: C, ref: n, style: z, to: u }),
      typeof c == 'function' ? c({ isActive: f, isPending: g }) : c,
    );
  });
var Cc;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmitImpl = 'useSubmitImpl'),
    (e.UseFetcher = 'useFetcher');
})(Cc || (Cc = {}));
var Pc;
(function (e) {
  (e.UseFetchers = 'useFetchers'), (e.UseScrollRestoration = 'useScrollRestoration');
})(Pc || (Pc = {}));
function j0(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: o,
      relative: i,
    } = t === void 0 ? {} : t,
    a = p0(),
    u = Rl(),
    c = Wu(e, { relative: i });
  return O.useCallback(
    (h) => {
      if (D0(h, n)) {
        h.preventDefault();
        let m = r !== void 0 ? r : Nt(u) === Nt(c);
        a(e, { replace: m, state: l, preventScrollReset: o, relative: i });
      }
    },
    [u, a, c, r, l, n, e, o, i],
  );
}
var yl = {},
  B0 = {
    get exports() {
      return yl;
    },
    set exports(e) {
      yl = e;
    },
  },
  ue = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ie = typeof Symbol == 'function' && Symbol.for,
  Vu = Ie ? Symbol.for('react.element') : 60103,
  Gu = Ie ? Symbol.for('react.portal') : 60106,
  oi = Ie ? Symbol.for('react.fragment') : 60107,
  ii = Ie ? Symbol.for('react.strict_mode') : 60108,
  ai = Ie ? Symbol.for('react.profiler') : 60114,
  ui = Ie ? Symbol.for('react.provider') : 60109,
  si = Ie ? Symbol.for('react.context') : 60110,
  Qu = Ie ? Symbol.for('react.async_mode') : 60111,
  ci = Ie ? Symbol.for('react.concurrent_mode') : 60111,
  di = Ie ? Symbol.for('react.forward_ref') : 60112,
  fi = Ie ? Symbol.for('react.suspense') : 60113,
  U0 = Ie ? Symbol.for('react.suspense_list') : 60120,
  pi = Ie ? Symbol.for('react.memo') : 60115,
  hi = Ie ? Symbol.for('react.lazy') : 60116,
  b0 = Ie ? Symbol.for('react.block') : 60121,
  H0 = Ie ? Symbol.for('react.fundamental') : 60117,
  W0 = Ie ? Symbol.for('react.responder') : 60118,
  V0 = Ie ? Symbol.for('react.scope') : 60119;
function dt(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Vu:
        switch (((e = e.type), e)) {
          case Qu:
          case ci:
          case oi:
          case ai:
          case ii:
          case fi:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case si:
              case di:
              case hi:
              case pi:
              case ui:
                return e;
              default:
                return t;
            }
        }
      case Gu:
        return t;
    }
  }
}
function fp(e) {
  return dt(e) === ci;
}
ue.AsyncMode = Qu;
ue.ConcurrentMode = ci;
ue.ContextConsumer = si;
ue.ContextProvider = ui;
ue.Element = Vu;
ue.ForwardRef = di;
ue.Fragment = oi;
ue.Lazy = hi;
ue.Memo = pi;
ue.Portal = Gu;
ue.Profiler = ai;
ue.StrictMode = ii;
ue.Suspense = fi;
ue.isAsyncMode = function (e) {
  return fp(e) || dt(e) === Qu;
};
ue.isConcurrentMode = fp;
ue.isContextConsumer = function (e) {
  return dt(e) === si;
};
ue.isContextProvider = function (e) {
  return dt(e) === ui;
};
ue.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Vu;
};
ue.isForwardRef = function (e) {
  return dt(e) === di;
};
ue.isFragment = function (e) {
  return dt(e) === oi;
};
ue.isLazy = function (e) {
  return dt(e) === hi;
};
ue.isMemo = function (e) {
  return dt(e) === pi;
};
ue.isPortal = function (e) {
  return dt(e) === Gu;
};
ue.isProfiler = function (e) {
  return dt(e) === ai;
};
ue.isStrictMode = function (e) {
  return dt(e) === ii;
};
ue.isSuspense = function (e) {
  return dt(e) === fi;
};
ue.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === oi ||
    e === ci ||
    e === ai ||
    e === ii ||
    e === fi ||
    e === U0 ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === hi ||
        e.$$typeof === pi ||
        e.$$typeof === ui ||
        e.$$typeof === si ||
        e.$$typeof === di ||
        e.$$typeof === H0 ||
        e.$$typeof === W0 ||
        e.$$typeof === V0 ||
        e.$$typeof === b0))
  );
};
ue.typeOf = dt;
(function (e) {
  e.exports = ue;
})(B0);
function G0(e) {
  function t(L, I, F, H, S) {
    for (
      var Z = 0,
        D = 0,
        de = 0,
        te = 0,
        oe,
        K,
        _e = 0,
        Le = 0,
        ne,
        ze = (ne = oe = 0),
        re = 0,
        x = 0,
        k = 0,
        P = 0,
        U = F.length,
        $ = U - 1,
        W,
        A = '',
        B = '',
        Q = '',
        ke = '',
        X;
      re < U;

    ) {
      if (
        ((K = F.charCodeAt(re)),
        re === $ &&
          D + te + de + Z !== 0 &&
          (D !== 0 && (K = D === 47 ? 10 : 47), (te = de = Z = 0), U++, $++),
        D + te + de + Z === 0)
      ) {
        if (re === $ && (0 < x && (A = A.replace(d, '')), 0 < A.trim().length)) {
          switch (K) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              A += F.charAt(re);
          }
          K = 59;
        }
        switch (K) {
          case 123:
            for (A = A.trim(), oe = A.charCodeAt(0), ne = 1, P = ++re; re < U; ) {
              switch ((K = F.charCodeAt(re))) {
                case 123:
                  ne++;
                  break;
                case 125:
                  ne--;
                  break;
                case 47:
                  switch ((K = F.charCodeAt(re + 1))) {
                    case 42:
                    case 47:
                      e: {
                        for (ze = re + 1; ze < $; ++ze)
                          switch (F.charCodeAt(ze)) {
                            case 47:
                              if (
                                K === 42 &&
                                F.charCodeAt(ze - 1) === 42 &&
                                re + 2 !== ze
                              ) {
                                re = ze + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (K === 47) {
                                re = ze + 1;
                                break e;
                              }
                          }
                        re = ze;
                      }
                  }
                  break;
                case 91:
                  K++;
                case 40:
                  K++;
                case 34:
                case 39:
                  for (; re++ < $ && F.charCodeAt(re) !== K; );
              }
              if (ne === 0) break;
              re++;
            }
            switch (
              ((ne = F.substring(P, re)),
              oe === 0 && (oe = (A = A.replace(m, '').trim()).charCodeAt(0)),
              oe)
            ) {
              case 64:
                switch ((0 < x && (A = A.replace(d, '')), (K = A.charCodeAt(1)), K)) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    x = I;
                    break;
                  default:
                    x = yt;
                }
                if (
                  ((ne = t(I, x, ne, K, S + 1)),
                  (P = ne.length),
                  0 < M &&
                    ((x = n(yt, A, k)),
                    (X = a(3, ne, x, I, Oe, xe, P, K, S, H)),
                    (A = x.join('')),
                    X !== void 0 &&
                      (P = (ne = X.trim()).length) === 0 &&
                      ((K = 0), (ne = ''))),
                  0 < P)
                )
                  switch (K) {
                    case 115:
                      A = A.replace(z, i);
                    case 100:
                    case 109:
                    case 45:
                      ne = A + '{' + ne + '}';
                      break;
                    case 107:
                      (A = A.replace(f, '$1 $2')),
                        (ne = A + '{' + ne + '}'),
                        (ne =
                          Ee === 1 || (Ee === 2 && o('@' + ne, 3))
                            ? '@-webkit-' + ne + '@' + ne
                            : '@' + ne);
                      break;
                    default:
                      (ne = A + ne), H === 112 && (ne = ((B += ne), ''));
                  }
                else ne = '';
                break;
              default:
                ne = t(I, n(I, A, k), ne, H, S + 1);
            }
            (Q += ne), (ne = k = x = ze = oe = 0), (A = ''), (K = F.charCodeAt(++re));
            break;
          case 125:
          case 59:
            if (((A = (0 < x ? A.replace(d, '') : A).trim()), 1 < (P = A.length)))
              switch (
                (ze === 0 &&
                  ((oe = A.charCodeAt(0)), oe === 45 || (96 < oe && 123 > oe)) &&
                  (P = (A = A.replace(' ', ':')).length),
                0 < M &&
                  (X = a(1, A, I, L, Oe, xe, B.length, H, S, H)) !== void 0 &&
                  (P = (A = X.trim()).length) === 0 &&
                  (A = '\0\0'),
                (oe = A.charCodeAt(0)),
                (K = A.charCodeAt(1)),
                oe)
              ) {
                case 0:
                  break;
                case 64:
                  if (K === 105 || K === 99) {
                    ke += A + F.charAt(re);
                    break;
                  }
                default:
                  A.charCodeAt(P - 1) !== 58 && (B += l(A, oe, K, A.charCodeAt(2)));
              }
            (k = x = ze = oe = 0), (A = ''), (K = F.charCodeAt(++re));
        }
      }
      switch (K) {
        case 13:
        case 10:
          D === 47
            ? (D = 0)
            : 1 + oe === 0 && H !== 107 && 0 < A.length && ((x = 1), (A += '\0')),
            0 < M * G && a(0, A, I, L, Oe, xe, B.length, H, S, H),
            (xe = 1),
            Oe++;
          break;
        case 59:
        case 125:
          if (D + te + de + Z === 0) {
            xe++;
            break;
          }
        default:
          switch ((xe++, (W = F.charAt(re)), K)) {
            case 9:
            case 32:
              if (te + Z + D === 0)
                switch (_e) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    W = '';
                    break;
                  default:
                    K !== 32 && (W = ' ');
                }
              break;
            case 0:
              W = '\\0';
              break;
            case 12:
              W = '\\f';
              break;
            case 11:
              W = '\\v';
              break;
            case 38:
              te + D + Z === 0 && ((x = k = 1), (W = '\f' + W));
              break;
            case 108:
              if (te + D + Z + se === 0 && 0 < ze)
                switch (re - ze) {
                  case 2:
                    _e === 112 && F.charCodeAt(re - 3) === 58 && (se = _e);
                  case 8:
                    Le === 111 && (se = Le);
                }
              break;
            case 58:
              te + D + Z === 0 && (ze = re);
              break;
            case 44:
              D + de + te + Z === 0 && ((x = 1), (W += '\r'));
              break;
            case 34:
            case 39:
              D === 0 && (te = te === K ? 0 : te === 0 ? K : te);
              break;
            case 91:
              te + D + de === 0 && Z++;
              break;
            case 93:
              te + D + de === 0 && Z--;
              break;
            case 41:
              te + D + Z === 0 && de--;
              break;
            case 40:
              if (te + D + Z === 0) {
                if (oe === 0)
                  switch (2 * _e + 3 * Le) {
                    case 533:
                      break;
                    default:
                      oe = 1;
                  }
                de++;
              }
              break;
            case 64:
              D + de + te + Z + ze + ne === 0 && (ne = 1);
              break;
            case 42:
            case 47:
              if (!(0 < te + Z + de))
                switch (D) {
                  case 0:
                    switch (2 * K + 3 * F.charCodeAt(re + 1)) {
                      case 235:
                        D = 47;
                        break;
                      case 220:
                        (P = re), (D = 42);
                    }
                    break;
                  case 42:
                    K === 47 &&
                      _e === 42 &&
                      P + 2 !== re &&
                      (F.charCodeAt(P + 2) === 33 && (B += F.substring(P, re + 1)),
                      (W = ''),
                      (D = 0));
                }
          }
          D === 0 && (A += W);
      }
      (Le = _e), (_e = K), re++;
    }
    if (((P = B.length), 0 < P)) {
      if (
        ((x = I),
        0 < M &&
          ((X = a(2, B, x, L, Oe, xe, P, H, S, H)), X !== void 0 && (B = X).length === 0))
      )
        return ke + B + Q;
      if (((B = x.join(',') + '{' + B + '}'), Ee * se !== 0)) {
        switch ((Ee !== 2 || o(B, 2) || (se = 0), se)) {
          case 111:
            B = B.replace(E, ':-moz-$1') + B;
            break;
          case 112:
            B =
              B.replace(g, '::-webkit-input-$1') +
              B.replace(g, '::-moz-$1') +
              B.replace(g, ':-ms-input-$1') +
              B;
        }
        se = 0;
      }
    }
    return ke + B + Q;
  }
  function n(L, I, F) {
    var H = I.trim().split(_);
    I = H;
    var S = H.length,
      Z = L.length;
    switch (Z) {
      case 0:
      case 1:
        var D = 0;
        for (L = Z === 0 ? '' : L[0] + ' '; D < S; ++D) I[D] = r(L, I[D], F).trim();
        break;
      default:
        var de = (D = 0);
        for (I = []; D < S; ++D)
          for (var te = 0; te < Z; ++te) I[de++] = r(L[te] + ' ', H[D], F).trim();
    }
    return I;
  }
  function r(L, I, F) {
    var H = I.charCodeAt(0);
    switch ((33 > H && (H = (I = I.trim()).charCodeAt(0)), H)) {
      case 38:
        return I.replace(p, '$1' + L.trim());
      case 58:
        return L.trim() + I.replace(p, '$1' + L.trim());
      default:
        if (0 < 1 * F && 0 < I.indexOf('\f'))
          return I.replace(p, (L.charCodeAt(0) === 58 ? '' : '$1') + L.trim());
    }
    return L + I;
  }
  function l(L, I, F, H) {
    var S = L + ';',
      Z = 2 * I + 3 * F + 4 * H;
    if (Z === 944) {
      L = S.indexOf(':', 9) + 1;
      var D = S.substring(L, S.length - 1).trim();
      return (
        (D = S.substring(0, L).trim() + D + ';'),
        Ee === 1 || (Ee === 2 && o(D, 1)) ? '-webkit-' + D + D : D
      );
    }
    if (Ee === 0 || (Ee === 2 && !o(S, 1))) return S;
    switch (Z) {
      case 1015:
        return S.charCodeAt(10) === 97 ? '-webkit-' + S + S : S;
      case 951:
        return S.charCodeAt(3) === 116 ? '-webkit-' + S + S : S;
      case 963:
        return S.charCodeAt(5) === 110 ? '-webkit-' + S + S : S;
      case 1009:
        if (S.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return '-webkit-' + S + S;
      case 978:
        return '-webkit-' + S + '-moz-' + S + S;
      case 1019:
      case 983:
        return '-webkit-' + S + '-moz-' + S + '-ms-' + S + S;
      case 883:
        if (S.charCodeAt(8) === 45) return '-webkit-' + S + S;
        if (0 < S.indexOf('image-set(', 11)) return S.replace(Pe, '$1-webkit-$2') + S;
        break;
      case 932:
        if (S.charCodeAt(4) === 45)
          switch (S.charCodeAt(5)) {
            case 103:
              return (
                '-webkit-box-' +
                S.replace('-grow', '') +
                '-webkit-' +
                S +
                '-ms-' +
                S.replace('grow', 'positive') +
                S
              );
            case 115:
              return '-webkit-' + S + '-ms-' + S.replace('shrink', 'negative') + S;
            case 98:
              return '-webkit-' + S + '-ms-' + S.replace('basis', 'preferred-size') + S;
          }
        return '-webkit-' + S + '-ms-' + S + S;
      case 964:
        return '-webkit-' + S + '-ms-flex-' + S + S;
      case 1023:
        if (S.charCodeAt(8) !== 99) break;
        return (
          (D = S.substring(S.indexOf(':', 15))
            .replace('flex-', '')
            .replace('space-between', 'justify')),
          '-webkit-box-pack' + D + '-webkit-' + S + '-ms-flex-pack' + D + S
        );
      case 1005:
        return w.test(S) ? S.replace(v, ':-webkit-') + S.replace(v, ':-moz-') + S : S;
      case 1e3:
        switch (
          ((D = S.substring(13).trim()),
          (I = D.indexOf('-') + 1),
          D.charCodeAt(0) + D.charCodeAt(I))
        ) {
          case 226:
            D = S.replace(C, 'tb');
            break;
          case 232:
            D = S.replace(C, 'tb-rl');
            break;
          case 220:
            D = S.replace(C, 'lr');
            break;
          default:
            return S;
        }
        return '-webkit-' + S + '-ms-' + D + S;
      case 1017:
        if (S.indexOf('sticky', 9) === -1) break;
      case 975:
        switch (
          ((I = (S = L).length - 10),
          (D = (S.charCodeAt(I) === 33 ? S.substring(0, I) : S)
            .substring(L.indexOf(':', 7) + 1)
            .trim()),
          (Z = D.charCodeAt(0) + (D.charCodeAt(7) | 0)))
        ) {
          case 203:
            if (111 > D.charCodeAt(8)) break;
          case 115:
            S = S.replace(D, '-webkit-' + D) + ';' + S;
            break;
          case 207:
          case 102:
            S =
              S.replace(D, '-webkit-' + (102 < Z ? 'inline-' : '') + 'box') +
              ';' +
              S.replace(D, '-webkit-' + D) +
              ';' +
              S.replace(D, '-ms-' + D + 'box') +
              ';' +
              S;
        }
        return S + ';';
      case 938:
        if (S.charCodeAt(5) === 45)
          switch (S.charCodeAt(6)) {
            case 105:
              return (
                (D = S.replace('-items', '')),
                '-webkit-' + S + '-webkit-box-' + D + '-ms-flex-' + D + S
              );
            case 115:
              return '-webkit-' + S + '-ms-flex-item-' + S.replace(T, '') + S;
            default:
              return (
                '-webkit-' +
                S +
                '-ms-flex-line-pack' +
                S.replace('align-content', '').replace(T, '') +
                S
              );
          }
        break;
      case 973:
      case 989:
        if (S.charCodeAt(3) !== 45 || S.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (b.test(L) === !0)
          return (D = L.substring(L.indexOf(':') + 1)).charCodeAt(0) === 115
            ? l(L.replace('stretch', 'fill-available'), I, F, H).replace(
                ':fill-available',
                ':stretch',
              )
            : S.replace(D, '-webkit-' + D) +
                S.replace(D, '-moz-' + D.replace('fill-', '')) +
                S;
        break;
      case 962:
        if (
          ((S = '-webkit-' + S + (S.charCodeAt(5) === 102 ? '-ms-' + S : '') + S),
          F + H === 211 && S.charCodeAt(13) === 105 && 0 < S.indexOf('transform', 10))
        )
          return S.substring(0, S.indexOf(';', 27) + 1).replace(y, '$1-webkit-$2') + S;
    }
    return S;
  }
  function o(L, I) {
    var F = L.indexOf(I === 1 ? ':' : '{'),
      H = L.substring(0, I !== 3 ? F : 10);
    return (
      (F = L.substring(F + 1, L.length - 1)), V(I !== 2 ? H : H.replace(J, '$1'), F, I)
    );
  }
  function i(L, I) {
    var F = l(I, I.charCodeAt(0), I.charCodeAt(1), I.charCodeAt(2));
    return F !== I + ';' ? F.replace(N, ' or ($1)').substring(4) : '(' + I + ')';
  }
  function a(L, I, F, H, S, Z, D, de, te, oe) {
    for (var K = 0, _e = I, Le; K < M; ++K)
      switch ((Le = Fe[K].call(h, L, _e, F, H, S, Z, D, de, te, oe))) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          _e = Le;
      }
    if (_e !== I) return _e;
  }
  function u(L) {
    switch (L) {
      case void 0:
      case null:
        M = Fe.length = 0;
        break;
      default:
        if (typeof L == 'function') Fe[M++] = L;
        else if (typeof L == 'object') for (var I = 0, F = L.length; I < F; ++I) u(L[I]);
        else G = !!L | 0;
    }
    return u;
  }
  function c(L) {
    return (
      (L = L.prefix),
      L !== void 0 &&
        ((V = null),
        L ? (typeof L != 'function' ? (Ee = 1) : ((Ee = 2), (V = L))) : (Ee = 0)),
      c
    );
  }
  function h(L, I) {
    var F = L;
    if ((33 > F.charCodeAt(0) && (F = F.trim()), (ie = F), (F = [ie]), 0 < M)) {
      var H = a(-1, I, F, F, Oe, xe, 0, 0, 0, 0);
      H !== void 0 && typeof H == 'string' && (I = H);
    }
    var S = t(yt, F, I, 0, 0);
    return (
      0 < M && ((H = a(-2, S, F, F, Oe, xe, S.length, 0, 0, 0)), H !== void 0 && (S = H)),
      (ie = ''),
      (se = 0),
      (xe = Oe = 1),
      S
    );
  }
  var m = /^\0+/g,
    d = /[\0\r\f]/g,
    v = /: */g,
    w = /zoo|gra/,
    y = /([,: ])(transform)/g,
    _ = /,\r+?/g,
    p = /([\t\r\n ])*\f?&/g,
    f = /@(k\w+)\s*(\S*)\s*/,
    g = /::(place)/g,
    E = /:(read-only)/g,
    C = /[svh]\w+-[tblr]{2}/,
    z = /\(\s*(.*)\s*\)/g,
    N = /([\s\S]*?);/g,
    T = /-self|flex-/g,
    J = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
    b = /stretch|:\s*\w+\-(?:conte|avail)/,
    Pe = /([^-])(image-set\()/,
    xe = 1,
    Oe = 1,
    se = 0,
    Ee = 1,
    yt = [],
    Fe = [],
    M = 0,
    V = null,
    G = 0,
    ie = '';
  return (h.use = u), (h.set = c), e !== void 0 && c(e), h;
}
var Q0 = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1,
};
function Y0(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var K0 =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  _c = Y0(function (e) {
    return (
      K0.test(e) ||
      (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91)
    );
  }),
  Yu = yl,
  X0 = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  J0 = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  Z0 = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
  pp = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Ku = {};
Ku[Yu.ForwardRef] = Z0;
Ku[Yu.Memo] = pp;
function Rc(e) {
  return Yu.isMemo(e) ? pp : Ku[e.$$typeof] || X0;
}
var q0 = Object.defineProperty,
  ev = Object.getOwnPropertyNames,
  Mc = Object.getOwnPropertySymbols,
  tv = Object.getOwnPropertyDescriptor,
  nv = Object.getPrototypeOf,
  Oc = Object.prototype;
function hp(e, t, n) {
  if (typeof t != 'string') {
    if (Oc) {
      var r = nv(t);
      r && r !== Oc && hp(e, r, n);
    }
    var l = ev(t);
    Mc && (l = l.concat(Mc(t)));
    for (var o = Rc(e), i = Rc(t), a = 0; a < l.length; ++a) {
      var u = l[a];
      if (!J0[u] && !(n && n[u]) && !(i && i[u]) && !(o && o[u])) {
        var c = tv(t, u);
        try {
          q0(e, u, c);
        } catch {}
      }
    }
  }
  return e;
}
var rv = hp;
function Pt() {
  return (Pt =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }).apply(this, arguments);
}
var Ac = function (e, t) {
    for (var n = [e[0]], r = 0, l = t.length; r < l; r += 1) n.push(t[r], e[r + 1]);
    return n;
  },
  Ha = function (e) {
    return (
      e !== null &&
      typeof e == 'object' &&
      (e.toString ? e.toString() : Object.prototype.toString.call(e)) ===
        '[object Object]' &&
      !yl.typeOf(e)
    );
  },
  Io = Object.freeze([]),
  fn = Object.freeze({});
function yr(e) {
  return typeof e == 'function';
}
function Dc(e) {
  return e.displayName || e.name || 'Component';
}
function Xu(e) {
  return e && typeof e.styledComponentId == 'string';
}
var wr = (typeof process < 'u' && ({}.REACT_APP_SC_ATTR || {}.SC_ATTR)) || 'data-styled',
  Ju = typeof window < 'u' && 'HTMLElement' in window,
  lv = Boolean(
    typeof SC_DISABLE_SPEEDY == 'boolean'
      ? SC_DISABLE_SPEEDY
      : typeof process < 'u' &&
        {}.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
        {}.REACT_APP_SC_DISABLE_SPEEDY !== ''
      ? {}.REACT_APP_SC_DISABLE_SPEEDY !== 'false' && {}.REACT_APP_SC_DISABLE_SPEEDY
      : typeof process < 'u' &&
        {}.SC_DISABLE_SPEEDY !== void 0 &&
        {}.SC_DISABLE_SPEEDY !== ''
      ? {}.SC_DISABLE_SPEEDY !== 'false' && {}.SC_DISABLE_SPEEDY
      : !1,
  ),
  ov = {};
function In(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  throw new Error(
    'An error occurred. See https://git.io/JUIaE#' +
      e +
      ' for more information.' +
      (n.length > 0 ? ' Args: ' + n.join(', ') : ''),
  );
}
var iv = (function () {
    function e(n) {
      (this.groupSizes = new Uint32Array(512)), (this.length = 512), (this.tag = n);
    }
    var t = e.prototype;
    return (
      (t.indexOfGroup = function (n) {
        for (var r = 0, l = 0; l < n; l++) r += this.groupSizes[l];
        return r;
      }),
      (t.insertRules = function (n, r) {
        if (n >= this.groupSizes.length) {
          for (var l = this.groupSizes, o = l.length, i = o; n >= i; )
            (i <<= 1) < 0 && In(16, '' + n);
          (this.groupSizes = new Uint32Array(i)),
            this.groupSizes.set(l),
            (this.length = i);
          for (var a = o; a < i; a++) this.groupSizes[a] = 0;
        }
        for (var u = this.indexOfGroup(n + 1), c = 0, h = r.length; c < h; c++)
          this.tag.insertRule(u, r[c]) && (this.groupSizes[n]++, u++);
      }),
      (t.clearGroup = function (n) {
        if (n < this.length) {
          var r = this.groupSizes[n],
            l = this.indexOfGroup(n),
            o = l + r;
          this.groupSizes[n] = 0;
          for (var i = l; i < o; i++) this.tag.deleteRule(l);
        }
      }),
      (t.getGroup = function (n) {
        var r = '';
        if (n >= this.length || this.groupSizes[n] === 0) return r;
        for (
          var l = this.groupSizes[n], o = this.indexOfGroup(n), i = o + l, a = o;
          a < i;
          a++
        )
          r +=
            this.tag.getRule(a) +
            `/*!sc*/
`;
        return r;
      }),
      e
    );
  })(),
  ao = new Map(),
  Fo = new Map(),
  Jr = 1,
  Ql = function (e) {
    if (ao.has(e)) return ao.get(e);
    for (; Fo.has(Jr); ) Jr++;
    var t = Jr++;
    return ao.set(e, t), Fo.set(t, e), t;
  },
  av = function (e) {
    return Fo.get(e);
  },
  uv = function (e, t) {
    t >= Jr && (Jr = t + 1), ao.set(e, t), Fo.set(t, e);
  },
  sv = 'style[' + wr + '][data-styled-version="5.3.6"]',
  cv = new RegExp('^' + wr + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
  dv = function (e, t, n) {
    for (var r, l = n.split(','), o = 0, i = l.length; o < i; o++)
      (r = l[o]) && e.registerName(t, r);
  },
  fv = function (e, t) {
    for (
      var n = (t.textContent || '').split(`/*!sc*/
`),
        r = [],
        l = 0,
        o = n.length;
      l < o;
      l++
    ) {
      var i = n[l].trim();
      if (i) {
        var a = i.match(cv);
        if (a) {
          var u = 0 | parseInt(a[1], 10),
            c = a[2];
          u !== 0 && (uv(c, u), dv(e, c, a[3]), e.getTag().insertRules(u, r)),
            (r.length = 0);
        } else r.push(i);
      }
    }
  },
  pv = function () {
    return typeof __webpack_nonce__ < 'u' ? __webpack_nonce__ : null;
  },
  mp = function (e) {
    var t = document.head,
      n = e || t,
      r = document.createElement('style'),
      l = (function (a) {
        for (var u = a.childNodes, c = u.length; c >= 0; c--) {
          var h = u[c];
          if (h && h.nodeType === 1 && h.hasAttribute(wr)) return h;
        }
      })(n),
      o = l !== void 0 ? l.nextSibling : null;
    r.setAttribute(wr, 'active'), r.setAttribute('data-styled-version', '5.3.6');
    var i = pv();
    return i && r.setAttribute('nonce', i), n.insertBefore(r, o), r;
  },
  hv = (function () {
    function e(n) {
      var r = (this.element = mp(n));
      r.appendChild(document.createTextNode('')),
        (this.sheet = (function (l) {
          if (l.sheet) return l.sheet;
          for (var o = document.styleSheets, i = 0, a = o.length; i < a; i++) {
            var u = o[i];
            if (u.ownerNode === l) return u;
          }
          In(17);
        })(r)),
        (this.length = 0);
    }
    var t = e.prototype;
    return (
      (t.insertRule = function (n, r) {
        try {
          return this.sheet.insertRule(r, n), this.length++, !0;
        } catch {
          return !1;
        }
      }),
      (t.deleteRule = function (n) {
        this.sheet.deleteRule(n), this.length--;
      }),
      (t.getRule = function (n) {
        var r = this.sheet.cssRules[n];
        return r !== void 0 && typeof r.cssText == 'string' ? r.cssText : '';
      }),
      e
    );
  })(),
  mv = (function () {
    function e(n) {
      var r = (this.element = mp(n));
      (this.nodes = r.childNodes), (this.length = 0);
    }
    var t = e.prototype;
    return (
      (t.insertRule = function (n, r) {
        if (n <= this.length && n >= 0) {
          var l = document.createTextNode(r),
            o = this.nodes[n];
          return this.element.insertBefore(l, o || null), this.length++, !0;
        }
        return !1;
      }),
      (t.deleteRule = function (n) {
        this.element.removeChild(this.nodes[n]), this.length--;
      }),
      (t.getRule = function (n) {
        return n < this.length ? this.nodes[n].textContent : '';
      }),
      e
    );
  })(),
  gv = (function () {
    function e(n) {
      (this.rules = []), (this.length = 0);
    }
    var t = e.prototype;
    return (
      (t.insertRule = function (n, r) {
        return n <= this.length && (this.rules.splice(n, 0, r), this.length++, !0);
      }),
      (t.deleteRule = function (n) {
        this.rules.splice(n, 1), this.length--;
      }),
      (t.getRule = function (n) {
        return n < this.length ? this.rules[n] : '';
      }),
      e
    );
  })(),
  Lc = Ju,
  vv = { isServer: !Ju, useCSSOMInjection: !lv },
  $o = (function () {
    function e(n, r, l) {
      n === void 0 && (n = fn),
        r === void 0 && (r = {}),
        (this.options = Pt({}, vv, {}, n)),
        (this.gs = r),
        (this.names = new Map(l)),
        (this.server = !!n.isServer),
        !this.server &&
          Ju &&
          Lc &&
          ((Lc = !1),
          (function (o) {
            for (var i = document.querySelectorAll(sv), a = 0, u = i.length; a < u; a++) {
              var c = i[a];
              c &&
                c.getAttribute(wr) !== 'active' &&
                (fv(o, c), c.parentNode && c.parentNode.removeChild(c));
            }
          })(this));
    }
    e.registerId = function (n) {
      return Ql(n);
    };
    var t = e.prototype;
    return (
      (t.reconstructWithOptions = function (n, r) {
        return (
          r === void 0 && (r = !0),
          new e(Pt({}, this.options, {}, n), this.gs, (r && this.names) || void 0)
        );
      }),
      (t.allocateGSInstance = function (n) {
        return (this.gs[n] = (this.gs[n] || 0) + 1);
      }),
      (t.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((l = (r = this.options).isServer),
            (o = r.useCSSOMInjection),
            (i = r.target),
            (n = l ? new gv(i) : o ? new hv(i) : new mv(i)),
            new iv(n)))
        );
        var n, r, l, o, i;
      }),
      (t.hasNameForId = function (n, r) {
        return this.names.has(n) && this.names.get(n).has(r);
      }),
      (t.registerName = function (n, r) {
        if ((Ql(n), this.names.has(n))) this.names.get(n).add(r);
        else {
          var l = new Set();
          l.add(r), this.names.set(n, l);
        }
      }),
      (t.insertRules = function (n, r, l) {
        this.registerName(n, r), this.getTag().insertRules(Ql(n), l);
      }),
      (t.clearNames = function (n) {
        this.names.has(n) && this.names.get(n).clear();
      }),
      (t.clearRules = function (n) {
        this.getTag().clearGroup(Ql(n)), this.clearNames(n);
      }),
      (t.clearTag = function () {
        this.tag = void 0;
      }),
      (t.toString = function () {
        return (function (n) {
          for (var r = n.getTag(), l = r.length, o = '', i = 0; i < l; i++) {
            var a = av(i);
            if (a !== void 0) {
              var u = n.names.get(a),
                c = r.getGroup(i);
              if (u && c && u.size) {
                var h = wr + '.g' + i + '[id="' + a + '"]',
                  m = '';
                u !== void 0 &&
                  u.forEach(function (d) {
                    d.length > 0 && (m += d + ',');
                  }),
                  (o +=
                    '' +
                    c +
                    h +
                    '{content:"' +
                    m +
                    `"}/*!sc*/
`);
              }
            }
          }
          return o;
        })(this);
      }),
      e
    );
  })(),
  yv = /(a)(d)/gi,
  zc = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function Wa(e) {
  var t,
    n = '';
  for (t = Math.abs(e); t > 52; t = (t / 52) | 0) n = zc(t % 52) + n;
  return (zc(t % 52) + n).replace(yv, '$1-$2');
}
var rr = function (e, t) {
    for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
    return e;
  },
  gp = function (e) {
    return rr(5381, e);
  };
function vp(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (yr(n) && !Xu(n)) return !1;
  }
  return !0;
}
var wv = gp('5.3.6'),
  Ev = (function () {
    function e(t, n, r) {
      (this.rules = t),
        (this.staticRulesId = ''),
        (this.isStatic = (r === void 0 || r.isStatic) && vp(t)),
        (this.componentId = n),
        (this.baseHash = rr(wv, n)),
        (this.baseStyle = r),
        $o.registerId(n);
    }
    return (
      (e.prototype.generateAndInjectStyles = function (t, n, r) {
        var l = this.componentId,
          o = [];
        if (
          (this.baseStyle && o.push(this.baseStyle.generateAndInjectStyles(t, n, r)),
          this.isStatic && !r.hash)
        )
          if (this.staticRulesId && n.hasNameForId(l, this.staticRulesId))
            o.push(this.staticRulesId);
          else {
            var i = Fn(this.rules, t, n, r).join(''),
              a = Wa(rr(this.baseHash, i) >>> 0);
            if (!n.hasNameForId(l, a)) {
              var u = r(i, '.' + a, void 0, l);
              n.insertRules(l, a, u);
            }
            o.push(a), (this.staticRulesId = a);
          }
        else {
          for (
            var c = this.rules.length, h = rr(this.baseHash, r.hash), m = '', d = 0;
            d < c;
            d++
          ) {
            var v = this.rules[d];
            if (typeof v == 'string') m += v;
            else if (v) {
              var w = Fn(v, t, n, r),
                y = Array.isArray(w) ? w.join('') : w;
              (h = rr(h, y + d)), (m += y);
            }
          }
          if (m) {
            var _ = Wa(h >>> 0);
            if (!n.hasNameForId(l, _)) {
              var p = r(m, '.' + _, void 0, l);
              n.insertRules(l, _, p);
            }
            o.push(_);
          }
        }
        return o.join(' ');
      }),
      e
    );
  })(),
  Sv = /^\s*\/\/.*$/gm,
  xv = [':', '[', '.', '#'];
function kv(e) {
  var t,
    n,
    r,
    l,
    o = e === void 0 ? fn : e,
    i = o.options,
    a = i === void 0 ? fn : i,
    u = o.plugins,
    c = u === void 0 ? Io : u,
    h = new G0(a),
    m = [],
    d = (function (y) {
      function _(p) {
        if (p)
          try {
            y(p + '}');
          } catch {}
      }
      return function (p, f, g, E, C, z, N, T, J, b) {
        switch (p) {
          case 1:
            if (J === 0 && f.charCodeAt(0) === 64) return y(f + ';'), '';
            break;
          case 2:
            if (T === 0) return f + '/*|*/';
            break;
          case 3:
            switch (T) {
              case 102:
              case 112:
                return y(g[0] + f), '';
              default:
                return f + (b === 0 ? '/*|*/' : '');
            }
          case -2:
            f.split('/*|*/}').forEach(_);
        }
      };
    })(function (y) {
      m.push(y);
    }),
    v = function (y, _, p) {
      return (_ === 0 && xv.indexOf(p[n.length]) !== -1) || p.match(l) ? y : '.' + t;
    };
  function w(y, _, p, f) {
    f === void 0 && (f = '&');
    var g = y.replace(Sv, ''),
      E = _ && p ? p + ' ' + _ + ' { ' + g + ' }' : g;
    return (
      (t = f),
      (n = _),
      (r = new RegExp('\\' + n + '\\b', 'g')),
      (l = new RegExp('(\\' + n + '\\b){2,}')),
      h(p || !_ ? '' : _, E)
    );
  }
  return (
    h.use(
      [].concat(c, [
        function (y, _, p) {
          y === 2 && p.length && p[0].lastIndexOf(n) > 0 && (p[0] = p[0].replace(r, v));
        },
        d,
        function (y) {
          if (y === -2) {
            var _ = m;
            return (m = []), _;
          }
        },
      ]),
    ),
    (w.hash = c.length
      ? c
          .reduce(function (y, _) {
            return _.name || In(15), rr(y, _.name);
          }, 5381)
          .toString()
      : ''),
    w
  );
}
var yp = s.createContext();
yp.Consumer;
var wp = s.createContext(),
  Cv = (wp.Consumer, new $o()),
  Va = kv();
function Ep() {
  return O.useContext(yp) || Cv;
}
function Sp() {
  return O.useContext(wp) || Va;
}
var Pv = (function () {
    function e(t, n) {
      var r = this;
      (this.inject = function (l, o) {
        o === void 0 && (o = Va);
        var i = r.name + o.hash;
        l.hasNameForId(r.id, i) || l.insertRules(r.id, i, o(r.rules, i, '@keyframes'));
      }),
        (this.toString = function () {
          return In(12, String(r.name));
        }),
        (this.name = t),
        (this.id = 'sc-keyframes-' + t),
        (this.rules = n);
    }
    return (
      (e.prototype.getName = function (t) {
        return t === void 0 && (t = Va), this.name + t.hash;
      }),
      e
    );
  })(),
  _v = /([A-Z])/,
  Rv = /([A-Z])/g,
  Mv = /^ms-/,
  Ov = function (e) {
    return '-' + e.toLowerCase();
  };
function Tc(e) {
  return _v.test(e) ? e.replace(Rv, Ov).replace(Mv, '-ms-') : e;
}
var Nc = function (e) {
  return e == null || e === !1 || e === '';
};
function Fn(e, t, n, r) {
  if (Array.isArray(e)) {
    for (var l, o = [], i = 0, a = e.length; i < a; i += 1)
      (l = Fn(e[i], t, n, r)) !== '' &&
        (Array.isArray(l) ? o.push.apply(o, l) : o.push(l));
    return o;
  }
  if (Nc(e)) return '';
  if (Xu(e)) return '.' + e.styledComponentId;
  if (yr(e)) {
    if (
      typeof (c = e) != 'function' ||
      (c.prototype && c.prototype.isReactComponent) ||
      !t
    )
      return e;
    var u = e(t);
    return Fn(u, t, n, r);
  }
  var c;
  return e instanceof Pv
    ? n
      ? (e.inject(n, r), e.getName(r))
      : e
    : Ha(e)
    ? (function h(m, d) {
        var v,
          w,
          y = [];
        for (var _ in m)
          m.hasOwnProperty(_) &&
            !Nc(m[_]) &&
            ((Array.isArray(m[_]) && m[_].isCss) || yr(m[_])
              ? y.push(Tc(_) + ':', m[_], ';')
              : Ha(m[_])
              ? y.push.apply(y, h(m[_], _))
              : y.push(
                  Tc(_) +
                    ': ' +
                    ((v = _),
                    (w = m[_]) == null || typeof w == 'boolean' || w === ''
                      ? ''
                      : typeof w != 'number' || w === 0 || v in Q0
                      ? String(w).trim()
                      : w + 'px') +
                    ';',
                ));
        return d ? [d + ' {'].concat(y, ['}']) : y;
      })(e)
    : e.toString();
}
var Ic = function (e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function xp(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  return yr(e) || Ha(e)
    ? Ic(Fn(Ac(Io, [e].concat(n))))
    : n.length === 0 && e.length === 1 && typeof e[0] == 'string'
    ? e
    : Ic(Fn(Ac(e, n)));
}
var kp = function (e, t, n) {
    return n === void 0 && (n = fn), (e.theme !== n.theme && e.theme) || t || n.theme;
  },
  Av = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  Dv = /(^-|-$)/g;
function Vi(e) {
  return e.replace(Av, '-').replace(Dv, '');
}
var Cp = function (e) {
  return Wa(gp(e) >>> 0);
};
function Yl(e) {
  return typeof e == 'string' && !0;
}
var Ga = function (e) {
    return (
      typeof e == 'function' || (typeof e == 'object' && e !== null && !Array.isArray(e))
    );
  },
  Lv = function (e) {
    return e !== '__proto__' && e !== 'constructor' && e !== 'prototype';
  };
function zv(e, t, n) {
  var r = e[n];
  Ga(t) && Ga(r) ? Pp(r, t) : (e[n] = t);
}
function Pp(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  for (var l = 0, o = n; l < o.length; l++) {
    var i = o[l];
    if (Ga(i)) for (var a in i) Lv(a) && zv(e, i[a], a);
  }
  return e;
}
var wl = s.createContext();
wl.Consumer;
function Tv(e) {
  var t = O.useContext(wl),
    n = O.useMemo(
      function () {
        return (function (r, l) {
          if (!r) return In(14);
          if (yr(r)) {
            var o = r(l);
            return o;
          }
          return Array.isArray(r) || typeof r != 'object'
            ? In(8)
            : l
            ? Pt({}, l, {}, r)
            : r;
        })(e.theme, t);
      },
      [e.theme, t],
    );
  return e.children ? s.createElement(wl.Provider, { value: n }, e.children) : null;
}
var Gi = {};
function _p(e, t, n) {
  var r = Xu(e),
    l = !Yl(e),
    o = t.attrs,
    i = o === void 0 ? Io : o,
    a = t.componentId,
    u =
      a === void 0
        ? (function (f, g) {
            var E = typeof f != 'string' ? 'sc' : Vi(f);
            Gi[E] = (Gi[E] || 0) + 1;
            var C = E + '-' + Cp('5.3.6' + E + Gi[E]);
            return g ? g + '-' + C : C;
          })(t.displayName, t.parentComponentId)
        : a,
    c = t.displayName,
    h =
      c === void 0
        ? (function (f) {
            return Yl(f) ? 'styled.' + f : 'Styled(' + Dc(f) + ')';
          })(e)
        : c,
    m =
      t.displayName && t.componentId
        ? Vi(t.displayName) + '-' + t.componentId
        : t.componentId || u,
    d = r && e.attrs ? Array.prototype.concat(e.attrs, i).filter(Boolean) : i,
    v = t.shouldForwardProp;
  r &&
    e.shouldForwardProp &&
    (v = t.shouldForwardProp
      ? function (f, g, E) {
          return e.shouldForwardProp(f, g, E) && t.shouldForwardProp(f, g, E);
        }
      : e.shouldForwardProp);
  var w,
    y = new Ev(n, m, r ? e.componentStyle : void 0),
    _ = y.isStatic && i.length === 0,
    p = function (f, g) {
      return (function (E, C, z, N) {
        var T = E.attrs,
          J = E.componentStyle,
          b = E.defaultProps,
          Pe = E.foldedComponentIds,
          xe = E.shouldForwardProp,
          Oe = E.styledComponentId,
          se = E.target,
          Ee = (function (H, S, Z) {
            H === void 0 && (H = fn);
            var D = Pt({}, S, { theme: H }),
              de = {};
            return (
              Z.forEach(function (te) {
                var oe,
                  K,
                  _e,
                  Le = te;
                for (oe in (yr(Le) && (Le = Le(D)), Le))
                  D[oe] = de[oe] =
                    oe === 'className'
                      ? ((K = de[oe]), (_e = Le[oe]), K && _e ? K + ' ' + _e : K || _e)
                      : Le[oe];
              }),
              [D, de]
            );
          })(kp(C, O.useContext(wl), b) || fn, C, T),
          yt = Ee[0],
          Fe = Ee[1],
          M = (function (H, S, Z, D) {
            var de = Ep(),
              te = Sp(),
              oe = S
                ? H.generateAndInjectStyles(fn, de, te)
                : H.generateAndInjectStyles(Z, de, te);
            return oe;
          })(J, N, yt),
          V = z,
          G = Fe.$as || C.$as || Fe.as || C.as || se,
          ie = Yl(G),
          L = Fe !== C ? Pt({}, C, {}, Fe) : C,
          I = {};
        for (var F in L)
          F[0] !== '$' &&
            F !== 'as' &&
            (F === 'forwardedAs'
              ? (I.as = L[F])
              : (xe ? xe(F, _c, G) : !ie || _c(F)) && (I[F] = L[F]));
        return (
          C.style && Fe.style !== C.style && (I.style = Pt({}, C.style, {}, Fe.style)),
          (I.className = Array.prototype
            .concat(Pe, Oe, M !== Oe ? M : null, C.className, Fe.className)
            .filter(Boolean)
            .join(' ')),
          (I.ref = V),
          O.createElement(G, I)
        );
      })(w, f, g, _);
    };
  return (
    (p.displayName = h),
    ((w = s.forwardRef(p)).attrs = d),
    (w.componentStyle = y),
    (w.displayName = h),
    (w.shouldForwardProp = v),
    (w.foldedComponentIds = r
      ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId)
      : Io),
    (w.styledComponentId = m),
    (w.target = r ? e.target : e),
    (w.withComponent = function (f) {
      var g = t.componentId,
        E = (function (z, N) {
          if (z == null) return {};
          var T,
            J,
            b = {},
            Pe = Object.keys(z);
          for (J = 0; J < Pe.length; J++) (T = Pe[J]), N.indexOf(T) >= 0 || (b[T] = z[T]);
          return b;
        })(t, ['componentId']),
        C = g && g + '-' + (Yl(f) ? f : Vi(Dc(f)));
      return _p(f, Pt({}, E, { attrs: d, componentId: C }), n);
    }),
    Object.defineProperty(w, 'defaultProps', {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (f) {
        this._foldedDefaultProps = r ? Pp({}, e.defaultProps, f) : f;
      },
    }),
    (w.toString = function () {
      return '.' + w.styledComponentId;
    }),
    l &&
      rv(w, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
        withComponent: !0,
      }),
    w
  );
}
var Qa = function (e) {
  return (function t(n, r, l) {
    if ((l === void 0 && (l = fn), !yl.isValidElementType(r))) return In(1, String(r));
    var o = function () {
      return n(r, l, xp.apply(void 0, arguments));
    };
    return (
      (o.withConfig = function (i) {
        return t(n, r, Pt({}, l, {}, i));
      }),
      (o.attrs = function (i) {
        return t(
          n,
          r,
          Pt({}, l, { attrs: Array.prototype.concat(l.attrs, i).filter(Boolean) }),
        );
      }),
      o
    );
  })(_p, e);
};
[
  'a',
  'abbr',
  'address',
  'area',
  'article',
  'aside',
  'audio',
  'b',
  'base',
  'bdi',
  'bdo',
  'big',
  'blockquote',
  'body',
  'br',
  'button',
  'canvas',
  'caption',
  'cite',
  'code',
  'col',
  'colgroup',
  'data',
  'datalist',
  'dd',
  'del',
  'details',
  'dfn',
  'dialog',
  'div',
  'dl',
  'dt',
  'em',
  'embed',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'head',
  'header',
  'hgroup',
  'hr',
  'html',
  'i',
  'iframe',
  'img',
  'input',
  'ins',
  'kbd',
  'keygen',
  'label',
  'legend',
  'li',
  'link',
  'main',
  'map',
  'mark',
  'marquee',
  'menu',
  'menuitem',
  'meta',
  'meter',
  'nav',
  'noscript',
  'object',
  'ol',
  'optgroup',
  'option',
  'output',
  'p',
  'param',
  'picture',
  'pre',
  'progress',
  'q',
  'rp',
  'rt',
  'ruby',
  's',
  'samp',
  'script',
  'section',
  'select',
  'small',
  'source',
  'span',
  'strong',
  'style',
  'sub',
  'summary',
  'sup',
  'table',
  'tbody',
  'td',
  'textarea',
  'tfoot',
  'th',
  'thead',
  'time',
  'title',
  'tr',
  'track',
  'u',
  'ul',
  'var',
  'video',
  'wbr',
  'circle',
  'clipPath',
  'defs',
  'ellipse',
  'foreignObject',
  'g',
  'image',
  'line',
  'linearGradient',
  'marker',
  'mask',
  'path',
  'pattern',
  'polygon',
  'polyline',
  'radialGradient',
  'rect',
  'stop',
  'svg',
  'text',
  'textPath',
  'tspan',
].forEach(function (e) {
  Qa[e] = Qa(e);
});
var Nv = (function () {
  function e(n, r) {
    (this.rules = n),
      (this.componentId = r),
      (this.isStatic = vp(n)),
      $o.registerId(this.componentId + 1);
  }
  var t = e.prototype;
  return (
    (t.createStyles = function (n, r, l, o) {
      var i = o(Fn(this.rules, r, l, o).join(''), ''),
        a = this.componentId + n;
      l.insertRules(a, a, i);
    }),
    (t.removeStyles = function (n, r) {
      r.clearRules(this.componentId + n);
    }),
    (t.renderStyles = function (n, r, l, o) {
      n > 2 && $o.registerId(this.componentId + n),
        this.removeStyles(n, l),
        this.createStyles(n, r, l, o);
    }),
    e
  );
})();
function Iv(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  var l = xp.apply(void 0, [e].concat(n)),
    o = 'sc-global-' + Cp(JSON.stringify(l)),
    i = new Nv(l, o);
  function a(c) {
    var h = Ep(),
      m = Sp(),
      d = O.useContext(wl),
      v = O.useRef(h.allocateGSInstance(o)).current;
    return (
      h.server && u(v, c, h, d, m),
      O.useLayoutEffect(
        function () {
          if (!h.server)
            return (
              u(v, c, h, d, m),
              function () {
                return i.removeStyles(v, h);
              }
            );
        },
        [v, c, h, d, m],
      ),
      null
    );
  }
  function u(c, h, m, d, v) {
    if (i.isStatic) i.renderStyles(c, ov, m, v);
    else {
      var w = Pt({}, h, { theme: kp(h, d, a.defaultProps) });
      i.renderStyles(c, w, m, v);
    }
  }
  return s.memo(a);
}
const Ye = Qa;
var Rp = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
  Fc = s.createContext && s.createContext(Rp),
  pn =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (pn =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n];
              for (var l in t)
                Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
            }
            return e;
          }),
        pn.apply(this, arguments)
      );
    },
  Fv =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++)
          t.indexOf(r[l]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[l]) &&
            (n[r[l]] = e[r[l]]);
      return n;
    };
function Mp(e) {
  return (
    e &&
    e.map(function (t, n) {
      return s.createElement(t.tag, pn({ key: n }, t.attr), Mp(t.child));
    })
  );
}
function Un(e) {
  return function (t) {
    return s.createElement($v, pn({ attr: pn({}, e.attr) }, t), Mp(e.child));
  };
}
function $v(e) {
  var t = function (n) {
    var r = e.attr,
      l = e.size,
      o = e.title,
      i = Fv(e, ['attr', 'size', 'title']),
      a = l || n.size || '1em',
      u;
    return (
      n.className && (u = n.className),
      e.className && (u = (u ? u + ' ' : '') + e.className),
      s.createElement(
        'svg',
        pn(
          { stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' },
          n.attr,
          r,
          i,
          {
            className: u,
            style: pn(pn({ color: e.color || n.color }, n.style), e.style),
            height: a,
            width: a,
            xmlns: 'http://www.w3.org/2000/svg',
          },
        ),
        o && s.createElement('title', null, o),
        e.children,
      )
    );
  };
  return Fc !== void 0
    ? s.createElement(Fc.Consumer, null, function (n) {
        return t(n);
      })
    : t(Rp);
}
function jv(e) {
  return Un({
    tag: 'svg',
    attr: { viewBox: '0 0 1024 1024' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M854.6 289.1a362.49 362.49 0 0 0-79.9-115.7 370.83 370.83 0 0 0-118.2-77.8C610.7 76.6 562.1 67 512 67c-50.1 0-98.7 9.6-144.5 28.5-44.3 18.3-84 44.5-118.2 77.8A363.6 363.6 0 0 0 169.4 289c-19.5 45-29.4 92.8-29.4 142 0 70.6 16.9 140.9 50.1 208.7 26.7 54.5 64 107.6 111 158.1 80.3 86.2 164.5 138.9 188.4 153a43.9 43.9 0 0 0 22.4 6.1c7.8 0 15.5-2 22.4-6.1 23.9-14.1 108.1-66.8 188.4-153 47-50.4 84.3-103.6 111-158.1C867.1 572 884 501.8 884 431.1c0-49.2-9.9-97-29.4-142zM512 880.2c-65.9-41.9-300-207.8-300-449.1 0-77.9 31.1-151.1 87.6-206.3C356.3 169.5 431.7 139 512 139s155.7 30.5 212.4 85.9C780.9 280 812 353.2 812 431.1c0 241.3-234.1 407.2-300 449.1zm0-617.2c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 0 1 512 551c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 0 1 400 439c0-29.9 11.7-58 32.8-79.2C454 338.6 482.1 327 512 327c29.9 0 58 11.6 79.2 32.8C612.4 381 624 409.1 624 439c0 29.9-11.6 58-32.8 79.2z',
        },
      },
    ],
  })(e);
}
function Bv(e) {
  return Un({
    tag: 'svg',
    attr: { viewBox: '0 0 1024 1024' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z',
        },
      },
    ],
  })(e);
}
function Uv(e) {
  return Un({
    tag: 'svg',
    attr: { viewBox: '0 0 1024 1024' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M913.9 552.2L805 181.4v-.1c-7.6-22.9-25.7-36.5-48.3-36.5-23.4 0-42.5 13.5-49.7 35.2l-71.4 213H388.8l-71.4-213c-7.2-21.7-26.3-35.2-49.7-35.2-23.1 0-42.5 14.8-48.4 36.6L110.5 552.2c-4.4 14.7 1.2 31.4 13.5 40.7l368.5 276.4c2.6 3.6 6.2 6.3 10.4 7.8l8.6 6.4 8.5-6.4c4.9-1.7 9-4.7 11.9-8.9l368.4-275.4c12.4-9.2 18-25.9 13.6-40.6zM751.7 193.4c1-1.8 2.9-1.9 3.5-1.9 1.1 0 2.5.3 3.4 3L818 394.3H684.5l67.2-200.9zm-487.4 1c.9-2.6 2.3-2.9 3.4-2.9 2.7 0 2.9.1 3.4 1.7l67.3 201.2H206.5l57.8-200zM158.8 558.7l28.2-97.3 202.4 270.2-230.6-172.9zm73.9-116.4h122.1l90.8 284.3-212.9-284.3zM512.9 776L405.7 442.3H620L512.9 776zm157.9-333.7h119.5L580 723.1l90.8-280.8zm-40.7 293.9l207.3-276.7 29.5 99.2-236.8 177.5z',
        },
      },
    ],
  })(e);
}
function bv(e) {
  return Un({
    tag: 'svg',
    attr: { viewBox: '0 0 1024 1024' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M847.7 112H176.3c-35.5 0-64.3 28.8-64.3 64.3v671.4c0 35.5 28.8 64.3 64.3 64.3h671.4c35.5 0 64.3-28.8 64.3-64.3V176.3c0-35.5-28.8-64.3-64.3-64.3zm0 736c-447.8-.1-671.7-.2-671.7-.3.1-447.8.2-671.7.3-671.7 447.8.1 671.7.2 671.7.3-.1 447.8-.2 671.7-.3 671.7zM230.6 411.9h118.7v381.8H230.6zm59.4-52.2c37.9 0 68.8-30.8 68.8-68.8a68.8 68.8 0 1 0-137.6 0c-.1 38 30.7 68.8 68.8 68.8zm252.3 245.1c0-49.8 9.5-98 71.2-98 60.8 0 61.7 56.9 61.7 101.2v185.7h118.6V584.3c0-102.8-22.2-181.9-142.3-181.9-57.7 0-96.4 31.7-112.3 61.7h-1.6v-52.2H423.7v381.8h118.6V604.8z',
        },
      },
    ],
  })(e);
}
function Hv(e) {
  return Un({
    tag: 'svg',
    attr: { viewBox: '0 0 1024 1024' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z',
        },
      },
    ],
  })(e);
}
function Wv() {
  return s.createElement(
    'div',
    { className: 'markdown-body' },
    s.createElement(
      s.Fragment,
      null,
      s.createElement('h2', null, 'Brief bio'),
      s.createElement(
        'p',
        null,
        'Dra. Carla Rocha is an assistant professor at the ',
        s.createElement(
          'a',
          { href: 'https://www.unb.br' },
          'University of Brasília (UnB)',
        ),
        ', Brazil. Dr. Rocha holds a PhD in Computer Science from the Laboratoire d’Informatique, de Robotique et de Microélectronique de Montpellier ',
        s.createElement('a', { href: 'http://lirmm.fr' }, 'LIRMM'),
        ', France. She has very broad interests in Software Engineering, including Open Source Software (communities and contributors), Human Aspects of Software Engineering, Empirical Software Engineering, and Mining Software Repositories techniques. She is one of the coordinators of the research group ',
        s.createElement('a', { href: '(https://github.com/lappis-unb)' }, 'LAPPIS'),
        ', one of founders of the mentorship program ',
        s.createElement(
          'a',
          { href: 'https://github.com/BOSS-BigOpenSourceSibling/' },
          'Big Open Source Siblings (BOSS)',
        ),
        ' and she collaborates (or collaborated) with the following groups/institutions in research projects: CCSL (IME-USP), LARA (UnB), Secretaria Especial da Cultura, Media Lab (MIT), C2RMF (Louvre Museum).',
      ),
      s.createElement('h2', null, 'Get in touch'),
      s.createElement(
        'ul',
        null,
        s.createElement(
          'li',
          null,
          s.createElement('a', { href: 'mailto:caguiar@unb.br' }, 'caguiar@unb.br'),
        ),
      ),
      s.createElement('h2', null, 'Research Groups'),
      s.createElement(
        'ul',
        null,
        s.createElement(
          'li',
          null,
          s.createElement(
            'p',
            null,
            'LAPPIS @ UnB: ',
            s.createElement(
              'a',
              { href: 'https://github.com/lappis-unb' },
              'https://github.com/lappis-unb',
            ),
          ),
        ),
        s.createElement(
          'li',
          null,
          s.createElement(
            'p',
            null,
            'Big Open Source Siblings ',
            s.createElement(
              'a',
              { href: 'https://github.com/BOSS-BigOpenSourceSibling/' },
              'https://github.com/BOSS-BigOpenSourceSibling/',
            ),
          ),
        ),
      ),
      s.createElement('h2', null, 'Social networks'),
      s.createElement(
        'ul',
        null,
        s.createElement(
          'li',
          null,
          'Github: ',
          s.createElement('a', { href: 'https://github.com/RochaCarla' }, 'RochaCarla'),
        ),
        s.createElement(
          'li',
          null,
          'Scholar: ',
          s.createElement(
            'a',
            { href: 'https://scholar.google.com/citations?user=_y8XHnAAAAAJ&hl=en' },
            'CarlaRocha',
          ),
        ),
      ),
      s.createElement(
        'p',
        null,
        s.createElement('img', {
          src: '/carlocha/assets/images/lappis.png',
          alt: 'lappis',
        }),
      ),
    ),
  );
}
function Vv() {
  return s.createElement(
    'div',
    { className: 'markdown-body' },
    s.createElement(
      s.Fragment,
      null,
      s.createElement(
        'p',
        null,
        'I write mostly about the research projects I am involved and teaching/academic life. ',
        s.createElement('br', null),
      ),
      s.createElement(
        'p',
        null,
        s.createElement('strong', null, 'Important note'),
        ': I decided to post exclusively on Medium (On my ',
        s.createElement(
          'a',
          { href: 'https://medium.com/@rocha.carla' },
          'personal account',
        ),
        ' or in ',
        s.createElement(
          'a',
          { href: 'https://medium.com/@lappisunbfga' },
          'LAPPIS account',
        ),
        ').',
      ),
      s.createElement(
        'p',
        null,
        s.createElement('strong', null, 'Important note 2'),
        ': these posts might have typos or weird wording (and most of them written in Portuguese). Although I might be aware of some of these issues, I do not plan to fix any of them. This is because writing takes time. If I want my blog posts to be free of typos, I might ended up not publishing anything, because I may need to polish them a lot (since I’m not a native English speaker, this takes even more time). So many of these blog posts are not polished.',
        s.createElement('br', null),
      ),
      s.createElement('hr', null),
      s.createElement(
        'p',
        null,
        s.createElement('img', {
          src: '/carlocha/assets/images/lappis.png',
          alt: 'lappis',
        }),
      ),
    ),
  );
}
function Gv() {
  return s.createElement(
    'div',
    { className: 'markdown-body' },
    s.createElement(
      s.Fragment,
      null,
      s.createElement('h2', null, 'Participate'),
      s.createElement(
        'ol',
        null,
        s.createElement(
          'li',
          null,
          s.createElement(
            'p',
            null,
            'Co-founder ',
            s.createElement(
              'a',
              { href: 'https://www.youtube.com/c/BigOpenSourceSibling' },
              'BOSS',
            ),
          ),
        ),
        s.createElement(
          'li',
          null,
          s.createElement(
            'p',
            null,
            'Co-Hosting ',
            s.createElement(
              'a',
              {
                href: 'https://youtube.com/playlist?list=PLFFHHqnY3q2FLjtGKYuI-V-z9u7jzBOb_',
              },
              'Talk Like a BOSS - rodas de conversas',
            ),
            ' by Big Open Source Sibling (BOSS)',
          ),
        ),
        s.createElement(
          'li',
          null,
          s.createElement(
            'p',
            null,
            'Co-Hosting ',
            s.createElement(
              'a',
              { href: 'https://youtu.be/zynynEynpk8' },
              'Mini LAPPIS Conf',
            ),
          ),
        ),
        s.createElement(
          'li',
          null,
          s.createElement(
            'p',
            null,
            'Organizing ',
            s.createElement(
              'a',
              { href: 'https://github.com/lappis-unb/MiniLappisConf' },
              'Mini LAPPIS Conf',
            ),
          ),
        ),
        s.createElement(
          'li',
          null,
          s.createElement(
            'p',
            null,
            'Program Co-chair ',
            s.createElement(
              'a',
              { href: 'http://www.agilebrazil.com/2021/wbma' },
              'WBMA - Agile Brazil 2021',
            ),
          ),
        ),
        s.createElement(
          'li',
          null,
          s.createElement(
            'p',
            null,
            'Publicity Co-Chair ',
            s.createElement(
              'a',
              { href: 'http://www.agilebrazil.com/2019/docs/en/wbma/' },
              'WBMA - Agile Brazil 2019',
            ),
          ),
        ),
        s.createElement(
          'li',
          null,
          s.createElement(
            'p',
            null,
            'Speaker at ',
            s.createElement(
              'a',
              { href: 'https://youtu.be/MlGYHl3Iyyg' },
              'Campus Party 2020',
            ),
          ),
        ),
        s.createElement(
          'li',
          null,
          s.createElement(
            'p',
            null,
            'Scientific advisory committee ',
            s.createElement(
              'a',
              { href: 'https://covidas-unb.github.io/InfoGerais/' },
              'CoVidas UnB Hackathon 2020',
            ),
          ),
        ),
        s.createElement(
          'li',
          null,
          s.createElement(
            'p',
            null,
            'Membro do Comitê de Gestão Estratégica de Campus Inteligente eSustentável (CGECIS) da Universidade de Brasília',
          ),
        ),
        s.createElement(
          'li',
          null,
          s.createElement(
            'p',
            null,
            'Membro do Conselho Editorial da ',
            s.createElement(
              'a',
              { href: 'https://revistadarcy.unb.br' },
              'Revista Darcy',
            ),
            '.',
          ),
        ),
        s.createElement(
          'li',
          null,
          s.createElement(
            'p',
            null,
            'Membro da Câmara Técnica de Projetos do Parque Científico e Tecnológico da Universidade de Brasília – PCTec/UnB',
          ),
        ),
      ),
      s.createElement('h2', null, 'Slides'),
      s.createElement(
        'ul',
        null,
        s.createElement(
          'li',
          null,
          s.createElement(
            'p',
            null,
            'Introduction to ',
            s.createElement(
              'a',
              {
                href: 'https://docs.google.com/presentation/d/1bAOZ0gLjEIwOLhkRhakvaXG1_FP4fGuHYMVhEc72w7M/edit?usp=sharing',
              },
              'BOSS mentorship',
            ),
            ' (Presentation Guadec 2021)',
          ),
        ),
        s.createElement(
          'li',
          null,
          s.createElement(
            'p',
            null,
            'Introdução a uma arquitetura de ',
            s.createElement(
              'a',
              {
                href: 'https://docs.google.com/presentation/d/1c0bLbdfj8ztAvIQz3MNYSp0I6zjUhQDO4k3aqQianEU/edit?usp=sharing',
              },
              'Chatbot Open Source',
            ),
            ' (Apresentação Campus Party 2019)',
          ),
        ),
        s.createElement(
          'li',
          null,
          s.createElement(
            'p',
            null,
            s.createElement(
              'a',
              {
                href: 'https://docs.google.com/presentation/d/1xFwBtiMU08lOgSGFG4s9QpUZF80Ei5HENvTPN1VffGs/edit?usp=sharing',
              },
              'Formando inovadores através de Open Source',
            ),
            ' (Apresentação Campus Party 2020)',
          ),
        ),
      ),
      s.createElement('h2', null, 'Open Source'),
      s.createElement(
        'ul',
        null,
        s.createElement(
          'li',
          null,
          s.createElement(
            'p',
            null,
            s.createElement(
              'a',
              { href: 'https://github.com/lappis-unb/rasa-ptbr-boilerplate' },
              'Chatbot Boilerplate for Brazilian Portuguese',
            ),
            '. arquitetura boilerplate de um produto chatbot utilizando o framework ',
            s.createElement('a', { href: 'https://www.rasa.com' }, 'Rasa'),
            ', configurado para a língua Portuguesa.',
          ),
        ),
        s.createElement(
          'li',
          null,
          s.createElement(
            'p',
            null,
            s.createElement(
              'a',
              { href: 'https://github.com/Escola-em-Casa' },
              'Escola em Casa',
            ),
            ' - Concede acesso gratuito, através de dados patrocinados, aos recursos necessários para a realização do ensino à distância da Secretaria de Educação do Distrito Federal.',
          ),
        ),
        s.createElement(
          'li',
          null,
          s.createElement(
            'p',
            null,
            s.createElement(
              'a',
              { href: 'https://github.com/lappis-unb/realtimecardgame' },
              'Real time Card Game',
            ),
            '. Jogo de carta real time utilizando a engine de jogos Unity3D. Utilizado para aprendizagem de desenvolvimento de jogos.',
          ),
        ),
        s.createElement(
          'li',
          null,
          s.createElement(
            'p',
            null,
            s.createElement(
              'a',
              { href: 'https://github.com/fga-eps-mds' },
              'POC OSS projects',
            ),
            '. Projetos de software desenvolvido por estudantes de graduação em Engenharia de Software',
          ),
        ),
        s.createElement(
          'li',
          null,
          s.createElement(
            'p',
            null,
            s.createElement(
              'a',
              { href: 'https://github.com/BOSS-BigOpenSourceSibling/' },
              'BOSS Organization',
            ),
            '. Organização com todo o material de apoio do programa de mentoria Big Open Source Siblings.',
          ),
        ),
        s.createElement(
          'li',
          null,
          s.createElement(
            'p',
            null,
            'The LAPPIS team translated to Brazilian Portuguese the publication “Public Money Public Code – Modernising Public Infrastructure with Free Software” from Free Software Foundation Europe. The translation in portuguese - ',
            s.createElement(
              'a',
              {
                href: 'https://download.fsfe.org/campaigns/pmpc/PMPC-Modernising-with-Free-Software.pt_br.pdf',
              },
              'Dinheiro Público Código Público - Modernizando a Infraestrutura Pública com Software Livre',
            ),
            '.',
          ),
        ),
      ),
      s.createElement(
        'p',
        null,
        s.createElement('img', {
          src: '/carlocha/assets/images/publico.png',
          alt: 'dinheiro',
        }),
      ),
    ),
  );
}
function Qv() {
  return s.createElement(
    'div',
    { className: 'markdown-body' },
    s.createElement(
      s.Fragment,
      null,
      s.createElement(
        'p',
        null,
        'I’ve been involved in several research projects with both research groups and companies R&D. I am one of many coordinators of the applied research laboratory ',
        s.createElement(
          'a',
          { href: 'https://lappis-unb.github.io/lappis.rocks/' },
          'LAPPIS',
        ),
        '. I had the opportunity to coordinate several applied research projects with governmental agencies and private companies. I had more than 50 scholarships under my supervision. Most of the projects I am involved in have software development under an open source license. I will present the latest projects. For the complete list, please visit my ',
        s.createElement(
          'a',
          { href: 'http://lattes.cnpq.br/2831991076751452' },
          'lattes page',
        ),
        '.',
      ),
      s.createElement(
        'p',
        null,
        'A presentation of the latest projects, with some technical details is available ',
        s.createElement(
          'a',
          {
            href: 'https://docs.google.com/presentation/d/1ywrszF-efFiFrmqVJ8JGCpr19EHfh0M5C8ZZ8fmL8x8/edit?usp=sharing',
          },
          'here',
        ),
      ),
      s.createElement('h2', null, 'Residencia TIC Brisas UnB - 2022 - ongoing'),
      s.createElement(
        'p',
        null,
        'Coordenadora do projeto “Residência em TIC da BRISA - UnB FGA”. A BRISA Sociedade para o Desenvolvimento da Tecnologia da Informação, em parceria com a UnB campus Gama e LAPPIS, vai capacitar estudantes de cursos de tecnologias, graduação e ensino técnico, para se tornarem desenvolvedores de sistemas nas tecnologias mais atuais de informática e comunicações. A BRISA conta com recursos da Lei de Informática, através de Programa Prioritário do Ministério da Ciência, Tecnologia e inovações – MCTI, coordenado pela Softex.',
      ),
      s.createElement(
        'p',
        null,
        s.createElement(
          'a',
          { href: 'https://residenciaticbrisa.github.io/landing_page/' },
          'Link Projeto',
        ),
      ),
      s.createElement(
        'h2',
        null,
        'Jornada Horizontes do Empreendedorismo - 2022 - ongoing',
      ),
      s.createElement(
        'p',
        null,
        'Coordenadora do projeto "Jornada Horizontes do Empreendedorismo ". O objetivo é fomentar o empreendedorismo e a inovação, por meio da capacitação, desenvolvimento de habilidades sociais e mentoria voltadas à inclusão de jovens negros e mulheres jovens, no mercado de trabalho e à geração de renda, residentes no Centro-Oeste. Esse é o principal objetivo de um projeto inclusivo idealizado e oferecido gratuitamente pela Fundação de Empreendimentos Científicos e Tecnológicos – Finatec em parceria com o Ministério da Mulher, da Família e dos Direitos Humanos - MMFDH.',
      ),
      s.createElement(
        'p',
        null,
        s.createElement(
          'a',
          { href: 'http://lattes.cnpq.br/2831991076751452' },
          'Link Projeto',
        ),
      ),
      s.createElement('h2', null, 'Big Open Source Siblings (BOSS) - 2020 - ongoing'),
      s.createElement(
        'p',
        null,
        'The BOSS initiative aims to reach underrepresented groups in tech who want to be mentored and assisted to learn how to work on open source projects. We will provide a safe space and an accompanying methodology for them to learn basic concepts of working in a small open source project in practice and build enough background for them to, at the end of the program, be able to choose other projects to continue their contributions. The mentoring process helps build confidence, fill in technical gaps, and engage the participants.',
      ),
      s.createElement(
        'p',
        null,
        'In the BOSS program, besides the technical aspects of introducing newcomers to open source, we deal with some challenges to inclusion, namely, intersectionality and impostor syndrome.',
        s.createElement(
          'a',
          {
            href: 'https://github.com/BOSS-BigOpenSourceSibling/BigSibling/blob/main/gnome_challenge/phase3/BOSS%20-%20final%20final.pdf',
          },
          'The BOSS initiative manual is available here.',
        ),
      ),
      s.createElement(
        'p',
        null,
        'We won the ',
        s.createElement(
          'a',
          { href: 'https://www.gnome.org/challenge/winners/' },
          'Gnome Community Engagement Challenge',
        ),
        '.',
      ),
      s.createElement(
        'p',
        null,
        s.createElement('img', {
          src: '/carlocha/assets/images/BadgesPhaseThreeWinner.png',
          alt: 'image',
        }),
      ),
      s.createElement(
        'h2',
        null,
        'Machine Learning for outlier detection in Customer databases - partnership with the Instituto Eldorado/Dell - 2021 - ongoing',
      ),
      s.createElement(
        'p',
        null,
        'In this project, we experiment with several machine learning algorithms to detect outliers and anomalies in large Customer Dataset. We deploy Data, Feature Engineering, and MLOps techniques and practices.',
      ),
      s.createElement(
        'p',
        null,
        'We adopted a commonly used machine learning workflow depicted in various forms across industry and research. It has commonalities with prior workflows defined in data science and data mining, such as TDSP, KDD, and CRISP-DM. They have in common the data-centered essence of the process and the multiple feedback loops among the different stages. We followed some DevOps and MLOps best practices and automation to speed up the experimentation cycle and scale the process to other databases and a larger team.',
      ),
      s.createElement(
        'h2',
        null,
        'Chatbot to guide the submission of Culture Incentive proposal - Ministry of Culture - 2017-2019',
      ),
      s.createElement(
        'p',
        null,
        'In this project, we developed one of the first chatbots for brazilian government. We developed an open source chatbot solution, with over 70 intentions to answer about the Culture Incentive Law to guide cultural agents in proposing their project.',
      ),
      s.createElement(
        'p',
        null,
        'We innovate in chatbot architecture, continuous deploy pipeline, and we used MLOps practices and techniques before the term was coined by practitioners.',
      ),
      s.createElement(
        'p',
        null,
        'The entire project is available on the github organization of ',
        s.createElement('a', { href: 'https://github.com/lappis-unb' }, 'LAPPIS'),
        '.',
      ),
      s.createElement(
        'p',
        null,
        'We also developed an Open Source ',
        s.createElement(
          'a',
          { href: 'https://github.com/lappis-unb/rasa-ptbr-boilerplate' },
          'Chatbot Boilerplate',
        ),
        ', with all the functionalities needed for a chatbot product, to guide newcomers into this growing industry. The community has more than 350 participants on the communication channel.',
      ),
      s.createElement(
        'h2',
        null,
        'Public Money Public Code – Modernising Public Infrastructure with Free Software',
      ),
      s.createElement(
        'p',
        null,
        'The LAPPIS team translated to Brazilian Portuguese the publication “Public Money Public Code – Modernising Public Infrastructure with Free Software” from Free Software Foundation Europe. The translation in portuguese - ',
        s.createElement(
          'a',
          {
            href: 'https://download.fsfe.org/campaigns/pmpc/PMPC-Modernising-with-Free-Software.pt_br.pdf',
          },
          'Dinheiro Público Código Público - Modernizando a Infraestrutura Pública com Software Livre',
        ),
      ),
      s.createElement('h2', null, 'Other Partnerships'),
      s.createElement(
        'p',
        null,
        'The image illustrates some of the past/current LAPPIS partners.',
      ),
      s.createElement(
        'p',
        null,
        s.createElement('img', {
          src: '/carlocha/assets/images/parcerias.png',
          alt: 'parcerias',
        }),
      ),
    ),
  );
}
function Yv() {
  return s.createElement(
    'div',
    { className: 'markdown-body' },
    s.createElement(
      s.Fragment,
      null,
      s.createElement('h2', null, '2021'),
      s.createElement(
        'ol',
        null,
        s.createElement(
          'li',
          null,
          s.createElement(
            'p',
            null,
            'I. Alves, C. Rocha. “Qualifying software engineers undergraduates in DevOps-challenges of introducing technical and non-technical concepts in a project-oriented course”. IEEE/ACM 43rd International Conference on Software Engineering: Software Engineering Education and Training (ICSE-SEET), 2021.',
          ),
        ),
        s.createElement(
          'li',
          null,
          s.createElement(
            'p',
            null,
            'Pablo Diego Silva da Silva, Rodrigo Oliveira Campos, Carla Rocha. “OSS Scripting System for Game Development in Rust”. IFIP International Conference on Open Source Systems (OSS), 2021.',
          ),
        ),
        s.createElement(
          'li',
          null,
          s.createElement(
            'p',
            null,
            '“Assuring the Evolvability of Legacy Systems in Devops transformation/adoption: Insights of an experience report”',
          ),
        ),
        s.createElement(
          'li',
          null,
          s.createElement(
            'p',
            null,
            '“Product Engineering for Machine Learning:A Grey Literature Review”',
          ),
        ),
      ),
      s.createElement('h2', null, '2020'),
      s.createElement('p', null, 'TODO'),
      s.createElement(
        'ol',
        null,
        s.createElement('li', null, s.createElement('p', null, 'BOSS manual')),
        s.createElement(
          'li',
          null,
          s.createElement('p', null, '“Trans perspective as Software Engineers”'),
        ),
      ),
      s.createElement('h2', null, '2019'),
      s.createElement(
        'ol',
        null,
        s.createElement(
          'li',
          null,
          s.createElement(
            'p',
            null,
            'Leonardo Leite, Carla Rocha, Fabio Kon, Dejan Milojicic, Paulo Meirelles. “A survey of DevOps concepts and challenges”.ACM Computing Surveys (CSUR),2019.',
          ),
        ),
        s.createElement(
          'li',
          null,
          s.createElement(
            'p',
            null,
            'Arthur RT de Lacerda, Carla SR Aguiar. “FLOSS FAQ chatbot project reuse: how to allow nonexperts to develop a chatbot”. Proceedings of the 15th International Symposium on Open Collaboration (OpenSym), 2019.',
          ),
        ),
        s.createElement(
          'li',
          null,
          s.createElement(
            'p',
            null,
            'Paulo Meirelles, Carla SR Aguiar, Felipe Assis, Rodrigo Siqueira, Alfredo Goldman. “A students’ perspective of native and cross-platform approaches for mobile application development”. International Conference on Computational Science and Its Applications (ICCSA), 2019.',
          ),
        ),
      ),
    ),
  );
}
function Kv() {
  return s.createElement(
    'div',
    { className: 'markdown-body' },
    s.createElement(
      s.Fragment,
      null,
      s.createElement(
        'p',
        null,
        'A few suggestions, in no particular order (some of them taken from ',
        s.createElement(
          'a',
          { href: 'https://gustavopinto.org' },
          'https://gustavopinto.org',
        ),
        '):',
      ),
      s.createElement('h2', null, 'Must read'),
      s.createElement(
        'ol',
        null,
        s.createElement(
          'li',
          null,
          s.createElement(
            'p',
            null,
            s.createElement(
              'a',
              {
                href: 'https://youtube.com/playlist?list=PLFFHHqnY3q2FLjtGKYuI-V-z9u7jzBOb_',
              },
              'Talk Like a BOSS - rodas de conversas',
            ),
            ' by Big Open Source Sibling (BOSS)',
          ),
        ),
        s.createElement(
          'li',
          null,
          s.createElement(
            'p',
            null,
            s.createElement(
              'a',
              {
                href: 'https://www.slideshare.net/cameraculture/raskar-phd-and-ms-thesis-guidance?fbclid=IwAR1ECIl-T96IyK5X2BAIY3tm1nqP9fSaL9HN0oWWuYkw0mmQZ-5q1XYl0X4',
              },
              'PhD and MS Thesis Guidance',
            ),
            ' by Ramesh Raskar',
          ),
        ),
        s.createElement(
          'li',
          null,
          s.createElement(
            'p',
            null,
            s.createElement(
              'a',
              { href: 'https://www.nature.com/articles/d41586-018-02404-4' },
              'How to write a first-class paper',
            ),
            ', by Virginia Gewin',
          ),
        ),
        s.createElement(
          'li',
          null,
          s.createElement(
            'p',
            null,
            s.createElement(
              'a',
              { href: 'https://homes.cs.washington.edu/~mernst/advice/' },
              'Advice for researchers and students',
            ),
            ', by Michael Ernst',
          ),
        ),
        s.createElement(
          'li',
          null,
          s.createElement(
            'p',
            null,
            s.createElement(
              'a',
              { href: 'http://matt.might.net/articles/grad-student-resolutions/' },
              '12 resolutions for grad students',
            ),
            ', by Matt Might',
          ),
        ),
        s.createElement(
          'li',
          null,
          s.createElement(
            'p',
            null,
            s.createElement(
              'a',
              {
                href: 'https://www.scielo.br/pdf/clin/v69n3/1807-5932-clin-69-03-153.pdf',
              },
              'Writing scientific articles like a native English speaker: top ten tips for Portuguese speakers',
            ),
            '.',
          ),
        ),
        s.createElement(
          'li',
          null,
          s.createElement(
            'p',
            null,
            s.createElement(
              'a',
              { href: 'https://ieeexplore.ieee.org/document/799955' },
              'Qualitative methods in empirical studies of software engineering',
            ),
          ),
        ),
        s.createElement(
          'li',
          null,
          s.createElement(
            'p',
            null,
            s.createElement(
              'a',
              {
                href: 'https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1006914',
              },
              'Ten simple rules towards healthier research labs',
            ),
          ),
        ),
      ),
      s.createElement('h2', null, 'Paper writing'),
      s.createElement(
        'ol',
        null,
        s.createElement(
          'li',
          null,
          s.createElement(
            'a',
            { href: 'https://users.ece.cmu.edu/~koopman/essays/abstract.html' },
            'How to Write an Abstract',
          ),
          ', by Philip Koopman',
        ),
        s.createElement(
          'li',
          null,
          s.createElement(
            'a',
            { href: 'http://sarahnadi.org/writing-papers/' },
            'Writing Academic Papers',
          ),
          ', by Sarah Nadi',
        ),
        s.createElement(
          'li',
          null,
          s.createElement(
            'a',
            {
              href: 'http://www.cis.famu.edu/~cen5055joe/Administrative/HowToWrite_ResearchPaper.pdf',
            },
            'Writing Good Software Engineering Research Papers',
          ),
          ', by Mary Shaw',
        ),
        s.createElement(
          'li',
          null,
          s.createElement(
            'a',
            {
              href: 'https://www.microsoft.com/en-us/research/academic-program/write-great-research-paper',
            },
            'How to write a great research paper',
          ),
          ', by Simon Peyton Jones',
        ),
      ),
      s.createElement('h2', null, 'Talks'),
      s.createElement(
        'ol',
        null,
        s.createElement(
          'li',
          null,
          s.createElement(
            'a',
            {
              href: 'https://www.microsoft.com/en-us/research/academic-program/give-great-research-talk',
            },
            'How to give a great research talk',
          ),
          ', by Simon Peyton Jones',
        ),
        s.createElement(
          'li',
          null,
          s.createElement(
            'a',
            {
              href: 'http://andreas-zeller.blogspot.com.br/2013/10/summarizing-your-presentation-with.html',
            },
            'Summarizing your presentation with miniature slides',
          ),
          ', by Andreas Zeller',
        ),
      ),
      s.createElement('h2', null, 'Rejections'),
      s.createElement(
        'ol',
        null,
        s.createElement(
          'li',
          null,
          s.createElement(
            'a',
            {
              href: 'https://medium.com/@cfiesler/tenured-professor-rogers-talks-about-imposter-syndrome-229e0a546ac1',
            },
            'Tenured Professor Rogers Talks About: Imposter Syndrome',
          ),
          ', by Casey Fiesler',
        ),
      ),
      s.createElement('h2', null, 'General Topics'),
      s.createElement(
        'ol',
        null,
        s.createElement(
          'li',
          null,
          s.createElement(
            'p',
            null,
            s.createElement(
              'a',
              {
                href: 'https://medium.com/@lappisunbfga/what-i-wish-i-knew-before-starting-my-first-chatbot-project-66e5208f77dd',
              },
              'What I wish I knew before starting my first Chatbot project',
            ),
            ' by Carla Rocha',
          ),
        ),
        s.createElement(
          'li',
          null,
          s.createElement(
            'p',
            null,
            s.createElement(
              'a',
              {
                href: 'https://medium.com/@lappisunbfga/desafios-ensino-de-ti-em-tempo-de-pandemia-o-futuro-%C3%A9-colaborativo-e7aa183bb3d7',
              },
              'Desafios ensino de TI em tempo de pandemia — O Futuro é Colaborativo',
            ),
            ' by Carla Rocha',
          ),
        ),
      ),
    ),
  );
}
function Xv() {
  return s.createElement(
    'div',
    { className: 'markdown-body' },
    s.createElement(
      s.Fragment,
      null,
      s.createElement(
        'p',
        null,
        'I am continuously looking for good people to join my research group, at levels: undergraduate students (urop), M.S students.',
      ),
      s.createElement('h2', null, 'Current students'),
      s.createElement(
        'ul',
        null,
        s.createElement('li', null, 'Ivon Miranda Santos (MS)'),
        s.createElement('li', null, 'Arthur José Benedito de Oliveira Assis (UROP)'),
        s.createElement('li', null, 'Marcos Nery Borges Júnior (UROP)'),
        s.createElement('li', null, 'Youssef Muhamad Yacoub Falaneh (UROP)'),
        s.createElement('li', null, 'You?'),
      ),
      s.createElement('h2', null, 'Alumni (sorted by graduation year)'),
      s.createElement(
        'ul',
        null,
        s.createElement('li', null, 'Tiago Vidigal (MS)'),
        s.createElement('li', null, 'Gabriela Barrozo Guedes (UROP)'),
        s.createElement('li', null, 'Rafaella Oliveira de Faria Junqueira (UROP)'),
        s.createElement('li', null, 'Lorrany dos Santos Azevedo (UROP)'),
        s.createElement('li', null, 'Shayane (UROP)'),
        s.createElement('li', null, 'Filipe Coelho Hilário Barcelos (UROP)'),
        s.createElement('li', null, 'Lucas Dutra Ferreira do Nascimento(UROP)'),
        s.createElement('li', null, 'Caio Vinícius Fernandes de Araújo (UROP)'),
      ),
      s.createElement('h2', null, 'Research Interests'),
      s.createElement(
        'ol',
        null,
        s.createElement(
          'li',
          null,
          s.createElement(
            'p',
            null,
            'Understanding Students Behavior in Open-Source Communities',
            s.createElement('br', null),
            s.createElement('strong', null, 'Questions:'),
            ' What kind of contributors are made by students? Are they working for some classroom projects? summer job? hackathons?',
            s.createElement('br', null),
            s.createElement('strong', null, 'Skills:'),
            ' script programming, proactive ',
            s.createElement('br', null),
          ),
        ),
        s.createElement(
          'li',
          null,
          s.createElement(
            'p',
            null,
            'Personality traits of casual contributors',
            s.createElement('br', null),
            s.createElement('strong', null, 'Questions:'),
            ' Are casual contributors casual in many/few/other projects? Where are they based/from?',
            s.createElement('br', null),
            s.createElement('strong', null, 'Skills:'),
            ' script programming, proactive ',
            s.createElement('br', null),
          ),
        ),
        s.createElement(
          'li',
          null,
          s.createElement(
            'p',
            null,
            'Teaching DevOps',
            s.createElement('br', null),
            s.createElement('strong', null, 'Questions:'),
            ' How to qualify students and junior developers in DevOps ',
            s.createElement('br', null),
            s.createElement('strong', null, 'Skills:'),
            ' script programming, proactive ',
            s.createElement('br', null),
          ),
        ),
        s.createElement(
          'li',
          null,
          s.createElement(
            'p',
            null,
            'MLOps',
            s.createElement('br', null),
            s.createElement('strong', null, 'Questions:'),
            ' What are the barries to adopt MLOps practices and automation? ',
            s.createElement('br', null),
            s.createElement('strong', null, 'Skills:'),
            ' script programming, proactive ',
            s.createElement('br', null),
          ),
        ),
        s.createElement(
          'li',
          null,
          s.createElement(
            'p',
            null,
            'Mentorship Programs for Underrepresented groups',
            s.createElement('br', null),
            s.createElement('strong', null, 'Questions:'),
            ' What are the challenges to engage underrepresented groups in mentoring programs? ',
            s.createElement('br', null),
            s.createElement('strong', null, 'Skills:'),
            ' script programming, proactive ',
            s.createElement('br', null),
          ),
        ),
      ),
    ),
  );
}
function Jv() {
  return s.createElement(
    'div',
    { className: 'markdown-body' },
    s.createElement(
      s.Fragment,
      null,
      s.createElement(
        'p',
        null,
        'I adopt Experiential Learning Models with project-oriented courses. In this model, students go through a “journey of discovery”, where they understand the lessons and concepts through the experiential process of getting there.',
      ),
      s.createElement(
        'p',
        null,
        'Students develop software projects with real clients or real datasets. All artifacts produced during the courses are open source, and students have access to previous semesters’ material and code. Students also experience contributing to larger Open Source communities, such as Debian, Kubernetes, Rocket.Chat, and Noosfero.',
      ),
      s.createElement(
        'p',
        null,
        s.createElement('img', {
          src: '/carlocha/assets/images/gpp_mds.png',
          alt: 'Students',
        }),
      ),
      s.createElement('p', null, 'The courses are available in the links below.'),
      s.createElement('h2', null, '2022.2'),
      s.createElement(
        'ol',
        null,
        s.createElement(
          'li',
          null,
          s.createElement(
            'a',
            { href: '/teaching/mds' },
            'Software Development Methods - Métodos de Desenvolvimento de Software (MDS)',
          ),
        ),
        s.createElement(
          'li',
          null,
          s.createElement(
            'a',
            { href: 'https://github.com/fga-gces' },
            'Software Configuration Management and Evolution - Gerência de Configuração e Evolução de Software(GCES)',
          ),
        ),
      ),
      s.createElement('h2', null, '2022.1'),
      s.createElement(
        'ol',
        null,
        s.createElement(
          'li',
          null,
          s.createElement(
            'a',
            { href: '/teaching/mds' },
            'Software Development Methods - Métodos de Desenvolvimento de Software (MDS)',
          ),
        ),
        s.createElement(
          'li',
          null,
          s.createElement(
            'a',
            { href: 'https://github.com/fga-gces' },
            'Software Configuration Management and Evolution - Gerência de Configuração e Evolução de Software(GCES)',
          ),
        ),
      ),
      s.createElement('h2', null, '2021.2'),
      s.createElement(
        'ol',
        null,
        s.createElement(
          'li',
          null,
          s.createElement(
            'a',
            { href: '/teaching/mds' },
            'Software Development Methods - Métodos de Desenvolvimento de Software (MDS)',
          ),
        ),
        s.createElement(
          'li',
          null,
          s.createElement(
            'a',
            { href: 'https://github.com/fga-gces' },
            'Software Configuration Management and Evolution - Gerência de Configuração e Evolução de Software(GCES)',
          ),
        ),
      ),
      s.createElement('h2', null, '2021.1'),
      s.createElement(
        'ol',
        null,
        s.createElement(
          'li',
          null,
          s.createElement(
            'a',
            { href: '/teaching/mds' },
            'Software Development Methods - Métodos de Desenvolvimento de Software (MDS)',
          ),
        ),
        s.createElement(
          'li',
          null,
          s.createElement(
            'a',
            { href: 'https://github.com/fga-gces' },
            'Software Configuration Management and Evolution- Gerência de Configuração e Evolução de Software(GCES)',
          ),
        ),
        s.createElement(
          'li',
          null,
          s.createElement(
            'a',
            { href: 'https://github.com/PPCA-CS' },
            'Software Development - Masters',
          ),
        ),
      ),
      s.createElement('h2', null, '2020.2'),
      s.createElement(
        'ol',
        null,
        s.createElement(
          'li',
          null,
          s.createElement(
            'a',
            { href: '/teaching/mds' },
            'Software Development Methods - Métodos de Desenvolvimento de Software (MDS)',
          ),
        ),
        s.createElement(
          'li',
          null,
          s.createElement(
            'a',
            { href: 'https://github.com/fga-gces' },
            'Software Configuration Management and Evolution - Gerência de Configuração e Evolução de Software(GCES)',
          ),
        ),
      ),
      s.createElement('h2', null, '2020.1'),
      s.createElement(
        'ol',
        null,
        s.createElement(
          'li',
          null,
          s.createElement(
            'a',
            { href: '/teaching/mds' },
            'Software Development Methods - Métodos de Desenvolvimento de Software (MDS)',
          ),
        ),
        s.createElement(
          'li',
          null,
          s.createElement(
            'a',
            { href: 'https://github.com/fga-gces' },
            'Software Configuration Management and Evolution - Gerência de Configuração e Evolução de Software(GCES)',
          ),
        ),
      ),
      s.createElement('h2', null, 'Before 2020'),
      s.createElement(
        'p',
        null,
        'I also teach Computer Graphics, Product Engineering, and Introduction to Software Engineering.',
      ),
      s.createElement(
        'p',
        null,
        s.createElement('img', {
          src: '/carlocha/assets/images/lappis.png',
          alt: 'lappis',
        }),
      ),
    ),
  );
}
const Zv = 'Carla Rocha',
  qv = 'Software Engineering Professor & Researcher at the University of Brasília (UnB)',
  e1 = [
    'Diversity',
    'Agile development',
    'DevOps adoption',
    'MLOps',
    'Open Source community',
    'Project-Oriented teaching',
  ],
  t1 = '/carlocha/assets/images/profile.png',
  n1 = [
    {
      name: 'location',
      icon: Y(jv, { size: 24 }),
      text: 'University of Brasília, Brazil',
    },
    {
      name: 'email',
      icon: Y(Hv, { size: 24 }),
      text: 'caguiar@unb.br',
      link: 'mailto:caguiar@unb.br',
    },
    {
      name: 'gitlab',
      icon: Y(Uv, { size: 24 }),
      text: 'rocha.carla',
      link: 'https://gitlab.com/rocha.carla',
    },
    {
      name: 'github',
      icon: Y(Bv, { size: 24 }),
      text: 'RochaCarla',
      link: 'https://github.com/RochaCarla',
    },
    {
      name: 'linkedin',
      icon: Y(bv, { size: 24 }),
      text: 'RochaCarla',
      link: 'https://www.linkedin.com/in/carla-rocha-a4287a19/',
    },
  ],
  Op = [
    { element: Y(Wv, {}), path: '/', name: 'About' },
    { element: Y(Qv, {}), path: 'projects/', name: 'Projects' },
    { element: Y(Yv, {}), path: 'publications/', name: 'Publications' },
    { element: Y(Jv, {}), path: 'teaching/', name: 'Teaching' },
    { element: Y(Vv, {}), path: 'blog/', name: 'Blog' },
    { element: Y(Kv, {}), path: 'research/', name: 'Research' },
    { element: Y(Xv, {}), path: 'students/', name: 'Students' },
    { element: Y(Gv, {}), path: 'misc/', name: 'Misc' },
  ],
  $t = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tabletS: '620px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px',
  },
  Ue = {
    mobileS: `(min-width: ${$t.mobileS})`,
    mobileM: `(min-width: ${$t.mobileM})`,
    mobileL: `(min-width: ${$t.mobileL})`,
    tabletS: `(min-width: ${$t.tablet})`,
    tablet: `(min-width: ${$t.tablet})`,
    laptop: `(min-width: ${$t.laptop})`,
    laptopL: `(min-width: ${$t.laptopL})`,
    desktop: `(min-width: ${$t.desktop})`,
    desktopL: `(min-width: ${$t.desktop})`,
  },
  r1 = Ye.nav`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-height: 42px;
  padding: 4px 10px;
  flex-direction: row;
  border-radius: 50px;
  background: var(--primary);
  justify-content: space-around;
  align-items: center;
  gap: 0rem;
  margin: 0.5rem 0 1rem 0;

  @media ${Ue.tabletS} {
    margin-bottom: 2rem;
  }
`,
  l1 = Ye($0)`
  display: flex;
  flex-direction: row;
  background: 'black';
  text-decoration: none;
  color: var(--text-inverse);
  border-radius: 50px;
  border: 2px solid transparent;
  padding: 2px 8px;

  &.active {
    background-color: var(--background);
    color: var(--text);

    &:hover {
      color: var(--text);
    }
  }

  &:hover {
    border: 2px solid var(--background);
    color: var(--text-inverse);
  }

  @media ${Ue.tabletS} {
    padding: 0 10px;
  }
`;
function o1() {
  return Y(r1, {
    children: Op.map((e) =>
      Y(
        l1,
        {
          to: e.path,
          className: ({ isActive: t }) => (t ? 'active' : ''),
          children: e.name,
        },
        e.name,
      ),
    ),
  });
}
const i1 = Ye.span`
  display: flex;
  gap: 0 0.5rem;
  flex-direction: row;
  font-size: 1rem;

  & > a {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: var(--text);
    text-decoration: none;
  }
  & > a:last-child {
    display: none;
  }
  @media ${Ue.tabletS} {
    & > a:last-child {
      display: block;
    }
  }
`;
function a1({ contact: e }) {
  return Dt(i1, {
    children: [
      Y('a', { href: e.link, target: '_blank', rel: 'noreferrer', children: e.icon }),
      Y('a', { href: e.link, target: '_blank', rel: 'noreferrer', children: e.text }),
    ],
  });
}
const u1 = Ye.span`
  padding: 4px 10px;
  font-size: 0.75rem;
  border-radius: 30px;
  background: var(--primary);
  color: var(--text-inverse);

  &:hover {
    box-shadow: inset 0 0 4px var(--secondary), 0 0 0.75em var(--secondary),
      0 0 1em var(--secondary), 0 0 1.25em var(--secondary);
  }
`;
function s1({ text: e }) {
  return Y(u1, { children: e });
}
function c1(e) {
  return Un({
    tag: 'svg',
    attr: { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
    child: [
      {
        tag: 'path',
        attr: {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '2',
          d: 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z',
        },
      },
    ],
  })(e);
}
function d1(e) {
  return Un({
    tag: 'svg',
    attr: { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' },
    child: [
      {
        tag: 'path',
        attr: {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '2',
          d: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z',
        },
      },
    ],
  })(e);
}
const $c = {
    name: 'dark',
    color: {
      primary: 'linear-gradient(90deg, #3E8DF4 0%, #2A4FBF 100%)',
      pure_primary: '#2A4FBF',
      secondary: '#3FB7D1',
      background: '#222128',
      background_md_image: '#FFFAFB',
      background_profile_card: '#282B37',
      shadow: 'rgb(0 0 0 / 0.2)',
      title: '#FFFCFC',
      text: '#FFFCFC',
      text_inverse: '#FFFCFC',
    },
  },
  jc = {
    name: 'light',
    color: {
      primary: 'linear-gradient(90deg, #2A4FBF 0%, #3E8DF4 100%)',
      pure_primary: '#3E8DF4',
      background: '#E9EAF0',
      background_md_image: '#FFFAFB',
      background_profile_card: '#FFFAFB',
      secondary: '#edb465',
      shadow: 'rgb(0 0 0 / 0.2)',
      title: '#2d3047',
      text: '#2d3047',
      text_inverse: '#FFFAFB',
    },
  };
function f1(e, t) {
  const [n, r] = O.useState(() => {
    const l = localStorage.getItem(e);
    return l ? JSON.parse(l) : t;
  });
  return (
    O.useEffect(() => {
      localStorage.setItem(e, JSON.stringify(n));
    }, [e, n]),
    [n, r]
  );
}
const Ap = O.createContext({});
function p1({ children: e }) {
  const [t, n] = f1('theme', 'light'),
    [r, l] = O.useState(t === 'light' ? jc : $c);
  function o(i) {
    l(i === 'light' ? jc : $c), n(i === 'light' ? 'light' : 'dark');
  }
  return Y(Ap.Provider, { value: { selectedTheme: r, changeTheme: o }, children: e });
}
function Dp() {
  return O.useContext(Ap);
}
const h1 = Ye.div`
  z-index: 1;
  align-self: end;
  color: var(--title);
  height: 25px;

  &:hover {
    border-radius: 50%;
    transform: scale(1.1);
    box-shadow: 0 0 10px 5px var(--secondary);
  }
`;
function m1() {
  const { selectedTheme: e, changeTheme: t } = Dp(),
    n = e.name === 'light';
  return Dt(h1, {
    children: [
      !n && Y(c1, { size: 25, onClick: () => t('light') }),
      n && Y(d1, { size: 25, onClick: () => t('dark') }),
    ],
  });
}
const g1 = Ye.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  background-color: var(--background-profile-card);
  padding-bottom: 1rem;

  @media ${Ue.tabletS} {
    gap: 1rem;
    font-size: 18px;
    width: 320px;
    min-width: 240px;
    flex-direction: column;
    gap: 10px 0;
    padding: 0px;

    & > p {
      text-align: center;
      padding: 0 1.25rem;
    }
    & > h2 {
      text-align: center;
    }
  }
`,
  v1 = Ye.div`
  display: flex;
  flex-direction: row;
  margin: -3rem auto 0 0;
  padding: 0 0.75rem;
  gap: 0.75rem;
  background-color: var(--background-profile-card);

  & > div:nth-child(1) {
    order: 3;
    align-self: start;
    margin: -1rem 0 0 0;
  }

  @media ${Ue.tabletS} {
    gap: 0.5rem;
    flex-direction: column;
    margin: -8rem auto 0 auto;

    & > div:nth-child(1) {
      order: 0;
      align-self: end;
      margin: 0;
    }
  }
`,
  y1 = Ye.div`
  margin: 0.5rem 0 0 0;
  z-index: 1;
  color: var(--text);

  & > h2 {
    color: var(--text-inverse);
  }
  & > p {
    text-align: left;
    font-size: 0.75rem;
    margin-top: 0.25rem;
  }

  @media ${Ue.tabletS} {
    & > h2 {
      text-align: center;
      color: var(--title);
    }
    & > p {
      padding: 0 1.25rem;
      text-align: center;
    }
  }
`,
  w1 = Ye.div`
  position: relative;
  top: 0;
  right: 0;
  left: 0;
  min-width: 240px;
  height: 80px;
  background: var(--primary);

  @media ${Ue.tabletS} {
    position: relative;
    top: 0;
    right: 0;
    left: 0;
    max-width: 320px;
    min-width: 240px;
    height: 130px;
    background: var(--primary);
  }
`,
  E1 = Ye.div`
  border-radius: 50%;
  background-image: ${'url(' + t1 + ')'};
  background-position: 0 0;
  background-size: cover;

  border: 2px solid var(--background-profile-card);
  box-shadow: 0px 10px 20px -5px var(--pure-primary);
  min-width: 80px;
  height: 80px;
  z-index: 1;

  @media ${Ue.tabletS} {
    margin: -1rem auto 0 auto;
    border: 6px solid var(--background-profile-card);
    box-shadow: 0px 10px 20px -5px var(--pure-primary);
    width: 180px;
    height: 180px;
    z-index: 1;
  }
`,
  Bc = Ye.div`
  padding: 0 0.75rem;

  & > h3 {
    color: var(--title);
  }

  @media ${Ue.tabletS} {
    padding: 0 1.25rem;
  }
`,
  S1 = Ye.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: space-evenly;
  list-style: none;
  padding: 0px 4px;
  margin: 0.5rem 0;

  flex-direction: row;

  @media ${Ue.tabletS} {
    flex-direction: column;
    gap: 0.5rem 0px;
    padding: 0px 0.5rem;
  }
`,
  x1 = Ye.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 5px;
  margin-top: 8px;

  @media ${Ue.tabletS} {
    gap: 8px 10px;
    margin: 10px 8px;
  }
`;
function k1() {
  return Dt(g1, {
    children: [
      Y(w1, {}),
      Dt(v1, {
        children: [
          Y(m1, {}),
          Y(E1, {}),
          Dt(y1, { children: [Y('h2', { children: Zv }), Y('p', { children: qv })] }),
        ],
      }),
      Dt(Bc, {
        children: [
          Y('h3', { children: 'Contacts' }),
          Y(S1, {
            children: n1.map((e) => Y('li', { children: Y(a1, { contact: e }) }, e.name)),
          }),
        ],
      }),
      Dt(Bc, {
        children: [
          Y('h3', { children: 'Interests' }),
          Y(x1, { children: e1.map((e) => Y(s1, { text: e }, e)) }),
        ],
      }),
    ],
  });
}
const C1 = Ye.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @media ${Ue.tabletS} {
    flex-direction: row;
  }
`,
  P1 = Ye.div`
  flex: 1;
  padding: 0.5rem;
  background-color: var(--background);

  @media ${Ue.tabletS} {
    padding: 2rem;
  }
`,
  _1 = Ye.div`
  padding: 1rem;
  border-radius: 10px;
  color: var(--text);
  background-color: var(--background-profile-card);

  box-shadow: 0px 0px 10px 0px var(--shadow);

  & > .markdown-body > h1,
  h2,
  h3,
  h4,
  p {
    margin-bottom: 1rem;
  }
  & > .markdown-body * a {
    color: var(--primary);

    &:hover {
      color: var(--secondary);
    }
  }

  @media ${Ue.tabletS} {
    padding: 2rem;
  }
`;
function R1() {
  return Dt(C1, {
    children: [
      Y(k1, {}),
      Dt(P1, { children: [Y(o1, {}), Y(_1, { children: Y(_0, {}) })] }),
    ],
  });
}
const M1 = Iv`
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    font-size: 14px;


    @media ${Ue.laptop} {
      font-size: 16px;
    }

    @media ${Ue.desktop} {
      font-size: 18px;
    }
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
    scroll-behavior: auto;
    }
    
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  :root {
    --background: ${({ theme: e }) => e.color.background};
    --background-md-image: ${({ theme: e }) => e.color.background_md_image};
    --background-profile-card: ${({ theme: e }) => e.color.background_profile_card};
    --primary: ${({ theme: e }) => e.color.primary};
    --pure-primary: ${({ theme: e }) => e.color.pure_primary};
    --secondary: ${({ theme: e }) => e.color.secondary};

    --title: ${({ theme: e }) => e.color.title};
    --text: ${({ theme: e }) => e.color.text};
    --text-inverse: ${({ theme: e }) => e.color.text_inverse};
    --shadow: ${({ theme: e }) => e.color.shadow};
  }

  a:hover {
    color: var(--secondary);
  }

  /* Control images size */
  img[alt=lappis], img[alt=image], img[alt=parcerias], img[alt=dinheiro] {
    width: 100%;
    margin: 0 auto;
    background-color: var(--background-md-image);
    border-radius: 10px;
    
    @media ${Ue.tablet} {
      max-width: 500px;
    }
  }
`,
  O1 = T0([
    {
      path: '/',
      element: Y(R1, {}),
      errorElement: Y('h1', { children: 'Error 404' }),
      children: Op,
    },
  ]);
function A1() {
  O.useEffect(() => console.log('Rendered'), []);
  const { selectedTheme: e } = Dp();
  return Y(s.StrictMode, {
    children: Dt(Tv, { theme: e, children: [Y(P0, { router: O1 }), Y(M1, {})] }),
  });
}
const D1 = Xf(document.getElementById('root'));
D1.render(Y(p1, { children: Y(A1, {}) }));
