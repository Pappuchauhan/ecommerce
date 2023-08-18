const dummyUsers = [
    {
        "name": "Maddy Swatten",
        "email": "mswatten0@technorati.com",
        "phone": "7558189660",
        "isActive": true,
        "isAdmin": false
    },
    {
        "name": "Roseanna Neat",
        "email": "rneat1@ifeng.com",
        "phone": "3742515446",
        "isActive": false,
        "isAdmin": true
    },
    {
        "name": "Loni Hargroves",
        "email": "lhargroves2@skyrock.com",
        "phone": "3895364880",
        "isActive": false,
        "isAdmin": false
    },
    {
        "name": "Cristin Nester",
        "email": "cnester3@squidoo.com",
        "phone": "9985831059",
        "isActive": false,
        "isAdmin": false
    },
    {
        "name": "Alicia Mather",
        "email": "amather4@nature.com",
        "phone": "8666242876",
        "isActive": false,
        "isAdmin": false
    },
    {
        "name": "Travus Doret",
        "email": "tdoret5@flavors.me",
        "phone": "9873000477",
        "isActive": true,
        "isAdmin": true
    },
    {
        "name": "Liva Keedy",
        "email": "lkeedy6@ehow.com",
        "phone": "8214802442",
        "isActive": false,
        "isAdmin": true
    },
    {
        "name": "Kat Willock",
        "email": "kwillock7@amazon.com",
        "phone": "4839341050",
        "isActive": true,
        "isAdmin": true
    },
    {
        "name": "Gretchen Muncie",
        "email": "gmuncie8@wix.com",
        "phone": "8511388820",
        "isActive": false,
        "isAdmin": false
    },
    {
        "name": "Sigrid Dog",
        "email": "sdog9@mysql.com",
        "phone": "1734666863",
        "isActive": true,
        "isAdmin": true
    },
    {
        "name": "Ailey Pea",
        "email": "apeaa@gnu.org",
        "phone": "9586109790",
        "isActive": true,
        "isAdmin": false
    },
    {
        "name": "Klarrisa McGraith",
        "email": "kmcgraithb@nhs.uk",
        "phone": "4803398846",
        "isActive": true,
        "isAdmin": true
    },
    {
        "name": "Cchaddie L'Archer",
        "email": "clarcherc@cnn.com",
        "phone": "6265119636",
        "isActive": false,
        "isAdmin": false
    },
    {
        "name": "Jarrid Noonan",
        "email": "jnoonand@smugmug.com",
        "phone": "1653496359",
        "isActive": false,
        "isAdmin": false
    },
    {
        "name": "Dewain Deighan",
        "email": "ddeighane@squarespace.com",
        "phone": "1822606393",
        "isActive": true,
        "isAdmin": false
    },
    {
        "name": "Ivor Vittel",
        "email": "ivittelf@twitpic.com",
        "phone": "6087275822",
        "isActive": true,
        "isAdmin": true
    },
    {
        "name": "Zebulen Astupenas",
        "email": "zastupenasg@mac.com",
        "phone": "1331947132",
        "isActive": false,
        "isAdmin": false
    },
    {
        "name": "August Searl",
        "email": "asearlh@loc.gov",
        "phone": "6702624113",
        "isActive": false,
        "isAdmin": true
    },
    {
        "name": "Roderigo Gallahue",
        "email": "rgallahuei@reddit.com",
        "phone": "9713312951",
        "isActive": false,
        "isAdmin": true
    },
    {
        "name": "Kamillah Roake",
        "email": "kroakej@twitpic.com",
        "phone": "4749632513",
        "isActive": false,
        "isAdmin": true
    },
    {
        "name": "Bambie Dreier",
        "email": "bdreierk@bloglovin.com",
        "phone": "2655585620",
        "isActive": false,
        "isAdmin": false
    },
    {
        "name": "Basia Waith",
        "email": "bwaithl@cbslocal.com",
        "phone": "1038454228",
        "isActive": false,
        "isAdmin": true
    },
    {
        "name": "Rorke Salvage",
        "email": "rsalvagem@typepad.com",
        "phone": "2028133015",
        "isActive": false,
        "isAdmin": true
    },
    {
        "name": "Jamill Jagels",
        "email": "jjagelsn@ted.com",
        "phone": "3445511928",
        "isActive": false,
        "isAdmin": true
    },
    {
        "name": "Clim Throssell",
        "email": "cthrossello@cargocollective.com",
        "phone": "4439492853",
        "isActive": true,
        "isAdmin": true
    },
    {
        "name": "Kirsteni Torbet",
        "email": "ktorbetp@vinaora.com",
        "phone": "3443268520",
        "isActive": false,
        "isAdmin": true
    },
    {
        "name": "Darrel Coxall",
        "email": "dcoxallq@mysql.com",
        "phone": "6473457368",
        "isActive": false,
        "isAdmin": false
    },
    {
        "name": "Darda Byars",
        "email": "dbyarsr@earthlink.net",
        "phone": "1486853218",
        "isActive": true,
        "isAdmin": false
    },
    {
        "name": "Cordell Di Pietro",
        "email": "cdis@huffingtonpost.com",
        "phone": "8487117501",
        "isActive": false,
        "isAdmin": false
    },
    {
        "name": "Aurelie Tomei",
        "email": "atomeit@usda.gov",
        "phone": "7028519982",
        "isActive": false,
        "isAdmin": false
    },
    {
        "name": "Emilio MacRonald",
        "email": "emacronaldu@fotki.com",
        "phone": "2758939610",
        "isActive": true,
        "isAdmin": true
    },
    {
        "name": "Tandie Desaur",
        "email": "tdesaurv@sun.com",
        "phone": "5068904423",
        "isActive": false,
        "isAdmin": true
    },
    {
        "name": "Liesa Clink",
        "email": "lclinkw@whitehouse.gov",
        "phone": "1203679443",
        "isActive": true,
        "isAdmin": true
    },
    {
        "name": "Durante De Vaar",
        "email": "ddex@tmall.com",
        "phone": "1623682864",
        "isActive": true,
        "isAdmin": false
    },
    {
        "name": "Felix Gorden",
        "email": "fgordeny@tinypic.com",
        "phone": "8255788879",
        "isActive": false,
        "isAdmin": true
    },
    {
        "name": "Paulie Bamlett",
        "email": "pbamlettz@creativecommons.org",
        "phone": "4859872530",
        "isActive": false,
        "isAdmin": true
    },
    {
        "name": "Danyette Wills",
        "email": "dwills10@wufoo.com",
        "phone": "9247452297",
        "isActive": true,
        "isAdmin": false
    },
    {
        "name": "Ezri Van Zon",
        "email": "evan11@bbc.co.uk",
        "phone": "1144402032",
        "isActive": false,
        "isAdmin": false
    },
    {
        "name": "Kris Penvarne",
        "email": "kpenvarne12@liveinternet.ru",
        "phone": "5941246112",
        "isActive": true,
        "isAdmin": false
    },
    {
        "name": "Henri Nijs",
        "email": "hnijs13@xinhuanet.com",
        "phone": "2278265984",
        "isActive": false,
        "isAdmin": true
    },
    {
        "name": "Frayda Wanden",
        "email": "fwanden14@bing.com",
        "phone": "2855571768",
        "isActive": false,
        "isAdmin": true
    },
    {
        "name": "Ker Casale",
        "email": "kcasale15@cargocollective.com",
        "phone": "7677396450",
        "isActive": false,
        "isAdmin": true
    },
    {
        "name": "Celisse Rutigliano",
        "email": "crutigliano16@dedecms.com",
        "phone": "3985986261",
        "isActive": true,
        "isAdmin": false
    },
    {
        "name": "Shamus Ivanenko",
        "email": "sivanenko17@addtoany.com",
        "phone": "6821488683",
        "isActive": false,
        "isAdmin": false
    },
    {
        "name": "Elmore Bennell",
        "email": "ebennell18@yellowpages.com",
        "phone": "2275881618",
        "isActive": true,
        "isAdmin": true
    },
    {
        "name": "Daile Camelin",
        "email": "dcamelin19@cbc.ca",
        "phone": "2172661200",
        "isActive": true,
        "isAdmin": false
    },
    {
        "name": "Allis Bromwich",
        "email": "abromwich1a@craigslist.org",
        "phone": "4249778176",
        "isActive": true,
        "isAdmin": false
    },
    {
        "name": "Uri Eckart",
        "email": "ueckart1b@myspace.com",
        "phone": "6777157954",
        "isActive": true,
        "isAdmin": true
    },
    {
        "name": "Noel Gelsthorpe",
        "email": "ngelsthorpe1c@pcworld.com",
        "phone": "2786473858",
        "isActive": true,
        "isAdmin": true
    },
    {
        "name": "Hildegaard Chapling",
        "email": "hchapling1d@toplist.cz",
        "phone": "9394694908",
        "isActive": true,
        "isAdmin": true
    },
    {
        "name": "Korella Plaschke",
        "email": "kplaschke1e@soup.io",
        "phone": "9892992547",
        "isActive": true,
        "isAdmin": false
    },
    {
        "name": "Thaddus Steels",
        "email": "tsteels1f@blogtalkradio.com",
        "phone": "6407773764",
        "isActive": true,
        "isAdmin": true
    },
    {
        "name": "Stacy Gillions",
        "email": "sgillions1g@ibm.com",
        "phone": "7706273975",
        "isActive": false,
        "isAdmin": true
    },
    {
        "name": "Dorian Branchet",
        "email": "dbranchet1h@shareasale.com",
        "phone": "6814618706",
        "isActive": false,
        "isAdmin": false
    },
    {
        "name": "Alysia Kitteman",
        "email": "akitteman1i@blogspot.com",
        "phone": "3407498482",
        "isActive": true,
        "isAdmin": true
    },
    {
        "name": "Sheffie Maudlen",
        "email": "smaudlen1j@people.com.cn",
        "phone": "2596904107",
        "isActive": false,
        "isAdmin": true
    },
    {
        "name": "Belinda Van Arsdall",
        "email": "bvan1k@smugmug.com",
        "phone": "6091705404",
        "isActive": true,
        "isAdmin": false
    },
    {
        "name": "Birk Niesegen",
        "email": "bniesegen1l@bloglovin.com",
        "phone": "5628441045",
        "isActive": true,
        "isAdmin": false
    },
    {
        "name": "Bellanca Bonhomme",
        "email": "bbonhomme1m@alexa.com",
        "phone": "1532914560",
        "isActive": true,
        "isAdmin": false
    },
    {
        "name": "Bradley Grange",
        "email": "bgrange1n@instagram.com",
        "phone": "2959872309",
        "isActive": true,
        "isAdmin": true
    },
    {
        "name": "Shellysheldon Wiltshire",
        "email": "swiltshire1o@dailymail.co.uk",
        "phone": "6504723654",
        "isActive": true,
        "isAdmin": false
    },
    {
        "name": "Zedekiah Kirkness",
        "email": "zkirkness1p@gnu.org",
        "phone": "7571932118",
        "isActive": true,
        "isAdmin": false
    },
    {
        "name": "Elvis Ginnell",
        "email": "eginnell1q@tuttocitta.it",
        "phone": "4068637688",
        "isActive": false,
        "isAdmin": false
    },
    {
        "name": "Virgilio Haliburn",
        "email": "vhaliburn1r@vimeo.com",
        "phone": "6753635390",
        "isActive": true,
        "isAdmin": true
    },
    {
        "name": "Darcy Hentzer",
        "email": "dhentzer1s@bloglines.com",
        "phone": "8754281604",
        "isActive": true,
        "isAdmin": true
    },
    {
        "name": "Peggy Bjorkan",
        "email": "pbjorkan1t@tripod.com",
        "phone": "5994308528",
        "isActive": false,
        "isAdmin": false
    },
    {
        "name": "Drugi Bauldry",
        "email": "dbauldry1u@virginia.edu",
        "phone": "3211985510",
        "isActive": true,
        "isAdmin": false
    },
    {
        "name": "Jody Nunnerley",
        "email": "jnunnerley1v@cdbaby.com",
        "phone": "3413226200",
        "isActive": true,
        "isAdmin": false
    },
    {
        "name": "Tessi Kobes",
        "email": "tkobes1w@storify.com",
        "phone": "6021947502",
        "isActive": true,
        "isAdmin": true
    },
    {
        "name": "Pepillo Babcock",
        "email": "pbabcock1x@de.vu",
        "phone": "9984677618",
        "isActive": false,
        "isAdmin": false
    },
    {
        "name": "Kynthia Djurisic",
        "email": "kdjurisic1y@facebook.com",
        "phone": "6313355038",
        "isActive": false,
        "isAdmin": true
    },
    {
        "name": "Bebe Echelle",
        "email": "bechelle1z@shutterfly.com",
        "phone": "7327056058",
        "isActive": false,
        "isAdmin": false
    },
    {
        "name": "Deeanne Lewendon",
        "email": "dlewendon20@europa.eu",
        "phone": "7313889618",
        "isActive": false,
        "isAdmin": true
    },
    {
        "name": "Leonid Sturr",
        "email": "lsturr21@illinois.edu",
        "phone": "5914216156",
        "isActive": false,
        "isAdmin": false
    },
    {
        "name": "Hewet Roels",
        "email": "hroels22@reddit.com",
        "phone": "8967703705",
        "isActive": false,
        "isAdmin": false
    },
    {
        "name": "Clemence Kitteringham",
        "email": "ckitteringham23@t.co",
        "phone": "8504326624",
        "isActive": false,
        "isAdmin": true
    },
    {
        "name": "Innis Brasner",
        "email": "ibrasner24@buzzfeed.com",
        "phone": "8339432121",
        "isActive": false,
        "isAdmin": true
    },
    {
        "name": "Johann Bartlomiejczyk",
        "email": "jbartlomiejczyk25@ucsd.edu",
        "phone": "6658770542",
        "isActive": true,
        "isAdmin": false
    },
    {
        "name": "Corrianne Casbon",
        "email": "ccasbon26@cargocollective.com",
        "phone": "8612502808",
        "isActive": false,
        "isAdmin": false
    },
    {
        "name": "Goran Willgress",
        "email": "gwillgress27@wikispaces.com",
        "phone": "6164698222",
        "isActive": true,
        "isAdmin": true
    },
    {
        "name": "Had Neave",
        "email": "hneave28@sphinn.com",
        "phone": "4725504938",
        "isActive": false,
        "isAdmin": true
    },
    {
        "name": "Ward Kilday",
        "email": "wkilday29@buzzfeed.com",
        "phone": "8717127848",
        "isActive": true,
        "isAdmin": false
    },
    {
        "name": "Lon Trunkfield",
        "email": "ltrunkfield2a@craigslist.org",
        "phone": "8585215810",
        "isActive": true,
        "isAdmin": false
    },
    {
        "name": "Crissie McNulty",
        "email": "cmcnulty2b@shop-pro.jp",
        "phone": "6889757226",
        "isActive": false,
        "isAdmin": false
    },
    {
        "name": "Tiffie Crosbie",
        "email": "tcrosbie2c@nbcnews.com",
        "phone": "2765553613",
        "isActive": true,
        "isAdmin": false
    },
    {
        "name": "Jeremy Bennough",
        "email": "jbennough2d@google.ru",
        "phone": "3273756763",
        "isActive": true,
        "isAdmin": false
    },
    {
        "name": "Pooh MacNeill",
        "email": "pmacneill2e@businessinsider.com",
        "phone": "3664412943",
        "isActive": true,
        "isAdmin": true
    },
    {
        "name": "Demetrius Lyfe",
        "email": "dlyfe2f@studiopress.com",
        "phone": "4309283570",
        "isActive": true,
        "isAdmin": true
    },
    {
        "name": "Greta Lenoir",
        "email": "glenoir2g@sitemeter.com",
        "phone": "9969303320",
        "isActive": true,
        "isAdmin": false
    },
    {
        "name": "Cozmo Worlidge",
        "email": "cworlidge2h@flickr.com",
        "phone": "3598001967",
        "isActive": true,
        "isAdmin": false
    },
    {
        "name": "Graig Blaza",
        "email": "gblaza2i@rambler.ru",
        "phone": "5975986019",
        "isActive": true,
        "isAdmin": false
    },
    {
        "name": "Zachery Rounsefell",
        "email": "zrounsefell2j@phoca.cz",
        "phone": "7905746824",
        "isActive": false,
        "isAdmin": false
    },
    {
        "name": "Jasmin Fairman",
        "email": "jfairman2k@miibeian.gov.cn",
        "phone": "3135296502",
        "isActive": true,
        "isAdmin": false
    },
    {
        "name": "Efren Scarf",
        "email": "escarf2l@loc.gov",
        "phone": "3136152050",
        "isActive": false,
        "isAdmin": false
    },
    {
        "name": "Elladine Monkeman",
        "email": "emonkeman2m@webeden.co.uk",
        "phone": "6442722577",
        "isActive": false,
        "isAdmin": false
    },
    {
        "name": "Raphaela Hallwell",
        "email": "rhallwell2n@wufoo.com",
        "phone": "2544419866",
        "isActive": false,
        "isAdmin": true
    },
    {
        "name": "Marie-ann Henrichsen",
        "email": "mhenrichsen2o@wikispaces.com",
        "phone": "1002683185",
        "isActive": true,
        "isAdmin": false
    },
    {
        "name": "Lammond Doore",
        "email": "ldoore2p@51.la",
        "phone": "4093447883",
        "isActive": false,
        "isAdmin": true
    },
    {
        "name": "Alfredo Phalip",
        "email": "aphalip2q@tmall.com",
        "phone": "5731942609",
        "isActive": false,
        "isAdmin": false
    },
    {
        "name": "Karyn Pittford",
        "email": "kpittford2r@constantcontact.com",
        "phone": "2627375590",
        "isActive": false,
        "isAdmin": false
    }
]

module.exports = {dummyUsers}