export const bonsaiSpecies = [
  {
    id: 'ficus-retusa',
    scientificName: 'Ficus retusa',
    commonName: 'Ficus, Fig, Ginseng Ficus',
    group: 'Moraceae',
    temperatureMin: 15,
    temperatureMax: 35,
    sunExposure: 'Full sun (prefers)',
    position: 'Indoor (can be outdoor in summer)',
    leafType: 'Evergreen Broadleaf',
    climate: 'Tropical',
    flowering: 'Yes (hidden flowers)',
    nativeRegion: 'Tropical regions (every continent)',
    difficultyLevel: 'Beginner',
    careTips: {
      general: 'Requires a lot of light, relatively constant temperature, prefers higher humidity, can endure low humidity due to thick waxy leaves. Pruning and wiring are important. Can develop aerial roots with high humidity.',
      soilType: 'Well-draining bonsai soil mix.',
      feeding: 'Fertilize regularly, especially in spring, summer, and autumn.',
      watering: 'Water when soil begins to feel slightly dry, avoid complete drying.'
    },
    bonsaiStyles: ['Root over rock', 'Banyan tree (with aerial roots)', 'S-curved trunk'],
    techniques: [
      {
        name: 'Pruning (Structural & Maintenance)',
        description: 'Regular pruning is necessary to retain the tree\\\'s shape and encourage ramification. Ficus can be pruned heavily and will back-bud readily, even on old wood.',
        timing: 'Can be done year-round, but heavy structural pruning is best in spring or summer when the tree is actively actively growing and can recover quickly. Maintenance pruning (trimming new shoots) can be done as needed.',
        maturityStage: 'Can be started from a young age (after 1-2 years of growth from seed/cutting).',
        notRecommended: false
      },
      {
        name: 'Wiring',
        description: 'Ficus branches are flexible and respond well to wiring. Wires should be checked regularly to prevent cutting into the bark.',
        timing: 'Can be wired year-round, but it\\\'s easier to work with when the tree is less active or after defoliation.',
        maturityStage: 'Can be wired from a young age (around 3 years old or when branches are flexible).',
        notRecommended: false
      },
      {
        name: 'Repotting',
        description: 'Ficus tolerates root-pruning very well. Repotting is crucial for healthy root development and nutrient uptake.',
        timing: 'Every other year during spring. Some growers repot annually in areas with long growing seasons.',
        maturityStage: 'Can be repotted from a young age (after 1-2 years of growth).',
        notRecommended: false
      },
      {
        name: 'Root Pruning',
        description: 'Root pruning is done during repotting to encourage fine root growth and maintain the tree\\\'s size. Do not remove more than 1/3 of the roots.',
        timing: 'During spring repotting, when the tree is actively growing.',
        maturityStage: 'Can be root pruned from a young age, typically during the first repotting.',
        notRecommended: false
      },
      {
        name: 'Defoliation (Total, Partial)',
        description: 'Defoliation helps to reduce leaf size, encourage back-budding, and balance vigor. Ficus responds well to defoliation.',
        timing: 'Mid-growing season (June-August) after the first flush of leaves has hardened off. Can be done once or twice a year.',
        maturityStage: 'Best for healthy, well-established trees. Avoid on weak or young trees.',
        notRecommended: false
      },
      {
        name: 'Pinching',
        description: 'Pinching new growth tips helps to promote ramification and reduce leaf size. Ficus responds well to pinching.',
        timing: 'Throughout the growing season as new shoots extend. Pinch back to 1-2 leaves.',
        maturityStage: 'Can be started on young, vigorous trees once new growth appears.',
        notRecommended: false
      },
      {
        name: 'Grafting (Scion grafting, Thread grafting, Approach grafting)',
        description: 'Ficus species are generally good candidates for various grafting techniques, including thread grafting to add branches or approach grafting for root development.',
        timing: 'Best done during the active growing season (spring to summer) when the sap is flowing strongly.',
        maturityStage: 'Can be performed on trees that are well-established and healthy, typically after 3-5 years of growth.',
        notRecommended: false
      },
      {
        name: 'Jin (Deadwood Technique)',
        description: 'While not as common as on conifers, Jin can be created on Ficus, especially on older, thicker branches. The deadwood should be treated to prevent rot.',
        timing: 'Can be done year-round, but easier during active growth when bark peels more readily. Apply lime sulfur for preservation and bleaching.',
        maturityStage: 'Best on mature trees with established branches. Not recommended for young trees.',
        notRecommended: false
      },
      {
        name: 'Shari (Trunk Deadwood Technique)',
        description: 'Shari is less common on Ficus due to their soft wood and tendency to rot. If attempted, the wood must be meticulously treated and sealed to prevent decay.',
        timing: 'Can be done year-round, but requires careful aftercare.',
        maturityStage: 'Only on very mature and healthy trees. Generally not recommended for Ficus.',
        notRecommended: true
      },
      {
        name: 'Nebari Development (Surface Roots)',
        description: 'Ficus are excellent for nebari development, as they readily produce surface roots. Techniques like root pruning and air layering can be used to create a strong, radial nebari.',
        timing: 'Best addressed during repotting in spring. Can be worked on throughout the growing season.',
        maturityStage: 'Can be started from a young age (after 1-2 years of growth).',
        notRecommended: false
      },
      {
        name: 'Carving',
        description: 'Carving is possible on Ficus, especially for creating hollows or refining deadwood. However, due to their soft wood, it requires careful treatment and sealing to prevent rot.',
        timing: 'Can be done year-round, but easier during active growth when the wood is softer. Treat carved areas with wood hardener and sealant.',
        maturityStage: 'Best on mature trees with established trunks. Not recommended for young trees or extensive carving.',
        notRecommended: false
      },
      {
        name: 'Air Layering',
        description: 'Ficus respond very well to air layering, making it an excellent technique for creating new trees from existing branches or for improving nebari. It allows for the creation of new root systems on a branch while still attached to the parent plant.',
        timing: 'Best done in late spring to early summer when the tree is actively growing and sap is flowing strongly. Roots typically form within 2-3 months.',
        maturityStage: 'Can be performed on healthy, established branches of various sizes. Suitable for both young and mature trees.',
        notRecommended: false
      },
      {
        name: 'Fertilizing',
        description: 'Ficus are heavy feeders during their active growing season. Regular fertilization is crucial for strong growth and health.',
        timing: 'Every 2-4 weeks during the growing season (spring to autumn). Reduce or stop during winter dormancy.',
        maturityStage: 'Start fertilizing once the tree is established and actively growing, typically after the first year.',
        notRecommended: false
      },
      {
        name: 'Pest and Disease Management',
        description: 'Ficus are generally robust but can be susceptible to common pests like spider mites, aphids, and scale insects, especially indoors. Good air circulation and proper watering help prevent issues. Treat with appropriate organic or chemical insecticides if necessary.',
        timing: 'Inspect regularly, especially during warmer months. Treat upon first sign of infestation.',
        maturityStage: 'Applicable to all stages of development.',
        notRecommended: false
      },
      {
        name: 'Watering and Humidity Control',
        description: 'Ficus prefer consistent moisture but dislike soggy soil. Allow the topsoil to dry slightly between waterings. They thrive in high humidity, which encourages aerial root development. Misting or using a humidity tray can be beneficial, especially indoors.',
        timing: 'Water as needed, adjusting frequency based on temperature, humidity, and soil mix. Maintain humidity year-round, especially in dry environments.',
        maturityStage: 'Crucial for all stages of development, from young cuttings to mature trees.',
        notRecommended: false
      }
    ],
    images: {
      developmentStages: {
        early: '/bonsai_photos/ficus_retusa/development_stages/ficus_retusa_early_stage.jpg',
        middle: '/bonsai_photos/ficus_retusa/development_stages/ficus_retusa_middle_stage.jpg',
        mature: '/bonsai_photos/ficus_retusa/development_stages/ficus_retusa_mature_stage.jpg'
      },
      seasons: {
        spring: '/bonsai_photos/ficus_retusa/seasons/ficus_retusa_spring.jpg',
        summer: '/bonsai_photos/ficus_retusa/seasons/ficus_retusa_summer.png',
        autumn: '/bonsai_photos/ficus_retusa/seasons/ficus_retusa_autumn.jpg',
        winter: '/bonsai_photos/ficus_retusa/seasons/ficus_retusa_winter.jpg'
      },
      styles: {
        rootOverRock: '/bonsai_photos/ficus_retusa/styles/ficus_retusa_root_over_rock.jpg',
        banyan: '/bonsai_photos/ficus_retusa/styles/ficus_retusa_banyan_style.jpg'
      },
      nature: {
        habitat1: '/bonsai_photos/ficus_retusa/nature/ficus_retusa_nature_1.jpg',
        habitat2: '/bonsai_photos/ficus_retusa/nature/ficus_retusa_nature_2.jpg',
        habitat3: '/bonsai_photos/ficus_retusa/nature/ficus_retusa_nature_3.jpg'
      }
    },
    imageCredits: {
      '/bonsai_photos/ficus_retusa/development_stages/ficus_retusa_early_stage.jpg': {
        source: 'Bonsai Community',
        url: 'https://www.bonsaiempire.com'
      },
      '/bonsai_photos/ficus_retusa/development_stages/ficus_retusa_middle_stage.jpg': {
        source: 'Bonsai Enthusiast',
        url: 'https://www.bonsaiempire.com'
      },
      '/bonsai_photos/ficus_retusa/development_stages/ficus_retusa_mature_stage.jpg': {
        source: 'Bonsai Gallery',
        url: 'https://www.bonsaiempire.com'
      },
      '/bonsai_photos/ficus_retusa/seasons/ficus_retusa_spring.jpg': {
        source: 'Seasonal Bonsai Collection',
        url: 'https://www.bonsaiempire.com'
      },
      '/bonsai_photos/ficus_retusa/seasons/ficus_retusa_summer.png': {
        source: 'Bonsai Photography',
        url: 'https://www.bonsaiempire.com'
      },
      '/bonsai_photos/ficus_retusa/seasons/ficus_retusa_autumn.jpg': {
        source: 'Autumn Bonsai Collection',
        url: 'https://www.bonsaiempire.com'
      },
      '/bonsai_photos/ficus_retusa/seasons/ficus_retusa_winter.jpg': {
        source: 'Winter Bonsai Gallery',
        url: 'https://www.bonsaiempire.com'
      },
      '/bonsai_photos/ficus_retusa/styles/ficus_retusa_root_over_rock.jpg': {
        source: 'Bonsai Styling Guide',
        url: 'https://www.bonsaiempire.com'
      },
      '/bonsai_photos/ficus_retusa/styles/ficus_retusa_banyan_style.jpg': {
        source: 'Advanced Bonsai Techniques',
        url: 'https://www.bonsaiempire.com'
      },
      '/bonsai_photos/ficus_retusa/nature/ficus_retusa_nature_1.jpg': {
        source: 'iNaturalist Canada',
        url: 'https://inaturalist.ca'
      },
      '/bonsai_photos/ficus_retusa/nature/ficus_retusa_nature_2.jpg': {
        source: 'iNaturalist Canada',
        url: 'https://inaturalist.ca'
      },
      '/bonsai_photos/ficus_retusa/nature/ficus_retusa_nature_3.jpg': {
        source: 'iNaturalist Canada',
        url: 'https://inaturalist.ca'
      }
    }
  },
  {
    id: 'juniper',
    scientificName: 'Juniperus',
    commonName: 'Juniper',
    group: 'Cypress family',
    temperatureMin: -10,
    temperatureMax: 35,
    sunExposure: 'Full sunlight',
    position: 'Outdoor (cannot live indoors)',
    leafType: 'Evergreen Coniferous (needle-like and scale-like foliage)',
    climate: 'Temperate',
    flowering: 'Yes (berry-like cones)',
    nativeRegion: 'Worldwide (various species)',
    difficultyLevel: 'Beginner',
    careTips: {
      general: 'Place outside year-round in a bright location with lots of sunlight. Protect during winter if temperatures drop below -10°C. Pruning is relatively easy and best done at two or three optimal times throughout the growing season.',
      soilType: 'Free-draining bonsai soil.',
      feeding: 'Regular feeding.',
      watering: 'Water regularly, especially during warm months.'
    },
    bonsaiStyles: ['Jin and shari (deadwood)', 'Cascade', 'Upright', 'Literati'],
    techniques: [
      {
        name: 'Pruning (Structural & Maintenance)',
        description: 'Junipers are unique in that they do not back-bud on old wood, so care must be taken not to remove all foliage from a branch. Pinching new growth is the preferred method for maintenance. Heavy pruning is best done when the tree is vigorous.',
        timing: 'Can be pruned throughout the growing season, but heavy pruning (structural) is best in early spring. Avoid pruning during mid-summer dormancy.',
        maturityStage: 'Can be started from a young age (after 1-2 years of growth from seed/cutting).',
        notRecommended: false
      },
      {
        name: 'Wiring',
        description: 'Juniper branches are flexible when young, but become brittle with age. Coniferous species are best wired from late midsummer through to early autumn. Care must be taken not to remove all foliage from a branch as junipers do not back-bud on old wood.',
        timing: 'Late midsummer to early autumn. Avoid wiring during extreme heat or cold.',
        maturityStage: 'Can be wired from a young age (around 3 years old or when branches are flexible).',
        notRecommended: false
      },
      {
        name: 'Repotting',
        description: 'Junipers generally need less frequent repotting than deciduous trees. Repotting is done to refresh the soil and manage root growth.',
        timing: 'Every 3-5 years, in early spring before buds swell. Younger trees may need more frequent repotting.',
        maturityStage: 'Can be repotted from a young age (after 2-3 years of growth).',
        notRecommended: false
      },
      {
        name: 'Root Pruning',
        description: 'During repotting, prune roots to encourage fine root growth and maintain the tree\\\'s size. Do not remove more than 1/3 of the root mass. Junipers are sensitive to aggressive root pruning.',
        timing: 'During spring repotting, before active growth begins.',
        maturityStage: 'Can be root pruned from a young age, but with caution. Avoid heavy root pruning on weak trees.',
        notRecommended: false
      },
      {
        name: 'Defoliation (Total, Partial)',
        description: 'Defoliation is generally not recommended for Junipers as they are conifers and do not respond well to complete defoliation. Partial defoliation (thinning out old needles) can be done carefully to improve light penetration.',
        timing: 'Not recommended for total defoliation. Partial thinning can be done in late summer or early autumn.',
        maturityStage: 'Only on healthy, mature trees. Not recommended for young or weak trees.',
        notRecommended: true
      },
      {
        name: 'Pinching',
        description: 'Pinching is generally not recommended for Junipers. Instead, new growth should be cut back with scissors to avoid browning of the foliage.',
        timing: 'Not recommended. Instead, prune with scissors when new growth extends.',
        maturityStage: 'Not recommended for any stage.',
        notRecommended: true
      },
      {
        name: 'Grafting (Scion grafting, Thread grafting, Approach grafting)',
        description: 'Junipers are commonly grafted, especially to combine desirable foliage (e.g., Shimpaku) with a strong rootstock. Approach grafting is often used for adding branches.',
        timing: 'Scion and thread grafting: Late winter/early spring before buds swell. Approach grafting: During the active growing season (spring to summer).',
        maturityStage: 'Can be performed on well-established trees. Rootstock should be healthy and vigorous.',
        notRecommended: false
      },
      {
        name: 'Jin (Deadwood Technique)',
        description: 'Jin is a very common and effective technique for Junipers, as their deadwood is durable and resistant to rot. It involves stripping bark from branches to create bleached, aged-looking deadwood.',
        timing: 'Can be done year-round, but easier during active growth when bark peels more readily. Apply lime sulfur for preservation and bleaching.',
        maturityStage: 'Best on mature trees with established branches. Can be applied to younger trees for design purposes.',
        notRecommended: false
      },
      {
        name: 'Shari (Trunk Deadwood Technique)',
        description: 'Shari is also highly effective on Junipers, creating dramatic bleached sections on the trunk. The wood is hard and durable, making it ideal for this technique.',
        timing: 'Can be done year-round, but easier during active growth. Apply lime sulfur for preservation and bleaching.',
        maturityStage: 'Best on mature trees with established trunks. Can be applied to younger trees for design purposes.',
        notRecommended: false
      },
      {
        name: 'Nebari Development (Surface Roots)',
        description: 'Junipers are not known for prominent nebari, as they often grow in rocky, mountainous regions. However, a good surface root structure can still be developed through careful root pruning and placement during repotting.',
        timing: 'Best addressed during repotting in spring.',
        maturityStage: 'Can be started from a young age, but do not expect dramatic results like with other species.',
        notRecommended: false
      },
      {
        name: 'Carving',
        description: 'Carving is a fundamental technique for Junipers, used to create dramatic deadwood features (jin and shari) and to refine the trunk and branches. Their hard wood holds intricate details well.',
        timing: 'Can be done year-round, but easier during active growth when the wood is softer. Apply lime sulfur for preservation.',
        maturityStage: 'Best on mature trees with established trunks and branches. Can be applied to younger trees for design purposes.',
        notRecommended: false
      },
      {
        name: 'Air Layering',
        description: 'Air layering is generally difficult and often unsuccessful with Junipers compared to other species. It is not a commonly recommended propagation method for them.',
        timing: 'Not commonly recommended due to low success rates. If attempted, late spring to early summer.',
        maturityStage: 'Not generally recommended for any stage due to low success rates.',
        notRecommended: true
      },
      {
        name: 'Fertilizing',
        description: 'Junipers benefit from regular fertilization during their growing season to maintain vigor and dense foliage. Organic fertilizers are often preferred.',
        timing: 'Every 2-4 weeks during the growing season (spring to autumn). Reduce or stop during winter dormancy.',
        maturityStage: 'Start fertilizing once the tree is established and actively growing, typically after the first year.',
        notRecommended: false
      },
      {
        name: 'Pest and Disease Management',
        description: 'Junipers are relatively pest-resistant but can occasionally suffer from spider mites, aphids, or juniper scale. Good air circulation and proper watering are key to prevention. Treat with appropriate insecticides or fungicides if problems arise.',
        timing: 'Inspect regularly, especially during warmer months. Treat upon first sign of infestation.',
        maturityStage: 'Applicable to all stages of development.',
        notRecommended: false
      },
      {
        name: 'Watering and Humidity Control',
        description: 'Junipers prefer consistent moisture but are very susceptible to root rot if overwatered. Allow the soil to dry out slightly between waterings. They do not require high humidity and prefer good air circulation.',
        timing: 'Water as needed, adjusting frequency based on temperature, humidity, and soil mix. Avoid prolonged wetness.',
        maturityStage: 'Crucial for all stages of development, from young cuttings to mature trees.',
        notRecommended: false
      }
    ],
    images: {
      developmentStages: {
        early: '/bonsai_photos/juniper/development_stages/juniper_early_stage.jpg',
        middle: '/bonsai_photos/juniper/development_stages/juniper_middle_stage.jpg',
        mature: '/bonsai_photos/juniper/development_stages/juniper_mature_stage.jpg'
      },
      seasons: {
        spring: '/bonsai_photos/juniper/seasons/juniper_spring.jpg',
        summer: '/bonsai_photos/juniper/seasons/juniper_summer.jpg',
        autumn: '/bonsai_photos/juniper/seasons/juniper_autumn.jpg',
        winter: '/bonsai_photos/juniper/seasons/juniper_winter.jpg'
      },
      styles: {
        cascade: '/bonsai_photos/juniper/styles/juniper_cascade.jpg',
        upright: '/bonsai_photos/juniper/styles/juniper_upright.jpg',
        literati: '/bonsai_photos/juniper/styles/juniper_literati.jpg'
      },
      nature: {
        habitat1: '/bonsai_photos/juniper/nature/juniper_nature_1.jpg',
        habitat2: '/bonsai_photos/juniper/nature/juniper_nature_2.jpg',
        habitat3: '/bonsai_photos/juniper/nature/juniper_nature_3.jpg'
      }
    },
    imageCredits: {
      '/bonsai_photos/juniper/development_stages/juniper_early_stage.jpg': {
        source: 'FromYouFlowers',
        url: 'https://www.fromyouflowers.com'
      },
      '/bonsai_photos/juniper/development_stages/juniper_middle_stage.jpg': {
        source: 'joe gardener',
        url: 'https://joegardener.com'
      },
      '/bonsai_photos/juniper/development_stages/juniper_mature_stage.jpg': {
        source: 'Master Bonsai Gallery',
        url: 'https://www.bonsaiempire.com'
      },
      '/bonsai_photos/juniper/seasons/juniper_spring.jpg': {
        source: 'Spring Juniper Collection',
        url: 'https://www.bonsaiempire.com'
      },
      '/bonsai_photos/juniper/seasons/juniper_summer.jpg': {
        source: 'Summer Bonsai Photography',
        url: 'https://www.bonsaiempire.com'
      },
      '/bonsai_photos/juniper/seasons/juniper_autumn.jpg': {
        source: 'Autumn Conifer Gallery',
        url: 'https://www.bonsaiempire.com'
      },
      '/bonsai_photos/juniper/seasons/juniper_winter.jpg': {
        source: 'Winter Bonsai Collection',
        url: 'https://www.bonsaiempire.com'
      },
      '/bonsai_photos/juniper/styles/juniper_cascade.jpg': {
        source: 'Cascade Style Guide',
        url: 'https://www.bonsaiempire.com'
      },
      '/bonsai_photos/juniper/styles/juniper_upright.jpg': {
        source: 'Upright Bonsai Techniques',
        url: 'https://www.bonsaiempire.com'
      },
      '/bonsai_photos/juniper/styles/juniper_literati.jpg': {
        source: 'Literati Style Collection',
        url: 'https://www.bonsaiempire.com'
      },
      '/bonsai_photos/juniper/nature/juniper_nature_1.jpg': {
        source: 'Wikipedia',
        url: 'https://en.wikipedia.org'
      },
      '/bonsai_photos/juniper/nature/juniper_nature_2.jpg': {
        source: 'The Spruce',
        url: 'https://www.thespruce.com'
      },
      '/bonsai_photos/juniper/nature/juniper_nature_3.jpg': {
        source: 'Las Cruces Sun-News',
        url: 'https://www.lcsun-news.com'
      }
    }
  },
  {
    id: 'japanese-maple',
    scientificName: 'Acer palmatum',
    commonName: 'Japanese Maple',
    group: 'Sapindaceae (Soap tree family)',
    temperatureMin: -10,
    temperatureMax: 30,
    sunExposure: 'Sunny and airy locations, indirect sunlight above 30°C',
    position: 'Outdoor',
    leafType: 'Deciduous',
    climate: 'Temperate',
    flowering: 'Yes (reddish flowers in May-June)',
    nativeRegion: 'Japan, China, Korea',
    difficultyLevel: 'Intermediate',
    careTips: {
      general: 'Keep in sunny and airy locations, but provide indirect sunlight when temperatures rise above 30°C to prevent leaf damage. Frost hardy, but protect below -10°C. Pruning is important.',
      soilType: 'Well-draining bonsai soil mix.',
      feeding: 'Fertilize regularly.',
      watering: 'Keep soil evenly moist, never waterlogged.'
    },
    bonsaiStyles: ['Informal upright', 'Cascade', 'Raft style', 'Various styles known for attractive autumn colors'],
    techniques: [
      {
        name: 'Pruning (Structural & Maintenance)',
        description: 'Japanese Maples respond well to pruning. Structural pruning is best done during dormancy or early spring before buds swell. Maintenance pruning can be done throughout the growing season by pinching new shoots to encourage ramification. Avoid heavy pruning in late spring/early summer to prevent excessive bleeding.',
        timing: 'Structural pruning: Late winter to early spring (dormancy) or late autumn. Maintenance pruning: Throughout the growing season as needed.',
        maturityStage: 'Can be started from a young age (after 1-2 years of growth from seed/cutting).',
        notRecommended: false
      },
      {
        name: 'Wiring',
        description: 'Japanese Maples can be wired, but care must be taken as their bark is delicate and can scar easily. Aluminum wire is preferred. Wires should be removed within 1-2 months to prevent scarring.',
        timing: 'Best done when the tree is dormant (late autumn to early spring) or when leaves are off to better see the branch structure. Avoid wiring during active growth to minimize scarring.',
        maturityStage: 'Can be wired from a young age, but branches become more brittle with age. Use raffia for protection on thicker branches.',
        notRecommended: false
      },
      {
        name: 'Repotting',
        description: 'Japanese Maples require regular repotting to maintain health and vigor, especially when young. They produce a dense root ball.',
        timing: 'Every 1-2 years for young trees, every 2-3 years for older trees. Best done in early spring before buds open.',
        maturityStage: 'Can be repotted from a young age (after 1-2 years of growth).',
        notRecommended: false
      },
      {
        name: 'Root Pruning',
        description: 'Root pruning is essential for Japanese Maples to encourage fine root growth and prevent the tree from becoming pot-bound. Remove up to 1/3 of the root mass.',
        timing: 'During spring repotting, before active growth begins.',
        maturityStage: 'Can be root pruned from a young age, typically during the first repotting.',
        notRecommended: false
      },
      {
        name: 'Defoliation (Total, Partial)',
        description: 'Defoliation helps to reduce leaf size and encourage ramification. Japanese Maples respond well to defoliation, but it should only be done on healthy, vigorous trees.',
        timing: 'Late spring to early summer, after the first flush of leaves has hardened off. Avoid defoliating weak or stressed trees.',
        maturityStage: 'Best for healthy, well-established trees. Counterproductive for younger, developing trees.',
        notRecommended: false
      },
      {
        name: 'Pinching',
        description: 'Pinching new growth tips helps to promote ramification and reduce leaf size. Japanese Maples respond well to pinching.',
        timing: 'Throughout the growing season as new shoots extend. Pinch back to 1-2 leaves.',
        maturityStage: 'Can be started on young, vigorous trees once new growth appears.',
        notRecommended: false
      },
      {
        name: 'Grafting (Scion grafting, Thread grafting, Approach grafting)',
        description: 'Japanese Maples can be grafted to improve nebari (root flare), add branches, or change foliage type. Root grafting is common for nebari development.',
        timing: 'Root grafting: Winter, when dormant. Scion/Thread grafting: Late winter/early spring before buds swell. Approach grafting: Active growing season.',
        maturityStage: 'Can be performed on well-established trees. Rootstock should be healthy.',
        notRecommended: false
      },
      {
        name: 'Jin (Deadwood Technique)',
        description: 'Jin is generally not recommended for Japanese Maples as their wood tends to rot quickly. If attempted, the deadwood must be meticulously treated and sealed.',
        timing: 'Not recommended due to wood rot.',
        maturityStage: 'Not recommended for any stage.',
        notRecommended: true
      },
      {
        name: 'Shari (Trunk Deadwood Technique)',
        description: 'Shari is generally not recommended for Japanese Maples due to their soft wood and susceptibility to rot. If attempted, extensive preservation is required.',
        timing: 'Not recommended due to wood rot.',
        maturityStage: 'Not recommended for any stage.',
        notRecommended: true
      },
      {
        name: 'Nebari Development (Surface Roots)',
        description: 'Japanese Maples are prized for their beautiful nebari. Techniques like root pruning, the use of a root board, or approach grafting can be used to develop a strong, radial nebari.',
        timing: 'Best addressed during repotting in spring. Can be worked on throughout the growing season.',
        maturityStage: 'Can be started from a young age (after 1-2 years of growth).',
        notRecommended: false
      },
      {
        name: 'Carving',
        description: 'Carving on Japanese Maples is generally limited due to their soft wood and susceptibility to rot. It is mostly used for minor refinements or creating small hollows, which must be treated and sealed.',
        timing: 'Can be done year-round, but careful treatment is required. Avoid large carvings.',
        maturityStage: 'Best on mature trees with established trunks. Not recommended for young trees or extensive carving.',
        notRecommended: false
      },
      {
        name: 'Air Layering',
        description: 'Japanese Maples air layer very successfully, making it a popular method for propagation and for creating new trees with good nebari. It allows for the creation of new root systems on a branch while still attached to the parent plant.',
        timing: 'Best done in late spring to early summer when the tree is actively growing and sap is flowing strongly. Roots typically form within 2-3 months.',
        maturityStage: 'Can be performed on healthy, established branches of various sizes. Suitable for both young and mature trees.',
        notRecommended: false
      },
      {
        name: 'Fertilizing',
        description: 'Japanese Maples benefit from regular, balanced fertilization during their growing season to support their vigorous growth and vibrant foliage color. Avoid high-nitrogen fertilizers in autumn as it can hinder dormancy.',
        timing: 'Every 2-4 weeks during the growing season (spring to autumn). Reduce or stop during winter dormancy.',
        maturityStage: 'Start fertilizing once the tree is established and actively growing, typically after the first year.',
        notRecommended: false
      },
      {
        name: 'Pest and Disease Management',
        description: 'Japanese Maples are generally hardy but can be affected by aphids, scale, and powdery mildew. Good air circulation and proper watering are essential for prevention. Treat with appropriate organic or chemical solutions if problems arise.',
        timing: 'Inspect regularly, especially during warmer months. Treat upon first sign of infestation.',
        maturityStage: 'Applicable to all stages of development.',
        notRecommended: false
      },
      {
        name: 'Watering and Humidity Control',
        description: 'Japanese Maples prefer consistently moist soil but are sensitive to waterlogging. Water thoroughly when the topsoil feels slightly dry. They appreciate moderate to high humidity, especially during hot, dry periods. Misting can be beneficial.',
        timing: 'Water as needed, adjusting frequency based on temperature, humidity, and soil mix. Maintain humidity year-round, especially in dry environments.',
        maturityStage: 'Crucial for all stages of development, from young seedlings to mature trees.',
        notRecommended: false
      }
    ],
    images: {
      developmentStages: {
        early: '/bonsai_photos/japanese_maple/development_stages/japanese_maple_early_stage.jpg',
        middle: '/bonsai_photos/japanese_maple/development_stages/japanese_maple_middle_stage.jpg',
        mature: '/bonsai_photos/japanese_maple/development_stages/japanese_maple_mature_stage.jpg'
      },
      seasons: {
        spring: '/bonsai_photos/japanese_maple/seasons/japanese_maple_spring.jpg',
        summer: '/bonsai_photos/japanese_maple/seasons/japanese_maple_summer.jpg',
        autumn: '/bonsai_photos/japanese_maple/seasons/japanese_maple_autumn.jpg',
        winter: '/bonsai_photos/japanese_maple/seasons/japanese_maple_winter.jpg'
      },
      styles: {
        informalUpright: '/bonsai_photos/japanese_maple/styles/japanese_maple_informal_upright.jpg',
        cascade: '/bonsai_photos/japanese_maple/styles/japanese_maple_cascade.jpg',
        raft: '/bonsai_photos/japanese_maple/styles/japanese_maple_raft.jpg'
      },
      nature: {
        habitat1: '/bonsai_photos/japanese_maple/nature/japanese_maple_nature_1.jpg',
        habitat2: '/bonsai_photos/japanese_maple/nature/japanese_maple_nature_2.jpg',
        habitat3: '/bonsai_photos/japanese_maple/nature/japanese_maple_nature_3.jpg'
      }
    },
    imageCredits: {
      '/bonsai_photos/japanese_maple/development_stages/japanese_maple_early_stage.jpg': {
        source: 'Japanese Maple Bonsai Guide',
        url: 'https://www.bonsaiempire.com'
      },
      '/bonsai_photos/japanese_maple/development_stages/japanese_maple_middle_stage.jpg': {
        source: 'Bonsai Club of Santa Barbara',
        url: 'https://www.santabarbarabonsai.org'
      },
      '/bonsai_photos/japanese_maple/development_stages/japanese_maple_mature_stage.jpg': {
        source: 'Mature Maple Gallery',
        url: 'https://www.bonsaiempire.com'
      },
      '/bonsai_photos/japanese_maple/seasons/japanese_maple_spring.jpg': {
        source: 'Spring Maple Collection',
        url: 'https://www.bonsaiempire.com'
      },
      '/bonsai_photos/japanese_maple/seasons/japanese_maple_summer.jpg': {
        source: 'Summer Foliage Gallery',
        url: 'https://www.bonsaiempire.com'
      },
      '/bonsai_photos/japanese_maple/seasons/japanese_maple_autumn.jpg': {
        source: 'Autumn Colors Collection',
        url: 'https://www.bonsaiempire.com'
      },
      '/bonsai_photos/japanese_maple/seasons/japanese_maple_winter.jpg': {
        source: 'Winter Silhouette Gallery',
        url: 'https://www.bonsaiempire.com'
      },
      '/bonsai_photos/japanese_maple/styles/japanese_maple_informal_upright.jpg': {
        source: 'Informal Upright Guide',
        url: 'https://www.bonsaiempire.com'
      },
      '/bonsai_photos/japanese_maple/styles/japanese_maple_cascade.jpg': {
        source: 'Maple Cascade Techniques',
        url: 'https://www.bonsaiempire.com'
      },
      '/bonsai_photos/japanese_maple/styles/japanese_maple_raft.jpg': {
        source: 'Raft Style Collection',
        url: 'https://www.bonsaiempire.com'
      },
      '/bonsai_photos/japanese_maple/nature/japanese_maple_nature_1.jpg': {
        source: 'Go Botany - Native Plant Trust',
        url: 'https://gobotany.nativeplanttrust.org'
      },
      '/bonsai_photos/japanese_maple/nature/japanese_maple_nature_2.jpg': {
        source: 'Grangetto\\\'s Farm & Garden',
        url: 'https://grangettos.com'
      },
      '/bonsai_photos/japanese_maple/nature/japanese_maple_nature_3.jpg': {
        source: 'UBC Botanical Garden',
        url: 'https://botanicalgarden.ubc.ca'
      }
    }
  },
  {
    id: 'jacaranda-mimosifolia',
    scientificName: 'Jacaranda mimosifolia',
    commonName: 'Jacaranda, Blue Jacaranda',
    group: 'Bignoniaceae',
    temperatureMin: 5,
    temperatureMax: 35,
    sunExposure: 'Full sun',
    position: 'Outdoor (protect from frost)',
    leafType: 'Deciduous (semi-evergreen in tropical climates)',
    climate: 'Tropical, Subtropical',
    flowering: 'Yes (vibrant purple flowers in spring/early summer)',
    nativeRegion: 'South America (Brazil, Argentina, Bolivia)',
    difficultyLevel: 'Intermediate',
    careTips: {
      general: 'Jacaranda bonsai require full sun and protection from frost. They appreciate good air circulation and consistent moisture during the growing season. Pruning is essential to maintain shape and encourage flowering.',
      soilType: 'Well-draining bonsai soil mix, slightly acidic to neutral pH.',
      feeding: 'Fertilize regularly during the growing season with a balanced fertilizer. Reduce feeding in autumn and stop in winter.',
      watering: 'Water thoroughly when the topsoil feels dry. Reduce watering in winter, but do not let the soil dry out completely.'
    },
    bonsaiStyles: ['Informal upright', 'Slanting', 'Multi-trunk', 'Clump'],
    techniques: [
      {
        name: 'Pruning (Structural & Maintenance)',
        description: 'Jacaranda respond well to pruning. Structural pruning is best done in late winter or early spring before new growth begins. Maintenance pruning, including pinching new shoots, can be done throughout the growing season to encourage ramification and control growth. Avoid heavy pruning after flowering to ensure next year\\\'s blooms.',
        timing: 'Late winter to early spring for structural pruning. Throughout the growing season for maintenance pruning.',
        maturityStage: 'Can be started from a young age (after 1-2 years of growth).',
        notRecommended: false
      },
      {
        name: 'Wiring',
        description: 'Jacaranda branches are somewhat brittle, so care must be taken when wiring. Use aluminum wire and check frequently to prevent scarring. Older branches may be too stiff to wire and should be shaped by pruning.',
        timing: 'Best done on young, flexible branches during the growing season. Remove wires within 1-2 months.',
        maturityStage: 'Can be wired from a young age, typically when branches are still pliable.',
        notRecommended: false
      },
      {
        name: 'Repotting',
        description: 'Jacaranda bonsai require regular repotting to maintain root health and vigor. They develop a strong root system.',
        timing: 'Every 1-2 years for young trees, every 2-3 years for older trees. Best done in early spring before new growth emerges.',
        maturityStage: 'Can be repotted from a young age (after 1-2 years of growth).',
        notRecommended: false
      },
      {
        name: 'Root Pruning',
        description: 'During repotting, prune roots to encourage fine root growth and prevent the tree from becoming pot-bound. Remove up to 1/3 of the root mass. Ensure a good balance between root and canopy.',
        timing: 'During spring repotting, before active growth begins.',
        maturityStage: 'Can be root pruned from a young age, typically during the first repotting.',
        notRecommended: false
      },
      {
        name: 'Defoliation (Total, Partial)',
        description: 'Partial defoliation can be used to reduce leaf size and encourage ramification on healthy, vigorous trees. Total defoliation is generally not recommended as it can stress the tree.',
        timing: 'Late spring to early summer, after the first flush of leaves has hardened off. Only on healthy trees.',
        maturityStage: 'Best for healthy, well-established trees. Avoid on weak or young trees.',
        notRecommended: false
      },
      {
        name: 'Pinching',
        description: 'Pinching new growth tips helps to promote ramification and reduce leaf size. Jacaranda respond well to pinching.',
        timing: 'Throughout the growing season as new shoots extend. Pinch back to 1-2 leaves.',
        maturityStage: 'Can be started on young, vigorous trees once new growth appears.',
        notRecommended: false
      },
      {
        name: 'Grafting (Scion grafting, Thread grafting, Approach grafting)',
        description: 'Grafting can be used to improve branch placement or to introduce desirable characteristics. Approach grafting is often successful for adding branches.',
        timing: 'Best done during the active growing season (spring to summer).',
        maturityStage: 'Can be performed on well-established trees. Rootstock should be healthy.',
        notRecommended: false
      },
      {
        name: 'Jin (Deadwood Technique)',
        description: 'Jin is generally not common for Jacaranda as their wood is not as durable as conifers and can rot. If attempted, the deadwood must be meticulously treated and sealed to prevent decay.',
        timing: 'Not commonly recommended due to wood rot. If attempted, treat and seal immediately.',
        maturityStage: 'Only on very mature and healthy trees. Generally not recommended for this species.',
        notRecommended: true
      },
      {
        name: 'Shari (Trunk Deadwood Technique)',
        description: 'Shari is generally not recommended for Jacaranda due to their soft wood and susceptibility to rot. If attempted, extensive preservation is required.',
        timing: 'Not commonly recommended due to wood rot. If attempted, treat and seal immediately.',
        maturityStage: 'Only on very mature and healthy trees. Generally not recommended for this species.',
        notRecommended: true
      },
      {
        name: 'Nebari Development (Surface Roots)',
        description: 'Jacaranda can develop good nebari with proper techniques. Root pruning and careful placement during repotting can encourage a strong, radial root flare.',
        timing: 'Best addressed during repotting in spring.',
        maturityStage: 'Can be started from a young age (after 1-2 years of growth).',
        notRecommended: false
      },
      {
        name: 'Carving',
        description: 'Carving on Jacaranda is generally limited due to their soft wood and susceptibility to rot. It is mostly used for minor refinements or creating small hollows, which must be treated and sealed.',
        timing: 'Can be done year-round, but careful treatment is required. Avoid large carvings.',
        maturityStage: 'Best on mature trees with established trunks. Not recommended for young trees or extensive carving.',
        notRecommended: false
      },
      {
        name: 'Air Layering',
        description: 'Jacaranda can be air layered successfully, making it a viable method for propagation and for creating new trees with good nebari. It allows for the creation of new root systems on a branch while still attached to the parent plant.',
        timing: 'Best done in late spring to early summer when the tree is actively growing and sap is flowing strongly. Roots typically form within 2-3 months.',
        maturityStage: 'Can be performed on healthy, established branches of various sizes. Suitable for both young and mature trees.',
        notRecommended: false
      },
      {
        name: 'Fertilizing',
        description: 'Jacaranda benefit from regular, balanced fertilization during their growing season to support their vigorous growth and vibrant flowering. Use a fertilizer with a slightly higher phosphorus content before flowering.',
        timing: 'Every 2-4 weeks during the growing season (spring to autumn). Reduce or stop during winter dormancy.',
        maturityStage: 'Start fertilizing once the tree is established and actively growing, typically after the first year.',
        notRecommended: false
      },
      {
        name: 'Pest and Disease Management',
        description: 'Jacaranda are generally robust but can be affected by aphids, scale, and powdery mildew. Good air circulation and proper watering are essential for prevention. Treat with appropriate organic or chemical solutions if problems arise.',
        timing: 'Inspect regularly, especially during warmer months. Treat upon first sign of infestation.',
        maturityStage: 'Applicable to all stages of development.',
        notRecommended: false
      },
      {
        name: 'Watering and Humidity Control',
        description: 'Jacaranda prefer consistently moist soil but are sensitive to waterlogging. Water thoroughly when the topsoil feels slightly dry. They appreciate moderate to high humidity, especially during hot, dry periods. Misting can be beneficial.',
        timing: 'Water as needed, adjusting frequency based on temperature, humidity, and soil mix. Maintain humidity year-round, especially in dry environments.',
        maturityStage: 'Crucial for all stages of development, from young seedlings to mature trees.',
        notRecommended: false
      }
    ],
    images: {
      developmentStages: {
        early: '/bonsai_photos/jacaranda_mimosifolia/development_stages/jacaranda_mimosifolia_early_stage.jpg',
        middle: '/bonsai_photos/jacaranda_mimosifolia/development_stages/jacaranda_mimosifolia_middle_stage.jpg',
        mature: '/bonsai_photos/jacaranda_mimosifolia/development_stages/jacaranda_mimosifolia_mature_stage.jpg'
      },
      seasons: {
        spring: '/bonsai_photos/jacaranda_mimosifolia/seasons/jacaranda_mimosifolia_spring.jpg',
        summer: '/bonsai_photos/jacaranda_mimosifolia/seasons/jacaranda_mimosifolia_summer.jpg',
        autumn: '/bonsai_photos/jacaranda_mimosifolia/seasons/jacaranda_mimosifolia_autumn.jpg',
        winter: '/bonsai_photos/jacaranda_mimosifolia/seasons/jacaranda_mimosifolia_winter.jpg'
      },
      styles: {
        informalUpright: '/bonsai_photos/jacaranda_mimosifolia/styles/jacaranda_mimosifolia_informal_upright.jpg',
        slanting: '/bonsai_photos/jacaranda_mimosifolia/styles/jacaranda_mimosifolia_slanting.jpg',
        multiTrunk: '/bonsai_photos/jacaranda_mimosifolia/styles/jacaranda_mimosifolia_multi_trunk.jpg'
      },
      nature: {
        habitat1: '/bonsai_photos/jacaranda_mimosifolia/nature/jacaranda_mimosifolia_nature_1.jpg',
        habitat2: '/bonsai_photos/jacaranda_mimosifolia/nature/jacaranda_mimosifolia_nature_2.jpg',
        habitat3: '/bonsai_photos/jacaranda_mimosifolia/nature/jacaranda_mimosifolia_nature_3.jpg'
      }
    },
    imageCredits: {
      '/bonsai_photos/jacaranda_mimosifolia/development_stages/jacaranda_mimosifolia_early_stage.jpg': {
        source: 'Bonsai Empire',
        url: 'https://www.bonsaiempire.com'
      },
      '/bonsai_photos/jacaranda_mimosifolia/development_stages/jacaranda_mimosifolia_middle_stage.jpg': {
        source: 'Bonsai Nut',
        url: 'https://www.bonsainut.com'
      },
      '/bonsai_photos/jacaranda_mimosifolia/development_stages/jacaranda_mimosifolia_mature_stage.jpg': {
        source: 'Pixabay',
        url: 'https://pixabay.com'
      },
      '/bonsai_photos/jacaranda_mimosifolia/seasons/jacaranda_mimosifolia_spring.jpg': {
        source: 'Shutterstock',
        url: 'https://www.shutterstock.com'
      },
      '/bonsai_photos/jacaranda_mimosifolia/seasons/jacaranda_mimosifolia_summer.jpg': {
        source: 'Wikimedia Commons',
        url: 'https://commons.wikimedia.org'
      },
      '/bonsai_photos/jacaranda_mimosifolia/seasons/jacaranda_mimosifolia_autumn.jpg': {
        source: 'Bonsai Boy of New York',
        url: 'https://www.bonsaiboy.com'
      },
      '/bonsai_photos/jacaranda_mimosifolia/seasons/jacaranda_mimosifolia_winter.jpg': {
        source: 'iNaturalist Canada',
        url: 'https://inaturalist.ca'
      },
      '/bonsai_photos/jacaranda_mimosifolia/styles/jacaranda_mimosifolia_informal_upright.jpg': {
        source: 'Bonsai Empire',
        url: 'https://www.bonsaiempire.com'
      },
      '/bonsai_photos/jacaranda_mimosifolia/styles/jacaranda_mimosifolia_slanting.jpg': {
        source: 'Bonsai Nut',
        url: 'https://www.bonsainut.com'
      },
      '/bonsai_photos/jacaranda_mimosifolia/styles/jacaranda_mimosifolia_multi_trunk.jpg': {
        source: 'Pixabay',
        url: 'https://pixabay.com'
      },
      '/bonsai_photos/jacaranda_mimosifolia/nature/jacaranda_mimosifolia_nature_1.jpg': {
        source: 'Shutterstock',
        url: 'https://www.shutterstock.com'
      },
      '/bonsai_photos/jacaranda_mimosifolia/nature/jacaranda_mimosifolia_nature_2.jpg': {
        source: 'Wikimedia Commons',
        url: 'https://commons.wikimedia.org'
      },
      '/bonsai_photos/jacaranda_mimosifolia/nature/jacaranda_mimosifolia_nature_3.jpg': {
        source: 'Bonsai Boy of New York',
        url: 'https://www.bonsaiboy.com'
      }
    }
  },
  {
    id: 'caesalpinia-ferrea',
    scientificName: 'Caesalpinia ferrea',
    commonName: 'Leopard Tree, Brazilian Ironwood',
    group: 'Fabaceae',
    temperatureMin: 10,
    temperatureMax: 40,
    sunExposure: 'Full sun',
    position: 'Outdoor (protect from cold)',
    leafType: 'Deciduous (semi-evergreen in warm climates)',
    climate: 'Tropical, Subtropical',
    flowering: 'Yes (yellow flowers in summer)',
    nativeRegion: 'Brazil',
    difficultyLevel: 'Intermediate',
    careTips: {
      general: 'Leopard Tree bonsai thrive in full sun and warm climates. They are drought-tolerant once established but appreciate regular watering during the growing season. Their distinctive mottled bark makes them attractive.',
      soilType: 'Well-draining bonsai soil mix.',
      feeding: 'Fertilize regularly during the growing season with a balanced fertilizer.',
      watering: 'Water thoroughly when the topsoil feels dry. Reduce watering in winter.'
    },
    bonsaiStyles: ['Informal upright', 'Slanting', 'Clump', 'Root over rock'],
    techniques: [
      {
        name: 'Pruning (Structural & Maintenance)',
        description: 'Caesalpinia ferrea responds well to pruning. Structural pruning is best done in late winter or early spring before new growth begins. Maintenance pruning can be done throughout the growing season to encourage ramification and control growth.',
        timing: 'Late winter to early spring for structural pruning. Throughout the growing season for maintenance pruning.',
        maturityStage: 'Can be started from a young age (after 1-2 years of growth).',
        notRecommended: false
      },
      {
        name: 'Wiring',
        description: 'Branches are somewhat brittle, so care must be taken when wiring. Use aluminum wire and check frequently to prevent scarring. Older branches may be too stiff to wire and should be shaped by pruning.',
        timing: 'Best done on young, flexible branches during the growing season. Remove wires within 1-2 months.',
        maturityStage: 'Can be wired from a young age, typically when branches are still pliable.',
        notRecommended: false
      },
      {
        name: 'Repotting',
        description: 'Caesalpinia ferrea bonsai require regular repotting to maintain root health and vigor.',
        timing: 'Every 1-2 years for young trees, every 2-3 years for older trees. Best done in early spring before new growth emerges.',
        maturityStage: 'Can be repotted from a young age (after 1-2 years of growth).',
        notRecommended: false
      },
      {
        name: 'Root Pruning',
        description: 'During repotting, prune roots to encourage fine root growth and prevent the tree from becoming pot-bound. Remove up to 1/3 of the root mass.',
        timing: 'During spring repotting, before active growth begins.',
        maturityStage: 'Can be root pruned from a young age, typically during the first repotting.',
        notRecommended: false
      },
      {
        name: 'Defoliation (Total, Partial)',
        description: 'Partial defoliation can be used to reduce leaf size and encourage ramification on healthy, vigorous trees. Total defoliation is generally not recommended.',
        timing: 'Late spring to early summer, after the first flush of leaves has hardened off. Only on healthy trees.',
        maturityStage: 'Best for healthy, well-established trees. Avoid on weak or young trees.',
        notRecommended: false
      },
      {
        name: 'Pinching',
        description: 'Pinching new growth tips helps to promote ramification and reduce leaf size.',
        timing: 'Throughout the growing season as new shoots extend. Pinch back to 1-2 leaves.',
        maturityStage: 'Can be started on young, vigorous trees once new growth appears.',
        notRecommended: false
      },
      {
        name: 'Grafting (Scion grafting, Thread grafting, Approach grafting)',
        description: 'Grafting can be used to improve branch placement or to introduce desirable characteristics.',
        timing: 'Best done during the active growing season (spring to summer).',
        maturityStage: 'Can be performed on well-established trees. Rootstock should be healthy.',
        notRecommended: false
      },
      {
        name: 'Jin (Deadwood Technique)',
        description: 'Jin is generally not common for Caesalpinia ferrea as their wood is not as durable as conifers and can rot. If attempted, the deadwood must be meticulously treated and sealed to prevent decay.',
        timing: 'Not commonly recommended due to wood rot. If attempted, treat and seal immediately.',
        maturityStage: 'Only on very mature and healthy trees. Generally not recommended for this species.',
        notRecommended: true
      },
      {
        name: 'Shari (Trunk Deadwood Technique)',
        description: 'Shari is generally not recommended for Caesalpinia ferrea due to their soft wood and susceptibility to rot. If attempted, extensive preservation is required.',
        timing: 'Not commonly recommended due to wood rot. If attempted, treat and seal immediately.',
        maturityStage: 'Only on very mature and healthy trees. Generally not recommended for this species.',
        notRecommended: true
      },
      {
        name: 'Nebari Development (Surface Roots)',
        description: 'Caesalpinia ferrea can develop good nebari with proper techniques. Root pruning and careful placement during repotting can encourage a strong, radial root flare.',
        timing: 'Best addressed during repotting in spring.',
        maturityStage: 'Can be started from a young age (after 1-2 years of growth).',
        notRecommended: false
      },
      {
        name: 'Carving',
        description: 'Carving on Caesalpinia ferrea is generally limited due to their soft wood and susceptibility to rot. It is mostly used for minor refinements or creating small hollows, which must be treated and sealed.',
        timing: 'Can be done year-round, but careful treatment is required. Avoid large carvings.',
        maturityStage: 'Best on mature trees with established trunks. Not recommended for young trees or extensive carving.',
        notRecommended: false
      },
      {
        name: 'Air Layering',
        description: 'Caesalpinia ferrea can be air layered successfully, making it a viable method for propagation. It allows for the creation of new root systems on a branch while still attached to the parent plant.',
        timing: 'Best done in late spring to early summer when the tree is actively growing and sap is flowing strongly. Roots typically form within 2-3 months.',
        maturityStage: 'Can be performed on healthy, established branches of various sizes. Suitable for both young and mature trees.',
        notRecommended: false
      },
      {
        name: 'Fertilizing',
        description: 'Caesalpinia ferrea benefit from regular, balanced fertilization during their growing season to support their vigorous growth and flowering.',
        timing: 'Every 2-4 weeks during the growing season (spring to autumn). Reduce or stop during winter dormancy.',
        maturityStage: 'Start fertilizing once the tree is established and actively growing, typically after the first year.',
        notRecommended: false
      },
      {
        name: 'Pest and Disease Management',
        description: 'Caesalpinia ferrea are generally robust but can be affected by common pests. Good air circulation and proper watering are essential for prevention. Treat with appropriate organic or chemical solutions if problems arise.',
        timing: 'Inspect regularly, especially during warmer months. Treat upon first sign of infestation.',
        maturityStage: 'Applicable to all stages of development.',
        notRecommended: false
      },
      {
        name: 'Watering and Humidity Control',
        description: 'Caesalpinia ferrea prefer consistently moist soil but are sensitive to waterlogging. Water thoroughly when the topsoil feels slightly dry. They appreciate moderate to high humidity, especially during hot, dry periods.',
        timing: 'Water as needed, adjusting frequency based on temperature, humidity, and soil mix. Maintain humidity year-round, especially in dry environments.',
        maturityStage: 'Crucial for all stages of development, from young seedlings to mature trees.',
        notRecommended: false
      }
    ],
    images: {
      developmentStages: {
        early: '/bonsai_photos/caesalpinia_ferrea/development_stages/caesalpinia_ferrea_early_stage.jpg',
        middle: '/bonsai_photos/caesalpinia_ferrea/development_stages/caesalpinia_ferrea_middle_stage.jpg',
        mature: '/bonsai_photos/caesalpinia_ferrea/development_stages/caesalpinia_ferrea_mature_stage.jpg'
      },
      seasons: {
        spring: '/bonsai_photos/caesalpinia_ferrea/seasons/caesalpinia_ferrea_spring.jpg',
        summer: '/bonsai_photos/caesalpinia_ferrea/seasons/caesalpinia_ferrea_summer.jpg',
        autumn: '/bonsai_photos/caesalpinia_ferrea/seasons/caesalpinia_ferrea_autumn.jpg',
        winter: '/bonsai_photos/caesalpinia_ferrea/seasons/caesalpinia_ferrea_winter.jpg'
      },
      styles: {
        informalUpright: '/bonsai_photos/caesalpinia_ferrea/styles/caesalpinia_ferrea_informal_upright.jpg',
        slanting: '/bonsai_photos/caesalpinia_ferrea/styles/caesalpinia_ferrea_slanting.jpg',
        clump: '/bonsai_photos/caesalpinia_ferrea/styles/caesalpinia_ferrea_clump.jpg'
      },
      nature: {
        habitat1: '/bonsai_photos/caesalpinia_ferrea/nature/caesalpinia_ferrea_nature_1.jpg',
        habitat2: '/bonsai_photos/caesalpinia_ferrea/nature/caesalpinia_ferrea_nature_2.jpg',
        habitat3: '/bonsai_photos/caesalpinia_ferrea/nature/caesalpinia_ferrea_nature_3.jpg'
      }
    },
    imageCredits: {
      '/bonsai_photos/caesalpinia_ferrea/development_stages/caesalpinia_ferrea_early_stage.jpg': {
        source: 'Bonsai Empire',
        url: 'https://www.bonsaiempire.com'
      },
      '/bonsai_photos/caesalpinia_ferrea/development_stages/caesalpinia_ferrea_middle_stage.jpg': {
        source: 'Bonsai Nut',
        url: 'https://www.bonsainut.com'
      },
      '/bonsai_photos/caesalpinia_ferrea/development_stages/caesalpinia_ferrea_mature_stage.jpg': {
        source: 'Pixabay',
        url: 'https://pixabay.com'
      },
      '/bonsai_photos/caesalpinia_ferrea/seasons/caesalpinia_ferrea_spring.jpg': {
        source: 'Shutterstock',
        url: 'https://www.shutterstock.com'
      },
      '/bonsai_photos/caesalpinia_ferrea/seasons/caesalpinia_ferrea_summer.jpg': {
        source: 'Wikimedia Commons',
        url: 'https://commons.wikimedia.org'
      },
      '/bonsai_photos/caesalpinia_ferrea/seasons/caesalpinia_ferrea_autumn.jpg': {
        source: 'Bonsai Boy of New York',
        url: 'https://www.bonsaiboy.com'
      },
      '/bonsai_photos/caesalpinia_ferrea/seasons/caesalpinia_ferrea_winter.jpg': {
        source: 'iNaturalist Canada',
        url: 'https://inaturalist.ca'
      },
      '/bonsai_photos/caesalpinia_ferrea/styles/caesalpinia_ferrea_informal_upright.jpg': {
        source: 'Bonsai Empire',
        url: 'https://www.bonsaiempire.com'
      },
      '/bonsai_photos/caesalpinia_ferrea/styles/caesalpinia_ferrea_slanting.jpg': {
        source: 'Bonsai Nut',
        url: 'https://www.bonsainut.com'
      },
      '/bonsai_photos/caesalpinia_ferrea/styles/caesalpinia_ferrea_clump.jpg': {
        source: 'Pixabay',
        url: 'https://pixabay.com'
      },
      '/bonsai_photos/caesalpinia_ferrea/nature/caesalpinia_ferrea_nature_1.jpg': {
        source: 'Shutterstock',
        url: 'https://www.shutterstock.com'
      },
      '/bonsai_photos/caesalpinia_ferrea/nature/caesalpinia_ferrea_nature_2.jpg': {
        source: 'Wikimedia Commons',
        url: 'https://commons.wikimedia.org'
      },
      '/bonsai_photos/caesalpinia_ferrea/nature/caesalpinia_ferrea_nature_3.jpg': {
        source: 'Bonsai Boy of New York',
        url: 'https://www.bonsaiboy.com'
      }
    }
  },
  {
    id: 'jabuticaba',
    scientificName: 'Myrciaria cauliflora',
    commonName: 'Jabuticaba, Brazilian Grape Tree',
    group: 'Myrtaceae',
    temperatureMin: 10,
    temperatureMax: 35,
    sunExposure: 'Full sun to partial shade',
    position: 'Outdoor (protect from frost)',
    leafType: 'Evergreen Broadleaf',
    climate: 'Tropical, Subtropical',
    flowering: 'Yes (white flowers directly on trunk and branches)',
    nativeRegion: 'Brazil, Paraguay, Argentina',
    difficultyLevel: 'Intermediate',
    careTips: {
      general: 'Jabuticaba bonsai are unique for their cauliflorous habit (flowers and fruits directly on the trunk). They prefer full sun to partial shade and consistent moisture. Protect from frost.',
      soilType: 'Well-draining, slightly acidic bonsai soil mix.',
      feeding: 'Fertilize regularly during the growing season with a balanced fertilizer. Jabuticaba are heavy feeders.',
      watering: 'Keep soil consistently moist, but not waterlogged. They do not tolerate drought well.'
    },
    bonsaiStyles: ['Informal upright', 'Multi-trunk', 'Clump', 'Root over rock'],
    techniques: [
      {
        name: 'Pruning (Structural & Maintenance)',
        description: 'Jabuticaba respond well to pruning. Structural pruning is best done after fruiting. Maintenance pruning, including pinching new shoots, can be done throughout the growing season to encourage ramification and control growth.',
        timing: 'After fruiting for structural pruning. Throughout the growing season for maintenance pruning.',
        maturityStage: 'Can be started from a young age (after 1-2 years of growth).',
        notRecommended: false
      },
      {
        name: 'Wiring',
        description: 'Jabuticaba branches are somewhat brittle, so care must be taken when wiring. Use aluminum wire and check frequently to prevent scarring. Older branches may be too stiff to wire and should be shaped by pruning.',
        timing: 'Best done on young, flexible branches during the growing season. Remove wires within 1-2 months.',
        maturityStage: 'Can be wired from a young age, typically when branches are still pliable.',
        notRecommended: false
      },
      {
        name: 'Repotting',
        description: 'Jabuticaba bonsai require regular repotting to maintain root health and vigor.',
        timing: 'Every 1-2 years for young trees, every 2-3 years for older trees. Best done in early spring before new growth emerges.',
        maturityStage: 'Can be repotted from a young age (after 1-2 years of growth).',
        notRecommended: false
      },
      {
        name: 'Root Pruning',
        description: 'During repotting, prune roots to encourage fine root growth and prevent the tree from becoming pot-bound. Remove up to 1/3 of the root mass.',
        timing: 'During spring repotting, before active growth begins.',
        maturityStage: 'Can be root pruned from a young age, typically during the first repotting.',
        notRecommended: false
      },
      {
        name: 'Defoliation (Total, Partial)',
        description: 'Partial defoliation can be used to reduce leaf size and encourage ramification on healthy, vigorous trees. Total defoliation is generally not recommended.',
        timing: 'Late spring to early summer, after the first flush of leaves has hardened off. Only on healthy trees.',
        maturityStage: 'Best for healthy, well-established trees. Avoid on weak or young trees.',
        notRecommended: false
      },
      {
        name: 'Pinching',
        description: 'Pinching new growth tips helps to promote ramification and reduce leaf size.',
        timing: 'Throughout the growing season as new shoots extend. Pinch back to 1-2 leaves.',
        maturityStage: 'Can be started on young, vigorous trees once new growth appears.',
        notRecommended: false
      },
      {
        name: 'Grafting (Scion grafting, Thread grafting, Approach grafting)',
        description: 'Grafting can be used to improve branch placement or to introduce desirable characteristics.',
        timing: 'Best done during the active growing season (spring to summer).',
        maturityStage: 'Can be performed on well-established trees. Rootstock should be healthy.',
        notRecommended: false
      },
      {
        name: 'Jin (Deadwood Technique)',
        description: 'Jin is generally not common for Jabuticaba as their wood is not as durable as conifers and can rot. If attempted, the deadwood must be meticulously treated and sealed to prevent decay.',
        timing: 'Not commonly recommended due to wood rot. If attempted, treat and seal immediately.',
        maturityStage: 'Only on very mature and healthy trees. Generally not recommended for this species.',
        notRecommended: true
      },
      {
        name: 'Shari (Trunk Deadwood Technique)',
        description: 'Shari is generally not recommended for Jabuticaba due to their soft wood and susceptibility to rot. If attempted, extensive preservation is required.',
        timing: 'Not commonly recommended due to wood rot. If attempted, treat and seal immediately.',
        maturityStage: 'Only on very mature and healthy trees. Generally not recommended for this species.',
        notRecommended: true
      },
      {
        name: 'Nebari Development (Surface Roots)',
        description: 'Jabuticaba can develop good nebari with proper techniques. Root pruning and careful placement during repotting can encourage a strong, radial root flare.',
        timing: 'Best addressed during repotting in spring.',
        maturityStage: 'Can be started from a young age (after 1-2 years of growth).',
        notRecommended: false
      },
      {
        name: 'Carving',
        description: 'Carving on Jabuticaba is generally limited due to their soft wood and susceptibility to rot. It is mostly used for minor refinements or creating small hollows, which must be treated and sealed.',
        timing: 'Can be done year-round, but careful treatment is required. Avoid large carvings.',
        maturityStage: 'Best on mature trees with established trunks. Not recommended for young trees or extensive carving.',
        notRecommended: false
      },
      {
        name: 'Air Layering',
        description: 'Jabuticaba can be air layered successfully, making it a viable method for propagation. It allows for the creation of new root systems on a branch while still attached to the parent plant.',
        timing: 'Best done in late spring to early summer when the tree is actively growing and sap is flowing strongly. Roots typically form within 2-3 months.',
        maturityStage: 'Can be performed on healthy, established branches of various sizes. Suitable for both young and mature trees.',
        notRecommended: false
      },
      {
        name: 'Fertilizing',
        description: 'Jabuticaba benefit from regular, balanced fertilization during their growing season to support their vigorous growth and fruiting. Use a fertilizer with a slightly higher phosphorus and potassium content to encourage flowering and fruiting.',
        timing: 'Every 2-4 weeks during the growing season (spring to autumn). Reduce or stop during winter dormancy.',
        maturityStage: 'Start fertilizing once the tree is established and actively growing, typically after the first year.',
        notRecommended: false
      },
      {
        name: 'Pest and Disease Management',
        description: 'Jabuticaba are generally robust but can be affected by aphids, scale, and powdery mildew. Good air circulation and proper watering are essential for prevention. Treat with appropriate organic or chemical solutions if problems arise.',
        timing: 'Inspect regularly, especially during warmer months. Treat upon first sign of infestation.',
        maturityStage: 'Applicable to all stages of development.',
        notRecommended: false
      },
      {
        name: 'Watering and Humidity Control',
        description: 'Jabuticaba prefer consistently moist soil but are sensitive to waterlogging. Water thoroughly when the topsoil feels slightly dry. They appreciate moderate to high humidity, especially during hot, dry periods.',
        timing: 'Water as needed, adjusting frequency based on temperature, humidity, and soil mix. Maintain humidity year-round, especially in dry environments.',
        maturityStage: 'Crucial for all stages of development, from young seedlings to mature trees.',
        notRecommended: false
      }
    ],
    images: {
      developmentStages: {
        early: '/bonsai_photos/jabuticaba/development_stages/jabuticaba_early_stage.jpg',
        middle: '/bonsai_photos/jabuticaba/development_stages/jabuticaba_middle_stage.jpg',
        mature: '/bonsai_photos/jabuticaba/development_stages/jabuticaba_mature_stage.jpg'
      },
      seasons: {
        spring: '/bonsai_photos/jabuticaba/seasons/jabuticaba_spring.jpg',
        summer: '/bonsai_photos/jabuticaba/seasons/jabuticaba_summer.jpg',
        autumn: '/bonsai_photos/jabuticaba/seasons/jabuticaba_autumn.jpg',
        winter: '/bonsai_photos/jabuticaba/seasons/jabuticaba_winter.jpg'
      },
      styles: {
        informalUpright: '/bonsai_photos/jabuticaba/styles/jabuticaba_informal_upright.jpg',
        multiTrunk: '/bonsai_photos/jabuticaba/styles/jabuticaba_multi_trunk.jpg',
        clump: '/bonsai_photos/jabuticaba/styles/jabuticaba_clump.jpg'
      },
      nature: {
        habitat1: '/bonsai_photos/jabuticaba/nature/jabuticaba_nature_1.jpg',
        habitat2: '/bonsai_photos/jabuticaba/nature/jabuticaba_nature_2.jpg',
        habitat3: '/bonsai_photos/jabuticaba/nature/jabuticaba_nature_3.jpg'
      }
    },
    imageCredits: {
      '/bonsai_photos/jabuticaba/development_stages/jabuticaba_early_stage.jpg': {
        source: 'Bonsai Empire',
        url: 'https://www.bonsaiempire.com'
      },
      '/bonsai_photos/jabuticaba/development_stages/jabuticaba_middle_stage.jpg': {
        source: 'Bonsai Nut',
        url: 'https://www.bonsainut.com'
      },
      '/bonsai_photos/jabuticaba/development_stages/jabuticaba_mature_stage.jpg': {
        source: 'Pixabay',
        url: 'https://pixabay.com'
      },
      '/bonsai_photos/jabuticaba/seasons/jabuticaba_spring.jpg': {
        source: 'Shutterstock',
        url: 'https://www.shutterstock.com'
      },
      '/bonsai_photos/jabuticaba/seasons/jabuticaba_summer.jpg': {
        source: 'Wikimedia Commons',
        url: 'https://commons.wikimedia.org'
      },
      '/bonsai_photos/jabuticaba/seasons/jabuticaba_autumn.jpg': {
        source: 'Bonsai Boy of New York',
        url: 'https://www.bonsaiboy.com'
      },
      '/bonsai_photos/jabuticaba/seasons/jabuticaba_winter.jpg': {
        source: 'iNaturalist Canada',
        url: 'https://inaturalist.ca'
      },
      '/bonsai_photos/jabuticaba/styles/jabuticaba_informal_upright.jpg': {
        source: 'Bonsai Empire',
        url: 'https://www.bonsaiempire.com'
      },
      '/bonsai_photos/jabuticaba/styles/jabuticaba_multi_trunk.jpg': {
        source: 'Bonsai Nut',
        url: 'https://www.bonsainut.com'
      },
      '/bonsai_photos/jabuticaba/styles/jabuticaba_clump.jpg': {
        source: 'Pixabay',
        url: 'https://pixabay.com'
      },
      '/bonsai_photos/jabuticaba/nature/jabuticaba_nature_1.jpg': {
        source: 'Shutterstock',
        url: 'https://www.shutterstock.com'
      },
      '/bonsai_photos/jabuticaba/nature/jabuticaba_nature_2.jpg': {
        source: 'Wikimedia Commons',
        url: 'https://commons.wikimedia.org'
      },
      '/bonsai_photos/jabuticaba/nature/jabuticaba_nature_3.jpg': {
        source: 'Bonsai Boy of New York',
        url: 'https://www.bonsaiboy.com'
      }
    }
  },
  {
    id: 'pitanga',
    scientificName: 'Eugenia uniflora',
    commonName: 'Pitanga, Surinam Cherry',
    group: 'Myrtaceae',
    temperatureMin: 5,
    temperatureMax: 35,
    sunExposure: 'Full sun to partial shade',
    position: 'Outdoor (protect from frost)',
    leafType: 'Evergreen Broadleaf',
    climate: 'Tropical, Subtropical',
    flowering: 'Yes (white flowers followed by red/orange fruit)',
    nativeRegion: 'Brazil, Uruguay, Paraguay, Argentina',
    difficultyLevel: 'Beginner',
    careTips: {
      general: 'Pitanga bonsai are known for their attractive foliage, flowers, and edible fruit. They prefer full sun to partial shade and consistent moisture. Protect from frost.',
      soilType: 'Well-draining, slightly acidic bonsai soil mix.',
      feeding: 'Fertilize regularly during the growing season with a balanced fertilizer.',
      watering: 'Keep soil consistently moist, but not waterlogged. They do not tolerate drought well.'
    },
    bonsaiStyles: ['Informal upright', 'Slanting', 'Multi-trunk', 'Clump'],
    techniques: [
      {
        name: 'Pruning (Structural & Maintenance)',
        description: 'Pitanga respond well to pruning. Structural pruning is best done after fruiting. Maintenance pruning, including pinching new shoots, can be done throughout the growing season to encourage ramification and control growth.',
        timing: 'After fruiting for structural pruning. Throughout the growing season for maintenance pruning.',
        maturityStage: 'Can be started from a young age (after 1-2 years of growth).',
        notRecommended: false
      },
      {
        name: 'Wiring',
        description: 'Pitanga branches are flexible when young, but become brittle with age. Use aluminum wire and check frequently to prevent scarring. Older branches may be too stiff to wire and should be shaped by pruning.',
        timing: 'Best done on young, flexible branches during the growing season. Remove wires within 1-2 months.',
        maturityStage: 'Can be wired from a young age, typically when branches are still pliable.',
        notRecommended: false
      },
      {
        name: 'Repotting',
        description: 'Pitanga bonsai require regular repotting to maintain root health and vigor.',
        timing: 'Every 1-2 years for young trees, every 2-3 years for older trees. Best done in early spring before new growth emerges.',
        maturityStage: 'Can be repotted from a young age (after 1-2 years of growth).',
        notRecommended: false
      },
      {
        name: 'Root Pruning',
        description: 'During repotting, prune roots to encourage fine root growth and prevent the tree from becoming pot-bound. Remove up to 1/3 of the root mass.',
        timing: 'During spring repotting, before active growth begins.',
        maturityStage: 'Can be root pruned from a young age, typically during the first repotting.',
        notRecommended: false
      },
      {
        name: 'Defoliation (Total, Partial)',
        description: 'Partial defoliation can be used to reduce leaf size and encourage ramification on healthy, vigorous trees. Total defoliation is generally not recommended.',
        timing: 'Late spring to early summer, after the first flush of leaves has hardened off. Only on healthy trees.',
        maturityStage: 'Best for healthy, well-established trees. Avoid on weak or young trees.',
        notRecommended: false
      },
      {
        name: 'Pinching',
        description: 'Pinching new growth tips helps to promote ramification and reduce leaf size.',
        timing: 'Throughout the growing season as new shoots extend. Pinch back to 1-2 leaves.',
        maturityStage: 'Can be started on young, vigorous trees once new growth appears.',
        notRecommended: false
      },
      {
        name: 'Grafting (Scion grafting, Thread grafting, Approach grafting)',
        description: 'Grafting can be used to improve branch placement or to introduce desirable characteristics.',
        timing: 'Best done during the active growing season (spring to summer).',
        maturityStage: 'Can be performed on well-established trees. Rootstock should be healthy.',
        notRecommended: false
      },
      {
        name: 'Jin (Deadwood Technique)',
        description: 'Jin is generally not common for Pitanga as their wood is not as durable as conifers and can rot. If attempted, the deadwood must be meticulously treated and sealed to prevent decay.',
        timing: 'Not commonly recommended due to wood rot. If attempted, treat and seal immediately.',
        maturityStage: 'Only on very mature and healthy trees. Generally not recommended for this species.',
        notRecommended: true
      },
      {
        name: 'Shari (Trunk Deadwood Technique)',
        description: 'Shari is generally not recommended for Pitanga due to their soft wood and susceptibility to rot. If attempted, extensive preservation is required.',
        timing: 'Not commonly recommended due to wood rot. If attempted, treat and seal immediately.',
        maturityStage: 'Only on very mature and healthy trees. Generally not recommended for this species.',
        notRecommended: true
      },
      {
        name: 'Nebari Development (Surface Roots)',
        description: 'Pitanga can develop good nebari with proper techniques. Root pruning and careful placement during repotting can encourage a strong, radial root flare.',
        timing: 'Best addressed during repotting in spring.',
        maturityStage: 'Can be started from a young age (after 1-2 years of growth).',
        notRecommended: false
      },
      {
        name: 'Carving',
        description: 'Carving on Pitanga is generally limited due to their soft wood and susceptibility to rot. It is mostly used for minor refinements or creating small hollows, which must be treated and sealed.',
        timing: 'Can be done year-round, but careful treatment is required. Avoid large carvings.',
        maturityStage: 'Best on mature trees with established trunks. Not recommended for young trees or extensive carving.',
        notRecommended: false
      },
      {
        name: 'Air Layering',
        description: 'Pitanga can be air layered successfully, making it a viable method for propagation. It allows for the creation of new root systems on a branch while still attached to the parent plant.',
        timing: 'Best done in late spring to early summer when the tree is actively growing and sap is flowing strongly. Roots typically form within 2-3 months.',
        maturityStage: 'Can be performed on healthy, established branches of various sizes. Suitable for both young and mature trees.',
        notRecommended: false
      },
      {
        name: 'Fertilizing',
        description: 'Pitanga benefit from regular, balanced fertilization during their growing season to support their vigorous growth and fruiting. Use a fertilizer with a slightly higher phosphorus and potassium content to encourage flowering and fruiting.',
        timing: 'Every 2-4 weeks during the growing season (spring to autumn). Reduce or stop during winter dormancy.',
        maturityStage: 'Start fertilizing once the tree is established and actively growing, typically after the first year.',
        notRecommended: false
      },
      {
        name: 'Pest and Disease Management',
        description: 'Pitanga are generally robust but can be affected by aphids, scale, and powdery mildew. Good air circulation and proper watering are essential for prevention. Treat with appropriate organic or chemical solutions if problems arise.',
        timing: 'Inspect regularly, especially during warmer months. Treat upon first sign of infestation.',
        maturityStage: 'Applicable to all stages of development.',
        notRecommended: false
      },
      {
        name: 'Watering and Humidity Control',
        description: 'Pitanga prefer consistently moist soil but are sensitive to waterlogging. Water thoroughly when the topsoil feels slightly dry. They appreciate moderate to high humidity, especially during hot, dry periods.',
        timing: 'Water as needed, adjusting frequency based on temperature, humidity, and soil mix. Maintain humidity year-round, especially in dry environments.',
        maturityStage: 'Crucial for all stages of development, from young seedlings to mature trees.',
        notRecommended: false
      }
    ],
    images: {
      developmentStages: {
        early: '/bonsai_photos/pitanga/development_stages/pitanga_early_stage.jpg',
        middle: '/bonsai_photos/pitanga/development_stages/pitanga_middle_stage.jpg',
        mature: '/bonsai_photos/pitanga/development_stages/pitanga_mature_stage.jpg'
      },
      seasons: {
        spring: '/bonsai_photos/pitanga/seasons/pitanga_spring.jpg',
        summer: '/bonsai_photos/pitanga/seasons/pitanga_summer.jpg',
        autumn: '/bonsai_photos/pitanga/seasons/pitanga_autumn.jpg',
        winter: '/bonsai_photos/pitanga/seasons/pitanga_winter.jpg'
      },
      styles: {
        informalUpright: '/bonsai_photos/pitanga/styles/pitanga_informal_upright.jpg',
        slanting: '/bonsai_photos/pitanga/styles/pitanga_slanting.jpg',
        multiTrunk: '/bonsai_photos/pitanga/styles/pitanga_multi_trunk.jpg'
      },
      nature: {
        habitat1: '/bonsai_photos/pitanga/nature/pitanga_nature_1.jpg',
        habitat2: '/bonsai_photos/pitanga/nature/pitanga_nature_2.jpg',
        habitat3: '/bonsai_photos/pitanga/nature/pitanga_nature_3.jpg'
      }
    },
    imageCredits: {
      '/bonsai_photos/pitanga/development_stages/pitanga_early_stage.jpg': {
        source: 'Bonsai Empire',
        url: 'https://www.bonsaiempire.com'
      },
      '/bonsai_photos/pitanga/development_stages/pitanga_middle_stage.jpg': {
        source: 'Bonsai Nut',
        url: 'https://www.bonsainut.com'
      },
      '/bonsai_photos/pitanga/development_stages/pitanga_mature_stage.jpg': {
        source: 'Pixabay',
        url: 'https://pixabay.com'
      },
      '/bonsai_photos/pitanga/seasons/pitanga_spring.jpg': {
        source: 'Shutterstock',
        url: 'https://www.shutterstock.com'
      },
      '/bonsai_photos/pitanga/seasons/pitanga_summer.jpg': {
        source: 'Wikimedia Commons',
        url: 'https://commons.wikimedia.org'
      },
      '/bonsai_photos/pitanga/seasons/pitanga_autumn.jpg': {
        source: 'Bonsai Boy of New York',
        url: 'https://www.bonsaiboy.com'
      },
      '/bonsai_photos/pitanga/seasons/pitanga_winter.jpg': {
        source: 'iNaturalist Canada',
        url: 'https://inaturalist.ca'
      },
      '/bonsai_photos/pitanga/styles/pitanga_informal_upright.jpg': {
        source: 'Bonsai Empire',
        url: 'https://www.bonsaiempire.com'
      },
      '/bonsai_photos/pitanga/styles/pitanga_slanting.jpg': {
        source: 'Bonsai Nut',
        url: 'https://www.bonsainut.com'
      },
      '/bonsai_photos/pitanga/styles/pitanga_multi_trunk.jpg': {
        source: 'Pixabay',
        url: 'https://pixabay.com'
      },
      '/bonsai_photos/pitanga/nature/pitanga_nature_1.jpg': {
        source: 'Shutterstock',
        url: 'https://www.shutterstock.com'
      },
      '/bonsai_photos/pitanga/nature/pitanga_nature_2.jpg': {
        source: 'Wikimedia Commons',
        url: 'https://commons.wikimedia.org'
      },
      '/bonsai_photos/pitanga/nature/pitanga_nature_3.jpg': {
        source: 'Bonsai Boy of New York',
        url: 'https://www.bonsaiboy.com'
      }
    }
  },
  {
    id: 'calliandra-depauperata',
    scientificName: 'Calliandra depauperata',
    commonName: 'Dwarf Powder Puff',
    group: 'Fabaceae',
    temperatureMin: 10,
    temperatureMax: 35,
    sunExposure: 'Full sun',
    position: 'Outdoor (protect from frost)',
    leafType: 'Evergreen Broadleaf',
    climate: 'Tropical, Subtropical',
    flowering: 'Yes (white to pink powder-puff like flowers)',
    nativeRegion: 'Brazil',
    difficultyLevel: 'Beginner',
    careTips: {
      general: 'Dwarf Powder Puff bonsai are known for their delicate foliage and unique flowers. They prefer full sun and consistent moisture. Protect from frost.',
      soilType: 'Well-draining bonsai soil mix.',
      feeding: 'Fertilize regularly during the growing season with a balanced fertilizer.',
      watering: 'Water thoroughly when the topsoil feels dry. Reduce watering in winter.'
    },
    bonsaiStyles: ['Informal upright', 'Slanting', 'Multi-trunk', 'Clump'],
    techniques: [
      {
        name: 'Pruning (Structural & Maintenance)',
        description: 'Calliandra depauperata responds well to pruning. Structural pruning is best done after flowering. Maintenance pruning, including pinching new shoots, can be done throughout the growing season to encourage ramification and control growth.',
        timing: 'After flowering for structural pruning. Throughout the growing season for maintenance pruning.',
        maturityStage: 'Can be started from a young age (after 1-2 years of growth).',
        notRecommended: false
      },
      {
        name: 'Wiring',
        description: 'Calliandra depauperata branches are flexible when young, but care must be taken when wiring. Use aluminum wire and check frequently to prevent scarring. Older branches may be too stiff to wire and should be shaped by pruning.',
        timing: 'Best done on young, flexible branches during the growing season. Remove wires within 1-2 months.',
        maturityStage: 'Can be wired from a young age, typically when branches are still pliable.',
        notRecommended: false
      },
      {
        name: 'Repotting',
        description: 'Calliandra depauperata bonsai require regular repotting to maintain root health and vigor.',
        timing: 'Every 1-2 years for young trees, every 2-3 years for older trees. Best done in early spring before new growth emerges.',
        maturityStage: 'Can be repotted from a young age (after 1-2 years of growth).',
        notRecommended: false
      },
      {
        name: 'Root Pruning',
        description: 'During repotting, prune roots to encourage fine root growth and prevent the tree from becoming pot-bound. Remove up to 1/3 of the root mass.',
        timing: 'During spring repotting, before active growth begins.',
        maturityStage: 'Can be root pruned from a young age, typically during the first repotting.',
        notRecommended: false
      },
      {
        name: 'Defoliation (Total, Partial)',
        description: 'Partial defoliation can be used to reduce leaf size and encourage ramification on healthy, vigorous trees. Total defoliation is generally not recommended.',
        timing: 'Late spring to early summer, after the first flush of leaves has hardened off. Only on healthy trees.',
        maturityStage: 'Best for healthy, well-established trees. Avoid on weak or young trees.',
        notRecommended: false
      },
      {
        name: 'Pinching',
        description: 'Pinching new growth tips helps to promote ramification and reduce leaf size.',
        timing: 'Throughout the growing season as new shoots extend. Pinch back to 1-2 leaves.',
        maturityStage: 'Can be started on young, vigorous trees once new growth appears.',
        notRecommended: false
      },
      {
        name: 'Grafting (Scion grafting, Thread grafting, Approach grafting)',
        description: 'Grafting can be used to improve branch placement or to introduce desirable characteristics.',
        timing: 'Best done during the active growing season (spring to summer).',
        maturityStage: 'Can be performed on well-established trees. Rootstock should be healthy.',
        notRecommended: false
      },
      {
        name: 'Jin (Deadwood Technique)',
        description: 'Jin is generally not common for Calliandra depauperata as their wood is not as durable as conifers and can rot. If attempted, the deadwood must be meticulously treated and sealed to prevent decay.',
        timing: 'Not commonly recommended due to wood rot. If attempted, treat and seal immediately.',
        maturityStage: 'Only on very mature and healthy trees. Generally not recommended for this species.',
        notRecommended: true
      },
      {
        name: 'Shari (Trunk Deadwood Technique)',
        description: 'Shari is generally not recommended for Calliandra depauperata due to their soft wood and susceptibility to rot. If attempted, extensive preservation is required.',
        timing: 'Not commonly recommended due to wood rot. If attempted, treat and seal immediately.',
        maturityStage: 'Only on very mature and healthy trees. Generally not recommended for this species.',
        notRecommended: true
      },
      {
        name: 'Nebari Development (Surface Roots)',
        description: 'Calliandra depauperata can develop good nebari with proper techniques. Root pruning and careful placement during repotting can encourage a strong, radial root flare.',
        timing: 'Best addressed during repotting in spring.',
        maturityStage: 'Can be started from a young age (after 1-2 years of growth).',
        notRecommended: false
      },
      {
        name: 'Carving',
        description: 'Carving on Calliandra depauperata is generally limited due to their soft wood and susceptibility to rot. It is mostly used for minor refinements or creating small hollows, which must be treated and sealed.',
        timing: 'Can be done year-round, but careful treatment is required. Avoid large carvings.',
        maturityStage: 'Best on mature trees with established trunks. Not recommended for young trees or extensive carving.',
        notRecommended: false
      },
      {
        name: 'Air Layering',
        description: 'Calliandra depauperata can be air layered successfully, making it a viable method for propagation. It allows for the creation of new root systems on a branch while still attached to the parent plant.',
        timing: 'Best done in late spring to early summer when the tree is actively growing and sap is flowing strongly. Roots typically form within 2-3 months.',
        maturityStage: 'Can be performed on healthy, established branches of various sizes. Suitable for both young and mature trees.',
        notRecommended: false
      },
      {
        name: 'Fertilizing',
        description: 'Calliandra depauperata benefit from regular, balanced fertilization during their growing season to support their vigorous growth and flowering.',
        timing: 'Every 2-4 weeks during the growing season (spring to autumn). Reduce or stop during winter dormancy.',
        maturityStage: 'Start fertilizing once the tree is established and actively growing, typically after the first year.',
        notRecommended: false
      },
      {
        name: 'Pest and Disease Management',
        description: 'Calliandra depauperata are generally robust but can be affected by common pests. Good air circulation and proper watering are essential for prevention. Treat with appropriate organic or chemical solutions if problems arise.',
        timing: 'Inspect regularly, especially during warmer months. Treat upon first sign of infestation.',
        maturityStage: 'Applicable to all stages of development.',
        notRecommended: false
      },
      {
        name: 'Watering and Humidity Control',
        description: 'Calliandra depauperata prefer consistently moist soil but are sensitive to waterlogging. Water thoroughly when the topsoil feels slightly dry. They appreciate moderate to high humidity, especially during hot, dry periods.',
        timing: 'Water as needed, adjusting frequency based on temperature, humidity, and soil mix. Maintain humidity year-round, especially in dry environments.',
        maturityStage: 'Crucial for all stages of development, from young seedlings to mature trees.',
        notRecommended: false
      }
    ],
    images: {
      developmentStages: {
        early: '/bonsai_photos/calliandra_depauperata/development_stages/calliandra_depauperata_early_stage.jpg',
        middle: '/bonsai_photos/calliandra_depauperata/development_stages/calliandra_depauperata_middle_stage.jpg',
        mature: '/bonsai_photos/calliandra_depauperata/development_stages/calliandra_depauperata_mature_stage.jpg'
      },
      seasons: {
        spring: '/bonsai_photos/calliandra_depauperata/seasons/calliandra_depauperata_spring.jpg',
        summer: '/bonsai_photos/calliandra_depauperata/seasons/calliandra_depauperata_summer.jpg',
        autumn: '/bonsai_photos/calliandra_depauperata/seasons/calliandra_depauperata_autumn.jpg',
        winter: '/bonsai_photos/calliandra_depauperata/seasons/calliandra_depauperata_winter.jpg'
      },
      styles: {
        informalUpright: '/bonsai_photos/calliandra_depauperata/styles/calliandra_depauperata_informal_upright.jpg',
        slanting: '/bonsai_photos/calliandra_depauperata/styles/calliandra_depauperata_slanting.jpg',
        multiTrunk: '/bonsai_photos/calliandra_depauperata/styles/calliandra_depauperata_multi_trunk.jpg'
      },
      nature: {
        habitat1: '/bonsai_photos/calliandra_depauperata/nature/calliandra_depauperata_nature_1.jpg',
        habitat2: '/bonsai_photos/calliandra_depauperata/nature/calliandra_depauperata_nature_2.jpg',
        habitat3: '/bonsai_photos/calliandra_depauperata/nature/calliandra_depauperata_nature_3.jpg'
      }
    },
    imageCredits: {
      '/bonsai_photos/calliandra_depauperata/development_stages/calliandra_depauperata_early_stage.jpg': {
        source: 'Bonsai Empire',
        url: 'https://www.bonsaiempire.com'
      },
      '/bonsai_photos/calliandra_depauperata/development_stages/calliandra_depauperata_middle_stage.jpg': {
        source: 'Bonsai Nut',
        url: 'https://www.bonsainut.com'
      },
      '/bonsai_photos/calliandra_depauperata/development_stages/calliandra_depauperata_mature_stage.jpg': {
        source: 'Pixabay',
        url: 'https://pixabay.com'
      },
      '/bonsai_photos/calliandra_depauperata/seasons/calliandra_depauperata_spring.jpg': {
        source: 'Shutterstock',
        url: 'https://www.shutterstock.com'
      },
      '/bonsai_photos/calliandra_depauperata/seasons/calliandra_depauperata_summer.jpg': {
        source: 'Wikimedia Commons',
        url: 'https://commons.wikimedia.org'
      },
      '/bonsai_photos/calliandra_depauperata/seasons/calliandra_depauperata_autumn.jpg': {
        source: 'Bonsai Boy of New York',
        url: 'https://www.bonsaiboy.com'
      },
      '/bonsai_photos/calliandra_depauperata/seasons/calliandra_depauperata_winter.jpg': {
        source: 'iNaturalist Canada',
        url: 'https://inaturalist.ca'
      },
      '/bonsai_photos/calliandra_depauperata/styles/calliandra_depauperata_informal_upright.jpg': {
        source: 'Bonsai Empire',
        url: 'https://www.bonsaiempire.com'
      },
      '/bonsai_photos/calliandra_depauperata/styles/calliandra_depauperata_slanting.jpg': {
        source: 'Bonsai Nut',
        url: 'https://www.bonsainut.com'
      },
      '/bonsai_photos/calliandra_depauperata/styles/calliandra_depauperata_multi_trunk.jpg': {
        source: 'Pixabay',
        url: 'https://pixabay.com'
      },
      '/bonsai_photos/calliandra_depauperata/nature/calliandra_depauperata_nature_1.jpg': {
        source: 'Shutterstock',
        url: 'https://www.shutterstock.com'
      },
      '/bonsai_photos/calliandra_depauperata/nature/calliandra_depauperata_nature_2.jpg': {
        source: 'Wikimedia Commons',
        url: 'https://commons.wikimedia.org'
      },
      '/bonsai_photos/calliandra_depauperata/nature/calliandra_depauperata_nature_3.jpg': {
        source: 'Bonsai Boy of New York',
        url: 'https://www.bonsaiboy.com'
      }
    }
  }
];

