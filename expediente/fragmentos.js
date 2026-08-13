/* ARCHIVO GENERADO POR _extraer_datos.py -- NO EDITAR A MANO.
   Paneles de prosa del expediente real, verbatim; solo cambian los
   nombres de clase y los colores de las graficas. */
window.FRAGMENTOS = {
  "guia": `<div class="x-intro">
        El mapa interactivo del <b>Expediente Brotes 2026</b> reúne datos verificables de dos brotes simultáneos —<b>hantavirus Andes</b> (MV Hondius, abril–mayo) y <b>ébola Bundibugyo</b> (RDC + Uganda, mayo)— en un solo plano editorial. No es ilustración: es una herramienta de lectura sistémica. Cada elemento es atribuible a una fuente y puede aislarse o combinarse con otros.
      </div>

      <div class="x-gs">
        <h3>Dos brotes, un expediente</h3>
        <p>La arquitectura del sitio permite alternar entre los dos brotes desde el selector dual <b>Hantavirus · Ébola</b> que aparece en cada apartado contextual (Cronología, Casos por país, Boletín, Columnas, Vacunas). Las secciones <em>Cómo leer este mapa</em>, <em>Glosario</em> y <em>Fuentes</em> son compartidas — los marcos analíticos y los organismos sanitarios aplican a ambos.</p>
        <p>El <b>selector maestro del mapa</b> (arriba a la izquierda de la barra de capas) permite tres modos: <b>solo hantavirus</b>, <b>solo ébola</b>, <b>ambos</b>. El estado se guarda en la URL via <code>?brote=hanta</code> · <code>?brote=ebola</code> · <code>?brote=ambos</code> para compartir vistas con un enlace.</p>
        <p><b>Columnas transversales.</b> Las piezas marcadas como <span class="x-pill x-pill-t" style="font-size:9px;padding:2px 7px;border-radius:8px;letter-spacing:0.08em;">Transversal</span> aparecen en ambas vistas — su marco analítico (la doctrina del shock, la arquitectura heredada del COVID, el capitalismo de preparación pandémica) aplica a cualquiera de los dos brotes.</p>
      </div>

      <div class="x-gs">
        <h3>Barra de capas — arriba del mapa</h3>
        <p>La <b>toolbar horizontal</b> centrada arriba del mapa permite activar y desactivar siete capas independientes. Cada pestaña tiene un ícono y una etiqueta. Estado <b>activo</b>: fondo navy. Estado <b>inactivo</b>: gris claro. Click para alternar.</p>
        <p>Las capas se dividen en <b>tres bloques</b> separados por líneas verticales:</p>
        <ul class="x-gl">
          <li>
            <span class="x-glc" style="background:#04162e"></span>
            <div class="x-gt">
              <b>Brote</b> — las cuatro capas base, activadas por default. Muestran la historia del MV Hondius tal como la cubrió la prensa entre el 1 de abril y el 18 de mayo de 2026.
            </div>
          </li>
          <li>
            <span class="x-glc" style="background:#04162e"></span>
            <div class="x-gt">
              <b>Contexto</b> — tres capas de ecosistema, apagadas por default. Muestran lo que rodea al brote: pipeline de vacunas, financiamiento pandémico y eventos geopolíticos previos.
            </div>
          </li>
          <li>
            <span class="x-glc" style="background:#04162e"></span>
            <div class="x-gt">
              <b>Controles globales</b> — botones <b>"Todas"</b> y <b>"Ninguna"</b> al final de la barra. Útil para aislar un solo dato: apaga todas y enciende solo la capa que te interesa analizar.
            </div>
          </li>
        </ul>
      </div>

      <div class="x-gs">
        <h3>Las cuatro capas del brote</h3>
        <ul class="x-gl">
          <li>
            <span class="x-gll" style="background:#2a8cd8"></span>
            <div class="x-gt">
              <b>Ruta</b> — Travesía marítima del MV Hondius. Línea continua cyan steel entre Ushuaia (1 abr) y Rotterdam (18 may), pasando por Tristán da Cunha y Tenerife.
            </div>
          </li>
          <li>
            <span class="x-glc" style="background:#8f2b20"></span>
            <div class="x-gt">
              <b>Casos</b> — Marcadores numerados 1, 2, 3… en orden cronológico del brote. Cada tipo de evento tiene un color distinto: <b style="color:#2a8cd8">cyan</b> exposición, <b style="color:#d4a017">mostaza</b> síntoma detectado, <b style="color:#8f2b20">rojo vino</b> muerte confirmada, <b style="color:#0d9488">teal</b> hospital de destino, <b style="color:#15803d">verde forest</b> laboratorio / institucional. Click abre popup con fecha, lugar, descripción y nivel de verificación (✅ confirmado, ⚠️ parcial, ❓ no confirmado).
            </div>
          </li>
          <li>
            <span class="x-gld"></span>
            <div class="x-gt">
              <b>Evac.</b> — Líneas gris carbón punteadas saliendo de Tenerife (puerto de desembarque) hacia los nueve destinos de evacuación: Ámsterdam, Berlín, Madrid, París, Roma, Zúrich, Omaha, Johannesburgo y Rotterdam.
            </div>
          </li>
          <li>
            <span class="x-glc" style="background:#d4a017"></span>
            <div class="x-gt">
              <b>Pre-crucero</b> — Ruta del <b>caso índice</b> (ciudadano holandés) durante los cuatro meses anteriores al zarpe. Santiago de Chile → Montevideo → Buenos Aires → Ushuaia, según informe del Ministerio de Salud argentino del 6 de mayo. Línea ámbar punteada con marcador "P" en el punto de partida y dots en las paradas.
            </div>
          </li>
        </ul>
      </div>

      <div class="x-gs">
        <h3>Las cuatro capas de contexto</h3>
        <ul class="x-gl">
          <li>
            <span class="x-glc" style="background:#2a8cd8"></span>
            <div class="x-gt">
              <b>Vacunas</b> — Pipeline global de I+D contra hantavirus: Moderna + Korea University, USAMRIID (Hooper 2023), UTMB-Bukreyev, University of Bath, CEPI. Cuadrados azules con marca "V". Click muestra fase clínica, socios y fuente.
            </div>
          </li>
          <li>
            <span class="x-glc" style="background:#5b4b8a"></span>
            <div class="x-gt">
              <b>Financ.</b> — Nodos de financiamiento pandémico: CEPI (Oslo), NIH, BARDA, Banco Mundial Pandemic Fund, Bill &amp; Melinda Gates Foundation. Círculos morados con símbolo "$". Los nodos del área metropolitana de Washington DC llevan offset visual con línea conectora gris hacia su sede real.
            </div>
          </li>
          <li>
            <span class="x-glc" style="background:#a23a2a"></span>
            <div class="x-gt">
              <b>Geopol.</b> — Eventos geopolíticos previos al brote: salida formal de EE.UU. de la OMS (20-ene-2026, Trump), salida de Argentina (17-mar-2026, Milei), alerta epidemiológica regional de la OPS (19-dic-2025). Marcadores guinda con bandera.
            </div>
          </li>
          <li>
            <span class="x-glc" style="background:#d4a017"></span>
            <div class="x-gt">
              <b>Continentes</b> — Marcadores tipo <em>pill</em> naranjas sobre el centro aproximado de cada continente con detección vinculada al hantavirus: Sudamérica (reservorio endémico + caso índice), Norteamérica (1 caso confirmado en Nebraska + nodo federal), Europa (5 países con casos del brote + puerto final Rotterdam), África (1 muerte en Johannesburgo + Santa Helena), Asia (2 en cuarentena en Singapur), Oceanía (Australia en monitoreo). Click muestra cifras y fuentes por continente.
            </div>
          </li>
        </ul>
      </div>

      <div class="x-gs">
        <h3>Las cuatro capas del brote Ébola Bundibugyo</h3>
        <ul class="x-gl">
          <li>
            <span class="x-glc" style="background:#c44536"></span>
            <div class="x-gt">
              <b>Ébola · casos</b> — Marcadores naranja quemado con código E1, E2, E3… en orden cronológico. Cubren Mongbwalu (caso índice, 5 may), Bunia (confirmación de cepa, 14 may), declaración PHEIC en Ginebra (16 may), Kampala (Uganda, 17 may), Goma (zona M23, 17 may), Kinshasa (médico estadounidense positivo, 17 may), Frankfurt (evacuación, 18 may), Washington (screening CDC, 18 may), Atlanta (HAN 00530, 19 may) y Ginebra (Comité de Emergencia RSI, 22 may).
            </div>
          </li>
          <li>
            <span class="x-glc" style="background:#c44536;opacity:0.4"></span>
            <div class="x-gt">
              <b>Foco Ituri</b> — Polígono naranja semitransparente sobre la provincia de Ituri + Nord-Kivu (noreste de la RDC), zona donde inició el brote y epicentro que, al 15-jul (OMS DON613), se expandió a 46 zonas de salud en cinco provincias (Ituri concentra 1,904 casos y 692 muertes).
            </div>
          </li>
          <li>
            <span class="x-glc" style="background:#8f2b20"></span>
            <div class="x-gt">
              <b>Zona M23</b> — Polígono ocre oscuro sobre el territorio bajo control del <em>Mouvement du 23 mars</em> en Nord-Kivu. Goma —capital provincial— registró caso confirmado de Bundibugyo el 17 de mayo. MSF negocia acceso humanitario directamente con el M23, lo que de facto le otorga estatus de interlocutor sanitario. Patrón documentado en Tigré 2021-2023.
            </div>
          </li>
          <li>
            <span class="x-gld" style="border-top-color:#c44536"></span>
            <div class="x-gt">
              <b>Evacuación a Alemania</b> — Línea punteada naranja Kinshasa → Frankfurt. Traslado aéreo del médico estadounidense positivo a un centro de bioseguridad alemán. El primer caso fuera de África no se trató en EE.UU.: la logística pasó por Europa.
            </div>
          </li>
        </ul>
      </div>

      <div class="x-gs">
        <h3>Cómo interactuar</h3>
        <p>• <b>Click en cualquier marcador</b> abre un popup con la información completa de ese evento o nodo, incluida la fuente verificable.</p>
        <p>• <b>Click en una línea</b> (ruta marítima o pre-crucero) también abre popup descriptivo.</p>
        <p>• <b>Zoom y arrastre</b> funcionan como en cualquier mapa: rueda del ratón o doble click para acercar, click + arrastrar para mover.</p>
        <p>• La <b>línea de tiempo</b> abajo del mapa permite recorrer los 48 días del brote en orden cronológico. Botón ▶ reproduce automáticamente.</p>
        <p>• El <b>panel lateral derecho</b> tiene cinco pestañas adicionales: Cronología (línea de tiempo detallada con filtros), Casos por país, Boletín oficial, Columnas (las cinco piezas del expediente) y Fuentes (todas las referencias).</p>
      </div>

      <div class="x-gs">
        <h3>Qué tipo de datos verás</h3>
        <p>Tres categorías:</p>
        <p>• <b>Cifras epidemiológicas</b> — provienen de la OMS (DON601, 14-may-2026), CDC, ECDC, OPS y los ministerios nacionales de salud. Cifras canónicas: 11 casos, 3 muertes, 147 personas a bordo, 12 países afectados.</p>
        <p>• <b>Datos institucionales</b> — pipeline de vacunas, financiadores, eventos geopolíticos. Fuentes: Korea Biomedical Review, Hooper et al. 2023, The Hill Times, CEPI, Página/12, Infobae, Chequeado.</p>
        <p>• <b>Atribuciones académicas</b> — cuando una columna del expediente cita a un autor (Klein, Crary, Goffman, Jung, Schmitt), el concepto eje aparece en la pestaña <i>Columnas</i> del panel lateral.</p>
        <div class="x-gtip">
          <b>Honestidad de método.</b> Los nodos del mapa que no tienen fuente primaria refrendada aparecen marcados como "fuente pendiente" en su popup. No se publica nada como hecho sin atribución.
        </div>
      </div>

      <div class="x-gs">
        <h3>Glosario</h3>
        <p>Los términos, organismos, cepas y conceptos que aparecen en el mapa, los popups y las columnas están definidos en el apartado <b>Glosario</b> del menú lateral. Se actualiza cada vez que se incorpora un término nuevo al expediente.</p>
      </div>

      <div class="x-gs">
        <h3>Lectura editorial</h3>
        <p>Este mapa no es ilustración. Es una herramienta de lectura sistémica. Cada vez que prendes o apagas una capa, propones una hipótesis: <em>¿qué muestra el brote del MV Hondius si lo lees solo con el pipeline de vacunas activado? ¿qué dibujan los nodos de financiamiento cuando los superpones con la ruta marítima? ¿qué cambia si activas la capa geopolítica y observas que Argentina abandonó la OMS quince días antes de que el barco zarpara de su puerto? ¿qué emerge cuando superpones el foco de Ébola en Ituri con la zona M23 y con la ruta de evacuación a Frankfurt en lugar de a Estados Unidos?</em></p>
        <p>El expediente está pensado para ser <b>interrogado</b>, no consumido. Las <b>columnas transversales</b> leen los dos brotes desde marcos analíticos comunes: la arquitectura institucional que el COVID dejó montada (Klein), el capitalismo del desastre (Klein), la economía de la atención (Crary), los rostros públicos como <em>frontstage</em> goffmaniano (Goffman / Jung), la decisión soberana en clave schmittiana (Schmitt), el ajuste espacial en Ushuaia (Harvey) y el capitalismo de preparación pandémica (Lakoff). Cada pieza se publica en la pestaña <i>Columnas</i> del panel y se filtra por brote para hacer visible la doble pertenencia.</p>
        <div class="x-gtip">
          <b>Por qué dos brotes a la vez.</b> El expediente sostiene una hipótesis editorial sin enfoque conspirativo: la activación simultánea de dos PHEIC (hantavirus en estudio + ébola Bundibugyo declarada) en el mismo trimestre, con farmacéuticas y financiadores ya en posición —Moderna, J&amp;J, Merck; CEPI, BARDA, GAVI— es una <em>correlación</em> observable. El sitio deja los hilos visibles para que el lector los siga. La lectura crítica es responsabilidad del lector.
        </div>
      </div>`,
  "faq": `<div class="x-intro">
        Preguntas frecuentes sobre los dos brotes activos. Información clínica y epidemiológica verificable, con fuente al pie de cada respuesta. <b>No sustituye consulta médica.</b> Si tiene síntomas o ha viajado a una zona afectada, consulte a su autoridad sanitaria nacional.
      </div>

      <div class="x-bsel" data-context="faq">
        <button class="x-btab active" data-brote="hantavirus"><span class="x-bdot"></span>Hantavirus <span class="x-bcount">(5)</span></button>
        <button class="x-btab" data-brote="ebola"><span class="x-bdot"></span>Ébola <span class="x-bcount">(5)</span></button>
      </div>

      <div class="x-bcont" data-brote="hantavirus">
        <div class="x-faqi">
          <div class="x-faqq">¿Cómo se contagia el hantavirus?</div>
          <div class="x-faqa">
            <p>El virus circula entre roedores silvestres. Los seres humanos se infectan principalmente por <b>inhalación de aerosoles</b> generados al perturbar excrementos, orina o material de anidamiento del reservorio (en el caso del virus Andes, el ratón colilargo <em>Oligoryzomys longicaudatus</em>). Otras vías documentadas: contacto directo con el animal, mordedura, y consumo de alimentos contaminados.</p>
            <p>La cepa <b>Andes</b> es la <b>única hantavirus del mundo con transmisión persona a persona documentada</b>, por contacto cercano y prolongado (familiares en mismo domicilio, parejas, personal de salud sin protección). El cluster del MV Hondius es consistente con este patrón — convivencia prolongada en espacio cerrado a bordo.</p>
            <p style="font-size:11px;color:#5a6e8c"><em>Fuentes: CDC Hantavirus Fact Sheet · Padula et al., Virology 1998 · OMS DON601 (mayo 2026)</em></p>
          </div>
        </div>

        <div class="x-faqi">
          <div class="x-faqq">¿Qué letalidad tiene el hantavirus?</div>
          <div class="x-faqa">
            <p>La letalidad varía drásticamente según la cepa. <b>Virus Andes (ANDV)</b>: 30 % a 45 % histórico; en 2026 Argentina cerró su temporada en 33.3 % (récord desde 2018) y Chile va en ~39 % al 29-jul, bajo alerta sanitaria nacional — muy por encima del promedio. <b>Sin Nombre virus (SNV)</b>, de América del Norte: 35-40 %. <b>Cepa Choclo (Panamá)</b>: baja, muchas infecciones asintomáticas. <b>Cepas euroasiáticas</b> (Hantaan, Seoul, Puumala): cuadros renales con letalidad mucho menor (0,1 % a 12 %).</p>
            <p>El cluster del MV Hondius fue <b>declarado terminado por la OMS el 2 de julio</b>. Cierre: 3 muertes sobre 12 casos confirmados (13 con el probable) ≈ <b>25 % confirmado / 23 % según la OMS</b>.</p>
            <p style="font-size:11px;color:#5a6e8c"><em>Fuentes: CDC · ECDC · Minsal Chile · Ministerio de Salud Argentina 2026</em></p>
          </div>
        </div>

        <div class="x-faqi">
          <div class="x-faqq">¿Hay vacuna o tratamiento aprobado?</div>
          <div class="x-faqa">
            <p><b>No hay vacuna aprobada comercialmente</b> contra ningún hantavirus al cierre de junio de 2026, pero el cuadro clínico se movió durante el brote. La vacuna DNA del USAMRIID (Hooper et al., 2023) había completado Fase 1 con perfil de seguridad aceptable. <b>Moderna + Korea University reportaron en mayo-junio de 2026 datos de Fase 1 de su candidata ARNm contra Andes: bien tolerada, sin señales serias de seguridad y con respuesta de anticuerpos en todas las dosis</b> (refrendado por un ensayo en modelo animal letal publicado en The Lancet, con protección completa tras dosis única). UTMB-Bukreyev mantiene su candidata estancada por falta de financiamiento desde 2024.</p>
            <p><b>No hay antiviral específico</b>. El tratamiento es de soporte: oxigenación, manejo hemodinámico, ECMO en casos críticos. La literatura señala que ECMO temprano puede dar hasta ~80 % de supervivencia en cuadros severos.</p>
            <p style="font-size:11px;color:#5a6e8c"><em>Fuentes: Hooper et al., Vaccines 2023 · CEPI · USAMRIID · ClinicalTrials.gov</em></p>
          </div>
        </div>

        <div class="x-faqi">
          <div class="x-faqq">¿Cuánto dura el periodo de incubación?</div>
          <div class="x-faqa">
            <p>Entre <b>1 y 6 semanas</b>, con mediana de 2 a 3 semanas. La OMS estableció en mayo de 2026 una <b>cuarentena de 42 días</b> para los pasajeros del MV Hondius — el extremo superior del rango. Por eso los 147 expuestos del crucero permanecen en monitoreo hasta el 21 de junio (día cero: 10 de mayo, desembarque en Tenerife).</p>
            <p style="font-size:11px;color:#5a6e8c"><em>Fuentes: CDC · OMS DON601 · ECDC Surveillance Update 13-may-2026</em></p>
          </div>
        </div>

        <div class="x-faqi">
          <div class="x-faqq">¿Hay riesgo en México por el Mundial 2026?</div>
          <div class="x-faqa">
            <p>México no tiene casos del cluster del MV Hondius en territorio nacional. La <b>Secretaría de Salud emitió el 11 de mayo de 2026 la primera Alerta Epidemiológica Nacional</b> por hantavirus en la historia del país. La alerta cita explícitamente la movilidad del Mundial 2026 como factor de riesgo adicional. CONAVE activa vigilancia en hospitales, laboratorios y unidades médicas para detección temprana.</p>
            <p>El riesgo individual para el viajero es bajo. El riesgo sistémico —que el evento masivo amplifique cualquier brote emergente— está documentado en literatura epidemiológica (ej. estudios sobre eventos deportivos masivos y enfermedades respiratorias).</p>
            <p style="font-size:11px;color:#5a6e8c"><em>Fuentes: Aviso Epidemiológico Nacional, Secretaría de Salud México · CONAVE · ECDC mass gathering guidance</em></p>
          </div>
        </div>
      </div>

      <div class="x-bcont" data-brote="ebola" style="display:none">
        <div class="x-faqi">
          <div class="x-faqq">¿Cómo se contagia el ébola Bundibugyo?</div>
          <div class="x-faqa">
            <p>El virus se transmite por <b>contacto directo con sangre o fluidos corporales</b> (saliva, vómito, heces, semen, sudor, leche materna) de una persona enferma o de un cadáver de víctima reciente. También por contacto con objetos contaminados (agujas, ropa de cama, instrumental médico sin esterilizar).</p>
            <p><b>No se transmite por aire</b> en condiciones normales. El periodo infeccioso comienza con la aparición de síntomas — un asintomático no contagia. Los rituales funerarios sin protección y la atención médica sin equipo adecuado son los principales amplificadores documentados en brotes africanos previos.</p>
            <p style="font-size:11px;color:#5a6e8c"><em>Fuentes: OMS Ebola Disease Fact Sheet · CDC HAN 00530 · MSF Ebola Field Manual</em></p>
          </div>
        </div>

        <div class="x-faqi">
          <div class="x-faqq">¿Qué letalidad tiene el subtipo Bundibugyo?</div>
          <div class="x-faqa">
            <p>El subtipo <b>Bundibugyo (BDBV)</b> tiene letalidad histórica entre <b>25 % y 40 %</b>, según datos de Médicos Sin Fronteras consolidados a partir de los brotes de Uganda 2007 (149 casos, 37 muertes ≈ 25 %) y RDC 2012 (52 casos, 25 muertes ≈ 48 %). Es <b>menos letal que el subtipo Zaire</b> (50-80 %) pero más que el Reston, que no causa enfermedad humana documentada.</p>
            <p>En el brote actual (mayo 2026), la letalidad cruda preliminar reportada por el ECDC el 19 de mayo es de <b>~25-30 %</b>, dentro del rango histórico. La cifra es preliminar y sujeta a ajuste conforme se confirmen casos sospechosos.</p>
            <p style="font-size:11px;color:#5a6e8c"><em>Fuentes: MSF Operational Centre Brussels · CDC Filovirus Page · ECDC week 21 update 2026</em></p>
          </div>
        </div>

        <div class="x-faqi">
          <div class="x-faqq">¿Hay vacuna o tratamiento aprobado para Bundibugyo?</div>
          <div class="x-faqa">
            <p><b>No hay vacuna autorizada específicamente para Bundibugyo.</b> La vacuna comercial existente —<b>Ervebo</b> de Merck (rVSV-ZEBOV)— cubre únicamente la cepa <b>Zaire</b>. Su despliegue en el brote actual es a título de mitigación regional, no de cobertura específica.</p>
            <p>La candidata de Johnson &amp; Johnson (régimen heterólogo Zabdeno + Mvabea) tiene <b>posible inmunidad cruzada parcial</b> con Bundibugyo, pendiente de validación operativa. CEPI activó el 17 de mayo de 2026 la <b>Bundibugyo Acceleration Track</b> dentro del programa <em>100 Day Mission</em>; el brote es la primera prueba real del programa. En enero de 2026 —cuatro meses antes del brote— CEPI ya había asignado USD 26.7 M a Moderna + Oxford para una vacuna multivalente que incluye Bundibugyo.</p>
            <p>Para tratamiento: hay dos anticuerpos monoclonales aprobados por FDA contra cepa Zaire (Inmazeb de Regeneron, Ebanga de Ridgeback). Su eficacia contra Bundibugyo no está autorizada, aunque hay datos preclínicos sugerentes.</p>
            <p style="font-size:11px;color:#5a6e8c"><em>Fuentes: FDA · EMA · CEPI press release post-PHEIC · Fierce Biotech</em></p>
          </div>
        </div>

        <div class="x-faqi">
          <div class="x-faqq">¿Cuánto dura el periodo de incubación?</div>
          <div class="x-faqa">
            <p>Entre <b>2 y 21 días</b>, con mediana de 8 a 10 días. La cuarentena estándar bajo Reglamento Sanitario Internacional es de <b>21 días</b> desde la última exposición conocida.</p>
            <p>El brote actual fue detectado tarde: el caso índice de Mongbwalu apareció el 5 de mayo, pero el sistema de salud aplicó inicialmente test rápido para cepa Zaire (negativo). Tomó nueve días aplicar test específico de Bundibugyo y confirmar el patógeno (14 de mayo). El sesgo de detección por cepa explica por qué el brote pudo circular semanas sin identificarse.</p>
            <p style="font-size:11px;color:#5a6e8c"><em>Fuentes: OMS DON602 · INRB Kinshasa · CDC HAN 00530</em></p>
          </div>
        </div>

        <div class="x-faqi">
          <div class="x-faqq">¿Por qué la declaración de emergencia internacional fue tan rápida?</div>
          <div class="x-faqa">
            <p>La OMS declaró PHEIC el 17 de mayo de 2026, <b>trece días después</b> de la alerta inicial. Es la activación más rápida del Reglamento Sanitario Internacional 2005 jamás registrada. Para comparar: H1N1 2009 tardó 83 días, COVID-19 tardó 30 días, ébola Kivu 2018-2019 tardó once meses.</p>
            <p>La velocidad no responde a una mutación viral inédita —Bundibugyo es un subtipo conocido desde 2007— sino a la <b>activación de un andamio institucional preexistente</b>: protocolos de notificación afinados tras COVID, comités de emergencia con cuórum permanente, stockpiles farmacéuticos preposicionados, financiamiento CEPI/BARDA ya canalizado. Estructura ya montada para funcionar así.</p>
            <p>La <b>columna del 20 de mayo</b> (<em>Capitalismo de preparación pandémica</em>) analiza el patrón completo. La doctrina del shock de Naomi Klein no necesita teorías de conspiración: basta con notar que las soluciones esperan, listas, antes de que aparezca el problema.</p>
            <p style="font-size:11px;color:#5a6e8c"><em>Fuentes: OMS Director-General statement 17-may-2026 · GAO Pandemic Preparedness Reports · Klein 2007</em></p>
          </div>
        </div>
      </div>`,
  "comparativo": `<div class="x-intro">
        Tres gráficos por brote, comparativos a primera vista: <b>cifras al cierre del 9 de agosto de 2026</b>, <b>velocidad de respuesta institucional</b> y <b>arquitectura farmacéutica activada</b>. Visualizaciones en SVG nativo, sin librerías externas. <b>Las cifras se actualizan al ritmo de los boletines oficiales.</b>
      </div>

      <div class="x-cmpg">
        <!-- ====== Gráfico 1: Cifras crudas ====== -->
        <div class="x-cmp">
          <h3 class="x-cmpt">1 · Cifras crudas al 9-ago-2026</h3>
          <div class="x-cmps">Casos confirmados, muertes confirmadas y letalidad cruda por brote — escala independiente por métrica</div>
          <svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" class="x-cmpsvg" role="img" aria-label="Comparativo de cifras crudas al 9 de agosto de 2026">
            <!-- Encabezados de las tres métricas (zona segura arriba) -->
            <text x="55" y="22" font-size="10" fill="#5a6e8c" font-weight="700" text-anchor="middle" letter-spacing="0.06em">CONFIRMADOS</text>
            <text x="160" y="22" font-size="10" fill="#5a6e8c" font-weight="700" text-anchor="middle" letter-spacing="0.06em">MUERTES CONF.</text>
            <text x="265" y="22" font-size="10" fill="#5a6e8c" font-weight="700" text-anchor="middle" letter-spacing="0.06em">LETALIDAD</text>

            <!-- Eje base -->
            <line x1="15" y1="190" x2="305" y2="190" stroke="#d3dbe4" stroke-width="1"/>

            <!-- ===== Grupo 1: CONFIRMADOS (escala: ébola al tope = 140 px) ===== -->
            <!-- Hant 13 (cierre) → forzado a 8 px para visibilidad -->
            <rect x="32" y="182" width="22" height="8" fill="#2a8cd8"/>
            <text x="43" y="175" font-size="11" fill="#2a8cd8" text-anchor="middle" font-weight="700">13</text>
            <text x="43" y="208" font-size="9" fill="#2a8cd8" text-anchor="middle">Hant</text>
            <!-- Ébola 4401 (RDC 4381 + Uganda 20) → 140 px -->
            <rect x="66" y="50" width="22" height="140" fill="#c44536"/>
            <text x="77" y="43" font-size="11" fill="#c44536" text-anchor="middle" font-weight="700">4401</text>
            <text x="77" y="208" font-size="9" fill="#c44536" text-anchor="middle">Ébola</text>

            <!-- Separador 1-2 -->
            <line x1="110" y1="45" x2="110" y2="195" stroke="#e7ecf1" stroke-dasharray="2,3"/>

            <!-- ===== Grupo 2: MUERTES CONFIRMADAS (escala: ébola al tope = 140 px) ===== -->
            <!-- Hant 3 → 2 px, mínimo visual 8 px -->
            <rect x="137" y="182" width="22" height="8" fill="#8f2b20"/>
            <text x="148" y="175" font-size="11" fill="#8f2b20" text-anchor="middle" font-weight="700">3</text>
            <text x="148" y="208" font-size="9" fill="#2a8cd8" text-anchor="middle">Hant</text>
            <!-- Ébola 2013 (RDC 2011 + Uganda 2) → 140 px -->
            <rect x="171" y="50" width="22" height="140" fill="#8f2b20"/>
            <text x="182" y="43" font-size="11" fill="#8f2b20" text-anchor="middle" font-weight="700">2013</text>
            <text x="182" y="208" font-size="9" fill="#c44536" text-anchor="middle">Ébola</text>

            <!-- Separador 2-3 -->
            <line x1="215" y1="45" x2="215" y2="195" stroke="#e7ecf1" stroke-dasharray="2,3"/>

            <!-- ===== Grupo 3: LETALIDAD CONFIRMADA (escala: 50% = 140 px) ===== -->
            <!-- Hant 23% (cierre 3/13, OMS) → 64 px -->
            <rect x="242" y="126" width="22" height="64" fill="#2a8cd8"/>
            <text x="253" y="119" font-size="11" fill="#2a8cd8" text-anchor="middle" font-weight="700">23%</text>
            <text x="253" y="208" font-size="9" fill="#2a8cd8" text-anchor="middle">Hant</text>
            <!-- Ébola 46% (2011/4381, ECDC 9-ago) → 129 px -->
            <rect x="276" y="61" width="22" height="129" fill="#c44536"/>
            <text x="287" y="54" font-size="11" fill="#c44536" text-anchor="middle" font-weight="700">46%</text>
            <text x="287" y="208" font-size="9" fill="#c44536" text-anchor="middle">Ébola</text>

            <!-- Leyenda al pie -->
            <g font-size="8" fill="#5a6e8c">
              <rect x="60" y="222" width="10" height="8" fill="#2a8cd8"/><text x="75" y="229">Hantavirus Andes</text>
              <rect x="170" y="222" width="10" height="8" fill="#c44536"/><text x="185" y="229">Ébola Bundibugyo</text>
            </g>
          </svg>
          <div class="x-cmpp">
            <b>Hantavirus:</b> cluster cerrado, <b>declarado terminado por la OMS el 2-jul</b> (final: 13 casos, 3 muertes, CFR 23%; MV Hondius reanudó servicio el 13-jun). <b>Ébola Bundibugyo:</b> brote fuera de control. <b>Corte oficial OMS (DON614, 30-jul): 3,626 casos + 1,589 muertes, CFR 44%;</b> pero el dato más fresco (ECDC y boletín RDC, 6-9 ago) ya va en <b>~4,381 casos y 2,011 muertes, CFR ~46%</b>; Ituri de epicentro con 3,636 casos y 1,551 muertes; 53 de 140 zonas de salud en 5 provincias. <b>Uganda: brote declarado terminado el 28-jul</b> (final 20/2). <b>Segundo brote de ébola más grande de la historia (el mayor jamás en la RDC) y el de crecimiento más rápido registrado:</b> +77% casos y +95% muertes en tres semanas, con más del 70% de los casos nuevos surgiendo de la comunidad, no de contactos rastreados. La letalidad del ébola (~46%) supera el techo histórico de Bundibugyo (25-40%), muy por encima del hantavirus (23%). La 2ª reunión del Comité de Emergencia de la OMS (revisión del PHEIC) es el 18-ago. <b>Corredor:</b> Argentina, único clasificado con la cepa Andes de transmisión persona-persona, ganó su semifinal en Atlanta (15-jul) y perdió la final 1-0 ante España en Nueva York (19-jul); su tramo más profundo pasó por las dos sedes con eventos de "patógeno equivocado" (cribado de ébola en Atlanta; brote de legionela en NYC, terminado el 31-jul con 92 casos y 7 muertes).<br/>
            <em>Fuentes: OMS DON614 (30-jul) · ECDC (9-ago) · boletín RDC + Africa CDC · U.S. Dept. of State · SSA México · Oceanwide Expeditions</em>
          </div>
        </div>

        <!-- ====== Gráfico 2: Velocidad institucional ====== -->
        <div class="x-cmp">
          <h3 class="x-cmpt">2 · Velocidad de respuesta institucional</h3>
          <div class="x-cmps">Días entre alerta inicial y declaración de Emergencia Internacional (PHEIC) — escala raíz cuadrada</div>
          <svg viewBox="0 0 340 210" xmlns="http://www.w3.org/2000/svg" class="x-cmpsvg" role="img" aria-label="Velocidad de respuesta PHEIC comparada con brotes históricos">
            <!-- Filas horizontales con etiquetas a la izquierda -->
            <g font-size="9" fill="#5a6e8c" text-anchor="end">
              <text x="125" y="32">Ébola Kivu 2018</text>
              <text x="125" y="57">H1N1 2009</text>
              <text x="125" y="82">COVID-19 2020</text>
              <text x="125" y="107">Hantavirus 2026*</text>
              <text x="125" y="132">Ébola Bundibugyo 2026</text>
            </g>

            <!-- Barras con ESCALA RAÍZ CUADRADA para que las cortas sean legibles
                 sqrt(330)≈18.17 → ×11 = 200 px (máx)
                 sqrt(83)≈9.11  → 100 px
                 sqrt(30)≈5.48  → 60 px
                 sqrt(13)≈3.61  → 40 px (vs 8 px en lineal — ahora SÍ se ve) -->

            <!-- 330 días (Ébola Kivu) -->
            <rect x="130" y="24" width="200" height="16" fill="#8aa0b4" rx="2"/>
            <text x="324" y="36" font-size="10" fill="#fff" font-weight="700" text-anchor="end">330 d</text>

            <!-- 83 días (H1N1) -->
            <rect x="130" y="49" width="100" height="16" fill="#8aa0b4" rx="2"/>
            <text x="224" y="61" font-size="10" fill="#fff" font-weight="700" text-anchor="end">83 d</text>

            <!-- 30 días (COVID-19) -->
            <rect x="130" y="74" width="60" height="16" fill="#8aa0b4" rx="2"/>
            <text x="184" y="86" font-size="10" fill="#fff" font-weight="700" text-anchor="end">30 d</text>

            <!-- Hantavirus 2026: sin PHEIC (marca punteada, no barra) -->
            <line x1="130" y1="99" x2="175" y2="99" stroke="#2a8cd8" stroke-width="3" stroke-dasharray="5,3"/>
            <text x="180" y="103" font-size="9" fill="#2a8cd8" font-weight="700">sin PHEIC · sólo alerta</text>

            <!-- 13 días (Ébola Bundibugyo) — récord -->
            <rect x="130" y="124" width="40" height="16" fill="#c44536" rx="2"/>
            <text x="164" y="136" font-size="10" fill="#fff" font-weight="700" text-anchor="end">13 d</text>
            <text x="175" y="136" font-size="9" fill="#c44536" font-weight="700">· récord absoluto del RSI 2005</text>

            <!-- Notas al pie -->
            <text x="170" y="170" font-size="8" fill="#5a6e8c" text-anchor="middle" font-style="italic">* el cluster del MV Hondius mantuvo alerta sub-PHEIC pese a 11 casos y 3 muertes</text>
            <text x="170" y="188" font-size="8" fill="#8aa0b4" text-anchor="middle" font-style="italic">Escala raíz cuadrada — diseñada para hacer visibles las respuestas más rápidas</text>
            <text x="170" y="202" font-size="7" fill="#8aa0b4" text-anchor="middle">(en escala lineal, la barra de 13 d mediría sólo 4 % del ancho)</text>
          </svg>
          <div class="x-cmpp">
            La PHEIC del Ébola Bundibugyo se declaró en <b>13 días</b>: récord absoluto desde la entrada en vigor del Reglamento Sanitario Internacional 2005. Para el hantavirus (con cluster confirmado en crucero) la OMS mantuvo alerta sin PHEIC. <b>La asimetría en velocidad no responde al patógeno, sino al andamio institucional ya activo.</b> Confirmación operativa al 7-jun: el Charité de Berlín da de alta a Peter Stafford tras 17 días de tratamiento con MBP134 (paralelismo Brantly 2014 → Stafford 2026), CEPI activa fast-track de 62 millones de dólares para tres vacunas Bundibugyo el 1-jun, y México despliega operativo de bioseguridad el 6-jun a cinco días del Mundial 2026.<br/>
            <em>Fuentes: OMS IHR archive · GAO Pandemic Reports · WHO Statements 2009, 2020, 2026 · Charité press 6-jun · CEPI press 1-jun · El Imparcial 6-jun</em>
          </div>
        </div>

        <!-- ====== Gráfico 3: Arquitectura farmacéutica ====== -->
        <div class="x-cmp">
          <h3 class="x-cmpt">3 · Arquitectura farmacéutica activada</h3>
          <div class="x-cmps">Estado de la pipeline de vacunas e infraestructura financiera por brote — tabla comparativa</div>
          <svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg" class="x-cmpsvg" role="img" aria-label="Arquitectura farmacéutica comparada entre los dos brotes">
            <!-- Encabezados de columna con chips coloreadas por brote -->
            <rect x="180" y="8" width="95" height="22" fill="#2a8cd8" rx="3"/>
            <text x="228" y="23" font-size="10" fill="#fff" font-weight="700" text-anchor="middle" letter-spacing="0.06em">HANTAVIRUS</text>

            <rect x="320" y="8" width="95" height="22" fill="#c44536" rx="3"/>
            <text x="368" y="23" font-size="10" fill="#fff" font-weight="700" text-anchor="middle" letter-spacing="0.06em">ÉBOLA</text>

            <!-- Separador encabezado/filas -->
            <line x1="10" y1="38" x2="410" y2="38" stroke="#d3dbe4" stroke-width="1"/>

            <!-- ===== Fila 1: Vacuna aprobada ===== -->
            <text x="10" y="62" font-size="11" fill="#02101e" font-weight="600">Vacuna aprobada</text>
            <rect x="180" y="50" width="95" height="20" fill="#f7e3e0" stroke="#c44536" stroke-width="1" rx="3"/>
            <text x="228" y="64" font-size="10" fill="#8f2b20" text-anchor="middle" font-weight="700">No</text>
            <rect x="320" y="50" width="95" height="20" fill="#faf0d6" stroke="#d4a017" stroke-width="1" rx="3"/>
            <text x="368" y="64" font-size="10" fill="#a87c10" text-anchor="middle" font-weight="700">Sólo Zaire</text>

            <!-- ===== Fila 2: Fase clínica avanzada ===== -->
            <text x="10" y="100" font-size="11" fill="#02101e" font-weight="600">Fase clínica avanzada</text>
            <rect x="180" y="88" width="95" height="20" fill="#faf0d6" stroke="#d4a017" stroke-width="1" rx="3"/>
            <text x="228" y="102" font-size="10" fill="#a87c10" text-anchor="middle" font-weight="700">Fase 1</text>
            <rect x="320" y="88" width="95" height="20" fill="#e6f6ec" stroke="#3fbf6f" stroke-width="1" rx="3"/>
            <text x="368" y="102" font-size="10" fill="#2d8c3c" text-anchor="middle" font-weight="700">Fase 3</text>

            <!-- ===== Fila 3: Financiamiento CEPI ===== -->
            <text x="10" y="138" font-size="11" fill="#02101e" font-weight="600">Financiamiento CEPI activo</text>
            <rect x="180" y="126" width="95" height="20" fill="#e6f6ec" stroke="#3fbf6f" stroke-width="1" rx="3"/>
            <text x="228" y="140" font-size="10" fill="#2d8c3c" text-anchor="middle" font-weight="700">Sí</text>
            <rect x="320" y="126" width="95" height="20" fill="#e6f6ec" stroke="#3fbf6f" stroke-width="1" rx="3"/>
            <text x="368" y="140" font-size="10" fill="#2d8c3c" text-anchor="middle" font-weight="700">Sí</text>

            <!-- ===== Fila 4: Stockpile preposicionado ===== -->
            <text x="10" y="176" font-size="11" fill="#02101e" font-weight="600">Stockpile preposicionado</text>
            <rect x="180" y="164" width="95" height="20" fill="#f7e3e0" stroke="#c44536" stroke-width="1" rx="3"/>
            <text x="228" y="178" font-size="10" fill="#8f2b20" text-anchor="middle" font-weight="700">No</text>
            <rect x="320" y="164" width="95" height="20" fill="#e6f6ec" stroke="#3fbf6f" stroke-width="1" rx="3"/>
            <text x="368" y="178" font-size="10" fill="#2d8c3c" text-anchor="middle" font-weight="700">Sí</text>

            <!-- ===== Fila 5: Antiviral específico ===== -->
            <text x="10" y="214" font-size="11" fill="#02101e" font-weight="600">Antiviral específico</text>
            <rect x="180" y="202" width="95" height="20" fill="#f7e3e0" stroke="#c44536" stroke-width="1" rx="3"/>
            <text x="228" y="216" font-size="10" fill="#8f2b20" text-anchor="middle" font-weight="700">No</text>
            <rect x="320" y="202" width="95" height="20" fill="#faf0d6" stroke="#d4a017" stroke-width="1" rx="3"/>
            <text x="368" y="216" font-size="9" fill="#a87c10" text-anchor="middle" font-weight="700">MBP134 uso comp.</text>

            <!-- ===== Fila 6: 100 Day Mission ===== -->
            <text x="10" y="252" font-size="11" fill="#02101e" font-weight="600">100 Day Mission activado</text>
            <rect x="180" y="240" width="95" height="20" fill="#f7e3e0" stroke="#c44536" stroke-width="1" rx="3"/>
            <text x="228" y="254" font-size="10" fill="#8f2b20" text-anchor="middle" font-weight="700">No</text>
            <rect x="320" y="240" width="95" height="20" fill="#e6f6ec" stroke="#3fbf6f" stroke-width="1" rx="3"/>
            <text x="368" y="254" font-size="10" fill="#2d8c3c" text-anchor="middle" font-weight="700">Sí</text>

            <!-- Separador pie -->
            <line x1="10" y1="270" x2="410" y2="270" stroke="#e7ecf1" stroke-width="1"/>

            <!-- Leyenda al pie -->
            <rect x="10" y="280" width="14" height="12" fill="#e6f6ec" stroke="#3fbf6f" stroke-width="1" rx="2"/>
            <text x="30" y="290" font-size="9" fill="#2d8c3c" font-weight="600">Activo</text>

            <rect x="115" y="280" width="14" height="12" fill="#faf0d6" stroke="#d4a017" stroke-width="1" rx="2"/>
            <text x="135" y="290" font-size="9" fill="#a87c10" font-weight="600">Parcial</text>

            <rect x="225" y="280" width="14" height="12" fill="#f7e3e0" stroke="#c44536" stroke-width="1" rx="2"/>
            <text x="245" y="290" font-size="9" fill="#8f2b20" font-weight="600">Ausente</text>
          </svg>
          <div class="x-cmpp">
            <b>La asimetría operativa</b> entre los dos brotes es estructural, no clínica. Para Ébola hay vacuna comercial (parcial), tres candidatos en fase 3, stockpile listo y 100 Day Mission activado en 24 horas. Para hantavirus —con letalidad mayor— solo hay candidatas en Fase 1 sin financiamiento sostenido. <b>La preparación farmacéutica selecciona qué brotes se vuelven gestionables y cuáles permanecen como riesgo abierto.</b><br/>
            <em>Fuentes: FDA · EMA · CEPI portfolio · USAMRIID · ClinicalTrials.gov</em>
          </div>
        </div>
      </div>`,
  "glosario": `<div class="x-intro">
        Glosario del expediente: definiciones cortas de los términos, organismos, cepas, conceptos académicos y eventos que aparecen en el mapa, los popups, las columnas y el guion radial. <b>Cada término nuevo se suma aquí</b> conforme avanza el expediente — es la referencia de cabecera para no perderse en los acrónimos.
      </div>

      <div class="x-glosgrupo">Organismos sanitarios</div>
      <ul class="x-glos">
        <li><b>OMS</b> Organización Mundial de la Salud. Sede en Ginebra. Brazo de la ONU para coordinación de salud global. Fundada en 1948. Estados Unidos abandonó formalmente la OMS el 22 de enero de 2026; Argentina, el 17 de marzo de 2026.</li>
        <li><b>OPS</b> Organización Panamericana de la Salud. Sede en Washington DC. Brazo regional de la OMS para las Américas. Fundada en 1902, es el organismo de salud pública internacional más antiguo del mundo. Argentina permanece como miembro de la OPS pese a su salida de la OMS — mantiene acceso a cooperación técnica continental.</li>
        <li><b>CDC</b> Centers for Disease Control and Prevention. Agencia federal estadounidense de salud pública. Sede en Atlanta.</li>
        <li><b>ECDC</b> European Centre for Disease Prevention and Control. Equivalente europeo del CDC. Sede en Estocolmo.</li>
        <li><b>RIVM</b> Rijksinstituut voor Volksgezondheid en Milieu. Instituto Nacional de Salud Pública y Medio Ambiente de los Países Bajos. Coordinó la respuesta sanitaria al atraque del MV Hondius en Rotterdam.</li>
        <li><b>CONAVE</b> Comité Nacional para la Vigilancia Epidemiológica de México. Órgano técnico de la Secretaría de Salud. Emite avisos y alertas sanitarias nacionales.</li>
        <li><b>USAMRIID</b> US Army Medical Research Institute of Infectious Diseases. Sede en Frederick, Maryland. Investiga vacunas y contramedidas contra patógenos de alto riesgo. Operador del programa de vacuna DNA contra Andes (Fase 1 completada).</li>
        <li><b>BARDA</b> Biomedical Advanced Research and Development Authority. Agencia federal estadounidense bajo HHS/ASPR. Financia desarrollo de contramedidas médicas para emergencias.</li>
        <li><b>NIH</b> National Institutes of Health. Principal agencia federal estadounidense de financiamiento biomédico. Sede en Bethesda, Maryland.</li>
        <li><b>CEPI</b> Coalition for Epidemic Preparedness Innovations. Fundada en Davos en 2017. Sede en Oslo. Coalición público-privada que financia desarrollo de vacunas contra patógenos emergentes. Programa estrella: "100 Day Mission".</li>
        <li><b>GAVI</b> Global Alliance for Vaccines and Immunisation. Sede en Ginebra. Alianza público-privada (Estados, OMS, UNICEF, Banco Mundial, Fundación Gates) que compra y distribuye vacunas a países de ingreso bajo y medio. Custodia el <em>stockpile</em> global de Ervebo (cepa Zaire).</li>
        <li><b>INRB</b> Institut National de Recherche Biomédicale. Laboratorio nacional de referencia de la República Democrática del Congo, con sede en Kinshasa. Confirmó la cepa Bundibugyo del brote 2026 mediante secuenciación específica tras dos rondas iniciales negativas para Zaire.</li>
        <li><b>MSF</b> Médicos Sin Fronteras / <em>Médecins Sans Frontières</em>. Organización humanitaria médica fundada en 1971. Sede internacional en Ginebra. Su operación en Nord-Kivu negocia acceso humanitario directamente con el M23, lo que en la práctica le otorga al grupo armado estatus de interlocutor sanitario.</li>
      </ul>

      <div class="x-glosgrupo">Enfermedad y agente</div>
      <ul class="x-glos">
        <li><b>Hantavirus</b> Género de virus transmitidos típicamente por roedores. Múltiples cepas distintas, cada una con su geografía endémica y perfil clínico propio.</li>
        <li><b>Virus Andes (ANDV)</b> Cepa endémica de Argentina y Chile. <b>Única cepa con transmisión humano-a-humano documentada</b> por contacto cercano prolongado. Letalidad cercana al 30%. Es la cepa del brote MV Hondius. En 2026 ambos países cerraron/corren muy por encima del promedio histórico: Argentina cerró su temporada 2025-26 en 33.3% (récord desde 2018) y Chile va en ~39% (46/18 al 29-jul, con alerta sanitaria nacional).</li>
        <li><b>Sin Nombre virus (SNV)</b> Cepa endémica de América del Norte, principalmente el oeste de Estados Unidos. Reservorio: <em>Peromyscus maniculatus</em> (ratón ciervo). <b>Sin transmisión humano-a-humano documentada</b>. Transmisión por contacto con excrementos, orina o material de anidamiento. EE.UU. registra 20-40 casos anuales. Es <b>cepa distinta del virus Andes</b> — el caso de Colorado del 19 de mayo de 2026 no está epidemiológicamente vinculado al cluster del MV Hondius.</li>
        <li><b>Cepa Choclo (CHOV)</b> Cepa endémica de Panamá desde 1999 (Los Santos, Herrera, Veraguas, Coclé). Reservorio: <em>Oligoryzomys costaricensis</em>. Letalidad baja, muchas infecciones asintomáticas. Sin transmisión interpersonal documentada.</li>
        <li><b>MV Hondius</b> Crucero de expedición de bandera neerlandesa, operado por Oceanwide Expeditions. Inició su travesía 2026 zarpando de Ushuaia el 1 de abril. Atracó en Rotterdam el 18 de mayo. Origen del brote internacional de hantavirus 2026.</li>
        <li><b>ECMO</b> Oxigenación por membrana extracorpórea. "Pulmón artificial" para casos de fallo respiratorio severo. Aplicado a la paciente francesa del brote en el Hospital Bichat de París.</li>
        <li><b>Cepa Bundibugyo (BDBV)</b> Una de las seis especies del <em>orthoebolavirus</em>. Primer brote documentado: Uganda, 2007. Letalidad histórica entre 25 y 40 %. Sin vacuna aprobada hasta enero de 2026, cuando CEPI financió a Moderna+Oxford. Cuatro meses después, brote en RDC + Uganda → emergencia internacional declarada en 13 días (récord absoluto).</li>
      </ul>

      <div class="x-glosgrupo">Conceptos académicos del expediente</div>
      <ul class="x-glos">
        <li><b>Doctrina del shock</b> (Naomi Klein, 2007) — La crisis aguda como condición de posibilidad para reformas económicas que en tiempos normales encontrarían resistencia democrática. Concepto eje de las columnas del 8 y 13 de mayo.</li>
        <li><b>24/7</b> (Jonathan Crary, 2013) — Tesis sobre el capitalismo contemporáneo que busca eliminar los tiempos muertos del consumo y normalizar el flujo continuo de atención. Concepto eje de la columna del 14 de mayo.</li>
        <li><b>Frontstage / backstage</b> (Erving Goffman, 1959) — El escenario público donde las figuras autorizadas representan un acontecimiento, frente a la trastienda operativa donde se afina la utilería. Concepto eje de la columna del 15 de mayo.</li>
        <li><b>Sincronicidad</b> (Carl Gustav Jung, 1952) — Afloración simultánea, en lugares no coordinados, de un mismo símbolo activo en el inconsciente colectivo. No es causalidad ni coincidencia neutra. Concepto auxiliar en la columna del 15 de mayo.</li>
        <li><b>Decisionismo schmittiano</b> (Carl Schmitt, 1932) — "Soberano es quien decide sobre la excepción". El poder se mide por la capacidad de desconectar el sistema (suspender una norma, salirse de un tratado, abandonar un organismo). Concepto eje de la columna del 18 de mayo.</li>
        <li><b>Spatial fix / ajuste espacial</b> (David Harvey, 2003) — El sistema hegemónico en crisis se rescata reordenando el espacio geográfico — abriendo territorios, instalando bases, controlando corredores. El imperio se mantiene mediante geografía. Concepto eje de la columna del 19 de mayo.</li>
        <li><b>Preparedness</b> (Andrew Lakoff, 2017) — Racionalidad de gobierno descrita en <em>Unprepared: Global Health in a Time of Emergency</em>. Convierte la incertidumbre futura en oportunidad de inversión perpetua. La pandemia siguiente no es contingencia: es premisa estructural. Concepto eje de la columna del 20 de mayo.</li>
        <li><b>Acumulación por desposesión</b> (David Harvey, 2003) — Extensión de la lógica de mercado a bienes que antes eran comunes (agua, tierras, semillas, conocimiento). Aplicado al capitalismo sanitario, el bien común que se cerca es el miedo colectivo. Concepto auxiliar de la columna del 20 de mayo.</li>
        <li><b>Capitalismo de preparación pandémica</b> Concepto editorial del expediente que articula tres aportes académicos: la <em>preparedness</em> de Lakoff, la <em>doctrina del shock</em> de Klein y la <em>acumulación por desposesión</em> de Harvey. Describe la arquitectura financiera global (BARDA + CEPI + farmacéuticas preferentes) que pre-financia respuestas antes de que las crisis ocurran. Concepto eje de la columna del 20 de mayo.</li>
        <li><b>Memento mori / vanitas</b> Tradición visual europea (especialmente pintura holandesa del siglo XVII) del recordatorio de la muerte: tablero de ajedrez, calavera, reloj de arena, vela apagada. Referenciada en la lectura de la portada de <em>The Economist</em> de diciembre de 2025.</li>
      </ul>

      <div class="x-glosgrupo">Eventos y normas específicas</div>
      <ul class="x-glos">
        <li><b>Decreto 697/2025</b> Instrumento jurídico mediante el cual el gobierno de Milei autorizó el ingreso de tropas estadounidenses a las bases navales de Mar del Plata, Ushuaia y Puerto Belgrano en octubre de 2025, sin pasar por el Congreso argentino.</li>
        <li><b>Ejercicio TRIDENT</b> Maniobras militares conjuntas EE.UU.-Argentina realizadas del 20 de octubre al 15 de noviembre de 2025 al amparo del Decreto 697/2025.</li>
        <li><b>Pasaje de Drake</b> Estrecho marítimo entre el extremo sur sudamericano (Tierra del Fuego, Cabo de Hornos) y la Antártida. Punto estratégico clave de tránsito naval e investigación polar, en disputa silenciosa entre EE.UU. y China desde hace más de una década.</li>
        <li><b>CPAC</b> Conservative Political Action Conference. Encuentro anual de la derecha política estadounidense organizada. Plataforma de proyección internacional del trumpismo. Milei pronunció ahí su discurso de "alineamiento con EE.UU. e Israel" en febrero de 2025.</li>
        <li><b>Mar-a-Lago</b> Residencia y centro político de Donald Trump en Palm Beach, Florida. Sede de facto de sus reuniones diplomáticas no oficiales antes y durante su segundo mandato.</li>
        <li><b>Convenio de Viena</b> Tratado internacional firmado en 1969 que regula la entrada y salida de Estados de organismos multilaterales. Establece plazo de un año entre la notificación formal y la salida efectiva. Es el marco bajo el cual se concretaron las salidas de Argentina y EE.UU. de la OMS.</li>
        <li><b>MetLife Stadium</b> Estadio en East Rutherford, Nueva Jersey. Sede de la final del Mundial 2026 (19 de julio).</li>
        <li><b>Mundial 2026</b> Primer Mundial de Futbol del nuevo formato FIFA: 48 selecciones, 104 partidos, 39 días. Distribución asimétrica: 78 partidos en EE.UU. (75% del torneo), 13 en México, 13 en Canadá.</li>
        <li><b>PHEIC / Emergencia Internacional</b> <em>Public Health Emergency of International Concern</em>. Figura jurídica creada por el RSI 2005. Su declaración por la OMS obliga a los 196 Estados firmantes a activar protocolos automáticos (vigilancia, restricciones, compras). Bundibugyo 2026 fue declarada en 13 días — récord absoluto.</li>
        <li><b>RSI 2005</b> Reglamento Sanitario Internacional revisado tras el SARS de 2003. Aprobado por la 58ª Asamblea Mundial de la Salud en 2005, vigente desde 2007. Sin este documento, las pandemias modernas no tendrían palanca jurídica para movilizar reservas, contratos y restricciones.</li>
        <li><b>Operation Warp Speed</b> Programa estadounidense lanzado en mayo de 2020 para acelerar la respuesta a COVID-19. Total comprometido: USD 13 mil millones. Moderna recibió 955M de BARDA; Pfizer firmó compra anticipada por 1,950M. Modelo de pre-financiamiento a escala que se vuelve infraestructura permanente.</li>
        <li><b>M23</b> <em>Mouvement du 23 mars</em>. Grupo armado que opera en Nord-Kivu (este de la RDC), reactivado en 2021 y reforzado militarmente desde 2022. Las Naciones Unidas y EE.UU. han documentado el respaldo del gobierno de Ruanda. Controla Goma desde inicios de 2025. En el brote de 2026, el M23 se convierte en interlocutor de hecho de MSF y de otros operadores humanitarios.</li>
        <li><b>HAN 00530</b> Health Alert Network notice 00530, emitido por el CDC el 19 de mayo de 2026 con guía clínica para sospecha y manejo de ébola Bundibugyo. Operacionaliza el protocolo nacional de respuesta estadounidense tras la PHEIC del 17 de mayo.</li>
        <li><b>DON602</b> <em>Disease Outbreak News 602</em> de la OMS sobre el brote de ébola Bundibugyo en RDC + Uganda. Documento de referencia para los flujos transfronterizos del brote.</li>
        <li><b>100 Day Mission</b> Iniciativa de CEPI lanzada en el G7 (Reino Unido, 2021) que se propone tener una vacuna lista para ensayo clínico en cien días tras la identificación de un nuevo patógeno. El brote de Bundibugyo 2026 es la primera prueba operativa real del programa.</li>
        <li><b>Ervebo</b> Vacuna recombinante rVSV-ZEBOV de Merck contra ébola cepa Zaire. Aprobada por FDA y EMA en 2019. Pre-calificada por la OMS. Custodia del stockpile global a cargo de GAVI. <b>No autorizada para cepa Bundibugyo</b>; su despliegue en el brote 2026 es a título de mitigación regional, no de cobertura específica.</li>
      </ul>`,
  "vacunas": `<div class="x-bsel" data-context="vacunas">
        <button class="x-btab active" data-brote="hantavirus"><span class="x-bdot"></span>Hantavirus <span class="x-bcount">(5)</span></button>
        <button class="x-btab" data-brote="ebola"><span class="x-bdot"></span>Ébola <span class="x-bcount">(3)</span></button>
      </div>

      <div class="x-bcont" data-brote="hantavirus">
      <div class="x-intro">
        Apartado de seguimiento permanente del pipeline global de vacunas contra hantavirus. Se actualiza conforme aparecen anuncios oficiales. Cada entrada lleva atribución de fuente verificable; los datos no refrendados quedan marcados como <em>fuente pendiente</em>.
      </div>

      <div class="x-vstats">
        <div class="x-vstat">
          <div class="x-vstatn">5</div>
          <div class="x-vstatl">Programas activos</div>
        </div>
        <div class="x-vstat">
          <div class="x-vstatn">1</div>
          <div class="x-vstatl">Fase 1 completada</div>
        </div>
        <div class="x-vstat">
          <div class="x-vstatn">$2.5B</div>
          <div class="x-vstatl">USD pedidos · CEPI</div>
        </div>
      </div>

      <div class="x-vax">
        <div class="x-vaxt">Moderna + Korea University · Vaccine Innovation Center</div>
        <div class="x-vaxs">Cambridge, MA (EE.UU.) + Seúl, Corea del Sur</div>
        <div class="x-vaxr">
          <span class="x-vk">Producto</span><span class="x-vv">Vacuna mRNA contra <em>virus Andes</em> (ANDV)</span>
          <span class="x-vk">Fase</span><span class="x-vv"><span class="x-fase fase-1">Fase 1 reportada (may-2026)</span> — well-tolerated, sin señales serias de seguridad, respuestas de anticuerpos robustas en todos los niveles de dosis (datos anunciados durante el brote MV Hondius)</span>
          <span class="x-vk">Inicio</span><span class="x-vv">Programa <em>mRNA Access</em> · colaboración con Vaccine Innovation Center of Korea University desde 2023</span>
          <span class="x-vk">Líder</span><span class="x-vv">Prof. Park Man-sung · Korea University College of Medicine</span>
          <span class="x-vk">Financ.</span><span class="x-vv">Programa <em>mRNA Access</em> de Moderna · contribución privada con socio académico</span>
          <span class="x-vk">Impacto bursátil</span><span class="x-vv">Stock Moderna (MRNA): <b>USD 59.48 intradía el 11-may</b> con noticia hantavirus (cerró 52.39); cayó a <b>USD 45.98 el 1-jun</b> sin spike tras el paquete CEPI ébola; <b>repuntó +7.94% en un día al 11-jun, cerrando en USD 49.64</b>, coincidiendo con la inauguración del Mundial y el cruce de las 127 muertes ébola; <b>siguió subiendo hasta USD 63.26 al 18-jun (+27% sobre el 11-jun)</b>, con datos de Fase 1 contra hantavirus; y <b>saltó a ~USD 67-68 al 26-jun (+48% desde el 1-jun), esta vez con detonante de GRIPE:</b> el aval 9-0 del comité asesor de la FDA a su vacuna de influenza mRNA-1010, que revierte el previo "Refusal-to-File"; y <b>siguió a USD 79.76 al 2-jul (+146% en el año)</b>, con la decisión final de la FDA prevista al 5-ago y su Science Day de oncología (mieloma, ovario, CAR-T in vivo). El brote dejó de ser el motor; manda el producto comercial (gripe y oncología). Tras el pico bajó a ~USD 54 (24-jul) y ronda <b>~USD 60.57 al 11-ago (~+90% YTD)</b>. El <b>Q2 (reportado 31-jul): ingresos USD 145M, pérdida neta USD 782M, caja USD 6,900M</b>. El <b>5-ago la FDA aprobó su vacuna de gripe mRNA (mFLUSIVA)</b>, la primera de ARNm en EE.UU., pero fue "sell-the-news" (eficacia 26.6%; aprobación acelerada para 65+). La acción se mueve por gripe y oncología, no por el brote: subió ~90% en el año mientras el ébola pasaba de cientos a más de 2,000 muertes. Consenso analista: HOLD. <b>Compra institucional significativa en 2026</b> (Morgan Stanley + grandes asset managers); insiders en ventas pequeñas rutinarias, sin compras grandes. Top holders: Vanguard, BlackRock, FMR, Baillie Gifford, State Street. Fuente: Yahoo Finance, Nasdaq institutional holdings, Fintel, Macrotrends.</span>
          <span class="x-vk">Fuente</span><span class="x-vv x-vf">Korea Biomedical Review (feb-2025) · Moderna press release (may-2026) · The Microbiologist · EurekAlert · Investing.com (may-2026)</span>
        </div>
      </div>

      <div class="x-vax">
        <div class="x-vaxt">USAMRIID · Hooper Lab</div>
        <div class="x-vaxs">Frederick, Maryland (EE.UU.)</div>
        <div class="x-vaxr">
          <span class="x-vk">Producto</span><span class="x-vv">Vacuna DNA contra <em>virus Andes</em> · codifica glicoproteínas Gn/Gc del envoltorio</span>
          <span class="x-vk">Fase</span><span class="x-vv"><span class="x-fase fase-1">Fase 1 completada</span> — sin Fase 3 factible aún (cuello de botella ético-logístico)</span>
          <span class="x-vk">Inicio</span><span class="x-vv">Ensayo clínico registrado como <b>NCT03682107</b> · publicado 2023-2024</span>
          <span class="x-vk">Diseño</span><span class="x-vv">Doble-ciego, dose-escalation. 48 adultos sanos randomizados a placebo o vacuna. Entrega vía <em>PharmaJet Stratis</em> (inyección sin aguja, <em>needle-free jet</em>). Cohortes de 2 mg y 4 mg, 3-4 dosis.</span>
          <span class="x-vk">Resultado</span><span class="x-vv">Inmunogenicidad demostrada (anticuerpos neutralizantes vía PsVNA50). 98% reportó algún evento adverso local (mayoría leves a moderados), 65% sistémico. Sin AEs serios relacionados.</span>
          <span class="x-vk">Líder</span><span class="x-vv">Dr. Jay W. Hooper · USAMRIID</span>
          <span class="x-vk">Financ.</span><span class="x-vv">Federal estadounidense (Departamento de Defensa)</span>
          <span class="x-vk">Fuente</span><span class="x-vv x-vf">ClinicalTrials.gov NCT03682107 · <em>Safety and Immunogenicity of an Andes Virus DNA Vaccine by Needle-Free Injection</em> (PMC10786244)</span>
        </div>
      </div>

      <div class="x-vax">
        <div class="x-vaxt">UTMB · Bukreyev Lab</div>
        <div class="x-vaxs">University of Texas Medical Branch, Galveston (EE.UU.)</div>
        <div class="x-vaxr">
          <span class="x-vk">Producto</span><span class="x-vv">Vacuna mRNA pan-hantavirus</span>
          <span class="x-vk">Fase</span><span class="x-vv"><span class="x-fase fase-pausa">En pausa</span> — recortes de financiamiento NIH (2024)</span>
          <span class="x-vk">Inicio</span><span class="x-vv">2024 · plataforma de I+D propia del laboratorio</span>
          <span class="x-vk">Líder</span><span class="x-vv">Alexander Bukreyev · UTMB</span>
          <span class="x-vk">Financ.</span><span class="x-vv">Federal estadounidense (NIH, recortado en 2024)</span>
          <span class="x-vk">Fuente</span><span class="x-vv x-vf">University of Texas Medical Branch · cobertura editorial del expediente</span>
        </div>
      </div>

      <div class="x-vax">
        <div class="x-vaxt">University of Bath</div>
        <div class="x-vaxs">Bath, Inglaterra (Reino Unido)</div>
        <div class="x-vaxr">
          <span class="x-vk">Producto</span><span class="x-vv">Vacuna termoestable contra <em>Hantaan virus</em> (cepa distinta del Andes)</span>
          <span class="x-vk">Fase</span><span class="x-vv"><span class="x-fase fase-pre">Preclínico</span></span>
          <span class="x-vk">Inicio</span><span class="x-vv">Contrato con gobierno británico</span>
          <span class="x-vk">Líder</span><span class="x-vv">Equipo de la Universidad de Bath</span>
          <span class="x-vk">Financ.</span><span class="x-vv">Gobierno del Reino Unido</span>
          <span class="x-vk">Fuente</span><span class="x-vv x-vf">University of Bath · fuente primaria pendiente de localizar</span>
        </div>
      </div>

      <div class="x-vax" style="border-left-color:#5b4b8a">
        <div class="x-vaxt">CEPI · 100 Day Mission + Andes antibody standard</div>
        <div class="x-vaxs">Coalition for Epidemic Preparedness Innovations · Oslo, Noruega</div>
        <div class="x-vaxr">
          <span class="x-vk">Producto</span><span class="x-vv">Programa marco para producir cualquier vacuna en 100 días desde el día cero de una pandemia. No es una vacuna en sí — es la <em>infraestructura</em> que prometen tener lista. <b>Adicional (mayo 2026):</b> CEPI desarrolla un <em>international antibody standard for Andes Hantavirus</em> para que distintos developers puedan testear candidatos contra un benchmark común.</span>
          <span class="x-vk">Fase</span><span class="x-vv"><span class="x-fase fase-pre">Programa</span> — sin vacuna específica ANDV</span>
          <span class="x-vk">Inicio</span><span class="x-vv">Programa anunciado tras COVID-19 · escalado público el 17 de mayo de 2026 usando el brote del MV Hondius como argumento</span>
          <span class="x-vk">Líder</span><span class="x-vv">Dr. Richard Hatchett · CEO de CEPI</span>
          <span class="x-vk">Financ.</span><span class="x-vv"><b>USD 2,500 millones</b> pedidos a sus socios en pieza de Hill Times (17-may-2026). Donante histórico: Bill &amp; Melinda Gates Foundation, Wellcome Trust, gobiernos de Reino Unido, Noruega, Alemania, Japón.</span>
          <span class="x-vk">Fuente</span><span class="x-vv x-vf">The Hill Times (17-may-2026) · CEPI — <em>What the Hantavirus outbreak tells us about preparing for Disease X</em> · <a href="https://cepi.net/what-hantavirus-outbreak-tells-us-about-preparing-disease-x" target="_blank" rel="noopener">CEPI statement</a></span>
        </div>
      </div>

      <div class="x-vax" style="border-left-color:#5b4b8a">
        <div class="x-vaxt">NIH · NIAID · Proyecto PROVIDENT (USD 70M, activo desde sept-2024)</div>
        <div class="x-vaxs">National Institute of Allergy and Infectious Diseases · Rockville, Maryland</div>
        <div class="x-vaxr">
          <span class="x-vk">Producto</span><span class="x-vv">"Prepositioning Optimized Strategies for Vaccines and Immunotherapeutics against Diverse Emerging Infectious Threats" — programa federal de <b>preposicionamiento de contramedidas</b> incluyendo hantaviruses dentro de su lista de patógenos prioritarios.</span>
          <span class="x-vk">Fase</span><span class="x-vv"><span class="x-fase fase-pre">Programa marco</span> — financiamiento preclínico distribuido a equipos académicos y biotechs</span>
          <span class="x-vk">Inicio</span><span class="x-vv"><b>Septiembre 2024 · vigencia hasta junio 2029.</b> El brote del MV Hondius (abril-mayo 2026) ocurrió <b>dentro de la ventana operativa</b> de PROVIDENT.</span>
          <span class="x-vk">Financ.</span><span class="x-vv">USD 70 millones de NIAID. Fondeó una serie de papers científicos sobre virus Andes publicados a finales de 2025 y principios de 2026 — el mapeo genómico se aceleró antes del brote internacional, no por reacción al mismo.</span>
          <span class="x-vk">Lectura</span><span class="x-vv"><b>Antecedente operativo, no respuesta:</b> el manual de preparación hantavirus ya estaba financiado, ejecutándose y publicando ciencia antes de que ningún caso aterrizara en Tenerife. Es el patrón Klein/Lakoff aplicado al ANDV.</span>
          <span class="x-vk">Fuente</span><span class="x-vv x-vf"><a href="https://jonfleetwood.substack.com/p/project-provident-niaid-launched" target="_blank" rel="noopener">Project PROVIDENT — NIAID launch documentation</a> · NIAID grants database</span>
        </div>
      </div>

      <div class="x-nota">
        <b>Honestidad de método.</b> Esta tabla solo registra programas con fuente verificable. Lo no refrendado queda como "fuente pendiente". Datos que circulan en redes pero no en prensa especializada o publicación científica (ej. supuesto programa Fase I de USAMRIID, ensilication de Bath) <b>no se publican</b> hasta que aparezca atribución sólida. El apartado se actualiza con cada anuncio oficial nuevo del pipeline.
      </div>
      </div>

      <div class="x-bcont" data-brote="ebola" style="display:none">
        <div class="x-intro">
          Pipeline de vacunas contra <b>Ébola</b>. A diferencia del hantavirus, hay una vacuna comercial aprobada — <b>Ervebo</b> de Merck — pero <b>únicamente para la cepa Zaire</b>. El brote actual en RDC/Uganda es por <b>cepa Bundibugyo</b>, para la que no hay vacuna autorizada todavía. CEPI y BARDA están acelerando candidatos. La misma asimetría aplica al tratamiento: el anticuerpo <b>Ebanga</b> (ansuvimab, Emergent BioSolutions) tiene un contrato BARDA de hasta <b>USD 704M firmado en 2023</b>, casi tres años antes del brote, pero está autorizado por la FDA solo para la cepa <b>Zaire</b>. La contramedida pre-posicionada apunta a la cepa equivocada.
        </div>
        <div class="x-vstats">
          <div class="x-vstat"><div class="x-vstatn">1</div><div class="x-vstatl">Aprobada (cepa Zaire)</div></div>
          <div class="x-vstat"><div class="x-vstatn">2</div><div class="x-vstatl">En desarrollo (Bundibugyo)</div></div>
          <div class="x-vstat"><div class="x-vstatn">PHEIC</div><div class="x-vstatl">17-may-2026</div></div>
        </div>

        <div class="x-vax" style="border-left-color:#c44536">
          <div class="x-vaxt">Merck · Ervebo (rVSV-ZEBOV)</div>
          <div class="x-vaxs">Kenilworth, Nueva Jersey (EE.UU.)</div>
          <div class="x-vaxr">
            <span class="x-vk">Producto</span><span class="x-vv">Vacuna viva atenuada recombinante de virus de estomatitis vesicular (rVSV) que expresa glicoproteína del virus Ébola Zaire</span>
            <span class="x-vk">Fase</span><span class="x-vv"><span class="x-fase fase-3">Aprobada</span> por FDA (2019), EMA (2019), Health Canada y OMS prequalified</span>
            <span class="x-vk">Cobertura</span><span class="x-vv"><b>Solo cepa Zaire</b>. No autorizada para Bundibugyo (la del brote actual de RDC/Uganda 2026).</span>
            <span class="x-vk">Eficacia</span><span class="x-vv">~100% en estudio de campo Guinea 2015 (post Ébola occidental). En uso operativo desde brote RDC 2018-2020.</span>
            <span class="x-vk">Estatus 2026</span><span class="x-vv">Reserva global GAVI/OMS distribuida vía cinturón de respuesta. Inicialmente NO indicada para el brote actual por incompatibilidad de cepa.</span>
            <span class="x-vk">Fuente</span><span class="x-vv x-vf">FDA · EMA · OMS prequalification · Henao-Restrepo et al., The Lancet 2017</span>
          </div>
        </div>

        <div class="x-vax" style="border-left-color:#c44536">
          <div class="x-vaxt">Johnson &amp; Johnson · Zabdeno + Mvabea (régimen heterólogo)</div>
          <div class="x-vaxs">New Brunswick, Nueva Jersey (EE.UU.)</div>
          <div class="x-vaxr">
            <span class="x-vk">Producto</span><span class="x-vv">Régimen de dos dosis: Zabdeno (Ad26.ZEBOV) + Mvabea (MVA-BN-Filo). Inmunidad de largo plazo.</span>
            <span class="x-vk">Fase</span><span class="x-vv"><span class="x-fase fase-3">Aprobada</span> EMA 2020 — autorización condicionada</span>
            <span class="x-vk">Cobertura</span><span class="x-vv">Principalmente cepa Zaire. <b>Posible inmunidad cruzada parcial</b> con otras especies de Orthoebolavirus (incluye Bundibugyo); pendiente de validación operativa para el brote actual.</span>
            <span class="x-vk">Estatus 2026</span><span class="x-vv">Stockpiles preposicionados. Bajo evaluación regulatoria para uso en brote Bundibugyo via mecanismos de emergencia.</span>
            <span class="x-vk">Fuente</span><span class="x-vv x-vf">EMA Conditional Marketing Authorisation 2020 · J&amp;J Press Releases</span>
          </div>
        </div>

        <div class="x-vax" style="border-left-color:#5b4b8a">
          <div class="x-vaxt">CEPI · Bundibugyo Acceleration Track · USD 62M fast-track (1-jun-2026)</div>
          <div class="x-vaxs">Coalition for Epidemic Preparedness Innovations · Oslo, Noruega</div>
          <div class="x-vaxr">
            <span class="x-vk">Producto</span><span class="x-vv">Pista acelerada del programa "100 Day Mission" — primera activación operativa para un brote real declarado PHEIC. Financia tres candidatos vacunales simultáneos contra <b>Bundibugyo virus</b>.</span>
            <span class="x-vk">Fase</span><span class="x-vv"><span class="x-fase fase-pre">Programa</span> — tres candidatos en preclínico / Fase 1</span>
            <span class="x-vk">Paquete 1-jun</span><span class="x-vv"><b>USD 62M total</b> distribuidos: USD 50M Moderna (mRNA Bundibugyo) + USD 8.6M Oxford + Serum Institute of India + USD 3.2M International AIDS Vaccine Initiative (IAVI).</span>
            <span class="x-vk">Inicio</span><span class="x-vv">Activación pública 17-may post-PHEIC. Compromiso financiero detallado anunciado 1-jun.</span>
            <span class="x-vk">Líder</span><span class="x-vv">Dr. Richard Hatchett · CEO de CEPI</span>
            <span class="x-vk">Financ. previo</span><span class="x-vv">USD 2,500M pedidos en mayo. <b>Refuerzo 19-may:</b> UE €73.7M + Singapur USD 12M.</span>
            <span class="x-vk">Fuente</span><span class="x-vv x-vf"><a href="https://cepi.net/cepi-fast-tracks-three-bundibugyo-ebolavirus-vaccine-candidates" target="_blank" rel="noopener">CEPI press release (1-jun)</a> · <a href="https://www.statnews.com/2026/06/01/ebola-bundibugyo-vaccine-studies-cepi-62-million-funding/" target="_blank" rel="noopener">STAT News (1-jun)</a> · CNBC Africa · BioWorld · Euronews</span>
          </div>
        </div>

        <div class="x-vax" style="border-left-color:#c44536">
          <div class="x-vaxt">Moderna · mRNA-1469 Bundibugyo (CEPI partner)</div>
          <div class="x-vaxs">Cambridge, Massachusetts (EE.UU.)</div>
          <div class="x-vaxr">
            <span class="x-vk">Producto</span><span class="x-vv">Vacuna mRNA específica contra <b>Bundibugyo virus</b>. Plataforma de la misma familia tecnológica que sus vacunas COVID y hantavirus Andes en Fase 1.</span>
            <span class="x-vk">Fase</span><span class="x-vv"><span class="x-fase fase-1">Fase 1 · primer participante 3-ago</span> — ensayo en Canadá (3 sitios), respaldado por CEPI; Moderna comprometió ≥500,000 dosis a precio de acceso para países de ingreso bajo-medio. Es la 2ª candidata Bundibugyo en humanos (tras Oxford).</span>
            <span class="x-vk">Financ.</span><span class="x-vv"><b>USD 50M de CEPI</b> en el paquete del 1-jun para preclínico + Fase 1 + manufactura + progresión a fases tardías si los datos son positivos. Se suma al financiamiento original de la alianza CEPI-Moderna desde enero 2026.</span>
            <span class="x-vk">Mercado</span><span class="x-vv">Moderna stock cierra 1-jun en USD 45.98 — sin spike tras el anuncio (contrasta con +9% intradía del 11-may por hantavirus). Analistas mantienen postura: "vacuna hantavirus está a una década sin Warp Speed-level funding."</span>
            <span class="x-vk">Fuente</span><span class="x-vv x-vf"><a href="https://www.statnews.com/2026/06/01/ebola-bundibugyo-vaccine-studies-cepi-62-million-funding/" target="_blank" rel="noopener">STAT News (1-jun)</a> · CNBC Africa · Yahoo Finance · Moderna press release</span>
          </div>
        </div>

        <div class="x-vax" style="border-left-color:#c44536">
          <div class="x-vaxt">University of Oxford + Serum Institute of India (CEPI partner, 1-jun-2026)</div>
          <div class="x-vaxs">Oxford, Reino Unido + Pune, India</div>
          <div class="x-vaxr">
            <span class="x-vk">Producto</span><span class="x-vv">Vacuna contra Bundibugyo virus desarrollada por Oxford, manufactura en Serum Institute of India (SII) — mismo modelo cooperativo de la AstraZeneca-Oxford COVID.</span>
            <span class="x-vk">Fase</span><span class="x-vv"><span class="x-fase fase-1">Fase 1 · primer voluntario 24-jul</span> — ChAdOx1 BDBV, la <b>primera vacuna Bundibugyo en humanos del mundo</b> (Oxford Vaccine Group; ~620,000 dosis ya apiladas en Serum Institute of India)</span>
            <span class="x-vk">Financ.</span><span class="x-vv">USD 8.6M de CEPI (paquete fast-track 1-jun). Modelo público-privado low-cost / high-volume.</span>
            <span class="x-vk">Fuente</span><span class="x-vv x-vf">CEPI (1-jun) · <a href="https://www.ox.ac.uk/news/2026-07-13-worlds-first-phase-i-bundibugyo-ebolavirus-vaccine-trial-launched-by" target="_blank" rel="noopener">Oxford University (13-jul)</a> · Gavi · STAT News</span>
          </div>
        </div>

        <div class="x-vax" style="border-left-color:#c44536">
          <div class="x-vaxt">International AIDS Vaccine Initiative (IAVI) · Bundibugyo candidate (CEPI partner, 1-jun-2026)</div>
          <div class="x-vaxs">Nueva York, EE.UU.</div>
          <div class="x-vaxr">
            <span class="x-vk">Producto</span><span class="x-vv">Vacuna candidata contra Bundibugyo del programa IAVI. Tercera vía financiada por CEPI en el paquete fast-track del 1-jun.</span>
            <span class="x-vk">Fase</span><span class="x-vv"><span class="x-fase fase-pre">Preclínico</span></span>
            <span class="x-vk">Financ.</span><span class="x-vv">Inversión inicial USD 3.2M de CEPI (paquete fast-track 1-jun).</span>
            <span class="x-vk">Fuente</span><span class="x-vv x-vf">CEPI press release (1-jun) · STAT News · BioWorld</span>
          </div>
        </div>

        <div class="x-vax" style="border-left-color:#c44536">
          <div class="x-vaxt">Mapp Biopharmaceutical · MBP134 (BARDA contract, 20-may-2026)</div>
          <div class="x-vaxs">San Diego, California (EE.UU.)</div>
          <div class="x-vaxr">
            <span class="x-vk">Producto</span><span class="x-vv">Cóctel bi-específico de anticuerpos monoclonales contra filovirus. Hecho de <b>dos anticuerpos aislados de sangre de un sobreviviente de ébola</b>. Diseñado para neutralizar <b>tres cepas a la vez: Zaire, Sudán y Bundibugyo</b>.</span>
            <span class="x-vk">Fase</span><span class="x-vv"><span class="x-fase fase-pre">Preclínico</span> con datos en primates · uso compasivo activado bajo Expanded Access del programa BARDA</span>
            <span class="x-vk">Eficacia preclínica</span><span class="x-vv">Protegió a <b>5 de 6 monos</b> infectados con dosis letal de Bundibugyo.</span>
            <span class="x-vk">Estatus 2026</span><span class="x-vv"><b>Tratamiento experimental dado al Dr. Peter Stafford</b> en el Berlin Charité (ver E7). BARDA y Mapp coordinan suministro a alto riesgo en EE.UU. y Europa.</span>
            <span class="x-vk">Antecedente</span><span class="x-vv">Mapp es la misma biotech que desarrolló <b>ZMapp</b> durante el brote África Occidental 2014-2016 (tratamiento dado al misionero Kent Brantly). Doce años después, mismo perfil, misma BARDA, misma biotech, distinta cepa.</span>
            <span class="x-vk">Financ.</span><span class="x-vv">BARDA · "longstanding public-private partnership" (contrato sin monto público al cierre)</span>
            <span class="x-vk">Fuente</span><span class="x-vv x-vf">Fierce Biotech · Bloomberg (vía KFGO, 20-may) · Medical Dialogues · US News (22-may). Comunicado BARDA primario no localizado como URL pública.</span>
          </div>
        </div>

        <div class="x-nota">
          <b>Asimetría clave entre los dos brotes.</b> Para Ébola Zaire hay vacuna aprobada con eficacia ~100% en campo. Para hantavirus no hay vacuna comercial — solo Fase 1 USAMRIID. Para Bundibugyo (la cepa del brote actual) tampoco hay autorización específica, pero la infraestructura de aceleración ya está montada (CEPI 100 Day Mission). Esa asimetría operativa es estructuralmente la diferencia entre los dos expedientes.
        </div>
      </div>`,
};
