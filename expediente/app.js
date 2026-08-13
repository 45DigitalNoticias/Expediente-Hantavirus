/* ════════════════════════════════════════════════════════════════════
   Motor compartido del expediente. Una sola copia para todas las páginas.
   Cada bloque se pinta solo si su contenedor existe, así que la misma
   lógica sirve para la principal y para cada apartado.
   ════════════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s == null ? "" : s); };
  var PAGINA = document.body.dataset.pagina || "principal";
  /* Donde vive publica/ respecto de esta pagina. En la propuesta local son dos
     niveles arriba; ya publicado, uno. Lo dice el HTML, no el codigo. */
  var BASE = document.body.dataset.base || "../../publica/";

  /* Los símbolos del sprite están dibujados en una rejilla de 24. Sin viewBox
     el SVG no escala: se ve solo la esquina superior izquierda del trazo.
     Se barre todo de una vez en vez de repetir el atributo en cada plantilla. */
  function ajustarIconos() {
    $$("svg.ic:not([viewBox])").forEach(function (s) { s.setAttribute("viewBox", "0 0 24 24"); });
  }

  /* ═══════════ Las páginas del expediente ═══════════ */
  var PAGINAS = [
    ["principal",   "expediente-completo.html",    "El expediente", "i-globe"],
    ["columnas",    "expediente-columnas.html",    "Sala de lectura", "i-book"],
    ["vacunas",     "expediente-vacunas.html",     "Vacunas", "i-syringe"],
    ["comparativo", "expediente-comparativo.html", "Comparativo", "i-chart"],
    ["faq",         "expediente-faq.html",         "Preguntas", "i-info"],
    ["antecedente", "expediente-antecedente.html", "Antecedente", "i-clock"],
    ["referencia",  "expediente-referencia.html",  "Guía y glosario", "i-capa"]
  ];
  var CON_PERILLA = ["principal", "vacunas", "faq"];

  var BROTE = "hantavirus";
  var VISTA = { crono: 8, boletin: 6 };

  var D = {
    hantavirus: {
      eventos: typeof events !== "undefined" ? events : [],
      boletin: typeof declaraciones !== "undefined" ? declaraciones : [],
      paises: typeof countries !== "undefined" ? countries : [],
      etiqueta: "Hantavirus", cepa: "virus Andes y cepas locales"
    },
    ebola: {
      eventos: typeof eventosEbola !== "undefined" ? eventosEbola : [],
      boletin: typeof declaracionesEbola !== "undefined" ? declaracionesEbola : [],
      paises: typeof countriesEbola !== "undefined" ? countriesEbola : [],
      etiqueta: "Ébola", cepa: "cepa Bundibugyo"
    }
  };

  /* ═══════════ Barra superior común ═══════════ */
  (function barra() {
    var cont = $("#barraSitio");
    if (!cont) return;
    var nav = PAGINAS.map(function (p) {
      var act = p[0] === PAGINA;
      return '<a href="' + p[1] + '"' + (act ? ' class="act" aria-current="page"' : "") + '>' +
        '<svg class="ic"><use href="#' + p[3] + '"/></svg><span>' + p[2] + "</span></a>";
    }).join("");
    var perilla = CON_PERILLA.indexOf(PAGINA) === -1 ? "" :
      '<div class="vsel" role="tablist" aria-label="Vertiente del expediente">' +
        '<button role="tab" data-brote="hantavirus" aria-selected="true"><span class="dot"></span>Hantavirus</button>' +
        '<button role="tab" data-brote="ebola" aria-selected="false"><span class="dot"></span>Ébola</button>' +
      "</div>";
    cont.innerHTML = '<div class="barra-in"><nav class="sitenav" aria-label="Apartados del expediente">' +
      nav + "</nav>" + perilla + "</div>";
    var v = $(".vsel", cont);
    if (v) v.addEventListener("click", function (e) {
      var b = e.target.closest("button");
      if (b) cambiar(b.dataset.brote);
    });
  })();

  /* ═══════════ Portada de tarjeta ═══════════
     Seis combinaciones de casa que rotan por índice, para que la estantería
     no sea seis veces el mismo degradado. Si la columna trae imagen, manda. */
  var FONDOS = [
    "linear-gradient(140deg,#0d2438,#1c3a5c)",
    "linear-gradient(140deg,#2a1a2e,#5b4b8a)",
    "linear-gradient(140deg,#33210f,#8a6420)",
    "linear-gradient(140deg,#2b0d13,#7a1526)",
    "linear-gradient(140deg,#0c2b2a,#1d5c56)",
    "linear-gradient(140deg,#16202c,#3c5a72)"
  ];
  var ICONOS_COL = ["i-doc", "i-lab", "i-globe", "i-shield", "i-chart", "i-virus"];

  /* Portadas por convención: si la columna no trae imagen en el dato, se busca
     una en publica/columnas/portadas/<id>.jpg. Así basta con dejar el archivo
     ahí, sin tocar el expediente ni volver a extraer los datos. */
  var PORTADAS = BASE + "columnas/portadas/";
  function rutaPortada(c) {
    if (c.imagen) return BASE + String(c.imagen).replace(/^\.?\//, "");
    return PORTADAS + c.id + ".jpg";
  }
  function portada(c, i) {
    if (c.imagen) {
      return '<div class="cover cover--img">' +
        '<img src="' + esc(rutaPortada(c)) + '" alt="" loading="lazy"></div>';
    }
    return '<div class="cover" data-col-id="' + esc(c.id) + '" style="background:' +
      FONDOS[i % FONDOS.length] + '">' +
      '<svg class="ic"><use href="#' + ICONOS_COL[i % ICONOS_COL.length] + '"/></svg>' +
      '<span class="cover__falta">portada pendiente</span></div>';
  }

  /* Se prueba una sola vez por columna. Si la imagen aparece, se cambia el
     degradado por la portada y se quita la marca de pendiente del panel. */
  function detectarPortadas() {
    if (typeof columnas === "undefined") return;
    columnas.forEach(function (c) {
      if (c.imagen || !c.id) return;
      probarPortada(c, [".jpg", ".png", ".webp"], 0);
    });
  }
  function probarPortada(c, exts, k) {
    if (k >= exts.length) return;
    var ruta = PORTADAS + c.id + exts[k];
    var pre = new Image();
    pre.onload = function () {
      $$('.cover[data-col-id="' + c.id + '"]').forEach(function (cov) {
        var p = cov.parentElement;
        var enRevista = p && (p.classList.contains("revista__cover") ||
                              p.classList.contains("portada-hero__cover"));
        if (enRevista) {
          // Ahí el marco lo pone el padre: basta con dejar la imagen.
          cov.outerHTML = '<img src="' + ruta + '" alt="" loading="lazy">';
        } else {
          cov.className = "cover cover--img";
          cov.removeAttribute("style");
          cov.innerHTML = '<img src="' + ruta + '" alt="" loading="lazy">';
        }
      });
      $$('[data-col-id="' + c.id + '"] .sinimg').forEach(function (m) { m.remove(); });
    };
    pre.onerror = function () { probarPortada(c, exts, k + 1); };  // .jpg, luego .png, luego .webp
    pre.src = ruta;
  }

  /* Todo el texto va DENTRO de .cbody: ahí vive el padding del sistema. */
  function tarjeta(c, i) {
    return '<article class="colcard" data-col="' + i + '" tabindex="0" role="button" ' +
      'aria-label="Leer ' + esc(c.titulo).replace(/"/g, "") + '">' +
      portada(c, i) +
      '<div class="cbody">' +
        '<p class="cfecha">' + esc(c.fechaLegible) + "</p>" +
        "<h4>" + esc(c.titulo) + "</h4>" +
        (c.etiqueta ? '<p class="cetq">' + esc(c.etiqueta) + "</p>" : "") +
        "<p>" + esc(c.bajada || c.resumen || "") + "</p>" +
        '<a href="#" onclick="return false">Leer completa' +
          (c.tiempoLectura ? " · " + esc(c.tiempoLectura) : "") + " ›</a>" +
      "</div></article>";
  }

  /* ═══════════ Sala de lectura ═══════════ */
  function pintarColumnas() {
    if (typeof columnas === "undefined") return;
    var grid = $("#colGrid");
    if (grid) {
      // En la principal caben tres y una puerta al apartado completo.
      var tres = columnas.slice(0, 3).map(tarjeta).join("");
      grid.innerHTML = tres +
        '<a class="colcard colcard--more" href="expediente-columnas.html">' +
          '<span class="big">' + columnas.length + "</span>" +
          '<span class="sub2">columnas en el expediente</span>' +
          "<span>Entrar a la sala de lectura ›</span></a>";
      if ($("#columnasSub")) $("#columnasSub").innerHTML =
        "Las tres más recientes. Las <b>" + columnas.length + "</b> completas viven en su propio apartado.";
    }
    var nueva = $("#colNueva");
    if (nueva) nueva.innerHTML = '<div class="colgrid colgrid--una">' + tarjeta(columnas[0], 0) + "</div>";

    // Sala de lectura completa: se lee como revista. La más reciente ocupa
    // una pieza grande y el resto va en parrilla, con la portada dominando.
    var panel = $("#colPanel");
    if (panel) {
      var primera = columnas[0];
      var hero = '<article class="portada-hero" data-col="0" data-col-id="' + esc(primera.id) + '" ' +
        'tabindex="0" role="button">' +
        '<div class="portada-hero__cover">' + coverImg(primera, 0) + "</div>" +
        '<div class="portada-hero__txt">' +
          '<p class="portada-hero__k">La más reciente' +
            (primera.etiqueta ? " · " + esc(primera.etiqueta) : "") + "</p>" +
          "<h3>" + esc(primera.titulo) + "</h3>" +
          '<p class="portada-hero__bajada">' + esc(primera.bajada || primera.resumen || "") + "</p>" +
          '<p class="portada-hero__meta">' + esc(primera.fechaLegible) +
            (primera.tiempoLectura ? " · " + esc(primera.tiempoLectura) : "") + "</p>" +
          '<span class="portada-hero__cta">Leer completa ›</span>' +
        "</div></article>";

      var grupos = {};
      columnas.forEach(function (c, i) {
        if (i === 0) return;                    // la primera ya va arriba
        var g = (c.etiqueta || "Columna").split("·")[0].trim();
        (grupos[g] = grupos[g] || []).push({ c: c, i: i });
      });
      var orden = Object.keys(grupos).sort(function (a, b) {
        return grupos[b][0].c.fechaPublicacion.localeCompare(grupos[a][0].c.fechaPublicacion);
      });
      panel.innerHTML = hero + orden.map(function (g) {
        var tarjetas = grupos[g].sort(function (x, y) {
          return y.c.fechaPublicacion.localeCompare(x.c.fechaPublicacion);
        }).map(function (o) {
          var c = o.c;
          return '<button class="revista" data-col="' + o.i + '" data-col-id="' + esc(c.id) + '">' +
            '<span class="revista__cover">' + coverImg(c, o.i) + "</span>" +
            (c.etiqueta ? '<span class="revista__etq">' + esc(c.etiqueta) + "</span>" : "") +
            "<h4>" + esc(c.titulo) + "</h4>" +
            '<span class="revista__meta">' + esc(c.fechaLegible) +
              (c.tiempoLectura ? " · " + esc(c.tiempoLectura) : "") +
              (c.imagen ? "" : ' <i class="sinimg" title="sin portada">◦</i>') + "</span>" +
          "</button>";
        }).join("");
        return '<section class="grupo"><h3 class="grupo__tit">' + esc(g) +
          '<span class="grupo__n">' + grupos[g].length + "</span></h3>" +
          '<div class="revistagrid">' + tarjetas + "</div></section>";
      }).join("");
    }
  }

  /* La portada de la pieza, ya sea la del dato o la de convención. Si todavía
     no existe, el degradado de casa hace de portada provisional. */
  function coverImg(c, i) {
    if (c.imagen) {
      return '<img src="' + esc(rutaPortada(c)) + '" alt="" loading="lazy">';
    }
    return '<span class="cover" data-col-id="' + esc(c.id) + '" style="position:absolute;inset:0;' +
      "display:flex;align-items:center;justify-content:center;background:" +
      FONDOS[i % FONDOS.length] + '">' +
      '<svg class="ic" style="width:38px;height:38px;stroke:rgba(255,255,255,.8)"><use href="#' +
      ICONOS_COL[i % ICONOS_COL.length] + '"/></svg></span>';
  }

  /* ═══════════ Lector inmersivo ═══════════ */
  function abrirLector(i) {
    var c = typeof columnas !== "undefined" ? columnas[i] : null;
    var rd = $("#rd");
    if (!c || !rd) return;
    var p = [];
    p.push('<p class="rd__kicker">' + esc(c.etiqueta || "Columna de opinión") + "</p>");
    p.push('<h1 class="rd__tit">' + esc(c.titulo) + "</h1>");
    if (c.bajada) p.push('<p class="rd__bajada">' + esc(c.bajada) + "</p>");
    var meta = [];
    if (c.fechaLegible) meta.push(esc(c.fechaLegible));
    if (c.tiempoLectura) meta.push(esc(c.tiempoLectura) + " de lectura");
    if (c.serie) meta.push(esc(c.serie));
    if (c.arcoEditorial && c.arcoEditorial.length) meta.push("Arco: " + c.arcoEditorial.join(" · "));
    p.push('<div class="rd__meta">' + meta.map(function (m) { return "<span>" + m + "</span>"; }).join("") + "</div>");
    if (c.conceptoEje) p.push('<div class="rd__concepto"><b>Concepto eje.</b> ' + esc(c.conceptoEje) + "</div>");
    var ps = c.parrafos || [];
    for (var k = 0; k < ps.length; k++) {
      p.push('<p class="pp">' + esc(ps[k]) + "</p>");
      if (c.imagen && c.imagenInsertarDespuesParrafo === k + 1) {
        p.push('<img class="rd__img" src="' + esc(rutaPortada(c)) + '" alt="">');
        if (c.imagenCaption) p.push('<p class="rd__cap">' + esc(c.imagenCaption) + "</p>");
      }
    }
    if (c.firma) p.push('<p class="rd__firma">' + esc(c.firma) + "</p>");
    if (c.fuentes && c.fuentes.length) {
      p.push('<div class="rd__fuentes"><h4>Fuentes y referencias citadas</h4><ul>' +
        c.fuentes.map(function (f) {
          if (typeof f === "string") return "<li>" + f + "</li>";
          var t = esc(f.t || f.titulo || f.nombre || ""), u = f.url || f.u || "";
          return "<li>" + (u ? '<a href="' + esc(u) + '" target="_blank" rel="noopener">' + t + "</a>" : t) + "</li>";
        }).join("") + "</ul></div>");
    }
    if (c.glosario && c.glosario.length) {
      p.push('<div class="rd__fuentes"><h4>Glosario de la pieza</h4><ul>' +
        c.glosario.map(function (g) {
          if (typeof g === "string") return "<li>" + g + "</li>";
          return "<li><b>" + esc(g.t || g.termino || "") + "</b> " + esc(g.d || g.definicion || "") + "</li>";
        }).join("") + "</ul></div>");
    }
    $("#rdBody").innerHTML = p.join("");
    $("#rdBarTit").textContent = c.titulo;
    rd.classList.add("on");
    $(".rd__sheet", rd).scrollTop = 0;
    document.body.style.overflow = "hidden";
  }
  function cerrarLector() {
    var rd = $("#rd");
    if (rd) rd.classList.remove("on");
    document.body.style.overflow = "";
  }
  document.addEventListener("click", function (e) {
    var t = e.target.closest("[data-col]");
    if (t) { abrirLector(+t.dataset.col); return; }
    if (e.target.closest("[data-close]")) cerrarLector();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") cerrarLector();
    var a = document.activeElement;
    if (e.key === "Enter" && a && a.dataset && a.dataset.col) abrirLector(+a.dataset.col);
  });

  /* ═══════════ Crónica ═══════════ */
  function pintarCronica() {
    var cont = $("#crono");
    if (!cont) return;
    var d = D[BROTE];
    var lista = d.eventos.slice().sort(function (a, b) {
      return (a.day - b.day) || (String(a.n) > String(b.n) ? 1 : -1);
    });
    if ($("#cronicaSub")) $("#cronicaSub").innerHTML = "Los <b>" + lista.length +
      " hitos</b> de la vertiente " + d.etiqueta.toLowerCase() +
      ", en orden. Cada entrada con su fecha, su territorio y su fuente primaria enlazada.";
    cont.innerHTML = lista.slice(0, VISTA.crono).map(function (e) {
      return '<div class="cev" data-type="' + esc(e.type) + '">' +
        '<div class="cev__meta">' +
          '<span class="cev__n">' + esc(e.n) + "</span>" +
          '<span class="cev__fecha">' + esc(e.date) + (e.v ? " " + e.v : "") + "</span>" +
          '<span class="cev__lugar">' + esc(e.place) + "</span>" +
          '<span class="cev__tipo">' + esc(e.type) + "</span>" +
        "</div><p class=\"cev__desc\">" + esc(e.desc) + "</p></div>";
    }).join("");
    var b = $("#cronoMas");
    if (!b) return;
    if (VISTA.crono >= lista.length) { b.textContent = "Ver menos"; b.dataset.modo = "menos"; }
    else { b.textContent = "Ver los " + lista.length + " hitos"; b.dataset.modo = "mas"; }
  }

  /* ═══════════ Boletín ═══════════ */
  function pintarBoletin() {
    var cont = $("#boletinList");
    if (!cont) return;
    var d = D[BROTE];
    var lista = d.boletin.slice().sort(function (a, b) { return b.fecha.localeCompare(a.fecha); });
    if ($("#boletinSub")) $("#boletinSub").innerHTML = "<b>" + lista.length +
      " comunicados</b>, ruedas de prensa y posicionamientos oficiales de la vertiente " +
      d.etiqueta.toLowerCase() + ", de lo más reciente a lo más antiguo.";
    cont.innerHTML = lista.slice(0, VISTA.boletin).map(function (x, i) {
      return '<div class="bitem' + (i === 0 ? " critico" : "") + '">' +
        '<p class="bf"><svg class="ic" style="width:14px;height:14px"><use href="#i-doc"/></svg> ' +
          esc(x.fechaLegible) + " · " + esc(x.fuente) + "</p><h4>" + esc(x.vocero) + "</h4><p>" +
          esc(x.cita) + "</p>" +
        (x.contexto ? '<p class="bctx">' + esc(x.contexto) + "</p>" : "") +
        (x.url ? '<p class="bsrc"><a href="' + esc(x.url) +
          '" target="_blank" rel="noopener">Ir a la fuente ›</a></p>' : "") + "</div>";
    }).join("");
    var b = $("#boletinMas");
    if (!b) return;
    if (VISTA.boletin >= lista.length) { b.textContent = "Ver menos"; b.dataset.modo = "menos"; }
    else { b.textContent = "Ver las " + lista.length + " entradas"; b.dataset.modo = "mas"; }
  }

  /* ═══════════ Países ═══════════ */
  function pintarPaises() {
    var cont = $("#paisGrid");
    if (!cont) return;
    var d = D[BROTE];
    if ($("#paisesSub")) $("#paisesSub").innerHTML = "<b>" + d.paises.length +
      " territorios</b> con ficha propia: hospitales, confirmados, probables y la nota de contexto que explica cada cifra.";
    cont.innerHTML = d.paises.map(function (p) {
      var nums = "";
      if (p.conf != null) nums += '<div class="pais__num"><b>' + esc(p.conf) + "</b><span>confirmados</span></div>";
      if (p.prob != null) nums += '<div class="pais__num"><b>' + esc(p.prob) + "</b><span>probables</span></div>";
      if (p.obs != null) nums += '<div class="pais__num"><b>' + esc(p.obs) + "</b><span>en observación</span></div>";
      return '<article class="pais"><div class="pais__top"><span class="pais__flag">' + esc(p.flag) +
        '</span><h3 class="pais__name">' + esc(p.name) + (p.v ? " " + p.v : "") + "</h3></div>" +
        '<p class="pais__hosp">' + esc(p.hosp) + "</p>" +
        '<div class="pais__nums">' + nums + "</div>" +
        (p.deaths != null && p.deaths !== "" ? '<p class="pais__muertes">' + esc(p.deaths) +
          (typeof p.deaths === "number" ? " fallecidos" : "") + "</p>" : "") +
        '<p class="pais__note">' + esc(p.note) + "</p></article>";
    }).join("");
  }

  /* ═══════════ Inventario ═══════════ */
  (function inventario() {
    var cont = $("#inv");
    if (!cont || typeof events === "undefined") return;
    cont.innerHTML = [
      [events.length, "hitos hantavirus", "i-virus"],
      [eventosEbola.length, "hitos ébola", "i-lab"],
      [declaraciones.length + declaracionesEbola.length, "entradas de boletín", "i-doc"],
      [columnas.length, "columnas completas", "i-book"],
      [countries.length + countriesEbola.length, "países con ficha", "i-pin"],
      [sources.reduce(function (a, g) { return a + g.items.length; }, 0), "fuentes enlazadas", "i-shield"]
    ].map(function (t) {
      return '<div><svg class="ic"><use href="#' + t[2] + '"/></svg>' +
        '<b data-n="' + t[0] + '">' + t[0] + "</b><span>" + t[1] + "</span></div>";
    }).join("");
  })();

  /* ═══════════ El antecedente ═══════════
     Los 12 hitos salen del mismo data-hitos.js que alimenta el microsite: no
     se copia el contenido, se lee de su fuente. */
  (function antecedente() {
    var cont = $("#anteLinea");
    var H = (typeof HITOS !== "undefined") ? HITOS : (window.HITOS || null);
    if (!cont || !H) return;

    var años = H.map(function (h) { return h["año"] || h.anio || h.year; });
    var conMonto = H.filter(function (h) { return h.monto; });
    var actores = {};
    H.forEach(function (h) { (h.actores || []).forEach(function (a) { actores[a] = 1; }); });

    if ($("#anteSub")) $("#anteSub").innerHTML = "De <b>" + Math.min.apply(null, años) +
      "</b> a <b>" + Math.max.apply(null, años) + "</b>: la maquinaria que ya estaba montada " +
      "cuando zarpó el MV Hondius. Cada hito con su fuente primaria.";

    if ($("#anteCifras")) $("#anteCifras").innerHTML = [
      [H.length, "hitos documentados", "i-doc"],
      [Math.max.apply(null, años) - Math.min.apply(null, años), "años de arquitectura", "i-clock"],
      [Object.keys(actores).length, "actores distintos", "i-user"],
      [conMonto.length, "con dinero rastreado", "i-coin"]
    ].map(function (t) {
      return '<div><svg class="ic"><use href="#' + t[2] + '"/></svg>' +
        '<b data-n="' + t[0] + '">' + t[0] + "</b><span>" + t[1] + "</span></div>";
    }).join("");

    cont.innerHTML = H.slice().sort(function (a, b) {
      return (a["año"] || a.anio) - (b["año"] || b.anio) || (a.posicion || 0) - (b.posicion || 0);
    }).map(function (h) {
      var año = h["año"] || h.anio || h.year;
      return '<article class="hito">' +
        '<div class="hito__año">' + esc(año) + (h.verificacion ? ' <span class="hito__v">' +
          esc(h.verificacion) + "</span>" : "") + "</div>" +
        '<div class="hito__cuerpo">' +
          '<p class="hito__enf">' + esc(h.enfermedad) + "</p>" +
          "<h3>" + esc(h.titulo) + "</h3>" +
          '<p class="hito__resumen">' + esc(h.resumen) + "</p>" +
          (h.significancia ? '<p class="hito__peso">' + esc(h.significancia) + "</p>" : "") +
          '<div class="hito__pie">' +
            (h.monto ? '<span class="hito__monto"><svg class="ic"><use href="#i-coin"/></svg> ' +
              esc(h.monto) + "</span>" : "") +
            ((h.actores || []).length ? '<span class="hito__actores">' +
              h.actores.map(esc).join(" · ") + "</span>" : "") +
            (h.fuente ? '<a class="hito__fuente" href="' + esc(h.fuente) +
              '" target="_blank" rel="noopener">Fuente ›</a>' : "") +
          "</div>" +
        "</div></article>";
    }).join("");
  })();

  /* ═══════════ Fuentes ═══════════ */
  (function fuentes() {
    var cont = $("#fuentesList");
    if (!cont || typeof sources === "undefined") return;
    if ($("#fuentesSub")) $("#fuentesSub").innerHTML = "<b>" +
      sources.reduce(function (a, g) { return a + g.items.length; }, 0) +
      "</b> enlaces consultables, agrupados por tipo de fuente. El público debe poder cotejar.";
    cont.innerHTML = sources.map(function (g) {
      return '<div class="fgrupo"><h4>' + esc(g.group) + '</h4><div class="flist">' +
        g.items.map(function (it) {
          return '<a href="' + esc(it.url) + '" target="_blank" rel="noopener">' +
            '<svg class="ic"><use href="#i-doc"/></svg><span>' + esc(it.t) + "</span></a>";
        }).join("") + "</div></div>";
    }).join("");
  })();

  /* ═══════════ Fragmentos de prosa ═══════════ */
  (function fragmentos() {
    var F = window.FRAGMENTOS || {};
    [["#fragVacunas", "vacunas"], ["#fragComparativo", "comparativo"], ["#fragFaq", "faq"],
     ["#fragGuia", "guia"], ["#fragGlosario", "glosario"]].forEach(function (par) {
      var el = $(par[0]);
      if (el) el.innerHTML = F[par[1]] || "";
    });

    // FAQ: de divs planos a acordeón nativo.
    var faq = $("#fragFaq");
    if (faq) $$(".x-bcont", faq).forEach(function (bloque) {
      var items = $$(".x-faqi", bloque);
      if (!items.length) return;
      var wrap = document.createElement("div");
      wrap.className = "faq";
      items.forEach(function (it) {
        var q = $(".x-faqq", it), a = $(".x-faqa", it);
        if (!q || !a) return;
        var d = document.createElement("details");
        d.innerHTML = "<summary>" + q.innerHTML + '<span class="plus">+</span></summary>' +
                      '<div class="ans">' + a.innerHTML + "</div>";
        wrap.appendChild(d);
      });
      items.forEach(function (it) { it.remove(); });
      bloque.appendChild(wrap);
    });

    // Iconos en las fichas de vacuna: la etiqueta manda el icono.
    var ICONO_CLAVE = [
      [/producto|vacuna/i, "i-syringe"], [/fase|estatus/i, "i-shield"],
      [/inicio|antecedente/i, "i-clock"], [/l[íi]der/i, "i-user"],
      [/financ|paquete|mercado|burs[áa]til/i, "i-coin"], [/fuente/i, "i-doc"],
      [/dise[ñn]o|resultado|eficacia/i, "i-lab"], [/cobertura|lectura/i, "i-info"]
    ];
    var vax = $("#fragVacunas");
    if (vax) $$(".x-vk", vax).forEach(function (k) {
      var txt = k.textContent || "", ico = "i-info";
      for (var i = 0; i < ICONO_CLAVE.length; i++) {
        if (ICONO_CLAVE[i][0].test(txt)) { ico = ICONO_CLAVE[i][1]; break; }
      }
      k.insertAdjacentHTML("afterbegin", '<svg class="ic"><use href="#' + ico + '"/></svg>');
    });
  })();

  function sincronizarFragmentos() {
    ["#fragVacunas", "#fragFaq"].forEach(function (sel) {
      var el = $(sel);
      if (el) $$(".x-bcont", el).forEach(function (b) {
        b.style.display = (b.dataset.brote === BROTE) ? "" : "none";
      });
    });
    if ($("#faqSub")) $("#faqSub").innerHTML =
      "Información clínica y epidemiológica verificable sobre <b>" + D[BROTE].etiqueta.toLowerCase() +
      "</b> (" + D[BROTE].cepa + "), con fuente al pie. <b>No sustituye consulta médica.</b>";
  }

  /* ═══════════ EL MAPA: la lamina, dibujada en canvas ═══════════
     Antes esto eran 103 circulos en el DOM dentro de un contenedor con
     transform. Cada movimiento del raton obligaba a repintar una capa enorme,
     y con los filtros de hover encima nunca llegaba a 60 cuadros.

     Ahora se dibuja en un solo canvas y SOLO la ventana visible: el costo por
     cuadro depende del tamano del canvas, no de los megapixeles de la lamina
     ni de cuantos puntos haya. La imagen de la NASA es equirectangular 2:1,
     asi que el mundo se mide 2000x1000 y la proyeccion es directa. */
  var MUNDO_W = 2000, MUNDO_H = 1000;
  var COLOR = {
    route: "#5ba8f0", symptom: "#d4a017", hospital: "#d4a017",
    lab: "#a78bfa", death: "#dc5f46"
  };
  var cv, ctx, lamina = null, laminaLista = false, hiresPedida = false;
  var PUNTOS = [], RUTAS = [], capasOn = {}, tiposOn = {};
  var V = { z: 1, ox: 0, oy: 0, zMax: 4, arrastrando: false, movido: 0, pinta: false };
  var hover = null, activo = null;

  var CAPAS = [
    ["hanta", "Hantavirus", "i-virus", true], ["ebola", "\u00c9bola 2026", "i-lab", false],
    ["crucero", "Ruta Hondius", "i-ship", true], ["endemicos", "End\u00e9mico", "i-globe", false],
    ["vacunas", "Vacunas", "i-syringe", true], ["dinero", "Financiamiento", "i-chart", true]
  ];
  var TIPOS = [
    ["route", "Ruta", "#5ba8f0"], ["symptom", "S\u00edntoma", "#d4a017"],
    ["hospital", "Hospital", "#d4a017"], ["lab", "Laboratorio", "#a78bfa"],
    ["death", "Muerte", "#dc5f46"]
  ];

  function proy(lat, lon) {
    return [(lon + 180) / 360 * MUNDO_W, (90 - lat) / 180 * MUNDO_H];
  }
  function k() { return (cv.clientWidth / MUNDO_W) * V.z; }   // px CSS por unidad de mundo
  function aPantalla(wx, wy) {
    var e = k();
    return [(wx - V.ox) * e, (wy - V.oy) * e];
  }
  function limitar() {
    var e = k();
    var vw = cv.clientWidth / e, vh = cv.clientHeight / e;
    V.ox = vw >= MUNDO_W ? 0 : Math.max(0, Math.min(MUNDO_W - vw, V.ox));
    V.oy = vh >= MUNDO_H ? (MUNDO_H - vh) / 2 : Math.max(0, Math.min(MUNDO_H - vh, V.oy));
  }

  function dibujar() {
    if (!ctx) return;
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var cw = cv.clientWidth, ch = cv.clientHeight;
    if (cv.width !== Math.round(cw * dpr) || cv.height !== Math.round(ch * dpr)) {
      cv.width = Math.round(cw * dpr);
      cv.height = Math.round(ch * dpr);
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.fillStyle = "#02101e";
    ctx.fillRect(0, 0, cw, ch);

    var e = k();
    if (laminaLista) {
      // Solo el trozo que se ve: por eso el costo no crece con el zoom.
      var vw = cw / e, vh = ch / e;
      ctx.drawImage(lamina,
        V.ox / MUNDO_W * lamina.naturalWidth, V.oy / MUNDO_H * lamina.naturalHeight,
        vw / MUNDO_W * lamina.naturalWidth, vh / MUNDO_H * lamina.naturalHeight,
        0, 0, cw, ch);
    }

    RUTAS.forEach(function (r) {
      if (!capasOn[r.capa]) return;
      ctx.beginPath();
      for (var i = 0; i < r.pts.length; i++) {
        var s = aPantalla(r.pts[i][0], r.pts[i][1]);
        if (i === 0) { ctx.moveTo(s[0], s[1]); continue; }
        var a = aPantalla(r.pts[i - 1][0], r.pts[i - 1][1]);
        var mx = (a[0] + s[0]) / 2, my = (a[1] + s[1]) / 2;
        var dx = s[0] - a[0], dy = s[1] - a[1];
        ctx.quadraticCurveTo(mx - dy * 0.05, my + dx * 0.05, s[0], s[1]);
      }
      ctx.strokeStyle = r.color;
      ctx.lineWidth = r.ancho;
      ctx.lineCap = "round";
      ctx.setLineDash(r.guion || []);
      ctx.stroke();
      ctx.setLineDash([]);
    });

    for (var j = 0; j < PUNTOS.length; j++) {
      var p = PUNTOS[j];
      if (!capasOn[p.capa]) continue;
      if (p.tipo && !tiposOn[p.tipo]) continue;
      var s2 = aPantalla(p.wx, p.wy);
      if (s2[0] < -30 || s2[1] < -30 || s2[0] > cw + 30 || s2[1] > ch + 30) continue;
      var marcado = (p === hover || p === activo);
      var r2 = p.r * (marcado ? 1.45 : 1);
      if (p.halo) {
        ctx.beginPath();
        ctx.arc(s2[0], s2[1], r2 * 2.2, 0, 6.2832);
        ctx.strokeStyle = p.color;
        ctx.globalAlpha = 0.4;
        ctx.lineWidth = 1.2;
        ctx.stroke();
        ctx.globalAlpha = 1;
      }
      if (marcado) {
        ctx.beginPath();
        ctx.arc(s2[0], s2[1], r2 * 2.6, 0, 6.2832);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.22;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
      ctx.beginPath();
      ctx.arc(s2[0], s2[1], r2, 0, 6.2832);
      ctx.fillStyle = p.color;
      ctx.fill();
    }
  }
  function pedirPintado() {
    if (V.pinta) return;
    V.pinta = true;
    requestAnimationFrame(function () {
      V.pinta = false;
      dibujar();
      if (activo) colocarPopup();
    });
  }

  /* ═══════════ La ficha ═══════════ */
  function ocultarPopup() {
    var pop = $("#mapPopup");
    if (pop) pop.hidden = true;
    activo = null;
    pedirPintado();
  }
  function colocarPopup() {
    var pop = $("#mapPopup");
    if (!pop || !activo || !cv) return;
    var s = aPantalla(activo.wx, activo.wy);
    var cw = cv.clientWidth, ch = cv.clientHeight;
    if (s[0] < 0 || s[1] < 0 || s[0] > cw || s[1] > ch) { pop.hidden = true; return; }
    pop.hidden = false;
    var x = s[0] + 18, volteado = false;
    if (x + pop.offsetWidth > cw - 12) { x = s[0] - pop.offsetWidth - 18; volteado = true; }
    pop.classList.toggle("flip", volteado);
    var y = s[1] - pop.offsetHeight / 2;
    pop.style.left = Math.max(12, x) + "px";
    pop.style.top = Math.max(12, Math.min(y, ch - pop.offsetHeight - 12)) + "px";
  }
  function mostrarFicha(p) {
    var pop = $("#mapPopup");
    if (!pop || !p) return;
    pop.innerHTML = '<p class="pf">' + esc(p.pie) + "</p><h5>" + esc(p.tit) +
      "</h5><p>" + esc(p.txt) + "</p>";
    pop.hidden = false;
    activo = p;
    colocarPopup();
    pedirPintado();
  }
  function marcarPill(clave, on) {
    var b = document.querySelector('.capa-pill[data-capa="' + clave + '"]');
    if (b) { b.classList.toggle("on", on); b.setAttribute("aria-pressed", String(on)); }
  }

  /* ═══════════ Armado ═══════════ */
  function punto(capa, lat, lon, color, r, halo, d) {
    var w = proy(lat, lon);
    PUNTOS.push({ capa: capa, wx: w[0], wy: w[1], color: color, r: r, halo: halo,
                  tipo: d && d.tipo, pie: d && d.pie, tit: d && d.tit, txt: d && d.txt });
  }
  function trazo(capa, pts, color, ancho, guion) {
    if (!pts || pts.length < 2) return;
    RUTAS.push({ capa: capa, color: color, ancho: ancho, guion: guion,
                 pts: pts.map(function (p) { return proy(p[0], p[1]); }) });
  }
  function cargarLamina(src, cb) {
    if (!src) return;
    var img = new Image();
    img.onload = function () { lamina = img; laminaLista = true; if (cb) cb(); };
    img.src = src;
  }
  function recalcularTope() {
    if (!lamina || !cv.clientWidth) return;
    V.zMax = Math.max(2, Math.min(9, (lamina.naturalWidth / cv.clientWidth) * 1.15));
    marcarTope();
    notaMapa();
  }

  /* El pie dice el tamaño real de la lámina cargada, no uno escrito a mano:
     al entrar la de alta resolución, el texto se corrige solo. */
  function notaMapa() {
    var n = $("#mapnota");
    if (!n || typeof events === "undefined") return;
    var med = lamina && lamina.naturalWidth
      ? lamina.naturalWidth + "×" + lamina.naturalHeight : "equirectangular";
    n.innerHTML = "Lámina de la Tierra de noche (NASA Black Marble, " + med +
      "): cada punto está en su coordenada real. En pantalla, <b>" + events.length +
      "</b> hitos de hantavirus, <b>" + eventosEbola.length + "</b> de ébola, la ruta completa del " +
      "MV Hondius, <b>" + endemicos.length + "</b> zonas endémicas, <b>" + vacunas.length +
      "</b> programas de vacuna y <b>" + financiadores.length + "</b> financiadores. " +
      "Toque un punto para abrir su ficha; el zoom llega a " + V.zMax.toFixed(1) + "x.";
  }

  function armarMapa() {
    cv = $("#mapaCanvas");
    if (!cv || typeof events === "undefined") return;
    ctx = cv.getContext("2d");
    var marco = $("#lamina");

    events.forEach(function (e) {
      punto("hanta", e.coords[0], e.coords[1], COLOR[e.type] || "#5ba8f0",
        e.type === "death" ? 5.4 : 4.2, e.type === "death",
        { tipo: e.type, pie: e.date + " \u00b7 " + e.type + (e.v ? " " + e.v : ""),
          tit: e.place, txt: e.desc });
    });
    eventosEbola.forEach(function (e) {
      punto("ebola", e.coords[0], e.coords[1], COLOR[e.type] || "#dc5f46",
        e.type === "death" ? 5.4 : 4.2, e.type === "death",
        { tipo: e.type, pie: e.date + " \u00b7 " + e.type + (e.v ? " " + e.v : ""),
          tit: e.place, txt: e.desc });
    });
    endemicos.forEach(function (z) {
      punto("endemicos", z.coords[0], z.coords[1], "#3fbf6f", 5, true,
        { pie: z.fecha || "zona end\u00e9mica", tit: z.titulo || "Zona end\u00e9mica", txt: z.desc || "" });
    });
    vacunas.forEach(function (v) {
      punto("vacunas", v.coords[0], v.coords[1], "#a78bfa", 4.6, false,
        { pie: "pipeline de vacunas", tit: v.inst,
          txt: v.desc + (v.fuente ? "<br><i>" + v.fuente + "</i>" : "") });
    });
    financiadores.forEach(function (f) {
      var c = f.offset || f.coords;
      punto("dinero", c[0], c[1], "#e8b94d", 4.6, true,
        { pie: "financiamiento", tit: f.inst,
          txt: f.desc + (f.fuente ? "<br><i>" + f.fuente + "</i>" : "") });
    });
    trazo("crucero", preCruiseRoute, "rgba(232,238,245,0.30)", 1.2, [3, 5]);
    trazo("crucero", cruiseRoute, "rgba(91,168,240,0.85)", 2, null);
    trazo("crucero", evacDest, "rgba(220,95,70,0.45)", 1.2, [2, 6]);

    CAPAS.forEach(function (c) { capasOn[c[0]] = c[3]; });
    TIPOS.forEach(function (t) { tiposOn[t[0]] = true; });

    $("#maptop").innerHTML = CAPAS.map(function (c) {
      return '<button class="capa-pill' + (c[3] ? " on" : "") + '" data-capa="' + c[0] +
        '" aria-pressed="' + (c[3] ? "true" : "false") + '">' +
        '<svg class="ic"><use href="#' + c[2] + '"/></svg>' + c[1] + "</button>";
    }).join("");
    $("#maptop").addEventListener("click", function (ev) {
      var b = ev.target.closest(".capa-pill");
      if (!b) return;
      capasOn[b.dataset.capa] = !capasOn[b.dataset.capa];
      marcarPill(b.dataset.capa, capasOn[b.dataset.capa]);
      ocultarPopup();
    });

    var fl = $("#mapfiltros");
    if (fl) {
      fl.innerHTML = '<span class="filtros__lbl">Tipo de hecho</span>' +
        TIPOS.map(function (t) {
          return '<button class="fchip on" data-tipo="' + t[0] + '" aria-pressed="true">' +
            '<span class="pt" style="background:' + t[2] + '"></span>' + t[1] + "</button>";
        }).join("");
      fl.addEventListener("click", function (ev) {
        var b = ev.target.closest(".fchip");
        if (!b) return;
        tiposOn[b.dataset.tipo] = !tiposOn[b.dataset.tipo];
        b.classList.toggle("on", tiposOn[b.dataset.tipo]);
        b.setAttribute("aria-pressed", String(tiposOn[b.dataset.tipo]));
        ocultarPopup();
      });
    }

    if ($("#mapleyenda")) $("#mapleyenda").innerHTML = [
      ["#5ba8f0", "Ruta y tr\u00e1nsito"], ["#d4a017", "S\u00edntoma y hospital"],
      ["#a78bfa", "Laboratorio y vacunas"], ["#dc5f46", "Muerte confirmada"],
      ["#3fbf6f", "Zona end\u00e9mica"]
    ].map(function (l) {
      return '<div><span class="dot" style="background:' + l[0] + '"></span>' + l[1] + "</div>";
    }).join("");

    cargarLamina(marco && marco.dataset.lamina, function () { recalcularTope(); pedirPintado(); });
    armarInteraccion();
    armarTour();
    notaMapa();
    pedirPintado();
  }

  /* ═══════════ Interaccion ═══════════ */
  function puntoEn(sx, sy) {
    var mejor = null, mejorD = 16;
    for (var i = PUNTOS.length - 1; i >= 0; i--) {
      var p = PUNTOS[i];
      if (!capasOn[p.capa]) continue;
      if (p.tipo && !tiposOn[p.tipo]) continue;
      var s = aPantalla(p.wx, p.wy);
      var d = Math.sqrt((s[0] - sx) * (s[0] - sx) + (s[1] - sy) * (s[1] - sy));
      if (d < mejorD) { mejorD = d; mejor = p; }
    }
    return mejor;
  }
  function marcarTope() {
    var m = $("#lamina");
    if (m) m.classList.toggle("con-zoom", V.z > 1);
    var bm = $("#zMas"), bn = $("#zMenos");
    if (bm) bm.disabled = V.z >= V.zMax - 0.001;
    if (bn) bn.disabled = V.z <= 1.001;
  }
  function pedirHires() {
    var m = $("#lamina");
    if (hiresPedida || !m || !m.dataset.hires) return;
    hiresPedida = true;
    cargarLamina(m.dataset.hires, function () { recalcularTope(); pedirPintado(); });
  }
  function zoomEn(nz, px, py) {
    if (!cv) return;
    nz = Math.max(1, Math.min(V.zMax, nz));
    if (Math.abs(nz - V.z) < 0.001) return;
    if (nz > 1.02) pedirHires();
    var e0 = k();
    if (px == null) { px = cv.clientWidth / 2; py = cv.clientHeight / 2; }
    var wx = V.ox + px / e0, wy = V.oy + py / e0;
    V.z = nz;
    var e1 = k();
    V.ox = wx - px / e1;
    V.oy = wy - py / e1;
    limitar(); marcarTope(); pedirPintado();
  }
  function armarInteraccion() {
    var bm = $("#zMas"), bn = $("#zMenos"), br = $("#zReset");
    if (bm) bm.addEventListener("click", function () { zoomEn(V.z * 1.5); });
    if (bn) bn.addEventListener("click", function () { zoomEn(V.z / 1.5); });
    if (br) br.addEventListener("click", function () {
      V.z = 1; V.ox = 0; V.oy = 0; limitar(); marcarTope(); ocultarPopup(); pedirPintado();
    });
    window.addEventListener("resize", function () { limitar(); recalcularTope(); pedirPintado(); });

    cv.addEventListener("wheel", function (e) {
      if (!e.ctrlKey && !e.metaKey) return;
      e.preventDefault();
      var r = cv.getBoundingClientRect();
      zoomEn(V.z * (e.deltaY < 0 ? 1.18 : 1 / 1.18), e.clientX - r.left, e.clientY - r.top);
    }, { passive: false });
    cv.addEventListener("dblclick", function (e) {
      var r = cv.getBoundingClientRect();
      zoomEn(V.z * 1.7, e.clientX - r.left, e.clientY - r.top);
    });

    var px0 = 0, py0 = 0;
    cv.addEventListener("pointerdown", function (e) {
      V.arrastrando = true; V.movido = 0;
      px0 = e.clientX; py0 = e.clientY;
      if (cv.setPointerCapture) cv.setPointerCapture(e.pointerId);
    });
    cv.addEventListener("pointermove", function (e) {
      var r = cv.getBoundingClientRect();
      if (V.arrastrando) {
        var e2 = k();
        V.movido += Math.abs(e.clientX - px0) + Math.abs(e.clientY - py0);
        V.ox -= (e.clientX - px0) / e2;
        V.oy -= (e.clientY - py0) / e2;
        px0 = e.clientX; py0 = e.clientY;
        limitar(); pedirPintado();
        return;
      }
      var p = puntoEn(e.clientX - r.left, e.clientY - r.top);
      if (p !== hover) {
        hover = p;
        cv.style.cursor = p ? "pointer" : (V.z > 1 ? "grab" : "default");
        pedirPintado();
      }
    });
    ["pointerup", "pointercancel"].forEach(function (ev) {
      cv.addEventListener(ev, function () { V.arrastrando = false; });
    });
    cv.addEventListener("click", function (e) {
      if (V.movido > 6) { V.movido = 0; return; }
      var r = cv.getBoundingClientRect();
      var p = puntoEn(e.clientX - r.left, e.clientY - r.top);
      if (p) mostrarFicha(p); else ocultarPopup();
    });
  }

  /* ═══════════ El recorrido ═══════════
     En la maqueta el control era de adorno. Aquí camina de verdad: recorre los
     hitos de la vertiente activa en orden, abre su ficha y llena la barra. */
  var tour = { i: 0, timer: null, lista: [] };

  function tourCargar() {
    // Se guarda el índice original: los nodos del SVG están en el orden del
    // arreglo, y el recorrido va en orden cronológico. No son el mismo orden.
    tour.lista = D[BROTE].eventos.map(function (e, i) { return { e: e, i: i }; })
      .sort(function (a, b) {
        return (a.e.day - b.e.day) || (String(a.e.n) > String(b.e.n) ? 1 : -1);
      });
    tour.i = 0;
    pintarTour();
  }
  function pintarTour() {
    var n = tour.lista.length;
    var bar = $("#maptour .bar");
    if (bar) bar.style.setProperty("--resta", (n ? 100 - (tour.i / n) * 100 : 100) + "%");
    var c = $("#tourN");
    if (c) c.textContent = ("0" + tour.i).slice(-2) + " / " + ("0" + n).slice(-2);
  }
  function pasoTour() {
    var item = tour.lista[tour.i];
    if (!item) { pararTour(); tour.i = 0; pintarTour(); ocultarPopup(); return; }
    var clave = BROTE === "ebola" ? "ebola" : "hanta";
    if (!capasOn[clave]) { capasOn[clave] = true; marcarPill(clave, true); }
    // Los puntos de cada capa se cargaron en el orden del arreglo, así que el
    // índice original del hito sirve para encontrarlo.
    var deCapa = PUNTOS.filter(function (p) { return p.capa === clave; });
    var p = deCapa[item.i];
    tour.i++;
    pintarTour();
    if (!p) return;
    // Si su tipo está filtrado, no se detiene en un punto que no se ve.
    if (p.tipo && !tiposOn[p.tipo]) { pasoTour(); return; }
    mostrarFicha(p);
  }
  function arrancarTour() {
    if (!tour.lista.length) return;
    $("#tourPlay").innerHTML = "&#10073;&#10073;";
    pasoTour();
    tour.timer = setInterval(pasoTour, 3200);
  }
  function pararTour() {
    if (tour.timer) clearInterval(tour.timer);
    tour.timer = null;
    if ($("#tourPlay")) $("#tourPlay").innerHTML = "&#9654;";
  }
  function armarTour() {
    var btn = $("#tourPlay");
    if (!btn) return;
    tourCargar();
    btn.addEventListener("click", function () {
      if (tour.timer) pararTour(); else arrancarTour();
    });
  }

  function sincronizarMapa() {
    if (!cv) return;
    pararTour();
    tourCargar();
    ocultarPopup();
    var prende = BROTE === "ebola" ? "ebola" : "hanta";
    var apaga = BROTE === "ebola" ? "hanta" : "ebola";
    capasOn[prende] = true;
    capasOn[apaga] = false;
    marcarPill(prende, true);
    marcarPill(apaga, false);
    pedirPintado();
  }

  /* ═══════════ La perilla ═══════════ */
  function cambiar(b) {
    BROTE = b;
    document.documentElement.dataset.brote = b;
    $$(".vsel button").forEach(function (btn) {
      btn.setAttribute("aria-selected", btn.dataset.brote === b ? "true" : "false");
    });
    VISTA.crono = 8; VISTA.boletin = 6;
    pintarCronica(); pintarBoletin(); pintarPaises(); sincronizarFragmentos(); sincronizarMapa();
    ajustarIconos();
  }

  /* ═══════════ Botones de "ver todo" ═══════════ */
  var bc = $("#cronoMas");
  if (bc) bc.addEventListener("click", function () {
    VISTA.crono = this.dataset.modo === "mas" ? 999 : 8;
    var subir = this.dataset.modo === "menos";
    pintarCronica(); ajustarIconos();
    if (subir) $("#cronica").scrollIntoView({ block: "start" });
  });
  var bb = $("#boletinMas");
  if (bb) bb.addEventListener("click", function () {
    VISTA.boletin = this.dataset.modo === "mas" ? 999 : 6;
    var subir = this.dataset.modo === "menos";
    pintarBoletin(); ajustarIconos();
    if (subir) $("#boletin").scrollIntoView({ block: "start" });
  });

  /* ═══════════ Movimiento y progreso ═══════════ */
  function revelarTodo() { $$(".rv").forEach(function (el) { el.classList.add("in"); }); }
  if (!("IntersectionObserver" in window)) revelarTodo();
  else {
    document.documentElement.classList.add("js");
    var io = new IntersectionObserver(function (ents) {
      ents.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add("in"); io.unobserve(x.target); } });
    }, { threshold: 0.08 });
    $$(".rv").forEach(function (el) { io.observe(el); });
    setTimeout(revelarTodo, 1500);   // red de seguridad: nada se queda invisible
  }
  var ioNum = new IntersectionObserver(function (ents) {
    ents.forEach(function (x) {
      if (!x.isIntersecting) return;
      var el = x.target, fin = +el.dataset.n, t0 = null;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { ioNum.unobserve(el); return; }
      requestAnimationFrame(function paso(t) {
        if (!t0) t0 = t;
        var p = Math.min(1, (t - t0) / 900);
        el.textContent = Math.round(fin * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(paso);
      });
      ioNum.unobserve(el);
    });
  }, { threshold: 0.5 });
  $$("[data-n]").forEach(function (el) { ioNum.observe(el); });

  var barra = $("#leeBar");
  if (barra) window.addEventListener("scroll", function () {
    var h = document.documentElement.scrollHeight - window.innerHeight;
    barra.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + "%";
  }, { passive: true });

  /* ═══════════ Arranque ═══════════ */
  pintarCronica(); pintarBoletin(); pintarPaises(); pintarColumnas(); sincronizarFragmentos();
  detectarPortadas();
  ajustarIconos();
  try { armarMapa(); } catch (err) {
    if ($("#lamina")) $("#lamina").insertAdjacentHTML("beforeend",
      '<p class="mapfail">No se pudo dibujar la lámina. El resto del expediente funciona igual.</p>');
    console.warn("Mapa:", err);
  }
  if (location.hash) {
    var destino = document.querySelector(location.hash);
    if (destino) requestAnimationFrame(function () { destino.scrollIntoView({ behavior: "auto", block: "start" }); });
  }
})();
