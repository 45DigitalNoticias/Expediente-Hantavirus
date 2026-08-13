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
        cov.className = "cover cover--img";
        cov.removeAttribute("style");
        cov.innerHTML = '<img src="' + ruta + '" alt="" loading="lazy">';
      });
      $$('.fila[data-col-id="' + c.id + '"] .sinimg').forEach(function (m) { m.remove(); });
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

    // Panel completo, agrupado por arco editorial.
    var panel = $("#colPanel");
    if (panel) {
      var grupos = {};
      columnas.forEach(function (c, i) {
        var g = (c.etiqueta || "Columna").split("·")[0].trim();
        (grupos[g] = grupos[g] || []).push({ c: c, i: i });
      });
      var orden = Object.keys(grupos).sort(function (a, b) {
        return grupos[b][0].c.fechaPublicacion.localeCompare(grupos[a][0].c.fechaPublicacion);
      });
      panel.innerHTML = orden.map(function (g) {
        var filas = grupos[g].sort(function (x, y) {
          return y.c.fechaPublicacion.localeCompare(x.c.fechaPublicacion);
        }).map(function (o) {
          var c = o.c;
          return '<button class="fila" data-col="' + o.i + '" data-col-id="' + esc(c.id) + '">' +
            '<span class="fila__ic"><svg class="ic"><use href="#' +
              ICONOS_COL[o.i % ICONOS_COL.length] + '"/></svg></span>' +
            '<span class="fila__txt"><b>' + esc(c.titulo) + "</b>" +
              '<span class="fila__bajada">' + esc(c.bajada || c.resumen || "").slice(0, 150) + "…</span></span>" +
            '<span class="fila__meta">' + esc(c.fechaLegible) +
              (c.tiempoLectura ? " · " + esc(c.tiempoLectura) : "") +
              (c.imagen ? "" : ' <i class="sinimg" title="sin portada">◦</i>') + "</span>" +
            "</button>";
        }).join("");
        return '<section class="grupo"><h3 class="grupo__tit">' + esc(g) +
          '<span class="grupo__n">' + grupos[g].length + "</span></h3>" +
          '<div class="grupo__filas">' + filas + "</div></section>";
      }).join("");
    }
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

  /* ═══════════ EL MAPA: la lámina ═══════════
     La Tierra de noche de la NASA es equirectangular de 3600x1800, exactamente
     2:1, así que la proyección es directa y los puntos reales del expediente
     caen donde les toca. El SVG usa el mismo encuadre que la imagen. */
  var SVGNS = "http://www.w3.org/2000/svg";
  var capas = {};
  var COLOR = {
    route: "#5ba8f0", symptom: "#d4a017", hospital: "#d4a017",
    lab: "#a78bfa", death: "#dc5f46"
  };

  function proy(lat, lon) {
    return [(lon + 180) / 360 * 1000, (90 - lat) / 180 * 500];
  }
  function nodo(g, lat, lon, color, r, halo, datos) {
    var c = document.createElementNS(SVGNS, "circle");
    var p = proy(lat, lon);
    c.setAttribute("cx", p[0].toFixed(2));
    c.setAttribute("cy", p[1].toFixed(2));
    c.setAttribute("r", r);
    c.setAttribute("fill", color);
    c.setAttribute("class", "nd");
    c.dataset.r = r;                 // radio base: el zoom lo recalcula
    if (datos) {
      c.dataset.pie = datos.pie || "";
      c.dataset.tit = datos.tit || "";
      c.dataset.txt = datos.txt || "";
      if (datos.tipo) c.dataset.tipo = datos.tipo;
      c.setAttribute("tabindex", "0");
    }
    if (halo) {
      var h = document.createElementNS(SVGNS, "circle");
      h.setAttribute("cx", p[0].toFixed(2));
      h.setAttribute("cy", p[1].toFixed(2));
      h.setAttribute("r", r * 2.2);
      h.setAttribute("fill", "none");
      h.setAttribute("stroke", color);
      h.setAttribute("stroke-opacity", "0.4");
      h.setAttribute("class", "nd-halo");
      h.dataset.r = r * 2.2;
      if (datos && datos.tipo) h.dataset.tipo = datos.tipo;
      g.appendChild(h);
    }
    g.appendChild(c);
    return c;
  }
  /* Trazo suave entre puntos: el mismo gesto curvo de la maqueta, pero con las
     coordenadas de verdad. */
  function ruta(g, pts, color, ancho, guion) {
    if (!pts || pts.length < 2) return;
    var xy = pts.map(function (p) { return proy(p[0], p[1]); });
    var d = "M " + xy[0][0].toFixed(1) + " " + xy[0][1].toFixed(1);
    for (var i = 1; i < xy.length; i++) {
      var a = xy[i - 1], b = xy[i];
      var mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2;
      var dx = b[0] - a[0], dy = b[1] - a[1];
      // Curva suave, no decorativa: los nodos van en su coordenada exacta y la
      // línea solo los une. Con más comba la ruta empezaría a inventar geografía.
      var comba = 0.05;
      d += " Q " + (mx - dy * comba).toFixed(1) + " " + (my + dx * comba).toFixed(1) +
           " " + b[0].toFixed(1) + " " + b[1].toFixed(1);
    }
    var path = document.createElementNS(SVGNS, "path");
    path.setAttribute("d", d);
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", color);
    path.setAttribute("stroke-width", ancho);
    path.setAttribute("stroke-linecap", "round");
    // El trazo no engorda con el zoom: la línea es referencia, no dato.
    path.setAttribute("vector-effect", "non-scaling-stroke");
    if (guion) path.setAttribute("stroke-dasharray", guion);
    g.appendChild(path);
  }
  function grupo(svg, nombre) {
    var g = document.createElementNS(SVGNS, "g");
    g.setAttribute("data-capa", nombre);
    svg.appendChild(g);
    return g;
  }
  function marcarPill(k, on) {
    var b = document.querySelector('.capa-pill[data-capa="' + k + '"]');
    if (b) { b.classList.toggle("on", on); b.setAttribute("aria-pressed", String(on)); }
  }
  var nodoActivo = null;
  function ocultarPopup() {
    var pop = $("#mapPopup");
    if (pop) pop.hidden = true;
    nodoActivo = null;
    $$("#mapaSvg .nd.act").forEach(function (n) { n.classList.remove("act"); });
  }
  /* Coloca la ficha junto a su punto. Se llama también al mover el mapa, para
     que la ficha siga al punto en vez de quedarse clavada donde estaba. */
  function colocarPopup(el) {
    var pop = $("#mapPopup"), marco = $("#lamina");
    if (!pop || !marco || !el) return;
    var r = el.getBoundingClientRect(), m = marco.getBoundingClientRect();
    var cx = r.left + r.width / 2 - m.left, cy = r.top + r.height / 2 - m.top;
    // Si el punto se salió del marco, la ficha no tiene a qué apuntar.
    if (cx < 0 || cy < 0 || cx > m.width || cy > m.height) { pop.hidden = true; return; }
    pop.hidden = false;
    var x = r.left - m.left + r.width + 16, volteado = false;
    if (x + pop.offsetWidth > m.width - 12) {
      x = r.left - m.left - pop.offsetWidth - 16; volteado = true;
    }
    pop.classList.toggle("flip", volteado);
    var y = cy - pop.offsetHeight / 2;
    pop.style.left = Math.max(12, x) + "px";
    pop.style.top = Math.max(12, Math.min(y, m.height - pop.offsetHeight - 12)) + "px";
  }
  function mostrarPopup(el) {
    var pop = $("#mapPopup");
    if (!pop || !el || !el.dataset.tit) return;
    pop.innerHTML = '<p class="pf">' + esc(el.dataset.pie) + "</p><h5>" + esc(el.dataset.tit) +
      "</h5><p>" + esc(el.dataset.txt) + "</p>";
    pop.hidden = false;
    nodoActivo = el;
    colocarPopup(el);
  }

  function armarMapa() {
    var svg = $("#mapaSvg");
    if (!svg) return;
    svg.innerHTML = "";

    capas.crucero = grupo(svg, "crucero");
    ruta(capas.crucero, preCruiseRoute, "rgba(232,238,245,0.30)", 1.2, "3 5");
    ruta(capas.crucero, cruiseRoute, "rgba(91,168,240,0.85)", 2, null);
    ruta(capas.crucero, evacDest, "rgba(220,95,70,0.45)", 1.2, "2 6");

    capas.hanta = grupo(svg, "hanta");
    events.forEach(function (e) {
      nodo(capas.hanta, e.coords[0], e.coords[1], COLOR[e.type] || "#5ba8f0",
        e.type === "death" ? 5.4 : 4.2, e.type === "death",
        { pie: e.date + " · " + e.type + (e.v ? " " + e.v : ""), tit: e.place, txt: e.desc, tipo: e.type });
    });

    capas.ebola = grupo(svg, "ebola");
    eventosEbola.forEach(function (e) {
      nodo(capas.ebola, e.coords[0], e.coords[1], COLOR[e.type] || "#dc5f46",
        e.type === "death" ? 5.4 : 4.2, e.type === "death",
        { pie: e.date + " · " + e.type + (e.v ? " " + e.v : ""), tit: e.place, txt: e.desc, tipo: e.type });
    });

    capas.endemicos = grupo(svg, "endemicos");
    endemicos.forEach(function (z) {
      nodo(capas.endemicos, z.coords[0], z.coords[1], "#3fbf6f", 5, true,
        { pie: z.fecha || "zona endémica", tit: z.titulo || "Zona endémica", txt: z.desc || "" });
    });

    capas.vacunas = grupo(svg, "vacunas");
    vacunas.forEach(function (v) {
      nodo(capas.vacunas, v.coords[0], v.coords[1], "#a78bfa", 4.6, false,
        { pie: "pipeline de vacunas", tit: v.inst, txt: v.desc + (v.fuente ? "<br><i>" + v.fuente + "</i>" : "") });
    });

    capas.dinero = grupo(svg, "dinero");
    financiadores.forEach(function (f) {
      var c = f.offset || f.coords;
      nodo(capas.dinero, c[0], c[1], "#e8b94d", 4.6, true,
        { pie: "financiamiento", tit: f.inst, txt: f.desc + (f.fuente ? "<br><i>" + f.fuente + "</i>" : "") });
    });

    // Vacunas y financiamiento entran prendidas: son la mitad de la tesis del
    // expediente y apagadas por default pasaban desapercibidas.
    var CAPAS = [
      ["hanta", "Hantavirus", "i-virus", true], ["ebola", "Ébola 2026", "i-lab", false],
      ["crucero", "Ruta Hondius", "i-ship", true], ["endemicos", "Endémico", "i-globe", false],
      ["vacunas", "Vacunas", "i-syringe", true], ["dinero", "Financiamiento", "i-chart", true]
    ];
    $("#maptop").innerHTML = CAPAS.map(function (c) {
      return '<button class="capa-pill' + (c[3] ? " on" : "") + '" data-capa="' + c[0] +
        '" aria-pressed="' + (c[3] ? "true" : "false") + '">' +
        '<svg class="ic"><use href="#' + c[2] + '"/></svg>' + c[1] + "</button>";
    }).join("");
    CAPAS.forEach(function (c) { if (capas[c[0]]) capas[c[0]].style.display = c[3] ? "" : "none"; });

    $("#maptop").addEventListener("click", function (e) {
      var b = e.target.closest(".capa-pill");
      if (!b) return;
      var g = capas[b.dataset.capa];
      if (!g) return;
      var prendida = g.style.display !== "none";
      g.style.display = prendida ? "none" : "";
      marcarPill(b.dataset.capa, !prendida);
      ocultarPopup();
    });

    // La ficha se abre en el punto: clic o teclado, y se cierra en el fondo.
    svg.addEventListener("click", function (e) {
      if (Z.movido > 6) { Z.movido = 0; return; }   // veníamos arrastrando, no fue un clic
      var n = e.target.closest(".nd");
      if (!n || !n.dataset.tit) { ocultarPopup(); return; }
      $$("#mapaSvg .nd.act").forEach(function (x) { x.classList.remove("act"); });
      n.classList.add("act");
      mostrarPopup(n);
    });
    svg.addEventListener("focusin", function (e) {
      var n = e.target.closest(".nd");
      if (n) mostrarPopup(n);
    });

    if ($("#mapleyenda")) $("#mapleyenda").innerHTML = [
      ["#5ba8f0", "Ruta y tránsito"], ["#d4a017", "Síntoma y hospital"],
      ["#a78bfa", "Laboratorio y vacunas"], ["#dc5f46", "Muerte confirmada"],
      ["#3fbf6f", "Zona endémica"]
    ].map(function (l) {
      return '<div><span class="dot" style="background:' + l[0] + '"></span>' + l[1] + "</div>";
    }).join("");

    armarFiltros();
    armarZoom();
    armarTour();
    notaMapa();
  }

  /* El pie dice el tamaño real de la lámina cargada, no uno escrito a mano:
     al entrar la de alta resolución, el texto se corrige solo. */
  function notaMapa() {
    var n = $("#mapnota");
    if (!n) return;
    var img = $("#lienzo .mapa-bg");
    var med = img && img.naturalWidth ? img.naturalWidth + "×" + img.naturalHeight : "equirectangular";
    n.innerHTML = "Lámina de la Tierra de noche (NASA Black Marble, " + med +
      "): cada punto está en su coordenada real. En pantalla, <b>" + events.length +
      "</b> hitos de hantavirus, <b>" + eventosEbola.length + "</b> de ébola, la ruta completa del " +
      "MV Hondius, <b>" + endemicos.length + "</b> zonas endémicas, <b>" + vacunas.length +
      "</b> programas de vacuna y <b>" + financiadores.length + "</b> financiadores. " +
      "Toque un punto para abrir su ficha; el zoom llega a " + Z.zMax.toFixed(1) + "x.";
  }

  /* ═══════════ Filtros por tipo de hecho ═══════════
     Las píldoras de arriba encienden capas enteras. Esto filtra dentro de la
     capa: con 85 hitos encendidos, Europa se vuelve una mancha. */
  var TIPOS = [
    ["route", "Ruta", "#5ba8f0"], ["symptom", "Síntoma", "#d4a017"],
    ["hospital", "Hospital", "#d4a017"], ["lab", "Laboratorio", "#a78bfa"],
    ["death", "Muerte", "#dc5f46"]
  ];
  var tiposOn = {};
  function aplicarFiltros() {
    $$("#mapaSvg [data-tipo]").forEach(function (n) {
      n.style.display = tiposOn[n.dataset.tipo] ? "" : "none";
    });
  }
  function armarFiltros() {
    var cont = $("#mapfiltros");
    if (!cont) return;
    TIPOS.forEach(function (t) { tiposOn[t[0]] = true; });
    cont.innerHTML = '<span class="filtros__lbl">Tipo de hecho</span>' +
      TIPOS.map(function (t) {
        return '<button class="fchip on" data-tipo="' + t[0] + '" aria-pressed="true">' +
          '<span class="pt" style="background:' + t[2] + '"></span>' + t[1] + "</button>";
      }).join("");
    cont.addEventListener("click", function (e) {
      var b = e.target.closest(".fchip");
      if (!b) return;
      var t = b.dataset.tipo;
      tiposOn[t] = !tiposOn[t];
      b.classList.toggle("on", tiposOn[t]);
      b.setAttribute("aria-pressed", String(tiposOn[t]));
      aplicarFiltros();
      ocultarPopup();
    });
  }

  /* ═══════════ Zoom y arrastre ═══════════
     Se transforma el lienzo entero (imagen y SVG juntos) para que los puntos no
     se despeguen de la costa. Dos cuidados que costaron caro:

     1) El tope de zoom lo manda la resolución de la lámina, no el capricho. La
        NASA Black Marble mide 3600 px de ancho; en un marco de 1200 px eso da
        3x nítidos. Más allá se ve el pixel, así que el tope se calcula solo.
     2) Los radios se recalculan SOLO cuando cambia la escala. Hacerlo en cada
        pointermove eran 119 atributos reescritos por evento, y eso era el tirón. */
  var Z = { z: 1, x: 0, y: 0, zMax: 3, arrastrando: false, movido: 0, pintando: false };

  function calcularTope() {
    var img = $("#lienzo .mapa-bg"), m = $("#lamina");
    if (!img || !m || !img.naturalWidth || !m.clientWidth) return;
    // Un pelo de margen (1.15) porque a escala exacta todavía se ve limpio.
    Z.zMax = Math.max(2, Math.min(9, (img.naturalWidth / m.clientWidth) * 1.15));
  }

  /* Lámina en dos tiempos: la ligera pinta de inmediato y la grande entra sola
     en cuanto alguien toca el zoom. Nadie paga los megas si no los usa. */
  var hiresPedida = false;
  function pedirHires() {
    if (hiresPedida) return;
    var img = $("#lienzo .mapa-bg");
    if (!img || !img.dataset.hires) return;
    hiresPedida = true;
    var pre = new Image();
    pre.onload = function () {
      img.src = img.dataset.hires;
      calcularTope();
      marcarTope();
      notaMapa();
    };
    pre.onerror = function () { hiresPedida = false; };   // sin conexión, se sigue con la ligera
    pre.src = img.dataset.hires;
  }
  function aplicarTransform() {
    var l = $("#lienzo");
    if (l) l.style.transform = "translate(" + Z.x + "px," + Z.y + "px) scale(" + Z.z + ")";
    if (nodoActivo) colocarPopup(nodoActivo);
  }
  function recalcularRadios() {
    var f = Math.pow(Z.z, 0.65);
    $$("#mapaSvg circle[data-r]").forEach(function (c) {
      c.setAttribute("r", (parseFloat(c.dataset.r) / f).toFixed(2));
    });
  }
  function pedirPintado() {
    if (Z.pintando) return;
    Z.pintando = true;
    requestAnimationFrame(function () { Z.pintando = false; aplicarTransform(); });
  }
  function limitar() {
    var m = $("#lamina");
    if (!m) return;
    var W = m.clientWidth, H = m.clientHeight;
    Z.x = Math.min(0, Math.max(W - W * Z.z, Z.x));
    Z.y = Math.min(0, Math.max(H - H * Z.z, Z.y));
  }
  function marcarTope() {
    var m = $("#lamina");
    if (m) m.classList.toggle("con-zoom", Z.z > 1);
    var bm = $("#zMas"), bn = $("#zMenos");
    if (bm) bm.disabled = Z.z >= Z.zMax - 0.001;
    if (bn) bn.disabled = Z.z <= 1.001;
  }
  function zoomEn(nz, px, py) {
    var m = $("#lamina");
    if (!m) return;
    if (nz > 1.02) pedirHires();
    nz = Math.max(1, Math.min(Z.zMax, nz));
    if (Math.abs(nz - Z.z) < 0.001) return;
    var r = m.getBoundingClientRect();
    if (px == null) { px = r.width / 2; py = r.height / 2; }
    Z.x = px - (px - Z.x) * (nz / Z.z);
    Z.y = py - (py - Z.y) * (nz / Z.z);
    Z.z = nz;
    limitar();
    aplicarTransform();
    recalcularRadios();     // solo aquí: la escala cambió
    marcarTope();
  }
  function armarZoom() {
    var m = $("#lamina");
    if (!m) return;
    var img = $("#lienzo .mapa-bg");
    if (img && !img.complete) img.addEventListener("load", function () { calcularTope(); marcarTope(); });
    calcularTope();
    window.addEventListener("resize", function () { calcularTope(); limitar(); pedirPintado(); marcarTope(); });

    var bm = $("#zMas"), bn = $("#zMenos"), br = $("#zReset");
    if (bm) bm.addEventListener("click", function () { zoomEn(Z.z * 1.5); });
    if (bn) bn.addEventListener("click", function () { zoomEn(Z.z / 1.5); });
    if (br) br.addEventListener("click", function () {
      Z.z = 1; Z.x = 0; Z.y = 0; aplicarTransform(); recalcularRadios(); marcarTope();
    });

    // La rueda sola sigue haciendo scroll de la página; con Ctrl hace zoom.
    m.addEventListener("wheel", function (e) {
      if (!e.ctrlKey && !e.metaKey) return;
      e.preventDefault();
      var r = m.getBoundingClientRect();
      zoomEn(Z.z * (e.deltaY < 0 ? 1.18 : 1 / 1.18), e.clientX - r.left, e.clientY - r.top);
    }, { passive: false });

    m.addEventListener("dblclick", function (e) {
      var r = m.getBoundingClientRect();
      zoomEn(Z.z * 1.7, e.clientX - r.left, e.clientY - r.top);
    });

    var px0 = 0, py0 = 0;
    m.addEventListener("pointerdown", function (e) {
      if (Z.z <= 1) return;
      Z.arrastrando = true; Z.movido = 0;
      px0 = e.clientX; py0 = e.clientY;
      m.setPointerCapture(e.pointerId);
      m.classList.add("arrastrando");
    });
    m.addEventListener("pointermove", function (e) {
      if (!Z.arrastrando) return;
      var dx = e.clientX - px0, dy = e.clientY - py0;
      px0 = e.clientX; py0 = e.clientY;
      Z.movido += Math.abs(dx) + Math.abs(dy);
      Z.x += dx; Z.y += dy;
      limitar();
      pedirPintado();        // un repintado por cuadro, no uno por evento
    });
    ["pointerup", "pointercancel"].forEach(function (ev) {
      m.addEventListener(ev, function () {
        Z.arrastrando = false;
        m.classList.remove("arrastrando");
      });
    });
    aplicarTransform();
    marcarTope();
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
    var g = capas[clave];
    if (!g) return;
    if (g.style.display === "none") { g.style.display = ""; marcarPill(clave, true); }
    var nodos = g.querySelectorAll(".nd[data-tit]");
    var el = nodos[item.i];
    tour.i++;
    pintarTour();
    // Si su tipo está filtrado, no se detiene en un punto que no se ve.
    if (el && el.style.display === "none") { pasoTour(); return; }
    $$("#mapaSvg .nd.act").forEach(function (n) { n.classList.remove("act"); });
    if (el) { el.classList.add("act"); mostrarPopup(el); }
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
    if (!capas.hanta) return;
    pararTour();
    tourCargar();
    ocultarPopup();
    var prende = BROTE === "ebola" ? "ebola" : "hanta";
    var apaga = BROTE === "ebola" ? "hanta" : "ebola";
    capas[prende].style.display = "";
    capas[apaga].style.display = "none";
    marcarPill(prende, true);
    marcarPill(apaga, false);
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
