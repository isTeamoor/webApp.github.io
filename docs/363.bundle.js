"use strict";
(self.webpackChunkauc_app = self.webpackChunkauc_app || []).push([
  [363],
  {
    363: (a, e, n) => {
      n.r(e), n.d(e, { default: () => r });
      var t = n(641),
        p = n(33);
      const u = {
          data: function () {
            return { WebAppInitData: window.Telegram.WebApp.initDataUnsafe };
          },
        },
        r = (0, n(262).A)(u, [
          [
            "render",
            function (a, e, n, u, r, s) {
              return (
                (0, t.uX)(),
                (0, t.CE)("div", null, [
                  (0, t.Lk)(
                    "p",
                    null,
                    "User ID " + (0, p.v_)(r.WebAppInitData.user.id),
                    1
                  ),
                  (0, t.Lk)(
                    "p",
                    null,
                    "First_name " + (0, p.v_)(r.WebAppInitData.user.first_name),
                    1
                  ),
                  (0, t.Lk)(
                    "p",
                    null,
                    "Last_name " + (0, p.v_)(r.WebAppInitData.user.last_name),
                    1
                  ),
                  (0, t.Lk)(
                    "p",
                    null,
                    "username " + (0, p.v_)(r.WebAppInitData.user.username),
                    1
                  ),
                ])
              );
            },
          ],
        ]);
    },
  },
]);