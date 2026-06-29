
    (function() {
      var preconnectOrigins = ["https://cdn.shopify.com"];
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills.iRHCMwIP.js","/cdn/shopifycloud/checkout-web/assets/c1/app.dFDOApA3.js","/cdn/shopifycloud/checkout-web/assets/c1/esnext-vendor.CZg-BOch.js","/cdn/shopifycloud/checkout-web/assets/c1/context-browser.DkpDUjZI.js","/cdn/shopifycloud/checkout-web/assets/c1/types-UnauthenticatedErrorModalPayload.BvaQHmfn.js","/cdn/shopifycloud/checkout-web/assets/c1/images-payment-icon.DsjjwgBl.js","/cdn/shopifycloud/checkout-web/assets/c1/proposal-delegated-payment-instrument.OhVZrBNT.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-shop-discount-offer.Dhm2zL8P.js","/cdn/shopifycloud/checkout-web/assets/c1/Title.Bdpxyog-.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayCheckoutGqlVersion.Bio7tuLr.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-PaymentSessionMutation.DWrtvcEh.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-ShopPayCheckoutSessionQuery.B9e6GmZU.js","/cdn/shopifycloud/checkout-web/assets/c1/utils-getCommonShopPayExternalTelemetryAttributes.BS6YOWjK.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-UserPrivacySettingsSetMutation.DGl7-XJP.js","/cdn/shopifycloud/checkout-web/assets/c1/extensions-remote-dom.BTyChPDb.js","/cdn/shopifycloud/checkout-web/assets/c1/extensions-rpc._WGTd2mS.js","/cdn/shopifycloud/checkout-web/assets/c1/hydrate.LsgwMGEM.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-en.D1sRO5w3.js","/cdn/shopifycloud/checkout-web/assets/c1/page-OnePage.CS7gBbeR.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useWalletsTimeout.SsPzbUOJ.js","/cdn/shopifycloud/checkout-web/assets/c1/remember-me-hooks.DOPuQyRI.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useUnauthenticatedErrorModal.CaMcLqtI.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useStableHostMethodsReferences.DPe_eX5O.js","/cdn/shopifycloud/checkout-web/assets/c1/OffsitePaymentFailed.CsqzSCvG.js","/cdn/shopifycloud/checkout-web/assets/c1/CalloutHeader.BSXx2Uyj.js","/cdn/shopifycloud/checkout-web/assets/c1/SplitDeliveryMerchandiseContainer.BSY_h9Pe.js","/cdn/shopifycloud/checkout-web/assets/c1/ChangeCompanyLocationLink.Bwj4aT7B.js","/cdn/shopifycloud/checkout-web/assets/c1/WalletsSandbox-WalletSandbox.00e8M84n.js","/cdn/shopifycloud/checkout-web/assets/c1/NotFound.1QUtwARJ.js","/cdn/shopifycloud/checkout-web/assets/c1/BillingAddressForm.BRyMkxAR.js","/cdn/shopifycloud/checkout-web/assets/c1/PhoneField.YjzTP6MU.js","/cdn/shopifycloud/checkout-web/assets/c1/images-flag-icon.C_eXYJRt.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodRateLabel.LzLoAtHH.js","/cdn/shopifycloud/checkout-web/assets/c1/CompactChoiceList.K7ywbqrF.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useSuppressShopPayModalOnLoad.e24crs3h.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-usePostPurchase.CQ6QPHvQ.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useCanChangeCompanyLocation.2BR8sxBy.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useForceShopPayUrl.DxNt9d-L.js","/cdn/shopifycloud/checkout-web/assets/c1/CaptureEvents-ButtonWithRegisterWebPixel.DCYrwPzv.js","/cdn/shopifycloud/checkout-web/assets/c1/GooglePayButton-index.B5rFIdAQ.js","/cdn/shopifycloud/checkout-web/assets/c1/PendingShipping.CkZn3UtR.js","/cdn/shopifycloud/checkout-web/assets/c1/AutocompleteField-hooks.D1D4Y4u3.js","/cdn/shopifycloud/checkout-web/assets/c1/LocalizationExtensionField.Bq_Orv4V.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayPaymentRequiredMethod.CydCjZWC.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useUpdateCheckoutAddress.z12utocp.js","/cdn/shopifycloud/checkout-web/assets/c1/billing-address-hooks.DjI-cDwr.js","/cdn/shopifycloud/checkout-web/assets/c1/WalletLogo.Cf2_Zomw.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentLine.CHbX9jWW.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPayButtonClassName.rJ6kGYSN.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useGeneralPaymentErrorMessage.Bg870ntb.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShowShopPayOptin.Ca3NOgON.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShowCreateMoreAccountsGdprTreatment.C7ybp16P.js","/cdn/shopifycloud/checkout-web/assets/c1/NumberField.G_UQAcg9.js","/cdn/shopifycloud/checkout-web/assets/c1/Section.C1TrEH1i.js","/cdn/shopifycloud/checkout-web/assets/c1/MobileOrderSummary.DEqEsXYf.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useOnePageFormSubmit.Ca6c1YSi.js","/cdn/shopifycloud/checkout-web/assets/c1/PayPalOverCaptureInfoBanner.EHJQT4lc.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-get-negotiation-input.CS2jAzMI.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopCashCheckoutEligibility.rjwoHoeL.js","/cdn/shopifycloud/checkout-web/assets/c1/redemption-constants.Cu2A-vp8.js","/cdn/shopifycloud/checkout-web/assets/c1/BillingAddressSelector.ALK6ANiQ.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentErrorBanner.CAoKFRny.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblems-StockProblemsLineItemList.VKZv6e4p.js","/cdn/shopifycloud/checkout-web/assets/c1/DutyOptions.DG4TAHl0.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown.BOlIqwOu.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal.CRGFQhZy.js","/cdn/shopifycloud/checkout-web/assets/c1/extension-targets-shipping-options.BwxI3j98.js","/cdn/shopifycloud/checkout-web/assets/c1/StackedMerchandisePreview.DoN6-921.js","/cdn/shopifycloud/checkout-web/assets/c1/EstimatedDeliveryContent.DG_y2if6.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodSelector.BBwueOHx.js","/cdn/shopifycloud/checkout-web/assets/c1/TextArea.6-nsD5YB.js","/cdn/shopifycloud/checkout-web/assets/c1/SubscriptionPriceBreakdown.CQl-rR-B.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-usePaypalRowEffects.IXxS3Fr1.js","/cdn/shopifycloud/checkout-web/assets/c1/Switch.81wln7Yo.js","/cdn/shopifycloud/checkout-web/assets/c1/Middot.C11Dd9ni.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingGroupsSummaryLine.XXetOqvc.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-publishMessage.Bilf417v.js"];
      var styles = ["/cdn/shopifycloud/checkout-web/assets/c1/assets/app.CMvjny27.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/UnauthenticatedErrorModalPayload.Wy3nLeF-.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ImpressionEventCapture.Brp6A-O7.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/OnePage.CQM_ODoE.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/SplitDeliveryMerchandiseContainer.D_EbuoqI.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/LocalizationExtensionField.BGuC5g6Q.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/MobileOrderSummary.CqVkJv9Z.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useOnePageFormSubmit.CtCAWdWo.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/WalletLogo.CIy8uDiZ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useSuppressShopPayModalOnLoad.C1nBZn0x.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ChangeCompanyLocationLink.uqpm88mq.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/CompactChoiceList.BEvzDDvy.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Section.CU18S7Ap.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentLine.7870thps.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/DutyOptions.LcqrKXE1.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/useShopPayButtonClassName.BrcQzLuH.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Switch.Dq_6Ius6.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/BillingAddressForm.Dj0n4Opx.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PhoneField.DN6CUyst.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/Middot.D7Ujmshx.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/EstimatedDeliveryContent.Dl_bEC_c.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/PayPalOverCaptureInfoBanner.CuS5ve3d.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/usePostPurchase.uv-X4L1-.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/CalloutHeader.BxwwfmsJ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/WalletSandbox.CnR7qNLY.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/NumberField.CRpcZnVJ.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/ShippingMethodSelector.B0hio2RO.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/SubscriptionPriceBreakdown.vTcdVGq4.css","/cdn/shopifycloud/checkout-web/assets/c1/assets/StackedMerchandisePreview.D6OuIVjc.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/2994/9948/files/Balmoral_logotype_White_x320.png?v=1776370358"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = preconnectOrigins.concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  