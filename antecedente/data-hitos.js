/**
 * DATOS COMPARTIDOS — Reloj de la preparación pandémica 2003-2026
 * 45 Digital Noticias · Expediente Hantavirus
 *
 * 12 hitos del andamio legal, financiero y narrativo
 * que sostiene el "capitalismo de preparación pandémica".
 *
 * Marcado de verificación por hito:
 *  ✅ Confirmado — fuente primaria documentada
 *  ⚠️ Parcialmente confirmado — fuente secundaria o cifra de consenso
 *  ❓ No confirmado — atribución no documentada
 */

const HITOS = [
  {
    año: 2003,
    posicion: 1,
    enfermedad: "SARS",
    titulo: "Primer ensayo global de coordinación",
    resumen: "Brote en Asia, 8,098 casos, 774 muertes. La OMS coordina respuesta sin marco legal vinculante. Es el detonador político del rediseño del Reglamento Sanitario Internacional.",
    actores: ["OMS"],
    monto: null,
    verificacion: "✅",
    economist: {
      tiene: false
    },
    significancia: "Sin el SARS, no habría RSI 2005. Sin RSI 2005, no existiría la figura PHEIC tal como se usa hoy.",
    fuente: "https://www.who.int/health-topics/severe-acute-respiratory-syndrome"
  },
  {
    año: 2005,
    posicion: 2,
    enfermedad: "RSI revisado",
    titulo: "El andamio legal del PHEIC",
    resumen: "La 58ª Asamblea Mundial de la Salud aprueba el Reglamento Sanitario Internacional revisado. Vigente desde 15 junio 2007. Crea la figura PHEIC con poder vinculante sobre 196 Estados firmantes.",
    actores: ["OMS", "Estados firmantes RSI"],
    monto: null,
    verificacion: "✅",
    economist: {
      tiene: false
    },
    significancia: "Documento jurídico clave: sin este andamio, las pandemias siguientes no tendrían palanca legal para movilizar stockpiles, contratos y restricciones.",
    fuente: "https://www.who.int/publications/i/item/9789241580496"
  },
  {
    año: 2009,
    posicion: 3,
    enfermedad: "Gripe A (H1N1)",
    titulo: "El modelo Tamiflu",
    resumen: "PHEIC declarado 11 junio 2009. 70+ gobiernos stockpilearon Tamiflu (Roche): 220 millones de tratamientos a $6.9 mil millones. BMJ destapa en 2010 conflictos de interés no declarados entre asesores OMS y Roche/GSK.",
    actores: ["Roche", "GSK", "OMS"],
    monto: "$6.9 mil millones (Tamiflu stockpile global)",
    verificacion: "✅",
    economist: {
      tiene: true,
      titulo_portada: "The World in 2009",
      fecha: "Diciembre 2008",
      verificable: "⚠️",
      nota: "Edición anual de predicciones, no portada específica de H1N1"
    },
    significancia: "Modelo financiero de captura farmacéutica nace aquí. Cochrane en 2014 demostró eficacia limitada de Tamiflu. Stockpile = pérdida confirmada.",
    fuente: "https://www.bmj.com/content/340/bmj.c2912"
  },
  {
    año: 2014,
    posicion: 4,
    enfermedad: "Ébola África Occidental",
    titulo: "BARDA entra en escena",
    resumen: "PHEIC declarado 8 agosto 2014. >28,600 casos, >11,300 muertes. BARDA financia con $214M acumulados a Merck (vía NewLink Genetics) para desarrollar Ervebo. Aprobación FDA: diciembre 2019.",
    actores: ["BARDA", "Merck", "NewLink Genetics"],
    monto: "$214 millones (Ervebo)",
    verificacion: "✅",
    economist: {
      tiene: true,
      titulo_portada: "Ebola era — cobertura múltiple",
      fecha: "Varios números 2014",
      verificable: "⚠️",
      nota: "Cobertura editorial sostenida durante el brote"
    },
    significancia: "BARDA establece el modelo de pipeline subsidiado: emergencia → I+D → aprobación 5 años después → listo para el siguiente brote.",
    fuente: "https://www.merck.com/news/merck-announces-fda-approval-for-ervebo-ebola-zaire-vaccine-live/"
  },
  {
    año: 2016,
    posicion: 5,
    enfermedad: "Zika",
    titulo: "Mega-evento + emergencia",
    resumen: "PHEIC declarado 1 febrero 2016, explícitamente vinculado a JJOO Río agosto 2016. Obama solicita $1.8 mil M de emergencia al Congreso. $589M reasignados desde fondos ébola sin gastar.",
    actores: ["OMS", "Inovio", "Sanofi", "Gobierno EE. UU."],
    monto: "$1.8 mil millones solicitados + $589M redirigidos",
    verificacion: "✅",
    economist: {
      tiene: false,
      nota: "Portada Zika específica no verificada"
    },
    significancia: "Confirma la lógica del mega-evento como activador. Plantilla replicable: JJOO Río 2016 → ¿Mundial 2026?",
    fuente: "https://www.who.int/news/item/01-02-2016-who-statement-on-the-first-meeting-of-the-international-health-regulations-(2005)-emergency-committee-on-zika-virus"
  },
  {
    año: 2017,
    posicion: 6,
    enfermedad: "CEPI fundado en Davos",
    titulo: "El andamio multilateral permanente",
    resumen: "Coalition for Epidemic Preparedness Innovations (Oslo). Fundadores: Gates Foundation, Wellcome Trust, gobiernos de Noruega, India, Japón y Alemania. $460M en compromisos iniciales. Misión declarada: pre-financiar vacunas antes de la crisis.",
    actores: ["CEPI", "Gates Foundation", "Wellcome Trust"],
    monto: "$460 millones iniciales",
    verificacion: "✅",
    economist: {
      tiene: false
    },
    significancia: "CEPI es el equivalente multilateral de BARDA. Estructura clave: cuando BARDA se retira por política interna estadounidense, CEPI cubre — el flujo nunca se interrumpe.",
    fuente: "https://cepi.net/about/whyweexist"
  },
  {
    año: 2019,
    posicion: 7,
    enfermedad: "Ébola Kivu (RDC)",
    titulo: "Pipeline maduro — la prueba",
    resumen: "Brote inicia agosto 2018. PHEIC declarado 17 julio 2019 (11 meses después). 3,481 casos, 2,299 muertes. Inmazeb (Regeneron) y Ebanga (Ridgeback) aprobados en octubre 2020.",
    actores: ["Regeneron", "Ridgeback Biotherapeutics", "Merck"],
    monto: "—",
    verificacion: "✅",
    economist: {
      tiene: false
    },
    significancia: "PHEIC tardó 11 meses porque las herramientas ya estaban listas. Compare con Bundibugyo 2026: 13 días. La fricción jurídica se desplomó.",
    fuente: "https://www.who.int/news/item/17-07-2019-ebola-outbreak-in-the-democratic-republic-of-the-congo-declared-a-public-health-emergency-of-international-concern"
  },
  {
    año: 2020,
    posicion: 8,
    enfermedad: "COVID-19",
    titulo: "Plataforma mRNA",
    resumen: "PHEIC declarado 30 enero 2020. Operation Warp Speed anunciada 15 mayo 2020: $13 mil M obligados, $8.8 mil M a vacunas. Moderna $955M (BARDA), Pfizer $1.95 mil M (compra anticipada). EUA: 11 diciembre 2020.",
    actores: ["Moderna", "Pfizer", "BARDA", "HHS", "DoD"],
    monto: "$13 mil millones (Operation Warp Speed)",
    verificacion: "✅",
    economist: {
      tiene: true,
      titulo_portada: "Closed (candado sobre fondo rojo)",
      fecha: "26 marzo 2020",
      verificable: "✅",
      nota: "Una de las portadas más icónicas del siglo XXI"
    },
    significancia: "mRNA pasa de candidato a infraestructura permanente. Pfizer factura $37 mil M en ventas de vacuna COVID solo en 2022. La plataforma queda lista para el siguiente patógeno.",
    fuente: "https://en.wikipedia.org/wiki/Operation_Warp_Speed"
  },
  {
    año: 2022,
    posicion: 9,
    enfermedad: "Mpox (clade II)",
    titulo: "Stockpile recurrente",
    resumen: "PHEIC declarado 23 julio 2022. BARDA otorga $156.8M a Bavarian Nordic para Jynneos. La acción sube ~50% en un mes. Bavarian Nordic factura $456M (2022) → $1 mil M (2023). Jynneos solo: $725M en 2023.",
    actores: ["Bavarian Nordic", "BARDA"],
    monto: "$156.8 millones (Jynneos)",
    verificacion: "✅",
    economist: {
      tiene: false,
      nota: "Cobertura vía podcast 'The Intelligence' agosto 2022, no portada"
    },
    significancia: "Demuestra el patrón de stockpile recurrente: el inventario de Jynneos estaba mayoritariamente vencido al iniciar el brote. Renovar inventario es renovar el contrato.",
    fuente: "https://www.fiercepharma.com/pharma/bavarian-nordic-scores-1568m-contract-replenish-us-supplies-combination-smallpoxmpox-vaccine"
  },
  {
    año: 2024,
    posicion: 10,
    enfermedad: "Mpox clade Ib + Marburg Ruanda",
    titulo: "Pre-posicionamiento perfeccionado",
    resumen: "Segundo PHEIC mpox 14 ago 2024. Brote Marburg en Ruanda: declarado 27 sep 2024. Sabin Vaccine Institute entrega vacunas a Kigali en 7 días tras llamada del gobierno — porque BARDA ya había colocado $235M previamente en Sabin para Marburg/Sudán.",
    actores: ["Bavarian Nordic", "Sabin Vaccine Institute", "BARDA", "HERA (UE)"],
    monto: "$235 millones (Sabin Marburg/Sudán)",
    verificacion: "✅",
    economist: {
      tiene: false
    },
    significancia: "Modelo perfeccionado: pre-financiar la I+D para que la entrega ante brote sea de días, no años. La 'preparación' deja de ser palabra y se vuelve infraestructura material.",
    fuente: "https://www.sabin.org/resources/sabin-vaccine-institute-delivers-marburg-vaccines-to-combat-outbreak-in-rwanda/"
  },
  {
    año: 2025,
    posicion: 11,
    enfermedad: "H5N1 (gripe aviar)",
    titulo: "El relevo CEPI",
    resumen: "BARDA→Moderna: $176M (jul 2024) + $590M (ene 2025) = $766M para vacuna ARNm H5N1. Administración Trump cancela el contrato en mayo 2025. CEPI lo recoge con $54M para llevar a Fase 3.",
    actores: ["Moderna", "BARDA", "CEPI", "HHS"],
    monto: "$766M cancelado / $54M relevo CEPI",
    verificacion: "✅",
    economist: {
      tiene: false
    },
    significancia: "Demostración pública del mecanismo: cuando BARDA se retira por política doméstica de EE. UU., CEPI cubre. El financiamiento a Moderna no se interrumpe — solo cambia de portador.",
    fuente: "https://www.fiercebiotech.com/biotech/after-hhs-funding-was-scrapped-cepi-fronts-54m-carry-modernas-pandemic-influenza-vaccine-ph"
  },
  {
    año: 2026,
    posicion: 12,
    enfermedad: "Bundibugyo + Hantavirus Andes",
    titulo: "Sincronía perfecta",
    resumen: "Enero 2026: CEPI otorga $26.7M a Moderna+Oxford para vacuna multivalente que incluye Bundibugyo. Mayo: brote hantavirus en crucero MV Hondius. 17 mayo: PHEIC Bundibugyo declarado en 13 días con apenas 8 casos confirmados — el más rápido de la historia. Moderna está parada en ambos pánicos.",
    actores: ["Moderna", "Oxford", "CEPI", "OMS"],
    monto: "$26.7M (Bundibugyo, pre-PHEIC)",
    verificacion: "✅",
    economist: {
      tiene: true,
      titulo_portada: "The World Ahead 2026",
      fecha: "Noviembre 2025",
      ilustrador: "Andrew Rae",
      verificable: "✅",
      simbolos: [
        "Jeringas y símbolos de vacunación explícitos",
        "ADN / gene therapy",
        "Cerebro conectado a control de videojuego (Neuralink/control neural)",
        "Misiles, tanques, banderas (escenario bélico)",
        "Hielo derritiéndose (clima)",
        "Pastel del 250 aniversario EE. UU. (centro simbólico del caos)"
      ],
      nota: "Publicada en noviembre 2025, anticipa 'nueva era médica' con vacunas, gene therapy y control neuro como ejes 2026"
    },
    significancia: "Cierre del ciclo de 23 años: pre-financiamiento (enero) → portada Economist anticipando (noviembre) → brote real (mayo) → PHEIC con criterio mínimo (mayo) → Moderna activa línea. El reloj se cumple.",
    fuente: "https://publichealthpolicyjournal.com/moderna-began-developing-a-bundibugyo-ebola-mrna-vaccine-just-4-months-before-who-declared-a-global-emergency/"
  }
];

// Paleta unificada con el modo cine (navy nocturno + ámbar editorial)
const PALETA = {
  navy: "#02101e",
  navyOscuro: "#01080f",
  cyan: "#2a8cd8",
  cyanClaro: "#5ba8f0",
  oro: "#d4a017",
  oroClaro: "#e8b94d",
  blanco: "#ffffff",
  grisClaro: "#f5f8fb",
  divisor: "#cbd5e1",
  sepia: "#7d8ca0",
  texto: "#02101e"
};

// Si se carga en navegador, exportar global
if (typeof window !== "undefined") {
  window.HITOS = HITOS;
  window.PALETA = PALETA;
}
