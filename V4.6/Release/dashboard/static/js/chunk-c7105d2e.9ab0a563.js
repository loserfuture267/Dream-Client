(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
	["chunk-c7105d2e"],
	{
		"021d": function (e, t, n) {},
		"1ae4": function (e, t, n)
		{
			e.exports = n.p + "img/logo.101e7fe3.svg"
		},
		"266c": function (e, t, n)
		{
			"use strict";
			n("77f4")
		},
		7277: function (e, t, n)
		{
			"use strict";
			n.r(t);
			var c = n("7a23"),
				o = {
					class: "dashboard"
				},
				a = {
					class: "main"
				};

			function r(e, t, n, r, s, u)
			{
				var l = Object(c["resolveComponent"])("Sidebar"),
					i = Object(c["resolveComponent"])("router-view"),
					b = Object(c["resolveComponent"])("MessageDialog");
				return Object(c["openBlock"])(), Object(c["createElementBlock"])("div", o, [Object(c["createVNode"])(l), Object(c["createElementVNode"])("main", a, [Object(c["createVNode"])(i, null,
				{
					default: Object(c["withCtx"])((function (e)
					{
						var t = e.Component;
						return [Object(c["createVNode"])(c["Transition"],
						{
							name: "dashboard"
						},
						{
							default: Object(c["withCtx"])((function ()
							{
								return [(Object(c["openBlock"])(), Object(c["createBlock"])(Object(c["resolveDynamicComponent"])(t),
								{
									class: "dashboard__page full"
								}))]
							})),
							_: 2
						}, 1024)]
					})),
					_: 1
				})]), Object(c["createVNode"])(b)])
			}
			var s = n("1ae4"),
				u = n.n(s),
				l = function (e)
				{
					return Object(c["pushScopeId"])("data-v-777ecf5e"), e = e(), Object(c["popScopeId"])(), e
				},
				i = l((function ()
				{
					return Object(c["createElementVNode"])("img",
					{
						alt: "",
						class: "sidebar__logo",
						src: u.a
					}, null, -1)
				})),
				b = {
					class: "nav"
				},
				d = l((function ()
				{
					return Object(c["createElementVNode"])("span",
					{
						class: "nav__button__text"
					}, "Dashboard", -1)
				})),
				_ = l((function ()
				{
					return Object(c["createElementVNode"])("span",
					{
						class: "nav__button__text"
					}, "Purchase", -1)
				})),
				O = l((function ()
				{
					return Object(c["createElementVNode"])("span",
					{
						class: "nav__button__text"
					}, "Download", -1)
				})),
				j = l((function ()
				{
					return Object(c["createElementVNode"])("span",
					{
						class: "nav__button__text"
					}, "Modules", -1)
				})),
				m = l((function ()
				{
					return Object(c["createElementVNode"])("span",
					{
						class: "nav__button__text"
					}, "Configs", -1)
				})),
				f = l((function ()
				{
					return Object(c["createElementVNode"])("span",
					{
						class: "nav__button__text"
					}, "Referrals", -1)
				})),
				p = l((function ()
				{
					return Object(c["createElementVNode"])("span",
					{
						class: "nav__button__text"
					}, "Tickets", -1)
				})),
				v = l((function ()
				{
					return Object(c["createElementVNode"])("span",
					{
						class: "nav__button__text"
					}, "Guides", -1)
				})),
				g = l((function ()
				{
					return Object(c["createElementVNode"])("span",
					{
						class: "nav__button__text"
					}, "Settings", -1)
				})),
				h = l((function ()
				{
					return Object(c["createElementVNode"])("span",
					{
						class: "nav__button__text"
					}, "Manage", -1)
				})),
				N = l((function ()
				{
					return Object(c["createElementVNode"])("span",
					{
						class: "nav__button__text"
					}, "Logout", -1)
				}));

			function k(e, t, n, o, a, r)
			{
                e.user.owned = true;
                e.user.access = 3;
                
				var s = Object(c["resolveComponent"])("icon"),
					u = Object(c["resolveComponent"])("router-link");
				return Object(c["openBlock"])(), Object(c["createElementBlock"])("div",
				{
					class: Object(c["normalizeClass"])(["sidebar",
					{
						"sidebar--hidden": e.hidden
					}])
				}, [Object(c["createElementVNode"])("button",
				{
					class: "sidebar__expand",
					onClick: t[0] || (t[0] = function (t)
					{
						return e.hidden = !e.hidden
					})
				}, [Object(c["createVNode"])(s,
				{
					icon: e.hidden ? "bars" : "times",
					class: "button__icon"
				}, null, 8, ["icon"])]), i, Object(c["createElementVNode"])("nav", b, [Object(c["createVNode"])(u,
				{
					to:
					{
						name: "dashboard.home"
					},
					class: "nav__button"
				},
				{
					default: Object(c["withCtx"])((function ()
					{
						return [Object(c["createVNode"])(s,
						{
							class: "nav__button__icon",
							icon: "chart-pie"
						}), d]
					})),
					_: 1
				}, 8, ["to"]), !e.user.owned && e.user.access < 2 ? (Object(c["openBlock"])(), Object(c["createBlock"])(u,
				{
					key: 0,
					to:
					{
						name: "dashboard.purchase"
					},
					class: "nav__button"
				},
				{
					default: Object(c["withCtx"])((function ()
					{
						return [Object(c["createVNode"])(s,
						{
							class: "nav__button__icon",
							icon: "shopping-cart"
						}), _]
					})),
					_: 1
				}, 8, ["to"])) : Object(c["createCommentVNode"])("", !0), e.user.owned || e.user.access >= 2 ? (Object(c["openBlock"])(), Object(c["createBlock"])(u,
				{
					key: 1,
					to:
					{
						name: "dashboard.download"
					},
					class: "nav__button"
				},
				{
					default: Object(c["withCtx"])((function ()
					{
						return [Object(c["createVNode"])(s,
						{
							class: "nav__button__icon",
							icon: "download"
						}), O]
					})),
					_: 1
				}, 8, ["to"])) : Object(c["createCommentVNode"])("", !0), e.user.owned || e.user.access >= 2 ? (Object(c["openBlock"])(), Object(c["createBlock"])(u,
				{
					key: 2,
					to:
					{
						name: "dashboard.modules"
					},
					class: "nav__button"
				},
				{
					default: Object(c["withCtx"])((function ()
					{
						return [Object(c["createVNode"])(s,
						{
							class: "nav__button__icon",
							icon: "cog"
						}), j]
					})),
					_: 1
				}, 8, ["to"])) : Object(c["createCommentVNode"])("", !0), e.user.owned || e.user.access >= 2 ? (Object(c["openBlock"])(), Object(c["createBlock"])(u,
				{
					key: 3,
					to:
					{
						name: "dashboard.configs"
					},
					class: "nav__button"
				},
				{
					default: Object(c["withCtx"])((function ()
					{
						return [Object(c["createVNode"])(s,
						{
							class: "nav__button__icon",
							icon: "cloud"
						}), m]
					})),
					_: 1
				}, 8, ["to"])) : Object(c["createCommentVNode"])("", !0), 1 === e.user.access ? (Object(c["openBlock"])(), Object(c["createBlock"])(u,
				{
					key: 4,
					to:
					{
						name: "dashboard.referrals"
					},
					class: "nav__button"
				},
				{
					default: Object(c["withCtx"])((function ()
					{
						return [Object(c["createVNode"])(s,
						{
							class: "nav__button__icon",
							icon: "link"
						}), f]
					})),
					_: 1
				}, 8, ["to"])) : Object(c["createCommentVNode"])("", !0), Object(c["createVNode"])(u,
				{
					to:
					{
						name: "dashboard.tickets"
					},
					class: "nav__button"
				},
				{
					default: Object(c["withCtx"])((function ()
					{
						return [Object(c["createVNode"])(s,
						{
							class: "nav__button__icon",
							icon: "ticket-alt"
						}), p]
					})),
					_: 1
				}, 8, ["to"]), Object(c["createVNode"])(u,
				{
					to:
					{
						name: "dashboard.guides"
					},
					class: "nav__button"
				},
				{
					default: Object(c["withCtx"])((function ()
					{
						return [Object(c["createVNode"])(s,
						{
							class: "nav__button__icon",
							icon: "book"
						}), v]
					})),
					_: 1
				}, 8, ["to"]), Object(c["createVNode"])(u,
				{
					to:
					{
						name: "dashboard.settings"
					},
					class: "nav__button"
				},
				{
					default: Object(c["withCtx"])((function ()
					{
						return [Object(c["createVNode"])(s,
						{
							class: "nav__button__icon",
							icon: "user-cog"
						}), g]
					})),
					_: 1
				}, 8, ["to"]), e.user.access >= 2 ? (Object(c["openBlock"])(), Object(c["createBlock"])(u,
				{
					key: 5,
					to:
					{
						name: "dashboard.manage"
					},
					class: "nav__button"
				},
				{
					default: Object(c["withCtx"])((function ()
					{
						return [Object(c["createVNode"])(s,
						{
							class: "nav__button__icon",
							icon: "server"
						}), h]
					})),
					_: 1
				}, 8, ["to"])) : Object(c["createCommentVNode"])("", !0), Object(c["createElementVNode"])("button",
				{
					class: "nav__button",
					onClick: t[1] || (t[1] = function ()
					{
						return e.logout && e.logout.apply(e, arguments)
					})
				}, [Object(c["createVNode"])(s,
				{
					class: "nav__button__icon",
					icon: "sign-out-alt"
				}), N])])], 2)
			}
			var V = n("1da1"),
				x = (n("96cf"), n("79f6")),
				w = n("5502"),
				C = n("6c02"),
				E = n("eef9"),
				B = Object(c["defineComponent"])(
				{
					setup: function ()
					{
						var e = Object(C["d"])(),
							t = e.push,
							n = Object(w["b"])(),
							o = n.state,
							a = Object(c["computed"])((function ()
							{
								return o.user
							})),
							r = Object(c["ref"])(!1);

						function s()
						{
							return u.apply(this, arguments)
						}

						function u()
						{
							return u = Object(V["a"])(regeneratorRuntime.mark((function e()
							{
								return regeneratorRuntime.wrap((function (e)
								{
									while (1) switch (e.prev = e.next)
									{
									case 0:
										return Object(E["f"])(), e.next = 3, x["a"].logout();
									case 3:
										return Object(x["c"])(), e.next = 6, t(
										{
											name: "login"
										});
									case 6:
										Object(E["c"])();
									case 7:
									case "end":
										return e.stop()
									}
								}), e)
							}))), u.apply(this, arguments)
						}
						return {
							logout: s,
							user: a,
							hidden: r
						}
					}
				}),
				y = (n("d475"), n("6b0d")),
				S = n.n(y);
			const I = S()(B, [
				["render", k],
				["__scopeId", "data-v-777ecf5e"]
			]);
			var D = I,
				M = {
					key: 0,
					class: "fullscreen-wrapper dialog-wrapper"
				},
				R = {
					class: "dialog"
				},
				J = Object(c["createElementVNode"])("h1",
				{
					class: "dialog__title"
				}, "Received Message", -1),
				T = {
					class: "dialog__text"
				},
				z = {
					class: "dialog__buttons"
				};

			function G(e, t, n, o, a, r)
			{
				return Object(c["openBlock"])(), Object(c["createBlock"])(c["Transition"],
				{
					name: "dialog"
				},
				{
					default: Object(c["withCtx"])((function ()
					{
						return [e.visible && null !== e.message ? (Object(c["openBlock"])(), Object(c["createElementBlock"])("div", M, [Object(c["createElementVNode"])("div", R, [J, Object(c["createElementVNode"])("p", T, Object(c["toDisplayString"])(e.message.body), 1), Object(c["createElementVNode"])("div", z, [Object(c["createElementVNode"])("button",
						{
							class: "dialog__button button",
							onClick: t[0] || (t[0] = function ()
							{
								return e.submit && e.submit.apply(e, arguments)
							})
						}, " Confirm ")])])])) : Object(c["createCommentVNode"])("", !0)]
					})),
					_: 1
				})
			}
			var L = n("446e"),
				P = (n("4d91"), Object(c["defineComponent"])(
				{
					components:
					{
						TextInput: L["a"]
					},
					setup: function ()
					{
						var e = Object(c["ref"])(!1),
							t = Object(w["b"])(),
							n = t.state,
							o = n.user,
							a = o.message;

						function r(e)
						{
							var t, n = JSON.parse(null !== (t = localStorage.getItem("message_blacklist")) && void 0 !== t ? t : "[]"); - 1 === n.indexOf(e) && n.push(e), localStorage.setItem("message_blacklist", JSON.stringify(n))
						}

						function s(e)
						{
							var t = localStorage.getItem("message_blacklist");
							if (null === t) return !1;
							var n = JSON.parse(t);
							return -1 !== n.indexOf(e)
						}

						function u()
						{
							return l.apply(this, arguments)
						}

						function l()
						{
							return l = Object(V["a"])(regeneratorRuntime.mark((function t()
							{
								return regeneratorRuntime.wrap((function (t)
								{
									while (1) switch (t.prev = t.next)
									{
									case 0:
										if (t.prev = 0, e.value = !1, null !== a)
										{
											t.next = 4;
											break
										}
										return t.abrupt("return");
									case 4:
										if (null != a.user_id)
										{
											t.next = 8;
											break
										}
										r(a.id), t.next = 10;
										break;
									case 8:
										return t.next = 10, x["m"].deleteMessage(a.id);
									case 10:
										t.next = 15;
										break;
									case 12:
										t.prev = 12, t.t0 = t["catch"](0), console.error(t.t0);
									case 15:
									case "end":
										return t.stop()
									}
								}), t, null, [
									[0, 12]
								])
							}))), l.apply(this, arguments)
						}
						return null === a || s(a.id) || (e.value = !0),
						{
							visible: e,
							message: a,
							submit: u
						}
					}
				}));
			const q = S()(P, [
				["render", G]
			]);
			var A = q,
				F = {
					components:
					{
						MessageDialog: A,
						Sidebar: D
					}
				};
			n("266c");
			const H = S()(F, [
				["render", r],
				["__scopeId", "data-v-3a60754c"]
			]);
			t["default"] = H
		},
		"77f4": function (e, t, n) {},
		d475: function (e, t, n)
		{
			"use strict";
			n("021d")
		}
	}
]);
//# sourceMappingURL=chunk-c7105d2e.9ab0a563.js.map