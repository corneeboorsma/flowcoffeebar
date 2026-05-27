// ─── TRANSLATIONS ───
const TRANSLATIONS = {
  nl: {
    flag: '🇳🇱', lang: 'NL',
    yourOrder: 'Jouw bestelling', basket: 'Mandje', empty: 'Je winkelmandje is leeg',
    pickupTime: 'Afhaaltijdstip', note: 'Opmerking', notePlaceholder: 'Bijv. lactosevrije melk, extra warm...',
    placeOrder: 'Bestelling plaatsen →', total: 'Totaal', timeError: '⚠ Kies een afhaaltijdstip om verder te gaan.',
    successTitle: 'Bestelling geplaatst!', successMsg: (time) => `Jouw <strong>Flow-moment</strong> staat klaar om <strong>${time}</strong>.`,
    successSub: 'Tot morgen! ✨', placing: 'Bezig...',
    bibleQuote: '"Maak je dan geen zorgen voor de dag van morgen,<br>want de dag van morgen zal voor zichzelf zorgen."',
    footerLine1: 'Bestel nu gemakkelijk je ontbijt voor morgen!', footerLine2: 'Coffee and Breakfast to Flow!',
    categories: { Breakfast: '🍳 Breakfast', Koffie: '☕ Koffie', Specials: '✨ Specials', Thee: '🫖 Thee', Panino: '🥪 Panino', Salades: '🥗 Salades' },
    products: {
      1:{name:'Espresso',desc:'Krachtig & puur'}, 2:{name:'Espresso Macchiato',desc:'Espresso met een dot melkschuim'},
      3:{name:'Americano',desc:'Espresso aangelengd met heet water'}, 4:{name:'Filter Coffee',desc:'Zacht & lang'},
      5:{name:'Cappuccino',desc:'Espresso met romig melkschuim'}, 6:{name:'Latte Macchiato',desc:'Gelaagd melk & espresso'},
      7:{name:'Flat White',desc:'Dubbel shot, weinig melk'}, 8:{name:'Cacao Latte',desc:'Espresso met cacao & romige melk'},
      9:{name:'Hot Chocolate',desc:'Rijke warme chocolade'}, 10:{name:'Hot Chocolate with Cream',desc:'Warme chocolade met slagroom'},
      11:{name:'Chai Latte',desc:'Warm & kruidig'}, 12:{name:'Matcha Latte',desc:'Premium matcha met oatmilk'},
      13:{name:'Hot Ginger Lemonade',desc:'Verse gember met citroen'}, 14:{name:'Green Tea',desc:'Licht & fris'},
      15:{name:'Black Tea',desc:'Klassiek & krachtig'}, 16:{name:'Cheese Chicken Wrap',desc:'Wrap met kaas & kip'},
      17:{name:'Truffle Sandwich',desc:'Gegrild broodje met truffel'}, 18:{name:'Falafel Wrap',desc:'Vegetarische wrap met falafel'},
      19:{name:'Iberian Sandwich',desc:'Gegrild broodje met Iberisch vlees'}, 20:{name:'Cheese Salmon',desc:'Wrap met zalm & roomkaas'},
      21:{name:'Chicken Avocado Brie',desc:'Kip, avocado & brie'}, 22:{name:'Avocado Salmon Bagel',desc:'Bagel met avocado & gerookte zalm'},
      23:{name:'Mustard Tuna',desc:'Tonijn met mosterd & verse groenten'}, 24:{name:'Salade naar keuze',desc:'1 of 2 bases met 4 ingrediënten'},
      25:{name:'Power Yoghurt Bowl',desc:'Griekse yoghurt, granola, bessen, chiazaad & honing'},
      26:{name:'Overnight Oats Cup',desc:'Havermout, amandelmelk, banaan, kaneel & pindakaas'},
      27:{name:'Mini Breakfast Box',desc:'Bananenbrood, gekookt ei, yoghurt, fruit & noten'},
      28:{name:'Breakfast Wrap To Go',desc:'Volkoren wrap, roerei, avocado, spinazie & kaas'},
      29:{name:'The Protein Club',desc:'Volkoren casinobrood, hüttenkäse, gerookte kip & pesto'},
      30:{name:'The Fuel Bagel',desc:'Meergranen bagel, roomkaas, kip, rucola & zongedroogde tomaat'},
    },
  },
  en: {
    flag: '🇬🇧', lang: 'EN',
    yourOrder: 'Your order', basket: 'Basket', empty: 'Your basket is empty',
    pickupTime: 'Pickup time', note: 'Note', notePlaceholder: 'E.g. oat milk, extra hot...',
    placeOrder: 'Place order →', total: 'Total', timeError: '⚠ Please select a pickup time to continue.',
    successTitle: 'Order placed!', successMsg: (time) => `Your <strong>Flow moment</strong> will be ready at <strong>${time}</strong>.`,
    successSub: 'See you tomorrow! ✨', placing: 'Placing...',
    bibleQuote: '"Do not worry about tomorrow, for tomorrow will worry about itself."',
    footerLine1: 'Easily order your breakfast for tomorrow!', footerLine2: 'Coffee and Breakfast to Flow!',
    categories: { Breakfast: '🍳 Breakfast', Koffie: '☕ Coffee', Specials: '✨ Specials', Thee: '🫖 Tea', Panino: '🥪 Panino', Salades: '🥗 Salads' },
    products: {
      1:{name:'Espresso',desc:'Strong & pure'}, 2:{name:'Espresso Macchiato',desc:'Espresso with a dash of foam'},
      3:{name:'Americano',desc:'Espresso with hot water'}, 4:{name:'Filter Coffee',desc:'Smooth & long'},
      5:{name:'Cappuccino',desc:'Espresso with creamy milk foam'}, 6:{name:'Latte Macchiato',desc:'Layered milk & espresso'},
      7:{name:'Flat White',desc:'Double shot, less milk'}, 8:{name:'Cacao Latte',desc:'Espresso with cacao & creamy milk'},
      9:{name:'Hot Chocolate',desc:'Rich warm chocolate'}, 10:{name:'Hot Chocolate with Cream',desc:'Hot chocolate with whipped cream'},
      11:{name:'Chai Latte',desc:'Warm & spicy'}, 12:{name:'Matcha Latte',desc:'Premium matcha with oat milk'},
      13:{name:'Hot Ginger Lemonade',desc:'Fresh ginger with lemon'}, 14:{name:'Green Tea',desc:'Light & fresh'},
      15:{name:'Black Tea',desc:'Classic & strong'}, 16:{name:'Cheese Chicken Wrap',desc:'Wrap with cheese & chicken'},
      17:{name:'Truffle Sandwich',desc:'Grilled sandwich with truffle'}, 18:{name:'Falafel Wrap',desc:'Vegetarian wrap with falafel'},
      19:{name:'Iberian Sandwich',desc:'Grilled sandwich with Iberian meat'}, 20:{name:'Cheese Salmon',desc:'Wrap with salmon & cream cheese'},
      21:{name:'Chicken Avocado Brie',desc:'Chicken, avocado & brie'}, 22:{name:'Avocado Salmon Bagel',desc:'Bagel with avocado & smoked salmon'},
      23:{name:'Mustard Tuna',desc:'Tuna with mustard & fresh vegetables'}, 24:{name:'Salad of choice',desc:'1 or 2 bases with 4 ingredients'},
      25:{name:'Power Yoghurt Bowl',desc:'Greek yoghurt, granola, berries, chia seeds & honey'},
      26:{name:'Overnight Oats Cup',desc:'Oats, almond milk, banana, cinnamon & peanut butter'},
      27:{name:'Mini Breakfast Box',desc:'Banana bread, boiled egg, yoghurt, fruit & nuts'},
      28:{name:'Breakfast Wrap To Go',desc:'Whole wheat wrap, scrambled eggs, avocado, spinach & cheese'},
      29:{name:'The Protein Club',desc:'Whole wheat bread, cottage cheese, smoked chicken & pesto'},
      30:{name:'The Fuel Bagel',desc:'Multigrain bagel, cream cheese, chicken, rocket & sundried tomato'},
    },
  },
  de: {
    flag: '🇩🇪', lang: 'DE',
    yourOrder: 'Deine Bestellung', basket: 'Warenkorb', empty: 'Dein Warenkorb ist leer',
    pickupTime: 'Abholzeit', note: 'Anmerkung', notePlaceholder: 'z.B. Hafermilch, extra heiß...',
    placeOrder: 'Bestellen →', total: 'Gesamt', timeError: '⚠ Bitte wähle eine Abholzeit aus.',
    successTitle: 'Bestellung aufgegeben!', successMsg: (time) => `Dein <strong>Flow-Moment</strong> ist um <strong>${time}</strong> bereit.`,
    successSub: 'Bis morgen! ✨', placing: 'Wird gesendet...',
    bibleQuote: '"Macht euch keine Sorgen um den morgigen Tag, denn der morgige Tag wird für sich selbst sorgen."',
    footerLine1: 'Bestell jetzt ganz einfach dein Frühstück für morgen!', footerLine2: 'Coffee and Breakfast to Flow!',
    categories: { Breakfast: '🍳 Frühstück', Koffie: '☕ Kaffee', Specials: '✨ Specials', Thee: '🫖 Tee', Panino: '🥪 Panino', Salades: '🥗 Salate' },
    products: {
      1:{name:'Espresso',desc:'Kräftig & pur'}, 2:{name:'Espresso Macchiato',desc:'Espresso mit einem Hauch Milchschaum'},
      3:{name:'Americano',desc:'Espresso mit heißem Wasser'}, 4:{name:'Filterkaffee',desc:'Mild & lang'},
      5:{name:'Cappuccino',desc:'Espresso mit cremigem Milchschaum'}, 6:{name:'Latte Macchiato',desc:'Geschichtete Milch & Espresso'},
      7:{name:'Flat White',desc:'Doppelter Espresso, wenig Milch'}, 8:{name:'Kakao Latte',desc:'Espresso mit Kakao & cremiger Milch'},
      9:{name:'Heiße Schokolade',desc:'Reichhaltige warme Schokolade'}, 10:{name:'Heiße Schokolade mit Sahne',desc:'Heiße Schokolade mit Schlagsahne'},
      11:{name:'Chai Latte',desc:'Warm & würzig'}, 12:{name:'Matcha Latte',desc:'Premium Matcha mit Hafermilch'},
      13:{name:'Heiße Ingwerlimonade',desc:'Frischer Ingwer mit Zitrone'}, 14:{name:'Grüner Tee',desc:'Leicht & frisch'},
      15:{name:'Schwarzer Tee',desc:'Klassisch & kräftig'}, 16:{name:'Käse-Hähnchen-Wrap',desc:'Wrap mit Käse & Hähnchen'},
      17:{name:'Trüffel-Sandwich',desc:'Gegrilltes Sandwich mit Trüffel'}, 18:{name:'Falafel-Wrap',desc:'Vegetarischer Wrap mit Falafel'},
      19:{name:'Iberisches Sandwich',desc:'Gegrilltes Sandwich mit iberischem Fleisch'}, 20:{name:'Käse-Lachs',desc:'Wrap mit Lachs & Frischkäse'},
      21:{name:'Hähnchen Avocado Brie',desc:'Hähnchen, Avocado & Brie'}, 22:{name:'Avocado-Lachs-Bagel',desc:'Bagel mit Avocado & Räucherlachs'},
      23:{name:'Senf-Thunfisch',desc:'Thunfisch mit Senf & frischem Gemüse'}, 24:{name:'Salat nach Wahl',desc:'1 oder 2 Basen mit 4 Zutaten'},
      25:{name:'Power Joghurt Bowl',desc:'Griechischer Joghurt, Granola, Beeren, Chiasamen & Honig'},
      26:{name:'Overnight Oats Cup',desc:'Haferflocken, Mandelmilch, Banane, Zimt & Erdnussbutter'},
      27:{name:'Mini Frühstücksbox',desc:'Bananenbrot, gekochtes Ei, Joghurt, Obst & Nüsse'},
      28:{name:'Frühstücks-Wrap To Go',desc:'Vollkornwrap, Rührei, Avocado, Spinat & Käse'},
      29:{name:'The Protein Club',desc:'Vollkornbrot, Hüttenkäse, Räucherhähnchen & Pesto'},
      30:{name:'The Fuel Bagel',desc:'Mehrkornbagel, Frischkäse, Hähnchen, Rucola & getrocknete Tomate'},
    },
  },
  tw: {
    flag: '🟡', lang: 'TW',
    yourOrder: 'Wat joe wilt hebben', basket: 'Mandje', empty: 'Der zit nog niks in. Dat komt good.',
    pickupTime: 'Wanneer kom ie?', note: 'Nog wat te zeggen?', notePlaceholder: 'Bijv. zonder melk, want dat verdraag ik nie zo good...',
    placeOrder: 'Bestelling doorgeven →', total: 'Bij mekaar', timeError: '⚠ Kies even wanneer ie komt, dan weet ik waar ik an toe bin.',
    successTitle: 'Geregeld!', successMsg: (time) => `Joen <strong>Flow-moment</strong> ligt klaar om <strong>${time}</strong>. En anders zeg ie 't maar.`,
    successSub: 'Tot morgen! ✨', placing: 'Even geduld...',
    bibleQuote: '"Maak die dan gien zorgen over morgen, want morgen zorgt morgen wel weer veur zuk zelf."',
    footerLine1: 'Bestel rustig joen ontbiet veur morgen.', footerLine2: 'Koffie en ontbiet, meer heb ie niet nodig.',
    categories: { Breakfast: '🍳 Ontbiet', Koffie: '☕ Koffie', Specials: '✨ Specials', Thee: '🫖 Tee', Panino: '🥪 Panino', Salades: '🥗 Slaatjes' },
    products: {
      1:{name:'Espresso',desc:"Klein, maar 't zegt genoeg"}, 2:{name:'Espresso Macchiato',desc:'Met een stipje melk, meer niet'},
      3:{name:'Americano',desc:'Iets meer water, iets minder haast'}, 4:{name:'Filter Koffie',desc:"Zoals oma 't zette. Goed zo."},
      5:{name:'Cappuccino',desc:'Met schuim. En dat mag.'}, 6:{name:'Latte Macchiato',desc:"Laagies, net as 't leven"},
      7:{name:'Flat White',desc:'Dubbel espresso, weinig fratsen'}, 8:{name:'Cacao Latte',desc:"Veur as ie 't verdient hedde"},
      9:{name:'Warme Chocola',desc:'Dik, warm en eerlijk'}, 10:{name:'Warme Chocola met Slagreem',desc:"Veur as ie 't nóg meer verdient hedde"},
      11:{name:'Chai Latte',desc:'Kruidig, warm, een bitje bijzonder'}, 12:{name:'Matcha Latte',desc:"Groen en goed veur ie, ze zegt 't zelf"},
      13:{name:'Warme Gember Limonade',desc:'Pittig, maar op een aardige manier'}, 14:{name:'Groene Tee',desc:'Licht en stil, net as een goede dag'},
      15:{name:'Zwarte Tee',desc:'Recht door zee, zonder poespas'}, 16:{name:'Kaas Kip Wrap',desc:'Stevige wrap, niks te klagen'},
      17:{name:'Truffel Broodje',desc:'Een bitje chique, maar dan van oons'}, 18:{name:'Falafel Wrap',desc:"Veur de mensen die 't anders doen"},
      19:{name:'Iberisch Broodje',desc:'Van ver komme, maar good ankommen'}, 20:{name:'Kaas Zalm',desc:'Zalm en roomkaas, samen sterker'},
      21:{name:'Kip Avocado Brie',desc:'Drie goede dingen op een broodje'}, 22:{name:'Avocado Zalm Bagel',desc:'Bagel met een goed gevoel'},
      23:{name:'Mosterd Tonijn',desc:'Pittig en eerlijk, net as oons Twente'}, 24:{name:'Slaatje naor keuze',desc:'1 of 2 bases, 4 dingen der op, zelf kiezen'},
      25:{name:'Power Yoghurt Bowl',desc:'Grieks yoghurtje met van alles der op'},
      26:{name:'Overnight Oats Cup',desc:'Al klaargemakt, just as oons'},
      27:{name:'Mini Ontbietdoosje',desc:'Alles erin wat ie veur de dag nodig hef'},
      28:{name:'Ontbiet Wrap To Go',desc:'Veur as ie nog onderweegs is'},
      29:{name:'The Protein Club',desc:'Veur as ie later nog ergens wil staan'},
      30:{name:'The Fuel Bagel',desc:'Brandstof veur een dag die der toe doet'},
    },
  },
};

// ─── LANGUAGE ───
let currentLang = 'nl';

function t() { return TRANSLATIONS[currentLang]; }

function setLang(lang) {
  currentLang = lang;
  renderLangSwitcher();
  renderNavTabs();
  renderMenu();
  updateCartFab();
  if (document.getElementById('cart-overlay')?.classList.contains('open')) {
    renderCartModal();
  }
  document.getElementById('modal-title') && (document.getElementById('modal-title').textContent = t().yourOrder);
}

function renderLangSwitcher() {
  const el = document.getElementById('lang-switcher');
  if (!el) return;
  el.innerHTML = Object.entries(TRANSLATIONS).map(([code, tr]) => `
    <button class="lang-btn ${code === currentLang ? 'active' : ''}" onclick="setLang('${code}')">
      <span>${tr.flag}</span> <span>${tr.lang}</span>
    </button>
  `).join('');
}

function renderHeroQuote() {
  const el = document.getElementById('hero-quote');
  if (el) el.innerHTML = t().bibleQuote;
}

function renderNavTabs() {
  const nav = document.getElementById('nav-tabs');
  if (!nav) return;
  const categories = ['Breakfast', 'Koffie', 'Specials', 'Thee', 'Panino', 'Salades'];
  const activeCategory = nav.querySelector('.nav-tab.active')?.dataset.category || 'Breakfast';
  nav.innerHTML = categories.map(cat => `
    <button class="nav-tab ${cat === activeCategory ? 'active' : ''}" data-category="${cat}">${t().categories[cat]}</button>
  `).join('');
  nav.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      nav.querySelectorAll('.nav-tab').forEach(tb => tb.classList.remove('active'));
      tab.classList.add('active');
      renderMenu();
    });
  });
}

// ─── DEFAULT MENU DATA ───
const DEFAULT_MENU = [
  // Koffie
  { id: 1, category: 'Koffie', name: 'Espresso', desc: 'Krachtig & puur', price: 1.80, emoji: '☕', img: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400&q=80' },
  { id: 2, category: 'Koffie', name: 'Espresso Macchiato', desc: 'Espresso met een dot melkschuim', price: 2.00, emoji: '☕', img: 'https://images.unsplash.com/photo-1485808191679-5f86510bd9d4?w=400&q=80' },
  { id: 3, category: 'Koffie', name: 'Americano', desc: 'Espresso aangelengd met heet water', price: 2.30, emoji: '☕', img: 'https://images.unsplash.com/photo-1497515114629-f71d768fd07c?w=400&q=80' },
  { id: 4, category: 'Koffie', name: 'Filter Coffee', desc: 'Zacht & lang', price: 2.80, emoji: '☕', img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80' },
  { id: 5, category: 'Koffie', name: 'Cappuccino', desc: 'Espresso met romig melkschuim', price: 2.50, emoji: '☕', img: 'https://images.unsplash.com/photo-1561047029-3000c68339ca?w=400&q=80' },
  { id: 6, category: 'Koffie', name: 'Latte Macchiato', desc: 'Gelaagd melk & espresso', price: 2.50, emoji: '🥛', img: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&q=80' },
  { id: 7, category: 'Koffie', name: 'Flat White', desc: 'Dubbel shot, weinig melk', price: 3.00, emoji: '☕', img: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?w=400&q=80' },
  { id: 8, category: 'Koffie', name: 'Cacao Latte', desc: 'Espresso met cacao & romige melk', price: 3.10, emoji: '🍫', img: 'https://images.unsplash.com/photo-1542990253-a781e5585b38?w=400&q=80' },
  // Specials
  { id: 9, category: 'Specials', name: 'Hot Chocolate', desc: 'Rijke warme chocolade', price: 4.40, emoji: '🍫', img: 'https://images.unsplash.com/photo-1542736667-069246bdbc6d?w=400&q=80' },
  { id: 10, category: 'Specials', name: 'Hot Chocolate with Cream', desc: 'Warme chocolade met slagroom', price: 5.40, emoji: '🍫', img: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=400&q=80' },
  { id: 11, category: 'Specials', name: 'Chai Latte', desc: 'Warm & kruidig', price: 3.50, emoji: '🫖', img: 'https://images.unsplash.com/photo-1557006021-b85faa2bc5e2?w=400&q=80' },
  { id: 12, category: 'Specials', name: 'Matcha Latte', desc: 'Premium matcha met oatmilk', price: 3.50, emoji: '🍵', img: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=400&q=80' },
  { id: 13, category: 'Specials', name: 'Hot Ginger Lemonade', desc: 'Verse gember met citroen', price: 3.70, emoji: '🍋', img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80' },
  // Thee
  { id: 14, category: 'Thee', name: 'Green Tea', desc: 'Licht & fris', price: 2.50, emoji: '🍵', img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80' },
  { id: 15, category: 'Thee', name: 'Black Tea', desc: 'Klassiek & krachtig', price: 2.50, emoji: '🫖', img: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&q=80' },
  // Panino
  { id: 16, category: 'Panino', name: 'Cheese Chicken Wrap', desc: 'Wrap met kaas & kip', price: 10.90, emoji: '🌯', img: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&q=80' },
  { id: 17, category: 'Panino', name: 'Truffle Sandwich', desc: 'Gegrild broodje met truffel', price: 10.90, emoji: '🥪', img: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=80' },
  { id: 18, category: 'Panino', name: 'Falafel Wrap', desc: 'Vegetarische wrap met falafel', price: 10.90, emoji: '🌯', img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80' },
  { id: 19, category: 'Panino', name: 'Iberian Sandwich', desc: 'Gegrild broodje met Iberisch vlees', price: 10.90, emoji: '🥪', img: 'https://images.unsplash.com/photo-1553909489-cd47e0907980?w=400&q=80' },
  { id: 20, category: 'Panino', name: 'Cheese Salmon', desc: 'Wrap met zalm & roomkaas', price: 10.90, emoji: '🌯', img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&q=80' },
  { id: 21, category: 'Panino', name: 'Chicken Avocado Brie', desc: 'Kip, avocado & brie', price: 10.90, emoji: '🥪', img: 'https://images.unsplash.com/photo-1481070555726-e2fe8357725b?w=400&q=80' },
  { id: 22, category: 'Panino', name: 'Avocado Salmon Bagel', desc: 'Bagel met avocado & gerookte zalm', price: 10.90, emoji: '🥯', img: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=400&q=80' },
  { id: 23, category: 'Panino', name: 'Mustard Tuna', desc: 'Tonijn met mosterd & verse groenten', price: 10.90, emoji: '🥪', img: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=400&q=80' },
  // Salades
  { id: 24, category: 'Salades', name: 'Salade naar keuze', desc: '1 of 2 bases met 4 ingrediënten', price: 11.80, emoji: '🥗', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80' },
  // Breakfast
  { id: 25, category: 'Breakfast', name: 'Power Yoghurt Bowl', desc: 'Griekse yoghurt, granola, bessen, chiazaad & honing', price: 8.50, emoji: '🥣', img: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&q=80' },
  { id: 26, category: 'Breakfast', name: 'Overnight Oats Cup', desc: 'Havermout, amandelmelk, banaan, kaneel & pindakaas', price: 7.95, emoji: '🫙', img: 'https://images.unsplash.com/photo-1517673408408-2e3e5e9e0e17?w=400&q=80' },
  { id: 27, category: 'Breakfast', name: 'Mini Breakfast Box', desc: 'Bananenbrood, gekookt ei, yoghurt, fruit & noten', price: 9.50, emoji: '📦', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80' },
  { id: 28, category: 'Breakfast', name: 'Breakfast Wrap To Go', desc: 'Volkoren wrap, roerei, avocado, spinazie & kaas', price: 8.95, emoji: '🌯', img: 'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=400&q=80' },
  { id: 29, category: 'Breakfast', name: 'The Protein Club', desc: 'Volkoren casinobrood, hüttenkäse, gerookte kip & pesto', price: 9.50, emoji: '🥪', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80' },
  { id: 30, category: 'Breakfast', name: 'The Fuel Bagel', desc: 'Meergranen bagel, roomkaas, kip, rucola & zongedroogde tomaat', price: 8.95, emoji: '🥯', img: 'https://images.unsplash.com/photo-1585325701956-60dd9c8553bc?w=400&q=80' },
];

const CATEGORIES = ['Koffie', 'Specials', 'Thee', 'Panino', 'Salades', 'Breakfast'];

// ─── FIREBASE ───
const DB_URL = 'https://flow-coffeebar-default-rtdb.europe-west1.firebasedatabase.app';

async function fbGet(path) {
  const res = await fetch(`${DB_URL}/${path}.json`);
  return res.ok ? res.json() : null;
}

async function fbPush(path, data) {
  const res = await fetch(`${DB_URL}/${path}.json`, {
    method: 'POST',
    body: JSON.stringify(data),
  });
  return res.json();
}

async function fbPatch(path, data) {
  await fetch(`${DB_URL}/${path}.json`, {
    method: 'PATCH',
    body: JSON.stringify(data),
  });
}

async function fbDelete(path) {
  await fetch(`${DB_URL}/${path}.json`, { method: 'DELETE' });
}

function fbListen(path, callback) {
  const es = new EventSource(`${DB_URL}/${path}.json?accept=text/event-stream`);
  es.addEventListener('put', e => {
    const { data } = JSON.parse(e.data);
    callback(data);
  });
  es.addEventListener('patch', e => {
    callback(null);
  });
  return es;
}

// ─── MENU (localStorage) ───
function getMenu() {
  try {
    const stored = localStorage.getItem('flow_menu');
    return stored ? JSON.parse(stored) : DEFAULT_MENU;
  } catch(e) {
    localStorage.removeItem('flow_menu');
    return DEFAULT_MENU;
  }
}

function saveMenu(menu) {
  localStorage.setItem('flow_menu', JSON.stringify(menu));
}

// ─── ORDERS (Firebase) ───
async function getOrders() {
  const data = await fbGet('orders');
  if (!data) return [];
  return Object.entries(data).map(([fbKey, order]) => ({ ...order, fbKey }));
}

async function pushOrder(order) {
  return fbPush('orders', order);
}

async function updateOrderInDb(fbKey, fields) {
  return fbPatch(`orders/${fbKey}`, fields);
}

async function deleteOrderFromDb(fbKey) {
  return fbDelete(`orders/${fbKey}`);
}

// ─── CART STATE ───
let cart = [];

function getTableNumber() { return ''; }

// ─── RENDER MENUKAART ───
function renderMenu() {
  const menu = getMenu();
  const container = document.getElementById('menu-container');
  if (!container) return;

  const nav = document.getElementById('nav-tabs');
  const activeCategory = nav?.querySelector('.nav-tab.active')?.dataset.category || 'Breakfast';
  const items = menu.filter(i => i.category === activeCategory && i.available !== false && i.img);
  const tr = t();

  container.innerHTML = `
    <div class="menu-section">
      <h2 class="section-title">${tr.categories[activeCategory]}</h2>
      <div class="menu-grid">
        ${items.map(item => {
          const p = tr.products[item.id] || { name: item.name, desc: item.desc };
          return `
          <div class="menu-item" onclick="addToCart(${item.id})">
            <div class="menu-item-img-wrap">
              <img class="menu-item-img" src="${item.img}" alt="${p.name}"
                onerror="this.closest('.menu-item').style.display='none'">
            </div>
            <div class="menu-item-body">
              <div class="menu-item-name">${p.name}</div>
              <div class="menu-item-desc">${p.desc}</div>
              <div class="menu-item-footer">
                <span class="menu-item-price">€ ${item.price.toFixed(2)}</span>
                <button class="menu-item-add" onclick="event.stopPropagation(); addToCart(${item.id})">+</button>
              </div>
            </div>
          </div>`;
        }).join('')}
      </div>
    </div>
    <footer class="footer-text">
      <p class="hero-sub">${tr.footerLine1}<br><strong>${tr.footerLine2}</strong></p>
    </footer>
  `;
}

function addToCart(id) {
  const menu = getMenu();
  const item = menu.find(i => i.id === id);
  if (!item) return;
  const existing = cart.find(c => c.id === id);
  if (existing) existing.qty++;
  else cart.push({ ...item, qty: 1 });
  updateCartFab();
  showCartFeedback();
}

function showCartFeedback() {
  const fab = document.getElementById('cart-fab');
  if (!fab) return;
  const isMobile = window.innerWidth <= 640;
  fab.style.transform = isMobile ? 'scale(1.06)' : 'translateX(-50%) scale(1.06)';
  setTimeout(() => fab.style.transform = isMobile ? '' : 'translateX(-50%)', 150);
}

function updateCartFab() {
  const fab = document.getElementById('cart-fab');
  const count = document.getElementById('cart-count');
  const total = document.getElementById('cart-total-fab');
  const label = document.getElementById('cart-fab-label');
  if (!fab) return;
  const totalQty = cart.reduce((s, i) => s + i.qty, 0);
  const totalPrice = cart.reduce((s, i) => s + i.price * i.qty, 0);
  if (label) label.textContent = t().basket;
  if (totalQty === 0) {
    fab.classList.add('hidden');
  } else {
    fab.classList.remove('hidden');
    count.textContent = totalQty;
    total.textContent = `€ ${totalPrice.toFixed(2)}`;
  }
}

function openCart() {
  document.getElementById('cart-overlay').classList.add('open');
  renderCartModal();
}

function closeCart() {
  document.getElementById('cart-overlay').classList.remove('open');
}

function renderCartModal() {
  const body = document.getElementById('cart-body');
  if (!body) return;
  const tr = t();

  if (cart.length === 0) {
    body.innerHTML = `<div style="text-align:center;padding:40px;color:var(--text-light)">
      <span style="font-size:2.5rem">🛒</span><br><br>${tr.empty}
    </div>`;
    return;
  }

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  body.innerHTML = `
    ${cart.map(item => {
      const p = tr.products[item.id] || { name: item.name };
      return `
      <div class="cart-item">
        <div class="cart-item-thumb">
          ${item.img
            ? `<img src="${item.img}" alt="${p.name}" onerror="this.parentElement.textContent='${item.emoji}'">`
            : item.emoji}
        </div>
        <div class="cart-item-info">
          <div class="cart-item-name">${p.name}</div>
          <div class="cart-item-price">€ ${(item.price * item.qty).toFixed(2)}</div>
        </div>
        <div class="qty-control">
          <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
        </div>
      </div>`;
    }).join('')}
    <div class="cart-total">
      <span>${tr.total}</span>
      <span>€ ${total.toFixed(2)}</span>
    </div>
    <div class="order-note">
      <label>${tr.pickupTime}</label>
      <div class="time-slots">
        ${['07:30','08:00','08:30','09:00','09:30'].map(time => `
          <button class="time-slot" onclick="selectTime(this, '${time}')">${time}</button>
        `).join('')}
      </div>
      <div id="time-error" style="display:none;margin-top:8px;color:var(--danger);font-size:0.85rem;font-weight:500">
        ${tr.timeError}
      </div>
    </div>
    <div class="order-note">
      <label>${tr.note}</label>
      <textarea id="order-note" rows="3" placeholder="${tr.notePlaceholder}"></textarea>
    </div>
    <button class="btn btn-primary btn-full" style="margin-top:16px" onclick="placeOrder()">
      ${tr.placeOrder}
    </button>
  `;
}

function changeQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(c => c.id !== id);
  updateCartFab();
  renderCartModal();
}

function selectTime(btn, time) {
  document.querySelectorAll('.time-slot').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const err = document.getElementById('time-error');
  if (err) err.style.display = 'none';
}

async function placeOrder() {
  if (cart.length === 0) return;
  const tr = t();

  const btn = document.querySelector('#cart-body .btn-primary');
  if (btn) { btn.disabled = true; btn.textContent = tr.placing; }

  const note = document.getElementById('order-note')?.value || '';
  const pickupTime = document.querySelector('.time-slot.active')?.textContent || '';

  if (!pickupTime) {
    const err = document.getElementById('time-error');
    if (err) {
      err.style.display = 'block';
      err.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    const btn = document.querySelector('#cart-body .btn-primary');
    if (btn) { btn.disabled = false; btn.textContent = tr.placeOrder; }
    return;
  }

  const order = {
    items: cart.map(i => ({ id: i.id, name: i.name, emoji: i.emoji, price: i.price, qty: i.qty })),
    note,
    pickupTime,
    status: 'new',
    time: new Date().toISOString(),
    total: cart.reduce((s, i) => s + i.price * i.qty, 0),
  };

  await pushOrder(order);

  cart = [];
  updateCartFab();

  document.getElementById('cart-body').innerHTML = `
    <div class="order-success">
      <span class="big-emoji">☕</span>
      <h2>${tr.successTitle}</h2>
      <p>${tr.successMsg(order.pickupTime)}</p>
      <p style="margin-top:8px;font-size:0.85rem;color:var(--text-light)">${tr.successSub}</p>
    </div>
  `;

  setTimeout(() => closeCart(), 3000);
}

// ─── KITCHEN ───
function renderKitchen(orders) {
  const container = document.getElementById('kitchen-container');
  if (!container) return;

  const active = orders.filter(o => o.status !== 'done');

  if (active.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <span class="big-emoji">☕</span>
        <p>Geen openstaande bestellingen</p>
      </div>`;
    return;
  }

  container.innerHTML = `<div class="kitchen-grid">
    ${active.map(order => {
      const elapsed = Math.floor((Date.now() - new Date(order.time)) / 60000);
      return `
        <div class="order-card ${order.status === 'new' ? 'new' : ''} ${order.status === 'ready' ? 'ready' : ''}">
          <div class="order-card-header">
            <span class="order-table">🕐 ${order.pickupTime || '—'}</span>
            <div style="display:flex;align-items:center;gap:8px">
              <span class="status-badge status-${order.status}">${statusLabel(order.status)}</span>
              <span class="order-time">${elapsed}m geleden</span>
            </div>
          </div>
          <ul class="order-items-list">
            ${order.items.map(i => `<li><span>${i.emoji} ${i.name}</span><span>x${i.qty}</span></li>`).join('')}
          </ul>
          ${order.note ? `<div class="order-note-text">📝 ${order.note}</div>` : ''}
          <div class="order-actions">
            ${order.status === 'new' ? `<button class="btn btn-warning btn-sm" onclick="updateOrderStatus('${order.fbKey}', 'making')">🔄 Wordt gemaakt</button>` : ''}
            ${order.status === 'making' ? `<button class="btn btn-success btn-sm" onclick="updateOrderStatus('${order.fbKey}', 'ready')">✓ Klaar</button>` : ''}
            ${order.status === 'ready' ? `<button class="btn btn-sm" onclick="updateOrderStatus('${order.fbKey}', 'done')" style="background:var(--border)">Afgeleverd</button>` : ''}
          </div>
        </div>`;
    }).join('')}
  </div>`;
}

function statusLabel(s) {
  return { new: 'Nieuw', making: 'Bezig', ready: 'Klaar', done: 'Afgeleverd' }[s] || s;
}

async function updateOrderStatus(fbKey, status) {
  await updateOrderInDb(fbKey, { status });
}

// ─── ADMIN ───
function renderAdminProducts() {
  const container = document.getElementById('admin-main');
  if (!container) return;
  const menu = getMenu();

  container.innerHTML = `
    <div class="admin-section-title">Menu beheren</div>
    <div style="margin-bottom:20px">
      <button class="btn btn-primary" onclick="showAddForm()">+ Product toevoegen</button>
    </div>
    <div id="product-form-area"></div>
    <div class="product-list">
      ${menu.map(item => `
        <div class="product-row">
          <span class="product-row-emoji">${item.emoji}</span>
          <div class="product-row-info">
            <div class="product-row-name">${item.name}</div>
            <div class="product-row-cat">${item.category}${item.available === false ? ' · <span style="color:var(--danger)">Uit</span>' : ''}</div>
          </div>
          <span class="product-row-price">€ ${item.price.toFixed(2)}</span>
          <button class="btn-icon" onclick="editProduct(${item.id})">✏️</button>
          <button class="btn-icon danger" onclick="toggleAvailable(${item.id})">${item.available === false ? '✅' : '🚫'}</button>
          <button class="btn-icon danger" onclick="deleteProduct(${item.id})">🗑️</button>
        </div>
      `).join('')}
    </div>
  `;
}

function showAddForm(existing) {
  const area = document.getElementById('product-form-area');
  if (!area) return;
  const item = existing || { emoji: '☕', name: '', desc: '', price: '', category: 'Koffie', img: '' };

  area.innerHTML = `
    <div class="form-card" style="margin-bottom:24px">
      <h3 style="margin-bottom:20px;font-size:1.1rem">${existing ? 'Product bewerken' : 'Nieuw product'}</h3>
      <div class="form-row">
        <div class="form-group">
          <label>Emoji</label>
          <input id="f-emoji" value="${item.emoji}" maxlength="2">
        </div>
        <div class="form-group">
          <label>Categorie</label>
          <select id="f-cat">
            ${CATEGORIES.map(c => `<option ${c === item.category ? 'selected' : ''}>${c}</option>`).join('')}
          </select>
        </div>
      </div>
      <div class="form-group">
        <label>Naam</label>
        <input id="f-name" value="${item.name}" placeholder="bijv. Oat Cappuccino">
      </div>
      <div class="form-group">
        <label>Beschrijving</label>
        <input id="f-desc" value="${item.desc}" placeholder="korte omschrijving">
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>Prijs (€)</label>
          <input id="f-price" type="number" step="0.1" min="0" value="${item.price}" placeholder="3.50">
        </div>
        <div class="form-group">
          <label>Foto URL</label>
          <input id="f-img" value="${item.img || ''}" placeholder="https://...">
        </div>
      </div>
      <div style="display:flex;gap:12px;margin-top:8px">
        <button class="btn btn-primary" onclick="saveProduct(${existing ? existing.id : 'null'})">
          ${existing ? 'Opslaan' : 'Toevoegen'}
        </button>
        <button class="btn btn-outline" onclick="cancelForm()">Annuleren</button>
      </div>
    </div>
  `;
}

function cancelForm() {
  const area = document.getElementById('product-form-area');
  if (area) area.innerHTML = '';
}

function saveProduct(id) {
  const emoji = document.getElementById('f-emoji').value.trim() || '☕';
  const name = document.getElementById('f-name').value.trim();
  const desc = document.getElementById('f-desc').value.trim();
  const price = parseFloat(document.getElementById('f-price').value);
  const category = document.getElementById('f-cat').value;
  const img = document.getElementById('f-img').value.trim();

  if (!name || isNaN(price)) { alert('Vul naam en prijs in.'); return; }

  const menu = getMenu();
  if (id) {
    const item = menu.find(i => i.id === id);
    if (item) Object.assign(item, { emoji, name, desc, price, category, img });
  } else {
    const newId = Math.max(...menu.map(i => i.id), 0) + 1;
    menu.push({ id: newId, emoji, name, desc, price, category, img });
  }
  saveMenu(menu);
  renderAdminProducts();
}

function editProduct(id) {
  const item = getMenu().find(i => i.id === id);
  if (item) showAddForm(item);
  document.getElementById('product-form-area')?.scrollIntoView({ behavior: 'smooth' });
}

function toggleAvailable(id) {
  const menu = getMenu();
  const item = menu.find(i => i.id === id);
  if (item) { item.available = item.available === false ? true : false; saveMenu(menu); renderAdminProducts(); }
}

function deleteProduct(id) {
  if (!confirm('Weet je zeker dat je dit product wil verwijderen?')) return;
  saveMenu(getMenu().filter(i => i.id !== id));
  renderAdminProducts();
}

async function renderAdminOrders() {
  const container = document.getElementById('admin-main');
  if (!container) return;
  container.innerHTML = `<div class="admin-section-title">Bestellingen</div><p style="color:var(--text-light)">Laden...</p>`;

  const orders = await getOrders();
  const total = orders.reduce((s, o) => s + o.total, 0);
  const today = orders.filter(o => new Date(o.time).toDateString() === new Date().toDateString());
  const todayTotal = today.reduce((s, o) => s + o.total, 0);
  const grouped = orders.slice().reverse();

  container.innerHTML = `
    <div class="admin-section-title">Bestellingen</div>
    <div style="display:flex;gap:16px;margin-bottom:24px;flex-wrap:wrap">
      <div class="form-card" style="flex:1;min-width:140px;padding:16px 20px">
        <div style="font-size:0.8rem;color:var(--text-light)">Vandaag</div>
        <div style="font-size:1.4rem;font-weight:700;color:var(--primary)">€ ${todayTotal.toFixed(2)}</div>
        <div style="font-size:0.8rem;color:var(--text-light)">${today.length} bestellingen</div>
      </div>
      <div class="form-card" style="flex:1;min-width:140px;padding:16px 20px">
        <div style="font-size:0.8rem;color:var(--text-light)">Totaal ooit</div>
        <div style="font-size:1.4rem;font-weight:700;color:var(--primary)">€ ${total.toFixed(2)}</div>
        <div style="font-size:0.8rem;color:var(--text-light)">${orders.length} bestellingen</div>
      </div>
      <div style="display:flex;align-items:center">
        <button class="btn btn-outline btn-sm" onclick="clearAllOrders()">🗑️ Wis alles</button>
      </div>
    </div>
    ${grouped.length === 0
      ? '<div class="empty-state"><span class="big-emoji">📋</span><p>Nog geen bestellingen</p></div>'
      : grouped.map(o => `
        <div class="product-row" style="flex-wrap:wrap;gap:8px;margin-bottom:8px">
          <div style="flex:1;font-size:0.85rem;color:var(--text-light)">${o.items.map(i => `${i.emoji} ${i.name} x${i.qty}`).join(', ')}</div>
          <div style="color:var(--primary);font-weight:600">€ ${o.total.toFixed(2)}</div>
          <span class="status-badge status-${o.status}">${statusLabel(o.status)}</span>
          <div style="font-size:0.75rem;color:var(--text-light)">${new Date(o.time).toLocaleTimeString('nl-BE', {hour:'2-digit',minute:'2-digit'})}</div>
        </div>`).join('')
    }
  `;
}

async function clearAllOrders() {
  if (!confirm('Wis alle bestellingen?')) return;
  await fbDelete('orders');
  renderAdminOrders();
}

function renderAdminQR() {
  const container = document.getElementById('admin-main');
  if (!container) return;
  const menuUrl = window.location.href.replace('admin.html', 'index.html');

  container.innerHTML = `
    <div class="admin-section-title">Menukaart link</div>
    <p style="color:var(--text-light);margin-bottom:24px;font-size:0.9rem">Deel deze link met je klanten.</p>
    <div class="form-card" style="max-width:480px">
      <div style="font-size:0.82rem;word-break:break-all;color:var(--text-mid);margin-bottom:16px;padding:12px;background:var(--bg-soft);border-radius:8px">${menuUrl}</div>
      <button class="btn btn-primary" onclick="copyLink('${menuUrl}')">Kopieer link</button>
    </div>
  `;
}

function copyLink(url) {
  navigator.clipboard.writeText(url).then(() => alert('Link gekopieerd!'));
}

// ─── INIT ───
document.addEventListener('DOMContentLoaded', () => {

  // ── Menukaart ──
  if (document.getElementById('menu-container')) {
    try {
      renderLangSwitcher();
      renderNavTabs();
      renderMenu();
    } catch(e) {
      document.getElementById('menu-container').innerHTML =
        '<div style="padding:40px;color:red;font-family:monospace">FOUT: ' + e.message + '</div>';
    }

    document.getElementById('cart-overlay')?.addEventListener('click', e => {
      if (e.target === e.currentTarget) closeCart();
    });

    // ── Welkom pop-up ──
    const overlay = document.createElement('div');
    overlay.className = 'welcome-overlay';
    overlay.innerHTML = `
      <div class="welcome-card">
        <div class="welcome-logo">
          <div class="script">flow</div>
          <div class="welcome-sub">Coffeebar</div>
        </div>
        <p class="welcome-tagline">Meer dan koffie alleen.</p>
        <p class="welcome-text">De plek waar je mag landen, jezelf kunt zijn en gezien wordt.</p>
        <button class="welcome-btn">Klik hier om door te gaan</button>
      </div>
    `;
    document.body.appendChild(overlay);
    overlay.querySelector('.welcome-btn').addEventListener('click', function() {
      overlay.style.display = 'none';
    });
  }

  // ── Kitchen display ──
  if (document.getElementById('kitchen-container')) {
    fbListen('orders', () => {
      getOrders().then(orders => renderKitchen(orders));
    });
    getOrders().then(orders => renderKitchen(orders));
  }

  // ── Admin ──
  if (document.getElementById('admin-main')) {
    renderAdminProducts();

    document.querySelectorAll('.admin-nav-item').forEach(item => {
      item.addEventListener('click', () => {
        document.querySelectorAll('.admin-nav-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        const section = item.dataset.section;
        if (section === 'products') renderAdminProducts();
        if (section === 'orders') renderAdminOrders();
        if (section === 'qr') renderAdminQR();
      });
    });
  }
});
