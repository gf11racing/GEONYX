// Adds "meta" { title, description } to locale files that are missing it
const fs = require('fs');
const path = require('path');

const LANGS = ['bg', 'en', 'de', 'fr', 'es', 'tr', 'ru', 'el'];

const META = {
  home: {
    bg: { title: 'GEONYX | Индустриални геополимерни решения', description: 'Високотехнологични геополимерни матрици за критична инфраструктура и тежка индустрия. Инженеринг отвъд границите на бетона.' },
    en: { title: 'GEONYX | Industrial Geopolymer Solutions', description: 'High-technology geopolymer matrices for critical infrastructure and heavy industry. Engineering beyond the limits of concrete.' },
    de: { title: 'GEONYX | Industrielle Geopolymerlösungen', description: 'Hochleistungs-Geopolymermatrizen für kritische Infrastruktur und Schwerindustrie. Ingenieurleistungen jenseits der Grenzen des Betons.' },
    fr: { title: 'GEONYX | Solutions Géopolymères Industrielles', description: 'Matrices géopolymères haute technologie pour les infrastructures critiques et l\'industrie lourde. L\'ingénierie au-delà des limites du béton.' },
    es: { title: 'GEONYX | Soluciones Geopolímeras Industriales', description: 'Matrices geopolímeras de alta tecnología para infraestructuras críticas e industria pesada. Ingeniería más allá de los límites del hormigón.' },
    tr: { title: 'GEONYX | Endüstriyel Jeopolimer Çözümleri', description: 'Kritik altyapı ve ağır sanayi için yüksek teknoloji jeopolimer matrisler. Betonun sınırlarının ötesinde mühendislik.' },
    ru: { title: 'GEONYX | Промышленные геополимерные решения', description: 'Высокотехнологичные геополимерные матрицы для критической инфраструктуры и тяжёлой промышленности. Инжиниринг за пределами бетона.' },
    el: { title: 'GEONYX | Βιομηχανικές Γεωπολυμερικές Λύσεις', description: 'Υψηλής τεχνολογίας γεωπολυμερικές μήτρες για κρίσιμες υποδομές και βαριά βιομηχανία. Μηχανική πέρα από τα όρια του σκυροδέματος.' },
  },
  armor: {
    bg: { title: 'GEONYX ARMOR | Минерална система за индустриални подове', description: 'GEONYX ARMOR – суперплоска минерална система за екстремни механични натоварвания, VNA алеи, зони под стелажи и тежка промишленост.' },
    en: { title: 'GEONYX ARMOR | Mineral Industrial Floor System', description: 'GEONYX ARMOR – superflat mineral floor system engineered for extreme mechanical loads, VNA aisles, racking zones and heavy industry halls.' },
    de: { title: 'GEONYX ARMOR | Mineralisches Industriebodensystem', description: 'GEONYX ARMOR – superflaches Mineralbodensystem für extreme mechanische Belastungen, VNA-Gänge, Regalzonen und Schwerbetrieb.' },
    fr: { title: 'GEONYX ARMOR | Système de Sol Industriel Minéral', description: 'GEONYX ARMOR – système de sol minéral superplat pour charges mécaniques extrêmes, allées VNA, zones de stockage et industrie lourde.' },
    es: { title: 'GEONYX ARMOR | Sistema Mineral para Suelos Industriales', description: 'GEONYX ARMOR – sistema de suelo mineral superplano para cargas mecánicas extremas, pasillos VNA, zonas de estanterías e industria pesada.' },
    tr: { title: 'GEONYX ARMOR | Mineral Endüstriyel Zemin Sistemi', description: 'GEONYX ARMOR – aşırı mekanik yükler, VNA koridorları, raf bölgeleri ve ağır sanayi için düz mineral zemin sistemi.' },
    ru: { title: 'GEONYX ARMOR | Минеральная система промышленных полов', description: 'GEONYX ARMOR – сверхплоская минеральная система для экстремальных механических нагрузок, VNA-проходов, стеллажных зон и тяжёлой промышленности.' },
    el: { title: 'GEONYX ARMOR | Μεταλλικό Σύστημα Βιομηχανικού Δαπέδου', description: 'GEONYX ARMOR – superflat μεταλλικό σύστημα δαπέδου για ακραία μηχανικά φορτία, διαδρόμους VNA, ζώνες ραφιών και βαριά βιομηχανία.' },
  },
  chem: {
    bg: { title: 'GEONYX CHEM | Химически устойчива минерална система', description: 'GEONYX CHEM – минерална химически устойчива система за зони с масла, киселини, разтворители, електролити и индустриални химикали.' },
    en: { title: 'GEONYX CHEM | Chemical Resistant Mineral Floor System', description: 'GEONYX CHEM – mineral chemically resistant flooring for zones exposed to oils, acids, solvents, electrolytes and industrial chemicals.' },
    de: { title: 'GEONYX CHEM | Chemisch Beständiges Mineralbodensystem', description: 'GEONYX CHEM – chemisch beständiges Mineralbodensy stem für Bereiche mit Ölen, Säuren, Lösungsmitteln, Elektrolyten und Industriechemikalien.' },
    fr: { title: 'GEONYX CHEM | Système Minéral Résistant aux Produits Chimiques', description: 'GEONYX CHEM – revêtement minéral chimiquement résistant pour les zones exposées aux huiles, acides, solvants, électrolytes et produits chimiques industriels.' },
    es: { title: 'GEONYX CHEM | Sistema Mineral Resistente a Químicos', description: 'GEONYX CHEM – pavimento mineral químicamente resistente para zonas con aceites, ácidos, disolventes, electrolitos y productos químicos industriales.' },
    tr: { title: 'GEONYX CHEM | Kimyasal Dayanımlı Mineral Zemin Sistemi', description: 'GEONYX CHEM – yağlar, asitler, çözücüler, elektrolitler ve endüstriyel kimyasallara maruz kalan bölgeler için mineral kimyasal dayanımlı zemin.' },
    ru: { title: 'GEONYX CHEM | Химически стойкая минеральная система полов', description: 'GEONYX CHEM – минеральное химически стойкое покрытие для зон с маслами, кислотами, растворителями, электролитами и промышленными химикатами.' },
    el: { title: 'GEONYX CHEM | Χημικά Ανθεκτικό Μεταλλικό Σύστημα Δαπέδου', description: 'GEONYX CHEM – μεταλλικό χημικά ανθεκτικό δάπεδο για ζώνες με έκθεση σε έλαια, οξέα, διαλύτες, ηλεκτρολύτες και βιομηχανικά χημικά.' },
  },
  therm: {
    bg: { title: 'GEONYX THERM | Термоустойчива система за подове', description: 'GEONYX THERM – геополимерни подове за зони с екстремна топлина, искри и термичен удар. Подходящ за леярни, пещи и горещи процеси.' },
    en: { title: 'GEONYX THERM | Thermal Resistant Floor System', description: 'GEONYX THERM – geopolymer flooring for zones with extreme heat, sparks and thermal shock. Suitable for foundries, furnaces and hot industrial processes.' },
    de: { title: 'GEONYX THERM | Hitzebeständiges Bodensystem', description: 'GEONYX THERM – Geopolymerboden für Bereiche mit extremer Hitze, Funkenflug und Thermoschock. Geeignet für Gießereien, Öfen und heiße Prozesse.' },
    fr: { title: 'GEONYX THERM | Système de Sol Résistant à la Chaleur', description: 'GEONYX THERM – revêtement géopolymère pour zones à chaleur extrême, étincelles et choc thermique. Adapté aux fonderies, fours et procédés chauds.' },
    es: { title: 'GEONYX THERM | Sistema de Suelo Resistente al Calor', description: 'GEONYX THERM – pavimento geopolímero para zonas con calor extremo, chispas y choque térmico. Apto para fundiciones, hornos y procesos en caliente.' },
    tr: { title: 'GEONYX THERM | Isıya Dayanıklı Zemin Sistemi', description: 'GEONYX THERM – aşırı ısı, kıvılcım ve termal şok içeren bölgeler için jeopolimer zemin. Döküm, fırın ve sıcak işlem bölgeleri için uygundur.' },
    ru: { title: 'GEONYX THERM | Термостойкая система полов', description: 'GEONYX THERM – геополимерные полы для зон с экстремальным жаром, искрами и термоударом. Подходит для литейных производств, печей и горячих процессов.' },
    el: { title: 'GEONYX THERM | Θερμοανθεκτικό Σύστημα Δαπέδου', description: 'GEONYX THERM – γεωπολυμερικό δάπεδο για ζώνες με ακραία θερμότητα, σπινθήρες και θερμικό σοκ. Κατάλληλο για χυτήρια, κλίβανους και θερμές διεργασίες.' },
  },
  hydro: {
    bg: { title: 'GEONYX HYDRO | Хидроизолация и защита от влага', description: 'GEONYX HYDRO – кристална хидроизолация за бетонни основи. Защита от капилярна влага, хидростатично налягане и проникване на вода.' },
    en: { title: 'GEONYX HYDRO | Waterproofing and Moisture Protection', description: 'GEONYX HYDRO – crystalline waterproofing for concrete substrates. Protection against capillary moisture, hydrostatic pressure and water ingress.' },
    de: { title: 'GEONYX HYDRO | Abdichtung und Feuchteschutz', description: 'GEONYX HYDRO – kristalline Abdichtung für Betonuntergründe. Schutz vor Kapillarfeuchte, hydrostatischem Druck und Wassereindrigung.' },
    fr: { title: 'GEONYX HYDRO | Étanchéité et Protection Contre l\'Humidité', description: 'GEONYX HYDRO – imperméabilisation cristalline pour substrats en béton. Protection contre l\'humidité capillaire, la pression hydrostatique et les infiltrations.' },
    es: { title: 'GEONYX HYDRO | Impermeabilización y Protección contra la Humedad', description: 'GEONYX HYDRO – impermeabilización cristalina para sustratos de hormigón. Protección contra humedad capilar, presión hidrostática e infiltración de agua.' },
    tr: { title: 'GEONYX HYDRO | Su Yalıtımı ve Nem Koruması', description: 'GEONYX HYDRO – beton yüzeyler için kristal su yalıtımı. Kılcal nem, hidrostatik basınç ve su sızıntısına karşı koruma.' },
    ru: { title: 'GEONYX HYDRO | Гидроизоляция и защита от влаги', description: 'GEONYX HYDRO – кристаллическая гидроизоляция для бетонных оснований. Защита от капиллярной влаги, гидростатического давления и водопроникновения.' },
    el: { title: 'GEONYX HYDRO | Υδατοστεγανοποίηση και Προστασία από Υγρασία', description: 'GEONYX HYDRO – κρυσταλλική υδατοστεγανοποίηση για βάσεις σκυροδέματος. Προστασία από τριχοειδή υγρασία, υδροστατική πίεση και διείσδυση νερού.' },
  },
  technology: {
    bg: { title: 'GEONYX Технология | Инженеринг на геополимерни матрици', description: 'Науката зад GEONYX – алкално-активирани геополимерни матрици, надминаващи конвенционалния бетон по дълготрайност, химична устойчивост и механична якост.' },
    en: { title: 'GEONYX Technology | Geopolymer Matrix Engineering', description: 'The science behind GEONYX – alkali-activated geopolymer matrices that outperform conventional concrete in durability, chemical resistance and mechanical strength.' },
    de: { title: 'GEONYX Technologie | Geopolymermatrix-Engineering', description: 'Die Wissenschaft hinter GEONYX – alkaliaktivierte Geopolymermatrizen, die herkömmlichen Beton in Haltbarkeit, chemischer Beständigkeit und mechanischer Festigkeit übertreffen.' },
    fr: { title: 'GEONYX Technologie | Ingénierie des Matrices Géopolymères', description: 'La science derrière GEONYX – matrices géopolymères à activation alcaline surpassant le béton conventionnel en durabilité, résistance chimique et résistance mécanique.' },
    es: { title: 'GEONYX Tecnología | Ingeniería de Matrices Geopolímeras', description: 'La ciencia detrás de GEONYX – matrices geopolímeras de activación alcalina que superan al hormigón convencional en durabilidad, resistencia química y resistencia mecánica.' },
    tr: { title: 'GEONYX Teknoloji | Jeopolimer Matris Mühendisliği', description: 'GEONYX\'in arkasındaki bilim – dayanıklılık, kimyasal direnç ve mekanik mukavemet açısından geleneksel betonu geçen alkali aktive jeopolimer matrisler.' },
    ru: { title: 'Технология GEONYX | Инжиниринг геополимерных матриц', description: 'Наука за GEONYX – щелочно-активированные геополимерные матрицы, превосходящие обычный бетон по долговечности, химической стойкости и механической прочности.' },
    el: { title: 'Τεχνολογία GEONYX | Μηχανική Γεωπολυμερικών Μητρών', description: 'Η επιστήμη πίσω από το GEONYX – αλκαλικά ενεργοποιημένες γεωπολυμερικές μήτρες που υπερτερούν του συμβατικού σκυροδέματος σε ανθεκτικότητα και μηχανική αντοχή.' },
  },
  about: {
    bg: { title: 'За GEONYX | Геополимерна инженерингова компания', description: 'GEONYX GROUP LTD – българска инженерингова компания, разработваща високотехнологични геополимерни матрици за индустриална инфраструктура и критични обекти.' },
    en: { title: 'About GEONYX | Geopolymer Engineering Company', description: 'GEONYX GROUP LTD – a Bulgarian engineering company developing high-technology geopolymer matrices for industrial infrastructure and critical facilities.' },
    de: { title: 'Über GEONYX | Geopolymer-Ingenieurunternehmen', description: 'GEONYX GROUP LTD – ein bulgarisches Ingenieurunternehmen, das hochleistungsfähige Geopolymermatrizen für industrielle Infrastruktur und kritische Anlagen entwickelt.' },
    fr: { title: 'À propos de GEONYX | Société d\'Ingénierie Géopolymère', description: 'GEONYX GROUP LTD – une société d\'ingénierie bulgare développant des matrices géopolymères haute technologie pour l\'infrastructure industrielle et les installations critiques.' },
    es: { title: 'Sobre GEONYX | Empresa de Ingeniería Geopolíméra', description: 'GEONYX GROUP LTD – una empresa de ingeniería búlgara que desarrolla matrices geopolímeras de alta tecnología para infraestructura industrial e instalaciones críticas.' },
    tr: { title: 'GEONYX Hakkında | Jeopolimer Mühendislik Şirketi', description: 'GEONYX GROUP LTD – endüstriyel altyapı ve kritik tesisler için yüksek teknoloji jeopolimer matrisler geliştiren Bulgar mühendislik şirketi.' },
    ru: { title: 'О GEONYX | Геополимерная инжиниринговая компания', description: 'GEONYX GROUP LTD – болгарская инжиниринговая компания, разрабатывающая высокотехнологичные геополимерные матрицы для промышленной инфраструктуры и критических объектов.' },
    el: { title: 'Σχετικά με GEONYX | Εταιρεία Γεωπολυμερικής Μηχανικής', description: 'GEONYX GROUP LTD – βουλγαρική εταιρεία μηχανικής που αναπτύσσει υψηλής τεχνολογίας γεωπολυμερικές μήτρες για βιομηχανικές υποδομές και κρίσιμες εγκαταστάσεις.' },
  },
  contacts: {
    bg: { title: 'Контакти GEONYX | Инженерна консултация', description: 'Свържете се с GEONYX GROUP LTD за техническа консултация, инспекция на обект или планиране на проект. София, България.' },
    en: { title: 'Contact GEONYX | Engineering Consultation', description: 'Contact GEONYX GROUP LTD for technical consultation, site inspection or project planning. Sofia, Bulgaria.' },
    de: { title: 'Kontakt GEONYX | Ingenieursberatung', description: 'Kontaktieren Sie GEONYX GROUP LTD für technische Beratung, Standortinspektion oder Projektplanung. Sofia, Bulgarien.' },
    fr: { title: 'Contacter GEONYX | Consultation en Ingénierie', description: 'Contactez GEONYX GROUP LTD pour une consultation technique, une inspection de site ou une planification de projet. Sofia, Bulgarie.' },
    es: { title: 'Contactar GEONYX | Consultoría de Ingeniería', description: 'Contacte con GEONYX GROUP LTD para consultoría técnica, inspección de instalaciones o planificación de proyectos. Sofía, Bulgaria.' },
    tr: { title: 'GEONYX İletişim | Mühendislik Danışmanlığı', description: 'Teknik danışmanlık, saha incelemesi veya proje planlaması için GEONYX GROUP LTD ile iletişime geçin. Sofya, Bulgaristan.' },
    ru: { title: 'Контакты GEONYX | Инженерная консультация', description: 'Свяжитесь с GEONYX GROUP LTD для технической консультации, инспекции объекта или планирования проекта. София, Болгария.' },
    el: { title: 'Επικοινωνία GEONYX | Μηχανική Συμβουλευτική', description: 'Επικοινωνήστε με την GEONYX GROUP LTD για τεχνική συμβουλευτική, επιθεώρηση χώρου ή σχεδιασμό έργου. Σόφια, Βουλγαρία.' },
  },
  requestinspection: {
    bg: { title: 'Заяви техническа инспекция | GEONYX', description: 'Заявете безплатна техническа инспекция на пода от инженер на GEONYX. Диагностицираме натоварванията и рисковете и изготвяме персонализирана оферта.' },
    en: { title: 'Request Technical Inspection | GEONYX', description: 'Request a free technical floor inspection by a GEONYX engineer. We diagnose the loads and risks and prepare a personalised engineering proposal.' },
    de: { title: 'Technische Inspektion Anfragen | GEONYX', description: 'Fordern Sie eine kostenlose technische Bodeninspektion durch einen GEONYX-Ingenieur an. Wir diagnostizieren Belastungen und Risiken und erstellen ein individuelles Angebot.' },
    fr: { title: 'Demander une Inspection Technique | GEONYX', description: 'Demandez une inspection technique gratuite du sol par un ingénieur GEONYX. Nous diagnostiquons les charges et les risques et préparons une proposition personnalisée.' },
    es: { title: 'Solicitar Inspección Técnica | GEONYX', description: 'Solicite una inspección técnica gratuita del suelo por un ingeniero GEONYX. Diagnosticamos cargas y riesgos y preparamos una propuesta de ingeniería personalizada.' },
    tr: { title: 'Teknik Denetim Talep Edin | GEONYX', description: 'GEONYX mühendisi tarafından ücretsiz teknik zemin denetimi talep edin. Yükleri ve riskleri teşhis eder, kişiselleştirilmiş mühendislik teklifi hazırlarız.' },
    ru: { title: 'Запросить техническую инспекцию | GEONYX', description: 'Закажите бесплатную техническую инспекцию пола от инженера GEONYX. Диагностируем нагрузки и риски, подготовим персональное инженерное предложение.' },
    el: { title: 'Αίτηση Τεχνικής Επιθεώρησης | GEONYX', description: 'Ζητήστε δωρεάν τεχνική επιθεώρηση δαπέδου από μηχανικό GEONYX. Διαγιγνώσκουμε φορτία και κινδύνους και ετοιμάζουμε εξατομικευμένη πρόταση.' },
  },
  sectorshub: {
    bg: { title: 'GEONYX | Индустриални сектори', description: 'GEONYX обслужва 8 индустриални сектора: хранителна и фармацевтична промишленост, тежка индустрия, инфраструктура, земеделие, вода, енергетика, строителство и градски хайтек.' },
    en: { title: 'GEONYX | Industrial Sectors We Serve', description: 'GEONYX serves 8 industrial sectors: food & pharma, heavy industry, infrastructure, agriculture, water & marine, energy & defense, construction and urban high-tech.' },
    de: { title: 'GEONYX | Bediente Industriesektoren', description: 'GEONYX bedient 8 Industriesektoren: Lebensmittel & Pharma, Schwerindustrie, Infrastruktur, Landwirtschaft, Wasser & Marine, Energie & Verteidigung, Bau und Urban High-Tech.' },
    fr: { title: 'GEONYX | Secteurs Industriels Desservis', description: 'GEONYX sert 8 secteurs industriels: agroalimentaire & pharma, industrie lourde, infrastructures, agriculture, eau & marine, énergie & défense, construction et urban high-tech.' },
    es: { title: 'GEONYX | Sectores Industriales que Atendemos', description: 'GEONYX atiende 8 sectores industriales: alimentación y farmacia, industria pesada, infraestructuras, agricultura, agua y marina, energía y defensa, construcción y alta tecnología urbana.' },
    tr: { title: 'GEONYX | Hizmet Verdiğimiz Endüstriyel Sektörler', description: 'GEONYX 8 endüstriyel sektöre hizmet verir: gıda ve ilaç, ağır sanayi, altyapı, tarım, su ve deniz, enerji ve savunma, inşaat ve kentsel yüksek teknoloji.' },
    ru: { title: 'GEONYX | Промышленные секторы', description: 'GEONYX обслуживает 8 промышленных секторов: пищевая и фармацевтическая промышленность, тяжёлая промышленность, инфраструктура, сельское хозяйство, водная сфера, энергетика, строительство и городские технологии.' },
    el: { title: 'GEONYX | Βιομηχανικοί Τομείς', description: 'Η GEONYX εξυπηρετεί 8 βιομηχανικούς τομείς: τρόφιμα και φάρμακα, βαριά βιομηχανία, υποδομές, γεωργία, νερό και ναυτιλία, ενέργεια και άμυνα, κατασκευές και αστική υψηλή τεχνολογία.' },
  },
  systemshub: {
    bg: { title: 'GEONYX Системи | ARMOR, CHEM, THERM, HYDRO', description: 'Преглед на всички геополимерни системи на GEONYX: ARMOR за механични натоварвания, CHEM за химична устойчивост, THERM за топлина, HYDRO за хидроизолация.' },
    en: { title: 'GEONYX Engineering Systems | ARMOR, CHEM, THERM, HYDRO', description: 'Overview of all GEONYX geopolymer systems: ARMOR for mechanical loads, CHEM for chemical resistance, THERM for extreme heat, HYDRO for waterproofing.' },
    de: { title: 'GEONYX Ingenieursysteme | ARMOR, CHEM, THERM, HYDRO', description: 'Übersicht aller GEONYX-Geopolymersysteme: ARMOR für mechanische Belastungen, CHEM für chemische Beständigkeit, THERM für extreme Hitze, HYDRO für Abdichtung.' },
    fr: { title: 'Systèmes d\'Ingénierie GEONYX | ARMOR, CHEM, THERM, HYDRO', description: 'Aperçu de tous les systèmes géopolymères GEONYX: ARMOR pour charges mécaniques, CHEM pour résistance chimique, THERM pour chaleur extrême, HYDRO pour étanchéité.' },
    es: { title: 'Sistemas de Ingeniería GEONYX | ARMOR, CHEM, THERM, HYDRO', description: 'Visión general de todos los sistemas geopolímeros GEONYX: ARMOR para cargas mecánicas, CHEM para resistencia química, THERM para calor extremo, HYDRO para impermeabilización.' },
    tr: { title: 'GEONYX Mühendislik Sistemleri | ARMOR, CHEM, THERM, HYDRO', description: 'Tüm GEONYX jeopolimer sistemlerine genel bakış: mekanik yükler için ARMOR, kimyasal direnç için CHEM, aşırı ısı için THERM, su yalıtımı için HYDRO.' },
    ru: { title: 'Инженерные системы GEONYX | ARMOR, CHEM, THERM, HYDRO', description: 'Обзор всех геополимерных систем GEONYX: ARMOR для механических нагрузок, CHEM для химической стойкости, THERM для экстремального жара, HYDRO для гидроизоляции.' },
    el: { title: 'Συστήματα Μηχανικής GEONYX | ARMOR, CHEM, THERM, HYDRO', description: 'Επισκόπηση όλων των γεωπολυμερικών συστημάτων GEONYX: ARMOR για μηχανικά φορτία, CHEM για χημική αντοχή, THERM για ακραία θερμότητα, HYDRO για υδατοστεγανοποίηση.' },
  },
  privacy: {
    bg: { title: 'Политика за поверителност | GEONYX GROUP', description: 'Политика за поверителност на GEONYX GROUP LTD – как събираме, съхраняваме и обработваме лични данни в съответствие с GDPR.' },
    en: { title: 'Privacy Policy | GEONYX GROUP', description: 'Privacy policy of GEONYX GROUP LTD – how we collect, store and process personal data in compliance with GDPR regulations.' },
    de: { title: 'Datenschutzrichtlinie | GEONYX GROUP', description: 'Datenschutzrichtlinie der GEONYX GROUP LTD – wie wir personenbezogene Daten gemäß DSGVO erheben, speichern und verarbeiten.' },
    fr: { title: 'Politique de Confidentialité | GEONYX GROUP', description: 'Politique de confidentialité de GEONYX GROUP LTD – comment nous collectons, stockons et traitons les données personnelles conformément au RGPD.' },
    es: { title: 'Política de Privacidad | GEONYX GROUP', description: 'Política de privacidad de GEONYX GROUP LTD – cómo recopilamos, almacenamos y procesamos datos personales de conformidad con el RGPD.' },
    tr: { title: 'Gizlilik Politikası | GEONYX GROUP', description: 'GEONYX GROUP LTD gizlilik politikası – GDPR düzenlemelerine uygun olarak kişisel verileri nasıl topladığımız, sakladığımız ve işlediğimiz.' },
    ru: { title: 'Политика конфиденциальности | GEONYX GROUP', description: 'Политика конфиденциальности GEONYX GROUP LTD – как мы собираем, храним и обрабатываем персональные данные в соответствии с GDPR.' },
    el: { title: 'Πολιτική Απορρήτου | GEONYX GROUP', description: 'Πολιτική απορρήτου της GEONYX GROUP LTD – πώς συλλέγουμε, αποθηκεύουμε και επεξεργαζόμαστε προσωπικά δεδομένα σύμφωνα με τον GDPR.' },
  },
  terms: {
    bg: { title: 'Общи условия | GEONYX GROUP', description: 'Общи условия на GEONYX GROUP LTD за ползване на уебсайта и предоставяне на инженерни услуги.' },
    en: { title: 'Terms and Conditions | GEONYX GROUP', description: 'General terms and conditions of GEONYX GROUP LTD for use of the website and provision of engineering services.' },
    de: { title: 'Allgemeine Geschäftsbedingungen | GEONYX GROUP', description: 'Allgemeine Geschäftsbedingungen der GEONYX GROUP LTD für die Nutzung der Website und die Erbringung von Ingenieurleistungen.' },
    fr: { title: 'Conditions Générales | GEONYX GROUP', description: 'Conditions générales d\'utilisation de GEONYX GROUP LTD pour l\'utilisation du site web et la fourniture de services d\'ingénierie.' },
    es: { title: 'Términos y Condiciones | GEONYX GROUP', description: 'Términos y condiciones generales de GEONYX GROUP LTD para el uso del sitio web y la prestación de servicios de ingeniería.' },
    tr: { title: 'Şartlar ve Koşullar | GEONYX GROUP', description: 'Web sitesinin kullanımı ve mühendislik hizmetlerinin sunulması için GEONYX GROUP LTD genel şartlar ve koşulları.' },
    ru: { title: 'Условия использования | GEONYX GROUP', description: 'Общие условия использования GEONYX GROUP LTD для работы с веб-сайтом и предоставления инженерных услуг.' },
    el: { title: 'Όροι και Προϋποθέσεις | GEONYX GROUP', description: 'Γενικοί όροι και προϋποθέσεις της GEONYX GROUP LTD για τη χρήση του ιστότοπου και την παροχή υπηρεσιών μηχανικής.' },
  },
};

let updated = 0;
let skipped = 0;

for (const [namespace, langMap] of Object.entries(META)) {
  for (const lang of LANGS) {
    const filePath = path.join(__dirname, '..', 'locales', lang, `${namespace}.json`);
    if (!fs.existsSync(filePath)) {
      console.log(`MISSING FILE: ${filePath}`);
      continue;
    }
    const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    if (content.meta) {
      skipped++;
      continue;
    }
    const metaEntry = langMap[lang];
    if (!metaEntry) {
      console.log(`No meta defined for ${lang}/${namespace}`);
      continue;
    }
    // Insert meta as first key
    const newContent = { meta: metaEntry, ...content };
    fs.writeFileSync(filePath, JSON.stringify(newContent, null, 2), 'utf8');
    updated++;
    console.log(`Updated: ${lang}/${namespace}.json`);
  }
}

console.log(`\nDone: ${updated} updated, ${skipped} already had meta.`);
