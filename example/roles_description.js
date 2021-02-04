const WerewolfTemplate = {
    "Loup-garou": `⏣ Vous appartenez à l'équipe des loups-garous. 
     ⏣ Chaque nuit, vous pouvez tuer une personne avec les autres loups-garous.`,
     
    "Loup garou déguisé": `⏣ Vous appartenez à l'équipe des loups-garous.
    ⏣ Chaque début de soirée, vous recevrez un rôle avec lequel vous vous serez déguisé (parmis ceux de la partie).
    ⏣ Lorsque vous êtes déguisé, les voyantes et les oracles vous verront avec ce rôle.`,
    
    "Loup chaman": `⏣ Vous appartenez à l'équipe des loups-garous.
    ⏣ Chaque jour, vous pouvez choisir d'envouter une personne. Si cette personne est inspectée par une voyante, un renard ou un oracle la nuit suivante, elle apparaîtra en tant que Loup Chaman.`,
    
    "Grand méchant loup": `⏣ Vous appartenez à l'équipe des loups-garous. 
    ⏣ Tant qu'un loup n'est pas tué durant le vote du village, vous pourrez tuer une personne supplémentaire.`,
    
    "Loup vengeur": `⏣ Vous appartenez à l'équipe des loups-garous.
    ⏣ À chaque fois qu'un loup-garou meurt suite à un vote du village, vous pouvez vous venger en tuant une personne supplémentaire la nuit suivante.`,
    
    "Infect père des loups":`⏣ Vous appartenez à l'équipe des loups-garous. 
    ⏣ Une fois par partie, vous pouvez décider d'infecter la cible et de la transformer en loup-garou plutôt que de la tuer.`,
    
    "Villageois":`⏣ Vous appartenez à l'équipe du village. 
    ⏣ Vous n'avez aucune action nocturne, mais vous pouvez choisir une cible lors du vote diurne.`,
    
    "Cupidon":`⏣ Vous appartenez à l'équipe du village. 
    ⏣ Une fois par partie, vous pouvez choisir de lier deux personnes à vie. Ils devront abandonner leurs objectifs principaux pour être les deux seuls survivants. Vous pouvez vous inclure dans le couple.`,
    
    "Idiot du village":`⏣ Vous appartenez à l'équipe du village.
    ⏣ Vous n'avez aucune action nocturne, mais si vous êtes la cible du vote du village, les villageois ne vous tueront pas, mais vous ne pourrez plus voter de la partie.`,
    
    "bouc émissaire":`⏣ Vous appartenez à l'équipe du village.
    ⏣ Vous n'avez aucune action nocturne, mais si durant le vote du village il y a une égalité, alors vous serez accusé et condamné.`,
    
    "Cavalier":`⏣ Vous appartenez à l'équipe du village.
    ⏣ Vous n'avez aucune action nocturne, mais si vous êtes la cible du vote du village, vous sacrifierez votre cheval pour avoir une second chance.`,
    
    "Fantôme":`⏣ Vous appartenez à l'équipe du village.
    ⏣ Vous n'avez aucune action nocturne, mais après votre mort vous pourrez toujours utiliser le vote du village.`,
    
    "Roublard":`⏣ Vous appartenez à l'équipe du village (Rôle Spécial parties Loto).
    ⏣ Vous n'avez aucune action nocturne, mais si vous gagnez la partie, vous volez la cagnotte.`,
    
    "Voyante":`⏣ Vous appartenez à l'équipe du village. 
    ⏣ Chaque nuit, vous pouvez choisir un joueur et voir son rôle.`,
    
    "Voyante bavard":`⏣ Vous appartenez à l'équipe du village.
    ⏣ Chaque nuit, vous pouvez choisir un joueur et voir son rôle. Celui ci sera divulgué dans le salon village.`,
    
    "Renard":`⏣ Vous appartenez à l'équipe du village. 
    ⏣ Chaque nuit, vous pouvez choisir de renifler une carte. Vous verrez ainsi son équipe, à savoir Claire, Inconnue ou Obscure. 
    ⏣ Les Inconnus sont la Sorcière, le Chasseur, le Médium, l'Enfant Sauvage, le Chien-Loup, le Loup-garou blanc, le Joueur de Flûte, l'Assassin, l'Ange.`,
    
    "Oracle":`⏣ Vous appartenez à l'équipe du village.
    ⏣ Toutes les deux nuits, vous pouvez regarder deux personnes et connaître leurs rôles.`,
    
    "Oracle au 3e oeil":`⏣ Vous appartenez à l'équipe du village.
    ⏣ Toutes les deux nuits, vous pouvez regarder deux personnes et connaître leurs rôles. Ceux-ci seront divulgués dans le salon village.`,
    
    "Montreur d'ours":`⏣ Vous appartenez à l'équipe du village.
    ⏣ Chaque nuit vous pouvez choisir 2 joueurs. Si l'un d'eux est dans l'équipe des loups-garous, votre ours se mettra à grogner. Si vous ne choisissez qu'un seul joueur, votre ours ne grognera pas, quelque soit le rôle du joueur.`,
    
    "Détective":`⏣ Vous appartenez à l'équipe du village.
    ⏣ Chaque nuit vous pouvez inspecter 2 personnes, et vous saurez si les 2 personnes sont de la même équipe.`,
    
    "Petite fille":`⏣ Vous appartenez à l'équipe du village.
    ⏣ Chaque nuit, lors du vote des Loups-Garous, vous pouvez choisir d'ouvrir les yeux, au risque d'être aperçue par les loups.`,
    
    "Sœur":`⏣ Vous appartenez à l'équipe du village.
    ⏣ Chaque nuit, vous disposez d'un court laps de temps pour communiquer avec votre sœur.`,
    
    "Jumeaux":`⏣ Vous appartenez à l'équipe du village.
    ⏣ Chaque nuit, vous disposez d'un court laps de temps pour communiquer avec votre jumeau.
    ⏣ Vous pouvez également tuer une personne, mais si votre jumeau vient à mourit, vous ne pourrez plus voter pendant 3 jours.`,
    
    "Ancien":`⏣ Vous appartenez à l'équipe du village.
    ⏣ Si vous êtes tué par les loups-garous, vous ne mourrez pas et vous aurez une seconde chance.
    ⏣ Si vous êtes tué par le vote du village, les pouvoirs des villageois seront supprimé.`,
    
    "Doyenne":`⏣ Vous appartenez à l'équipe du village.
    ⏣ Si vous êtes tué par les loups-garous, vous ne mourrez pas et vous aurez une seconde chance.`,
    
    "Mordu":`⏣ Vous appartenez à l'équipe du village.
    ⏣ Si vous êtes tué par les loups-garous, vous ne mourrez pas et vous aurez une seconde chance.
    ⏣ Vous en profiterez pour crier au village l'identité d'un de vos agresseur.`,
    
    "Boucher":`⏣ Vous appartenez à l'équipe du village.
    ⏣ Chaque nuit vous pouvez changer la victime des loups par un morceau de viande, au risque de vous faire manger à la place de la victime.`,
    
    "Salvateur":`⏣ Vous appartenez à l'équipe du village.
    ⏣ Au début de la nuit, vous pouvez choisir une personne, ce qui la protégera de n'importe quel mort nocturne.
    ⏣ Vous ne pouvez pas protéger deux nuits de suite la même personne.`,
    
    "Sorcière":`⏣ Vous appartenez à l'équipe du village. 
    ⏣ Vous disposez d'une potion de soin et une potion d'empoisonnement. Vous ne pouvez utiliser qu'une seule potion par nuit.
    ⏣ La potion de soin permet de sauver la cible des loups-garous, tandis que la potion d'empoisonnement permet de tuer une autre personne.`,
    
    "Chaman":`⏣ Vous appartenez à l'équipe du village.
    ⏣ Chaque nuit vous pouvez parler avec les morts.`,
    
    "Médium":`⏣ Vous appartenez à l'équipe du village.
    ⏣ Chaque nuit vous pouvez parler avec les morts, et vous disposez d'un onguent de résurrection.`,
    
    "Dompteur":`⏣ Vous appartenez à l'équipe du village.
    ⏣ Une fois par partie, vous pouvez redonner la vie à un loup, celui-ci a une chance de se transformer en villageois.`,
    
    "Chevalier a l'épée rouillée":`⏣ Vous appartenez à l'équipe du village.
    ⏣ Si vous êtes tué par les loups-garous, l'un d'entre eux mourra au lever du jour.`,
    
    "Chasseur aveugle":`⏣ Vous appartenez à l'équipe du village.
    ⏣ À votre mort, vous pouvez choisir un joueur qui mourra avec vous. Néanmoins, étant aveugle, vous ne pourrez que voir les rôles pour choisir votre funeste compagon.`,
    
    "Chasseur":`⏣ Vous appartenez à l'équipe du village.
    ⏣ À votre mort, vous pouvez choisir un joueur qui mourra avec vous.`,
    
    "Tireur d'elite":`⏣ Vous appartenez à l'équipe du village.
    ⏣ Pendant le jour vous pouvez utiliser votre arme pour tuer une personne, mais cela dévoilera votre rôle à tout le village.`,
    
    "Corbeau":`⏣ Vous appartenez à l'équipe du village.
    ⏣ Chaque nuit vous pouvez ajouter 2 votes à une personne qui seront retirés au jour d'après.`,
    
    "Momie":`⏣ Vous appartenez à l'équipe du village.
    ⏣ Chaque nuit vous pouvez momifier une personne, cette personne ne pourra pas voter.`,
    
    "Hacker":`⏣ Vous appartenez à l'équipe du village.
    ⏣ Une fois par partie, vous pouvez choisir de passer une journée ou une nuit.`,
    
    "Brouilleur":`⏣ Vous appartenez à l'équipe du village.
    ⏣ Une fois par partie, vous pouvez brouiller tout les votes d'une nuit.
    ⏣ Les votes brouillés ne seront pas attribués aux bonnes cibles.`,
    
    "Chien loup":`⏣ Votre équipe dépend de vos choix.
    ⏣ Au début de la partie, vous pouvez choisir un camp : vous pouvez intégrer l'équipe du village ou celle des loups-garous. Votre équipe ne sera pas révélée en cas de mort.`,
    
    "Loup garou amnésique":`⏣ Vous appartenez à l'équipe des loups-garous.
    ⏣ Vous ne connaissez pas vos alliés tant que vous ne vous faites pas tuer par les loups.`,
    
    "Enfant sauvage":`⏣ Vous appartenez à l'équipe du village.
    ⏣ Au début de la partie vous devez choisir un idole parmi les joueurs. Si votre idole meurt, vous deviendrez un loup-garou. Vous êtes un villageois tant que votre idole n'est pas morte.`,
    
    "Servante dévoué":`⏣ Votre équipe dépend de vos choix.
    ⏣ À la mort d'un vote diurne avant l'annonce de sa mort, vous pouvez choisir d'inverser vos rôles, les pouvoirs déjà utilisés vous seront restauré.
    ⏣ Si vous êtes en couple vous ne pourrez pas utiliser votre pouvoir.`,
    
    "Voleur":`⏣ Votre équipe dépend de vos choix.
    ⏣ Au début du jeu, vous pouvez voler la carte d'un joueur, si vous ne choisissez rien, vous serez un villageois.`,
    
    "Traquer Résurrecteur":`⏣ Vous êtes un solitaire.
    ⏣ À la mort d'un loup-garou, vous réanimerez son corps en temps que chien cadavérique.
    ⏣ Chaque nuit, chacun de vos chien pourront tuer une victime.
    ⏣ Plus vous aurez de chiens, plus la probabilité que ceux-ci réussissent leur meurtre est faible.
    ⏣ Si aucun de vos chiens n'arrive à tuer leur victime, alors vous mourrez.`,
    
    "Loup garou blanc":`⏣ Vous êtes un solitaire. 
    ⏣ Vous appartenez à l'équipe des loups-garous, mais vous devez être le dernière personne en vie pour gagner. 
    ⏣ Chaque nuit, vous pouvez tuer un loup-garou, mais faites attention à ne pas vous faire surprendre !`,
    
    "Assassin":`⏣ Vous êtes un solitaire. 
    ⏣ Chaque nuit, vous pouvez tuer un joueur. Vous gagnez si vous êtes le dernier en vie.`,
    
    "Toxico":`⏣ Vous êtes un solitaire.
    ⏣ Chaque nuit, vous pouvez enfumer deux personnes. La nuit suivante, vous pouvez choisir de les faire mourir, ou d'enfumer deux autres personnes, et ainsi de suite.`,
    
    "Joueur de flûte":`⏣ Vous êtes un solitaire.
    ⏣ Chaque nuit, vous pouvez charmer 2 personnes. Les joueurs charmés gardent leurs pouvoirs normaux. Vous gagnerez si tous les joueurs vivants sont charmés.
    ⏣ Les joueurs charmés ne rejoignent pas votre équipe.`,
    
    "Ange":`⏣ Vous êtes un solitaire. 
    ⏣ Votre unique but sera de vous faire éliminer lors du premier vote diurne. Si vous êtes tué d'une autre façon, où lors d'un autre vote diurne, vous ne gagnerez pas.`,
    
    "Fou":`⏣ Vous êtes un solitaire. 
    ⏣ Votre unique but sera de vous faire éliminer lors d'un vote diurne. Si vous êtes tué d'une autre façon, vous ne gagnerez pas.`
}
