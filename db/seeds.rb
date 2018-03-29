# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

projects = [
  {
    title: "Boutique L.N. Mattei", type_1: "architecture", type_2: "direction_des_travaux",
    description: "Unique commerce inscrit aux monuments historiques de Corse, la rénovation intégrale de ce lieu d’exception redonne la dimension méritée.",
    content: "La deuxième phase des travaux concernait la rénovation totale de l’intérieur de la boutique. Reprise des boiseries, adaptation au modèle de vente des produits, créations de mobilier, réfection du réseau de plomberie, d’électricité, reprise des maçonneries et plancher rénové. Les travaux d’une durée de 7 mois ont permis la réalisation d’un concept store dans un lieu historique à l’atmosphère unique.",
    state: "Terminé"
  },
  {
    title: "Maison R1", type_1: "architecture", type_2: "conception_&_direction_des_travaux",
    description: "Rénovation d’une maison de village.",
    content: "...",
    state: "En cours"
  },
  {
    title: "Local de Transformation C1", type_1: "architecture", type_2: "conception",
    description: "Local destiné aux produits alimentaires implanté dans un village à l’architecture traditionnelle.",
    content:   "Dans le cadre de la réalisation d’un local de transformation de produits alimentaires dans un village proche de la région bastiaise, il était primordial de s’intégrer à la morphologie urbaine du village. L’importance du bâtiment est minimisé par son architecture, les façades ont été traitées avec minutie et la fonctionnalité du bâtiment avec réflexion.",
    state: "En cours"
  },
  {
    title: "Maison F1", type_1: "architecture", type_2: "conception",
    description: "Maison individuelle contemporaine sur les hauteurs de Furiani.",
    content:   "Positionnée en aplomb d’un lotissement, la construction à la façade principale marquante est composée d’espaces intérieurs lumineux dont la continuité intérieur-extérieur donne une impression de grand espace. Horizontaux et verticaux, les espaces s’étendent et vont chercher la lumière naturelle.",
    state: "En cours"
  },
  {
    title: "Extension L1", type_1: "architecture", type_2: "conception",
    description: "Extension de maison de village dans le Cap Corse.",
    content: "Située dans un village du Cap Corse, cette construction composée d’une multitude d’extension avec une homogénéité d’une construction traditionnelle. La nouvelle extension apportera un espace supplémentaire dont la vue sur le paysage, une terrasse en bois et plan d’eau.",
    state: "En cours"
  },
  {
    title: "Extension S1", type_1: "architecture", type_2: "conception",
    description: "Extension d’une maison individuelle.",
    content:   "Maison ancienne parée de pierre dont l’extension y ajoute une pièce principale et une suite parentale. Depuis l’extérieur l’extension s’associe avec un léger décalage créant une terrasse marquée entre les deux constructions. La liaison intérieur rend les espaces fluides et facilement utilisable.",
    state: "Terminé"
  },
  {
    title: "Maison G1", type_1: "architecture", type_2: "conception",
    description: "Conception d’une maison individuelle.",
    content: "La construction située entre un axe routier et de nombreuses maisons environnantes, l’accès de la parcelle donne directement sur une zone semi fermée, avec la maison et l’abri. Constituée d’une pièce centrale donnant vue sur les espaces verts, le séjour distribue la totalité de la maison.",
    state: "En cours"
  },
  {
    title: "maison_B1", type_1: "architecture", type_2: "conception",
    description: "Conception d’une maison individuelle.",
    content: "Au centre d’un nouveau lotissement, cette construction s’oriente vers le sud, liée par le centre, le hall d’entrée donne vu sur un patio intèrieur, prévue pour accueillir des extensions futures. De style contemporain, cette bâtisse s’intégrera parfaitement au sein de ce futur quartier.",
    state: "En cours"
  },
  {
    title: "Parc Urbain B1", type_1: "urbanisme", type_2: "conception",
    description: "Esquisse d’un Parc Urbain.",
    content: "Ce parc urbain s’inscrira dans une ville dont l’essor ces deux dernières décennies a été une des plus importantes de l’île. Ce parc urbain contribuera à lier les différents quartiers par un espace verdoyant et accessible à tous destiné au sport et au repos.",
    state: "En cours"
  },
  {
    title: "Aménagement B2", type_1: "urbanisme", type_2: "conception",
    description: "Esquisse d’un aménagement urbain.",
    content: "La commune souhaite se doter d’un véritable centre ville, mixité programmatique, sociale dont les moyens de mobilité sont multiples, ce quartier deviendra un lieu centrale de cette ville péri-urbaine.",
    state: "En cours"
  }
]

projects.each do |project|
  Project.create(title: project[:title], type_1: project[:type_1], type_2: project[:type_2], description: project[:description], content: project[:content], state: project[:state])
end

random_project = (1..10).to_a
i = -1
10.times do
  i += 1
  new_image = Image.create(project_id: random_project[i])
  new_image.remote_url_url = "https://picsum.photos/200/300/?random"
  new_image.save
end


Agency.create(text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
              address: "Biguglia 20620, Lot arbucetta, Lieu dit Ceppe",
              email: "opb.architecte@gmail.com",
              phone: "04 95 48 47 22")
