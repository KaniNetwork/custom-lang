/*
Ne pas modifier le nom de la clé !
Modifier seulement la valeur de cette clé

Exemple: 

"Clé" : "Valeur"
*/ 
"ODA0MDUyMzYzNzk4MjQ5NTUz.YBGuHg.CGWJ8S7OO5bcpI5o8zHXgCIEoUQ"
const WerewolfTemplate = {
    "CHANNEL_LG": {
        "Category" : "• Partie de Loup-garou •",
        "Village" : "・Village",
        "Cupidon": "・Cupidon", 
        "Voyante": "・Voyante", 
        "Voyante_bavard": "・Voyante Bavard", 
        "Renard": "・Renard", 
        "Oracle": "・Oracle", 
        "Orcale_oeil": "・Oracle au 3e oeil", 
        "Montreur": "・Montreur d'ours", 
        "Détective": "・Détective", 
        "Petite_fille": "・Petite fille",
        "Boucher": "・Boucher", 
        "Salvateur": "・Salvateur", 
        "Sorcière": "・Sorcière", 
        "Chaman": "・Chaman", 
        "Médium": "・Médium", 
        "Dompteur": "・Dompteur",
        "Chasseur_aveugle": "・Chasseur aveugle", 
        "Chasseur": "・Chasseur", 
        "Tireur_d'elite": "・Tireur d'elite", 
        "Corbeau": "・Corbeau", 
        "Momie": "・Momie", 
        "Hacker": "・Hacker", 
        "Brouilleur": "・Brouilleur", 
        "Chien_loup": "・Chien loup",
        "Enfant_sauvage": "・Enfant sauvage",
        "Servante dévouée": "・Servante dévouée", 
        "Voleur": "・Voleur", 
        "Traqueur_Résurrecteur": "・Traqueur Résurrecteur", 
        "Assassin": "・Assassin", 
        "Toxico": "・Toxico", 
        "Joueur de Flûte": "・Joueur de flûte", 
        "flûtistes": "・flûtistes",
        "Loup_garou": "・Loup-garou", 
        "Loup_garou_blanc": "・Loup garou blanc"
    },
    
    "WIN_LG": {
        "égalité" : {
            "title": "⚖️ • Égalité" , 
            "desc": "Aucune personne remporte cette partie.", 
            "Winner": 0
        },

        "couple" : {
            "title": "♥ • Le couple" , 
            "desc": "Le couple remporte cette partie.", 
            "Winner": "du __couple__"
        },

        "village" : {
            "title": "🏘 • Le village" , 
            "desc": "Le village remporte cette partie.", 
            "Winner": "du __village__"
        },

        "loups" : {
            "title": "🐺 • Les loups" , 
            "desc": "Les loups remportent cette partie.", 
            "Winner": "des __loups__"
        },

        "toxico" : {
            "title": "🚬 • Le toxico" , 
            "desc": "Le toxico remporte cette partie.", 
            "Winner": "du __toxico__"
        },

        "lgb" : {
            "title": "🐺 • Le loup garou blanc" , 
            "desc": "Le loup garou blanc remporte cette partie.", 
            "Winner": "du __loup garou blanc__"
        },

        "jdf" : {
            "title": "🎺 • Le joueur de flûte" , 
            "desc": "Le joueur de flûte remporte cette partie.", 
            "Winner": "du __joueur de flûte__"
        },

        "assassin" : {
            "title": "🗡️• L'assassin" , 
            "desc": "L'assassin remporte cette partie.", 
            "Winner": "de l'__assassin__"
        },

        "ange" : {
            "title": "😇 • L'ange" , 
            "desc": "L'ange remporte cette partie.", 
            "Winner": "de l'__ange__"
        },

        "ange2" : {
            "title": "😇 • L'ange" , 
            "desc": "A la suite du vote, l'ange ce suicide en voyant qu'il y'a eu aucun mort le premier jour, l'ange remporte cette partie.", 
            "Winner": "de l'__ange__"
        },

        "fou" : {
            "title": "🃏 • Du fou" , 
            "desc": "Le fou remporte cette victoire.", 
            "Winner": "du __fou__"
        },

        "traqueur" : {
            "title": "🧟‍♂️ • Du traqueur résurrecteur" , 
            "desc": "Le traqueur résurrecteur remporte cette partie.", 
            "Winner": "du __traqueur résurrecteur__"
        },
    },
    
    "ROLE_LG": {
        "Enfant_sauvage": {"name": "👦 • L'enfant sauvage",
            "desc_village": "L'enfant sauvage a **30** secondes pour choisir son idole.",
            "desc_channel": "Vous avez **30** secondes pour choisir votre idole:\nxxx", //Don't edit "xxx" and don't place other "xxx"
            "role": "Enfant Sauvage",
            "sleep": "L'enfant sauvage s'est endormi."
        },
        "Chien_loup": {"name": "🐶 • Le chien loup",
            "villa": "Le chien loup a **30** secondes pour choisir un camp.",
            "chann": "Vous disposez de **30** secondes pour choisir votre camp:\n🐺 Loup Garou \n🧒 Village.",
            "role" : "Chien Loup",
            "sleep": "Le chien loup s'est endormi."
        },

        "Cupidon": {"name": "💘 • Le cupidon",
            "villa": "Le cupidon a **30** secondes pour choisir ses amoureux.",
            "chann": "Vous pouvez choisir vos amoureux quant vous le souhaitez jusqu'au jour 2:\nxxx", //Don't edit "xxx" and don't place other "xxx"
            "role" : "Cupidon",
            "sleep": "Le cupidon s'est endormi."
        },

        "Voleur": {"name": ":spy: • Le voleur",
            "villa": "Le voleur a **30** secondes pour échanger son rôle.",
            "chann": "Vous disposez de 30 secondes pour échanger votre rôle avec un des joueurs:\nxxx", //Don't edit "xxx" and don't place other "xxx"
            "role" : "Voleur",
            "sleep": "Le voleur s'est endormi."
        },

        "Hacker": {"name": "💻 • Le hacker",
            "villa": "Le hacker a **30** secondes pour choisir de passer une nuit ou un jour.",
            "chann": "Vous avez **30** secondes pour choisir de passer une nuit ou un jour \n🌕 Passer la nuit.\n🌞 Passer le jour.",
            "role" : "Hacker",
            "sleep": "Le hacker s'est endormi."
        },

        "Brouilleur": {"name": "🛰 • Le brouilleur",
            "villa": "Le brouilleur a **30** secondes pour choisir de brouiller les votes nocturne.",
            "chann": "Vous avez **30** secondes pour choisir de brouiller les votes nocturne.",
            "role" : "Brouilleur",
            "sleep": "Le brouilleur s'est endormi."
        },

        "Oracle": {"name": "👴 • L'oracle",
            "villa": "L'oracle a **30** secondes pour regarder 2 cartes.",
            "chann": "Vous avez **30** secondes pour regarder 2 cartes:\nxxx", //Don't edit "xxx" and don't place other "xxx"
            "role" : "Oracle",
            "sleep": "l'oracle s'est endormi."
        },

        "Oracle_oeil": {"name": "👴 • L'oracle au 3 ème œil",
            "villa": "L'oracle a **30** secondes pour regarder 2 cartes.",
            "chann": "Vous avez **30** secondes pour regarder 2 cartes:\nxxx", //Don't edit "xxx" and don't place other "xxx"
            "role" : "Oracle",
            "sleep": "l'oracle s'est endormi."
        },

        "Voyante": {"name": "👁 • La voyante",
            "villa": "La voyante a **30** secondes pour regarder la carte d'un joueur.",
            "chann": "Vous avez **30** secondes pour regarder la carte d'un joueur:\nxxx ", //Don't edit "xxx" and don't place other "xxx"
            "role" : "Voyante",
            "sleep": "La voyante s'est endormie."
        },

        "Voyante_bavard": {"name": "👁 • La voyante Bavard",
            "villa": "La voyante a **30** secondes pour regarder la carte d'un joueur.",
            "chann": "Vous avez **30** secondes pour regarder la carte d'un joueur:\nxxx ", //Don't edit "xxx" and don't place other "xxx"
            "role" : "Voyante",
            "sleep": "La voyante s'est endormie."
        },

        "Renard": {"name": "🦊 • Le renard",
            "villa": "Le renard a **30** secondes pour renifler la carte d'un joueur.",
            "chann": "Vous avez **30** secondes pour renifler la carte d'un joueur:\nxxx", //Don't edit "xxx" and don't place other "xxx"
            "role" : "Renard",
            "sleep": "Le renard s'est endormi."
        },

        "Montreur": {"name": "🐻 • Le montreur d'ours",
            "villa": "Le montreur d'ours a **30** secondes pour choisir deux personnes.",
            "chann": "Vous avez **30** secondes pour choisir vos 2 personnes\nxxx", //Don't edit "xxx" and don't place other "xxx"
            "role" : "Montreur d'ours",
            "sleep": "Le montreur d'ours s'est endormi."
        },

        "Détective": {"name": "🔎 • Le détective",
            "villa": "Le détective a **30** secondes pour choisir 2 joueurs.",
            "chann": "Vous avez **30** secondes pour choisir 2 joueurs:\nxxx", //Don't edit "xxx" and don't place other "xxx"
            "role" : "Détective",
            "sleep": "Le détective s'est endormi"
        },

        "Salvateur": {"name": "🛡 • Le salvateur",
            "villa": "Le salvateur a **30** secondes pour protéger un joueur.",
            "chann": "Vous avez **30** secondes pour protéger un joueur d'une attaque nocturne:\nsss", //Don't edit "sss" and don't place other "sss"
            "role" : "Salvateur",
            "sleep": "Le salvateur s'est endormi."
        },

        "Loups": {"name": "🐺 • Les loups",
            "villa": "Les loups ont **60** secondes pour voter leur victime.",
            "chann": "Vous avez **60** secondes pour choisir une victime:\nlll", //Don't edit "lll" and don't place other "lll"
            "role" : "Loups",
            "sleep": "Les loups se sont endormis."
        },

        "Boucher": {"name": "🥩 • Le boucher",
            "villa": "Le boucher a **30** secondes pour choisir d'échanger la victime des Loups par un morceau de viande.",
            "chann": "Vous avez **30** secondes pour choisir de détourné les loups sur une fausse victime ou de vous rendormir.",
            "role" : "Boucher",
            "sleep": "Le boucher s'est endormi."
        },

        "Infect_père": {"name": "🐺 • L'infect père des loups",
            "villa": "L'infect père des loups a **30** secondes pour infecter un joueur.",
            "chann": "Vous avez **30** secondes pour choisir d'infecter ",
            "role" : "Infect père des loups",
            "sleep": "L'infect père des loups s'est endormi."
        },

        "Grand_Méchant_Loup": {"name": "🐺 • Le grand méchant loup",
            "villa": "Le grand méchant loup a **30** secondes pour choisir une victime.",
            "chann": "Vous avez **30** secondes pour choisir une victime:\nlll", //Don't edit "lll" and don't place other "lll"
            "role" : "Grand méchant loup",
            "sleep": "Le grand méchant loup s'est endormi."
        },

        "Loup_Vengeurs": {"name": "🐺 • Le loup vengeurs",
            "villa": "Le loup vengeur a **30** secondes pour se venger de la mort d'un de ses loups.",
            "chann": "Vous avez **30** secondes pour choisir une victime:\nlll", //Don't edit "lll" and don't place other "lll"
            "role" : "Loup vengeurs",
            "sleep": "Le loup vengeurs s'est endormi."
        },

        "Loup_garou_blanc": {"name": "🐺 • Le loup garou blanc",
            "villa": "Le loup garou blanc a **30** secondes pour tuer un loup.",
            "chann": "Vous avez **30** secondes pour choisir une victime\nlgb", //Don't edit "lgb" and don't place other "lgb"
            "role" : "Loup Garou blanc",
            "sleep": "Le loup garou blanc s'est endormi."
        },

        "Assassin": {"name": "🗡 • L'assassin",
            "villa": "L'assassin a **30** secondes pour tuer sa victime.",
            "chann": "Vous avez **30** secondes pour choisir une victime:\nxxx", //Don't edit "xxx" and don't place other "xxx"
            "role" : "Assassin",
            "sleep": "L'assassin s'est endormi"
        },

        "Traqueur_résurrecteur": {"name": "🧟‍♂️ • Le traqueur résurrecteur",
            "villa": "Le traqueur résurrecteur a **30** secondes pour tuer sa/ses victime(s).",
            "chann": "Vous avez **30** secondes pour choisir une victime:\nxxx", //Don't edit "xxx" and don't place other "xxx"
            "role" : "Traqueur résurrecteur",
            "sleep": "Le traqueur résurrecteur s'est endormi"
        },

        "Joueur_de_flûte": {"name": "🎺 • Le joueur de flûte",
            "villa": "Le joueur de flûte a **30** secondes pour choisir les nouveaux flûtistes.",
            "chann": "Vous avez **30** secondes pour choisir vos 2 nouveaux flûtistes:\nfff", //Don't edit "fff" and don't place other "fff"
            "role" : "Joueur de Flûte",
            "sleep": "Le joueur de flûte s'est endormi."
        },

        "Toxico": {"name": "🚬 • Le toxico",
            "villa": "Le toxico a **30** secondes pour choisir les ses victimes.",
            "chann": "Vous avez **30** secondes pour choisir vos victimes. \n💀 Permet de tuer tous les toxicos, attention si vous commencez à rendre des gens toxico vous ne pourrez pas utiliser cette fonction. \nttt",
            "role" : "Toxico",
            "sleep": "Le toxico s'est endormi."
        },

        "Sorcière": {"name": "⚗ • La sorcière",
            "villa": "La sorcière a **30** secondes pour utiliser l'une de ses potions.",
            "chann": "",
            "role" : "Sorcière",
            "sleep": "La sorcière s'est endormie."
        },

        "Momie": {"name": "<:momi:619185764286070784> • La momie",
            "villa": "La momie a **30** secondes pour momifier une personne.",
            "chann": "Vous avez **30** secondes pour momifier une personne cela l'empêchera de voter\nxxx", //Don't edit "xxx" and don't place other "xxx"
            "role" : "Momie",
            "sleep": "La momie s'est endormi."
        },

        "Corbeau": {"name": "<:corbeau:619191960392957971> • Le corbeau",
            "villa": "Le corbeau a **30** secondes pour choisir une personne.",
            "chann": "Vous avez **30** secondes pour choisir une personne\nxxx", //Don't edit "xxx" and don't place other "xxx"
            "role" : "Corbeau",
            "sleep": "Le corbeau s'est endormi."
        },

        "Médium": {"name": "🔮 • Le médium",
            "villa": "Le médium a **30** secondes pour parler au mort.",
            "chann": "Vous avez **30** secondes pour communiquer avec les morts.",
            "role" : "Médium",
            "sleep": "Le médium s'est endormi."
        },

        "Chaman": {"name": "🔮 • Le chaman",
            "villa": "Le chaman a **30** secondes pour parler au mort.",
            "chann": "Vous avez **30** secondes pour communiquer avec les morts.",
            "role" : "Chaman",
            "sleep": "Le chaman s'est endormi."
        },

        "Dompteur": {"name": "🦁 • Le dompteur",
            "villa": "",
            "chann": "Vous avez **30** secondes pour choisir un loup mort à apprivoiser.\nddd", //Don't edit "ddd" and don't place other "ddd"
            "role" : "Dompteur",
            "sleep": ""
        },

        "Tireur": {"name": "🔫 • Le tireur d'élite",
            "villa": "",
            "chann": "Vous avez **30** secondes pour choisir une personne à tuer.\nxxx", //Don't edit "xxx" and don't place other "xxx"
            "role" : "Tireur d'élite",
            "sleep": ""
        },

        "Loup_Chaman": {"name": "🐺 • Le loup chaman",
            "villa": "",
            "chann": "Vous avez **30** secondes pour choisir une personne à chamaniser.\nlll", //Don't edit "lll" and don't place other "lll"
            "role" : "Loup chaman",
            "sleep": ""
        },

        "Chasseur": {"name": "🔫 • Le chasseur",
            "villa": "le chasseur a **30** secondes pour utiliser sa dernière balle.",
            "chann": "Vous avez **30** secondes pour choisir une victime.\nxxx", //Don't edit "xxx" and don't place other "xxx"
            "role" : "Chasseur",
            "sleep": "le chasseur meurt"
        },

        "Chasseur_aveugle": {"name": "🔫 • Le chasseur aveugle",
            "villa": "le chasseur a **30** secondes pour utiliser sa dernière balle.",
            "chann": "Vous avez **30** secondes pour choisir une victime.\nxxx", //Don't edit "xxx" and don't place other "xxx"
            "role" : "Chasseur",
            "sleep": "le chasseur meurt"
        },

        "Soeurs": {"name": "👭 • Les sœurs",
            "villa": "",
            "chann": "Vous pouvez discuter.",
            "role" : "Sœurs",
            "sleep": "Vous vous endormez."
        },

        "Jumeaux": {"name": "👬 • Les jumeaux",
            "villa": "",
            "chann": "Vous pouvez discuter.",
            "role" : "Jumeaux",
            "sleep": "Vous vous endormez."
        },

        "Petite_fille": {"name": "👧 • La petite fille",
            "villa": "La petite fille a **15** secondes pour choisir d'ouvrir les yeux.",
            "chann": "vous avez **15** secondes pour choisir d'ouvrir les yeux.",
            "role" : "Petite fille",
            "sleep": "La petite fille s'est endormie."
        },

        "Servante_dévouée": {"name": "👩 • La servante dévouée",
            "villa": "La servante dévoué à **15** secondes pour choisir d'échanger leurs cartes.",
            "chann": "vous avez **15** secondes pour choisir d'échanger votre carte avec xxx.", //Don't edit "xxx" and don't place other "xxx"
            "role" : "Servante dévouée",
            "sleep": "La servante dévouée s'est endormie."
        }
    },
    "LG_TEXT": {
            "VOICE_WW": "Loup Garou Vocal",
            "CEMETERIE": "Cimetière",
            "GAME_WEREWOLF": "__Partie__ ► `LoupGarou`",
            "SISTER": "Sœurs",
            "TWIN_BROTHER": "Jumeaux",
            "IDOLE_DIES": "Votre idole meurt, les loups en vous voyant seule décide de vous recueillire.",
            "IDOLE_DIES_MSG": "L'idole de l'enfant sauvage meurt, un nouveau loup rejoint équipe",
            "VILLAGE_FALLS_ASLEEP": "Le village s'endort",
            "MAYORAL": "Élection du maire",
            "VILLAGE_NOT_ELECT_MAYOR": "Le village n'a élu personne en tant que maire.\nLe village s'endort",
            "MAYOR_NONE": "[Maire] - Aucun",
            "MAYOR_ELECTED": "Le village vient d'élire",
            "MAYOR_ELECTED1": "en tant que maire.\nLe village s'endort",
            "MAYOR_NONE2": "[Maire] - ",
            "WOLFDOG_MSG1": "Vous avez choisi le camp des **Loups** ",
            "WOLFDOG_MSG2": "Le Chien-Loup vient de rejoindre votre camp",
            "WOLFDOG_MSG3": "Vous avez choisi le camp des **Villageois**",
            "COUPLE_MESSAGE": "Vous venez de recevoir une flèche, cette flèche vous rend fou amoureux de",
            "EXCHANGE_THIEFL": "Le voleur a échangé votre rôle",
            "LITTLE_GIRL": "La petite fille",
            "OPEN_EYES": "secondes pour choisir d'ouvrir les yeux",
            "LITTLE_GIRL2": "Petite fille",
            "CHOSE_OPEN_EYES": "Vous avez choisi de ne pas ouvrir les yeux.",
            "WOLVES_SEEN": "Vous venez de vous faire remarquer par les loups",
            "LOOKING_YOU": "est entrain de vous regarder",
            "WITH_WOLVES": "fait partie du camp des loups-garous",
            "THE_WOLVES": "Les loups",
            "WOLVES": "Loups",
            "IS_A_WEREWOLF": "est un **loup-garou**",
            "SMELL": "L'odeur de",
            "REMIND_SOMEONE": "vous rappel quelqu'un, vous comprenez qu'il s'agit du loup garou amnésique",
            "SMELL_REMINDS": "L'odeur des loups, vous rappel des ancien souvenirs, vous vous souvenez être un loup-garou",
            "GHOST_VOTED": "Le fantôme a voté pour",
            "GHOST_CANCELED": "Le fantôme a annulé son vote",
            "POISON": "Potion de poison",
            "HEAL": "Potion de soin",
            "RESURRECTION": "Potion de résurrection",
            "NEXT_ROUND": "Vous avez déjà commencé à rendre des joueurs toxico, attendez le prochain tour.",
            "SUFFOCATED": "vient de s'asphyxier.",
            "SKIP_NIGHT2": "Le hacker décide de passer la nuit.",
            "INFECTED": "Vous venez d'__infecter__",
            "ERROR_INFECTED": "Pendant la phase de transformation de l'infect quelque chose c'est passé et il meurt de ça transformation.",
            "INFECTED_MESSAGE": "**L'infect père des loups** vient de vous infecter !\n*Ce qui signifie que vous faites maintenant partie des loups-garous.*",
            "ALIVE_TO_EAT": "Les loups ont senties votre odeur, ils ont laissé la victime en vie pour vous manger.",
            "PIECE_OF_MEAT": "Vous avez échangé la victime par un morceau de viande.",
            "ALREADY_FLAUTIST": "Ce joueur est déjà flûtistes",
            "BECAME_FLAUTIST": "est devenu un flûtiste.",
            "ALREADY_TOXICO": "Il est déjà toxico.",
            "TOXICO": "est devenu un toxico.",
            "MED_MESSAGE": "Le médium a ressuscité",
            "DROP_POISON": "Vous jetez votre potion de poison sur",
            "DROP_HEAL": "Vous jetez votre potion de soin sur",
            "ALREADY_BEAR": "Votre ours est déjà à côté de lui.",
            "BEAR": "Votre ours c'est mis à côté de",
            "MUMMIFIED": "Vous venez de momifier",
            "VOVO_SEE": [0, "du **Loup-garou**", "du **Loup garou déguisé**", "du **Loup chaman**", "du **Grand méchant loup**", "du **Loup vengeurs**", "de l'**Infect père des loups**", "du **Villageois**", "du **Cupidon**", "de l'**Idiot du village**", "du **bouc émissaire**", "du **Cavalier**", "du **Fantôme**", "du **Roublard**", "de la **Voyante**", "de la **Voyante bavard**", "du **Renard**", "de l'**Oracle**", "de l'**Oracle au 3e oeil**", "du **Montreur d'ours**", "du **Détective**", "de la **Petite fille**", "de la **Sœur**", "du **Jumeaux**", "de l'**Ancien**", "de la **doyenne**", "du **Mordu**", "du **Boucher**", "du **Salvateur**", "de la **Sorcière**", "du **Chaman**", "du **Médium**", "du **Dompteur**", "du **Chevalier a l'épée rouillée**", "du **Chasseur aveugle**", "du **Chasseur**", "du **Tireur d'elite**", "du **Corbeau**", "de la **Momie**", "du **Hacker**", "du **Brouilleur**", "du **Chien loup**", "du **Loup garou amnésique**", "de l'**Enfant sauvage**", "de la **Servante dévoué**", "du **Voleur**", "du **Traqueur Résurrecteur**", "du **Loup garou blanc**", "du **Assassin**", "du **Toxico**", "du **Joueur de flûte**", "de l'**Ange**", "du **Fou**"],
            "TALKATIVE": "La voyante bavard a regardé la carte",
            "THIRD_EYE": "L'oracle au 3e œil a regardé la carte",
            "FOX": "Vous avez reniflé une carte qui est",
            "ROLES_LG": [0, "Loup-garou", "Loup garou déguisé", "Loup chaman", "Grand méchant loup", "Loup vengeurs", "Infect père des loups", "Villageois", "Cupidon", "Idiot du village", "bouc émissaire", "Cavalier", "Fantôme", "Roublard", "Voyante", "Voyante bavard", "Renard", "Oracle", "Oracle au 3e oeil", "Montreur d'ours", "Détective", "Petite fille", "Sœur", "Jumeaux", "Ancien", "Doyenne", "Mordu", "Boucher", "Salvateur", "Sorcière", "Chaman", "Médium", "Dompteur", "Chevalier a l'épée rouillée", "Chasseur aveugle", "Chasseur", "Tireur d'elite", "Corbeau", "Momie", "Hacker", "Brouilleur", "Chien loup", "Loup garou amnésique", "Enfant sauvage", "Servante dévoué", "Voleur", "Traqueur Résurrecteur", "Loup garou blanc", "Assassin", "Toxico", "Joueur de flûte", "Ange", "Fou"],
            "PLANTED_SWORD": "a planté son épée dans",
            "HUNTER_DIES": "Le chasseur meurt",
            "SHOT": "Vous venez de tirer sur",
            "BULLET_ON": "et utilise sa dernière balle sur",
            "SAVIOR_EFFECT": "mais celui-ci était protégé par le salvateur",
            "SKIP_DAY_EFFECT": "Le hacker décide de passer le jour.",
            "VILLAGE_ABLE_VOTE": "Le village pourra voter dans",
            "ROLES_LG2": [0, "le **Loup-garou**", "le **Loup garou déguisé**", "le **Loup chaman**", "le **Grand méchant loup**", "le **Loup vengeurs**", "l'**Infect père des loups**", "le **Villegeois**", "le **Cupidon**", "l'**Idiot le villege**", "le **bouc émissaire**", "le **Cavalier**", "le **Fantôme**", "le **Roublerd**", "la **Voyante**", "la **Voyante bavard**", "le **Renard**", "l'**Oracle**", "l'**Oracle au 3e oeil**", "le **Montreur d'ours**", "le **Détective**", "la **Petite fille**", "la **Sœur**", "le **Jumeaux**", "l'**Ancien**", "La **Doyenne**", "le **Morle**", "le **Boucher**", "le **Salvateur**", "la **Sorcière**", "le **Chaman**", "le **Médium**", "le **Dompteur**", "le **Chevalier a l'épée rouillée**", "le **Chasseur aveugle**", "le **Chasseur**", "le **Tireur d'elite**", "le **Corbeau**", "la **Momie**", "le **Hacker**", "le **Brouilleur**", "le **Chien loup**", "le **Loup garou amnésique**", "l'**Enfant sauvage**", "la **Servante dévoué**", "le **Voleur**", "le **Traqueur Résurrecteur**", "le **Loup garou blenc**", "le **Assassin**", "le **Toxico**", "le **Joueur de flûte**", "l'**Ange**", "le **Fou**"],
            "KILL_2_EYES": "vient de tirer entre les deux yeux de",
            "SHAMANIZED": "Vous avez __chamanisé__",
            "RESURRECTION2": "Le dompteur viens de ressusciter",
            "FORMULA": "qui était loup mais si sa formule fonctionne correctement",
            "BECOME_VILLAGER": "deviens un villageois.",
            "FORMULA_NOT_WORK": "La formule du dompteur n'a pas fonctionné, vous restez loup garou.",
            "FORMULA_WORK": "La formule du dompteur n'a pas fonctionné",
            "REMAINS": "reste un loup-garou.",
            "FORMULA_WORKED": "La formule du dompteur a fonctionné, vous devenez villageois.",
            "VILLAGE_CAN_VOTE": "Le village peut voter.",
            "THE_VILLAGE": "Les villageois",
            "THE_VILLAGER_UNABLE": "Le village n'arrive pas à délibérer.",
            "SCAPEGOAT": "Le village n'arrive pas à délibérer mais ils décident de ce déchaîner sur le **Bouc émissaire** qui est",
            "MAID_WOLF": "La servante dévouée fait maintenant partie du camp des loups-garous.",
            "VILLAGE_ELIMINATE": "Le village a décidé d'éliminer",
            "HORSEMAN": "Le cavalier",
            "HORSEMAN2": "est votre cible. Pour vous montrer son innocence, il sacrifie son bien le plus précieux : son cheval. Le village décide d'épargner sa vie.",
            "LAST_BULLET": "Vous venez d'utiliser votre dernière balle sur",
            "CANT_MUMMIFIED": "vous ne pouvez pas voter vous avez été momifié.",
            "INFECTED_S": "infecté",
        }
}
