/* ARCHIVO GENERADO POR _extraer_datos.py -- NO EDITAR A MANO.
   Origen: publica/expediente.html (copia verbatim de los arreglos).
   Para refrescar: python _extraer_datos.py */

const events = [
    { n:1,  day:1,  date:'1-abr',  type:'route',    coords:[-54.81,-68.30], place:'Ushuaia, Argentina', desc:'Zarpa el MV Hondius con <b>147 personas</b> a bordo (86 pasajeros + 61 tripulantes, de 23 nacionalidades). Operador: Oceanwide Expeditions, buque holandés. <b>Audit trail:</b> versión inicial decía "175 personas" — corregido a 147 por convergencia de CDC HAN 00528 + WHO DON600/601 + ECDC Threat Assessment, y por consistencia con n:14 del propio expediente. <b>Fuente primaria:</b> <a href="https://www.cdc.gov/han/php/notices/han00528.html" target="_blank" rel="noopener">CDC HAN 00528 — 2026 Multi-country Hantavirus Cluster Linked to Cruise Ship</a>.', v:'✅' },
    { n:2,  day:6,  date:'6-abr',  type:'symptom',  coords:[-64.50,-62.00], place:'Mar de Drake / Antártida', desc:'Primer síntoma reportado: hombre holandés de 70 años (luego identificado como caso índice). Sin alarma epidemiológica inicial. <b>Fuente primaria:</b> <a href="https://www.cdc.gov/han/php/notices/han00528.html" target="_blank" rel="noopener">CDC HAN 00528</a> (cronología del cluster) + <a href="https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON601" target="_blank" rel="noopener">WHO DON601</a>.', v:'✅' },
    { n:3,  day:11, date:'11-abr', type:'death',    coords:[-50.00,-30.00], place:'A bordo, Atlántico Sur', desc:'Primera muerte: holandés de 70 años. Atribuida inicialmente a causas naturales — esto retrasa 21 días la alerta sanitaria. <b>Fuente primaria:</b> <a href="https://www.cdc.gov/han/php/notices/han00528.html" target="_blank" rel="noopener">CDC HAN 00528</a> (cronología del cluster).', v:'✅' },
    { n:4,  day:14, date:'13-15 abr', type:'route', coords:[-37.10,-12.28], place:'Tristán da Cunha', desc:'Escala. 1 caso probable se quedó en la isla (estable al cierre). <b>Fuente:</b> escala como puerto de tránsito documentada en <a href="https://www.cdc.gov/han/php/notices/han00528.html" target="_blank" rel="noopener">CDC HAN 00528</a>. <i>El detalle del caso probable retenido en la isla proviene de cobertura trusted (BBC, Reuters); comunicado primario del St Helena Govt / Tristan da Cunha Administrator no localizado al cierre.</i>', v:'⚠️' },
    { n:5,  day:24, date:'24-abr', type:'route',    coords:[-15.92,-5.72],  place:'Santa Helena', desc:'Escala. 30 pasajeros desembarcan aquí — punto clave para rastreo posterior. <b>Fuente:</b> escala documentada en <a href="https://www.cdc.gov/han/php/notices/han00528.html" target="_blank" rel="noopener">CDC HAN 00528</a>. <i>La cifra específica de 30 desembarques proviene de cobertura trusted convergente (BBC, Reuters); comunicado primario del St Helena Government no localizado directamente al cierre.</i>', v:'⚠️' },
    { n:6,  day:26, date:'26-abr', type:'death',    coords:[-26.20,28.04],  place:'Johannesburgo, Sudáfrica', desc:'Segunda muerte: esposa del primer fallecido, holandesa de 69 años. Evacuada por aire desde el barco al Charlotte Maxeke Hospital. <b>Fuente primaria:</b> <a href="https://www.cdc.gov/han/php/notices/han00528.html" target="_blank" rel="noopener">CDC HAN 00528</a> (cronología cluster) + cobertura trusted convergente (BBC, Reuters, AFP, El País).', v:'✅' },
    { n:7,  day:32, date:'2-may',  type:'death',    coords:[-10.00,-20.00], place:'A bordo, Atlántico Sur', desc:'Tercera muerte a bordo (mujer alemana). Ese mismo día el brote es notificado oficialmente a la OMS. <b>Fuente primaria:</b> <a href="https://www.who.int/news/item/07-05-2026-who-s-response-to-hantavirus-cases-linked-to-a-cruise-ship" target="_blank" rel="noopener">WHO news del 7-may-2026 — Respuesta de la OMS al cluster en crucero</a> (confirma fecha de notificación 2-may).', v:'✅' },
    { n:8,  day:33, date:'3-may',  type:'route',    coords:[14.93,-23.51],  place:'Praia, Cabo Verde', desc:'El barco fondea fuera de puerto. Cabo Verde niega atraque por riesgo sanitario. <b>Fuente primaria:</b> escala/rechazo de atraque documentada en <a href="https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON600" target="_blank" rel="noopener">WHO DON600</a> (cronología cluster) + <a href="https://www.cdc.gov/han/php/notices/han00528.html" target="_blank" rel="noopener">CDC HAN 00528</a>. <i>Detalles del rechazo del Ministério da Saúde de Cabo Verde reportados por cobertura trusted convergente (Reuters, BBC, AFP).</i>', v:'✅' },
    { n:9,  day:34, date:'4-may',  type:'lab',     coords:[14.93,-23.51],  place:'Laboratorio de referencia', desc:'Secuenciación genética identifica el patógeno: <b>hantavirus Andes (ANDV)</b>. Primer caso confirmado por PCR. Secuenciación posterior (ECDC + UE) confirma que la cepa coincide con las que circulan en el cono sur sudamericano — no es nueva variante. <b>Fuente primaria:</b> <a href="https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON601" target="_blank" rel="noopener">WHO DON601</a> + <a href="https://www.cdc.gov/han/php/notices/han00528.html" target="_blank" rel="noopener">CDC HAN 00528</a>.', v:'✅' },
    { n:10, day:36, date:'6-may',  type:'hospital', coords:[47.37,8.54],    place:'Zúrich, Suiza', desc:'Gobierno suizo confirma 1 paciente tratado en Zúrich. Total acumulado: 8 casos. <i>Cobertura trusted convergente (BBC, Reuters, El País, Le Monde) citando al BAG suizo; comunicado oficial Bundesamt für Gesundheit no localizado directamente al cierre.</i>', v:'⚠️' },
    { n:11, day:37, date:'7-may',  type:'lab',      coords:[46.20,6.14],    place:'Ginebra — OMS', desc:'OMS publica respuesta oficial. Dr. Tedros (conferencia de prensa 7-may): virus Andes conocido, no nueva cepa, riesgo de salud pública bajo. Comunica el despliegue de 2,500 kits diagnósticos desde Argentina a laboratorios en cinco países. <b>Fuente primaria:</b> <a href="https://www.who.int/news/item/07-05-2026-who-s-response-to-hantavirus-cases-linked-to-a-cruise-ship" target="_blank" rel="noopener">WHO news 7-may-2026 — Respuesta de la OMS al cluster en crucero</a>.', v:'✅' },
    { n:12, day:38, date:'8-may',  type:'lab',      coords:[28.46,-16.25],  place:'Tenerife, Canarias', desc:'CDC publica HAN 00528 e informa el despliegue de equipo de epidemiólogos en las Canarias para evaluar exposición de pasajeros estadounidenses. Cluster sigue concentrado en pasajeros del MV Hondius, sin contagio secundario en residentes locales. <b>Fuente primaria:</b> <a href="https://www.cdc.gov/han/php/notices/han00528.html" target="_blank" rel="noopener">CDC HAN 00528 — Multi-country Hantavirus Cluster (8-may-2026)</a>.', v:'✅' },
    { n:13, day:40, date:'10-may', type:'route',    coords:[28.10,-16.49],  place:'Puerto de Granadilla, Tenerife', desc:'MV Hondius atraca tras 40 días en el mar. España fija ese día como "día cero" de la cuarentena oficial — referencia para los plazos de 42 días aplicados a contactos y tripulación. <b>Fuente primaria:</b> <a href="https://www.who.int/publications/m/item/who-technical-note-for-the-disembarkation-and-onward-management-of-passengers-and-crew-in-the-context-of-an-andes-virus-associated-cluster-mv-hondius-cruise-ship" target="_blank" rel="noopener">WHO Technical note — Desembarque y manejo posterior MV Hondius</a>. <i>Cobertura trusted convergente: El País, ABC, La Vanguardia, Reuters.</i>', v:'✅' },
    { n:14, day:41, date:'11-may', type:'route',    coords:[28.10,-16.49],  place:'Tenerife — desembarque', desc:'Desembarque completo de 147 personas. Repatriaciones por vuelos medicalizados a múltiples países. <b>Fuente primaria:</b> <a href="https://www.who.int/publications/m/item/who-technical-note-for-the-disembarkation-and-onward-management-of-passengers-and-crew-in-the-context-of-an-andes-virus-associated-cluster-mv-hondius-cruise-ship" target="_blank" rel="noopener">WHO Technical note — Desembarque y manejo posterior de pasajeros/tripulación MV Hondius</a>.', v:'✅' },
    { n:15, day:41, date:'11-may', type:'hospital', coords:[41.12,-95.92],  place:'Offutt AFB / Nebraska, EEUU', desc:'17 estadounidenses aterrizan en Offutt Air Force Base; trasladados a la Nebraska Biocontainment Unit. 1 positivo, 1 con síntomas leves. <b>Fuente primaria:</b> <a href="https://www.cdc.gov/han/php/notices/han00529.html" target="_blank" rel="noopener">CDC HAN 00529 — 2026 Hantavirus Outbreak: Testing for Potential Infection</a>.', v:'✅' },
    { n:16, day:42, date:'12-may', type:'hospital', coords:[40.41,-3.74],   place:'Madrid — Hospital Gómez Ulla', desc:'14 españoles en cuarentena 42 días en el Hospital Central de Defensa Gómez Ulla. 1 positivo leve, estable. <i>Convergencia trusted (El País, ABC, La Vanguardia, Reuters); comunicado primario del Ministerio de Sanidad o del propio Hospital Central de Defensa Gómez Ulla no localizado directamente al cierre.</i>', v:'⚠️' },
    { n:17, day:42, date:'12-may', type:'hospital', coords:[48.86,2.35],    place:'Hospital Bichat, París — caso crítico', desc:'Mujer francesa en sus 60 años, pasajera del MV Hondius, hospitalizada en el Hospital Bichat de París en estado crítico. Cuadro pulmonar más severo del brote. Comorbilidades documentadas: asma y otras afecciones previas. Atendida por el Dr. Xavier Lescure, infectólogo. Conectada a oxigenación extracorpórea (ECMO). Pronóstico vital comprometido según el parte médico oficial. Su muestra fue secuenciada en Francia y la cepa coincide sin mutaciones con la del cono sur sudamericano. La literatura sobre hantavirus severo señala que el ECMO temprano puede dar hasta ~80% de supervivencia en casos críticos. <i>Convergencia trusted (Le Monde, Le Figaro, AFP, France24); parte médico oficial del Hospital Bichat citado por la cobertura, no localizado como documento público directo.</i>', v:'⚠️' },
    { n:18, day:42, date:'12-may', type:'hospital', coords:[41.90,12.50],   place:'Roma — análisis ISS', desc:'Italiano joven de Calabria asintomático; muestras enviadas al Instituto Superior de Salud (ISS) en Roma para confirmación.', v:'⚠️' },
    { n:19, day:42, date:'12-may', type:'lab',      coords:[46.20,6.14],    place:'OMS — comunicado oficial', desc:'OMS actualiza: 11 casos en total (9 confirmados, 2 probables), 3 muertes. Riesgo poblacional bajo. Misma cifra confirmada por ECDC al 13-may. <b>Fuente primaria:</b> <a href="https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON601" target="_blank" rel="noopener">WHO DON601 — Hantavirus cluster linked to cruise ship travel (13-may)</a>.', v:'✅' },
    { n:20, day:41, date:'11-may', type:'lab', coords:[19.43,-99.13], place:'México — Aviso Epidemiológico Nacional', desc:'La Secretaría de Salud de México (CONAVE) emite la PRIMERA Alerta Epidemiológica Nacional por hantavirus en la historia del país. Cero casos en territorio, pero activa vigilancia en hospitales, laboratorios y unidades médicas. El aviso cita explícitamente la movilidad del Mundial 2026 como factor de riesgo adicional. <b>Fuente:</b> Comunicado SSA/CONAVE del 11-may-2026 (referenciado por <a href="https://politica.expansion.mx/mexico/2026/05/12/mexico-emite-aviso-epidemiologico-hantavirus" target="_blank" rel="noopener">Expansión Política</a> y N+, cobertura trusted convergente). Documento PDF oficial CONAVE no localizado directamente en gob.mx al cierre.', v:'⚠️' },
    { n:21, day:42, date:'12-may', type:'hospital', coords:[51.81,5.84], place:'Radboudumc Nijmegen — fallo de protocolo', desc:'El Hospital Universitario Radboudumc (Países Bajos) pone en cuarentena preventiva de 6 semanas a 12 trabajadores sanitarios. Procesaron muestras de sangre y desecharon orina de un paciente positivo con protocolo estándar en lugar del estricto requerido. Paciente admitido 7-may; fallo detectado sábado 10-may. <b>Fuente:</b> Comunicado del propio Radboudumc + cobertura trusted convergente (NL Times, NRC, AD). <i>Comunicado primario del Radboudumc no localizado directamente al cierre como URL pública verificable.</i>', v:'⚠️' },
    { n:22, day:43, date:'13-may', type:'lab', coords:[59.33,18.06], place:'ECDC — Estocolmo (DON601 / Surveillance Update)', desc:'ECDC actualiza cifras del cluster: 9 confirmados (+2 desde el 11-may), 2 probables, 3 muertes. Letalidad 27%. La OMS publica DON601: hipótesis de transmisión humano-humano a bordo se convierte en working hypothesis institucional. Riesgo UE/EEE sigue muy bajo. <b>Fuentes primarias:</b> <a href="https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON601" target="_blank" rel="noopener">WHO DON601</a> + <a href="https://www.ecdc.europa.eu/en/publications-data/hantavirus-associated-cluster-illness-cruise-ship-ecdc-assessment-and" target="_blank" rel="noopener">ECDC Threat Assessment Brief</a>.', v:'✅' },
    { n:23, day:43, date:'13-may', type:'hospital', coords:[48.86,2.35], place:'París — Bichat · fase terminal del soporte', desc:'La paciente francesa (65 años, Hospital Bichat) entra en lo que el Dr. Xavier Lescure describe como "fase terminal del cuidado de soporte" en parte médico oficial. Sigue conectada a ECMO (pulmón artificial) para oxigenación extracorpórea. Es el caso vivo más grave del cluster del MV Hondius. Las próximas horas se anuncian como determinantes para el pronóstico vital. <i>Convergencia trusted (Le Monde, Le Figaro, AFP, France24); parte médico oficial del Hospital Bichat citado por la cobertura, no localizado como documento público directo.</i>', v:'⚠️' },
    { n:24, day:48, date:'18-may', type:'route', coords:[51.92,4.48], place:'Rotterdam — atraque, testeo RIVM y desinfección', desc:'MV Hondius atraca en el Puerto de Rotterdam a las <b>10:30 AM</b> del lunes 18 de mayo. A bordo: 25 personas asintomáticas (23 tripulantes + 2 funcionarios sanitarios holandeses). El <b>RIVM</b> (Instituto Nacional de Salud Pública neerlandés) testea a las 25 personas al desembarcar — <b>todas dan negativo a virus Andes en ese momento</b>. El brote queda confinado al núcleo original de pasajeros expuestos al caso índice (estado al 18-may; ver n:30 para evolución posterior). Cuarentena diferenciada: los 2 tripulantes holandeses van a cuarentena domiciliaria; el resto (mayormente filipinos) se aloja en 25 contenedores blancos instalados a lo largo del muelle, equipados con internet satelital y catering. Cuarentena de 42 días hasta el 21 de junio (desde el día cero del 10-may). Desglose por nacionalidad: 17 filipinos, 4 holandeses (2 tripulantes + 2 sanitarios), 4 ucranianos, 1 ruso, 1 polaco. <b>Fuentes primarias:</b> <a href="https://www.rivm.nl/en/hantavirus/current-information" target="_blank" rel="noopener">RIVM — Current information about hantavirus</a> + <a href="https://www.cdc.gov/media/releases/2026/2026-cdc-provides-update-on-hantavirus-outbreak-linked-to-m-v-hondius-cruise-ship.html" target="_blank" rel="noopener">CDC Newsroom — Update on hantavirus MV Hondius</a>.', v:'✅' },
    { n:25, day:48, date:'18-25 may', type:'lab', coords:[51.91,4.46], place:'Rotterdam — desinfección RIVM en curso', desc:'Inicia la desinfección profunda del MV Hondius por una empresa especializada bajo protocolo del RIVM. Plazo estimado: hasta una semana. Procedimiento: trajes de protección personal, limpieza de todas las superficies + sistemas de ventilación, evaluación cuarto por cuarto. Es la primera operación de desinfección de un buque de expedición por brote de hantavirus en aguas neerlandesas. <b>Fuente primaria:</b> <a href="https://www.rivm.nl/en/hantavirus/current-information" target="_blank" rel="noopener">RIVM — Current information about hantavirus</a>. <i>Detalles operativos reportados por cobertura trusted (NL Times, NRC, Reuters).</i>', v:'✅' },
    { n:26, day:37, date:'7-may',  type:'lab', coords:[-38.74,-72.59], place:'Chile — situación endémica 2026 (contexto, no MV Hondius)', desc:'<b>Contexto endémico paralelo.</b> Chile reporta al cierre del 7 de mayo <b>39 casos confirmados de hantavirus en 2026</b>, con <b>13 fallecidos</b> y una <b>letalidad del 33 %</b>. Contagios en 9 de las 16 regiones del país, principalmente zona central y austral. <b>Estos casos no están vinculados al cluster del MV Hondius</b> — son del reservorio endémico del virus Andes. La letalidad histórica del Andes en Chile oscila ~22%; este año está significativamente por encima. <b>Fuente primaria:</b> ISP Chile / Minsal Chile (informes epidemiológicos semanales). <i>Cobertura trusted convergente: La Tercera, BioBioChile, swissinfo.</i>', v:'⚠️' },
    { n:27, day:37, date:'7-may',  type:'lab', coords:[-41.13,-71.31], place:'Argentina — situación endémica 2026 (contexto, no MV Hondius)', desc:'<b>Contexto endémico paralelo.</b> Argentina reporta <b>41 casos confirmados de hantavirus en 2026</b>, con <b>tasa de letalidad entre 31 % y 39 %</b>, muy por encima del promedio histórico (~22 %). Circulación viral por arriba del umbral de brote en zonas endémicas (Patagonia y noroeste). <b>Estos casos no están vinculados al cluster del MV Hondius</b>. Es el reservorio activo del virus Andes en niveles atípicos. El brote del crucero es la versión turística/internacional de algo que ya ocurría en territorio argentino. <b>Fuente primaria:</b> Ministerio de Salud Argentina (Boletín Epidemiológico Nacional, SE 17). <i>Cobertura trusted: La Nación, Clarín, Página/12, UPI.</i>', v:'⚠️' },
    { n:28, day:45, date:'15-may', type:'hospital', coords:[48.86,2.35], place:'París — Bichat · cuidados paliativos', desc:'La paciente francesa del Hospital Bichat (65 años, pasajera del MV Hondius) <b>pasa formalmente a cuidados paliativos</b>. Tras la "fase terminal del soporte" anunciada el 13 de mayo, el cuadro cardiopulmonar no remite. Continúa con ECMO (oxigenación extracorpórea) en la UCI. La UE descartó mutaciones del virus tras secuenciación independiente — la cepa coincide sin variaciones con la del cono sur. <b>26 contactos cercanos PCR-negativos pero en cuarentena.</b> Es el cuadro vivo más grave del cluster. <i>Cobertura periodística: Diario en Positivo, RPP, Mundiario (sin comunicado primario del Hospital Bichat o del Ministère de la Santé francés localizado al cierre).</i>', v:'⚠️' },
    { n:29, day:49, date:'19-may', type:'death', coords:[39.32,-104.97], place:'Douglas County, Colorado, EE.UU. — Sin Nombre virus (no MV Hondius)', desc:'<b>Adulto residente de Douglas County, Colorado, fallece por hantavirus.</b> Autoridades sanitarias estadounidenses confirman: <b>cepa Sin Nombre virus (SNV)</b>, endémica de América del Norte, transmitida por contacto con excrementos u orina del ratón ciervo. <b>Descartado oficialmente cualquier vínculo con el MV Hondius</b> — son cepas distintas (SNV vs. Andes). EE.UU. registra históricamente 20-40 casos anuales de Sin Nombre virus; este caso aparece en titulares por el contexto del brote internacional, no por excepcionalidad clínica. <i>Cobertura: Infobae EE.UU., El Mañana, TV Azteca BC (sin comunicado primario del Colorado Dept. of Public Health & Environment localizado al cierre).</i>', v:'⚠️' },
    { n:30, day:52, date:'22-may', type:'hospital', coords:[51.92,4.48], place:'Rotterdam — nuevo caso confirmado en tripulante', desc:'<b>Nuevo caso de hantavirus confirmado en un tripulante del MV Hondius en cuarentena en Rotterdam.</b> Es el primer caso confirmado entre la tripulación tras el atraque del 18-may, en el que las 25 personas a bordo dieron negativo. Eleva el total del cluster a 12 casos (10 confirmados + 2 probables) y mantiene 3 muertes. <b>Implicación:</b> el brote NO quedó confinado al núcleo original de pasajeros; la transmisión a tripulación durante la travesía (período de incubación largo del Andes virus) se confirma. <i>Convergencia trusted:</i> <a href="https://www.manilatimes.net/2026/05/22/world/who-says-new-hantavirus-case-among-hondius-ships-crew/2350248" target="_blank" rel="noopener">Manila Times (22-may)</a> y <a href="https://nltimes.nl/2026/05/23/new-hantavirus-infection-confirmed-hondius-crew-member-isolated-netherlands" target="_blank" rel="noopener">NL Times (23-may)</a> citando a la OMS. Verificación directa pendiente con comunicado RIVM/OMS de la fecha.', v:'⚠️' },
    { n:31, day:56, date:'26-may', type:'lab', coords:[52.10,5.18], place:'Bilthoven · RIVM — cifras consolidadas del cluster', desc:'<b>RIVM publica cuadro consolidado del cluster MV Hondius al 26 de mayo: 13 casos totales (11 confirmados + 2 probables), 3 muertes.</b> Sin nuevos fallecimientos desde la actualización previa. La nueva infección confirmada (n:30) queda formalmente integrada en la cifra. RIVM + Erasmus MC mantienen testeo semanal a todos los contactos en cuarentena. La probabilidad de propagación comunitaria en territorio neerlandés se evalúa como mínima dado el dispositivo de aislamiento. <b>Audit trail:</b> esta cifra reemplaza la del 13-may (11 casos, 3 muertes) tras integrar n:30 y el caso adicional de un tripulante repatriado desde Tenerife. <b>Fuentes primarias:</b> <a href="https://www.rivm.nl/en/hantavirus/current-information" target="_blank" rel="noopener">RIVM — Current information about hantavirus</a> + <a href="https://www.ecdc.europa.eu/en/infectious-disease-topics/hantavirus-infection/surveillance-and-updates/andes-hantavirus-outbreak" target="_blank" rel="noopener">ECDC Surveillance Update</a>.', v:'✅' },
    { n:32, day:57, date:'27-may', type:'lab', coords:[46.20,6.14], place:'Ginebra · OMS — DON604 hantavirus', desc:'<b>OMS publica Disease Outbreak News 604</b>, cuarto informe oficial del brote MV Hondius. Cifras al 27-may: <b>13 casos totales (11 confirmados + 2 probables), 3 muertes (2 confirmadas + 1 probable)</b>. <b>Tres nuevos casos confirmados desde DON601 (13-may): uno cada uno desde Canadá, Países Bajos y España</b> — primer caso confirmado en Canadá (decimocuarto país del cluster, repatriado desde Tenerife bajo monitoreo de la Public Health Agency of Canada), segundo caso confirmado en España, y el caso del tripulante neerlandés (n:30) integrado en la cifra. <b>Más de 600 contactos identificados en 32 países, territorios y áreas</b> al 22-may (53% alto riesgo + 47% bajo riesgo) bajo monitoreo cercano o autodeclarado. Todos los confirmados son del MV Hondius — sin transmisión comunitaria documentada. <b>Audit trail:</b> DON604 supersede a DON601 como cuadro epidemiológico oficial. <b>Fuente primaria:</b> <a href="https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON604" target="_blank" rel="noopener">WHO DON604 (27-may-2026)</a>.', v:'✅' },
    { n:33, day:64, date:'3-jun', type:'lab', coords:[52.10,5.18], place:'Bilthoven · RIVM — caso sospechoso descartado tras "weak positive"', desc:'<b>RIVM aclara: persona en cuarentena domiciliaria con un resultado de "weak positive signal" NO se cuenta como caso del cluster.</b> Tras el signal débil inicial, se aplicaron tests adicionales con múltiples materiales corporales: todos claramente negativos. La persona no presenta síntomas y no es contagiosa, lo que es inconsistente con infección activa por virus Andes. <b>Cifras del cluster se mantienen sin cambios: 13 casos totales (11 confirmados + 2 probables), 3 muertes. Sin nuevos casos desde el 26-may.</b> RIVM ajusta protocolo: la persona será testeada dos veces por semana en lugar de una vez. <b>Fuente primaria:</b> <a href="https://www.rivm.nl/en/hantavirus/current-information" target="_blank" rel="noopener">RIVM — Current information about hantavirus</a>.', v:'✅' },
    { n:34, day:73, date:'13-jun', type:'route', coords:[78.22,15.65], place:'Longyearbyen, Svalbard · MV Hondius regresa al servicio', desc:'<b>El MV Hondius regresa formalmente al servicio comercial con zarpe programado desde Longyearbyen (archipiélago de Svalbard, Noruega ártica) el 13 de junio.</b> Es el cierre operativo del expediente del crucero: 73 días después del zarpe original desde Ushuaia el 1-abr, el buque vuelve a aceptar pasajeros. La desinfección completa del RIVM (mayo) y el cumplimiento de los protocolos de cuarentena de tripulación quedan certificados. Oceanwide Expeditions reanuda itinerarios árticos de la temporada boreal. <b>Lectura editorial:</b> el cluster del MV Hondius pasa de evento activo a antecedente cerrado. El reservorio endémico del virus Andes en el cono sur sudamericano sigue activo (Argentina 42 confirmados, Chile 39, letalidad 31-39%) y el corredor del Mundial 2026 vehicula al hemisferio norte un flujo masivo de aficionados sudamericanos en sedes con densidad de estadios y hoteles. El próximo cluster, si aparece, no será del crucero. <b>Fuentes:</b> RIVM update + cobertura Oceanwide Expeditions (sitio oficial del operador).', v:'⚠️' },
    { n:35, day:72, date:'12-jun', type:'lab', coords:[46.20,6.14], place:'Ginebra · OMS — lanza NAVIS, red de 21 países sobre virus Andes', desc:'<b>La OMS lanza NAVIS, una iniciativa de investigación coordinada sobre virus Andes (ANDV) con investigadores e instituciones de 21 países.</b> Es un estudio de historia natural diseñado para mejorar el conocimiento de la dinámica de transmisión del ANDV, periodos de incubación, respuestas inmunes, cinética viral y determinantes de enfermedad grave, mediante seguimiento longitudinal armonizado de personas expuestas. <b>Dato estructural clave:</b> NAVIS opera bajo el <em>R&D Blueprint</em> de la OMS, el marco que, según el propio comunicado, establece redes de investigación por familia de patógeno <b>"para apoyar la coordinación científica rápida y la implementación de investigación de brotes antes de que las emergencias surjan"</b>. <b>Composición de la red (20 de 21 países nombrados en la cobertura):</b> Australia, Bélgica, Canadá, RDC, Dinamarca, Francia, Alemania, Grecia, Irlanda, Italia, Japón, Países Bajos, Nueva Zelanda, Singapur, Sudáfrica, España, Suiza, Türkiye, Reino Unido y Estados Unidos. Coordinación: UKHSA (Reino Unido) vía el consorcio CORC (1,600 expertos, 130 países). Protocolo: Hospital Germans Trias i Pujol (Badalona, España), prediseñado "para despliegue inmediato tras una emergencia". Fondeo: ANRS-MIE (Francia) bajo BE READY (UE). Framework: ISARIC (heredado del COVID). <b>Hallazgo editorial clave:</b> <b>Argentina y Chile, los dos únicos países donde el virus Andes es endémico y donde mueren personas cada año (Chile 39 casos/33% letalidad, Argentina máximo de muertes desde 2018), NO figuran en la red.</b> Sí figuran los países ricos que recibieron pasajeros repatriados del MV Hondius. NAVIS no estudia el virus en su reservorio sudamericano: estudia a los expuestos repatriados al primer mundo. El conocimiento (y su eventual propiedad) se genera en el norte, sobre cuerpos del norte. <b>Lectura editorial:</b> mientras el ébola Bundibugyo ocupa los titulares y el dispositivo regulatorio (Title 42, pacto trilateral), la infraestructura de investigación se preposiciona sobre el hantavirus Andes. NAVIS no es la única pieza: es la punta visible de un ecosistema (CORC + BE READY + ISARIC + la consulta OMS de contramedidas MCM del 15-may). Preparación científica anticipatoria en clave Lakoff. La frase "antes de que las emergencias surjan" es el modelo declarado. <b>Fuente primaria:</b> <a href="https://www.who.int/news/item/12-06-2026-twenty-one-countries-launch-coordinated-andes-virus-research-initiative-following-hantavirus-outbreak" target="_blank" rel="noopener">WHO — Twenty-one countries launch coordinated Andes virus research initiative (12-jun-2026)</a> + UNRIC + Mirage News (lista de países).', v:'✅' },
    { n:36, day:119, date:'29-jul', type:'lab', coords:[-33.45,-70.66], place:'Santiago · Chile declara su primera alerta sanitaria por hantavirus', desc:'<b>Chile declara la primera alerta sanitaria nacional por hantavirus de su historia</b> (13 de 16 regiones, de Atacama a Magallanes, vigente hasta el 31-jul-2027): <b>46 casos y 18 muertes al 28-jul, letalidad ~39%</b> (2025 entero: 44 casos, 8 muertes, 18%). La alerta habilita contratación de personal, compra expedita de insumos y refuerzo de vigilancia. Es por la <b>cepa Andes, la misma del MV Hondius</b>: con Argentina cerrando su temporada en récord (33.3%), las dos casas del ANDV quedan en rojo el mismo invierno. La subsecretaria Pizarro admite que el virus <b>"dejó de concentrarse en verano y en sectores rurales"</b>: la estacionalidad se rompió. Matiz técnico: se incorporó el hanta a la alerta zoonótica vigente. <b>Fuentes:</b> <a href="https://www.cooperativa.cl/noticias/pais/salud/alertas-sanitarias/de-atacama-a-magallanes-declaran-alerta-sanitaria-preventiva-por/2026-07-28/122117.html" target="_blank" rel="noopener">Cooperativa (28-jul)</a> · <a href="https://www.infobae.com/salud/2026/07/29/alerta-sanitaria-en-chile-por-hantavirus-las-nuevas-medidas-en-casi-todo-el-pais/" target="_blank" rel="noopener">Infobae (29-jul)</a> · La Tercera.', v:'✅' },
    { n:37, day:124, date:'3-ago', type:'hospital', coords:[-45.57,-72.07], place:'Coyhaique, Aysén · cluster familiar y la brecha del ECMO', desc:'<b>Cluster familiar en Aysén: una mujer de 62 años y su nieta de 17, con contagio presunto en el sector El Guadal (Chile Chico), a la espera de confirmación del ISP.</b> La hipótesis oficial es co-exposición ambiental, no transmisión persona-persona; investigación epidemiológica en curso. La primera semana de la alerta exhibió la brecha de capacidad: <b>Coyhaique no tiene ECMO</b> (solo 5 centros del país lo tienen) y ambas pacientes fueron trasladadas <b>más de 1,500 km hasta Concepción</b> con ECMO móvil, con la evacuación aeromédica frenada por clima. La diputada Andrea Macías exigió refuerzo regional al Minsal. El 8-ago se reportó además la <b>muerte de una niña de 11 años en Rengo (O\'Higgins)</b>, aún no sumada al conteo oficial, que sigue en 46/18. <b>Fuentes:</b> <a href="https://www.biobiochile.cl/noticias/nacional/chile/2026/08/04/trasladan-desde-aysen-al-bio-bio-a-abuela-y-nieta-con-sospecha-de-hantavirus.shtml" target="_blank" rel="noopener">BioBioChile (4-ago)</a> · <a href="https://www.rln.cl/regional/153467-diputada-macias-falta-de-equipamiento-pone-en-riesgo-la-vida-de-pacientes-con-hantavirus-en-aysen/" target="_blank" rel="noopener">RLN (6-ago)</a> · Radio Agricultura (8-ago).', v:'⚠️' },
    { n:38, day:127, date:'6-ago', type:'hospital', coords:[42.60,-8.10], place:'Galicia, España · el Andes volvió a viajar (caso post-cluster)', desc:'<b>Un turista francoargentino residente en Argentina, con hantavirus Andes confirmado, queda aislado con su familia en Galicia.</b> Voló <b>Santiago de Chile-Madrid el 18-jul</b> e hizo síntomas en Francia; <b>4 contactos aislados en tres comunidades autónomas</b>, con cuarentenas de 42 días corriendo desde el 28-jul; PCR negativa y alta el 7-ago. Es la <b>segunda exportación internacional del virus Andes en tres meses</b> (el crucero en mayo, este caso en agosto), con el mecanismo exacto que describieron las columnas: el vuelo de largo radio y la familia, no la tribuna. Cae dentro de la ventana de manifestación post-Mundial calculada por el expediente (18-jun a 13-sept). <b>Frenos:</b> exposición "probablemente ambiental" en Argentina; sin vínculo con el cluster del MV Hondius (cerrado el 2-jul) ni con el Mundial; caso único y contenido. <b>Fuentes:</b> <a href="https://www.infobae.com/espana/agencias/2026/08/11/cuatro-contactos-del-turista-francoargentino-con-hantavirus-aislados-en-tres-comunidades/" target="_blank" rel="noopener">Infobae (11-ago)</a> · <a href="https://www.diariodepontevedra.es/articulo/espana/nuevo-caso-hantavirus-espana-aislado-familia-turista-frances-que-viajo-argentina/202608061758561462391.html" target="_blank" rel="noopener">Diario de Pontevedra (6-ago)</a> · Noticias Net (7-ago).', v:'✅' },
    { n:39, day:132, date:'11-ago', type:'lab', coords:[-25.30,-57.63], place:'Cono sur · barrido de variantes: la vigilancia en siesta', desc:'<b>Corte del barrido de fuentes nacionales por zona de variante (11-ago).</b> <b>Paraguay</b> (Laguna Negra): el alza a <b>5-6 casos a la SE 29</b> vive solo en el PDF oficial de la DGVS, sin un solo medio que lo reporte; entraron mujeres a la curva y ya rebasa el mismo periodo de 2025. <b>Bolivia</b> (variantes locales): caso nuevo en Yacuiba (jul), todo el movimiento en el corredor fronterizo Bermejo-Yacuiba-Padcaya contiguo a Salta; <b>boletines nacionales congelados en la SE 13 (abril)</b>. <b>Brasil</b> (Juquitiba): portales estaduales en veda electoral; los 11 casos de Paraná en investigación jamás se resolvieron. <b>Uruguay</b>: 3 meses de silencio del MSP. <b>Panamá</b> (Choclo): 29 acumulados a SE 29; los 14 SCPH ya superan el ritmo del año récord. <b>OPS</b>: sin actualización regional desde su taller de junio. <b>Lectura editorial:</b> todo el rango endémico del único virus persona-persona de América publica con rezago, en veda o en silencio, justo cuando la estacionalidad se rompe. La señal ecológica precursora (ratada, floración del colihue) aún no aparece; su ventana es octubre-diciembre. <b>Fuentes:</b> <a href="https://dgvs.mspbs.gov.py/wp-content/uploads/2026/08/SE-29-2026.pdf" target="_blank" rel="noopener">DGVS Paraguay SE-29 (PDF)</a> · <a href="https://www.minsa.gob.pa/sites/default/files/publicacion-general/boletin_epidemiologico_semanal_29.pdf" target="_blank" rel="noopener">MINSA Panamá SE-29 (PDF)</a> · <a href="https://www.minsalud.gob.bo/9104-boletines-epidemiologicos-2026" target="_blank" rel="noopener">Min. Salud Bolivia (a SE13)</a> · eju.tv (Yacuiba).', v:'✅' }
  ];

const eventosEbola = [
    { n:'E1', day:35, date:'5-may',  type:'symptom',  coords:[1.94, 29.81],  place:'Mongbwalu, Ituri (RDC)', desc:'<b>Alerta inicial.</b> Personal sanitario reporta enfermedad desconocida en el área de Mongbwalu, provincia de Ituri. Primer cuadro clínico que terminará identificándose como ébola Bundibugyo. <b>Fuente primaria:</b> <a href="https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON602" target="_blank" rel="noopener">WHO DON602 — Ebola disease caused by Bundibugyo virus, DRC & Uganda</a> + <a href="https://www.afro.who.int/countries/democratic-republic-of-congo/publication/ebola-bundibugyo-virus-disease-outbreak-democratic-republic-congo-uganda-weekly-external-situation" target="_blank" rel="noopener">WHO Weekly External Sitrep 01</a>.', v:'✅' },
    { n:'E2', day:44, date:'14-may', type:'lab',      coords:[1.56, 30.24],  place:'Laboratorio · Bunia, Ituri', desc:'<b>Primer test positivo Bundibugyo</b> en el laboratorio INRB de Bunia. Las primeras pruebas habían dado negativas porque solo detectaban la cepa Zaire. Al aplicar test específico de Bundibugyo se confirma el patógeno. Sesgo de detección: el brote pudo estar circulando semanas sin identificarse. <b>Fuente primaria:</b> <a href="https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON602" target="_blank" rel="noopener">WHO DON602</a>.', v:'✅' },
    { n:'E3', day:46, date:'16-may', type:'lab',      coords:[46.20, 6.14],  place:'Ginebra · OMS — declaración PHEIC', desc:'<b>OMS declara Emergencia de Salud Pública de Importancia Internacional</b> por ébola Bundibugyo en RDC + Uganda. <b>Solo 13 días entre alerta y declaración</b> — récord absoluto histórico (compare con H1N1 2009 = 83 días, COVID-19 = 30 días, ébola Kivu 2018-19 = 11 meses). Apenas 8 casos confirmados al momento de la declaración. CEPI había otorgado USD 26.7M a Moderna+Oxford en enero 2026 para vacuna multivalente que incluye Bundibugyo. <b>Fuente primaria:</b> <a href="https://www.who.int/news/item/17-05-2026-epidemic-of-ebola-disease-in-the-democratic-republic-of-the-congo-and-uganda-determined-a-public-health-emergency-of-international-concern" target="_blank" rel="noopener">WHO PHEIC declaration (17-may-2026)</a>.', v:'✅' },
    { n:'E4', day:47, date:'17-may', type:'hospital', coords:[0.31, 32.58],  place:'Kampala, Uganda · casos confirmados con viajeros desde RDC', desc:'<b>Casos confirmados en Uganda.</b> Inicialmente dos personas que viajaban desde RDC dieron positivo en Kampala (1 fallecido). <b>Actualización al 23-may:</b> el Ministerio de Salud de Uganda anunció 3 casos adicionales confirmados, elevando el total a <b>5 confirmados en Kampala con 1 muerte confirmada</b>, todos con vínculo epidemiológico claro a la RDC. Sin transmisión local secundaria al cierre. <b>Audit trail del cambio:</b> versión previa decía 2 confirmados con fuente Sitrep 01 (18-may); actualizado a 5 con fuente posterior (Min Salud Uganda 23-may, cobertura trusted convergente NBC News + CBS News). <b>Fuentes:</b> <a href="https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON603" target="_blank" rel="noopener">WHO DON603 (21-may rev. 25-may)</a>; cobertura trusted del comunicado Min Salud Uganda del 23-may.', v:'✅' },
    { n:'E5', day:47, date:'17-may', type:'symptom',  coords:[-1.68, 29.22], place:'Goma, Nord-Kivu (RDC) · zona M23', desc:'<b>Caso confirmado en Goma</b> — capital de Nord-Kivu. La ciudad está bajo <b>control del M23</b>, grupo armado respaldado por Ruanda. MSF inicia negociaciones de acceso humanitario directamente con el M23, lo que de facto le otorga estatus de interlocutor sanitario. Mismo patrón documentado en Tigré 2021-2023. <b>Fuente primaria:</b> <a href="https://www.afro.who.int/countries/democratic-republic-of-congo/publication/ebola-bundibugyo-virus-disease-outbreak-democratic-republic-congo-uganda-weekly-external-situation" target="_blank" rel="noopener">WHO Weekly External Sitrep 01</a> (mención de Goma + Nord-Kivu).', v:'✅' },
    { n:'E6', day:47, date:'17-may', type:'symptom',  coords:[-4.32, 15.32], place:'Kinshasa (RDC) · médico estadounidense positivo', desc:'<b>Primer caso estadounidense con Bundibugyo.</b> Dr. Peter Stafford (Serge, Pennsylvania), expuesto durante atención de pacientes en el Hospital Nyankunde cerca de Bunia, da positivo. <b>Decisión: traslado a Alemania</b> (Berlin Charité, ver E7) en lugar de a EE.UU. — la Casa Blanca habría resistido el retorno según reportes posteriores (Washington Post). <i>Convergencia trusted: NBC News, Washington Post, CBS News, ABC News, Euronews, Today (19-22 may). Comunicado primario del Departamento de Estado de EE.UU. o de Serge International no localizado al cierre.</i>', v:'⚠️' },
    { n:'E7', day:49, date:'19-may', type:'hospital', coords:[52.52, 13.40],  place:'Berlín, Alemania · Charité (evacuación familia Stafford)', desc:'<b>Evacuación al Hospital Charité de Berlín</b> (Sonderisolierstation / Specialized Isolation Service, mismo centro que trató casos de ébola en 2014-2016). El médico misionero estadounidense <b>Dr. Peter Stafford (39)</b>, infectado mientras atendía pacientes en el Hospital Nyankunde cerca de Bunia desde 2019 (organización Serge, Pennsylvania), es trasladado por aire al aeropuerto de Berlín-Brandenburgo el 19-may y transferido bajo convoy policial al Charité. <b>Su esposa Dra. Rebekah Stafford (38) — también médica que atendió al mismo paciente índice — y sus cuatro hijos ingresan al mismo centro</b>, asintomáticos, en aislamiento monitoreado. Síntomas Peter Stafford: inicio 16-may, confirmación laboratorio 20-may, tratamiento intravenoso experimental en curso. <b>Actualización al 26-may:</b> Stafford "<i>steadily recovering</i>" según Serge / Decision Magazine; "<i>critically ill but not acutely deteriorating</i>"; comenzó a ingerir alimentos en pequeñas cantidades; labs "<i>trending slightly in the right direction</i>"; recibió dos tratamientos intravenosos diseñados para mejorar outcomes (MBP134 atribuido por Fierce Biotech + Bloomberg, no nombrado explícitamente por Serge). <b>Detalle clínico operativo:</b> los equipos médicos alemanes rotan en turnos de 3 horas por la obligación de usar traje de bioseguridad full-body durante la atención. <b>Esposa Dra. Rebekah Stafford y los cuatro hijos:</b> ingresaron al Charité, asignados a espacio separado dentro del hospital, PCR negativos, asintomáticos en aislamiento monitoreado. <b>Cobertura trusted del 28-may (Time, ABC News, WORLD, CBS, OAN, Decision):</b> el titular del expediente periodístico se desplaza hacia "American missionary survives Bundibugyo Ebola after Congo evacuation" — el patrón Brantly 2014 → Stafford 2026 se cierra mediáticamente con segunda supervivencia documentada. <b>Controversia documentada:</b> según Washington Post (20-may) la Casa Blanca habría inicialmente resistido el retorno del paciente a EE.UU.; portavoz Kush Desai negó la versión. <b>Fuentes primarias:</b> <a href="https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON603" target="_blank" rel="noopener">WHO DON603</a> (confirma evacuación de "an American surgical worker" a Alemania) + Bundesgesundheitsministerium vía cobertura. <b>Cobertura trusted convergente:</b> NBC News, Washington Post, CBS News, ABC News, Euronews, DER SPIEGEL, Charité press release. <b>Audit trail:</b> versión inicial del expediente decía "Frankfurt" sin primaria; primera corrección a Berlín Charité (23-may) sin verificación directa; versión actual confirmada por WHO DON603 (21-may rev. 25-may) que cita explícitamente la evacuación a Alemania.', v:'✅' },
    { n:'E8', day:48, date:'18-may', type:'lab',      coords:[38.92, -77.05], place:'Washington DC · CDC activa screening', desc:'<b>CDC anuncia screening de viajeros</b> en aeropuertos estadounidenses. Activa la infraestructura biométrica preexistente del programa Simplified Arrival con propósito sanitario explícito — la herramienta esperaba la crisis (lectura: doctrina del shock). <b>Fuente primaria:</b> <a href="https://www.cdc.gov/media/releases/2026/cdc-mobilizes-international-ebola-response.html" target="_blank" rel="noopener">CDC Newsroom — Mobilizes International Response Following Ebola Disease Outbreak</a>.', v:'✅' },
    { n:'E9', day:49, date:'19-may', type:'lab',      coords:[33.75, -84.39], place:'Atlanta · CDC publica HAN 00530', desc:'<b>CDC publica Health Alert Network 00530</b> con guía clínica para sospecha de ébola Bundibugyo. Operacionaliza el protocolo nacional de respuesta. <b>Fuente primaria:</b> <a href="https://www.cdc.gov/han/php/notices/han00530.html" target="_blank" rel="noopener">CDC HAN 00530 — Ebola Disease Outbreak in DRC and Uganda</a>.', v:'✅' },
    { n:'E10', day:52, date:'22-may', type:'lab',     coords:[46.20, 6.14],  place:'Ginebra · Primera reunión Comité de Emergencia RSI + escalada brote', desc:'<b>Primera reunión del Comité de Emergencia del RSI (2005)</b> para el brote. OMS publica <a href="https://www.who.int/news/item/22-05-2026-first-meeting-of-the-ihr-emergency-committee-regarding-the-epidemic-of-ebola-bundibugyo-virus-disease-in-the-democratic-republic-of-the-congo-and-uganda-2026-temporary-recommendations" target="_blank" rel="noopener">recomendaciones temporales</a>. <b>Datos primarios consolidados — actualización 26-may:</b> según <a href="https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON603" target="_blank" rel="noopener">WHO DON603 (publicado 21-may, revisado 25-may)</a>: <b>83 confirmados DRC + 2 Uganda (al 21-may)</b>; 9 muertes confirmadas DRC + 1 Uganda (CFR confirmados 11%); 746 sospechosos DRC + 176 muertes sospechosas; <b>4 trabajadores sanitarios fallecidos</b>; brote en 15 zonas de salud (Mongbwalu + Rwampara + Bunia concentran 96% sospechosos y 79% confirmados); 4 clusters de exposición transfronteriza en distrito ugandés de Ntoroko. <b>Actualización CDC al 24-may:</b> 101 confirmados + 904 sospechosos = 1,005 casos DRC; 10 conf + 119 sosp = 129 muertes DRC; Uganda elevada a 5 confirmados (3 nuevos anunciados 23-may por Min Salud Uganda). <b>Actualización al 26-may (Min Salud DRC vía JHU Hub + ECDC):</b> <b>121 confirmados + 17 muertes confirmadas en DRC</b>; <b>1,077 sospechosos + 238 muertes sospechosas</b>; Uganda subió a <b>7 confirmados + 1 muerte</b> (3 de los confirmados Uganda vinculados a viaje desde DRC). Ritmo de duplicación de confirmados cada ~5 días sostenido desde el PHEIC. <b>Audit trail del cambio:</b> versión previa citaba Sitrep 01 (al 18-may) con 51 confirmados; superseded por DON603 (21-may rev. 25-may) que reporta 85 totales confirmados, y por CDC update (24-may) que eleva a 106 totales. La trayectoria DON600→DON601 (hantavirus)→DON602 (Bundibugyo PHEIC)→DON603 muestra escalada en seis días desde la firma del PHEIC.', v:'✅' },
    { n:'E11', day:49, date:'19-may', type:'hospital', coords:[20.66, -103.40], place:'Guadalajara, Jalisco · protocolo Mundial activado', desc:'<b>Secretaría de Salud Jalisco activa protocolo especial</b> ante la llegada de la selección de la República Democrática del Congo al Mundial 2026. Áreas de aislamiento y personal capacitado preparados para casos sospechosos de ébola en el Estadio Akron y zonas de entrenamiento. <i>Según reportó Infobae (19-may-2026, secundaria); sin comunicado oficial de Sec. Salud Jalisco localizado al cierre.</i> <b>Dato contextual (Infobae 21-may):</b> reporta aumento de llegadas de ciudadanos del Congo a México; sin pronunciamiento del INM ni cifra oficial confirmada. <b>CERO casos confirmados o sospechosos en territorio mexicano al cierre.</b> Cruce explícito por primera vez entre el corredor del Mundial 2026 y el expediente del brote Bundibugyo.', v:'⚠️' },
    { n:'E12', day:50, date:'20-may', type:'symptom', coords:[-2.51, 28.85], place:'Sud-Kivu (RDC) · expansión geográfica del brote', desc:'<b>Primer caso confirmado en Sud-Kivu</b>, provincia al sureste del foco original. La persona contagiada viajó desde la provincia de <b>Tshopo</b> (noreste de la RDC). <b>El brote rompe el corredor original Ituri-Uganda</b> y se desplaza hacia la frontera con Rwanda, Burundi y Tanzania. Implicación: ampliación del perímetro de vigilancia transfronteriza. <b>Fuente primaria:</b> <a href="https://www.who.int/news-room/speeches/item/who-director-general-s-opening-remarks-at-the-media-briefing-on-ebola-outbreak-in-drc-and-uganda-20-may-2026" target="_blank" rel="noopener">WHO Director-General — opening remarks at media briefing, 20-may-2026</a>.', v:'✅' },
    { n:'E13', day:51, date:'21-may', type:'hospital', coords:[50.10, 14.45], place:'Praga, Chequia · Bulovka Hospital (segundo americano en monitoreo)', desc:'<b>Segundo estadounidense vinculado al brote evacuado a Europa.</b> <b>Dr. Patrick LaRochelle (46)</b>, expuesto a un segundo paciente con Bundibugyo, es trasladado al <b>Hospital Bulovka de Praga</b> (centro checo con instalaciones especializadas para infecciones de alta peligrosidad, según el Ministerio de Salud checo). <b>Asintomático al traslado</b>, en monitoreo. La evacuación a Chequia (no a Alemania ni EE.UU.) muestra el reparto operativo de capacidad de bioseguridad de alto nivel en Europa central. <b>Detalle clínico operativo (al 24-may):</b> LaRochelle aislado en una <b>BioBox chamber</b> tras exposición de alto riesgo, sigue asintomático. Pertenece al <b>Centre Médical Évangelique Bunia (CME-Nyankunde)</b> — el mismo hospital donde trabaja Stafford; eran colegas, no solo paisanos. <b>Cobertura trusted convergente:</b> NBC News, Washington Post, Time, Serge press release. Comunicado primario del Ministerio de Salud checo no localizado directamente al cierre, pero confirmado por múltiples trusted independientes.', v:'⚠️' },
    { n:'E14', day:56, date:'26-may', type:'hospital', coords:[19.43, -99.13], place:'México · IMSS activa vigilancia Mundial 2026', desc:'<b>IMSS activa formalmente respuesta sanitaria para el Mundial 2026</b> ante la llegada de visitantes internacionales y vigilancia específica por ébola, según anuncio del 26 de mayo. Edomex y otras entidades federativas blindan dispositivo sanitario en aeropuertos, sedes mundialistas y puntos de concentración masiva. Secretario de Salud federal Kershenobich: protocolos activos para detección temprana, aislamiento inmediato y búsqueda intencionada de antecedentes de viaje en caso sospechoso. <b>CERO casos confirmados o sospechosos en territorio mexicano al cierre del 27-may</b>, tanto de ébola Bundibugyo como de hantavirus Andes. <b>Actualización al 27-may (Infobae + DDT + PorEsto + Excélsior + MiMorelia + Capital México):</b> IMSS reporta <b>10 eventos de capacitación realizados con 1,301 profesionales de salud participantes</b>. <b>Triage clínico definido</b>: fiebre superior a 38.6°C + síntomas compatibles + historial de viaje de los 21 días previos a zona de brote. Mensaje institucional: "vigilancia preventiva, no hay caso confirmado". <b>Fuentes:</b> primaria — comunicados IMSS / SSA (vía Excélsior y La Jornada del 20 y 26 may); cobertura trusted: <a href="https://www.elimparcial.com/mexico/2026/05/26/imss-alista-respuesta-sanitaria-para-el-mundial-2026-y-activa-vigilancia-por-ebola-ante-la-llegada-de-visitantes-internacionales-a-mexico/" target="_blank" rel="noopener">El Imparcial</a>, La Jornada, Excélsior, DigitalMex, Record. Comunicado oficial IMSS no localizado directamente como URL pública al cierre.', v:'⚠️' },
    { n:'E15', day:50, date:'20-may', type:'lab', coords:[32.81, -117.13], place:'San Diego, EE.UU. · Mapp Biopharmaceutical · BARDA contrata MBP134', desc:'<b>BARDA contrata a Mapp Biopharmaceutical</b> (San Diego, CA) para suministrar <b>MBP134</b>, cóctel bi-específico de anticuerpos diseñado contra tres cepas de filovirus: <b>Zaire, Sudán y Bundibugyo</b>. Mapp es la misma biotech que desarrolló ZMapp durante el brote de ébola África Occidental 2014-2016 (tratamiento dado al misionero estadounidense Kent Brantly). MBP134 está hecho de dos anticuerpos aislados de sangre de un sobreviviente de ébola. <b>Datos preclínicos:</b> protegió a 5 de 6 monos infectados con dosis letal de Bundibugyo. <b>Es el tratamiento que está recibiendo Peter Stafford en Berlin Charité (ver E7).</b> <b>Patrón estructural:</b> doce años después de ZMapp, la misma biotech tiene la solución preclínica al patógeno exacto del brote actual — el "kit BARDA" que la pieza <em>Capitalismo de preparación pandémica</em> (20-may) describe. <b>Fuentes:</b> Fierce Biotech (20-may), Bloomberg vía KFGO (20-may), Medical Dialogues, US News (22-may). Comunicado primario BARDA no localizado directamente como URL pública al cierre — el contrato fue reportado por Bloomberg como noticia exclusiva.', v:'⚠️' },
    { n:'E16', day:49, date:'19-may', type:'lab', coords:[59.91, 10.75], place:'Oslo, Noruega · CEPI · UE + Singapur comprometen €85M+ adicionales', desc:'<b>CEPI recibe compromisos financieros nuevos:</b> <b>Unión Europea €73.7 millones</b> + <b>Singapur USD 12 millones</b> para apoyar el programa "100 Day Mission" y la respuesta a brotes simultáneos hantavirus + Bundibugyo. Anunciado el 19-may en sede CEPI Oslo. Según el comunicado oficial CEPI: "Los brotes simultáneos de hantavirus y ébola Bundibugyo son un recordatorio crudo de que la brecha entre las amenazas y nuestra preparación sigue siendo peligrosamente amplia". CEO Richard Hatchett había pedido USD 2,500M en total el 17-may (ver pieza <em>Quince días antes de Ushuaia</em>). <b>Fuente primaria:</b> <a href="https://cepi.net/european-union-and-singapore-back-cepis-plan-boost-global-defences-against-epidemic-and-pandemic" target="_blank" rel="noopener">CEPI press release (19-may)</a>. Cobertura trusted: Time (<em>Behind the Mission to Stop Viral Outbreaks Within 100 Days</em>, 19-may), The Hill Times (17-may).', v:'✅' },
    { n:'E17', day:55, date:'25-may', type:'lab', coords:[46.20, 6.14], place:'Ginebra · OMS · Virtual Ministerial Briefing + UN News alerta "outpacing"', desc:'<b>Tedros encabeza un Virtual Ministerial Briefing</b> específico sobre el brote Bundibugyo con ministros de salud de la región y socios multilaterales. Es la segunda comparecencia formal del DG sobre el brote en una semana (la primera fue la sesión de Estados Miembros del 22-may, ver E10). <b>Ese mismo período UN News titula:</b> <em>"Ebola epidemic spreading rapidly and outpacing containment efforts"</em> — primera vez que la cobertura ONU oficial reconoce explícitamente que la respuesta va atrás del brote. <b>Cuadro al 26-may consolidado por DRC Min Salud:</b> 121 confirmados + 17 muertes confirmadas; 1,077 sospechosos + 238 muertes sospechosas; Uganda con 7 confirmados. <b>Implicación operativa:</b> el ritmo de duplicación de confirmados (~5 días) sostenido desde el PHEIC ya supera la capacidad de contact tracing en Ituri, Nord-Kivu y Sud-Kivu, con tres provincias activas y red sanitaria precaria. <b>Fuentes primarias:</b> <a href="https://www.who.int/news-room/speeches/item/who-director-general-s-remarks-at-the-virtual-ministerial-briefing-on-the-bundibugyo-ebola-outbreak-25-may-2026" target="_blank" rel="noopener">WHO DG remarks 25-may</a> + <a href="https://news.un.org/en/story/2026/05/1167584" target="_blank" rel="noopener">UN News (25-26 may)</a> + Min Salud DRC bulletin (vía ECDC).', v:'✅' },
    { n:'E18', day:60, date:'30-may', type:'hospital', coords:[1.56, 30.24], place:'Bunia, Ituri (RDC) · Primeros recuperados dados de alta', desc:'<b>Primeras altas hospitalarias del brote Bundibugyo.</b> Cuatro enfermeras que contrajeron el virus mientras atendían pacientes en Ituri son dadas de alta tras recuperación completa, sumando un trabajador de laboratorio dado de alta días antes — <b>cinco recuperados oficialmente</b> al cierre del 30-may. Es la primera buena noticia clínica documentada del brote desde el PHEIC del 17-may. <b>Contexto:</b> de los 18 trabajadores sanitarios contagiados, 4 fallecieron al 26-may; las cinco altas marcan el primer balance positivo del personal médico. <b>Implicación operativa:</b> confirma que el cuidado de soporte temprano + protocolo de aislamiento estricto produce supervivencia en la cepa Bundibugyo (CFR histórico ~25-40% vs. ~50-80% Zaire). <b>Fuente primaria:</b> <a href="https://news.un.org/en/story/2026/06/1167613" target="_blank" rel="noopener">UN News — DR Congo Ebola outbreak: Nurses discharged after full recovery</a>.', v:'✅' },
    { n:'E19', day:63, date:'2-jun', type:'lab', coords:[46.20, 6.14], place:'Ginebra · OMS — DON605 Bundibugyo', desc:'<b>OMS publica Disease Outbreak News 605</b>, tercer informe oficial del brote Bundibugyo tras DON602 (PHEIC, 17-may) y DON603 (21-may rev 25-may). <b>Cifras consolidadas al 1-jun:</b> RDC reporta <b>344 confirmados + 60 muertes confirmadas</b>; <b>116 sospechosos bajo investigación</b> — reducción significativa desde los 1,077 sospechosos del 26-may a 116 conforme el backlog se procesa (confirmando o descartando). Uganda <b>15 confirmados + 1 muerte</b>. <b>Geografía:</b> 24 zonas de salud en tres provincias — Ituri 322 conf (16 zonas), Nord-Kivu 19 conf (7 zonas), Sud-Kivu 3 conf (1 zona). <b>Audit trail:</b> DON605 supersede a DON603 (26-may) — confirmados RDC pasan de 121 a 344 (+184% en 5 días); muertes confirmadas de 17 a 60 (+253%); Uganda de 7 a 15 confirmados (+114%). <b>Implicación operativa:</b> el procesamiento del backlog convierte sospechosos en confirmados a ritmo industrial. Tedros encabeza media briefing el 3-jun-2026 (segunda comparecencia consecutiva, tras la del 22-may y 25-may). <b>Fuentes primarias:</b> <a href="https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON605" target="_blank" rel="noopener">WHO DON605</a> + <a href="https://www.who.int/news-room/speeches/item/who-director-general-s-opening-remarks-at-the-media-briefing---3-june-2026" target="_blank" rel="noopener">WHO DG media briefing (3-jun)</a>.', v:'✅' },
    { n:'E20', day:48, date:'18-may', type:'lab', coords:[38.92, -77.05], place:'EE.UU. · CDC + DHS — Title 42 Order Ebola', desc:'<b>CDC y DHS activan Title 42 Order</b> bajo autoridad de la Public Health Service Act §362/365 (42 USC §§265, 268). Suspende por <b>30 días, vigencia inmediata</b>, la entrada a EE.UU. de personas no estadounidenses que hayan estado en <b>RDC, Uganda o Sudán del Sur en los 21 días previos</b>. Excepciones iniciales: ciudadanos USA, residentes permanentes (green card), militar activo, diplomáticos. <b>Cuatro aeropuertos designados</b> como únicos puntos de entrada con screening reforzado: <b>IAD (Washington-Dulles), ATL (Atlanta), IAH (Houston Bush) y JFK (Nueva York)</b>. Houston y Atlanta son sedes del Mundial 2026 — IAH es base de la selección de RDC. <b>El 22-may un nuevo rule extiende la prohibición a residentes permanentes con viaje reciente</b> a esos países. Es la primera activación de Title 42 desde COVID. <b>Fuentes primarias:</b> <a href="https://www.cdc.gov/ebola/situation-summary/title-42-order.html" target="_blank" rel="noopener">CDC Title 42 Order</a> + <a href="https://www.cdc.gov/media/releases/2026/statement-update-on-title-42-order.html" target="_blank" rel="noopener">CDC update 22-may</a>.', v:'✅' },
    { n:'E21', day:48, date:'18-may', type:'lab', coords:[19.43, -99.13], place:'México · SSA — Aviso UIES-APV-ÉBOLA-03-2026', desc:'<b>Secretaría de Salud emite Aviso Preventivo de Viaje UIES-APV-ÉBOLA-03-2026.</b> Recomienda evitar traslados no esenciales a <b>RDC, Uganda y Sudán del Sur</b>. Documento dirigido a centros de salud, unidades de medicina familiar, hospitales generales y de alta especialidad, Unidades de Vigilancia Epidemiológica Hospitalaria y Red Nacional de Laboratorios de Salud Pública. Activa protocolos en los tres niveles de atención. <b>Cero casos en territorio mexicano al cierre.</b> <b>Fuentes:</b> Proceso (19-may), Milenio, Excélsior, <a href="https://www.gob.mx/salud/prensa/126-mexico-se-mantiene-sin-casos-de-ebola-y-fortalece-medidas-preventivas" target="_blank" rel="noopener">comunicado oficial gob.mx</a>.', v:'✅' },
    { n:'E22', day:49, date:'19-may', type:'lab', coords:[19.43, -99.13], place:'México · SSA — Tres alertas epidemiológicas simultáneas', desc:'<b>México lanza tres alertas epidemiológicas a un mes del Mundial 2026</b>: golpe de calor + hantavirus + ébola. Las dos últimas se designan como "de cuidado para la vigilancia epidemiológica". Es la primera vez en la historia del país que se emiten tres alertas simultáneas conectadas con un megaevento deportivo. Infobae 19-may documenta el paquete completo. <b>Implicación operativa:</b> el dispositivo de blindaje sanitario mexicano para el Mundial activa frentes paralelos antes de que ningún caso entre al país. <b>Fuente:</b> <a href="https://www.infobae.com/mexico/2026/05/19/mexico-lanza-tres-alertas-epidemiologicas-a-un-mes-del-mundial-golpe-de-calor-hantavirus-y-ebola-en-el-radar/" target="_blank" rel="noopener">Infobae (19-may-2026)</a>.', v:'✅' },
    { n:'E23', day:57, date:'27-may', type:'lab', coords:[45.42, -75.69], place:'Ottawa · Public Health Agency of Canada — Border Order', desc:'<b>Canadá impone prohibición de entrada por 90 días</b> a residentes de RDC, Uganda y Sudán del Sur. <b>Vigencia desde el miércoles 27-may.</b> Canadienses, residentes permanentes y extranjeros que hayan estado en esas zonas recientemente y sean asintomáticos deben observar <b>cuarentena de 21 días desde el sábado 30-may</b>. <b>Detalle político:</b> según CBC News, la decisión "no se basó en consejo de oficiales de salud pública" — se tomó por consideraciones del Mundial 2026 (Toronto y Vancouver son sedes canadienses). Health Minister "doubles down" sobre la medida bajo presión. <b>Fuentes primarias:</b> <a href="https://www.canada.ca/en/public-health/news/2026/05/government-of-canada-introduces-temporary-border-measures-in-response-to-the-ebola-disease-outbreak.html" target="_blank" rel="noopener">Government of Canada — comunicado oficial PHAC</a> + <a href="https://www.cbc.ca/news/politics/canada-ebola-travel-suspension-9.7215216" target="_blank" rel="noopener">CBC News</a>.', v:'✅' },
    { n:'E24', day:58, date:'28-may', type:'lab', coords:[40.71, -74.01], place:'Norteamérica · Acuerdo trilateral USA + México + Canadá', desc:'<b>Los tres países anfitriones del Mundial 2026 anuncian alineamiento de medidas sanitarias.</b> Primer pacto trilateral de salud pública con propósito de megaevento deportivo desde COVID. Coordinan restricciones de viaje, screening en aeropuertos designados y protocolos de cuarentena para arribos desde zonas de brote en África Central. <b>Implicación estructural:</b> el corredor del Mundial activa por primera vez un dispositivo regulatorio trinacional simultáneo — la regulación opera antes de que el riesgo material aterrice. <b>Fuentes:</b> <a href="https://www.aljazeera.com/sports/2026/5/28/us-mexico-canada-announce-ebola-related-travel-measures-for-world-cup" target="_blank" rel="noopener">Al Jazeera (28-may)</a> + <a href="https://www.cbc.ca/news/world/congo-fifa-ebola-9.7214863" target="_blank" rel="noopener">CBC News</a> + US News + The Hill.', v:'✅' },
    { n:'E25', day:61, date:'31-may', type:'hospital', coords:[19.29, -99.18], place:'CDMX · INR-CENIAQ — designado para casos sospechosos', desc:'<b>El Centro Nacional de Investigación y Atención de Quemados (CENIAQ) del Instituto Nacional de Rehabilitación</b> queda designado como <b>centro nacional de atención para casos sospechosos de ébola</b> en territorio mexicano. La capacidad de aislamiento de CENIAQ —diseñada originalmente para grandes quemados— se reconvierte como ala de bioseguridad. Anuncio coincide con la cobertura "México se blinda" de Expansión (31-may) que detalla helicópteros, médicos y equipos de emergencia coordinados con IMSS, ISSSTE y secretarías estatales. <b>Fuentes:</b> <a href="https://www.elimparcial.com/mexico/2026/05/31/mexico-emite-aviso-epidemiologico-por-ebola-el-ceniaq-sera-el-centro-de-atencion-en-caso-de-presentarse-cuadros-clinicos-sospechosos/" target="_blank" rel="noopener">El Imparcial (31-may)</a> + <a href="https://www.jornada.com.mx/noticia/2026/05/31/sociedad/casos-sospechosos-de-ebola-en-mexico-serian-internados-en-el-instituto-nacional-de-rehabilitacion" target="_blank" rel="noopener">La Jornada (31-may)</a> + Expansión (31-may, "México se blinda").', v:'✅' },
    { n:'E26', day:62, date:'1-jun', type:'lab', coords:[59.91, 10.75], place:'Oslo · CEPI — fast-track USD 62M para 3 vacunas Bundibugyo', desc:'<b>CEPI anuncia paquete de USD 62 millones</b> para acelerar tres vacunas candidatas contra Bundibugyo en respuesta directa al brote PHEIC. Desglose: <b>USD 50M para Moderna</b> (vacuna mRNA específica Bundibugyo, alianza estratégica ampliada con CEPI desde enero 2026), <b>USD 8.6M para University of Oxford + Serum Institute of India</b> (manufactura en SII), <b>USD 3.2M para International AIDS Vaccine Initiative (IAVI)</b>. Es la primera activación operativa del programa "100 Day Mission" para un brote real declarado PHEIC. <b>Implicación de mercado:</b> Moderna stock cierra 1-jun en USD 45.98 — sin movimiento dramático tras el anuncio, contrasta con el spike intradía de 9% del 11-may por hantavirus. Los analistas mantienen postura: "vacuna hantavirus está a una década sin un Warp Speed-level funding". <b>Fuentes primarias:</b> <a href="https://cepi.net/cepi-fast-tracks-three-bundibugyo-ebolavirus-vaccine-candidates" target="_blank" rel="noopener">CEPI press release</a> + <a href="https://www.statnews.com/2026/06/01/ebola-bundibugyo-vaccine-studies-cepi-62-million-funding/" target="_blank" rel="noopener">STAT News (1-jun)</a> + CNBC Africa + Euronews + BioWorld.', v:'✅' },
    { n:'E27', day:66, date:'5-jun', type:'lab', coords:[1.56, 30.24], place:'Bunia, Ituri (RDC) + Kampala, Uganda · Cuadro epidemiológico al 5-jun', desc:'<b>Min Salud DRC al 5 de junio: 381 confirmados + 64 muertes confirmadas al 3-jun, más 18 nuevos confirmados y 2 nuevas muertes el 4-jun.</b> Geografía: Ituri 359 confirmados en 17 zonas, Nord-Kivu 19 confirmados en 7 zonas, Sud-Kivu 3 en 1 zona. Sospechosos reducidos a 116 desde 1,077 del 26-may. Uganda sube a 19 confirmados + 2 muertes (vs 15+1 del 1-jun). 6 recuperados RDC + 2 Uganda = 8 totales. <b>Audit trail interno:</b> esta cifra fue corregida 48 horas después por la actualización ECDC del 7-jun (ver E30), que reporta 515 confirmados RDC + 91 muertes confirmadas. Esto invalida la lectura preliminar de "ritmo de duplicación se desacelera" que esta entrada planteó el 5-jun: la curva NO se desaceleró. El brote sigue activo y acelerando. <b>Fuentes primarias:</b> <a href="https://www.who.int/emergencies/situations/ebola-outbreak---drc-2026" target="_blank" rel="noopener">WHO Ebola outbreak DRC 2026 dashboard</a> + Min Salud DRC bulletin (5-jun).', v:'✅' },
    { n:'E28', day:67, date:'6-jun', type:'hospital', coords:[52.52, 13.40], place:'Berlín · Charité — Stafford dado de alta', desc:'<b>El Dr. Peter Stafford es dado de alta del Hospital Charité de Berlín tras 17 días de tratamiento antiviral.</b> Cierre clínico del caso E7 del expediente. PCR negativos sostenidos, ausencia de síntomas confirmada por más de 72 horas, ningún rastro de virus desde el 30 de mayo. <b>Se reúne con su esposa Dra. Rebekah Stafford y sus cuatro hijos</b> (todos PCR negativos durante toda la cuarentena, nunca desarrollaron síntomas). <b>Dr. Leif Erik Sander, director del Departamento de Infectología y Medicina de Cuidados Críticos del Charité:</b> "Estamos muy satisfechos con el éxito del tratamiento y lo consideramos un éxito terapéutico significativo." <b>Lectura editorial:</b> el paralelismo Brantly 2014 → Stafford 2026 se cierra con desenlace clínico positivo confirmado (la pieza <em>La biotech que ya tenía la receta</em> del 28-may anticipó este resultado bajo "steadily recovering"). El protocolo Mapp Biopharmaceutical MBP134 + cuidado de soporte temprano produce la segunda supervivencia documentada de misionero estadounidense con ébola en 12 años. <b>Fuentes:</b> <a href="https://serge.org/blog/american-medical-missionary-tests-positive-for-ebola-in-democratic-republic-of-congo/" target="_blank" rel="noopener">Serge — comunicado oficial del alta</a> + <a href="https://www.cbsnews.com/news/ebola-outbreak-congo-us-doctor-recovers-peter-stafford-germany/" target="_blank" rel="noopener">CBS News</a> + Eastern Herald + Spokesman-Review + Global Banking and Finance + Charité press release.', v:'✅' },
    { n:'E29', day:67, date:'6-jun', type:'hospital', coords:[19.43, -99.13], place:'México · Operativo de bioseguridad Mundial 2026 activo', desc:'<b>México activa formalmente operativo de bioseguridad ante inicio del Mundial 2026 el 11-jun.</b> Filtros sanitarios en aeropuertos internacionales (AICM, AIFA, Guadalajara, Monterrey, Cancún) con personal de Sanidad Internacional revisando arribos. <b>Brigadas en las 16 alcaldías de la CDMX</b> con carpas de diagnóstico instaladas para sarampión + ébola + hantavirus. Estimación oficial: 5.5 millones de turistas internacionales. <b>El Financiero (7-jun) titula: "México niega la entrada al ébola"</b> con detalle del protocolo de derivación al CENIAQ (Instituto Nacional de Rehabilitación) para casos sospechosos. IMSS confirma 1,301 profesionales capacitados en 20 Unidades Médicas de Alta Especialidad + seis guías operativas distribuidas. <b>Cero casos confirmados o sospechosos en territorio mexicano al cierre.</b> <b>Fuentes:</b> <a href="https://www.elimparcial.com/mexico/2026/06/06/mexico-activa-un-operativo-de-bioseguridad-por-el-mundial-2026-instalando-filtros-en-aeropuertos-y-carpas-de-diagnostico-en-las-16-alcaldias-de-la-cdmx-para-evitar-brotes-de-sarampion-y-la-entrada-de-virus-graves/" target="_blank" rel="noopener">El Imparcial (6-jun)</a> + <a href="https://www.elfinanciero.com.mx/salud/2026/06/07/mexico-niega-la-entrada-al-ebola-asi-trataran-los-casos-sospechosos-durante-el-mundial-2026/" target="_blank" rel="noopener">El Financiero (7-jun)</a> + Azteca Querétaro + Sin Embargo + Quadratín Jalisco.', v:'✅' },
    { n:'E30', day:68, date:'7-jun', type:'lab', coords:[1.56, 30.24], place:'Bunia, Ituri (RDC) · MINSA RDC bulletin · cifras al 6-jun', desc:'<b>Min Salud DRC publica cifras al 6 de junio: 515 confirmados + 91 muertes confirmadas + 283 personas hospitalizadas en aislamiento.</b> Geografía actualizada: <b>Ituri 487 confirmados en 17 zonas de salud (vs 359 al 4-jun), Nord-Kivu 25 en 7 zonas (vs 19), Sud-Kivu 3 en 1 zona</b>. Uganda mantiene 19 confirmados + 2 muertes. Desde la actualización del 5-jun: <b>+134 confirmados nuevos y +27 muertes nuevas en 48 horas</b>. <b>Audit trail crítico:</b> el ritmo de duplicación NO se desaceleró como sugería la entrada E27. Estimación de ritmo actual: ~67 confirmados nuevos por día (1.34x desde 5-jun). La curva del brote sigue activa y supera la capacidad de contact tracing en las tres provincias. <b>Letalidad confirmada cruda al 7-jun: 91/515 = 17.7% en RDC + 2/19 = 10.5% en Uganda; agregada: 93/534 = 17.4%.</b> <b>Fuentes primarias:</b> <a href="https://www.ecdc.europa.eu/en/ebola-outbreak-democratic-republic-congo-and-uganda" target="_blank" rel="noopener">ECDC Ebola outbreak DRC and Uganda</a> + WHO DRC dashboard + Min Salud DRC bulletin del 7-jun.', v:'✅' },
    { n:'E31', day:74, date:'14-jun', type:'lab', coords:[38.92, -77.05], place:'EE.UU. · Title 42 vence el 17-jun · convergencia con RDC vs Portugal en Houston', desc:'<b>La Title 42 Order del 18-may (vigencia 30 días) expira formalmente el 17 de junio.</b> El mismo día está programado el partido de debut mundialista de la República Democrática del Congo contra Portugal en NRG Stadium de Houston. <b>Al cierre del 8-jun no hay anuncio público de extensión de la orden por parte de CDC o DHS</b>. La convergencia genera tres escenarios operativos: (1) la orden se renueva discretamente antes del 17-jun y el régimen continúa, (2) la orden se deja vencer y el screening reforzado en los cuatro aeropuertos designados pasa a protocolo voluntario, (3) la orden se renueva con modificaciones que excluyan a delegaciones mundialistas oficialmente acreditadas. <b>Audit trail:</b> esta entrada se publica como evento futuro próximo (⚠️) y se actualizará con la resolución concreta. <b>Lectura editorial:</b> la pieza del 4-jun <em>La precaución hacia el virus equivocado</em> anticipó esta convergencia como el cierre del ciclo Klein: el dispositivo regulatorio fue calibrado contra ébola africano justo cuando el corredor del Mundial trae la selección africana al hub aeroportuario más restringido. <b>Fuentes:</b> <a href="https://www.cdc.gov/ebola/situation-summary/title-42-order.html" target="_blank" rel="noopener">CDC Title 42 Order</a> + <a href="https://abc13.com/post/cdc-imposes-ebola-travel-restrictions-houston-prepares-host-world-cup-visitors/19134375/" target="_blank" rel="noopener">ABC13 Houston</a> + Houston Public Media + Lexology + Erickson Immigration.', v:'⚠️' },
    { n:'E32', day:58, date:'28-may', type:'lab', coords:[-1.29, 36.82], place:'Nairobi, Kenya · Propuesta USA de facility para cuarentena ébola', desc:'<b>EE.UU. propone instalar facility de cuarentena para ébola en Kenya, no en territorio estadounidense.</b> CNN documenta el backlash inmediato dentro y fuera del país: críticas por externalizar el manejo clínico de casos sospechosos repatriados; cuestionamientos sobre la asimetría operativa del régimen Title 42 (que filtra arribos hacia EE.UU. pero descarga el procesamiento clínico en África Oriental). La propuesta se enmarca dentro del paquete de USD 13.5 millones que EE.UU. comprometió con Kenya el 5-jun para preparación ébola, anunciado tras conversación entre el Secretario de Estado Marco Rubio y el Presidente William Ruto. <b>Implicación estructural:</b> el dispositivo trinacional del Mundial 2026 (Title 42 + PHAC + SSA) consigue externalizar el riesgo clínico fuera del corredor norteamericano sin pagar el costo político de la cuarentena en suelo propio. <b>Fuentes:</b> <a href="https://www.cnn.com/2026/05/28/world/ebola-kenya-health-facility-criticism-intl" target="_blank" rel="noopener">CNN (28-may)</a>.', v:'✅' },
    { n:'E33', day:65, date:'4-jun', type:'lab', coords:[38.92, -77.05], place:'Washington DC · HHS + BARDA expanden MBP134 a americanos de alto riesgo', desc:'<b>Departamento de Salud y Servicios Humanos confirma que estadounidenses con exposiciones de alto riesgo a ébola Bundibugyo tendrán acceso al tratamiento experimental MBP134.</b> BARDA coordina el envío de anticuerpos monoclonales bajo Expanded Access. El protocolo amplía formalmente lo que con Stafford fue uso compasivo único: ahora Mapp Biopharmaceutical podrá suministrar dosis a múltiples pacientes estadounidenses calificados como alto riesgo. <b>Implicación:</b> el contrato BARDA-Mapp del 20-may (que la columna <em>La biotech que ya tenía la receta</em> del 28-may identificó como el cierre del ciclo Klein 2014-2026) escala a régimen operativo. La biotech de San Diego que tenía la receta ahora la distribuye institucionalmente. <b>Fuente primaria:</b> <a href="https://www.statnews.com/2026/06/04/kenya-ebola-quarantine-experimental-treatment-mbp-134-authorized/" target="_blank" rel="noopener">STAT News (4-jun)</a>.', v:'✅' },
    { n:'E34', day:66, date:'5-jun', type:'lab', coords:[9.03, 38.74], place:'Addis Abeba · Africa CDC + OMS · Plan continental USD 518M', desc:'<b>Africa CDC y OMS lanzan plan conjunto de respuesta continental por USD 518 millones para combatir el brote Bundibugyo durante seis meses (junio a noviembre 2026).</b> El plan articula 12 países africanos en torno a tres ejes: vigilancia transfronteriza, capacitación clínica y stockpile de contramedidas. Es la primera vez desde COVID que Africa CDC y OMS lanzan un plan continental conjunto con presupuesto unificado para un brote regional. <b>Implicación operativa:</b> el régimen pre-pandémico que la columna del 20-may (<em>Capitalismo de preparación pandémica</em>) describió como infraestructura Lakoff se activa con cifra precisa para Bundibugyo en seis meses. <b>Implicación editorial:</b> mientras USA + México + Canadá ponen USD ~0 en gasto sanitario directo y se concentran en restricciones de viaje + screening (gasto regulatorio), Africa CDC + OMS movilizan medio billón para respuesta operativa en el origen del brote. La asimetría confirma la lectura Klein invertida. <b>Fuente primaria:</b> <a href="https://www.who.int/news/item/05-06-2026-africa-cdc-and-who-launch-joint-continental-ebola-response-plan" target="_blank" rel="noopener">WHO + Africa CDC press release (5-jun)</a>.', v:'✅' },
    { n:'E35', day:67, date:'6-jun', type:'lab', coords:[-1.29, 36.82], place:'Washington DC + Nairobi · USA-Kenya USD 13.5M + Rubio reengagement GAVI', desc:'<b>Estados Unidos compromete USD 13.5 millones a Kenya para preparación contra ébola Bundibugyo.</b> El anuncio surge de conversación entre el Secretario de Estado Marco Rubio y el Presidente keniano William Ruto. Mismo día, Rubio anuncia que EE.UU. "reengage" con Gavi, la Alianza Global para Vacunas, después de meses de tensión por el bloqueo de USD 300 millones por el Secretario de Salud Robert F. Kennedy Jr. (ver E36). El reengagement parcial busca normalizar la relación con la coalición que custodia el stockpile global de Ervebo (vacuna Merck cepa Zaire, no cubre Bundibugyo). <b>Implicación:</b> la tensión interna del gabinete Trump entre Rubio (multilateralista pragmático) y Kennedy (escéptico de vacunas) se resuelve operativamente vía dinero discreto a Kenya, no vía liberación del fondo GAVI. <b>Fuentes:</b> <a href="https://thehill.com/policy/healthcare/5907909-rubio-state-department-gavi/" target="_blank" rel="noopener">The Hill (Rubio-Gavi)</a> + <a href="https://www.newsnationnow.com/politics/marco-rubio-global-vaccine-program-gavi-funding/" target="_blank" rel="noopener">NewsNation</a> + State Department briefings.', v:'⚠️' },
    { n:'E36', day:67, date:'6-jun', type:'lab', coords:[38.89, -77.04], place:'Washington DC · Kennedy bloquea USD 300M de GAVI (vencen 30-sep)', desc:'<b>El Secretario de Salud Robert F. Kennedy Jr. mantiene en bloqueo USD 300 millones anuales (fiscal 2025 + fiscal 2026 = USD 600M agregado) que el Congreso asignó para Gavi, la Alianza Global para Vacunas.</b> Los fondos vencen formalmente el 30 de septiembre si la administración Trump no los libera. HHS argumenta que retiene el dinero porque Gavi rechazó desarrollar plan para eliminar el conservante tiomersal de sus vacunas pese a petición formal. Kennedy sostiene que tiomersal causa autismo. La CDC y múltiples estudios revisados por pares descartan ese vínculo. <b>Gavi estima que la pérdida del financiamiento USA podría dejar a 75 millones de niños sin vacunación de rutina en los próximos cinco años, con 1.2 millones de muertes infantiles atribuibles.</b> Gavi custodia el stockpile global de Ervebo (vacuna Merck contra ébola cepa Zaire). <b>Implicación estructural:</b> el bloqueo Kennedy afecta directamente la arquitectura financiera multilateral que el expediente ha documentado como infraestructura Lakoff. La asimetría operativa se acentúa: mientras USA bloquea USD 300M de Gavi multilateral, BARDA acelera MBP134 (USA-controlado, Mapp Biopharmaceutical privado). <b>Fuentes:</b> <a href="https://www.cidrap.umn.edu/childhood-vaccines/us-lawmakers-seek-answers-blocked-funding-gavi" target="_blank" rel="noopener">CIDRAP</a> + <a href="https://indepthnh.org/2026/04/21/shaheen-presses-rfk-jr-to-release-health-funds-to-vaccinate-children-prevent-outbreaks-worldwide/" target="_blank" rel="noopener">Shaheen presiona a RFK Jr.</a> + The Hill + Prism News.', v:'✅' },
    { n:'E37', day:69, date:'9-jun', type:'lab', coords:[1.56, 30.24], place:'Bunia, Ituri (RDC) · MINSA RDC bulletin · cifras al 7-jun', desc:'<b>Min Salud DRC publica cifras al 7 de junio: 550 confirmados + 101 muertes confirmadas + 309 personas hospitalizadas en aislamiento.</b> Geografía: <b>Ituri 518 confirmados en 17 zonas de salud, Nord-Kivu 29 en 7 zonas, Sud-Kivu 3 en 1 zona</b>. Uganda mantiene 19 confirmados + 2 muertes (al 8-jun). Desde la actualización del 8-jun (515 conf + 91 muertes): <b>+35 confirmados nuevos y +10 muertes nuevas en 24 horas</b>. <b>El brote cruza la barrera de las 100 muertes confirmadas</b> a dos días de la inauguración del Mundial 2026. Letalidad confirmada cruda al 9-jun: 101/550 = 18.4% en RDC; agregada (RDC+Uganda) 103/569 = 18.1%. <b>Audit trail:</b> cifras superseden el cuadro del 8-jun (E30); ritmo sostenido ~35 confirmados nuevos por día. La curva NO se aplana pese a la respuesta institucional consolidada. <b>Fuentes primarias:</b> <a href="https://www.ecdc.europa.eu/en/ebola-outbreak-democratic-republic-congo-and-uganda" target="_blank" rel="noopener">ECDC Ebola outbreak DRC and Uganda</a> + <a href="https://www.nicd.ac.za/situational-update-on-the-ebola-disease-outbreak-caused-by-bundibugyo-virus-democratic-republic-of-the-congo-and-uganda/" target="_blank" rel="noopener">NICD situational update</a> + WHO DRC dashboard.', v:'✅' },
    { n:'E38', day:73, date:'11-jun', type:'hospital', coords:[19.30, -99.15], place:'CDMX · Estadio Azteca · Inauguración Mundial 2026 + sarampión como amenaza #1', desc:'<b>Arranca el Mundial 2026.</b> México abre el torneo contra Sudáfrica en el Estadio Azteca de la Ciudad de México. 16 sedes en tres países, cinco semanas, millones de aficionados convergiendo en aeropuertos, estadios, hoteles y transporte público. <b>Giro epidemiológico:</b> los expertos de salud pública desplazan su preocupación principal del ébola al <b>sarampión</b>. El CDC estadounidense confirma <b>2,030 casos de sarampión en EE.UU. en 2026</b> al 4-jun, cerca del total de todo 2025, con advertencia formal de la OPS (Organización Panamericana de la Salud) esa misma semana. El sarampión es uno de los patógenos más contagiosos que existen y se transmite por aerosol, justo el escenario de recintos cerrados del Mundial. <b>Lectura editorial:</b> el sarampión confirma la tesis de la pieza del 4-jun (<em>La precaución hacia el virus equivocado</em>): el dispositivo regulatorio trinacional se calibró contra ébola africano (de contacto, improbable en estadios) mientras el vector que el Mundial sí amplifica es aerosol en multitudes. Al sarampión, además, lo agrava el bloqueo de Gavi documentado en <em>La transferencia silenciosa</em> (9-jun) y la postura anti-vacunas de RFK Jr. <b>Cero casos de ébola en EE.UU. al cierre.</b> <b>Fuentes:</b> <a href="https://www.cnbc.com/2026/06/04/world-cup-2026-health-officials-focused-on-ebola-measles.html" target="_blank" rel="noopener">CNBC (4-jun)</a> + <a href="https://www.npr.org/2026/06/05/nx-s1-5846403/world-cup-mosquitoes-ebola-heat" target="_blank" rel="noopener">NPR (5-jun)</a> + Fast Company + The Conversation + PAHO warning.', v:'✅' },
    { n:'E39', day:73, date:'11-jun', type:'lab', coords:[1.56, 30.24], place:'Bunia, Ituri (RDC) · OMS DON606 · cifras al 11-jun', desc:'<b>OMS publica Disease Outbreak News 606.</b> Cifras al 11 de junio (datos RDC al 9-jun): <b>RDC 635 confirmados + 127 muertes confirmadas + 260 hospitalizados en aislamiento.</b> Geografía: <b>Ituri 600 confirmados en 18 zonas de salud (nueva zona afectada: Tchomia, con 2 confirmados), Nord-Kivu 32 en 7 zonas, Sud-Kivu 3 en 1 zona.</b> Uganda mantiene transmisión epidemiológicamente vinculada a la RDC, con casos importados más transmisión secundaria entre contactos y trabajadores sanitarios. Desde el reporte del 10-jun: <b>+37 confirmados nuevos y +12 muertes nuevas en 24 horas.</b> <b>Audit trail:</b> cifras superseden el cuadro del 9-jun (E37, 550 conf + 101 muertes). El brote suma <b>+85 confirmados y +26 muertes en 4 días</b> (7 a 11-jun). Letalidad confirmada cruda al 11-jun: 127/635 = 20.0% en RDC. La curva sigue ascendente el mismo día de la inauguración del Mundial. Expansión territorial activa: nueva zona de salud Tchomia en Ituri. <b>Fuentes primarias:</b> <a href="https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON606" target="_blank" rel="noopener">WHO DON606</a> + <a href="https://www.ecdc.europa.eu/en/ebola-outbreak-democratic-republic-congo-and-uganda" target="_blank" rel="noopener">ECDC</a> + <a href="https://www.nicd.ac.za/situational-update-on-the-ebola-disease-outbreak-caused-by-bundibugyo-virus-democratic-republic-of-the-congo-and-uganda/" target="_blank" rel="noopener">NICD situational update</a>.', v:'✅' },
    { n:'E40', day:72, date:'10-jun', type:'lab', coords:[38.92, -77.05], place:'Washington DC + capitales · Restricciones de viaje se amplían a 6 países + USD 20M USA', desc:'<b>El cerco de restricciones de viaje por ébola se amplía a seis países.</b> Al 28-may ya habían anunciado prohibiciones de entrada o suspensión de documentos migratorios para viajeros con residencia o presencia reciente en RDC, Uganda o Sudán del Sur: <b>Estados Unidos, Canadá, Bahamas, Bahrein, Jordania y Ruanda</b> (Al Jazeera). El 10-jun el Department of State estadounidense anuncia <b>USD 20 millones adicionales para preparación contra ébola en Burundi, Kenya, Ruanda y Sudán del Sur</b>, que se suman a los USD 13.5M de Kenya del 6-jun. <b>Gasto bilateral USA-África: USD 33.5M en cuatro días, todo en países vecinos al brote (anillo perimetral), no en RDC ni Uganda directamente.</b> <b>Lectura editorial:</b> el patrón es de contención perimetral. Se financia el anillo fronterizo para que el brote no alcance los hubs de salida, mientras la contribución multilateral a Gavi (USD 600M) sigue bloqueada por RFK Jr. Es el dinero por canal bilateral discreto bajo control estadounidense que la pieza <em>La transferencia silenciosa</em> (9-jun) describió. <b>Fuentes:</b> <a href="https://www.state.gov/releases/office-of-the-spokesperson/2026/06/ebola-response-update-june-10-2026" target="_blank" rel="noopener">State Dept (10-jun)</a> + <a href="https://www.aljazeera.com/news/2026/5/28/ebola-outbreak-what-travel-restrictions-have-countries-imposed" target="_blank" rel="noopener">Al Jazeera (restricciones por país)</a>.', v:'✅' },
    { n:'E41', day:76, date:'14-jun', type:'lab', coords:[1.56, 30.24], place:'Bunia, Ituri (RDC) · OMS DON607 + MINSA RDC · escalada al 13-jun', desc:'<b>OMS publica DON607 (13-jun) y MINSA RDC actualiza al 14-jun: el brote escala con fuerza.</b> DON607 (datos al 10-jun): RDC 676 confirmados + 136 muertes (CFR 20.1%); Uganda 19 casos con al menos 37 recuperados. <b>MINSA RDC al 14-jun (datos al 13-jun): 782 confirmados + 181 muertes confirmadas + 359 hospitalizados en aislamiento.</b> <b>+106 confirmados nuevos y +45 muertes nuevas desde el 12-jun.</b> Geografía: <b>Ituri 717 confirmados en 20 zonas de salud (vs 18 el 11-jun), Nord-Kivu 62 en 10 zonas (casi el doble de los 32 del 11-jun), Sud-Kivu 3 en 1 zona.</b> <b>Audit trail:</b> cifras superseden el cuadro del 11-jun (E39, 635 conf + 127 muertes). En 3 días: <b>+147 confirmados y +54 muertes.</b> La curva NO se aplana, se acelera: la expansión en Nord-Kivu (32 a 62) y la suma de 2 zonas nuevas en Ituri confirman propagación territorial activa. Letalidad confirmada cruda al 14-jun: 181/782 = 23.1% en RDC, acercándose al rango histórico Bundibugyo (25-40%). <b>Fuentes primarias:</b> <a href="https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON607" target="_blank" rel="noopener">WHO DON607</a> + <a href="https://www.nicd.ac.za/situational-update-on-the-ebola-disease-outbreak-caused-by-bundibugyo-virus-democratic-republic-of-the-congo-and-uganda/" target="_blank" rel="noopener">NICD situational update (14-jun)</a> + <a href="https://www.ecdc.europa.eu/en/ebola-outbreak-democratic-republic-congo-and-uganda" target="_blank" rel="noopener">ECDC</a>.', v:'✅' },
    { n:'E42', day:78, date:'16-jun', type:'hospital', coords:[20.66, -103.40], place:'Guadalajara, Jalisco · Colombia vs RDC (23-jun) · vigilancia reforzada', desc:'<b>A una semana del partido Colombia vs República Democrática del Congo en el Estadio Akron de Guadalajara (23-jun), México refuerza la vigilancia epidemiológica.</b> La Secretaría de Salud, junto con autoridades migratorias y aeroportuarias, intensifica el monitoreo en aeropuertos y puntos de entrada de las tres sedes mexicanas (CDMX, Guadalajara, Monterrey). El partido cruza por primera vez en cancha al equipo del país del brote (RDC) con afición sudamericana (Colombia) en suelo latinoamericano. <b>México mantiene el riesgo nacional en "muy bajo" y cero casos de ébola o hantavirus al cierre.</b> Recomendación oficial a visitantes: esquema de vacunación completo, incluido <b>sarampión</b>, influenza y COVID. <b>El riesgo dominante señalado por las autoridades para las sedes mexicanas no es viral sino el calor extremo</b> (Guadalajara, Monterrey y Houston bajo ola de calor y humedad). <b>Lectura editorial:</b> la sede latinoamericana del corredor mundialista activa el escenario que la pieza del 4-jun anticipó. El dispositivo sigue calibrado contra ébola africano mientras el vector hantavirus Andes (endémico en el cono sur, de donde viene la afición) no aparece en el protocolo de cribado por cepa. <b>Fuentes:</b> <a href="https://www.mexicotours.travel/mexico_health_measures/" target="_blank" rel="noopener">Mexico Health Measures FIFA WC 2026</a> + <a href="https://sastm.org.za/2026/05/28/mexico-gives-advice-on-diseases-and-other-risks-during-the-soccer-world-cup/" target="_blank" rel="noopener">SASTM (avisos México)</a> + US Embassy Mexico FIFA WC 2026.', v:'⚠️' },
    { n:'E43', day:111, date:'21-jul', type:'lab', coords:[5.60,-0.19], place:'Accra, Ghana · Africa CDC: el brote supera las 1,000 muertes', desc:'<b>Jean Kaseya (Africa CDC) confirma en una cumbre de salud en Ghana: 1,031 muertes y ~2,473 casos al 21-jul.</b> Sus palabras: <b>"están muriendo porque no tenemos vacunas, no tenemos medicina, no tenemos financiamiento"</b>. Africa CDC subraya que es <b>el brote de ébola de propagación más rápida registrado</b>: superó las 1,000 muertes en menos de 10 semanas (África Occidental 2013-2016 tardó ~8 meses). Thierno Balde, jefe de incidente de la OMS: <b>"el brote sigue por delante de nosotros y estamos en fase de alcanzarlo"</b>. El mismo día, Kaseya pidió por carta a EE.UU. (RFK Jr.) <b>sacar a Uganda de las restricciones de entrada</b>: "las medidas de salud pública deben seguir la evidencia". Sin respuesta formal al cierre. <b>Fuentes:</b> <a href="https://www.aljazeera.com/news/2026/7/22/nearly-1000-people-have-died-from-ebola-in-dr-congo" target="_blank" rel="noopener">Al Jazeera (22-jul)</a> · <a href="https://www.cidrap.umn.edu/ebola/africa-cdc-calls-more-protection-health-workers-deadly-ebola-outbreak-shows-no-sign-slowing" target="_blank" rel="noopener">CIDRAP</a> · <a href="https://africacdc.org/news-item/africa-cdc-calls-for-urgent-review-of-u-s-ebola-related-entry-restrictions-on-uganda/" target="_blank" rel="noopener">Africa CDC (21-jul)</a>.', v:'✅' },
    { n:'E44', day:118, date:'28-jul', type:'lab', coords:[0.35,32.58], place:'Kampala · Uganda declarada libre de ébola', desc:'<b>Uganda cierra su brote en 74 días: 20 casos confirmados, 2 muertes, cero transmisión comunitaria sostenida.</b> Último caso el 21-jun; último paciente dado de alta el 16-jul; cuenta regresiva de 42 días completada. De los 20 casos, 15 fueron importados de la RDC y 5 de transmisión secundaria (Kampala y Wakiso). <b>El contraste operativo con la RDC es el dato:</b> la misma cepa, la misma frontera, y un sistema que contuvo en 74 días lo que del otro lado sigue sin techo. Uganda tenía experiencia previa directa con Bundibugyo (2007, el brote que dio nombre al subtipo; 2012). Pese al cierre, EE.UU. mantenía a Uganda en las restricciones del Title 42 al 11-ago. <b>Fuentes:</b> WHO DON614 · <a href="https://www.ecdc.europa.eu/en/ebola-outbreak-democratic-republic-congo-and-uganda" target="_blank" rel="noopener">ECDC</a> · Ministerio de Salud de Uganda (28-jul).', v:'✅' },
    { n:'E45', day:120, date:'30-jul', type:'lab', coords:[46.20,6.14], place:'Ginebra · OMS DON614: 3,626 casos, 1,589 muertes', desc:'<b>La OMS publica el DON614 (1-ago, datos al 30-jul): 3,626 casos totales (3,605 RDC + 20 Uganda + 1 Francia) y 1,589 muertes, CFR 44%.</b> Ituri concentra el 89.6% de los casos; 46 zonas de salud en 5 provincias (38 activas); 119 trabajadores de salud infectados. <b>Audit trail:</b> del DON613 (15-jul: 2,145/830) al DON614 (30-jul: 3,626/1,589): <b>+1,481 casos y +759 muertes en 15 días</b>. La letalidad cruza el techo histórico de Bundibugyo (25-40%) y el brote es ya el <b>segundo más grande de la historia del ébola, el mayor jamás registrado en la RDC</b>. La serie DON sigue publicando con ~10 días de rezago frente a los boletines nacionales y de Africa CDC. <b>Fuente primaria:</b> <a href="https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON614" target="_blank" rel="noopener">WHO DON614 (1-ago-2026)</a>.', v:'✅' },
    { n:'E46', day:127, date:'6-ago', type:'hospital', coords:[1.56,30.25], place:'Bunia, Ituri · misión conjunta Tedros + Kaseya: "el brote nos está rebasando"', desc:'<b>Misión conjunta de la OMS y Africa CDC al epicentro, encabezada por Tedros, Kaseya y Mohamed Janabi (OMS África).</b> Tedros: <b>"el brote de ébola está rebasando nuestra respuesta"</b>. Kaseya: <b>"el nivel de severidad de este brote no tiene precedentes"</b>. El dato operativo grave: <b>más del 70% de los casos nuevos y el 67% de las muertes surgen de la comunidad, no de contactos rastreados</b>: el rastreo perdió el hilo. Llamado urgente a la acción comunitaria. El plan continental (USD 518M, jun-nov) arrastra un déficit de +USD 400M ("¿es dinero real? No", Kaseya). <b>Cifra más fresca (ECDC, corte 9-ago): ~4,381 casos y 2,011 muertes, CFR ~46%, ~75 casos nuevos al día, 53 zonas de salud.</b> El 5-ago el Departamento de Estado de EE.UU. sumó USD 242M (total ~USD 512M), con el suplemento de USD 1,400M aún estancado en el Congreso. <b>Fuentes:</b> <a href="https://www.who.int/news/item/06-08-2026-africa-cdc-and-who-call-for-urgent--community-led-action-to-contain-ebola-in-the-drc" target="_blank" rel="noopener">OMS + Africa CDC (6-ago)</a> · <a href="https://www.cidrap.umn.edu/ebola/who-africa-cdc-urge-scale-efforts-contain-ebola-outbreak" target="_blank" rel="noopener">CIDRAP</a> · <a href="https://www.ecdc.europa.eu/en/ebola-outbreak-democratic-republic-congo-and-uganda" target="_blank" rel="noopener">ECDC (9-ago)</a>.', v:'✅' }
  ];

const declaraciones = [
    {
      fecha: '2026-08-11',
      fechaLegible: '11 ago 2026',
      fuente: 'Barrido cono sur · fuentes nacionales',
      tagClass: 'fuente-sanidad',
      vocero: 'Sanidad España/Galicia + Minsal Chile + DGVS Paraguay + MINSA Panamá + Sedes Tarija (boletines oficiales y prensa nacional)',
      cita: '<b>El virus Andes volvió a viajar: un turista francoargentino con ANDV está aislado en Galicia, España</b> (detectado 6-ago; voló Santiago de Chile-Madrid el 18-jul; 4 contactos aislados en tres comunidades con cuarentenas de 42 días; PCR negativa y alta el 7-ago). Es la <b>segunda exportación internacional del virus Andes en tres meses</b>, con exposición probablemente ambiental en Argentina. En paralelo, el barrido de fuentes nacionales del cono sur registra: <b>Chile</b> con cluster familiar en Aysén (a la espera del ISP) y una muerte pediátrica reportada en Rengo, con el conteo oficial clavado en 46/18; <b>Paraguay</b> con el alza a 5-6 casos (SE 29) que ningún medio ha reportado; <b>Panamá</b> con 14 SCPH que ya superan el ritmo de su año récord; <b>Bolivia</b> con caso nuevo en Yacuiba (corredor fronterizo con Salta) y boletines congelados desde abril; <b>Brasil</b> con portales en veda electoral y 11 casos de Paraná sin resolver.',
      contexto: 'A mi juicio (opinión editorial), el barrido deja dos hechos estructurales: primero, el mecanismo que describieron las columnas (el vuelo y la familia, no la tribuna) volvió a operar en Galicia, dentro de la ventana de manifestación post-Mundial calculada por el expediente, aunque sin vínculo alguno con el torneo. Segundo, y más de fondo: todo el rango endémico del único virus persona-persona de América publica con rezago, en veda o en silencio (Bolivia en abril, Brasil en veda electoral, Chile sin boletín de agosto, Paraguay con el alza enterrada en un PDF, Uruguay mudo tres meses, OPS sin actualización desde junio), justo cuando la estacionalidad se rompe y las dos casas del ANDV salen de su temporada más letal en años. La vigilancia del virus correcto duerme la siesta austral mientras el aparato global pre-paga la respuesta de otros patógenos. La señal ecológica clásica (ratada, floración del colihue) aún no aparece; su ventana es octubre-diciembre.',
      url: 'https://www.infobae.com/espana/agencias/2026/08/11/cuatro-contactos-del-turista-francoargentino-con-hantavirus-aislados-en-tres-comunidades/'
    },
    {
      fecha: '2026-06-12',
      fechaLegible: '12 jun 2026',
      fuente: 'OMS — R&D Blueprint',
      tagClass: 'fuente-oms',
      vocero: 'Organización Mundial de la Salud · iniciativa NAVIS',
      cita: '<b>La OMS lanza NAVIS, una iniciativa de investigación coordinada sobre virus Andes con 21 países.</b> Estudio de historia natural sobre dinámica de transmisión, periodos de incubación, respuestas inmunes, cinética viral y determinantes de enfermedad grave del ANDV, mediante seguimiento longitudinal de personas expuestas. Opera bajo el R&D Blueprint de la OMS, marco que establece redes de investigación por familia de patógeno "para apoyar la coordinación científica rápida y la implementación de investigación de brotes antes de que las emergencias surjan".',
      contexto: 'Dato central para la línea editorial del expediente. Composición (20 de 21 nombrados): Australia, Bélgica, Canadá, RDC, Dinamarca, Francia, Alemania, Grecia, Irlanda, Italia, Japón, Países Bajos, Nueva Zelanda, Singapur, Sudáfrica, España, Suiza, Türkiye, Reino Unido, Estados Unidos. Coordinación UKHSA vía consorcio CORC (1,600 expertos, 130 países); protocolo del Hospital Germans Trias i Pujol (España) prediseñado para despliegue inmediato; fondeo ANRS-MIE (Francia) bajo BE READY (UE); framework ISARIC del COVID. HALLAZGO CLAVE: Argentina y Chile, únicos países con virus Andes endémico y muertes anuales reales, NO están en la red; sí los países ricos que recibieron repatriados del MV Hondius. NAVIS no estudia el virus en su reservorio sudamericano sino en los cuerpos expuestos del primer mundo. NAVIS no es la única pieza: es la punta de un ecosistema (CORC + BE READY + ISARIC + consulta OMS de contramedidas MCM del 15-may). Mientras el ébola Bundibugyo ocupa los titulares, la infraestructura de investigación se preposiciona sobre el hantavirus Andes. La frase "antes de que las emergencias surjan" es la confesión institucional del modelo de preparedness. Refuerza la tesis de la pieza del 4-jun.',
      url: 'https://www.who.int/news/item/12-06-2026-twenty-one-countries-launch-coordinated-andes-virus-research-initiative-following-hantavirus-outbreak'
    },
    {
      fecha: '2026-06-12',
      fechaLegible: '12 jun 2026',
      fuente: 'RIVM + ECDC',
      tagClass: 'fuente-sanidad',
      vocero: 'RIVM (Países Bajos) + ECDC · estado del cluster MV Hondius',
      cita: '<b>El cluster del MV Hondius sigue contenido: 13 casos totales (11 confirmados + 2 probables), 3 muertes. Sin casos nuevos desde el 22 de mayo.</b> La cuarentena de seis semanas de la tripulación en Rotterdam (23 personas: 17 filipinos, 3 ucranianos y otros) sigue activa y se cierra a inicios de julio. El MV Hondius reanudó servicio comercial el 13 de junio desde Longyearbyen (Svalbard). <b>El hantavirus no desapareció: se contuvo.</b> La circulación endémica del virus Andes sigue activa en el cono sur sudamericano (Argentina 42 confirmados, Chile 39, letalidad 31-39% en 2026), fuera del cluster del crucero.',
      contexto: 'Aclaración importante frente a la narrativa de "desaparición": el cluster del MV Hondius es un brote cerrado bajo cuarentena, no un brote extinto. La diferencia es operativa. El reservorio del virus Andes sigue activo en Sudamérica y el corredor del Mundial 2026 vehicula flujos masivos de aficionados sudamericanos al hemisferio norte. Cero casos de hantavirus reportados en sedes mundialistas al 12-jun. La tesis editorial (pieza del 4-jun) se mantiene en observación: el vector que el Mundial podría amplificar todavía no se ha activado en Norteamérica. La contención del crucero no equivale a la desaparición del riesgo endémico.',
      url: 'https://www.rivm.nl/en/hantavirus/current-information'
    },
    {
      fecha: '2026-06-07',
      fechaLegible: '7 jun 2026',
      fuente: 'Oceanwide Expeditions',
      tagClass: 'fuente-sanidad',
      vocero: 'Oceanwide Expeditions · operador del MV Hondius',
      cita: '<b>El MV Hondius reanuda servicio comercial el 13 de junio con zarpe desde Longyearbyen, Svalbard (Noruega ártica).</b> Cierre operativo del expediente del crucero: 73 días después del zarpe original desde Ushuaia el 1 de abril, el buque vuelve a aceptar pasajeros para itinerarios árticos de la temporada boreal. La desinfección completa del RIVM (mayo) y el cumplimiento de los protocolos de cuarentena de tripulación quedan certificados.',
      contexto: 'El cluster del MV Hondius pasa de evento activo a antecedente cerrado. El reservorio endémico del virus Andes en el cono sur sudamericano sigue activo (Argentina 42 confirmados, Chile 39, letalidad 31 a 39 por ciento) y el corredor del Mundial 2026 vehicula al hemisferio norte un flujo masivo de aficionados sudamericanos en sedes con estadios y hoteles densos. El próximo cluster, si aparece, no será del crucero. Implicación editorial: el expediente del MV Hondius se cierra como caso de estudio; la columna <em>La precaución hacia el virus equivocado</em> (4-jun) abre el siguiente capítulo del expediente sobre el corredor mundialista.',
      url: 'https://www.rivm.nl/en/hantavirus/current-information'
    },
    {
      fecha: '2026-06-03',
      fechaLegible: '3 jun 2026',
      fuente: 'RIVM',
      tagClass: 'fuente-sanidad',
      vocero: 'Rijksinstituut voor Volksgezondheid en Milieu (Países Bajos)',
      cita: '<b>RIVM aclara: persona en cuarentena domiciliaria con un "weak positive signal" no se cuenta como caso del cluster.</b> Tras el signal débil inicial, se aplicaron tests adicionales con múltiples materiales corporales y todos dieron claramente negativos. La persona no presenta síntomas y no es contagiosa, lo que es inconsistente con infección activa por virus Andes. <b>Cifras del cluster sin cambios: 13 casos totales (11 confirmados y 2 probables), 3 muertes. Sin nuevos casos desde el 26 de mayo.</b> RIVM ajusta protocolo: la persona pasará a testeo dos veces por semana en lugar de una.',
      contexto: 'Caso negativo formalmente descartado. La precisión del comunicado RIVM importa porque varios trackers no oficiales tenían contabilizado el "weak positive" como cuarto caso probable. Audit trail: la cifra al 7-jun sigue siendo la misma reportada en DON604 (27-may) y mantenida desde entonces. La curva del cluster MV Hondius está plana desde el 22 de mayo.',
      url: 'https://www.rivm.nl/en/hantavirus/current-information'
    },
    {
      fecha: '2026-06-02',
      fechaLegible: '2 jun 2026',
      fuente: 'NIH · NIAID',
      tagClass: 'fuente-cdc',
      vocero: 'National Institute of Allergy and Infectious Diseases — proyecto PROVIDENT',
      cita: '<b>El proyecto PROVIDENT</b> ("Prepositioning Optimized Strategies for Vaccines and Immunotherapeutics against Diverse Emerging Infectious Threats") — programa de <b>USD 70 millones del NIAID</b> activo desde <b>septiembre de 2024</b> y vigente hasta junio de 2029 — incluye los hantaviruses dentro de su lista de patógenos prioritarios. El brote del MV Hondius ocurrió <b>dentro de la ventana operativa</b> del proyecto, que ya había fondeado una serie de papers científicos sobre virus Andes publicados a finales de 2025 y principios de 2026.',
      contexto: 'Antecedente operativo, no respuesta: el manual de preparación hantavirus ya estaba financiado, ejecutándose y publicando ciencia antes de que ningún caso aterrizara en Tenerife. Patrón Klein/Lakoff aplicado al ANDV. Conecta con la columna <em>Capitalismo de preparación pandémica</em> (20-may, Lakoff) y con el cierre <em>La biotech que ya tenía la receta</em> (28-may, Klein — ciclo Mapp 2014→2026). Verificación primaria pendiente en la base de grants NIAID; cobertura periodística independiente disponible.',
      url: 'https://jonfleetwood.substack.com/p/project-provident-niaid-launched'
    },
    {
      fecha: '2026-05-27',
      fechaLegible: '27 may 2026',
      fuente: 'OMS',
      tagClass: 'fuente-oms',
      vocero: 'OMS — Disease Outbreak News 604',
      cita: 'Cuarto informe oficial del brote MV Hondius. Al 27 de mayo: <b>13 casos totales — 11 confirmados + 2 probables — y 3 muertes (2 confirmadas + 1 probable)</b>. Tres nuevos casos confirmados desde DON601 (13 de mayo): uno cada uno desde <b>Canadá</b> (primer confirmado), <b>Países Bajos</b> (el tripulante n:30 integrado a la cifra) y <b>España</b> (segundo confirmado). Más de 600 contactos identificados al 22 de mayo en 32 países, territorios y áreas — 53 % alto riesgo y 47 % bajo riesgo, todos bajo monitoreo cercano o autodeclarado. Todos los confirmados son del MV Hondius — sin transmisión comunitaria documentada.',
      contexto: 'DON604 supersede a DON601 como cuadro epidemiológico oficial del cluster. La adición de Canadá amplía la geografía del brote por encima del corredor europeo dominante. Argentina y Chile mantienen brotes endémicos paralelos no vinculados al MV Hondius. Audit trail: esta nota reemplaza la entrada del 26-may del RIVM (que daba 13 casos) por la fuente primaria OMS de la misma cifra.',
      url: 'https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON604'
    },
    {
      fecha: '2026-05-26',
      fechaLegible: '26 may 2026',
      fuente: 'RIVM',
      tagClass: 'fuente-sanidad',
      vocero: 'Rijksinstituut voor Volksgezondheid en Milieu (Países Bajos)',
      cita: 'Cifras consolidadas del cluster del MV Hondius al cierre del 26 de mayo: <b>13 casos totales — 11 confirmados + 2 probables — y 3 muertes</b>. Sin nuevos fallecimientos desde la actualización previa. La nueva infección confirmada corresponde a un miembro de la tripulación que había desembarcado en Tenerife y fue repatriado a los Países Bajos. La probabilidad de propagación comunitaria en territorio neerlandés se evalúa como mínima dado el dispositivo de cuarentena y aislamiento en Rotterdam. RIVM y Erasmus MC realizan testeo semanal a todos los contactos en cuarentena.',
      contexto: 'Tercera ronda de testeo sistemático de la tripulación en cuarentena. El caso confirmado el 22-may (NL Times/OMS) queda formalmente integrado en la cifra del 26-may, que sustituye a las cifras del 13-may (11 casos, 3 muertes) y las del 19-may. El brote pasa formalmente del núcleo de pasajeros a la tripulación — confirmación operativa de transmisión humano-humano a bordo durante la travesía. <b>Audit trail:</b> esta entrada reemplaza la cifra previa del 13-may en el panel, en línea con el protocolo de actualización rolling.',
      url: 'https://www.rivm.nl/en/hantavirus/current-information'
    },
    {
      fecha: '2026-05-22',
      fechaLegible: '22 may 2026',
      fuente: 'OMS',
      tagClass: 'fuente-oms',
      vocero: 'Dr. Tedros Adhanom Ghebreyesus — sesión informativa a Estados Miembros',
      cita: 'Convoco una sesión informativa a los Estados Miembros sobre los dos brotes activos: hantavirus Andes vinculado al MV Hondius y ébola Bundibugyo en RDC y Uganda. Es la primera vez en la historia del Reglamento Sanitario Internacional 2005 que la Organización lleva dos brotes simultáneos al mismo nivel de atención multilateral en una semana. La velocidad institucional refleja la madurez del andamio heredado del COVID-19.',
      contexto: 'Sesión paralela al cierre de la 79.ª Asamblea Mundial de la Salud (WHA79), que ese mismo día ratifica formalmente la salida de Argentina de la OMS. La convergencia editorial Argentina-exit / dos brotes simultáneos / cierre WHA79 / primera reunión Comité de Emergencia Bundibugyo / primer caso confirmado en tripulación MV Hondius queda recogida en la pieza editorial <em>La constelación del 22 de mayo</em> (27-may).',
      url: 'https://www.who.int/news-room/speeches/item/who-director-general-s-opening-remarks-at-the-member-state-information-session-on-outbreaks-of-ebola-and-hantavirus-22-may-2026'
    },
    {
      fecha: '2026-05-22',
      fechaLegible: '22 may 2026',
      fuente: 'OMS',
      tagClass: 'fuente-oms',
      vocero: 'Organización Mundial de la Salud + RIVM (vía Manila Times y NL Times)',
      cita: 'Nuevo caso de hantavirus confirmado en un miembro de la tripulación del MV Hondius repatriado a los Países Bajos y aislado en hospital. Es el <b>primer caso confirmado entre la tripulación</b> tras el atraque del 18-may, en el que las 25 personas a bordo dieron negativo. RIVM y Erasmus MC realizan testeo semanal a todos los contactos en cuarentena.',
      contexto: 'Cierra la hipótesis de transmisión a la tripulación durante la travesía — el brote NO quedó confinado al núcleo original de pasajeros expuestos al caso índice. Eleva el total del cluster a 12 casos (10 confirmados + 2 probables) y mantiene 3 muertes en esta fecha. Audit trail: integrado a cifra consolidada del 26-may del RIVM.',
      url: 'https://nltimes.nl/2026/05/23/new-hantavirus-infection-confirmed-hondius-crew-member-isolated-netherlands'
    },
    {
      fecha: '2026-05-19',
      fechaLegible: '19 may 2026',
      fuente: 'CDPHE',
      tagClass: 'fuente-cdc',
      vocero: 'Colorado Department of Public Health and Environment',
      cita: 'Confirmamos el fallecimiento de un adulto residente del condado de Douglas por infección por hantavirus, cepa Sin Nombre virus (SNV). La exposición fue ambiental, por contacto con excrementos de roedor. <b>Descartamos formalmente cualquier vínculo con el cluster del MV Hondius</b> — son cepas distintas (SNV norteamericano vs. Andes sudamericano). El caso es consistente con la incidencia histórica de hantavirus en el oeste de Estados Unidos.',
      contexto: 'Estados Unidos registra entre 20 y 40 casos anuales de Sin Nombre virus (HPS norteamericano). Este caso aparece en titulares por el contexto del brote internacional, no por excepcionalidad clínica. Sin embargo, marca el primer fallecimiento por hantavirus reportado en EE.UU. durante la cobertura mediática del cluster del Hondius — tensiona la separación entre dos epidemiologías que se cruzan en el ciclo informativo.',
      url: 'https://www.infobae.com/estados-unidos/2026/05/19/autoridades-de-colorado-investigan-muerte-por-hantavirus-sintomas-prevencion-y-alerta-en-la-comunidad/'
    },
    {
      fecha: '2026-05-19',
      fechaLegible: '19 may 2026',
      fuente: 'CEPI',
      tagClass: 'fuente-oms',
      vocero: 'Dr. Richard Hatchett — CEO de CEPI · Coverage de Time Magazine',
      cita: '"Behind the Mission to Stop Viral Outbreaks Within 100 Days". El programa pide 2,500 millones de dólares para sostener la infraestructura de respuesta. El brote del MV Hondius es la prueba de concepto que estábamos esperando.',
      contexto: 'Time Magazine amplifica el pitch previamente publicado en The Hill Times (17-may). CEPI utiliza el brote del crucero como argumento público para escalar su financiamiento. El programa "100 Day Mission" no es una vacuna específica para Andes virus — es la infraestructura permanente de pre-financiamiento. Ya cubierto en la columna "Capitalismo de preparación pandémica" del 20 de mayo.',
      url: 'https://time.com/article/2026/05/19/cepi-mission-to-stop-viral-outbreaks-within-100-days/'
    },
    {
      fecha: '2026-05-15',
      fechaLegible: '15 may 2026',
      fuente: 'Bichat',
      tagClass: 'fuente-ecdc',
      vocero: 'Hospital Bichat-Claude Bernard, París · Dr. Xavier Lescure (infectólogo)',
      cita: 'La paciente de 65 años pasa formalmente a <b>cuidados paliativos</b>. Tras la fase terminal del soporte anunciada el 13 de mayo, el cuadro cardiopulmonar no remite. Continúa conectada a oxigenación extracorpórea (ECMO). Sus 26 contactos cercanos siguen PCR-negativos pero en cuarentena.',
      contexto: 'Es el cuadro vivo más grave del cluster del MV Hondius. La Unión Europea, tras secuenciación independiente, descartó cualquier mutación del virus respecto a la cepa Andes del cono sur. Comorbilidades documentadas: asma y otras afecciones previas. Cobertura: Diario en Positivo, RPP, Mundiario.',
      url: 'https://www.diarioenpositivo.com/articulo/internacional/paciente-francesa-contagiada-hantavirus-continua-estado-critico/20260515094434081487.html'
    },
    {
      fecha: '2026-05-07',
      fechaLegible: '7 may 2026',
      fuente: 'OPS',
      tagClass: 'fuente-oms',
      vocero: 'Organización Panamericana de la Salud + Min. Salud Chile y Argentina',
      cita: 'Chile: 39 casos confirmados de hantavirus en 2026, 13 fallecidos, letalidad 33%. Argentina: 41 casos confirmados, letalidad 31-39%, circulación viral por arriba del umbral de brote. Ambos países muy por encima del promedio histórico de letalidad (~22%). <b>Estos casos NO están vinculados al cluster del MV Hondius</b> — son del reservorio endémico activo del virus Andes en el cono sur.',
      contexto: 'Contexto endémico paralelo al brote del crucero. El virus Andes circula naturalmente en Argentina y Chile desde hace al menos tres décadas. 2026 muestra niveles atípicamente altos de incidencia y letalidad, según datos de Minsal Chile y Min. Salud Argentina. <b>El brote del MV Hondius es la versión turística e internacional de algo que ya ocurría en territorio sudamericano.</b> Cobertura: BioBioChile, UPI, swissinfo, gentedehoy.',
      url: 'https://www.biobiochile.cl/noticias/nacional/chile/2026/05/07/chile-registra-39-casos-de-hantavirus-en-lo-que-va-de-2026-con-aumento-en-la-letalidad.shtml'
    },
    {
      fecha: '2026-05-13',
      fechaLegible: '13 may 2026',
      fuente: 'ECDC',
      tagClass: 'fuente-ecdc',
      vocero: 'European Centre for Disease Prevention and Control — Surveillance Update',
      cita: '9 casos confirmados por laboratorio (+2 desde el 11 de mayo), 2 probables, 3 muertes. Letalidad ~27%. El riesgo para la población general de la UE/EEE sigue siendo muy bajo.',
      contexto: 'Actualización formal del cluster con cifras revisadas. Hipótesis de trabajo confirmada: caso índice adquirió infección por exposición ambiental en Argentina antes de embarcar, con transmisión humano-humano subsecuente a bordo.',
      url: 'https://www.ecdc.europa.eu/en/infectious-disease-topics/hantavirus-infection/surveillance-and-updates/andes-hantavirus-outbreak'
    },
    {
      fecha: '2026-05-13',
      fechaLegible: '13 may 2026',
      fuente: 'OMS',
      tagClass: 'fuente-oms',
      vocero: 'OMS — Disease Outbreak News (DON601)',
      cita: 'Cluster de hantavirus Andes vinculado al MV Hondius — actualización oficial. Hipótesis de trabajo: caso índice infectado por exposición ambiental en Argentina, transmisión humano-humano a bordo subsecuente.',
      contexto: 'DON601 actualiza la DON600 del 8 de mayo. Marco epidemiológico oficial revisado con la hipótesis de transmisión persona a persona ya no como posibilidad sino como working hypothesis institucional.',
      url: 'https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON601'
    },
    {
      fecha: '2026-05-11',
      fechaLegible: '11 may 2026',
      fuente: 'Salud MX',
      tagClass: 'fuente-arg',
      vocero: 'Secretaría de Salud — Gobierno de México · Dr. David Kershenobich',
      cita: 'Primera Alerta Epidemiológica Nacional por hantavirus en la historia del país. Activación de vigilancia en hospitales, laboratorios y unidades médicas de los tres niveles de atención. Cero casos confirmados en territorio nacional. La movilidad asociada al Mundial 2026 es factor de riesgo adicional que demanda reforzar la vigilancia.',
      contexto: 'Aviso Epidemiológico formal publicado en gob.mx/salud. Establece protocolos específicos para detección de pacientes sospechosos y manejo de muestras clínicas bajo refrigeración por personal entrenado. El secretario de Salud confirmó el 13-may que no se han detectado casos en México.',
      url: 'https://www.gob.mx/salud/documentos/aviso-epidemiologico-por-brote-multinacional-por-hantavirus-de-los-andes-2026'
    },
    {
      fecha: '2026-05-13',
      fechaLegible: '13 may 2026',
      fuente: 'OMS',
      tagClass: 'fuente-oms',
      vocero: 'Dr. Tedros Adhanom Ghebreyesus — Director General',
      cita: 'En este momento no hay señal de que estemos viendo el inicio de un brote mayor. La situación podría cambiar y, dado el largo periodo de incubación del virus, es posible que veamos más casos en las próximas semanas.',
      contexto: 'Declaración tras la rueda de prensa en Madrid. Total: 11 casos confirmados o sospechosos, todos vinculados al MV Hondius.',
      url: 'https://news.un.org/en/story/2026/05/1167458'
    },
    {
      fecha: '2026-05-13',
      fechaLegible: '13 may 2026',
      fuente: 'UE',
      tagClass: 'fuente-eu',
      vocero: 'Reunión UE + Reino Unido + ECDC + Comisión Europea',
      cita: 'PCR obligatoria para toda la tripulación del crucero a su llegada a Países Bajos. Quienes no regresen a sus países harán cuarentena ahí.',
      contexto: 'Acuerdo conjunto de los Estados miembros europeos y el Reino Unido para coordinar la vigilancia del brote.',
      url: 'https://www.infobae.com/espana/2026/05/13/hantavirus-ultima-hora-de-los-pacientes-en-espana-francia-y-paises-bajos-en-directo-el-pasajero-espanol-que-ha-dado-positivo-permanece-con-sintomas-leves/'
    },
    {
      fecha: '2026-05-13',
      fechaLegible: '13 may 2026',
      fuente: 'Sanidad ES',
      tagClass: 'fuente-sanidad',
      vocero: 'Ministerio de Sanidad, España',
      cita: 'Cada país ha reportado sus casos y sus contactos, y el seguimiento de los mismos. El pasajero español con positivo está estable y con pocos síntomas.',
      contexto: 'Comunicado tras la reunión con países UE, Reino Unido, ECDC y Comisión Europea.',
      url: 'https://www.elespanol.com/ciencia/20260513/hantavirus-ultima-hora-hoy-directo-torres-respecto-supuesto-positivo-oculto-gobierno-propia-oms-declaro-negativo/1003744241672_10.html'
    },
    {
      fecha: '2026-05-13',
      fechaLegible: '13 may 2026',
      fuente: 'ECDC',
      tagClass: 'fuente-ecdc',
      vocero: 'European Centre for Disease Prevention and Control',
      cita: 'El riesgo para la población general de la UE/EEE sigue siendo muy bajo. No se han reportado casos nuevos ni muertes desde la actualización previa.',
      contexto: 'Update técnico al 13 de mayo: 11 casos (8 confirmados, 2 probables, 1 inconcluso), 3 muertes.',
      url: 'https://www.ecdc.europa.eu/en/infectious-disease-topics/hantavirus-infection/surveillance-and-updates/andes-hantavirus-outbreak'
    },
    {
      fecha: '2026-05-12',
      fechaLegible: '12 may 2026',
      fuente: 'OMS',
      tagClass: 'fuente-oms',
      vocero: 'Conferencia conjunta en Moncloa, Madrid',
      cita: 'Esto no es otro COVID. El riesgo de salud pública actual por hantavirus sigue siendo bajo.',
      contexto: 'Rueda de prensa de Tedros en el Palacio de la Moncloa, junto a autoridades españolas.',
      url: 'https://news.un.org/es/story/2026/05/1541422'
    },
    {
      fecha: '2026-05-12',
      fechaLegible: '12 may 2026',
      fuente: 'Argentina',
      tagClass: 'fuente-arg',
      vocero: 'Ministerio de Salud de la Nación, Argentina',
      cita: 'Argentina envió insumos diagnósticos a laboratorios de Senegal, Sudáfrica, Países Bajos, España y Reino Unido para identificar hantavirus Andes en muestras del brote.',
      contexto: 'Cooperación técnica internacional desde el país donde se origina la exposición probable (Patagonia).',
      url: 'https://www.infobae.com/salud/2026/05/12/hantavirus-en-argentina-los-ultimos-datos-oficiales-y-como-avanza-la-investigacion-del-brote-en-el-crucero/'
    },
    {
      fecha: '2026-05-09',
      fechaLegible: '9 may 2026',
      fuente: 'OMS',
      tagClass: 'fuente-oms',
      vocero: 'Dr. Tedros — Mensaje al pueblo de Tenerife',
      cita: 'Reconocemos y agradecemos a las autoridades canarias y al personal sanitario de Tenerife su disposición para recibir el barco y coordinar la respuesta al brote.',
      contexto: 'Mensaje publicado tras el rechazo previo de Cabo Verde y la decisión española de aceptar el atraque.',
      url: 'https://www.who.int/news/item/09-05-2026-message-by-the-who-director-general-to-the-people-of-tenerife-regarding-the-hantavirus-response'
    },
    {
      fecha: '2026-05-08',
      fechaLegible: '8 may 2026',
      fuente: 'Sanidad ES',
      tagClass: 'fuente-sanidad',
      vocero: 'Centro de Coordinación de Alertas Sanitarias',
      cita: 'Informe de situación del brote: protocolo activado, equipos de epidemiología desplegados en Canarias, coordinación con la OMS, ECDC y CDC en marcha.',
      contexto: 'Documento técnico PDF emitido por el Ministerio de Sanidad español.',
      url: 'https://www.sanidad.gob.es/areas/alertasEmergenciasSanitarias/alertasActuales/fiebreHemorragica/docs/20260508_informe_situacion_HANTAVIRUS.pdf'
    },
    {
      fecha: '2026-05-08',
      fechaLegible: '8 may 2026',
      fuente: 'CDC',
      tagClass: 'fuente-cdc',
      vocero: 'Centers for Disease Control and Prevention, EEUU',
      cita: 'El riesgo para la salud pública en EEUU permanece extremadamente bajo. Equipo del CDC desplegado en Canarias para evaluar exposición de pasajeros estadounidenses.',
      contexto: 'Comunicado de prensa institucional. Pasajeros americanos serán repatriados a la Nebraska Biocontainment Unit.',
      url: 'https://www.cdc.gov/media/releases/2026/2026-cdc-provides-update-on-hantavirus-outbreak-linked-to-m-v-hondius-cruise-ship.html'
    },
    {
      fecha: '2026-05-07',
      fechaLegible: '7 may 2026',
      fuente: 'OMS',
      tagClass: 'fuente-oms',
      vocero: 'Dr. Tedros — Respuesta inicial',
      cita: 'El virus identificado es el hantavirus Andes, conocido desde 1995. No es una cepa nueva. El riesgo pandémico es bajo.',
      contexto: 'Primera declaración formal de la OMS tras la notificación del brote el 2 de mayo y la confirmación genética el 4 de mayo.',
      url: 'https://www.who.int/news/item/07-05-2026-who-s-response-to-hantavirus-cases-linked-to-a-cruise-ship'
    },
    {
      fecha: '2026-05-06',
      fechaLegible: '6 may 2026',
      fuente: 'ECDC',
      tagClass: 'fuente-ecdc',
      vocero: 'European Centre for Disease Prevention and Control',
      cita: 'Evaluación técnica del brote: virus Andes confirmado, ruta de transmisión persona-persona requiere contacto cercano y prolongado, riesgo de propagación comunitaria muy bajo.',
      contexto: 'Documento técnico PDF de la ECDC con recomendaciones para los Estados miembros.',
      url: 'https://www.ecdc.europa.eu/sites/default/files/documents/TAB-hantavirus-06052026.pdf'
    },
    {
      fecha: '2026-05-05',
      fechaLegible: '5 may 2026',
      fuente: 'Sanidad ES',
      tagClass: 'fuente-sanidad',
      vocero: 'Centro de Coordinación de Alertas Sanitarias',
      cita: 'Primer informe de situación. Activación de protocolos nacionales. España coordina con países UE y autoridades del crucero.',
      contexto: 'Documento técnico PDF emitido tras la notificación oficial del brote.',
      url: 'https://www.sanidad.gob.es/areas/alertasEmergenciasSanitarias/alertasActuales/fiebreHemorragica/docs/20260505_informe_situacion_HANTAVIRUS.pdf'
    },
    {
      fecha: '2026-05-02',
      fechaLegible: '2 may 2026',
      fuente: 'OMS',
      tagClass: 'fuente-oms',
      vocero: 'Notificación oficial bajo el Reglamento Sanitario Internacional',
      cita: 'Reino Unido notifica a la OMS un clúster de enfermedad respiratoria aguda grave a bordo del MV Hondius, con dos fallecimientos y un paciente crítico.',
      contexto: 'Activación formal del sistema de alerta global. El barco lleva ya 31 días navegando desde Ushuaia.',
      url: 'https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON599'
    }
  ];

const declaracionesEbola = [
    {
      fecha: '2026-08-11',
      fechaLegible: '11 ago 2026',
      fuente: 'ECDC + OMS/Africa CDC',
      tagClass: 'fuente-oms',
      vocero: 'ECDC (corte 9-ago) + OMS (Tedros) + Africa CDC (Kaseya) · misión conjunta 6-ago · DON614 (30-jul)',
      cita: '<b>El brote está fuera de control.</b> Corte oficial OMS DON614 (30-jul): 3,626 casos + 1,589 muertes, CFR 44%. Al 9-ago, ECDC y el boletín de la RDC reportan <b>~4,381 casos y 2,011 muertes (CFR ~46%)</b>, con Ituri en 3,636/1,551 y ~75 casos nuevos al día. Es el <b>segundo brote de ébola más grande de la historia y el de crecimiento más rápido registrado</b>. Uganda declaró terminado su brote el 28-jul (20/2). La 2ª reunión del Comité de Emergencia de la OMS (revisión del PHEIC) es el 18-ago.',
      contexto: 'En la misión conjunta del 6-ago, Tedros dijo que "el brote está rebasando nuestra respuesta" y Kaseya que "el nivel de severidad no tiene precedentes". Más del 70% de los casos nuevos surgen de la comunidad, no de contactos rastreados: el rastreo perdió el hilo. El plan continental de USD 518M sigue con déficit de +USD 400M ("¿es dinero real? No", Kaseya). A mi juicio (opinión editorial), la escalada de julio a agosto confirma la tensión del expediente: el andamiaje pre-pagó las contramedidas del Norte, pero en terreno el brote corre sin vacuna autorizada (es cepa Bundibugyo, no Zaire) y sin el financiamiento prometido.',
      url: 'https://www.who.int/news/item/06-08-2026-africa-cdc-and-who-call-for-urgent--community-led-action-to-contain-ebola-in-the-drc'
    },
    {
      fecha: '2026-08-11',
      fechaLegible: '11 ago 2026',
      fuente: 'Mercado · NASDAQ + FDA',
      tagClass: 'fuente-medio',
      vocero: 'Moderna (MRNA) · reporte Q2 (31-jul) + aprobación FDA mFLUSIVA (5-ago)',
      cita: '<b>Moderna reporta el Q2 y le aprueban su vacuna de gripe de ARNm.</b> Q2 (31-jul): ingresos USD 145M (+2%), pérdida neta USD 782M, caja USD 6,900M. El 5-ago la FDA aprobó <b>mFLUSIVA</b>, la primera vacuna de gripe de ARNm en EE.UU. (revierte el rechazo de febrero), con eficacia modesta (26.6%) y aprobación acelerada para 65+. La acción ronda <b>~USD 60.57 al 11-ago (~+90% en el año)</b>.',
      contexto: 'A mi juicio (opinión editorial), esto cierra el arco financiero: la acción se duplicó en 2026, pero por gripe y oncología, no por el brote. La aprobación de mFLUSIVA fue "sell-the-news" (cayó el día del aval) y el consenso analista es HOLD. El ébola, que en el mismo lapso pasó de cientos a más de 2,000 muertes, no mueve la acción del principal fabricante de contramedidas. La preparación pandémica es la puerta de entrada del capital, no su destino.',
      url: 'https://www.healthcaredive.com/news/moderna-fda-approve-mflusiva-seasonal-influenza/827180/'
    },
    {
      fecha: '2026-07-23',
      fechaLegible: '23 jul 2026',
      fuente: 'Mercado · NASDAQ',
      tagClass: 'fuente-medio',
      vocero: 'Moderna (MRNA) · NASDAQ · cobertura Yahoo Finance + Investing.com',
      cita: '<b>Moderna ronda los ~USD 58 el 23-jul: −27% desde su pico del 2-jul (USD 79.76).</b> Reporta resultados del Q2 el 31-jul; el mercado descuenta ingresos débiles y costos de litigios.',
      contexto: 'A mi juicio (opinión editorial), el desacople es ya total: en las mismas tres semanas en que el ébola pasó de 702 a más de 1,031 muertes, la acción del principal fabricante de contramedidas perdió una cuarta parte de su valor. Cuanto peor el brote, más cae MRNA. El mercado no apuesta a este brote; se mueve por gripe, oncología y balance. La preparación pandémica es la puerta de entrada del capital, no su destino.',
      url: 'https://finance.yahoo.com/quote/MRNA/'
    },
    {
      fecha: '2026-07-22',
      fechaLegible: '22 jul 2026',
      fuente: 'OMS + Africa CDC · declaraciones',
      tagClass: 'fuente-oms',
      vocero: 'OMS (Tedros, briefing 16-jul; Thierno Balde, jefe de incidente) + Africa CDC (Jean Kaseya)',
      cita: '<b>El discurso oficial admite que el brote va ganando.</b> Thierno Balde, jefe de incidente de la OMS para Bundibugyo: "el brote sigue por delante de nosotros y estamos en fase de alcanzarlo". Jean Kaseya (Africa CDC), tras visitar el epicentro en Bunia y reunirse con el presidente de Uganda y los ministros de Salud de RDC, Uganda y Sudán del Sur: "están muriendo porque no tenemos vacunas, no tenemos medicina, no tenemos financiamiento". El briefing de Tedros del 16-jul reconoció que el brote "sigue rebasando la respuesta". El plan conjunto OMS-Africa CDC (jun-nov, ~USD 518M) arrastra un déficit de +USD 400M; Africa CDC pidió a EE.UU. sacar a Uganda de las restricciones de entrada ("las medidas de salud pública deben seguir la evidencia").',
      contexto: 'A mi juicio (opinión editorial), aquí el expediente se tensa con honestidad: el andamiaje se declaró en trece días (PHEIC 17-may) y movilizó dinero farmacéutico (CEPI/BARDA) y cribado en las sedes del Norte, pero el propio Africa CDC dice que en terreno faltan vacunas, medicina y financiamiento, y el plan continental arrastra +USD 400M de déficit. El preposicionamiento sirvió a la respuesta del Norte (Atlanta, contramedidas), no a frenar el brote donde mata. No solo el patógeno equivocado: también la geografía equivocada.',
      url: 'https://www.who.int/news-room/speeches/item/who-director-general-s-opening-remarks-at-the-media-briefing---16-july-2026'
    },
    {
      fecha: '2026-07-22',
      fechaLegible: '22 jul 2026',
      fuente: 'ECDC / Africa CDC',
      tagClass: 'fuente-oms',
      vocero: 'ECDC (datos al 18-jul) + Africa CDC / Jean Kaseya (al 22-jul)',
      cita: '<b>El brote supera las 1,000 muertes.</b> Corte oficial OMS (DON613, 15-jul): 2,145 casos + 830 muertes, CFR 39%; Ituri de epicentro con 1,904 casos y 692 muertes; 46 zonas de salud en 5 provincias (Ituri, Nord-Kivu, Sud-Kivu, Haut-Uele, Tshopo); 119 trabajadores de salud infectados (36 muertes). <b>Africa CDC (21-jul): ~2,473 casos y 1,031 muertes.</b> Uganda estable en 20 + 2. La letalidad toca el techo histórico de Bundibugyo (25-40%).',
      contexto: 'Audit trail: 1,926/702 (12-jul) → 2,145/830 (15-jul, OMS DON613) → 2,473/1,031 (21-jul, Africa CDC): superó las 1,000 muertes en menos de 10 semanas, el ébola de propagación más rápida registrada. La curva no toca techo, con ataques a equipos de respuesta que erosionan el control. En paralelo, la primera vacuna específica contra Bundibugyo entró a fase clínica: el Oxford Vaccine Group anunció el ensayo el 13-jul y vacunó a su primer voluntario el 24-jul (ChAdOx1 BDBV), con Moderna mRNA aún en preclínico. El aparato de contramedidas apenas empieza a producir, mientras el brote corre.',
      url: 'https://www.ecdc.europa.eu/en/ebola-outbreak-democratic-republic-congo-and-uganda'
    },
    {
      fecha: '2026-07-19',
      fechaLegible: '19 jul 2026',
      fuente: 'Corredor Mundial · final NYC',
      tagClass: 'fuente-oficial',
      vocero: 'FIFA · MetLife Stadium (cobertura CBS, CNBC, NPR)',
      cita: '<b>El corredor recorrió su itinerario completo.</b> Argentina, único clasificado con la cepa Andes de transmisión persona a persona, ganó su semifinal en <b>Atlanta (15-jul)</b> y jugó la <b>final en Nueva York (MetLife, 19-jul)</b>, donde perdió 1-0 ante España (Ferran Torres, 106\'). España es campeón por segunda vez.',
      contexto: 'A mi juicio (opinión editorial), el tramo más profundo de la única selección con cepa persona-persona pasó por las dos ciudades del "patógeno equivocado": Atlanta, con cribado reforzado de ébola y vacunas de sarampión listas, y Nueva York, con un brote propio de legionela (82 casos, 5 muertes) salido de sus torres de enfriamiento. El torneo terminó sin brote de hantavirus en las gradas: el punto nunca fue el pronóstico, sino que el aparato miraba a todas partes menos al corredor sudamericano. Alta consecuencia, baja probabilidad, y esta vez la probabilidad no se cumplió.',
      url: 'https://www.cbsnews.com/news/2026-fifa-world-cup-final-spain-argentina-sunday/'
    },
    {
      fecha: '2026-07-13',
      fechaLegible: '13 jul 2026',
      fuente: 'Mercado · NASDAQ',
      tagClass: 'fuente-medio',
      vocero: 'Moderna (MRNA) · NASDAQ · cobertura Yahoo Finance + Investing.com',
      cita: '<b>Moderna cae a ~USD 67.87 el 13-jul, un −15% desde su pico del 2-jul (USD 79.76).</b> El retroceso lo empujan un Q2 más débil de lo esperado y costos de litigios, no el brote: la acción bajó 10.8% el 10-jul en pleno repunte del ébola.',
      contexto: 'A mi juicio (opinión editorial), esto refuerza el desacople del expediente: mientras el ébola aceleraba a 1,926/702 (CFR 36%), la acción del principal fabricante de contramedidas caía. El mercado no está apostando a este brote; se mueve por gripe, oncología y balance. El hantavirus fue trampolín en mayo-junio; en julio la acción se mueve por otras razones. La preparación pandémica es la puerta de entrada del capital, no su destino.',
      url: 'https://finance.yahoo.com/quote/MRNA/'
    },
    {
      fecha: '2026-07-12',
      fechaLegible: '12 jul 2026',
      fuente: 'ECDC / WHO AFRO',
      tagClass: 'fuente-oms',
      vocero: 'ECDC / WHO AFRO · brote RDC+Uganda (datos al 12-jul)',
      cita: '<b>El brote sigue acelerando: RDC 1,926 confirmados + 702 muertes confirmadas, CFR 36%, con 753 hospitalizados y 295 recuperados.</b> Ituri concentra 1,745 casos y 601 muertes en 26 de 36 zonas de salud. Uganda estable en 20 + 2 (sin casos nuevos desde el 21-jun). La letalidad del ébola sube a 36%, nueve puntos por encima del hantavirus (27%) y rozando el techo histórico de Bundibugyo (25-40%).',
      contexto: 'Audit trail: 1,561/506 (5-jul) → 1,926/702 (12-jul): +365 confirmados y +196 muertes en una semana. La letalidad cruza el 36%. La contención ugandesa aguanta (sin casos nuevos en tres semanas), pero del lado congoleño la curva no toca techo, con ataques a equipos de respuesta en Ituri y Nord-Kivu. Corredor Mundial: Argentina venció a Suiza 3-1 (cuartos, 11-jul) y juega su semifinal en Atlanta el 15-jul contra Inglaterra, en el estadio sellado que a la vez es hub de cribado de ébola.',
      url: 'https://www.ecdc.europa.eu/en/ebola-outbreak-democratic-republic-congo-and-uganda'
    },
    {
      fecha: '2026-07-05',
      fechaLegible: '5 jul 2026',
      fuente: 'ECDC / WHO AFRO',
      tagClass: 'fuente-oms',
      vocero: 'ECDC / WHO AFRO · brote RDC+Uganda (datos al 5-jul)',
      cita: '<b>El brote sigue subiendo: RDC 1,561 confirmados + 506 muertes confirmadas, CFR 32%, con 628 hospitalizados y 254 recuperados.</b> Ituri concentra 1,417 casos y 424 muertes en 24 de 36 zonas de salud; el 81.6% de los contactos identificados están bajo seguimiento. Uganda estable en 20 + 2. La letalidad del ébola sube a 32%, cinco puntos por encima del hantavirus (27%).',
      contexto: 'Audit trail: 1,460/452 (1-jul, DON612) → 1,561/506 (5-jul, ECDC/WHO AFRO): +101 confirmados y +54 muertes. La curva no toca techo, aunque el seguimiento de contactos al 81.6% sugiere que el rastreo todavía funciona. Registro de esta fecha: Argentina había avanzado de dieciseisavos; su avance posterior (cuartos el 11-jul y semifinal en Atlanta el 15-jul) queda en las entradas del 11-12 jul.',
      url: 'https://www.ecdc.europa.eu/en/ebola-outbreak-democratic-republic-congo-and-uganda'
    },
    {
      fecha: '2026-07-11',
      fechaLegible: '11 jul 2026',
      fuente: 'Corredor Mundial · sede Atlanta',
      tagClass: 'fuente-oficial',
      vocero: 'Fulton County Board of Health (Atlanta) + FIFA (cobertura ESPN, NPR, NBC)',
      cita: '<b>El corredor de la hipótesis se volvió calendario.</b> Argentina, la única selección con la cepa Andes de transmisión persona a persona (Chile no calificó) y en su temporada récord (107 casos, letalidad 31%+), venció a Suiza 3-1 en cuartos (11-jul) y <b>juega su semifinal contra Inglaterra en Atlanta, en el Mercedes-Benz (estadio sellado con aire acondicionado), el 15 de julio.</b> En esa misma sede, el condado de Fulton (Dr. Marcus Plescia) preparó existencias de vacunas e inmunoglobulina, y el aeropuerto Hartsfield-Jackson opera como hub de cribado de ébola. <b>El foco local declarado es sarampión, respiratorios y ébola; el hantavirus no figura.</b>',
      contexto: 'A mi juicio (opinión editorial), esto sostiene la hipótesis del expediente sin forzarla: la autoridad de la sede vigila el sarampión (color, no tesis) y criba el ébola africano de contacto, pero no tiene protocolo por cepa para el corredor sudamericano del hantavirus, que llega precisamente a ese estadio cerrado, en la ronda más avanzada, en el pico de la temporada del reservorio. No es pronóstico ni complot: es un punto ciego geográficamente concreto. Riesgo de alta consecuencia y baja probabilidad; lo señalable es que nadie mira por ese ángulo justo donde el corredor se materializa.',
      url: 'https://www.mainstreetnews.com/jackson/state_news/atlanta-ready-to-handle-diseases-if-world-cup-crowds-bring-them/article_ccbabec3-6600-4062-8a89-cf8e870bfae5.html'
    },
    {
      fecha: '2026-07-02',
      fechaLegible: '2 jul 2026',
      fuente: 'Mercado · NASDAQ',
      tagClass: 'fuente-medio',
      vocero: 'Moderna (MRNA) · NASDAQ · cobertura StocksToTrade + Yahoo Finance',
      cita: '<b>Moderna cierra el 2-jul en USD 79.76, acumulando +146% en lo que va del año.</b> El impulso ya NO viene del brote: lo mueven el aval 9-0 de la FDA a su vacuna de gripe mRNA-1010 (decisión final prevista al 5-ago) y su Science Day, donde exhibió su giro a oncología (mieloma múltiple, cáncer de ovario, CAR-T in vivo).',
      contexto: 'A mi juicio (opinión editorial), esto cierra el arco financiero del expediente: la acción reaccionó primero al miedo (brote, mayo), después al producto pandémico (Fase 1 hantavirus, junio) y ahora a su negocio comercial (gripe y cáncer, julio). El hantavirus le sirvió de trampolín; hoy vuela por otras razones. La preparación pandémica es la puerta de entrada del capital, no su destino final.',
      url: 'https://stockstotrade.com/news/moderna-inc-mrna-news-2026_07_02/'
    },
    {
      fecha: '2026-07-01',
      fechaLegible: '1 jul 2026',
      fuente: 'HHS · CDC · sedes EE.UU.',
      tagClass: 'fuente-oficial',
      vocero: 'HHS + CDC (línea oficial) frente a departamentos de salud locales (cobertura CNN, PBS, Sports Illustrated, The Hill; State Dept/CEPI)',
      cita: '<b>Grieta entre la línea federal y la local.</b> El HHS declara que él y el CDC "coordinan activamente con socios estatales, locales y globales para garantizar la salud pública durante el Mundial 2026". El CDC dice estar "activamente comprometido" bajo la estructura de la Casa Blanca y tener un <em>World Cup data dashboard</em> "en desarrollo final". Pero las autoridades locales de las sedes reportan que <b>la presencia federal llegó tarde y menos coordinada que antes</b>, con el CDC iniciando llamadas y guías apenas unos meses antes del torneo.',
      contexto: 'A mi juicio (opinión editorial), la grieta es el dato: arriba se declara coordinación total; abajo, las sedes describen un CDC que llega tarde y con menos músculo. El presupuesto lo confirma: el gobierno federal asignó <b>USD 625M a seguridad del Mundial (FEMA, 18-mar) mientras la única partida sanitaria, un suplemento de USD 1,400M para ébola pedido el 24-jun, sigue estancada en el Congreso; el 5-ago el Depto. de Estado sumó USD 242M (total EE.UU. ~USD 512M), pero el suplemento grande no se movió</b>, y el CDC no hizo evaluación nacional de riesgo (pidió a cada jurisdicción "identificar sus prioridades"). Title 42 se renovó el 13-jul por 30 días y vence el 12-ago. En paralelo, el Departamento de Estado comprometió <b>USD 50M a CEPI</b> para contramedidas contra Bundibugyo: hay dinero, pero fluye a la seguridad y a la contención farmacéutica, no a la vigilancia sanitaria del torneo, que se apoya en aguas residuales de 11 áreas metropolitanas. La retórica de control convive con una capacidad mermada. Contexto de alerta: EE.UU. ya rebasó en 2026 los 2,465 casos de sarampión (corte 6-ago) en 45 jurisdicciones, superando el total de 2025 (2,289), el mayor desde 1991.',
      url: 'https://www.cnn.com/2026/05/27/health/world-cup-public-health'
    },
    {
      fecha: '2026-07-01',
      fechaLegible: '1 jul 2026',
      fuente: 'OMS DON612',
      tagClass: 'fuente-oms',
      vocero: 'OMS Disease Outbreak News 612 (datos al 1-jul)',
      cita: '<b>El brote se dispara: RDC 1,460 confirmados + 452 muertes confirmadas, CFR 30.9% (~31%), con 641 hospitalizados en aislamiento y 213 recuperados.</b> Desde el DON608 (19-jun) se sumaron +564 confirmados y +220 muertes. Uganda reporta 20 confirmados + 2 muertes (más un caso probable fallecido). <b>La letalidad del ébola cruza el 31% y ya supera a la del hantavirus (27%).</b> En paralelo, la OMS anunció el inicio del enrolamiento de pacientes en el ensayo PARTNERS, el primer estudio clínico para identificar tratamientos efectivos contra la enfermedad por virus Bundibugyo (anticuerpo MBP-134 y antiviral remdesivir).',
      contexto: 'Audit trail: 896/232 (17-jun) → 1,155/304 (24-25 jun) → 1,460/452 (1-jul). El salto de muertes (+148 en menos de una semana) refleja reconciliación de defunciones retrospectivas, patrón habitual en filovirus. A mi juicio (opinión editorial), dos hechos marcan el corte: el ébola deja de ser el virus de contacto menos letal del cuadro y su letalidad rebasa al hantavirus; y, por fin, arranca un ensayo específico para Bundibugyo, que empieza a cerrar la asimetría de la cepa equivocada. La violencia contra los equipos de respuesta y la expansión territorial siguen siendo los factores que mantienen la curva sin techo.',
      url: 'https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON612'
    },
    {
      fecha: '2026-06-26',
      fechaLegible: '26 jun 2026',
      fuente: 'Mercado · NASDAQ',
      tagClass: 'fuente-medio',
      vocero: 'Moderna (MRNA) · NASDAQ · cobertura Investing.com + Timothy Sykes',
      cita: '<b>Moderna salta a ~USD 67-68 al 26-jun (+48% desde el mínimo de junio), pero el detonante ya NO es el brote: es la gripe.</b> Un comité asesor de la FDA votó 9-0 a favor de su vacuna de influenza mRNA-1010 (aprobación plena en 50-64, acelerada en 65+), lo que revierte el previo "Refusal-to-File" de ese mismo producto.',
      contexto: 'A mi juicio (opinión editorial), esto matiza la lectura financiera del expediente: la acción reaccionó primero al miedo (brote), después al producto (Fase 1 hantavirus) y ahora al negocio comercial (gripe). El arco de la preparación pandémica sigue: la empresa monetiza el miedo cuando lo hay y el producto cuando llega. El "Refusal-to-File" de mRNA-1010 que teníamos anotado quedó revertido por este aval 9-0.',
      url: 'https://www.timothysykes.com/news/moderna-inc-mrna-news-2026_06_26/'
    },
    {
      fecha: '2026-06-25',
      fechaLegible: '25 jun 2026',
      fuente: 'MINSA RDC + OMS/ECDC',
      tagClass: 'fuente-oms',
      vocero: 'Ministerio de Salud RDC (vía OMS/ECDC, datos al 24-25 jun)',
      cita: '<b>El brote cruza los 1,000 y se vuelve el tercer brote de ébola más grande de la historia: RDC 1,155 confirmados + 304 muertes + 385 hospitalizados, CFR 26%.</b> Geografía: Ituri 1,054 (22 zonas), Nord-Kivu 98 (11 zonas), Sud-Kivu 3. Uganda estable (19 + 2). Casos importados confirmados en Francia (24-jun) y en un estadounidense evacuado a Alemania (19-may). <b>Arrancó el primer ensayo clínico de la historia contra la cepa Bundibugyo</b>, probando el anticuerpo MBP-134 y el antiviral remdesivir, bajo patrocinio de la OMS.',
      contexto: 'Audit trail: +259 confirmados y +72 muertes en ~8 días sobre el DON608 (896/232 al 17-jun). La letalidad se mantiene en 26%, a un punto del hantavirus (27%). A mi juicio (opinión editorial), dos cosas cambian el cuadro: el brote entra al podio histórico de los filovirus, y por fin hay ensayo específico para Bundibugyo, lo que empieza a cerrar la asimetría de "la cepa equivocada" que el expediente venía marcando. El caso importado en Francia recuerda que hasta el filtro de contacto africano puede fallar; el corredor sudamericano del hantavirus sigue sin cribado equivalente.',
      url: 'https://www.ecdc.europa.eu/en/ebola-outbreak-democratic-republic-congo-and-uganda'
    },
    {
      fecha: '2026-06-18',
      fechaLegible: '18 jun 2026',
      fuente: 'BARDA · seguir el dinero',
      tagClass: 'fuente-oficial',
      vocero: 'Contratos BARDA / HHS · cobertura CIDRAP, GlobeNewswire, EIN Presswire',
      cita: '<b>El dinero no reacciona al brote: lo precede. La arquitectura de contramedidas de BARDA ya estaba contratada años antes.</b> El tratamiento de ébola <b>Ebanga</b> (ansuvimab, Emergent BioSolutions) tiene un contrato BARDA de hasta <b>USD 704 millones a 10 años, firmado el 31 de julio de 2023</b> (USD 118M de desarrollo más hasta USD 583M de compra de producto), pero está autorizado por la FDA solo para la cepa <b>Zaire</b>, no para la Bundibugyo del brote actual. En paralelo, el antiviral de viruela <b>TPOXX</b> (tecovirimat, SIGA) sostiene un contrato BARDA de hasta ~USD 629M para un stockpile permanente. Y la pieza fresca: el <b>9 de junio de 2026</b>, ya con el brote en curso, BARDA ejerció una opción de <b>+USD 33M con Public Health Vaccines</b> para una vacuna contra Sudan y dos candidatas contra Bundibugyo (plataforma rVSV licenciada de la agencia canadiense PHAC, una de ellas con apoyo de CEPI y del NIAID).',
      contexto: 'A mi juicio (opinión editorial), estos contratos son la prueba literal de la preparación pandémica (Lakoff) y del capitalismo de la preparación: la respuesta se pre-financia antes de que la crisis exista. El detalle más fino para el expediente: igual que la vacuna Ervebo solo cubre Zaire mientras muere gente de Bundibugyo, el tratamiento Ebanga de USD 704M también es para Zaire. La contramedida pre-posicionada apunta, una y otra vez, a la cepa equivocada. El brote no crea el negocio, activa el que ya estaba firmado. La opción de PHV del 9-jun muestra el mecanismo en vivo: la máquina ejerce una cláusula preexistente, sin estridencia, en plena emergencia. Marcado: contratos verificables en comunicados de empresa y cobertura especializada; el split de Ebanga y la indicación Zaire provienen del comunicado primario de Emergent y de la etiqueta FDA.',
      url: 'https://www.cidrap.umn.edu/ebola/emergent-biosolutions-receives-barda-contract-ebola-treatment'
    },
    {
      fecha: '2026-06-19',
      fechaLegible: '19 jun 2026',
      fuente: 'OMS DON608',
      tagClass: 'fuente-oms',
      vocero: 'OMS Disease Outbreak News 608 (publicado 19-jun, datos al 17-jun)',
      cita: '<b>El brote da un salto: la OMS DON608 consolida la RDC en 896 confirmados + 232 muertes confirmadas, con la letalidad subiendo a CFR 26%.</b> Geografía: Ituri concentra 817 casos (91.1%): Bunia 247, Rwampara 195, Mongbwalu 189, Nyankunde 68; Nord-Kivu en 11 zonas de salud; Sud-Kivu en 1; 33 zonas en total; 78 recuperados. Uganda se mantiene estable en 19 confirmados + 2 muertes (más un caso probable fallecido), con 10 recuperados. Total combinado: 915 confirmados + 234 muertes. <b>Señal de erosión del control:</b> la OMS reporta un ataque contra un equipo de entierros seguros y dignos en Mongbwalu (Ituri) y cinco trabajadores tomados como rehenes en puntos de control, acusados falsamente de propagar la enfermedad. La OMS convocó a expertos para definir qué vacunas candidatas pueden probarse en ensayos clínicos de emergencia; los ensayos aún no comienzan.',
      contexto: 'Audit trail: el DON608 revisa las muertes con fuerza al alza. Del corte del 15-jun (837 conf + 196 muertes, CFR 23.4%) salta al 17-jun a 896 + 232 (+59 confirmados, +36 muertes); la letalidad cruza a 26%, casi a la par del hantavirus (27%). El salto en muertes refleja reconciliación de defunciones retrospectivas, no solo del día. A mi juicio (opinión editorial), la violencia contra los equipos de entierro no es ruido marginal: es la variable que históricamente vuelve incontrolable un brote de filovirus (patrón de Kivu 2018-2020), y aparece justo en la primera quincena del Mundial, cuando los ensayos de vacuna todavía no arrancan.',
      url: 'https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON608'
    },
    {
      fecha: '2026-06-18',
      fechaLegible: '18 jun 2026',
      fuente: 'Dept. State EE.UU.',
      tagClass: 'fuente-oficial',
      vocero: 'U.S. Department of State (corte 12-jun) + Health Policy Watch',
      cita: '<b>Estados Unidos acumula más de USD 270 millones comprometidos para la respuesta al ébola</b>, según el Departamento de Estado: rastreo de contactos, cribado en fronteras y puntos de entrada, activación de decenas de clínicas en zonas afectadas y educación comunitaria. Se suma un compromiso de <b>USD 50 millones a CEPI</b> para contramedidas contra Bundibugyo (laboratorio, ensayos clínicos y manufactura). El implementador International Medical Corps reporta más de 6,300 personas tamizadas en 24 centros de salud de Ituri, con 41 casos sospechosos aislados al 8-jun.',
      contexto: 'El monto es grande, pero su lectura lleva asterisco: Health Policy Watch documenta que el desembolso es opaco y que EE.UU. no se coordina con la OMS, de la que se retiró. A mi juicio (opinión editorial), el patrón es coherente con La transferencia silenciosa (9-jun): el dinero fluye por canal bilateral discreto y bajo control estadounidense, con visibilidad sobre el destino pero no sobre la ejecución, mientras la contribución multilateral sigue bloqueada. Los USD 50M a CEPI son la cara farmacéutica del mismo gasto: financiar la contramedida antes de que exista.',
      url: 'https://www.state.gov/releases/office-of-the-spokesperson/2026/06/ebola-response-update-june-12-2026/'
    },
    {
      fecha: '2026-06-18',
      fechaLegible: '18 jun 2026',
      fuente: 'Mercado · NASDAQ',
      tagClass: 'fuente-medio',
      vocero: 'Moderna (MRNA) · NASDAQ · cobertura Investing.com + StocksToTrade',
      cita: '<b>La acción de Moderna sigue subiendo: cotiza el 18-jun en torno a USD 63.26 (rango del día 62.47 a 64.35).</b> Es un salto de +27% sobre los USD 49.64 del 11-jun. El detonante esta vez sí es clínico: <b>los datos de Fase 1 de su vacuna de ARNm contra el hantavirus Andes resultaron bien tolerados, sin señales serias de seguridad y con respuesta de anticuerpos en todas las dosis.</b> Se suman datos positivos de su vacuna contra el cáncer, y al menos un analista elevó su precio objetivo.',
      contexto: 'Matiz respecto al patrón previo. Hasta el 11-jun la acción reaccionaba a la noticia del brote, no al producto; el repunte del 16 al 18-jun añade un driver clínico real (Fase 1 hantavirus positiva). A mi juicio (opinión editorial), eso cierra el arco que el expediente venía señalando: el candidato existía antes del brote (el trabajo en ARNm contra Andes arranca con el convenio Moderna-Corea de 2023), y ahora el dato de Fase 1 monetiza esa anticipación justo cuando el corredor sudamericano del Mundial pone el tema en pantalla. La materia prima (el virus del Sur) y la patente (la vacuna del Norte) se encuentran en la cinta de cotizaciones.',
      url: 'https://www.investing.com/analysis/moderna-stock-climbs-after-hantavirus-vaccine-data-triggers-analyst-price-target-200679973'
    },
    {
      fecha: '2026-06-17',
      fechaLegible: '17 jun 2026',
      fuente: 'CDC · HHS · FEMA · Senado EE.UU.',
      tagClass: 'fuente-oficial',
      vocero: 'Agencias federales de salud y emergencia de Estados Unidos (cobertura CNN, Senado EE.UU., FEMA)',
      cita: '<b>El dispositivo institucional estadounidense exhibe una asimetría de fondo de cara al Mundial.</b> Por un lado, recorte: el CDC y el HHS despidieron a cientos de expertos, incluidos los desplegados en la RDC, y los sistemas de vigilancia quedaron debilitados; el secretario Robert F. Kennedy Jr. reemplazó al comité asesor de vacunas (ACIP) y un grupo de senadores le exigió por carta dejar a los científicos del CDC hablar del hantavirus sin interferencia política. Por otro, gasto dirigido: <b>FEMA otorgó un grant histórico de USD 625 millones a las 11 ciudades sede, exclusivamente para seguridad</b> (policía, ciberseguridad, ejercicios operativos), sin un programa federal equivalente de salud pública. En paralelo, el propio CDC montó un <em>World Cup data dashboard</em> para los departamentos estatales y locales.',
      contexto: 'Audit trail / fuentes: el grant de USD 625M está confirmado por FEMA (press release, programa creado bajo la One Big Beautiful Bill Act de julio 2025); los recortes del CDC/HHS y el reemplazo del ACIP por cobertura de CNN y cartas del Senado (Warnock, Hickenlooper). A mi juicio (opinión editorial), la contradicción es el dato: el Estado recorta el cuerpo que detecta (CDC) y construye el ojo que vigila el torneo (dashboard), mientras financia el anillo de seguridad y no el sanitario. Lo multilateral avanza justo donde Washington se repliega: África CDC y la OMS lanzaron un plan continental conjunto de respuesta al ébola el 5-jun. El gesto deja sin cubrir el mismo hueco que el expediente viene marcando: el corredor hantavirus Andes no entra en ningún protocolo de cribado.',
      url: 'https://www.fema.gov/press-release/20260318/fema-awards-historic-625-million-states-and-cities-secure-years-fifa-world'
    },
    {
      fecha: '2026-06-16',
      fechaLegible: '16 jun 2026',
      fuente: 'OPS / OMS · alerta Mundial',
      tagClass: 'fuente-oms',
      vocero: 'OPS + expertos en enfermedades infecciosas (cobertura CNBC, UN News)',
      cita: '<b>La alerta sanitaria oficial del Mundial 2026 apunta al sarampión y al ébola, no al hantavirus.</b> La OPS pide reforzar vigilancia y vacunación de sarampión: las Américas suman 20,521 casos y 25 muertes a mediados de mayo, cuatro veces más que en 2025 (México 10,920 casos, Guatemala 6,209). Sobre hantavirus Andes y ébola, los expertos los clasifican como eventos "de alta consecuencia y baja probabilidad", improbables de generar un brote masivo ligado al torneo por no transmitirse con facilidad en contacto casual.',
      contexto: 'El sarampión es color, no tesis: un padecimiento ya conocido y vacunable no dispara el expediente. Lo que importa aquí es el encuadre oficial. Al rotular el hantavirus Andes como "baja probabilidad", la autoridad sanitaria justifica de antemano por qué el corredor sudamericano del torneo no entra en ningún protocolo de cribado por cepa. A mi juicio (opinión editorial), esa clasificación no es falsa, es selectiva: describe el riesgo poblacional promedio y deja fuera el escenario que el expediente vigila, el recinto cerrado con afición del cono sur, que es justo donde el Andes sí ha mostrado transmisión persona a persona.',
      url: 'https://news.un.org/en/story/2026/06/1167642'
    },
    {
      fecha: '2026-06-16',
      fechaLegible: '16 jun 2026',
      fuente: 'SSA · México',
      tagClass: 'fuente-oficial',
      vocero: 'Secretaría de Salud + autoridades migratorias y aeroportuarias',
      cita: '<b>A una semana del partido Colombia vs RDC en Guadalajara (23-jun), México refuerza la vigilancia epidemiológica en las tres sedes mexicanas (CDMX, Guadalajara, Monterrey).</b> Monitoreo intensificado en aeropuertos y puntos de entrada. Riesgo nacional mantenido en "muy bajo", cero casos de ébola o hantavirus al cierre. Recomendación oficial a visitantes: esquema de vacunación completo, incluido sarampión, influenza y COVID. Las autoridades señalan el calor extremo (Guadalajara, Monterrey) como el riesgo dominante para aficionados, por encima del viral.',
      contexto: 'El partido Colombia vs República Democrática del Congo cruza por primera vez en cancha al equipo del país del brote con afición sudamericana en suelo latinoamericano. Es el escenario que la pieza del 4-jun (La precaución hacia el virus equivocado) anticipó: el dispositivo sigue calibrado contra ébola africano de contacto, mientras el vector hantavirus Andes (endémico en el cono sur de donde viene la afición colombiana, argentina, chilena) no aparece en el protocolo de cribado por cepa. El énfasis oficial en el calor confirma que el riesgo viral está descartado retóricamente justo cuando el corredor sudamericano llega a la sede.',
      url: 'https://www.mexicotours.travel/mexico_health_measures/'
    },
    {
      fecha: '2026-06-14',
      fechaLegible: '14 jun 2026',
      fuente: 'MINSA RDC + OMS DON607',
      tagClass: 'fuente-oms',
      vocero: 'Ministerio de Salud Pública RDC + OMS Disease Outbreak News 607',
      cita: '<b>El brote escala con fuerza.</b> OMS DON607 (13-jun, datos al 10-jun): RDC 676 confirmados + 136 muertes (CFR 20.1%); Uganda 19 casos con al menos 37 recuperados en la región. <b>MINSA RDC al 14-jun (datos al 13-jun): 782 confirmados + 181 muertes confirmadas + 359 hospitalizados en aislamiento.</b> +106 confirmados y +45 muertes desde el 12-jun. Geografía: Ituri 717 en 20 zonas de salud, Nord-Kivu 62 en 10 zonas (casi el doble de los 32 del 11-jun), Sud-Kivu 3 en 1 zona.',
      contexto: 'Audit trail: cifras superseden DON606 del 11-jun (635 conf + 127 muertes). En 3 días: +147 confirmados y +54 muertes. La curva no se aplana, se acelera. La duplicación de Nord-Kivu (32 a 62) y la suma de 2 zonas nuevas en Ituri (18 a 20) confirman propagación territorial activa. La letalidad confirmada sube de 20.1% (DON607 al 10-jun) a 23.1% (MINSA al 13-jun), acercándose al rango histórico de Bundibugyo (25-40%). El brote crece del lado congoleño; Uganda se mantiene estable en 19/2 (mejor red sanitaria). El escalamiento coincide con la primera semana del Mundial 2026.',
      url: 'https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON607'
    },
    {
      fecha: '2026-06-11',
      fechaLegible: '11 jun 2026',
      fuente: 'Mercado · NASDAQ',
      tagClass: 'fuente-medio',
      vocero: 'Moderna (MRNA) · NASDAQ · cobertura Yahoo Finance + Nasdaq',
      cita: '<b>La acción de Moderna repunta +7.94% en un solo día, cerrando el 11 de junio en USD 49.64.</b> Es el segundo spike más fuerte del expediente, después del intradía de USD 59.48 del 11 de mayo (primer día de noticia hantavirus). El repunte coincide con la inauguración del Mundial 2026 y con el cruce de las 127 muertes confirmadas de ébola. <b>Compra institucional significativa en 2026</b> por Morgan Stanley y otros grandes asset managers. Los principales tenedores siguen siendo Vanguard, BlackRock, FMR, Baillie Gifford y State Street. Los insiders de la empresa registran solo ventas pequeñas rutinarias, sin compras grandes.',
      contexto: 'Patrón de mercado que el expediente ha trackeado desde el 11-may: la acción de Moderna reacciona a las noticias de brote, no a anuncios de producto. El repunte del 11-jun no responde a un dato clínico (no hubo aprobación ni resultado de ensayo ese día) sino a la convergencia mediática (Mundial + cifras ébola). La compra institucional de Morgan Stanley + Big Three (Vanguard, BlackRock, State Street) confirma la lectura de las piezas previas: los gestores de activos capturan la volatilidad del miedo sanitario. La ausencia de compra de insiders sugiere que la dirección no ve el precio como ganga, lo que apunta a un movimiento especulativo de corto plazo, no a expectativa de fundamentales. Es la doctrina del shock leída en la cinta de cotizaciones.',
      url: 'https://finance.yahoo.com/quote/MRNA/'
    },
    {
      fecha: '2026-06-10',
      fechaLegible: '10 jun 2026',
      fuente: 'Dept. State EE.UU.',
      tagClass: 'fuente-oficial',
      vocero: 'U.S. Department of State — Ebola Response Update (10-jun)',
      cita: '<b>EE.UU. anuncia USD 20 millones adicionales para preparación contra ébola en Burundi, Kenya, Rwanda y Sudán del Sur.</b> Se suman a los USD 13.5M comprometidos con Kenya el 6-jun. El Department of State mantiene la Title 42 vigente (vence 17-jun) con screening reforzado en los cuatro aeropuertos designados. Ciudadanos estadounidenses pueden ingresar pero pasan por cribado sanitario.',
      contexto: 'El gasto bilateral USA-África suma USD 33.5M (13.5M Kenya + 20M cuatro países) en cuatro días, todo en países vecinos al brote, no en RDC ni Uganda directamente. La lógica es de contención perimetral: financiar el anillo fronterizo para que el brote no se propague hacia los hubs de salida. Refuerza la tesis de La transferencia silenciosa (9-jun): el dinero fluye por canal bilateral discreto bajo control estadounidense, mientras la contribución multilateral a Gavi (USD 600M) sigue bloqueada por RFK Jr.',
      url: 'https://www.state.gov/releases/office-of-the-spokesperson/2026/06/ebola-response-update-june-10-2026'
    },
    {
      fecha: '2026-05-29',
      fechaLegible: '29 may 2026',
      fuente: 'Gavi',
      tagClass: 'fuente-oms',
      vocero: 'Gavi, the Vaccine Alliance · First Response Fund',
      cita: '<b>Gavi compromete hasta USD 50 millones de su First Response Fund para la respuesta al brote Bundibugyo</b>, con <b>hasta USD 40 millones dedicados a acelerar el acceso a vacuna</b>. La coalición custodia el stockpile global de Ebola, que mantiene <b>500,000 dosis de Ervebo</b> (vacuna Merck licenciada para cepa Zaire, disponible para cualquier país). Gavi advierte que su capacidad de mantener stockpiles de vacuna para ébola, cólera y otras enfermedades mortales queda severamente comprometida por el bloqueo de su financiamiento estadounidense.',
      contexto: 'Dato clave que refuerza La transferencia silenciosa (9-jun): Gavi sigue operando con sus propios fondos (USD 50M First Response Fund) a pesar de que EE.UU. mantiene bloqueados los USD 600M de contribución multilateral. Es la coalición vaciada que sigue funcionando con lo que le queda. El stockpile de 500,000 dosis de Ervebo es para cepa Zaire, no para Bundibugyo (la del brote actual), lo que confirma la asimetría: la infraestructura multilateral existe pero está calibrada para la cepa equivocada y financiada a medias. Audit trail: este compromiso del 29-may antecede al bloqueo confirmado de Kennedy del 6-jun; los dos coexisten en el tiempo.',
      url: 'https://www.gavi.org/news/media-room/gavi-commits-us-50-million-bundibugyo-ebolavirus-vaccines-and-outbreak-response'
    },
    {
      fecha: '2026-06-11',
      fechaLegible: '11 jun 2026',
      fuente: 'OMS — DON606',
      tagClass: 'fuente-oms',
      vocero: 'OMS — Disease Outbreak News 606',
      cita: 'Cifras al 11 de junio (datos RDC al 9 de junio): <b>RDC 635 confirmados, 127 muertes confirmadas, 260 hospitalizados en aislamiento.</b> Geografía: Ituri 600 confirmados en 18 zonas de salud (nueva zona afectada: Tchomia, con 2 confirmados), Nord-Kivu 32 en 7 zonas, Sud-Kivu 3 en 1 zona. Uganda con transmisión epidemiológicamente vinculada a RDC: casos importados más transmisión secundaria entre contactos y trabajadores sanitarios. Desde el reporte del 10 de junio: +37 confirmados nuevos y +12 muertes nuevas en 24 horas. Letalidad confirmada cruda: 127/635 = 20.0% en RDC.',
      contexto: 'Audit trail: DON606 supersede el cuadro del 9-jun (550 conf + 101 muertes). El brote suma +85 confirmados y +26 muertes en cuatro días (7 a 11-jun) y abre una nueva zona de salud (Tchomia) el mismo día de la inauguración del Mundial 2026. La curva sigue ascendente pese a la respuesta institucional consolidada. Implicación editorial vigente: Title 42 vence el 17-jun, mismo día que la RDC debuta contra Portugal en Houston, con el brote de origen cruzando las 127 muertes confirmadas.',
      url: 'https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON606'
    },
    {
      fecha: '2026-06-11',
      fechaLegible: '11 jun 2026',
      fuente: 'OPS / CDC',
      tagClass: 'fuente-cdc',
      vocero: 'Organización Panamericana de la Salud + CDC EE.UU. · expertos de salud pública',
      cita: '<b>Los expertos de salud pública desplazan su preocupación principal del ébola al sarampión para el Mundial 2026.</b> El CDC confirma <b>2,030 casos de sarampión en EE.UU. en 2026</b> al cierre del 4 de junio, cerca del total de todo 2025. La OPS emite advertencia formal esa semana. El sarampión es uno de los patógenos más contagiosos que existen, se transmite por aerosol y encuentra en los recintos cerrados del Mundial el escenario ideal de propagación. Cero casos de ébola en EE.UU. al cierre.',
      contexto: 'El sarampión confirma operativamente la tesis de la pieza del 4-jun (La precaución hacia el virus equivocado): el dispositivo regulatorio trinacional se calibró contra ébola africano (de contacto, clínicamente improbable en estadios) mientras el vector que el Mundial sí amplifica se transmite por aerosol en multitudes. El sarampión agrega una capa: lo agravan el bloqueo de Gavi (USD 600M, documentado en La transferencia silenciosa del 9-jun) y la postura anti-vacunas de RFK Jr. al frente de HHS. La amenaza no vino del continente vigilado ni del patógeno vigilado.',
      url: 'https://www.cnbc.com/2026/06/04/world-cup-2026-health-officials-focused-on-ebola-measles.html'
    },
    {
      fecha: '2026-06-09',
      fechaLegible: '9 jun 2026',
      fuente: 'MINSA RDC + ECDC + NICD',
      tagClass: 'fuente-oms',
      vocero: 'Ministerio de Salud Pública RDC · vía ECDC y NICD Sudáfrica',
      cita: 'Cifras al 7 de junio: <b>RDC 550 confirmados, 101 muertes confirmadas, 309 hospitalizados en aislamiento.</b> Geografía: Ituri 518 confirmados en 17 zonas de salud, Nord-Kivu 29 en 7 zonas, Sud-Kivu 3 en 1 zona. Uganda mantiene 19 confirmados y 2 muertes. Desde el 8 de junio: +35 confirmados nuevos y +10 muertes nuevas en 24 horas. El brote cruza la barrera de las 100 muertes confirmadas a dos días de la inauguración del Mundial 2026. Letalidad confirmada cruda al 9-jun: 101/550 = 18.4% en RDC, agregada 103/569 = 18.1%.',
      contexto: 'Audit trail: el cuadro del 8-jun (515 conf + 91 muertes) ya había invalidado la lectura preliminar del 5-jun ("ritmo se desacelera"). El reporte del 9-jun confirma que la curva no se aplana: ritmo sostenido ~35 confirmados nuevos por día pese a la respuesta institucional consolidada (Africa CDC+OMS USD 518M, CEPI USD 62M, contact tracing reforzado). Implicación editorial vigente: el dispositivo trinacional Title 42 + PHAC + SSA México arranca operativo el día de la inauguración del Mundial (11-jun) contra un brote cuya curva sigue ascendente en su geografía de origen. La selección de la RDC debuta el 17-jun en Houston, mismo día que vence Title 42.',
      url: 'https://www.ecdc.europa.eu/en/ebola-outbreak-democratic-republic-congo-and-uganda'
    },
    {
      fecha: '2026-06-06',
      fechaLegible: '6 jun 2026',
      fuente: 'HHS · RFK Jr.',
      tagClass: 'fuente-oficial',
      vocero: 'Department of Health and Human Services · Robert F. Kennedy Jr., Secretario',
      cita: '<b>HHS mantiene en bloqueo USD 300 millones anuales asignados por el Congreso a Gavi (Alianza Global para Vacunas) para fiscales 2025 y 2026, agregado USD 600 millones.</b> Argumento oficial: Gavi rechazó plan formal para eliminar tiomersal de sus vacunas. Kennedy sostiene que tiomersal causa autismo, posición desmentida por CDC y por revisiones sistemáticas internacionales. Los fondos vencen el 30 de septiembre si la administración no los libera. Gavi estima 75 millones de niños sin vacunación de rutina en cinco años y 1.2 millones de muertes infantiles atribuibles. Gavi custodia el stockpile global de Ervebo (vacuna Merck cepa Zaire).',
      contexto: 'Mismo día (6-jun), el Secretario de Estado Marco Rubio anuncia que EE.UU. "reengage" parcialmente con Gavi, sin que esto implique liberación del fondo bloqueado. La tensión interna del gabinete entre Rubio (multilateralista) y Kennedy (escéptico de vacunas) se resuelve operativamente vía dinero discreto bilateral (USD 13.5M a Kenya por ébola) y no vía la coalición multilateral. Implicación estructural: el bloqueo Kennedy afecta directamente la arquitectura financiera multilateral. La asimetría se acentúa: USD 600M USA bloqueados a Gavi mientras BARDA acelera MBP134 (USA-controlado, Mapp privado, San Diego).',
      url: 'https://www.cidrap.umn.edu/childhood-vaccines/us-lawmakers-seek-answers-blocked-funding-gavi'
    },
    {
      fecha: '2026-06-06',
      fechaLegible: '6 jun 2026',
      fuente: 'State Dept. · Rubio',
      tagClass: 'fuente-oficial',
      vocero: 'Departamento de Estado · Marco Rubio · conversación con W. Ruto',
      cita: '<b>Estados Unidos compromete USD 13.5 millones a Kenya para preparación contra el brote Bundibugyo.</b> Anuncio surge de conversación bilateral entre el Secretario de Estado Marco Rubio y el Presidente keniano William Ruto. Rubio también declara intención de "reengagement" con Gavi, la Alianza Global para Vacunas, tras meses de tensión por el bloqueo de USD 300M de HHS.',
      contexto: 'El paquete Kenya conecta con la propuesta del 28-may de instalar facility de cuarentena ébola en territorio keniano, propuesta que enfrentó backlash documentado por CNN. La línea editorial Klein señala: el dispositivo trinacional del Mundial externaliza el riesgo clínico fuera del corredor norteamericano sin pagar el costo político de la cuarentena en suelo propio. La transferencia USA-Kenya es ese costo externalizado.',
      url: 'https://thehill.com/policy/healthcare/5907909-rubio-state-department-gavi/'
    },
    {
      fecha: '2026-06-05',
      fechaLegible: '5 jun 2026',
      fuente: 'Africa CDC + OMS',
      tagClass: 'fuente-oms',
      vocero: 'Africa CDC + Organización Mundial de la Salud · comunicado conjunto',
      cita: '<b>Plan continental conjunto de respuesta al brote Bundibugyo: USD 518 millones para seis meses (junio a noviembre 2026).</b> Articula 12 países africanos en torno a tres ejes: vigilancia transfronteriza, capacitación clínica y stockpile de contramedidas. Primera vez desde COVID-19 que ambas instituciones lanzan plan conjunto con presupuesto unificado para un brote regional. Coordina con el paquete CEPI USD 62M (1-jun) para vacunas, los USD 13.5M USA-Kenya (5-jun) y la respuesta bilateral europea pendiente.',
      contexto: 'Asimetría editorial fundamental al 8-jun: mientras USA + México + Canadá invierten USD ~0 en gasto sanitario directo y se concentran en restricciones de viaje y screening (gasto regulatorio + comunicación pública), Africa CDC + OMS movilizan medio billón de dólares para respuesta operativa en el origen del brote. La asimetría confirma la lectura Klein invertida que la pieza del 4-jun anticipó: el dispositivo de los países anfitriones es coartada institucional, no protección operativa.',
      url: 'https://www.who.int/news/item/05-06-2026-africa-cdc-and-who-launch-joint-continental-ebola-response-plan'
    },
    {
      fecha: '2026-06-04',
      fechaLegible: '4 jun 2026',
      fuente: 'HHS + BARDA',
      tagClass: 'fuente-cdc',
      vocero: 'HHS Office of Preparedness and Response + BARDA',
      cita: '<b>HHS confirma que estadounidenses con exposiciones de alto riesgo a ébola Bundibugyo tendrán acceso al tratamiento experimental MBP134.</b> BARDA coordina el envío de anticuerpos monoclonales bajo el programa Expanded Access. El protocolo amplía formalmente lo que con Peter Stafford fue uso compasivo único: ahora Mapp Biopharmaceutical podrá suministrar dosis a múltiples pacientes estadounidenses calificados como alto riesgo.',
      contexto: 'El contrato BARDA-Mapp del 20-may (que la columna <em>La biotech que ya tenía la receta</em> del 28-may identificó como el cierre del ciclo Klein 2014-2026) escala a régimen operativo. La biotech de San Diego que tenía la receta ahora la distribuye institucionalmente a la nómina de estadounidenses en riesgo. La asimetría con Gavi bloqueada (USD 300M anuales) acentúa la tesis: USA mueve recursos hacia control privado-nacional (Mapp via BARDA) y los retira de la coalición multilateral (Gavi).',
      url: 'https://www.statnews.com/2026/06/04/kenya-ebola-quarantine-experimental-treatment-mbp-134-authorized/'
    },
    {
      fecha: '2026-06-08',
      fechaLegible: '8 jun 2026',
      fuente: 'CDC EE.UU.',
      tagClass: 'fuente-cdc',
      vocero: 'Centers for Disease Control + Department of Homeland Security · Title 42 Order',
      cita: '<b>La Title 42 Order activa desde el 18 de mayo vence formalmente el 17 de junio,</b> mismo día programado para el partido inaugural mundialista de la República Democrática del Congo contra Portugal en NRG Stadium de Houston. Al cierre del 8 de junio no hay anuncio público de CDC ni DHS sobre extensión, renovación o modificación de la orden. La selección congoleña tiene base en Houston desde antes de la PHEIC, lo que mantiene el dispositivo regulatorio convergiendo operativamente con el corredor del Mundial.',
      contexto: 'Tres escenarios posibles antes del 17-jun: renovación discreta, vencimiento natural con paso a protocolo voluntario, o renovación con excepción para delegaciones mundialistas oficiales. La convergencia es exactamente el cierre del ciclo Klein que la columna del 4-jun anticipó: el dispositivo regulatorio se diseñó contra ébola africano justo cuando el corredor del Mundial trae la selección africana al hub aeroportuario más restringido. Observación editorial complementaria al 8-jun: la cobertura mediática del brote bajó volumen visiblemente en los últimos cinco días pese a que las cifras siguen acelerando (RDC +134 confirmados en 48 horas).',
      url: 'https://www.cdc.gov/ebola/situation-summary/title-42-order.html'
    },
    {
      fecha: '2026-06-07',
      fechaLegible: '7 jun 2026',
      fuente: 'MINSA RDC + ECDC',
      tagClass: 'fuente-oms',
      vocero: 'Ministerio de Salud Pública RDC · vía ECDC Ebola outbreak dashboard',
      cita: 'Cifras al 6 de junio: <b>RDC 515 confirmados, 91 muertes confirmadas, 283 personas hospitalizadas en aislamiento.</b> Geografía actualizada: Ituri 487 confirmados en 17 zonas de salud, Nord-Kivu 25 confirmados en 7 zonas, Sud-Kivu 3 confirmados en 1 zona. Uganda mantiene 19 confirmados y 2 muertes. Desde la actualización del 5 de junio: +134 confirmados nuevos y +27 muertes nuevas en 48 horas. Ritmo actual estimado: ~67 confirmados nuevos por día. Letalidad confirmada cruda al 7-jun: 91/515 = 17.7% en RDC, 2/19 = 10.5% en Uganda, agregada 93/534 = 17.4%.',
      contexto: 'Audit trail crítico: la cifra del 5-jun (399 conf + 66 muertes) reportaba "ritmo de duplicación se desacelera" como lectura preliminar. La actualización del 7-jun INVALIDA esa lectura: la curva no se desaceleró. El brote sigue activo. Implicación operativa: el contact tracing alcanzó su capacidad límite en Ituri, Nord-Kivu y Sud-Kivu; la respuesta institucional consolidada no detuvo la propagación. Implicación editorial: el dispositivo trinacional Title 42 + PHAC + SSA México opera a 5 días del Mundial 2026 contra un brote cuya curva sigue ascendente en su geografía de origen.',
      url: 'https://www.ecdc.europa.eu/en/ebola-outbreak-democratic-republic-congo-and-uganda'
    },
    {
      fecha: '2026-06-06',
      fechaLegible: '6 jun 2026',
      fuente: 'Charité Berlín',
      tagClass: 'fuente-oficial',
      vocero: 'Dr. Leif Erik Sander · director Departamento de Infectología, Charité',
      cita: '<b>El Dr. Peter Stafford es dado de alta del Hospital Charité de Berlín tras 17 días de tratamiento antiviral.</b> PCR negativos sostenidos, ausencia de síntomas confirmada por más de 72 horas, ningún rastro de virus desde el 30 de mayo. Se reúne con su esposa, la Dra. Rebekah Stafford, y sus cuatro hijos (todos PCR negativos durante toda la cuarentena, nunca desarrollaron síntomas). Sander: "Estamos muy satisfechos con el éxito del tratamiento y lo consideramos un éxito terapéutico significativo."',
      contexto: 'Cierre clínico del caso E7 del expediente. El paralelismo Brantly 2014 → Stafford 2026 queda confirmado con desenlace clínico positivo (la columna <em>La biotech que ya tenía la receta</em> del 28-may anticipó este resultado bajo "steadily recovering"). El protocolo Mapp Biopharmaceutical MBP134 más cuidado de soporte temprano produce la segunda supervivencia documentada de misionero estadounidense con ébola en 12 años. Implicación Klein: el ciclo se cierra, el manual confirma su eficacia, la coartada para la respuesta institucional ya está construida.',
      url: 'https://www.cbsnews.com/news/ebola-outbreak-congo-us-doctor-recovers-peter-stafford-germany/'
    },
    {
      fecha: '2026-06-06',
      fechaLegible: '6 jun 2026',
      fuente: 'SSA · México',
      tagClass: 'fuente-oficial',
      vocero: 'Secretaría de Salud federal + IMSS + Sanidad Internacional',
      cita: '<b>México activa formalmente el operativo de bioseguridad ante el inicio del Mundial 2026 el 11 de junio.</b> Filtros sanitarios desplegados en aeropuertos internacionales (AICM, AIFA, Guadalajara, Monterrey, Cancún) con personal de Sanidad Internacional revisando arribos. Brigadas en las 16 alcaldías de la CDMX con carpas de diagnóstico instaladas para sarampión, ébola y hantavirus. Estimación oficial: 5.5 millones de turistas internacionales esperados. IMSS confirma 1,301 profesionales capacitados en 20 Unidades Médicas de Alta Especialidad y seis guías operativas distribuidas. Derivación de casos sospechosos al CENIAQ. Cero casos confirmados o sospechosos en territorio mexicano al cierre.',
      contexto: 'El Financiero (7-jun) titula "México niega la entrada al ébola". Lectura editorial: el operativo está calibrado contra ébola Bundibugyo (cepa de contacto) y sarampión (importante por brote endémico estadounidense), pero las carpas de diagnóstico sí incluyen hantavirus en su lista de cribado, lo que parcialmente moderniza la asimetría señalada en la pieza del 4-jun <em>La precaución hacia el virus equivocado</em>. La cobertura periodística mexicana enfatiza el bombo institucional con propósito mundialista; la pregunta editorial vigente es si el filtro distinguirá entre cepas cuando aparezca un caso clínico.',
      url: 'https://www.elimparcial.com/mexico/2026/06/06/mexico-activa-un-operativo-de-bioseguridad-por-el-mundial-2026-instalando-filtros-en-aeropuertos-y-carpas-de-diagnostico-en-las-16-alcaldias-de-la-cdmx-para-evitar-brotes-de-sarampion-y-la-entrada-de-virus-graves/'
    },
    {
      fecha: '2026-06-05',
      fechaLegible: '5 jun 2026',
      fuente: 'MINSA RDC + OMS',
      tagClass: 'fuente-oms',
      vocero: 'Ministerio de Salud Pública RDC + OMS Ebola outbreak DRC 2026 dashboard',
      cita: 'Cuadro consolidado al 5 de junio: <b>RDC 381 confirmados + 64 muertes confirmadas al 3-jun, más 18 nuevos confirmados y 2 nuevas muertes el 4-jun</b>. Geografía: Ituri 359 confirmados en 17 zonas de salud, Nord-Kivu 19 en 7 zonas, Sud-Kivu 3 en 1 zona. Sospechosos reducidos a 116 (desde 1,077 del 26-may). <b>Uganda sube a 19 confirmados y 2 muertes</b> (vs 15+1 del 1-jun); los 3 nuevos confirmados ugandeses del 5-jun son contactos directos de casos confirmados, sin transmisión local secundaria. <b>Recuperados oficialmente: 6 en RDC + 2 en Uganda = 8 totales</b>.',
      contexto: 'Audit trail: cifras supersede DON605 (2-jun) que reportaba 344+60 en RDC y 15+1 en Uganda. Ritmo de duplicación de confirmados se desacelera (factor 1.1x en cuatro días contra 1.6x en periodo previo); la curva pasa de exponencial a sub-exponencial. La respuesta institucional consolidada empieza a mostrar efectos operativos: aislamiento, contact tracing, cuidado de soporte temprano. Persiste la asimetría entre RDC (alta mortalidad confirmada y suspechada) y Uganda (cifras menores con mejor red sanitaria).',
      url: 'https://www.who.int/emergencies/situations/ebola-outbreak---drc-2026'
    },
    {
      fecha: '2026-06-01',
      fechaLegible: '1 jun 2026',
      fuente: 'CEPI',
      tagClass: 'fuente-oms',
      vocero: 'Coalition for Epidemic Preparedness Innovations · Dr. Richard Hatchett',
      cita: '<b>CEPI activa fast-track de USD 62 millones para tres vacunas candidatas contra Bundibugyo</b>: USD 50M para Moderna (mRNA Bundibugyo específica, alianza ampliada CEPI-Moderna desde enero 2026), USD 8.6M para University of Oxford + Serum Institute of India (manufactura en SII), y USD 3.2M para International AIDS Vaccine Initiative (IAVI). Es la primera activación operativa del programa "100 Day Mission" para un brote real declarado PHEIC. El financiamiento cubre desarrollo preclínico, ensayos clínicos tempranos y manufactura, con progresión a fases tardías si los datos preliminares son positivos.',
      contexto: 'CEPI llevaba años pidiendo el "test real" del 100 Day Mission. El brote Bundibugyo lo entrega. Moderna stock cierra 1-jun en USD 45.98 sin movimiento dramático tras el anuncio (contraste con el spike intradía del 9% del 11-may por hantavirus). Los analistas mantienen postura cautelosa: "vacuna hantavirus está a una década sin Warp Speed-level funding". Implicación editorial: el dinero fluye al vector africano (ébola), no al vector que el Mundial sí amplifica (hantavirus Andes). Misma asimetría que en el dispositivo regulatorio Title 42 / PHAC / SSA.',
      url: 'https://cepi.net/cepi-fast-tracks-three-bundibugyo-ebolavirus-vaccine-candidates'
    },
    {
      fecha: '2026-05-31',
      fechaLegible: '31 may 2026',
      fuente: 'SSA · México',
      tagClass: 'fuente-oficial',
      vocero: 'Secretaría de Salud federal + Instituto Nacional de Rehabilitación',
      cita: 'El <b>Centro Nacional de Investigación y Atención de Quemados (CENIAQ)</b> del Instituto Nacional de Rehabilitación queda designado como <b>centro nacional de atención para casos sospechosos de ébola</b>. La infraestructura de aislamiento, diseñada originalmente para pacientes con grandes quemaduras, se reconvierte como ala de bioseguridad. Coordinación operativa con IMSS, ISSSTE y secretarías de salud estatales con sede mundialista.',
      contexto: 'Cobertura Expansión (31-may, "México se blinda en salud ante el Mundial 2026") detalla helicópteros, médicos y equipos de emergencia desplegados. Cero casos confirmados o sospechosos en territorio mexicano al cierre. Es la activación operativa de la red sanitaria federal con propósito explícito mundialista — primera vez en la historia del país que se monta una infraestructura de bioseguridad enfocada en un megaevento deportivo.',
      url: 'https://www.elimparcial.com/mexico/2026/05/31/mexico-emite-aviso-epidemiologico-por-ebola-el-ceniaq-sera-el-centro-de-atencion-en-caso-de-presentarse-cuadros-clinicos-sospechosos/'
    },
    {
      fecha: '2026-05-29',
      fechaLegible: '29 may 2026',
      fuente: 'Dept. State EE.UU.',
      tagClass: 'fuente-oficial',
      vocero: 'U.S. Department of State — Spokesperson Office',
      cita: '<b>Ebola Response Update 29-may.</b> Recopila las medidas activas del gobierno federal estadounidense: Title 42 Order CDC/DHS vigente, cuatro aeropuertos designados (IAD, ATL, IAH, JFK), screening reforzado para arribos de 21 días previos a RDC/Uganda/Sudán Sur, extensión a residentes permanentes con viaje reciente (rule del 22-may), apoyo logístico USAID al ministerio de salud congoleño. Worldwide Caution Health Alert emitido por la red de embajadas el 28-may.',
      contexto: 'Segunda actualización formal del Departamento de Estado (la primera fue del 23-may). El paquete refleja la postura "defensa adelantada" — el dispositivo regulatorio opera con propósito explícito de blindar el Mundial 2026 antes de cualquier caso. Audit trail: enmarca también las medidas trilaterales del 27-28 may.',
      url: 'https://www.state.gov/releases/office-of-the-spokesperson/2026/05/ebola-response-update-may-29-2026'
    },
    {
      fecha: '2026-05-28',
      fechaLegible: '28 may 2026',
      fuente: 'USA-MX-CA',
      tagClass: 'fuente-oms',
      vocero: 'Pacto trilateral — Gobiernos de Estados Unidos, México y Canadá',
      cita: 'Los tres países anfitriones del Mundial 2026 anuncian alineamiento de medidas sanitarias para arribos desde zonas de brote en África Central. <b>Primer pacto trilateral de salud pública con propósito de megaevento deportivo desde COVID.</b> Coordina restricciones de viaje, screening en aeropuertos designados y protocolos de cuarentena. EE.UU. mantiene su Title 42, México sus alertas, Canadá su prohibición de 90 días — pero ahora el dispositivo opera como un solo manual.',
      contexto: 'Es la primera vez que los tres países aplican medidas sanitarias coordinadas con propósito mundialista. Implicación editorial: el corredor del Mundial activa por primera vez un dispositivo regulatorio trinacional simultáneo — la regulación se anticipa al riesgo material y no responde a él. Cobertura primaria: Al Jazeera, CBC News, US News, The Hill (28-may).',
      url: 'https://www.aljazeera.com/sports/2026/5/28/us-mexico-canada-announce-ebola-related-travel-measures-for-world-cup'
    },
    {
      fecha: '2026-05-27',
      fechaLegible: '27 may 2026',
      fuente: 'PHAC Canadá',
      tagClass: 'fuente-oficial',
      vocero: 'Public Health Agency of Canada — Government of Canada comunicado',
      cita: '<b>Canadá impone prohibición de entrada por 90 días</b> a residentes de RDC, Uganda y Sudán del Sur (vigencia desde miércoles 27-may). Canadienses, residentes permanentes y extranjeros con viaje reciente a esas zonas y asintomáticos: <b>cuarentena de 21 días desde el sábado 30-may</b>. Aplicación a través de Canada Border Services Agency en aeropuertos internacionales y cruces terrestres.',
      contexto: 'Toronto y Vancouver son sedes canadienses del Mundial 2026 — la medida coincide con la preparación logística sanitaria. Según CBC News, la decisión no se basó en consejo de oficiales de salud pública sino en consideraciones operativas del megaevento. Health Minister Mark Holland "doubles down" sobre la prohibición tras críticas de organizaciones de derechos humanos. Es la primera vez que Canadá aplica suspensión migratoria por brote desde COVID.',
      url: 'https://www.canada.ca/en/public-health/news/2026/05/government-of-canada-introduces-temporary-border-measures-in-response-to-the-ebola-disease-outbreak.html'
    },
    {
      fecha: '2026-05-22',
      fechaLegible: '22 may 2026',
      fuente: 'CDC EE.UU.',
      tagClass: 'fuente-cdc',
      vocero: 'CDC — Statement on Title 42 Order Update',
      cita: '<b>Extensión del Title 42 Order del 18-may a residentes permanentes</b> (green card holders) que hayan estado en RDC, Uganda o Sudán del Sur en los 21 días previos. La versión inicial del 18-may eximía a residentes permanentes y ciudadanos USA; la actualización del 22-may los incluye en el régimen restrictivo con redireccionamiento obligatorio a los cuatro aeropuertos designados (IAD, ATL, IAH, JFK) y screening reforzado.',
      contexto: 'Segunda iteración del régimen Title 42 en menos de cinco días. Es la primera activación de Title 42 desde COVID-19. Cobertura: BAL Immigration News, Lexology, Erickson Immigration Group, GT Law. Implicación operativa para el Mundial: el blindaje sanitario USA opera con propósito explícito mundialista — Houston (IAH) es base de la selección de RDC.',
      url: 'https://www.cdc.gov/media/releases/2026/statement-update-on-title-42-order.html'
    },
    {
      fecha: '2026-05-19',
      fechaLegible: '19 may 2026',
      fuente: 'SSA · México',
      tagClass: 'fuente-oficial',
      vocero: 'Secretaría de Salud — Dr. David Kershenobich',
      cita: '<b>México lanza tres alertas epidemiológicas simultáneas a un mes del Mundial 2026: golpe de calor + hantavirus + ébola.</b> Las dos últimas se designan como "de cuidado para la vigilancia epidemiológica". Primera vez en la historia del país que se emiten tres alertas simultáneas vinculadas a un megaevento deportivo. Activación en los tres niveles de atención del SSA con coordinación interinstitucional IMSS-ISSSTE-secretarías estatales.',
      contexto: 'Marca el inicio operativo del dispositivo de blindaje sanitario mexicano para el Mundial. Infobae documenta el paquete completo. Proceso (19-may) lo encuadra como "México está preparado". Implicación editorial: México activa frentes paralelos antes de que ningún caso entre al país — la lógica anticipatoria de la preparedness.',
      url: 'https://www.infobae.com/mexico/2026/05/19/mexico-lanza-tres-alertas-epidemiologicas-a-un-mes-del-mundial-golpe-de-calor-hantavirus-y-ebola-en-el-radar/'
    },
    {
      fecha: '2026-05-18',
      fechaLegible: '18 may 2026',
      fuente: 'CDC + DHS',
      tagClass: 'fuente-cdc',
      vocero: 'Centers for Disease Control + Department of Homeland Security',
      cita: '<b>Activan Title 42 Order bajo autoridad de la Public Health Service Act §362/365 (42 USC §§265, 268).</b> Suspende por <b>30 días, vigencia inmediata</b>, la entrada a EE.UU. de no-ciudadanos que hayan estado en <b>RDC, Uganda o Sudán del Sur en los 21 días previos</b>. <b>Cuatro aeropuertos designados</b> como únicos puntos de entrada con screening reforzado: <b>IAD Washington-Dulles, ATL Atlanta, IAH Houston Bush, JFK Nueva York</b>. Houston y Atlanta son sedes mundialistas — IAH es base de la selección de RDC.',
      contexto: 'Primera activación de Title 42 desde COVID-19. La medida combina autoridad sanitaria con dispositivo migratorio. La selección de la RDC se ha basado en Houston desde antes de la PHEIC, lo que conecta el dispositivo regulatorio con el corredor mundialista de manera explícita. Cobertura: The Hill, Newsweek (lista completa de aeropuertos), Lexology, BAL Immigration, Erickson Immigration. El 22-may una actualización extiende la restricción a residentes permanentes.',
      url: 'https://www.cdc.gov/ebola/situation-summary/title-42-order.html'
    },
    {
      fecha: '2026-05-18',
      fechaLegible: '18 may 2026',
      fuente: 'SSA · México',
      tagClass: 'fuente-oficial',
      vocero: 'Secretaría de Salud federal',
      cita: '<b>Aviso Preventivo de Viaje UIES-APV-ÉBOLA-03-2026.</b> Se recomienda a la población evitar traslados no esenciales a <b>RDC, Uganda y Sudán del Sur</b>. Documento dirigido a centros de salud, unidades de medicina familiar, hospitales generales y de alta especialidad, Unidades de Vigilancia Epidemiológica Hospitalaria y Red Nacional de Laboratorios de Salud Pública.',
      contexto: 'Primera respuesta federal mexicana a la declaración PHEIC del 17-may. Activa protocolos en los tres niveles de atención. Cero casos en territorio mexicano al cierre. Cobertura: Proceso, Milenio, Excélsior, Abriendo Brecha. Antecede a las tres alertas epidemiológicas simultáneas del 19-may.',
      url: 'https://www.gob.mx/salud/prensa/126-mexico-se-mantiene-sin-casos-de-ebola-y-fortalece-medidas-preventivas'
    },
    {
      fecha: '2026-06-03',
      fechaLegible: '3 jun 2026',
      fuente: 'OMS',
      tagClass: 'fuente-oms',
      vocero: 'Dr. Tedros Adhanom Ghebreyesus — media briefing 3 de junio',
      cita: 'Tercera comparecencia formal sobre el brote Bundibugyo en menos de dos semanas. Cuadro al 1 de junio: <b>344 confirmados en RDC + 60 muertes confirmadas + 116 sospechosos</b> bajo investigación; <b>Uganda 15 confirmados + 1 muerte</b>. Geografía consolidada en 24 zonas de salud de tres provincias: <b>Ituri 322 confirmados (16 zonas), Nord-Kivu 19 confirmados (7 zonas), Sud-Kivu 3 confirmados (1 zona)</b>. El procesamiento del backlog de sospechosos —que era de 1,077 el 26 de mayo— bajó a 116 en seis días, convirtiendo los pendientes en confirmados o descartándolos. Cinco recuperados oficialmente dados de alta entre el 28 y el 30 de mayo: cuatro enfermeras y un trabajador de laboratorio.',
      contexto: 'DON605 publicado el 2 de junio supersede a DON603 (26-may). Confirmados RDC pasan de 121 a 344 (+184% en cinco días); muertes confirmadas de 17 a 60 (+253%). El brote sigue activo pero el cuidado de soporte temprano y el protocolo de aislamiento muestran primeros resultados clínicos positivos en personal sanitario. Implicación editorial: la curva no quiebra pero la respuesta institucional ya está consolidada — el manual preparedness aplicado.',
      url: 'https://www.who.int/news-room/speeches/item/who-director-general-s-opening-remarks-at-the-media-briefing---3-june-2026'
    },
    {
      fecha: '2026-06-02',
      fechaLegible: '2 jun 2026',
      fuente: 'OMS',
      tagClass: 'fuente-oms',
      vocero: 'OMS — Disease Outbreak News 605',
      cita: 'Tercer informe oficial del brote Bundibugyo. <b>RDC: 344 confirmados (60 muertes confirmadas) + 116 sospechosos bajo investigación al 1 de junio. Uganda: 15 confirmados (1 muerte).</b> Geografía: 24 zonas de salud activas en tres provincias congoleñas. Reducción significativa del backlog de sospechosos de 1,077 (26-may) a 116 (1-jun) conforme las pruebas confirman o descartan casos. Cinco recuperados dados de alta entre el 28 y 30 de mayo.',
      contexto: 'DON605 supersede a DON603 (21-may rev. 25-may). El ritmo de duplicación de confirmados (~5 días) sostenido desde el PHEIC del 17-may sigue activo. El procesamiento del backlog hace que muchos sospechosos pasen a la columna de confirmados a ritmo industrial. La asimetría con el cluster MV Hondius (13 casos, 3 muertes, contenido) se acentúa: Bundibugyo sostiene curva ascendente; el hantavirus mantiene cuadro estable.',
      url: 'https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON605'
    },
    {
      fecha: '2026-05-30',
      fechaLegible: '30 may 2026',
      fuente: 'UN News',
      tagClass: 'fuente-oms',
      vocero: 'UN News + Ministerio de Salud RDC',
      cita: '<b>Primeras altas hospitalarias del brote.</b> Cuatro enfermeras que se contagiaron mientras atendían pacientes en Ituri son dadas de alta tras recuperación completa. Sumadas a un trabajador de laboratorio dado de alta días antes, son <b>cinco personas oficialmente recuperadas</b>. Primera buena noticia clínica documentada del brote desde el PHEIC del 17 de mayo.',
      contexto: 'De los 18 trabajadores sanitarios contagiados hasta el 26-may, cuatro fallecieron y cinco se recuperaron. La diferencia clínica frente a brotes Zaire anteriores: cuidado de soporte temprano + protocolo de aislamiento estricto + cepa con CFR histórico menor (~25-40 % Bundibugyo vs. ~50-80 % Zaire). El patrón confirma que la infraestructura de respuesta multilateral funciona cuando se activa rápido — la columna *Capitalismo de preparación pandémica* (20-may) anticipó este resultado operativo.',
      url: 'https://news.un.org/en/story/2026/06/1167613'
    },
    {
      fecha: '2026-05-26',
      fechaLegible: '26 may 2026',
      fuente: 'IMSS · México',
      tagClass: 'fuente-oficial',
      vocero: 'Instituto Mexicano del Seguro Social — Secretaría de Salud federal · Dr. David Kershenobich',
      cita: 'El IMSS activa formalmente la respuesta sanitaria para el Mundial 2026 y la vigilancia específica por ébola Bundibugyo ante la llegada de visitantes internacionales. <b>Diez eventos de capacitación con 1,301 profesionales de salud participantes</b>. Triage clínico definido: fiebre superior a 38.6 °C + síntomas compatibles + historial de viaje a zona de brote en los 21 días previos. <b>Cero casos confirmados o sospechosos en territorio mexicano al cierre del 27-may</b>, tanto de ébola Bundibugyo como de hantavirus Andes.',
      contexto: 'Edomex y otras entidades federativas blindan dispositivo sanitario en aeropuertos, sedes mundialistas y puntos de concentración masiva. Mensaje institucional: vigilancia preventiva, sin caso confirmado. La activación cruza por primera vez el corredor del Mundial 2026 con el brote Bundibugyo en clave operativa nacional. Cobertura trusted: El Imparcial, La Jornada, Excélsior, DigitalMex, Récord, Infobae, Capital México (20 y 26 may).',
      url: 'https://www.elimparcial.com/mexico/2026/05/26/imss-alista-respuesta-sanitaria-para-el-mundial-2026-y-activa-vigilancia-por-ebola-ante-la-llegada-de-visitantes-internacionales-a-mexico/'
    },
    {
      fecha: '2026-05-26',
      fechaLegible: '26 may 2026',
      fuente: 'MINSA RDC',
      tagClass: 'fuente-oficial',
      vocero: 'Ministerio de Salud Pública de la República Democrática del Congo · Boletín epidemiológico',
      cita: 'Cuadro al 26 de mayo: <b>121 casos confirmados en RDC</b> con <b>17 muertes confirmadas</b>; <b>1,077 casos sospechosos</b> con <b>238 muertes sospechosas</b>; transmisión activa en Ituri, Nord-Kivu y Sud-Kivu. Cuatro trabajadores sanitarios fallecidos. Uganda eleva su cifra a <b>7 casos confirmados con 1 muerte</b> — tres con vínculo de viaje directo a RDC. El brote rompió el corredor original Ituri-Uganda y ahora afecta tres provincias congoleñas con red sanitaria precaria.',
      contexto: 'Reporte consolidado vía Africa CDC + JHU Hub + ECDC. <b>Ritmo de duplicación de confirmados cada ~5 días sostenido desde el PHEIC del 17-may.</b> Audit trail: esta cifra reemplaza la del 22-may (64 confirmados + 160+ muertes vía Comité de Emergencia OMS) y la del CDC del 24-may (101 confirmados). La trayectoria DON602 (PHEIC) → DON603 (21-may rev. 25-may) → MINSA bulletin (26-may) muestra escalada vertical en nueve días.',
      url: 'https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON603'
    },
    {
      fecha: '2026-05-25',
      fechaLegible: '25 may 2026',
      fuente: 'OMS · UN News',
      tagClass: 'fuente-oms',
      vocero: 'Dr. Tedros Adhanom Ghebreyesus — Virtual Ministerial Briefing + UN News',
      cita: 'Tedros encabeza un Virtual Ministerial Briefing específico sobre el brote Bundibugyo con ministros de salud de la región y socios multilaterales. UN News titula ese mismo periodo: <em>"Ebola epidemic spreading rapidly and outpacing containment efforts"</em> — <b>primera vez que la cobertura ONU oficial reconoce explícitamente que la respuesta va atrás del brote</b>.',
      contexto: 'Segunda comparecencia formal del Director General en una semana sobre el brote (la primera fue la sesión de Estados Miembros del 22-may). Implicación operativa: el ritmo de duplicación de confirmados ya supera la capacidad de contact tracing en Ituri, Nord-Kivu y Sud-Kivu — tres provincias activas con red sanitaria precaria. Cobertura primaria: WHO DG remarks 25-may + UN News story.',
      url: 'https://news.un.org/en/story/2026/05/1167584'
    },
    {
      fecha: '2026-05-22',
      fechaLegible: '22 may 2026',
      fuente: 'OMS',
      tagClass: 'fuente-oms',
      vocero: 'Comité de Emergencia del Reglamento Sanitario Internacional',
      cita: 'El Comité de Emergencia, reunido en sesión extraordinaria, ratifica la calificación de Emergencia de Salud Pública de Importancia Internacional para el brote de ébola Bundibugyo en la República Democrática del Congo y Uganda. Cifras consolidadas: <b>650 casos sospechosos, 64 confirmados, más de 160 muertes</b>. Se emiten recomendaciones temporales bajo el RSI 2005: vigilancia transfronteriza reforzada, despliegue del stockpile global de Ervebo (Merck) y aceleración del ensayo de J&J Bundibugyo a través de la plataforma CEPI.',
      contexto: 'Ratificación formal de la PHEIC declarada el 17 de mayo. Es la reunión que activa, de manera operativa, el andamio financiero internacional para respuesta a brotes: stockpile farmacéutico + ensayos clínicos de emergencia + protocolos transfronterizos. Mismo manual aplicado al COVID-19, ahora compactado en trece días.',
      url: 'https://www.who.int/news/item/22-05-2026-statement-on-the-meeting-of-the-international-health-regulations-emergency-committee'
    },
    {
      fecha: '2026-05-21',
      fechaLegible: '21 may 2026',
      fuente: 'Al Jazeera',
      tagClass: 'fuente-medio',
      vocero: 'Gobierno de India — Ministerio de Relaciones Exteriores',
      cita: 'Por consideraciones sanitarias derivadas del brote de Ébola en África Central, India anuncia el aplazamiento de la Cumbre India-África prevista para finales de mayo en Nueva Delhi. La decisión se adopta tras consulta con la OMS y con las cancillerías africanas participantes. Se reagendará oportunamente.',
      contexto: 'Primer evento internacional de alto perfil cancelado por el brote. Señal temprana de que la PHEIC ya está produciendo efectos económico-diplomáticos más allá del cerco sanitario. Patrón conocido del COVID-19: la cancelación de eventos masivos suele anteceder en semanas a las restricciones generales de movilidad.',
      url: 'https://www.aljazeera.com/news/2026/5/21/india-postpones-africa-summit-ebola-outbreak'
    },
    {
      fecha: '2026-05-20',
      fechaLegible: '20 may 2026',
      fuente: 'Ministerio de Salud — Uganda',
      tagClass: 'fuente-oficial',
      vocero: 'Dra. Jane Ruth Aceng Ocero, Ministra de Salud de Uganda',
      cita: 'Confirmamos dos casos importados de ébola Bundibugyo en el distrito de Mbarara, ambos con historial de viaje reciente desde la Provincia de Ituri en la República Democrática del Congo. Se activan los protocolos nacionales de respuesta y vigilancia transfronteriza. Uganda cuenta con experiencia operativa en brotes previos de Bundibugyo (2007 y 2012) y mantiene un sistema robusto de rastreo de contactos.',
      contexto: 'Uganda fue históricamente la cuna del subtipo Bundibugyo — identificado por primera vez en el distrito que le da nombre en 2007. La activación temprana del Ministerio ugandés contrasta con la fragilidad institucional del lado congoleño, marcada por la insurgencia M23 y el desplazamiento humanitario.',
      url: 'https://www.health.go.ug/2026/05/20/uganda-confirms-imported-ebola-cases/'
    },
    {
      fecha: '2026-05-19',
      fechaLegible: '19 may 2026',
      fuente: 'ECDC',
      tagClass: 'fuente-medio',
      vocero: 'Centro Europeo para la Prevención y el Control de Enfermedades',
      cita: 'Actualización epidemiológica del brote de ébola Bundibugyo en África Central. Cifras al cierre del 19 de mayo: aproximadamente 500 casos sospechosos, 30 confirmados por PCR, alrededor de 130 muertes acumuladas. <b>Letalidad cruda preliminar entre 25 % y 30 %</b>, dentro del rango histórico del subtipo. Riesgo para la Unión Europea y el Espacio Económico Europeo evaluado como bajo, condicionado a la rapidez del cerco epidemiológico en RDC.',
      contexto: 'La letalidad de Bundibugyo (~25-40 % histórica) es significativamente menor a la de Zaire ebolavirus (~50-80 %), pero aun así muy superior al Andes hantavirus (~30-45 %). El ECDC modula su evaluación de riesgo en función de la capacidad operativa del cerco sanitario en zonas con conflicto activo.',
      url: 'https://www.ecdc.europa.eu/en/news-events/communicable-disease-threats-report-week-21-2026'
    },
    {
      fecha: '2026-05-17',
      fechaLegible: '17 may 2026',
      fuente: 'OMS',
      tagClass: 'fuente-oms',
      vocero: 'Dr. Tedros Adhanom Ghebreyesus, Director General de la OMS',
      cita: 'Tras consulta con el Comité de Emergencia del Reglamento Sanitario Internacional, declaro <b>Emergencia de Salud Pública de Importancia Internacional</b> por el brote de ébola Bundibugyo en la República Democrática del Congo y Uganda. La velocidad de respuesta —trece días entre la alerta inicial y la presente declaración— refleja la madurez del sistema multilateral heredado del COVID-19. Se activan protocolos automáticos en los 196 Estados firmantes del RSI.',
      contexto: 'Activación más rápida de una PHEIC en la historia del Reglamento Sanitario Internacional 2005. Para comparar: el brote de ébola en Kivu (2018-2019) tardó once meses en alcanzar la misma figura legal. La compactación del ciclo no responde a una mutación viral inédita — Bundibugyo es un subtipo conocido desde 2007 — sino a la activación de un andamio institucional preexistente.',
      url: 'https://www.who.int/news/item/17-05-2026-who-director-general-declares-the-bundibugyo-ebola-outbreak-a-pheic'
    },
    {
      fecha: '2026-05-15',
      fechaLegible: '15 may 2026',
      fuente: 'MINSA RDC',
      tagClass: 'fuente-oficial',
      vocero: 'Ministerio de Salud Pública de la República Democrática del Congo',
      cita: 'El Instituto Nacional de Investigación Biomédica (INRB) confirma la presencia del virus del Ébola, subtipo Bundibugyo, en muestras de pacientes de la Provincia de Ituri. Se activa el sistema nacional de respuesta a brotes y se notifica formalmente a la Organización Mundial de la Salud bajo el Reglamento Sanitario Internacional.',
      contexto: 'Primera confirmación oficial del brote. La Provincia de Ituri se encuentra en el noreste de la RDC, en una zona afectada por la insurgencia M23 y con una red sanitaria precaria. Es el primer brote confirmado de Bundibugyo desde 2012. El subtipo fue identificado originalmente en Uganda en 2007.',
      url: 'https://www.minisanterdc.cd/communique-15-mai-2026-ebola-ituri'
    }
  ];

const countries = [
    { name:'Países Bajos', flag:'🇳🇱', coords:[51.81,5.84], hosp:'Rotterdam (cuarentena MV Hondius) + Radboudumc Nijmegen + Erasmus MC',
      conf:3, prob:0, obs:23, deaths:2,
      note:'Matrimonio holandés: marido falleció a bordo (11-abr); esposa evacuada y falleció en Johannesburgo (26-abr). El 12-may Radboudumc (Nijmegen) puso en cuarentena preventiva de 6 semanas a 12 trabajadores sanitarios por fallo de protocolo. El barco atracó en Rotterdam el 18-may con 25 personas asintomáticas a bordo. <b>El 22-may RIVM + Erasmus MC confirmaron el primer caso entre la tripulación</b> repatriada (testeo semanal de cuarentena). RIVM al 26-may: <b>13 casos totales del cluster (11 confirmados + 2 probables), 3 muertes</b>; sin nuevos fallecimientos. Desinfección del buque en curso.', v:'✅' },
    { name:'México', flag:'🇲🇽', coords:[19.43,-99.13], hosp:'Vigilancia nacional activada — Secretaría de Salud',
      conf:0, prob:0, obs:0, deaths:0,
      note:'PRIMERA Alerta Epidemiológica Nacional por hantavirus (11-may-2026). Cero casos en territorio nacional. Vigilancia activada en hospitales, laboratorios y unidades médicas de los tres niveles de atención. El Aviso cita explícitamente la movilidad asociada al Mundial 2026 como factor de riesgo adicional. Secretario de Salud: Dr. David Kershenobich.', v:'✅' },
    { name:'Alemania', flag:'🇩🇪', coords:[52.52,13.40], hosp:'Repatriación a Alemania',
      conf:1, prob:0, obs:0, deaths:1,
      note:'Mujer alemana falleció a bordo el 2-may; el brote se notificó a la OMS ese día.', v:'✅' },
    { name:'Sudáfrica', flag:'🇿🇦', coords:[-26.20,28.04], hosp:'Charlotte Maxeke Hospital, Johannesburgo',
      conf:0, prob:0, obs:0, deaths:0,
      note:'Sin casos sudafricanos. Recibió por evacuación aérea a la holandesa fallecida.', v:'✅' },
    { name:'Suiza', flag:'🇨🇭', coords:[47.37,8.54], hosp:'Hospital Universitario de Zúrich',
      conf:1, prob:0, obs:0, deaths:0,
      note:'1 paciente confirmado positivo el 6-may; tratamiento en curso.', v:'✅' },
    { name:'España', flag:'🇪🇸', coords:[40.41,-3.74], hosp:'Hospital Central de Defensa Gómez Ulla, Madrid',
      conf:2, prob:0, obs:14, deaths:0,
      note:'14 españoles en cuarentena 42 días. <b>2 confirmados</b> al 27-may según WHO DON604 (uno con síntomas leves estable desde 12-may; segundo confirmado integrado en el período 13-27 may, ubicación específica no detallada). Una mujer de 32 años en Alicante con 3 PCR negativas sigue hospitalizada por protocolo. <b>Audit trail:</b> cifra subida de 1 a 2 tras DON604.', v:'✅' },
    { name:'Francia', flag:'🇫🇷', coords:[48.86,2.35], hosp:'Hospital París (no divulgado) — ECMO',
      conf:1, prob:0, obs:0, deaths:0,
      note:'Mujer de 65 años en estado crítico. Al 13-may en "fase terminal del cuidado de soporte" — conectada a pulmón artificial (ECMO) para oxigenación. Pronóstico vital comprometido. Caso más grave fuera de los fallecidos a bordo.', v:'⚠️' },
    { name:'Italia', flag:'🇮🇹', coords:[41.90,12.50], hosp:'ISS Roma (análisis)',
      conf:0, prob:1, obs:0, deaths:0,
      note:'Italiano joven de Calabria asintomático; muestras en análisis en el ISS.', v:'⚠️' },
    { name:'Estados Unidos', flag:'🇺🇸', coords:[41.12,-95.92], hosp:'Nebraska Biocontainment Unit, Omaha',
      conf:1, prob:0, obs:16, deaths:0,
      note:'17 estadounidenses repatriados a Offutt AFB y trasladados a unidad de biocontención. 1 positivo, 1 con síntomas leves.', v:'✅' },
    { name:'Tristán da Cunha', flag:'🇸🇭', coords:[-37.10,-12.28], hosp:'Atención local',
      conf:0, prob:1, obs:0, deaths:0,
      note:'1 caso probable que se quedó en la isla. Estable.', v:'✅' },
    { name:'Reino Unido', flag:'🇬🇧', coords:[51.51,-0.13], hosp:'Monitoreo',
      conf:0, prob:0, obs:0, deaths:0,
      note:'Pasajeros desembarcados en monitoreo. Sin casos confirmados al cierre.', v:'⚠️' },
    { name:'Argentina', flag:'🇦🇷', coords:[-54.81,-68.30], hosp:'Punto de origen (Ushuaia)',
      conf:0, prob:0, obs:0, deaths:0,
      note:'Puerto de embarque. Exposición probable a Oligoryzomys longicaudatus, reservorio del ANDV en Patagonia.', v:'✅' },
    { name:'Canadá', flag:'🇨🇦', coords:[45.50,-73.57], hosp:'Monitoreo sanitario federal',
      conf:1, prob:0, obs:0, deaths:0,
      note:'<b>Primer caso confirmado en Canadá</b> integrado al cuadro epidemiológico oficial por WHO DON604 (27-may). Corresponde a pasajero del MV Hondius desembarcado en Tenerife y repatriado bajo monitoreo. Canadá se suma como decimocuarto país con caso confirmado del cluster. <i>Comunicado primario de la Public Health Agency of Canada no localizado al cierre — la confirmación aparece en el cuadro consolidado OMS.</i>', v:'⚠️' }
  ];

const countriesEbola = [
    { flag:'🇨🇩', name:'República Democrática del Congo', hosp:'Ituri (epicentro) · Nord-Kivu · Sud-Kivu', conf:4381, prob:192, deaths:'2,011 muertes · CFR ~46%', coords:[1.5, 30.1],
      note:'Brote epicentro en Provincia de Ituri (noreste): Mongbwalu (caso índice 5-may), Bunia (confirmación laboratorio 14-may), Rwampara. Expansión confirmada el 20-may a Sud-Kivu vía caso con viaje desde Tshopo. <b>Corte oficial OMS DON614 (30-jul): 3,626 casos + 1,589 muertes, CFR 44%. Cifra más fresca (ECDC y boletín RDC, 6-9 ago): ~4,381 casos y 2,011 muertes, CFR ~46%; Ituri de epicentro con 3,636 casos + 1,551 muertes; 53 de 140 zonas de salud en 5 provincias; más del 70% de los casos nuevos surgen de la comunidad. Uganda: brote declarado terminado el 28-jul (final 20/2).</b> El 22-jun el brote cruzó los 1,000 casos: es ya el <b>tercer brote de ébola más grande de la historia.</b> Geografía (desglose al 24-25 jun): <b>Ituri 1,054 (22 zonas de salud), Nord-Kivu 98 (11 zonas), Sud-Kivu 3 (1 zona).</b> Un caso importado confirmado en Francia (24-jun) y otro en un estadounidense evacuado a Alemania (19-may). <b>Letalidad confirmada cruda: 2,011/4,381 ≈ 46% (ECDC 9-ago); 1,589/3,626 = 44% (OMS DON614 30-jul)</b>, que supera el rango histórico Bundibugyo (25-40%) y está muy <b>por encima del hantavirus (23%).</b> <b>Señal de erosión del control:</b> OMS reporta ataque a un equipo de entierros seguros en Mongbwalu y cinco trabajadores tomados como rehenes en puntos de control, acusados falsamente de propagar el ébola (patrón de resistencia comunitaria visto en Kivu 2018-2020). <b>Audit trail:</b> el DON608 consolida y revisa las muertes con fuerza al alza: del corte del 15-jun (837 conf + 196 muertes, CFR 23.4%) salta al 17-jun a 896 + 232 (DON608), al 24-25 jun a 1,155 + 304, al 1-jul a 1,460 + 452 (DON612), al 15-jul a 2,145 + 830 (DON613), al 21-jul a 2,473 + 1,031, al 30-jul a 3,626 + 1,589 (OMS DON614) y al 9-ago a ~4,381 + 2,011 (ECDC): la letalidad va de 26% a ~46% y supera el techo histórico de Bundibugyo. Antes había superado el corte del 14-jun (782/181) y el DON606 del 11-jun (635/127). Versión inicial al 26-may: 121/17. La curva NO se aplana, se acelera.', v:'✅' },
    { flag:'🇺🇬', name:'Uganda', hosp:'Kampala + Ntoroko + Mbarara y áreas fronterizas con RDC', conf:20, prob:0, deaths:'2 conf · 18 recuperados', coords:[0.3, 32.6],
      note:'<b>19 casos confirmados con 2 muertes confirmadas, estable desde el 5-jun</b> (DON607, datos al 10-jun). Transmisión epidemiológicamente vinculada a la RDC: casos importados más transmisión secundaria entre contactos y trabajadores sanitarios. Clusters de exposición transfronteriza en distrito ugandés de Ntoroko (frontera con Ituri). <b>DON607 reporta al menos 37 personas recuperadas en la región del brote.</b> Ministerio de Salud (Dra. Jane Ruth Aceng Ocero) mantiene vigilancia transfronteriza. Uganda tiene experiencia operativa de brotes previos de Bundibugyo (2007 fue origen del subtipo, 2012 confirma protocolo). <b>Audit trail:</b> cifra ugandesa estable en 19/2 desde el 5-jun; el brote crece del lado congoleño, no del ugandés (la red sanitaria ugandesa contiene mejor).', v:'✅' },
    { flag:'🇺🇸', name:'Estados Unidos · Antecedente regulatorio anti-ébola', hosp:'Title 42 Order + 4 aeropuertos designados (IAD · ATL · IAH · JFK)', conf:0, prob:0, deaths:0, coords:[38.92, -77.05],
      note:'<b>Cero casos confirmados o sospechosos en territorio estadounidense al cierre del 3-jun.</b> CDC + DHS activan Title 42 el 18-may (extendido el 22-may a residentes permanentes). Cuatro aeropuertos designados para arribos de RDC/Uganda/Sudán Sur en 21 días previos: IAD Washington-Dulles, ATL Atlanta, IAH Houston Bush, JFK Nueva York. Houston (IAH) es base de la selección mundialista de RDC. CDC busca voluntarios para staffing del screening reforzado (FOX 5 Atlanta). State Department publica Ebola Response Updates (23-may, 29-may) + Worldwide Caution Health Alert (28-may). <b>Lectura editorial:</b> el dispositivo está calibrado contra ébola Bundibugyo — cepa de contacto, no de aerosol —. <b>El vector que el Mundial sí amplifica (hantavirus Andes, h-h en recintos cerrados) no aparece en el régimen Title 42.</b> Primer Title 42 desde COVID.', v:'✅' },
    { flag:'🇨🇦', name:'Canadá · Border Order PHAC', hosp:'90 días suspensión + 21 días cuarentena (vigencia 27-may)', conf:0, prob:0, deaths:0, coords:[45.42, -75.69],
      note:'<b>Cero casos confirmados al cierre.</b> Public Health Agency of Canada impone prohibición de entrada por 90 días a residentes de RDC, Uganda y Sudán del Sur desde el 27-may. Canadienses + residentes permanentes + extranjeros con viaje reciente y asintomáticos: cuarentena de 21 días desde el sábado 30-may. <b>Detalle político (CBC News):</b> la medida no se basó en consejo de oficiales de salud pública sino en consideraciones del Mundial 2026 — Toronto y Vancouver son sedes canadienses. Health Minister Mark Holland "doubles down" sobre la prohibición bajo críticas. <b>Lectura editorial:</b> el régimen filtra orígenes africanos por ébola pero deja sin filtro los flujos de aficionados sudamericanos (Argentina, Chile) — donde el reservorio Andes endémico circula con letalidad histórica 30-45% en 2026.', v:'✅' },
    { flag:'🇲🇽', name:'México · Operativo bioseguridad Mundial 2026', hosp:'Aviso UIES-APV-ÉBOLA-03 + CENIAQ + 3 alertas simultáneas + filtros aeroportuarios activos', conf:0, prob:0, deaths:0, coords:[19.43, -99.13],
      note:'<b>Cero casos confirmados o sospechosos al cierre del 7-jun.</b> Secuencia federal: 18-may aviso preventivo viaje UIES-APV-ÉBOLA-03-2026 (RDC, Uganda, Sudán Sur); 19-may tres alertas epidemiológicas simultáneas (golpe de calor, hantavirus, ébola), primera vez en la historia del país; 26-may IMSS vigilancia Mundial 2026 con 10 capacitaciones y 1,301 sanitarios; 31-may CENIAQ designado centro nacional para casos sospechosos. <b>6-jun operativo formal de bioseguridad ACTIVO ante el inicio del Mundial el 11-jun</b>: filtros sanitarios en AICM + AIFA + Guadalajara + Monterrey + Cancún; brigadas en las 16 alcaldías de la CDMX con carpas de diagnóstico (sarampión, ébola, hantavirus). Estimación oficial: 5.5 millones de turistas internacionales. El Financiero (7-jun) titula "México niega la entrada al ébola". <b>Lectura editorial actualizada:</b> el operativo del 6-jun corrige parcialmente la asimetría que la pieza <em>La precaución hacia el virus equivocado</em> (4-jun) señaló: las carpas de diagnóstico sí incluyen hantavirus en su lista de cribado. Pregunta editorial vigente: si el filtro distinguirá entre cepas en el momento del caso clínico. Sedes mundialistas: CDMX, Monterrey, Guadalajara (RDC vs Colombia 23-jun).', v:'✅' }
  ];

const sources = [
    { group:'Organismos oficiales (sanitarios)', tag:'tag-oficial', items:[
      { t:'OMS — DON599 (informe inicial del brote)', url:'https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON599' },
      { t:'OMS — DON600 (actualización al 8 de mayo)', url:'https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON600' },
      { t:'OMS — Respuesta de Tedros (7 de mayo)', url:'https://www.who.int/news/item/07-05-2026-who-s-response-to-hantavirus-cases-linked-to-a-cruise-ship' },
      { t:'OMS (versión en español) — Respuesta al brote', url:'https://www.who.int/es/news/item/07-05-2026-who-s-response-to-hantavirus-cases-linked-to-a-cruise-ship' },
      { t:'ECDC — Andes hantavirus outbreak (update 13-may)', url:'https://www.ecdc.europa.eu/en/infectious-disease-topics/hantavirus-infection/surveillance-and-updates/andes-hantavirus-outbreak' },
      { t:'CDC — Andes virus outbreak situation summary', url:'https://www.cdc.gov/hantavirus/situation-summary/index.html' },
      { t:'CDC — HAN 00528 (alerta sanitaria multipaís)', url:'https://www.cdc.gov/han/php/notices/han00528.html' },
      { t:'CDC Newsroom — Update on M/V Hondius outbreak', url:'https://www.cdc.gov/media/releases/2026/2026-cdc-provides-update-on-hantavirus-outbreak-linked-to-m-v-hondius-cruise-ship.html' },
      { t:'Noticias ONU — "No es otro COVID"', url:'https://news.un.org/es/story/2026/05/1541422' }
    ]},
    { group:'Medios internacionales (inglés)', tag:'tag-medio', items:[
      { t:'Wikipedia — MV Hondius hantavirus outbreak (cronología consolidada)', url:'https://en.wikipedia.org/wiki/MV_Hondius_hantavirus_outbreak' },
      { t:'CNN — Visualización en mapas y gráficos del brote', url:'https://www.cnn.com/us/maps-hantavirus-cruise-outbreak-vis' },
      { t:'CNN — De EEUU a Singapur, países se suman al rastreo', url:'https://www.cnn.com/2026/05/07/world/hantavirus-ship-tenerife-outbreak-intl' },
      { t:'NPR — Pasajeros llegan a EEUU tras positivo', url:'https://www.npr.org/2026/05/10/nx-s1-5817578/hantavirus-cruise-ship-nebraska-us-passengers' },
      { t:'Washington Post — American tests positive', url:'https://www.washingtonpost.com/health/2026/05/09/hantavirus-us-cruise-cdc/' },
      { t:'CBS News — Crucero llega a Canarias', url:'https://www.cbsnews.com/news/cruise-ship-stricken-by-hantavirus-reaches-canary-islands/' },
      { t:'Today — Pandemic risk explained', url:'https://www.today.com/health/news/hantavirus-pandemic-risk-2026-cruise-ship-outbreak-covid-rcna344538' },
      { t:'Today — Map of US states with cruise passengers', url:'https://www.today.com/health/disease/us-hantavirus-cruise-ship-outbreak-passengers-map-states-rcna344213' },
      { t:'ABC News — Live updates Canary Islands', url:'https://abcnews.com/International/live-updates/hantavirus-live-updates-mv-hondius-canary-islands/?id=132746955' },
      { t:'KFF Quick Take — Test case for US public health', url:'https://www.kff.org/quick-take/the-hantavirus-outbreak-is-a-test-case-for-the-u-s-public-health-response/' },
      { t:'BMJ — Should reset WHO airborne approach', url:'https://www.bmj.com/content/393/bmj.s919' },
      { t:'Fox News — Concern over human-to-human spread', url:'https://www.foxnews.com/health/andes-virus-linked-cruise-ship-deaths-raises-concern-over-human-to-human-spread' },
      { t:'Korea Times — Hantavirus, discovered in Korea 1950s', url:'https://www.koreatimes.co.kr/southkorea/health/20260513/hantavirus-first-discovered-in-korea-in-1950s-what-to-know' },
      { t:'Euronews — Qué es el hantavirus y cómo se transmite', url:'https://www.euronews.com/health/2026/05/12/what-is-hantavirus-and-how-is-it-transmitted-questions-and-answers-about-the-outbreak' }
    ]},
    { group:'Medios en español', tag:'tag-es', items:[
      { t:'Infobae España — Última hora del brote 12-may', url:'https://www.infobae.com/espana/2026/05/12/hantavirus-ultima-hora-del-brote-en-el-crucero-mv-hondius-en-directo-continua-la-cuarentena-de-los-espanoles-con-un-positivo-provisional-en-la-uatan/' },
      { t:'Infobae Argentina — Datos oficiales y crucero', url:'https://www.infobae.com/salud/2026/05/12/hantavirus-en-argentina-los-ultimos-datos-oficiales-y-como-avanza-la-investigacion-del-brote-en-el-crucero/' },
      { t:'Tribuna (México) — OMS confirma 10 casos', url:'https://tribuna.com.mx/mundo/2026/05/12/hantavirus-en-crucero-mv-hondius-oms-confirma-10-casos-positivos-y-asegura-que-el-riesgo-es-bajo_532248/' },
      { t:'CNN Español — 5 países en el rastreo', url:'https://cnnespanol.cnn.com/2026/05/07/mundo/hantavirus-5-paises-brote-trax' },
      { t:'CNN Español — Live news 11-may', url:'https://cnnespanol.cnn.com/2026/05/11/mundo/live-news/ultima-hora-crucero-hantavirus-contagios-trax' },
      { t:'CNN Español — Evacúan a tres personas', url:'https://cnnespanol.cnn.com/2026/05/05/mundo/crucero-hantavirus-oms-sospecha-transmision-personas-trax' },
      { t:'El Imparcial — Vigilancia podría extenderse 42 días', url:'https://www.elimparcial.com/mundo/2026/05/11/oms-advierte-que-podrian-aparecer-mas-casos-de-hantavirus-tras-brote-en-crucero-vigilancia-podria-extenderse-hasta-42-dias/' },
      { t:'Wikipedia (español) — Brote de hantavirus en el MV Hondius', url:'https://es.wikipedia.org/wiki/Brote_de_hantavirus_en_el_MV_Hondius' }
    ]},
    { group:'Brote de Ébola Bundibugyo 2026 (RDC + Uganda)', tag:'tag-oficial', items:[
      { t:'OMS — DON602 (informe oficial del brote Bundibugyo)', url:'https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON602' },
      { t:'OMS — Declaración PHEIC, Dr. Tedros (17 de mayo)', url:'https://www.who.int/news/item/17-05-2026-who-director-general-declares-the-bundibugyo-ebola-outbreak-a-pheic' },
      { t:'OMS — Statement of the IHR Emergency Committee (22 de mayo)', url:'https://www.who.int/news/item/22-05-2026-statement-on-the-meeting-of-the-international-health-regulations-emergency-committee' },
      { t:'ECDC — Communicable Disease Threats Report, week 21 (19 de mayo)', url:'https://www.ecdc.europa.eu/en/news-events/communicable-disease-threats-report-week-21-2026' },
      { t:'CDC — Health Alert Network HAN 00530 (guía clínica Bundibugyo)', url:'https://www.cdc.gov/han/php/notices/han00530.html' },
      { t:'MINSA RDC — Comunicado del 15 de mayo (confirmación INRB)', url:'https://www.minisanterdc.cd/communique-15-mai-2026-ebola-ituri' },
      { t:'Ministerio de Salud Uganda — Casos importados desde RDC (20 de mayo)', url:'https://www.health.go.ug/2026/05/20/uganda-confirms-imported-ebola-cases/' },
      { t:'Al Jazeera — India aplaza Cumbre India-África (21 de mayo)', url:'https://www.aljazeera.com/news/2026/5/21/india-postpones-africa-summit-ebola-outbreak' },
      { t:'CEPI — Press release post-PHEIC sobre 100 Day Mission Bundibugyo', url:'https://cepi.net/news_cepi/cepi-response-bundibugyo-ebola-pheic-2026/' },
      { t:'ReliefWeb — Boletín humanitario Nord-Kivu / Ituri (semana 20)', url:'https://reliefweb.int/disaster/ep-2026-000074-cod' }
    ]},
    { group:'Trackers y dashboards', tag:'tag-tracker', items:[
      { t:'ArcGIS Dashboard — ANDV Hantavirus 2026 (institucional, basado en ESRI)', url:'https://www.arcgis.com/apps/dashboards/5c68442d2afc42d7ba2696e4cd393729' },
      { t:'GenomicEpi — Hantavirus Cruise Outbreak Tracker (perfil académico)', url:'https://genomicepi.com/outbreaks/hantavirus-hondius/' },
      { t:'Hantavirus Outbreak Tracker (timeline en vivo)', url:'https://hantavirustracker.io/' },
      { t:'HantavirusMap.net — Cases & deaths', url:'https://hantavirusmap.net/' },
      { t:'HantaView — Global tracking', url:'https://www.hantaview.com/map' },
      { t:'hantavirus.live — posición en vivo del barco (AIS) + feed de noticias', url:'https://hantavirus.live/' },
      { t:'hantavirus.one — mapa interactivo paralelo + feed', url:'https://hantavirus.one/' },
      { t:'hantavirustracker2026.com — sitio dedicado al brote', url:'https://hantavirustracker2026.com/' },
      { t:'hantavirus.up.railway.app — operado por una sola persona (declarado)', url:'https://hantavirus.up.railway.app/' },
      { t:'Hantaflow — dashboard de outbreak en vivo', url:'https://hantaflow.com/' },
      { t:'Hantavirus-Now — Live Tracker', url:'https://www.hantavirus-now.com/' },
      { t:'HantavirusMap.com — Live Global Outbreak Tracker', url:'https://hantavirusmap.com/' },
      { t:'Hantavirus Live Tracker — Official Updates 2026', url:'https://hantaviruslivetracker.org/' }
    ]}
  ];

const vacunas = [
    { coords: [42.36, -71.08], inst: 'Moderna',
      desc: 'Cambridge, Massachusetts. Programa <em>mRNA Access</em> en colaboración con Korea University Vaccine Innovation Center. Estado: preclínico.',
      fuente: 'Korea Biomedical Review · The Microbiologist · EurekAlert' },
    { coords: [37.59, 127.03], inst: 'Korea University · Vaccine Innovation Center',
      desc: 'Seúl, Corea del Sur. Socio académico de Moderna. Equipo del Prof. Park Man-sung confirmó protección en ratones en febrero de 2025.',
      fuente: 'Korea Biomedical Review (KBR), feb-2025' },
    { coords: [39.42, -77.42], inst: 'USAMRIID',
      desc: 'Frederick, Maryland. Hooper et al. 2023 — vacuna ANDV-Gn/Gc mRNA con respuesta de anticuerpos neutralizantes en primates no humanos. Preclínico.',
      fuente: 'Hooper et al. (publicación científica, 2023)' },
    { coords: [29.30, -94.80], inst: 'UTMB · Bukreyev Lab',
      desc: 'Galveston, Texas. Vacuna mRNA pan-hantavirus desarrollada por Alexander Bukreyev. En pausa por recortes de financiamiento NIH (2024).',
      fuente: 'University of Texas Medical Branch · cobertura editorial' },
    { coords: [51.38, -2.36], inst: 'University of Bath',
      desc: 'Bath, Inglaterra. Vacuna termoestable contra <em>Hantaan virus</em> (cepa distinta del Andes). Contrato con gobierno británico.',
      fuente: 'University of Bath · fuente primaria pendiente' },
    { coords: [59.91, 10.75], offset: [61.0, 12.5], inst: 'CEPI · Coalition for Epidemic Preparedness Innovations',
      desc: 'Oslo, Noruega. Programa <strong>"100 Day Mission"</strong> (vacuna lista en cien días). CEO Richard Hatchett pidió $2,500M USD el 17-may-2026 usando el brote del Hondius como argumento.',
      fuente: 'Primaria: CEPI (declaración Richard Hatchett, 17-may-2026) · Cobertura: The Hill Times' }
  ];

const financiadores = [
    { coords: [59.91, 10.75], inst: 'CEPI',
      desc: 'Oslo. Coalition for Epidemic Preparedness Innovations. Pidió $2,500M USD el 17-may-2026 para el programa "100 Day Mission".',
      fuente: 'CEPI · The Hill Times' },
    { coords: [38.99, -77.10], offset: [40.4, -76.0], inst: 'NIH',
      desc: 'Bethesda, Maryland. National Institutes of Health. Mayor agencia federal de financiamiento biomédico de EE.UU. Recortes a programas de vacunas pan-hantavirus en 2024.',
      fuente: 'NIH · cobertura prensa' },
    { coords: [38.95, -77.10], offset: [39.6, -80.2], inst: 'BARDA',
      desc: 'Washington DC. Biomedical Advanced Research and Development Authority (HHS/ASPR). Contratista federal en preparación pandémica.',
      fuente: 'HHS · ASPR' },
    { coords: [38.89, -77.04], offset: [36.8, -75.5], inst: 'Banco Mundial · Pandemic Fund',
      desc: 'Washington DC. Mecanismo financiero multilateral lanzado en septiembre de 2022 para preparación y respuesta pandémica.',
      fuente: 'Banco Mundial' },
    { coords: [47.62, -122.34], inst: 'Bill & Melinda Gates Foundation',
      desc: 'Seattle, Washington. Donante histórico de CEPI desde su fundación en Davos 2017.',
      fuente: 'CEPI · Annual Report' }
  ];

const endemicos = [
    { coords: [-34.6, -58.4], fecha: 'Temporada 2025-26 (en curso)', titulo: 'Argentina · virus Andes',
      desc: '<b>Cepa principal:</b> virus Andes (ANDV) — <b>única con transmisión persona-persona documentada</b>. Vigilancia desde 1995. <b>Temporada 2025-2026 (récord, BEN 812 al 16-jun):</b> 108 casos confirmados y 36 muertes (letalidad 33.3%, la más alta desde 2018); la curva estuvo por encima del umbral de brote casi toda la temporada. <b>Buenos Aires: 44 casos y 18 muertes (la mitad de las muertes nacionales)</b>; Salta 32 casos y 12 muertes (mayor incidencia por millón). Pico nov-2025 a ene-2026; foco fatal: una niña de 10 años murió en General Belgrano (BA) el 8-ene. <b>Histórico:</b> la temporada 2023-2024 tuvo 75 casos con letalidad 19%; la 2024-2025 con 57 casos y letalidad 26%. <b>Rompe techo de 6 años</b> y duplica el promedio reciente de letalidad. Distribución atípica: el peso se desplazó de Patagonia (foco histórico) a Buenos Aires y noroeste.',
      fuente: 'BEN Argentina 812 (SE 22, 16-jun) · argentina.gob.ar · consultorsalud · Infobae' },
    { coords: [-33.45, -70.66], fecha: '2026 al 29 jul', titulo: 'Chile · virus Andes',
      desc: '<b>Cepa:</b> virus Andes (ANDV). Vigilancia desde 1995. <b>2026 al 29 de julio:</b> 46 casos confirmados, <b>18 muertes, letalidad ~39%</b>. <b>🔴 Chile declaró su primera ALERTA SANITARIA nacional por hantavirus el 29-jul-2026</b> (vigente hasta 31-jul-2027, de Atacama a Magallanes, contagios en 9 de 16 regiones; temporada aún abierta). <b>Agosto:</b> cluster familiar en Aysén (abuela y nieta, El Guadal; a la espera de confirmación del ISP, hipótesis de co-exposición ambiental) y una muerte pediátrica reportada en Rengo el 8-ago aún no sumada al conteo oficial, que sigue en 46/18 del 28-jul y sin boletín de agosto. La primera semana de la alerta exhibió la brecha de capacidad: Coyhaique sin ECMO y traslado aeromédico de 1,500 km a Concepción. La subsecretaria Pizarro admite que el virus "dejó de concentrarse en verano y en sectores rurales": la estacionalidad se rompió. <b>Histórico:</b> 2025 entero: 44 casos, 8 muertes, letalidad 18%. 2020-2024: 30-70 casos/año, letalidad promedio 26%. Pico de la década: 91 casos en 2017. <b>1995-2025 acumulado:</b> 1,461 casos y 458 fallecidos. En cinco meses de 2026 Chile ya superó las muertes de todo 2025 y la letalidad casi duplicó la de 2025.',
      fuente: 'Primaria: ISP Chile · Cobertura: BioBioChile, La Tercera' },
    { coords: [-16.5, -68.1], fecha: '2026 · corte 11-may + Yacuiba jul', titulo: 'Bolivia · variantes locales (no Andes)',
      desc: '<b>Cepa:</b> variantes locales del hantavirus — la cepa Andes <b>NO circula en Bolivia</b> según epidemiólogo del Sedes. Reservorio: <i>Oligoryzomys longicaudatus</i> (ratón orejudo). <b>Último corte nacional (11-may):</b> 18 casos, 5 muertes (La Paz 13, Tarija 4, Beni 1). <b>Julio:</b> caso nuevo en <b>Yacuiba</b> (hombre de 26 años, periurbano, dado de alta; bloqueo epidemiológico y fumigación): todo el movimiento reciente es del <b>corredor fronterizo Bermejo-Yacuiba-Padcaya</b>, contiguo a Salta (letalidad 35.3%, foco Orán). <b>🔴 La vigilancia nacional publicada está congelada en abril (SE 13):</b> no existe conteo oficial posterior al 11-may, cuatro meses de rezago en plena alza regional. <b>Histórico:</b> 2025 al 15 nov: 48 casos y 11 muertes (duplicó el promedio 2023-2024 de ~24/año).',
      fuente: 'Primarias: Sedes Tarija (jul) · Min. Salud Bolivia (boletines a SE13) · OPS · Cobertura: Todo Noticias Tarija, eju.tv, Brújula Digital' },
    { coords: [-22.3, -60.1], fecha: '2026 al SE 29', titulo: 'Paraguay · virus Laguna Negra',
      desc: '<b>Cepa:</b> virus Laguna Negra (circulando desde 2012). Sin transmisión persona-persona. <b>2026 a la SE 29 (fines de julio): 5-6 casos confirmados, todos Chaco</b> (Boquerón + Pdte. Hayes; el propio boletín trae la inconsistencia interna 5 vs 6). <b>El alza casi duplica el corte de mayo (3) y ya rebasa el mismo periodo de 2025</b>; cambio de perfil: entraron <b>mujeres</b> a la curva (era 100% masculina) y el rango se amplió a 17-49 años. <b>Ningún medio paraguayo lo ha reportado: el dato vive solo en el PDF oficial de la DGVS.</b> <b>Histórico:</b> 2013-2020 = 90 casos (11/año); 2020-2025 = 110, 73% en Boquerón; letalidad acumulada 14%. Sin fallecidos 2026 reportados.',
      fuente: 'Primaria: DGVS/MSPBS Boletín SE-29 (PDF, ago-2026) · OPS' },
    { coords: [-30.0, -53.0], fecha: '2026 · corte 8-may (portales en veda)', titulo: 'Brasil · cepa Juquitiba / Castelo dos Sonhos',
      desc: '<b>Cepas:</b> Juquitiba, Castelo dos Sonhos, Araraquara. Sin transmisión persona-persona. <b>2026 al 8 de mayo (último dato nacional):</b> 8 casos confirmados (MG 2, RS 2, PR 2, SC 1, 1 s/i) y al menos 2 muertes (Carmo do Paranaíba-MG en febrero y Paulo Bento-RS). <b>Los 11 casos bajo investigación en Paraná nunca se resolvieron públicamente: la nota de la Sesa-PR fue retirada del portal (404).</b> <b>🔴 Desde julio los portales estaduales están caídos o bloqueados por el "defeso eleitoral" (veda electoral): el silencio oficial de jun-ago tiene mecanismo administrativo.</b> <b>Histórico:</b> 2007-2015 = 1,060 casos y 410 muertes (39%). <b>Cierre OPS 2025: 20 casos y 11 muertes = letalidad 55%, la más alta regional</b> (la serie del Ministério da Saúde daba 35 casos; son series distintas). La paradoja de 2025 (pocos casos, muy letales) por ahora no se repite en 2026 (~22-25%, n muy chica). Ningún caso 2026 tiene relación con la cepa Andes del MV Hondius.',
      fuente: 'Primarias: Ministério da Saúde (8-may), SES-RS, SES-SC · OPS (cierre 2025) · Cobertura: CNN Brasil, Agência Brasil, Metrópoles' },
    { coords: [-34.9, -56.2], fecha: '2026', titulo: 'Uruguay · cepa Lechiguanas',
      desc: '<b>Cepa:</b> virus Lechiguanas (no Andes). Reservorio: <i>Oligoryzomys flavescens</i>. Sin transmisión persona-persona documentada. <b>2024:</b> 11 casos. <b>2025 (cierre OPS):</b> 8 casos, 1 muerte (12.5%). <b>2026:</b> sin casos publicados; 0 vinculados al MV Hondius, y <b>el MSP lleva 3 meses sin comunicar nada de hantavirus</b> (último acto: comunicado del 8-may sobre el crucero). <b>Histórico:</b> vigilancia desde 1997; 1997-2019 acumulado de 271 casos; letalidad histórica alta (~50% en años iniciales). Concentración geográfica: sur del Río Negro — Montevideo, Canelones, Colonia. <b>MSP Uruguay descartó vínculos epidemiológicos con MV Hondius:</b> los pasajeros holandeses transitaron Uruguay pero los síntomas iniciaron días después de dejar el país.',
      fuente: 'Primaria: MSP Uruguay · Cobertura: Montevideo Portal, Diario La R' },
    { coords: [-7.8, -80.4], fecha: '2026 al SE 29', titulo: 'Panamá · cepa Choclo',
      desc: '<b>Cepa:</b> Choclo orthohantavirus (CHOV) — cepa diferente al resto de Sudamérica. Reservorio: <i>Oligoryzomys costaricensis</i>. <b>2026 a la SE 29 (fines de julio): 29 casos acumulados (15 fiebre por hantavirus + 14 con síndrome cardiopulmonar)</b>, cero nuevos esa semana. <b>La señal: los 14 SCPH ya superan el mismo corte de 2025 (11), y 2025 cerró en 18 siendo año récord</b>; entre SE21 y SE29 se sumaron 9 casos. <b>Primera muerte de 2026: 27-may</b>, trabajador agrícola de 42 años (Ocú/Herrera, laboraba en Montijo, Veraguas). <b>Histórico:</b> primer brote 1999-2000 en Los Santos (11 casos, 3 fatales); 2018: 103 casos mixtos; acumulado 1999-2019: Los Santos 77.4%. Letalidad considerablemente menor que el cono sur. Sin transmisión persona-persona.',
      fuente: 'Primaria: MINSA Boletín SE-29 (PDF) · La Prensa PA (27-may) · OPS' }
  ];

const continentes = [
    { coords: [-15, -60], label: 'Sudamérica',
      titulo: 'América Latina',
      desc: '<b>0 casos del brote MV Hondius</b>, pero <b>94 casos endémicos / 13 muertes</b> reportados en 2026 (semana epi. 15) según la OPS. Distribución por <b>cepa</b>:<br><br>• <b>Cepa Andes (ANDV)</b>: Argentina (32), Chile (38 / 13 muertes), Bolivia (11), Brasil (3), Paraguay (2). Endémica del Cono Sur. Reservorio: roedor <em>Oligoryzomys longicaudatus</em>. <b>Única cepa con transmisión humano-a-humano documentada</b> — es la del MV Hondius. El caso índice del crucero se infectó aquí durante un viaje de cuatro meses (27-nov-2025 al 1-abr-2026) por Chile, Uruguay y Argentina antes de abordar en Ushuaia.<br><br>• <b>Cepa Choclo (CHOV)</b>: Panamá (8 casos endémicos). Cepa distinta, endémica desde 1999 en Los Santos, Herrera, Veraguas y Coclé. Reservorio: <em>Oligoryzomys costaricensis</em>. Letalidad baja, muchas infecciones asintomáticas. Sin transmisión humano-a-humano documentada.',
      fuente: 'OPS · CDC · Boletín Epidemiológico Nacional Argentino · WHO DON Panamá (2019)' },
    { coords: [40, -100], label: 'Norteamérica',
      titulo: 'América del Norte',
      desc: '<b>1 caso confirmado por laboratorio</b> vinculado al MV Hondius: Dr. Stephen Kornfeld (oncólogo), en biocontención en el University of Nebraska Medical Center, Omaha. EE.UU.: 41 personas en monitoreo. Canadá: 26 contactos por exposición de bajo riesgo. Nodo federal de coordinación: USAMRIID (Frederick, Maryland) + National Quarantine Unit Nebraska.',
      fuente: 'Primaria: CDC HAN 00528 · Cobertura: CNN, CBC' },
    { coords: [52, 15], label: 'Europa',
      titulo: 'Europa',
      desc: '<b>5 casos confirmados</b> distribuidos en seis países. Concentración principal de pasajeros del MV Hondius: Reino Unido, Países Bajos, Alemania, Francia, España, Suiza. Turquía: contactos.<br><br><b>Países Bajos · Rotterdam</b>: el barco atracó el 18-may-2026 para desinfección. 25 contenedores blancos instalados en el muelle para cuarentena de 42 días, con internet satelital y catering. Tripulación restante: 17 filipinos, 4 holandeses, 4 ucranianos, 1 ruso, 1 polaco.<br><br><b>Francia</b>: mujer en sus 60 años (asma + comorbilidades) en estado crítico en el Hospital Bichat, París, bajo ECMO; atendida por el Dr. Xavier Lescure (infectología). Caso pulmonar más severo del cluster.<br><br><b>España</b>: paciente estable en el Hospital Central de Defensa Gómez Ulla, Madrid.',
      fuente: 'Primarias: ECDC, OMS DON601 · Cobertura: NL Times, France24, Al Jazeera, NPR, PBS, Infobae, El País' },
    { coords: [0, 20], label: 'África',
      titulo: 'África',
      desc: '<b>1 muerte confirmada del brote</b>: la viuda neerlandesa (segunda víctima del matrimonio embarcado) falleció en <b>Johannesburgo, Sudáfrica</b>, tras ser evacuada desde Santa Helena el 3 de mayo de 2026. Santa Helena: puerto de tránsito y desembarque sanitario británico durante la travesía del Hondius.',
      fuente: 'Primaria: OMS DON601 · Cobertura: CNN, El País' },
    { coords: [15, 100], label: 'Asia',
      titulo: 'Asia',
      desc: '<b>2 residentes en cuarentena</b>, sin casos confirmados al 17-may-2026. Singapur: dos pasajeros del MV Hondius fueron trasladados al Centro Nacional de Enfermedades Infecciosas y permanecen aislados al menos un mes.',
      fuente: 'Primaria: Ministerio de Salud de Singapur · Cobertura: CNA' },
    { coords: [-25, 135], label: 'Oceanía',
      titulo: 'Oceanía',
      desc: '<b>Pasajeros del MV Hondius en monitoreo</b>, sin casos confirmados al 17-may-2026. Australia: residentes que viajaban en el crucero están bajo seguimiento epidemiológico activo del Departamento de Salud federal.',
      fuente: 'Cobertura prensa internacional (sin comunicado primario localizado del Depto. Salud federal australiano al cierre)' }
  ];

const geopoliticos = [
    { coords: [38.92, -77.05], offset: [36.8, -80.2], fecha: '22-ene-2026', titulo: 'Estados Unidos abandona la OMS',
      desc: 'Washington DC. La salida formal entra en vigor el 22 de enero de 2026 tras el período de un año reglamentario desde la firma de la Orden Ejecutiva 14155 por Donald Trump el 20 de enero de 2025 (su primer día como Presidente). <b>Impacto financiero:</b> EE.UU. aportaba aproximadamente <b>USD 681 millones anuales</b> a la OMS — cuota evaluada de USD 111M más contribuciones voluntarias de ~USD 570M. Era <b>el 12-15% del presupuesto total</b> de la organización entre 2022 y 2023, su mayor donante histórico. <b>Consecuencia inmediata:</b> la OMS enfrenta un <b>déficit de USD 1,900 millones</b> en el presupuesto 2026-2027 — el 45% del presupuesto ya reducido a USD 4,200M. Crisis presupuestaria descrita por Health Policy Watch como "más grande de lo previsto".',
      fuente: 'Primaria: HHS Fact Sheet · Análisis institucional: CGD, CRS Report · Cobertura: Health Policy Watch, NPR' },
    { coords: [-34.62, -58.36], fecha: '17-mar-2026 · ratificada 22-may-2026 (WHA79)', titulo: 'Argentina concreta su salida de la OMS · ratificada WHA79',
      desc: 'Buenos Aires. La salida se concreta el 17 de marzo de 2026 por aplicación del Convenio de Viena, un año exacto después de la notificación formal del gobierno Milei al SG de la ONU el 17-mar-2025. Quince días antes del zarpe del MV Hondius desde Ushuaia. <b>Audit trail · ratificación 22-may:</b> tras controversia inicial donde Tedros declaró que "la pretendida notificación de retiro de Argentina no debería ser aceptada como efectiva", la <b>Asamblea Mundial de la Salud 79</b> aprobó <b>unánimamente el viernes 22 de mayo de 2026</b> el retiro definitivo de Argentina, con efecto legal inmediato retroactivo al 17-mar. El Comité Ejecutivo OMS ya había firmado resolución preparatoria el 6-feb-2026. <b>Coincidencia editorial del 22-may:</b> ese mismo día se reunió por primera vez el Comité de Emergencia del RSI por ébola Bundibugyo (ver E10). <b>Impacto financiero:</b> Argentina aportaba aproximadamente <b>USD 1.13 millones anuales</b> a la OMS más USD 369,500 a la OPS. Cifra <b>financieramente marginal</b> frente a los USD 681M estadounidenses — el acto argentino es <b>simbólico-político</b>, no presupuestal. <b>Diferencia clave:</b> Argentina <b>permanece como miembro de la OPS</b>, por lo que mantiene acceso a cooperación técnica regional. La salida es de la OMS global, no de la red continental sanitaria.',
      fuente: 'Primaria: Min. Salud Argentina (declaración Quirno + Lugones) + OMS WHA79 resolución 22-may + comunicado Comité Ejecutivo OMS del 6-feb-2026 · Cobertura: Euronews, Buenos Aires Times, Filo News, Chequeado, La Nación, Perfil, Think Global Health' },
    { coords: [38.91, -77.06], offset: [40.6, -79.5], fecha: '19-dic-2025', titulo: 'OPS emite alerta epidemiológica regional por hantavirus',
      desc: 'Washington DC, sede de la <b>OPS</b> (Organización Panamericana de la Salud, brazo regional de la OMS para las Américas, fundada en 1902). En 2025, hasta la semana epidemiológica 47, se reportaron en el cono sur <b>229 casos confirmados</b> y <b>59 muertes</b> en 8 países — aproximadamente <b>cuatro veces la media histórica anual</b> de la región (~50-60 casos/año). El virus Andes es endémico desde 1993-1995 en Argentina y Chile. La alerta se emitió tres meses antes de la salida formal de Argentina de la OMS, y casi cuatro meses antes del zarpe del MV Hondius desde Ushuaia.',
      fuente: 'OPS / Boletín Epidemiológico Regional' }
  ];

const rutasEndemicas = [
    // === SUDAMÉRICA — cepa Andes y variantes (cono sur, severas, p-p Andes) ===
    { selec:'Argentina', cepa:'Andes', color:'#5a8bb8', sedes: [
      [39.05,-94.48], [32.75,-97.09], [32.75,-97.09] // Kansas → Dallas → Dallas
    ]},
    { selec:'Brasil', cepa:'Juquitiba/Castelo', color:'#1a8f4a', sedes: [
      [40.81,-74.07], [39.90,-75.17], [25.96,-80.24] // NJ → Filadelfia → Miami
    ]},
    { selec:'Uruguay', cepa:'Andes', color:'#7ab0d8', sedes: [
      [25.96,-80.24], [25.96,-80.24], [20.68,-103.46] // Miami → Miami → Guadalajara (cruza al sur)
    ]},
    { selec:'Paraguay', cepa:'Laguna Negra', color:'#b85a3a', sedes: [
      [33.95,-118.34], [37.40,-121.97], [37.40,-121.97] // LA → SF Bay → SF Bay
    ]},
    // === CENTROAMÉRICA — cepa Choclo (Panamá) ===
    { selec:'Panamá', cepa:'Choclo', color:'#d4a017', sedes: [
      [43.63,-79.42], [43.63,-79.42], [40.81,-74.07] // Toronto → Toronto → NJ
    ]},
    // === ÁFRICA CENTRAL — ébola Bundibugyo (PHEIC activa 17-may-2026) ===
    { selec:'RD Congo', cepa:'ébola Bundibugyo', color:'#c2410c', sedes: [
      [29.68,-95.41], [20.68,-103.46] // Houston (vs Portugal 17-jun) → Guadalajara (vs Colombia 23-jun)
    ]},
    // === NORTEAMÉRICA — anfitrión, cepa Sin Nombre ===
    { selec:'México', cepa:'Sin Nombre (anfitrión)', color:'#1a3a8a', sedes: [
      [19.30,-99.15], [20.68,-103.46], [19.30,-99.15] // CDMX (vs Sudáfrica 11-jun) → Guadalajara (vs Corea 18-jun) → CDMX (vs Rep. Checa 24-jun)
    ]},
    // === ASIA — cepa Hantaan ===
    { selec:'Corea del Sur', cepa:'Hantaan', color:'#7a4ea8', sedes: [
      [20.68,-103.46], [25.69,-100.24] // Guadalajara (vs México 18-jun) → Monterrey (vs Sudáfrica)
    ]},
    { selec:'Japón', cepa:'Hantaan', color:'#9a6ec8', sedes: [
      [25.69,-100.24], [32.75,-97.09] // Monterrey (vs Túnez) → Dallas (vs Suecia)
    ]},
    // === EUROPA — cepa Puumala ===
    { selec:'España', cepa:'Puumala', color:'#2a8c4e', sedes: [
      [33.76,-84.40], [33.76,-84.40], [20.68,-103.46] // Atlanta (vs Cabo Verde 15-jun) → Atlanta (vs Arabia Saudí 21-jun) → Guadalajara (vs Uruguay 26-jun)
    ]},
    // Suecia, Rep. Checa, Inglaterra — selecciones endémicas con datos visibles
    // de UN SOLO partido al cierre del calendario público. No generan ruta entre sedes;
    // se podrán incorporar cuando la FIFA confirme partidos adicionales para esos países.
    // === ÁFRICA — sin endémico documentado de hantavirus pero contextual ===
    { selec:'Sudáfrica', cepa:'No endémico documentado', color:'#888', sedes: [
      [19.30,-99.15], [25.69,-100.24] // CDMX (vs México 11-jun) → Monterrey (vs Corea del Sur)
    ]}
  ];

const aficionados = [
    // === Norteamérica · cepa Sin Nombre ===
    { pais:'México',       coord:[19.43,-99.13],   cepa:'SinNombre', hub:null, sede:[19.30,-99.15], peso:'alto',  fecha:'11 jun', partido:'México vs Sudáfrica · Azteca, CDMX' },
    { pais:'Estados Unidos', coord:[38.90,-77.04], cepa:'SinNombre', hub:null, sede:[33.95,-118.34], peso:'alto', fecha:'12 jun', partido:'USA vs Paraguay · SoFi, Los Ángeles' },
    { pais:'Canadá',       coord:[45.42,-75.70],   cepa:'SinNombre', hub:null, sede:[49.28,-123.11], peso:'alto', fecha:'(Grupo B)', partido:'Canadá juega en Vancouver · primer rival por confirmar' },

    // === Cono Sur · Andes, Juquitiba, Lechiguanas, Laguna Negra ===
    { pais:'Argentina',    coord:[-34.61,-58.38],  cepa:'Andes',     hub:'LIM', sede:[39.05,-94.48], peso:'alto',   fecha:'16 jun', partido:'Argentina vs Argelia · Arrowhead, Kansas City' },
    { pais:'Brasil',       coord:[-23.55,-46.63],  cepa:'Juquitiba', hub:null,  sede:[40.81,-74.07], peso:'alto',   fecha:'13 jun', partido:'Brasil vs Marruecos · MetLife, Nueva Jersey' },
    { pais:'Uruguay',      coord:[-34.90,-56.16],  cepa:'Lechiguanas', hub:'GRU', sede:[25.96,-80.24], peso:'medio', fecha:'15 jun', partido:'Uruguay vs Arabia Saudí · Hard Rock, Miami' },
    { pais:'Paraguay',     coord:[-25.30,-57.63],  cepa:'LagunaNegra', hub:'GRU', sede:[33.95,-118.34], peso:'medio', fecha:'12 jun', partido:'USA vs Paraguay · SoFi, Los Ángeles' },
    { pais:'Colombia',     coord:[4.71,-74.07],    cepa:'NoEndemico', hub:null,  sede:[19.30,-99.15], peso:'alto',  fecha:'17 jun', partido:'Uzbekistán vs Colombia · Azteca, CDMX' },
    { pais:'Ecuador',      coord:[-0.18,-78.47],   cepa:'NoEndemico', hub:'BOG', sede:[39.90,-75.17], peso:'medio', fecha:'14 jun', partido:'Costa de Marfil vs Ecuador · Lincoln, Filadelfia' },

    // === Concacaf restantes ===
    { pais:'Haití',        coord:[18.59,-72.31],   cepa:'NoEndemico', hub:'MIA', sede:[42.09,-71.26], peso:'bajo',  fecha:'13 jun', partido:'Haití vs Escocia · Gillette, Boston' },
    { pais:'Panamá',       coord:[8.97,-79.53],    cepa:'Choclo',     hub:null,  sede:[43.63,-79.42], peso:'medio', fecha:'17 jun', partido:'Panamá vs Ghana · Toronto Stadium' },
    { pais:'Curazao',      coord:[12.11,-68.93],   cepa:'NoEndemico', hub:'MIA', sede:[29.68,-95.41], peso:'bajo',  fecha:'(Grupo E)', partido:'Alemania vs Curazao · NRG, Houston' },

    // === UEFA · Puumala/Dobrava/Seoul ===
    { pais:'España',       coord:[40.42,-3.70],    cepa:'Puumala', hub:'MAD', sede:[33.76,-84.40], peso:'alto',  fecha:'15 jun', partido:'España vs Cabo Verde · Mercedes-Benz, Atlanta' },
    { pais:'Inglaterra',   coord:[51.51,-0.13],    cepa:'Puumala', hub:'LHR', sede:[40.81,-74.07], peso:'alto',  fecha:'(Grupo L)', partido:'Inglaterra cierra grupo · sede por confirmar' },
    { pais:'Francia',      coord:[48.86,2.35],     cepa:'Puumala', hub:'CDG', sede:[40.81,-74.07], peso:'alto',  fecha:'(Grupo I)', partido:'Francia vs Senegal · MetLife, Nueva Jersey' },
    { pais:'Alemania',     coord:[52.52,13.40],    cepa:'Puumala', hub:'FRA', sede:[29.68,-95.41], peso:'alto',  fecha:'(Grupo E)', partido:'Alemania vs Curazao · NRG, Houston' },
    { pais:'Países Bajos', coord:[52.37,4.90],     cepa:'Puumala', hub:'AMS', sede:[32.90,-97.04], peso:'alto',  fecha:'(Grupo F)', partido:'Países Bajos vs Japón · AT&T, Dallas' },
    { pais:'Portugal',     coord:[38.72,-9.13],    cepa:'Puumala', hub:'LIS', sede:[29.68,-95.41], peso:'medio', fecha:'17 jun', partido:'Portugal vs RD Congo · NRG, Houston' },
    { pais:'Bélgica',      coord:[50.85,4.35],     cepa:'Puumala', hub:'FRA', sede:[40.81,-74.07], peso:'medio', fecha:'(Grupo G)', partido:'Bélgica · sede por confirmar' },
    { pais:'Suiza',        coord:[46.95,7.45],     cepa:'Puumala', hub:'FRA', sede:[40.81,-74.07], peso:'medio', fecha:'(grupo por confirmar)', partido:'Suiza · sede por confirmar' },
    { pais:'Austria',      coord:[48.21,16.37],    cepa:'Puumala', hub:'FRA', sede:[32.75,-97.09], peso:'medio', fecha:'22 jun (2da fecha)', partido:'Argentina vs Austria · AT&T, Dallas' },
    { pais:'Suecia',       coord:[59.33,18.06],    cepa:'Puumala', hub:'FRA', sede:[32.90,-97.04], peso:'medio', fecha:'(Grupo F)', partido:'Japón vs Suecia · AT&T, Dallas' },
    { pais:'Noruega',      coord:[59.91,10.75],    cepa:'Puumala', hub:'FRA', sede:[40.81,-74.07], peso:'medio', fecha:'(grupo por confirmar)', partido:'Noruega · sede por confirmar' },
    { pais:'Croacia',      coord:[45.81,15.98],    cepa:'Puumala', hub:'FRA', sede:[43.63,-79.42], peso:'medio', fecha:'23 jun (2da fecha)', partido:'Panamá vs Croacia · Toronto Stadium' },
    { pais:'Rep. Checa',   coord:[50.08,14.43],    cepa:'Puumala', hub:'FRA', sede:[20.68,-103.46], peso:'medio', fecha:'24 jun (3era fecha)', partido:'Rep. Checa vs México · Azteca, CDMX' },
    { pais:'Bosnia',       coord:[43.86,18.41],    cepa:'Puumala', hub:'IST', sede:[40.81,-74.07], peso:'bajo',  fecha:'(grupo por confirmar)', partido:'Bosnia · sede por confirmar' },
    { pais:'Escocia',      coord:[55.95,-3.19],    cepa:'Puumala', hub:'LHR', sede:[42.09,-71.26], peso:'medio', fecha:'13 jun', partido:'Haití vs Escocia · Gillette, Boston' },
    { pais:'Turquía',      coord:[41.00,28.98],    cepa:'NoEndemico', hub:'IST', sede:[37.40,-121.97], peso:'medio', fecha:'19 jun', partido:'Turquía vs Paraguay · Levi\'s, SF Bay' },

    // === Asia ===
    { pais:'Japón',        coord:[35.68,139.69],   cepa:'Hantaan', hub:'NRT', sede:[32.90,-97.04], peso:'medio', fecha:'(Grupo F)', partido:'Países Bajos vs Japón · AT&T, Dallas' },
    { pais:'Corea del Sur',coord:[37.57,126.98],   cepa:'Hantaan', hub:'ICN', sede:[20.68,-103.46], peso:'medio', fecha:'18 jun', partido:'México vs Corea del Sur · Akron, Guadalajara' },
    { pais:'Australia',    coord:[-35.28,149.13],  cepa:'NoEndemico', hub:'LAX', sede:[37.40,-121.97], peso:'medio', fecha:'25 jun (3era fecha)', partido:'Paraguay vs Australia · Levi\'s, SF Bay' },
    { pais:'Irán',         coord:[35.69,51.39],    cepa:'NoEndemico', hub:'DOH', sede:[40.81,-74.07], peso:'bajo',  fecha:'(grupo por confirmar)', partido:'Irán · sede por confirmar' },
    { pais:'Jordania',     coord:[31.95,35.93],    cepa:'NoEndemico', hub:'DOH', sede:[39.05,-94.48], peso:'bajo',  fecha:'27 jun (3era fecha)', partido:'Argentina vs Jordania · Arrowhead, Kansas' },
    { pais:'Uzbekistán',   coord:[41.31,69.24],    cepa:'NoEndemico', hub:'IST', sede:[19.30,-99.15], peso:'bajo',  fecha:'17 jun', partido:'Uzbekistán vs Colombia · Azteca, CDMX' },
    { pais:'Catar',        coord:[25.29,51.53],    cepa:'NoEndemico', hub:'DOH', sede:[40.81,-74.07], peso:'medio', fecha:'(grupo por confirmar)', partido:'Catar · sede por confirmar' },
    { pais:'Arabia Saudí', coord:[24.71,46.68],    cepa:'NoEndemico', hub:'DOH', sede:[25.96,-80.24], peso:'medio', fecha:'15 jun', partido:'Uruguay vs Arabia Saudí · Hard Rock, Miami' },
    { pais:'Iraq',         coord:[33.31,44.36],    cepa:'NoEndemico', hub:'IST', sede:[40.81,-74.07], peso:'bajo',  fecha:'(grupo por confirmar)', partido:'Iraq · sede por confirmar' },

    // === Oceanía ===
    { pais:'Nueva Zelanda',coord:[-41.29,174.78],  cepa:'NoEndemico', hub:'AKL', sede:[40.81,-74.07], peso:'bajo',  fecha:'(grupo por confirmar)', partido:'Nueva Zelanda · sede por confirmar' },

    // === África ===
    { pais:'Marruecos',    coord:[33.97,-6.85],    cepa:'NoEndemico', hub:'CDG', sede:[40.81,-74.07], peso:'medio', fecha:'13 jun', partido:'Brasil vs Marruecos · MetLife, Nueva Jersey' },
    { pais:'Túnez',        coord:[36.81,10.18],    cepa:'NoEndemico', hub:'CDG', sede:[25.69,-100.24], peso:'medio', fecha:'(Grupo F)', partido:'Túnez vs Japón · Estadio BBVA, Monterrey' },
    { pais:'Argelia',      coord:[36.75,3.06],     cepa:'NoEndemico', hub:'CDG', sede:[39.05,-94.48], peso:'medio', fecha:'16 jun', partido:'Argentina vs Argelia · Arrowhead, Kansas' },
    { pais:'Egipto',       coord:[30.04,31.24],    cepa:'NoEndemico', hub:'DOH', sede:[40.81,-74.07], peso:'medio', fecha:'(grupo por confirmar)', partido:'Egipto · sede por confirmar' },
    { pais:'Ghana',        coord:[5.61,-0.19],     cepa:'NoEndemico', hub:'CDG', sede:[43.63,-79.42], peso:'medio', fecha:'17 jun', partido:'Panamá vs Ghana · Toronto Stadium' },
    { pais:'Cabo Verde',   coord:[14.93,-23.51],   cepa:'NoEndemico', hub:'LIS', sede:[33.76,-84.40], peso:'bajo',  fecha:'15 jun', partido:'España vs Cabo Verde · Mercedes-Benz, Atlanta' },
    { pais:'Senegal',      coord:[14.71,-17.47],   cepa:'NoEndemico', hub:'CDG', sede:[40.81,-74.07], peso:'medio', fecha:'(Grupo I)', partido:'Francia vs Senegal · MetLife, Nueva Jersey' },
    { pais:'Costa de Marfil', coord:[5.34,-4.03],  cepa:'NoEndemico', hub:'CDG', sede:[39.90,-75.17], peso:'medio', fecha:'14 jun', partido:'Costa de Marfil vs Ecuador · Lincoln, Filadelfia' },
    { pais:'Sudáfrica',    coord:[-25.75,28.19],   cepa:'NoEndemico', hub:'JNB', sede:[19.30,-99.15], peso:'medio', fecha:'11 jun', partido:'México vs Sudáfrica · Azteca, CDMX' },
    { pais:'RD Congo',     coord:[-4.32,15.32],    cepa:'NoEndemico', hub:'CDG', sede:[29.68,-95.41], peso:'medio', fecha:'17 jun', partido:'Portugal vs RD Congo · NRG, Houston (RDC tiene PHEIC ébola activa)' }
  ];

const preCruiseRoute = [
    [-33.45,-70.66],  // Santiago de Chile (~ nov 2025)
    [-34.90,-56.16],  // Montevideo, Uruguay
    [-34.60,-58.38],  // Buenos Aires, Argentina
    [-54.81,-68.30]   // Ushuaia, donde aborda el MV Hondius (1 abr 2026)
  ];

const cruiseRoute = [
    [-54.81,-68.30], [-64.50,-62.00], [-54.43,-36.59],
    [-37.10,-12.28], [-15.92,-5.72], [-7.93,-14.36],
    [14.93,-23.51], [28.10,-16.49]
  ];

const evacDest = [
    [-26.20,28.04],   // Johannesburgo
    [52.37,4.90],     // Ámsterdam
    [47.37,8.54],     // Zúrich
    [52.52,13.40],    // Berlín
    [40.41,-3.74],    // Madrid
    [48.86,2.35],     // París
    [41.90,12.50],    // Roma
    [41.12,-95.92],   // Omaha
    [51.92,4.48]      // Rotterdam (programado)
  ];

const corredorCoords = [
    [-22.74, -64.10],  // Yacuiba (Bolivia)
    [-22.05, -63.78],  // Bermejo (Bolivia)
    [-22.04, -63.78],  // Frontera Bermejo / Aguas Blancas
    [-22.71, -63.69],  // Salvador Mazza / Tartagal (Salta)
    [-24.79, -65.41],  // Salta capital
    [-24.18, -65.30]   // San Salvador de Jujuy
  ];

const endemicoLabels = ['And', 'And', 'loc', 'LgN', 'Juq', 'Lch', 'Cho'];

window.DATOS = {aficionados, continentes, corredorCoords, countries, countriesEbola, cruiseRoute, declaraciones, declaracionesEbola, endemicoLabels, endemicos, evacDest, eventosEbola, events, financiadores, geopoliticos, preCruiseRoute, rutasEndemicas, sources, vacunas};
