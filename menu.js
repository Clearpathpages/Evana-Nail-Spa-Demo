/* Evana Nail & Spa — bookable services.
   Categories, names, prices and durations (min) match the salon's live booking system
   (zBook, https://evananailspa.com/book-appointment/, checked Nov 23 2026).
   Descriptions are short summaries of https://evananailspa.com/services/.
   up: true = the services page lists the price as "& up".
   Group kinds: 'main' (services), 'addon' (optional extras shown in the add-on box). */

const ZIMG = 'https://envieposqastorage.blob.core.windows.net/zotastatic/categorypics/';

const MENU = [
  {
    id: 'mani-pedi', name: 'Mani & Pedi', icon: 'hand', img: ZIMG + 'ManiPediV2.png',
    blurb: 'Classic and gel manicures, pedicures and spa pedicure rituals.',
    groups: [
      { name: 'Manicures', items: [
        { id: 'basic-mani', name: 'Basic Mani', price: 23, min: 25, desc: 'Trim, shape, cuticle care, massage and polish.' },
        { id: 'gel-mani', name: 'Gel Mani', price: 33, min: 35 },
        { id: 'deluxe-mani', name: 'Deluxe Mani', price: 40, min: 30 }
      ] },
      { name: 'Pedicures', items: [
        { id: 'basic-pedi', name: 'Basic Pedi', price: 32, min: 35, desc: 'Trim, shape, cuticle care, callus, sugar exfoliation, massage, hot towel and polish.' },
        { id: 'crystal-jelly-pedi', name: 'Crystal Jelly Pedi', price: 45, min: 45, desc: 'Jelly soak, sugar scrub, callus, 5-minute massage, hot towel and polish.' },
        { id: 'gel-polish-pedi', name: 'Gel Polish Pedi', price: 48, min: 50 },
        { id: 'deluxe-hot-stone-pedi', name: 'Deluxe Hot Stone Pedi', price: 55, min: 50, desc: 'Sea salt soak, sugar scrub, mask, callus, 10-minute massage with hot stone.' },
        { id: 'organic-pedi', name: 'Organic Pedi', price: 68, min: 60, desc: 'Bath salt, sugar scrub, mud masque, steam, 15-minute massage, organic coconut oil, hot stone and spa paraffin.' },
        { id: 'golden-mystique-pedi', name: 'Golden Mystique Pedi', price: 75, min: 60, tag: 'Signature', desc: 'Red wine and bath salt soak, gold mask, renewal scrub, steam, 20-minute massage with golden cream and hot stone, and paraffin.' },
        { id: 'ultimate-pedi', name: 'Ultimate Pedi', price: 92, min: 60, tag: 'Most complete', desc: 'Bath salt, sugar scrub, mud masque, steam, 25-minute massage, organic coconut oil, hot stone and paraffin.' }
      ] },
      { name: 'Extra massage', kind: 'addon', items: [
        { id: 'massage-10', name: 'Extra massage, 10 min', price: 15, min: 10 },
        { id: 'massage-20', name: 'Extra massage, 20 min', price: 28, min: 20 },
        { id: 'massage-30', name: 'Extra massage, 30 min', price: 42, min: 30 }
      ] },
      { name: 'Polish & French', kind: 'addon', items: [
        { id: 'french', name: 'French', price: 8, min: 8 },
        { id: 'french-gel', name: 'French gel polish', price: 7, min: 10 },
        { id: 'french-gel-mani', name: 'French gel polish on mani', price: 8, min: 10 },
        { id: 'french-reg-mani', name: 'French regular polish on mani', price: 8, min: 15 },
        { id: 'add-gel-feet', name: 'Add gel polish, feet', price: 17, min: 10 },
        { id: 'shiny-buff', name: 'Shiny buff', price: 7, min: 10 }
      ] },
      { name: 'Care & removal', kind: 'addon', items: [
        { id: 'callus', name: 'Eliminate callus', price: 5, min: 5 },
        { id: 'paraffin-feet', name: 'Add paraffin', price: 15, min: 15 },
        { id: 'paraffin-hands', name: 'Add paraffin for hands', price: 15, min: 10 },
        { id: 'special-shape-natural', name: 'Special shape, natural nails', price: 5, min: 10 },
        { id: 'soak-off-gel', name: 'Soak off gel', price: 5, min: 10 },
        { id: 'soak-off-gel-feet', name: 'Soak off gel polish, feet', price: 3, min: 5 }
      ] }
    ]
  },
  {
    id: 'nail-enhancement', name: 'Nail Enhancement', icon: 'spark', img: ZIMG + 'FullSetFillInV2.png',
    blurb: 'Acrylic, ombre, liquid gel and Gel-X. Full sets and fills.',
    groups: [
      { name: 'Full sets', items: [
        { id: 'acrylic-full', name: 'Acrylic Full Set', price: 55, min: 90 },
        { id: 'acrylic-full-gp', name: 'Acrylic Full Set with gel polish', price: 55, min: 90 },
        { id: 'acrylic-white-tip', name: 'Acrylic White Tip Full Set', price: 58, min: 60 },
        { id: 'ombre-full', name: 'Ombre Full Set', price: 65, min: 90 },
        { id: 'liquid-gel-full', name: 'Liquid Gel Full Set', price: 60, min: 75, desc: 'Gel polish included.' },
        { id: 'gel-x', name: 'Gel-X', price: 60, min: 60 }
      ] },
      { name: 'Fills', items: [
        { id: 'acrylic-fill', name: 'Acrylic Fill', price: 45, min: 60 },
        { id: 'acrylic-fill-gp', name: 'Acrylic Fill with gel polish', price: 45, min: 60 },
        { id: 'ombre-fill', name: 'Ombre Fill', price: 55, min: 60 },
        { id: 'liquid-gel-fill', name: 'Liquid Gel Fill', price: 50, min: 60, desc: 'Gel polish included.' },
        { id: 'gel-x-refill', name: 'Gel-X Refill', price: 50, min: 55 }
      ] },
      { name: 'Shape & length', kind: 'addon', items: [
        { id: 'add-length', name: 'Add length', price: 5, min: 5, up: true },
        { id: 'cut-down', name: 'Cut down', price: 3, min: 10 },
        { id: 'fill-special-shape', name: 'Fill-in special shape', price: 5, min: 8 },
        { id: 'full-special-shape', name: 'Full set special shape', price: 10, min: 10 },
        { id: 'fill-cut-reshape', name: 'Fill, cut down & reshape', price: 10, min: 10 }
      ] },
      { name: 'Toes & polish', kind: 'addon', items: [
        { id: 'toe-tip', name: 'Toe tip', price: 8, min: 10 },
        { id: 'toe-tip-fill', name: 'Toe tip fill', price: 5, min: 10 },
        { id: 'toe-tip-fill-nail', name: 'Toe tip fill, per nail', price: 3, min: 10 },
        { id: 'gel-polish-hands', name: 'Gel polish for hands', price: 20, min: 20 }
      ] }
    ]
  },
  {
    id: 'dip-powder', name: 'Dip Powder', icon: 'drop', img: ZIMG + 'FillInV2.png',
    blurb: 'Classic, French and ombre dip powder.',
    groups: [
      { name: 'Dip powder', items: [
        { id: 'dip', name: 'Dip Powder', price: 43, min: 55 },
        { id: 'french-dip', name: 'French Dip Powder', price: 58, min: 60 },
        { id: 'ombre-dip', name: 'Ombre Dip Powder', price: 65, min: 75 }
      ] },
      { name: 'Dip powder add-ons', kind: 'addon', items: [
        { id: 'dip-tip', name: 'Add tip', price: 5, min: 8 },
        { id: 'dip-length', name: 'Add length', price: 5, min: 8, up: true },
        { id: 'dip-shape', name: 'Special shape', price: 7, min: 10 },
        { id: 'dip-soak', name: 'Soak off', price: 5, min: 10 },
        { id: 'dip-mani', name: 'Manicure', price: 10, min: 10 }
      ] }
    ]
  },
  {
    id: 'kids', name: 'Kid Services', icon: 'star', img: ZIMG + 'KidServiceV2.png',
    blurb: 'Manicures, pedicures and polish changes for kids 10 and under.',
    groups: [
      { name: 'For kids 10 & under', items: [
        { id: 'kids-mani', name: 'Kids Mani', price: 15, min: 25 },
        { id: 'kids-gel-mani', name: 'Kids Gel Mani', price: 28, min: 25 },
        { id: 'kids-pedi', name: 'Kids Pedi', price: 25, min: 40 },
        { id: 'kids-gel-pedi', name: 'Kids Gel Pedi', price: 40, min: 40 },
        { id: 'kids-pc-hand', name: 'Kids Polish Change, hands', price: 10, min: 15 },
        { id: 'kids-pc-toe', name: 'Kids Polish Change, toes', price: 12, min: 20 }
      ] }
    ]
  },
  {
    id: 'polish-removal', name: 'Polish Change & Removals', icon: 'brush', img: ZIMG + 'AdditionalServiceV2.png',
    blurb: 'Quick polish changes, and removal with or without a new service.',
    groups: [
      { name: 'Polish change', items: [
        { id: 'pc-reg-hand', name: 'Regular Polish, hands', price: 15, min: 20 },
        { id: 'pc-reg-feet', name: 'Regular Polish, feet', price: 20, min: 20 },
        { id: 'pc-gel-hand', name: 'Gel Polish, hands', price: 25, min: 30 },
        { id: 'pc-gel-feet', name: 'Gel Polish, feet', price: 30, min: 30 }
      ] },
      { name: 'Removal', items: [
        { id: 'rm-gel-dip-cont', name: 'Soak Off Gel / Dip', note: 'with a new service', price: 5, min: 15 },
        { id: 'rm-gel-dip', name: 'Soak Off Gel / Dip', note: 'removal only', price: 15, min: 10 },
        { id: 'rm-acrylic-cont', name: 'Soak Off Acrylic / Powder Gel', note: 'with a new service', price: 10, min: 15 },
        { id: 'rm-acrylic', name: 'Soak Off Acrylic / Powder Gel', note: 'removal only', price: 20, min: 15 },
        { id: 'rm-liquid-gel', name: 'Drill Down Liquid Gel', note: 'removal only', price: 20, min: 15 }
      ] }
    ]
  },
  {
    id: 'eyelash', name: 'Eyelash', icon: 'eye', img: ZIMG + 'EyelashV2.png',
    blurb: 'Tints, lifts, clusters and lash extensions.',
    groups: [
      { name: 'Tints & lifts', items: [
        { id: 'eyebrow-tint', name: 'Eyebrow Tint', price: 35, min: 20 },
        { id: 'eyelash-tint', name: 'Eyelash Tint', price: 28, min: 25 },
        { id: 'eyelash-lift', name: 'Eyelash Lift', price: 70, min: 50 },
        { id: 'eye-cluster', name: 'Eye Cluster', price: 35, min: 35 }
      ] },
      { name: 'Lash extensions', items: [
        { id: 'lash-individual', name: 'Individual Lash Extension', price: 150, min: 90 },
        { id: 'lash-refill', name: 'Lash Extension Refill', price: 60, min: 60, up: true },
        { id: 'lash-removal', name: 'Lash Extension Removal', price: 20, min: 20, up: true }
      ] }
    ]
  },
  {
    id: 'facial', name: 'Facial & Peels', icon: 'face', img: ZIMG + 'FacialV2.png',
    blurb: 'Facials from 45 to 70 minutes, plus masks and treatments.',
    groups: [
      { name: 'Facials', items: [
        { id: 'express-facial', name: 'Express Facial', price: 85, min: 45, desc: 'Cleansing, exfoliating mask and massage.' },
        { id: 'back-facial', name: 'Back Facial', price: 80, min: 45, desc: 'Back treatment with thermal mask and hot stone massage.' },
        { id: 'classic-facial', name: 'Classic Facial', price: 100, min: 60, desc: 'Cleansing, exfoliating mask, and head and shoulder massage.' },
        { id: 'deep-pore', name: 'Deep Pore Cleaning', price: 110, min: 60, desc: 'Classic facial plus extractions.' },
        { id: 'acne-facial', name: 'Acne Facial', price: 115, min: 70, desc: 'Includes the deep pore facial.' }
      ] },
      { name: 'Treatments', items: [
        { id: 'c-purefly', name: 'C Purefly', price: 35, min: 45 },
        { id: 'microderm-sweep', name: 'Microdermabrasion Sweep', price: 45, min: 45 },
        { id: 'anti-aging-mask', name: 'Anti Aging Mask', price: 45, min: 45 }
      ] }
    ]
  },
  {
    id: 'waxing', name: 'Waxing', icon: 'leaf', img: ZIMG + 'WaxingV2.png', compact: true,
    blurb: 'Face and body waxing.',
    groups: [
      { name: 'Face', items: [
        { id: 'wax-eyebrows', name: 'Eyebrows', price: 14, min: 15 },
        { id: 'wax-lip', name: 'Lip', price: 10, min: 15 },
        { id: 'wax-chin', name: 'Chin', price: 10, min: 15 },
        { id: 'wax-sideburn', name: 'Sideburns', price: 12, min: 15 },
        { id: 'wax-nose', name: 'Nose', price: 10, min: 15 },
        { id: 'wax-cheeks', name: 'Cheeks', price: 13, min: 15 },
        { id: 'wax-neck', name: 'Neck', price: 12, min: 15 },
        { id: 'wax-forehead', name: 'Forehead', price: 15, min: 15 },
        { id: 'wax-full-face', name: 'Full Face', price: 45, min: 40 }
      ] },
      { name: 'Arms & legs', items: [
        { id: 'wax-underarms', name: 'Underarms', price: 25, min: 40 },
        { id: 'wax-half-arms', name: 'Half Arms', price: 30, min: 40 },
        { id: 'wax-full-arms', name: 'Full Arms', price: 45, min: 40 },
        { id: 'wax-fingers', name: 'Fingers', price: 10, min: 40 },
        { id: 'wax-half-legs', name: 'Half Legs', price: 40, min: 40, up: true },
        { id: 'wax-full-legs', name: 'Full Legs', price: 60, min: 55, up: true },
        { id: 'wax-toes', name: 'Toes', price: 10, min: 40 }
      ] },
      { name: 'Body', items: [
        { id: 'wax-shoulders', name: 'Shoulders', price: 20, min: 40 },
        { id: 'wax-chest', name: 'Chest', price: 30, min: 40, up: true },
        { id: 'wax-half-back', name: 'Half Back', price: 40, min: 40, up: true },
        { id: 'wax-full-back', name: 'Full Back', price: 60, min: 50, up: true },
        { id: 'wax-abdomen', name: 'Abdomen', price: 20, min: 50, up: true },
        { id: 'wax-bikini', name: 'Bikini', price: 30, min: 50, up: true },
        { id: 'wax-brazilian', name: 'Brazilian', price: 50, min: 50, up: true },
        { id: 'wax-full-body', name: 'Full Body', price: 300, min: 90 }
      ] }
    ]
  }
];

/* Technicians as listed in the salon's booking system. */
const TECHS = ['Yili', 'Li', 'Angela', 'Michael', 'Lily', 'Steven', 'Wendy', 'Vivian'];

/* Opening hours, minutes after midnight, by weekday (0 = Sunday). */
const HOURS = { 0: [660, 1020], 1: [570, 1170], 2: [570, 1170], 3: [570, 1170], 4: [570, 1170], 5: [570, 1170], 6: [570, 1170] };

const ICONS = {
  leaf: '<path d="M5 19c0-8 5-14 15-14 0 10-6 15-14 15"/><path d="M5 19l8-8"/>',
  hand: '<path d="M7 11V5a1.5 1.5 0 0 1 3 0v5M10 10V4a1.5 1.5 0 0 1 3 0v6M13 10V5a1.5 1.5 0 0 1 3 0v6M16 11V8a1.5 1.5 0 0 1 3 0v6a7 7 0 0 1-7 7h-1a6 6 0 0 1-5-3l-2-4a1.5 1.5 0 0 1 2.5-1.5L7 14"/>',
  spark: '<path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"/>',
  eye: '<path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6S2 12 2 12z"/><circle cx="12" cy="12" r="2.5"/>',
  face: '<circle cx="12" cy="12" r="9"/><path d="M9 10h.01M15 10h.01M9 15c1.5 1.3 4.5 1.3 6 0"/>',
  drop: '<path d="M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11z"/>',
  star: '<path d="M12 3l2.6 5.5 6 .8-4.4 4.2 1.1 6L12 16.6 6.7 19.5l1.1-6L3.4 9.3l6-.8z"/>',
  brush: '<path d="M15 3l6 6-9 9-6-6z"/><path d="M6 12l-3 6 3 3 6-3"/>'
};

function icon(name) {
  return `<svg class="ico" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name] || ''}</svg>`;
}

function money(price, up) {
  return '$' + price + (up ? '+' : '');
}

const ALL_ITEMS = {};
MENU.forEach(c => c.groups.forEach(g => g.items.forEach(i => { ALL_ITEMS[i.id] = { ...i, cat: c, group: g }; })));
