export const template = (name: string) => `
<!DOCTYPE html
  PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="es">

<head>
  <meta charset="UTF-8">
  <meta content="width=device-width, initial-scale=1" name="viewport">
  <meta name="x-apple-disable-message-reformatting">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta content="telephone=no" name="format-detection">
  <title>New Template 2</title><!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
<noscript>
         <xml>
           <o:OfficeDocumentSettings>
           <o:AllowPNG></o:AllowPNG>
           <o:PixelsPerInch>96</o:PixelsPerInch>
           </o:OfficeDocumentSettings>
         </xml>
      </noscript>
<![endif]--><!--[if !mso]><!-- -->
  <link href="https://fonts.googleapis.com/css2?family=Barlow&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed&display=swap" rel="stylesheet"><!--<![endif]--><!--[if mso]><xml>
    <w:WordDocument xmlns:w="urn:schemas-microsoft-com:office:word">
      <w:DontUseAdvancedTypographyReadingMail/>
    </w:WordDocument>
    </xml><![endif]-->
  <style type="text/css">
    .rollover:hover .rollover-first {
      max-height: 0px !important;
      display: none !important;
    }

    .rollover:hover .rollover-second {
      max-height: none !important;
      display: block !important;
    }

    .rollover span {
      font-size: 0;
    }

    u+.body img~div div {
      display: none;
    }

    #outlook a {
      padding: 0;
    }

    span.MsoHyperlink,
    span.MsoHyperlinkFollowed {
      color: inherit;
      mso-style-priority: 99;
    }

    a.es-button {
      mso-style-priority: 100 !important;
      text-decoration: none !important;
    }

    a[x-apple-data-detectors],
    #MessageViewBody a {
      color: inherit !important;
      text-decoration: none !important;
      font-size: inherit !important;
      font-family: inherit !important;
      font-weight: inherit !important;
      line-height: inherit !important;
    }

    .es-desk-hidden {
      display: none;
      float: left;
      overflow: hidden;
      width: 0;
      max-height: 0;
      line-height: 0;
      mso-hide: all;
    }

    @media only screen and (max-width:600px) {
      .es-m-p20r {
        padding-right: 20px !important
      }

      .es-m-p20l {
        padding-left: 20px !important
      }

      .es-m-p0r {
        padding-right: 0px !important
      }

      .es-m-p10b {
        padding-bottom: 10px !important
      }

      .es-m-p20b {
        padding-bottom: 20px !important
      }

      .es-m-p10r {
        padding-right: 10px !important
      }

      .es-m-p10l {
        padding-left: 10px !important
      }

      .es-m-p20 {
        padding: 20px !important
      }

      .es-p-default {}

      *[class="gmail-fix"] {
        display: none !important
      }

      p,
      a {
        line-height: 150% !important
      }

      h1,
      h1 a {
        line-height: 120% !important
      }

      h2,
      h2 a {
        line-height: 120% !important
      }

      h3,
      h3 a {
        line-height: 120% !important
      }

      h4,
      h4 a {
        line-height: 120% !important
      }

      h5,
      h5 a {
        line-height: 120% !important
      }

      h6,
      h6 a {
        line-height: 120% !important
      }

      .es-header-body p {}

      .es-content-body p {}

      .es-footer-body p {}

      .es-infoblock p {}

      h1 {
        font-size: 46px !important;
        text-align: left
      }

      h2 {
        font-size: 28px !important;
        text-align: left
      }

      h3 {
        font-size: 20px !important;
        text-align: center
      }

      h4 {
        font-size: 24px !important;
        text-align: left
      }

      h5 {
        font-size: 20px !important;
        text-align: left
      }

      h6 {
        font-size: 16px !important;
        text-align: left
      }

      .es-header-body h1 a,
      .es-content-body h1 a,
      .es-footer-body h1 a {
        font-size: 46px !important
      }

      .es-header-body h2 a,
      .es-content-body h2 a,
      .es-footer-body h2 a {
        font-size: 28px !important
      }

      .es-header-body h3 a,
      .es-content-body h3 a,
      .es-footer-body h3 a {
        font-size: 20px !important
      }

      .es-header-body h4 a,
      .es-content-body h4 a,
      .es-footer-body h4 a {
        font-size: 24px !important
      }

      .es-header-body h5 a,
      .es-content-body h5 a,
      .es-footer-body h5 a {
        font-size: 20px !important
      }

      .es-header-body h6 a,
      .es-content-body h6 a,
      .es-footer-body h6 a {
        font-size: 16px !important
      }

      .es-menu td a {
        font-size: 12px !important
      }

      .es-header-body p,
      .es-header-body a {
        font-size: 14px !important
      }

      .es-content-body p,
      .es-content-body a {
        font-size: 14px !important
      }

      .es-footer-body p,
      .es-footer-body a {
        font-size: 14px !important
      }

      .es-infoblock p,
      .es-infoblock a {
        font-size: 12px !important
      }

      .es-m-txt-c,
      .es-m-txt-c h1,
      .es-m-txt-c h2,
      .es-m-txt-c h3,
      .es-m-txt-c h4,
      .es-m-txt-c h5,
      .es-m-txt-c h6 {
        text-align: center !important
      }

      .es-m-txt-r,
      .es-m-txt-r h1,
      .es-m-txt-r h2,
      .es-m-txt-r h3,
      .es-m-txt-r h4,
      .es-m-txt-r h5,
      .es-m-txt-r h6 {
        text-align: right !important
      }

      .es-m-txt-j,
      .es-m-txt-j h1,
      .es-m-txt-j h2,
      .es-m-txt-j h3,
      .es-m-txt-j h4,
      .es-m-txt-j h5,
      .es-m-txt-j h6 {
        text-align: justify !important
      }

      .es-m-txt-l,
      .es-m-txt-l h1,
      .es-m-txt-l h2,
      .es-m-txt-l h3,
      .es-m-txt-l h4,
      .es-m-txt-l h5,
      .es-m-txt-l h6 {
        text-align: left !important
      }

      .es-m-txt-r img,
      .es-m-txt-c img,
      .es-m-txt-l img {
        display: inline !important
      }

      .es-m-txt-r .rollover:hover .rollover-second,
      .es-m-txt-c .rollover:hover .rollover-second,
      .es-m-txt-l .rollover:hover .rollover-second {
        display: inline !important
      }

      .es-m-txt-r .rollover span,
      .es-m-txt-c .rollover span,
      .es-m-txt-l .rollover span {
        line-height: 0 !important;
        font-size: 0 !important;
        display: block
      }

      .es-spacer {
        display: inline-table
      }

      a.es-button,
      button.es-button {
        font-size: 18px !important;
        padding: 10px 20px 10px 20px !important;
        line-height: 120% !important
      }

      a.es-button,
      button.es-button,
      .es-button-border {
        display: inline-block !important
      }

      .es-m-fw,
      .es-m-fw.es-fw,
      .es-m-fw .es-button {
        display: block !important
      }

      .es-m-il,
      .es-m-il .es-button,
      .es-social,
      .es-social td,
      .es-menu {
        display: inline-block !important
      }

      .es-adaptive table,
      .es-left,
      .es-right {
        width: 100% !important
      }

      .es-content table,
      .es-header table,
      .es-footer table,
      .es-content,
      .es-footer,
      .es-header {
        width: 100% !important;
        max-width: 600px !important
      }

      .adapt-img {
        width: 100% !important;
        height: auto !important
      }

      .es-mobile-hidden,
      .es-hidden {
        display: none !important
      }

      .es-desk-hidden {
        width: auto !important;
        overflow: visible !important;
        float: none !important;
        max-height: inherit !important;
        line-height: inherit !important
      }

      tr.es-desk-hidden {
        display: table-row !important
      }

      table.es-desk-hidden {
        display: table !important
      }

      td.es-desk-menu-hidden {
        display: table-cell !important
      }

      .es-menu td {
        width: 1% !important
      }

      table.es-table-not-adapt,
      .esd-block-html table {
        width: auto !important
      }

      .h-auto {
        height: auto !important
      }

      .img-7647 {
        width: 90px !important
      }

      .img-8587 {
        width: 120px !important
      }

      .img-4220 {
        width: 280px !important
      }
    }

    @media screen and (max-width:384px) {
      .mail-message-content {
        width: 414px !important
      }
    }
  </style>
</head>

<body class="body"
  style="width:100%;height:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
  <div dir="ltr" class="es-wrapper-color" lang="es" style="background-color:#102B3F"><!--[if gte mso 9]>
			<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
				<v:fill type="tile" color="#102b3f"></v:fill>
			</v:background>
		<![endif]-->
    <table width="100%" cellspacing="0" cellpadding="0" class="es-wrapper" role="none"
      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#102B3F">
      <tr>
        <td valign="top" style="padding:0;Margin:0">
          <table cellpadding="0" cellspacing="0" align="center" class="es-header" role="none"
            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent;background-repeat:repeat;background-position:center top">
            <tr>
              <td align="center" style="padding:0;Margin:0">
                <table bgcolor="#ffffff" align="center" cellpadding="0" cellspacing="0" class="es-header-body"
                  role="none"
                  style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#102B3F;width:600px">
                  <tr>
                    <td align="left" class="es-m-p20r es-m-p20l" style="padding:0;Margin:0;padding-top:20px">
                      <table cellpadding="0" cellspacing="0" width="100%" role="none"
                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                        <tr>
                          <td valign="top" align="center" class="es-m-p0r" style="padding:0;Margin:0;width:600px">
                            <table cellpadding="0" cellspacing="0" width="100%" role="presentation"
                              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                              <tr>
                                <td align="center" class="es-m-txt-c" style="padding:0;Margin:0;font-size:0px"><a
                                    target="_blank" href=""
                                    style="mso-line-height-rule:exactly;text-decoration:underline;color:#E2CFEA;font-size:14px"><img
                                      src="https://fuhukcl.stripocdn.email/content/guids/CABINET_9f9a523169c17e16ea0a145555496f1be2381bf2ee0544a6a243496224175567/images/img_4435.JPG"
                                      alt="" title="Logo" width="180" class="img-4220"
                                      style="display:block;font-size:16px;border:0;outline:none;text-decoration:none;border-radius:200px"></a>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          <table cellspacing="0" cellpadding="0" align="center" class="es-content" role="none"
            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
            <tr>
              <td align="center" style="padding:0;Margin:0">
                <table cellspacing="0" cellpadding="0" align="center" class="es-content-body"
                  style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;background-repeat:no-repeat;width:600px;background-image:url(https://fuhukcl.stripocdn.email/content/guids/CABINET_6306d45fd9ea3b681ebe3a603101f0275312c7c136d6957f7ed43fa4b22490f7/images/frame_375_tsP.png);background-position:center top"
                  background="https://fuhukcl.stripocdn.email/content/guids/CABINET_6306d45fd9ea3b681ebe3a603101f0275312c7c136d6957f7ed43fa4b22490f7/images/frame_375_tsP.png"
                  role="none">
                  <tr>
                    <td align="left" class="es-m-p10b es-m-p20r es-m-p20l" style="padding:0;Margin:0;padding-top:20px">
                      <table width="100%" cellspacing="0" cellpadding="0" role="none"
                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                        <tr>
                          <td valign="top" align="center" class="es-m-p0r es-m-p20b"
                            style="padding:0;Margin:0;width:600px">
                            <table width="100%" cellspacing="0" cellpadding="0" role="presentation"
                              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                              <tr>
                                <td align="center" style="padding:0;Margin:0">
                                  <h1 class="es-m-txt-c"
                                    style="Margin:0;font-family:'Barlow Condensed', Arial, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:46px;font-style:normal;font-weight:normal;line-height:55.2px;color:#d2c7ff">
                                    Bienvenido a <strong style="color:#ff99dc">Spirituale</strong></h1>
                                </td>
                              </tr>
                              <tr>
                                <td align="center" class="es-m-p10r es-m-p10l"
                                  style="Margin:0;padding-top:15px;padding-right:40px;padding-bottom:10px;padding-left:40px">
                                  <p class="es-m-txt-c"
                                    style="Margin:0;mso-line-height-rule:exactly;font-family:Barlow, sans-serif;line-height:24px;letter-spacing:0;color:#d2c7ff;font-size:16px">
                                    « Descubre tu Camino con Sabiduría Espiritual »</p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td align="left" class="es-m-p20r es-m-p20l"
                      style="padding:0;Margin:0;padding-top:30px;padding-bottom:30px">
                      <table cellpadding="0" cellspacing="0" width="100%" role="none"
                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                        <tr>
                          <td align="center" valign="top" style="padding:0;Margin:0;width:600px">
                            <table cellpadding="0" cellspacing="0" width="100%"
                              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-radius:10px"
                              role="presentation">
                              <tr>
                                <td align="center"
                                  style="padding:0;Margin:0;padding-top:15px;padding-bottom:15px;font-size:0">
                                  <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0"
                                    role="presentation"
                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                    <tr>
                                      <td
                                        style="padding:0;Margin:0;border-bottom:1px solid #ffffff;background:unset;height:0px;width:100%;margin:0px">
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                              <tr>
                                <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-bottom:20px">
                                  <h2
                                    style="Margin:0;font-family:'Barlow Condensed', Arial, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:28px;font-style:normal;font-weight:normal;line-height:33.6px;color:#d2c7ff">
                                    <span style="color:#ff99dc">Hola</span> ${name},
                                  </h2>
                                  <p
                                    style="Margin:0;mso-line-height-rule:exactly;font-family:Barlow, sans-serif;line-height:24px;letter-spacing:0;color:#d2c7ff;font-size:16px">
                                    <br>
                                  </p>
                                  <p
                                    style="Margin:0;mso-line-height-rule:exactly;font-family:Barlow, sans-serif;line-height:24px;letter-spacing:0;color:#d2c7ff;font-size:16px;text-align:justify">
                                    Felicitaciones por inscribirte en el evento online gratuito: 3 PASOS PARA REVELAR TU
                                    ABUNDANCIA CONSCIENTE🔮🧿<br><br>El 22 de marzo tendremos este entrenamiento
                                    exclusivo, que estoy segura, te va a proporcionar todas las herramientas necesarias
                                    para incorporar hábitos &nbsp;espirituales sencillos y prácticos para activar tu
                                    Abundancia Consciente.<br><br>Te revelaré un paso a paso amable y sencillo para
                                    incluir la espiritualidad en tu día a día y así conectar con tu magia
                                    creadora<br><br>Me emociona saber que sientes gran interés por este tema y que
                                    deseas una transformación para tu vida<br><br>Para asegurar tu participación en 3
                                    PASOS PARA REVELAR TU ABUNDANCIA CONSCIENTE🔮 es necesario que des un paso … Únete
                                    al grupo exclusivo de WhatsApp.<br><br>En el grupo compartiremos materiales
                                    exclusivos y el enlace a la clase.<br><br>Haz clic en el botón y únete al
                                    grupo.<br><br><a target="_blank"
                                      href="https://chat.whatsapp.com/L730CWaUBL1JgRhBqVHpfI"
                                      style="color: #ff99dc">¡UNIRME AL GRUPO!</a></strong><br>¡Así garantizas tu lugar
                                    en el evento!<br><br>Ale</p>
                                </td>
                              </tr>
                              <tr>
                                <td align="center"
                                  style="padding:0;Margin:0;padding-top:15px;padding-bottom:15px;font-size:0">
                                  <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0"
                                    role="presentation"
                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                    <tr>
                                      <td
                                        style="padding:0;Margin:0;border-bottom:1px solid #ffffff;background:unset;height:0px;width:100%;margin:0px">
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td align="left" class="es-m-p10b es-m-p20r es-m-p20l" style="padding:0;Margin:0;padding-top:20px">
                      <table width="100%" cellspacing="0" cellpadding="0" role="none"
                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                        <tr>
                          <td valign="top" align="center" class="es-m-p0r es-m-p20b"
                            style="padding:0;Margin:0;width:600px">
                            <table width="100%" cellspacing="0" cellpadding="0" role="presentation"
                              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                              <tr>
                                <td align="left" style="padding:0;Margin:0;padding-bottom:20px">
                                  <h1 class="es-m-txt-c"
                                    style="Margin:0;font-family:'Barlow Condensed', Arial, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:46px;font-style:normal;font-weight:normal;line-height:55.2px;color:#ff99dc">
                                    <span style="color:#d2c7ff">Asegúrate de estar al día con nuestras </span><strong
                                      style="color:#ff99dc">novedades</strong><span style="color:#d2c7ff">...
                                      👀</span>&nbsp;
                                  </h1>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>


                  <!-- PRIMERO -->
                  <tr>
                    <td align="left" bgcolor="#D2C7FF" class="es-m-p20"
                      style="padding:40px;Margin:0;background-color:#D2C7FF;border-radius:10px">
                      <!--[if mso]><table style="width:520px" cellpadding="0" cellspacing="0"><tr><td style="width:90px" valign="top"><![endif]-->
                      <a href="Instagram.com/spiritu.alee"
                        style="display: block; text-decoration: none; color: inherit;">
                        <table cellpadding="0" cellspacing="0" align="left" class="es-left" role="none"
                          style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                          <tr>
                            <td align="center" valign="top" class="es-m-p20b" style="padding:0;Margin:0;width:90px">
                              <table cellpadding="0" cellspacing="0" width="100%" role="presentation"
                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                <tr>
                                  <td align="center" style="padding:0;Margin:0;font-size:0px"><a target="_blank" href=""
                                      style="mso-line-height-rule:exactly;text-decoration:underline;color:#E2CFEA;font-size:16px"><img
                                        src="https://fuhukcl.stripocdn.email/content/guids/CABINET_9f9a523169c17e16ea0a145555496f1be2381bf2ee0544a6a243496224175567/images/pngclipartsolarcalendarsymbolcomputericonsencapsulatedpostscriptcalendariconmiscellan.png"
                                        alt="" width="90" class="b_image"
                                        style="display:block;font-size:16px;border:0;outline:none;text-decoration:none"></a>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <!--[if mso]></td><td style="width:30px"></td><td style="width:400px" valign="top"><![endif]-->
                        <table cellpadding="0" cellspacing="0" align="right" class="es-right" role="none"
                          style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                          <tr>
                            <td align="center" valign="top" style="padding:0;Margin:0;width:400px">
                              <table cellpadding="0" cellspacing="0" width="100%" role="presentation"
                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                <tr>
                                  <td align="left" style="padding:0;Margin:0">
                                    <h2 class="b_title"
                                      style="Margin:0;font-family:'Barlow Condensed', Arial, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:28px;font-style:normal;font-weight:normal;line-height:33.6px;color:#0d0d55">
                                      Conoce los #21DíasSpirituales</h2>
                                    <p
                                      style="Margin:0;mso-line-height-rule:exactly;font-family:Barlow, sans-serif;line-height:19.2px;letter-spacing:0;color:#0d0d55;font-size:16px">
                                      <br>
                                    </p>
                                    <p class="b_description"
                                      style="Margin:0;mso-line-height-rule:exactly;font-family:Barlow, sans-serif;line-height:19.2px;letter-spacing:0;color:#0d0d55;font-size:16px">
                                      Puedes ir moviendo tu energía con alguno de estos 21 hábitos Spirituales.</p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table><!--[if mso]></td></tr></table><![endif]-->
                      </a>
                    </td>
                  </tr>

                  <!-- Espacio entre bloques -->
                  <tr>
                    <td style="padding: 20px 0;"></td>
                  </tr>

                  <!-- SEGUNDO -->
                  <tr>
                    <td align="left" bgcolor="#D2C7FF" class="es-m-p20"
                      style="padding:40px;Margin:0;background-color:#D2C7FF;border-radius:10px">
                      <!--[if mso]><table style="width:520px" cellpadding="0" cellspacing="0"><tr><td style="width:90px" valign="top"><![endif]-->
                      <a href="https://chat.whatsapp.com/L730CWaUBL1JgRhBqVHpfI"
                        style="display: block; text-decoration: none; color: inherit;">
                        <table cellpadding="0" cellspacing="0" align="left" class="es-left" role="none"
                          style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                          <tr>
                            <td align="center" valign="top" class="es-m-p20b" style="padding:0;Margin:0;width:90px">
                              <table cellpadding="0" cellspacing="0" width="100%" role="presentation"
                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                <tr>
                                  <td align="center" style="padding:0;Margin:0;font-size:0px"><a target="_blank" href=""
                                      style="mso-line-height-rule:exactly;text-decoration:underline;color:#E2CFEA;font-size:16px"><img
                                        src="https://fuhukcl.stripocdn.email/content/guids/CABINET_9f9a523169c17e16ea0a145555496f1be2381bf2ee0544a6a243496224175567/images/lineiconforadvicevectorremovebgpreview.png"
                                        alt="" width="90" class="b_image img-8587"
                                        style="display:block;font-size:16px;border:0;outline:none;text-decoration:none"></a>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <!--[if mso]></td><td style="width:30px"></td><td style="width:400px" valign="top"><![endif]-->
                        <table cellpadding="0" cellspacing="0" align="right" class="es-right" role="none"
                          style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                          <tr>
                            <td align="center" valign="top" style="padding:0;Margin:0;width:400px">
                              <table cellpadding="0" cellspacing="0" width="100%" role="presentation"
                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                <tr>
                                  <td align="left" style="padding:0;Margin:0">
                                    <h2 class="b_title"
                                      style="Margin:0;font-family:'Barlow Condensed', Arial, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:28px;font-style:normal;font-weight:normal;line-height:33.6px;color:#0d0d55">
                                      Asesoría Personalizada</h2>
                                    <p
                                      style="Margin:0;mso-line-height-rule:exactly;font-family:Barlow, sans-serif;line-height:19.2px;letter-spacing:0;color:#0d0d55;font-size:16px">
                                      <br>
                                    </p>
                                    <p class="b_description"
                                      style="Margin:0;mso-line-height-rule:exactly;font-family:Barlow, sans-serif;line-height:19.2px;letter-spacing:0;color:#0d0d55;font-size:16px">
                                      Contáctame directamente vía WhatsApp haciendo click aquí si necesitas algo en
                                      específico.</p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table><!--[if mso]></td></tr></table><![endif]-->
                      </a>
                    </td>
                  </tr>

                  <!-- Espacio entre bloques -->
                  <tr>
                    <td style="padding: 20px 0;"></td>
                  </tr>
                  
                  <!-- TERCERO -->
                  <tr>
                    <td align="left" bgcolor="#D2C7FF" class="es-m-p20"
                      style="padding:40px;Margin:0;background-color:#D2C7FF;border-radius:10px;">
                      <!--[if mso]><table style="width:520px" cellpadding="0" cellspacing="0"><tr><td style="width:90px" valign="top"><![endif]-->
                      <a href="https://www.canva.com/design/DAGgzyxscjI/_OnzqK8Y_AuCTvIy789Y7g/edit?utm_content=DAGgzyxscjI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                        style="display: block; text-decoration: none; color: inherit;">
                        <table cellpadding="0" cellspacing="0" align="left" class="es-left" role="none"
                          style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                          <tr>
                            <td align="center" valign="top" class="es-m-p20b" style="padding:0;Margin:0;width:90px">
                              <table cellpadding="0" cellspacing="0" width="100%" role="presentation"
                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                <tr>
                                  <td align="center" style="padding:0;Margin:0;font-size:0px"><a target="_blank" href=""
                                      style="mso-line-height-rule:exactly;text-decoration:underline;color:#E2CFEA;font-size:16px"><img
                                        src="https://fuhukcl.stripocdn.email/content/guids/CABINET_9f9a523169c17e16ea0a145555496f1be2381bf2ee0544a6a243496224175567/images/image_RPv.png"
                                        alt="" width="90" class="b_image img-7647"
                                        style="display:block;font-size:16px;border:0;outline:none;text-decoration:none"></a>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <!--[if mso]></td><td style="width:30px"></td><td style="width:400px" valign="top"><![endif]-->
                        <table cellpadding="0" cellspacing="0" align="right" class="es-right" role="none"
                          style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                          <tr>
                            <td align="center" valign="top" style="padding:0;Margin:0;width:400px">
                              <table cellpadding="0" cellspacing="0" width="100%" role="presentation"
                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                <tr>
                                  <td align="left" style="padding:0;Margin:0">
                                    <h2 class="b_title"
                                      style="Margin:0;font-family:'Barlow Condensed', Arial, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:28px;font-style:normal;font-weight:normal;line-height:33.6px;color:#0d0d55">
                                      Aquí te dejo un Regalo Metafísico</h2>
                                    <p
                                      style="Margin:0;mso-line-height-rule:exactly;font-family:Barlow, sans-serif;line-height:19.2px;letter-spacing:0;color:#0d0d55;font-size:16px">
                                      <br>
                                    </p>
                                    <p class="b_description"
                                      style="Margin:0;mso-line-height-rule:exactly;font-family:Barlow, sans-serif;line-height:19.2px;letter-spacing:0;color:#0d0d55;font-size:16px">
                                      Da click aquí y descubre el ejercicio metafísico más simple pero efectivo,
                                      ¡empieza
                                      a crear tu realidad perfecta!</p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table><!--[if mso]></td></tr></table><![endif]-->
                      </a>
                    </td>
                  </tr>





                </table>
                <table cellpadding="0" cellspacing="0" align="center" class="es-content" role="none"
                  style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
                  <tr>
                    <td align="center" style="padding:0;Margin:0">
                      <table bgcolor="#102b3f" align="center" cellpadding="0" cellspacing="0" class="es-content-body"
                        role="none"
                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#102B3F;width:600px">
                        <tr>
                          <td align="left" class="es-m-p20r es-m-p20l"
                            style="padding:0;Margin:0;padding-top:30px;padding-bottom:30px">
                            <table cellpadding="0" cellspacing="0" width="100%" role="none"
                              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                              <tr>
                                <td align="center" valign="top" style="padding:0;Margin:0;width:600px">
                                  <table cellpadding="0" cellspacing="0" width="100%"
                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-radius:10px"
                                    role="presentation">
                                    <tr>
                                      <td align="center"
                                        style="padding:0;Margin:0;padding-top:15px;padding-bottom:15px;font-size:0">
                                        <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0"
                                          role="presentation"
                                          style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                          <tr>
                                            <td
                                              style="padding:0;Margin:0;border-bottom:1px solid #ffffff;background:unset;height:0px;width:100%;margin:0px">
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td align="center"
                                        style="padding:0;Margin:0;padding-top:20px;padding-bottom:20px">
                                        <h2 class="es-m-txt-c"
                                          style="Margin:0;font-family:'Barlow Condensed', Arial, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:28px;font-style:normal;font-weight:normal;line-height:33.6px;color:#ffffff">
                                          ¡Siguenos!</h2>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td align="center" class="es-m-txt-c"
                                        style="padding:0;Margin:0;padding-bottom:20px;padding-top:10px;font-size:0">
                                        <table cellpadding="0" cellspacing="0" class="es-table-not-adapt es-social"
                                          role="presentation"
                                          style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                          <tr>
                                            <td align="center" valign="top"
                                              style="padding:0;Margin:0;padding-right:10px"><a target="_blank" href="https://www.instagram.com/spiritu.alee"
                                                style="mso-line-height-rule:exactly;text-decoration:underline;color:#E2CFEA;font-size:16px"><img
                                                  title="Instagram"
                                                  src="https://fuhukcl.stripocdn.email/content/assets/img/social-icons/logo-colored/instagram-logo-colored.png"
                                                  alt="Inst" height="24"
                                                  style="display:block;font-size:16px;border:0;outline:none;text-decoration:none"></a>
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td align="center"
                                        style="padding:0;Margin:0;padding-top:15px;padding-bottom:15px;font-size:0">
                                        <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0"
                                          role="presentation"
                                          style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                          <tr>
                                            <td
                                              style="padding:0;Margin:0;border-bottom:1px solid #ffffff;background:unset;height:0px;width:100%;margin:0px">
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
                
                <table cellpadding="0" cellspacing="0" align="center" class="es-content" role="none"
                  style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
                </table>
              </td>
            </tr>
          </table>
  </div>
</body>
</html>
`
