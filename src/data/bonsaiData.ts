import type { BonsaiSpecies, DifficultyLevel, Climate } from '../types/bonsai';

export const bonsaiSpecies: BonsaiSpecies[] = [
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
    category: 'Beginner',
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
        source: 'Bonsai Empire',
        url: 'https://www.bonsaiempire.com/tree-species/ficus'
      },
      '/bonsai_photos/ficus_retusa/development_stages/ficus_retusa_middle_stage.jpg': {
        source: 'Bonsai Empire',
        url: 'https://www.bonsaiempire.com/tree-species/ficus'
      },
      '/bonsai_photos/ficus_retusa/development_stages/ficus_retusa_mature_stage.jpg': {
        source: 'Bonsai Empire',
        url: 'https://www.bonsaiempire.com/tree-species/ficus'
      },
      '/bonsai_photos/ficus_retusa/seasons/ficus_retusa_spring.jpg': {
        source: 'Bonsai Empire',
        url: 'https://www.bonsaiempire.com/tree-species/ficus'
      },
      '/bonsai_photos/ficus_retusa/seasons/ficus_retusa_summer.png': {
        source: 'Bonsai Empire',
        url: 'https://www.bonsaiempire.com/tree-species/ficus'
      },
      '/bonsai_photos/ficus_retusa/seasons/ficus_retusa_autumn.jpg': {
        source: 'Bonsai Empire',
        url: 'https://www.bonsaiempire.com/tree-species/ficus'
      },
      '/bonsai_photos/ficus_retusa/seasons/ficus_retusa_winter.jpg': {
        source: 'Bonsai Empire',
        url: 'https://www.bonsaiempire.com/tree-species/ficus'
      },
      '/bonsai_photos/ficus_retusa/styles/ficus_retusa_root_over_rock.jpg': {
        source: 'Bonsai Empire',
        url: 'https://www.bonsaiempire.com/tree-species/ficus'
      },
      '/bonsai_photos/ficus_retusa/styles/ficus_retusa_banyan_style.jpg': {
        source: 'Bonsai Empire',
        url: 'https://www.bonsaiempire.com/tree-species/ficus'
      },
      '/bonsai_photos/ficus_retusa/nature/ficus_retusa_nature_1.jpg': {
        source: 'iNaturalist Canada',
        url: 'https://inaturalist.ca'
      },
      '/bonsai_photos/ficus_retusa/nature/ficus_retusa_nature_2.jpg': {
        source: 'Reddit - r/FicusTrees',
        url: 'https://www.reddit.com/r/FicusTrees/'
      },
      '/bonsai_photos/ficus_retusa/nature/ficus_retusa_nature_3.jpg': {
        source: 'Gardener\'s Path',
        url: 'https://gardenerspath.com'
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
        source: 'Bonsai Empire',
        url: 'https://www.bonsaiempire.com/tree-species/juniper'
      },
      '/bonsai_photos/juniper/development_stages/juniper_middle_stage.jpg': {
        source: 'Eastern Leaf',
        url: 'https://easternleaf.com'
      },
      '/bonsai_photos/juniper/development_stages/juniper_mature_stage.jpg': {
        source: 'Bonsai Empire',
        url: 'https://www.bonsaiempire.com/tree-species/juniper'
      },
      '/bonsai_photos/juniper/seasons/juniper_spring.jpg': {
        source: 'Bonsai Empire',
        url: 'https://www.bonsaiempire.com/tree-species/juniper'
      },
      '/bonsai_photos/juniper/seasons/juniper_summer.jpg': {
        source: 'Bonsai Empire',
        url: 'https://www.bonsaiempire.com/tree-species/juniper'
      },
      '/bonsai_photos/juniper/seasons/juniper_autumn.jpg': {
        source: 'Bonsai Empire',
        url: 'https://www.bonsaiempire.com/tree-species/juniper'
      },
      '/bonsai_photos/juniper/seasons/juniper_winter.jpg': {
        source: 'Bonsai Empire',
        url: 'https://www.bonsaiempire.com/tree-species/juniper'
      },
      '/bonsai_photos/juniper/styles/juniper_cascade.jpg': {
        source: 'Bonsai Empire',
        url: 'https://www.bonsaiempire.com/tree-species/juniper'
      },
      '/bonsai_photos/juniper/styles/juniper_upright.jpg': {
        source: 'Bonsai Empire',
        url: 'https://www.bonsaiempire.com/tree-species/juniper'
      },
      '/bonsai_photos/juniper/styles/juniper_literati.jpg': {
        source: 'Bonsai Empire',
        url: 'https://www.bonsaiempire.com/tree-species/juniper'
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
        source: 'Bonsai Empire',
        url: 'https://www.bonsaiempire.com/tree-species/maple'
      },
      '/bonsai_photos/japanese_maple/development_stages/japanese_maple_middle_stage.jpg': {
        source: 'Bonsai-En',
        url: 'https://bonsai-en.com.au'
      },
      '/bonsai_photos/japanese_maple/development_stages/japanese_maple_mature_stage.jpg': {
        source: 'Bonsai Empire',
        url: 'https://www.bonsaiempire.com/tree-species/maple'
      },
      '/bonsai_photos/japanese_maple/seasons/japanese_maple_spring.jpg': {
        source: 'Bonsai Empire',
        url: 'https://www.bonsaiempire.com/tree-species/maple'
      },
      '/bonsai_photos/japanese_maple/seasons/japanese_maple_summer.jpg': {
        source: 'Bonsai Empire',
        url: 'https://www.bonsaiempire.com/tree-species/maple'
      },
      '/bonsai_photos/japanese_maple/seasons/japanese_maple_autumn.jpg': {
        source: 'Bonsai Empire',
        url: 'https://www.bonsaiempire.com/tree-species/maple'
      },
      '/bonsai_photos/japanese_maple/seasons/japanese_maple_winter.jpg': {
        source: 'Bonsai Empire',
        url: 'https://www.bonsaiempire.com/tree-species/maple'
      },
      '/bonsai_photos/japanese_maple/styles/japanese_maple_informal_upright.jpg': {
        source: 'Bonsai Empire',
        url: 'https://www.bonsaiempire.com/tree-species/maple'
      },
      '/bonsai_photos/japanese_maple/styles/japanese_maple_cascade.jpg': {
        source: 'Bonsai Empire',
        url: 'https://www.bonsaiempire.com/tree-species/maple'
      },
      '/bonsai_photos/japanese_maple/styles/japanese_maple_raft.jpg': {
        source: 'Bonsai Empire',
        url: 'https://www.bonsaiempire.com/tree-species/maple'
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
    category: 'Rare/Specialty',
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
        early: '/bonsai_photos/jacaranda/development_stages/jacaranda_early_stage.jpg',
        middle: '/bonsai_photos/jacaranda/development_stages/jacaranda_middle_stage.jpg',
        mature: '/bonsai_photos/jacaranda/development_stages/jacaranda_mature_stage.jpg'
      },
      seasons: {
        spring: '/bonsai_photos/jacaranda/seasons/jacaranda_spring.jpg',
        summer: '/bonsai_photos/jacaranda/seasons/jacaranda_summer.jpg',
        autumn: '/bonsai_photos/jacaranda/seasons/jacaranda_autumn.jpg',
        winter: '/bonsai_photos/jacaranda/seasons/jacaranda_winter.jpg'
      },
      styles: {
        informalUpright: '/bonsai_photos/jacaranda/styles/jacaranda_informal_upright.jpg',
        semiCascade: '/bonsai_photos/jacaranda/styles/jacaranda_semi_cascade.jpg'
      },
      nature: {
        habitat1: '/bonsai_photos/jacaranda/nature/jacaranda_nature_1.jpg',
        habitat2: '/bonsai_photos/jacaranda/nature/jacaranda_nature_2.jpg',
        habitat3: '/bonsai_photos/jacaranda/nature/jacaranda_nature_3.jpg'
      }
    },
    imageCredits: {
      '/bonsai_photos/jacaranda/development_stages/jacaranda_early_stage.jpg': {
        source: 'Bonsai Empire',
        url: 'https://www.bonsaiempire.com/tree-species/jacaranda'
      },
      '/bonsai_photos/jacaranda/development_stages/jacaranda_middle_stage.jpg': {
        source: 'Bonsai Empire',
        url: 'https://www.bonsaiempire.com/tree-species/jacaranda'
      },
      '/bonsai_photos/jacaranda/development_stages/jacaranda_mature_stage.jpg': {
        source: 'Bonsai Empire',
        url: 'https://www.bonsaiempire.com/tree-species/jacaranda'
      },
      '/bonsai_photos/jacaranda/seasons/jacaranda_spring.jpg': {
        source: 'Bonsai Empire',
        url: 'https://www.bonsaiempire.com/tree-species/jacaranda'
      },
      '/bonsai_photos/jacaranda/seasons/jacaranda_summer.jpg': {
        source: 'Bonsai Empire',
        url: 'https://www.bonsaiempire.com/tree-species/jacaranda'
      },
      '/bonsai_photos/jacaranda/seasons/jacaranda_autumn.jpg': {
        source: 'Bonsai Empire',
        url: 'https://www.bonsaiempire.com/tree-species/jacaranda'
      },
      '/bonsai_photos/jacaranda/seasons/jacaranda_winter.jpg': {
        source: 'Bonsai Empire',
        url: 'https://www.bonsaiempire.com/tree-species/jacaranda'
      },

      '/bonsai_photos/jacaranda/styles/jacaranda_informal_upright.jpg': {
        source: 'Bonsai Empire',
        url: 'https://www.bonsaiempire.com/tree-species/jacaranda'
      },
      '/bonsai_photos/jacaranda/styles/jacaranda_semi_cascade.jpg': {
        source: 'Bonsai Empire',
        url: 'https://www.bonsaiempire.com/tree-species/jacaranda'
      },
      '/bonsai_photos/jacaranda/nature/jacaranda_nature_1.jpg': {
        source: 'The Spruce',
        url: 'https://www.thespruce.com'
      },
      '/bonsai_photos/jacaranda/nature/jacaranda_nature_2.jpg': {
        source: 'Shutterstock',
        url: 'https://www.shutterstock.com'
      },
      '/bonsai_photos/jacaranda/nature/jacaranda_nature_3.jpg': {
        source: 'Wikimedia Commons',
        url: 'https://commons.wikimedia.org'
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
    category: 'Rare/Specialty',
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
    category: 'Rare/Specialty',
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
  },
  // NEW BEGINNER SPECIES
  {
    id: 'chinese-elm',
    scientificName: 'Ulmus parvifolia',
    commonName: 'Chinese Elm',
    group: 'Ulmaceae',
    temperatureMin: 15,
    temperatureMax: 30,
    sunExposure: 'Full sun to partial shade',
    position: 'Indoor/Outdoor',
    leafType: 'Deciduous',
    climate: 'Temperate',
    flowering: 'Inconspicuous',
    nativeRegion: 'China, Japan, Korea',
    difficultyLevel: 'Beginner',
    category: 'Beginner',
    careTips: {
      general: 'The Chinese Elm is one of the most popular bonsai for beginners. It develops fine branch ramification with small leaves and attractive scaling bark. Very forgiving and adaptable to indoor or outdoor conditions.',
      soilType: 'Well-draining bonsai mix with akadama, pumice, and lava rock.',
      feeding: 'Fertilize every 2 weeks during spring and fall with balanced fertilizer.',
      watering: 'Water when soil surface begins to dry. Keep consistently moist but not waterlogged.'
    },
    bonsaiStyles: ['Informal Upright', 'Broom', 'Slanting', 'Semi-Cascade'],
    techniques: [
    {
      name: 'Root Pruning',
      description: 'Chinese Elm tolerates root pruning well. Remove up to 1/3 of root mass during repotting to encourage fine feeder roots.',
      timing: 'During spring repotting when tree is entering active growth.',
      maturityStage: 'Can begin root pruning during first repotting after 1-2 years.',
      notRecommended: false
    },
    {
      name: 'Defoliation (Total, Partial)',
      description: 'Defoliation reduces leaf size, encourages ramification, and allows light to interior branches. Chinese Elm responds well to defoliation when healthy and vigorous.',
      timing: 'Mid-summer (June-July) after first flush has hardened. Only defoliate healthy, vigorous trees. Can be done annually or every other year for deciduous species.',
      maturityStage: 'Only on established, healthy trees (minimum 3-4 years old). Not recommended for weak or recently repotted trees.',
      notRecommended: false
    },
    {
      name: 'Pinching',
      description: 'Pinching new growth encourages ramification and compact growth. Very effective technique for Chinese Elm to develop dense foliage pads.',
      timing: 'Throughout growing season. Pinch new shoots back to 1-2 leaves once they extend 3-4 leaves.',
      maturityStage: 'Can begin on young trees once vigorous growth is established.',
      notRecommended: false
    },
    {
      name: 'Grafting (Scion grafting, Thread grafting, Approach grafting)',
      description: 'Chinese Elm accepts grafts well. Thread grafting can add branches in desired locations. Approach grafting useful for trunk fusion or adding roots.',
      timing: 'Best during active growing season (late spring to early summer) when sap flow is strong.',
      maturityStage: 'Perform on established trees (3-5 years old) with good vigor.',
      notRecommended: false
    },
    {
      name: 'Jin (Deadwood Technique)',
      description: 'Can be created on Chinese Elm. The wood must be treated with lime sulfur to prevent rot. Creates dramatic aged appearance.',
      timing: 'Can be done during growing season when bark peels more easily. Apply lime sulfur for preservation and bleaching.',
      maturityStage: 'Best on mature trees with established branches. Not recommended for young trees.',
      notRecommended: false
    },
    {
      name: 'Shari (Trunk Deadwood Technique)',
      description: 'Shari is not recommended for Chinese Elm due to tendency for exposed wood to rot quickly. Deciduous and broadleaf evergreen trees rarely use this technique.',
      timing: 'Not recommended for this species.',
      maturityStage: 'Not applicable.',
      notRecommended: true
    },
    {
      name: 'Nebari Development (Surface Roots)',
      description: 'Chinese Elm develops excellent nebari naturally. Techniques like root pruning, ground layering, and air layering enhance radial root spread.',
      timing: 'Work on nebari during spring repotting. Can be developed over multiple years.',
      maturityStage: 'Begin developing nebari from young age (2-3 years) for best results.',
      notRecommended: false
    },
    {
      name: 'Carving',
      description: 'Carving can be done on Chinese Elm to create hollows or refine deadwood. Requires thorough treatment with wood hardener and sealant to prevent rot.',
      timing: 'Best during growing season when wood is easier to work. Treat immediately with preservatives.',
      maturityStage: 'Only on mature trees. Limited use due to rot susceptibility.',
      notRecommended: false
    },
    {
      name: 'Air Layering',
      description: 'Chinese Elm responds excellently to air layering. Very effective technique for creating new trees from branches or improving trunk taper and nebari.',
      timing: 'Late spring to early summer when tree is in active growth. Roots typically form within 2-3 months.',
      maturityStage: 'Can be performed on healthy branches of various sizes. Works on both young and mature trees.',
      notRecommended: false
    },
    {
      name: 'Fertilizing',
      description: 'Chinese Elm is a vigorous grower and benefits from regular fertilization during growing season. Use balanced fertilizer or slightly higher nitrogen in spring.',
      timing: 'Every 2-3 weeks during spring through autumn. Reduce or stop during winter dormancy.',
      maturityStage: 'Begin fertilizing once tree is established and actively growing.',
      notRecommended: false
    },
    {
      name: 'Pest and Disease Management',
      description: 'Chinese Elm can be affected by aphids, spider mites, scale insects. Good air circulation and proper watering prevent most issues. Treat with appropriate organic or chemical controls when needed.',
      timing: 'Monitor regularly throughout growing season. Treat immediately upon detection.',
      maturityStage: 'Applicable to all stages of development.',
      notRecommended: false
    },
    {
      name: 'Watering and Humidity Control',
      description: 'Chinese Elm prefers consistent moisture but good drainage. Allow topsoil to dry slightly between waterings. Appreciates occasional misting in dry environments.',
      timing: 'Water as needed based on soil moisture, temperature, and season. More frequent in summer, reduced in winter.',
      maturityStage: 'Critical for all stages of development.',
      notRecommended: false
    }
  ],
    images: {
      developmentStages: {
        early: '/bonsai_photos/placeholder/placeholder_early.jpg',
        middle: '/bonsai_photos/placeholder/placeholder_middle.jpg',
        mature: '/bonsai_photos/placeholder/placeholder_mature.jpg'
      },
      seasons: {
        spring: '/bonsai_photos/placeholder/placeholder_spring.jpg',
        summer: '/bonsai_photos/placeholder/placeholder_summer.jpg',
        autumn: '/bonsai_photos/placeholder/placeholder_autumn.jpg',
        winter: '/bonsai_photos/placeholder/placeholder_winter.jpg'
      },
      styles: {},
      nature: {}
    },
    imageCredits: {}
  },
  {
    id: 'jade-tree',
    scientificName: 'Crassula ovata',
    commonName: 'Jade Tree, Money Tree',
    group: 'Crassulaceae',
    temperatureMin: 10,
    temperatureMax: 30,
    sunExposure: 'Bright indirect light',
    position: 'Indoor',
    leafType: 'Evergreen Succulent',
    climate: 'Subtropical',
    flowering: 'Small white or pink flowers (rare indoors)',
    nativeRegion: 'South Africa',
    difficultyLevel: 'Beginner',
    category: 'Beginner',
    careTips: {
      general: 'A succulent plant perfect for absolute beginners. Thick woody stems and plump oval leaves give it a natural miniature tree appearance. Extremely forgiving and can survive neglect better than most bonsai.',
      soilType: 'Well-draining succulent mix with excellent drainage. Essential to prevent root rot.',
      feeding: 'Fertilize once monthly during spring and fall with half-strength balanced fertilizer. Light feeder.',
      watering: 'Water sparingly. Allow soil to dry completely between waterings, typically every 2-3 weeks. Overwatering is the main cause of death.'
    },
    bonsaiStyles: ['Informal Upright', 'Slanting', 'Cascade', 'Root-over-Rock'],
    techniques: [
    {
      name: 'Root Pruning',
      description: 'Jade Tree requires careful root pruning with caution. Remove up to 1/4 of root mass during repotting to encourage fine feeder roots. Succulents are sensitive to root damage.',
      timing: 'During growing season repotting when tree is actively growing.',
      maturityStage: 'Can begin root pruning during first repotting after 1-2 years.',
      notRecommended: false
    },
    {
      name: 'Defoliation (Total, Partial)',
      description: 'Defoliation is not recommended for Jade Tree. Succulents store water in leaves and defoliation causes stress. Selective leaf removal only when necessary.',
      timing: 'Not recommended as a regular technique.',
      maturityStage: 'Not applicable.',
      notRecommended: true
    },
    {
      name: 'Pinching',
      description: 'Pinching new growth encourages ramification and branching. Useful technique for Jade Tree to develop fuller canopy.',
      timing: 'Throughout growing season. Pinch new shoots back to desired length once they extend several nodes.',
      maturityStage: 'Can begin on young trees once vigorous growth is established.',
      notRecommended: false
    },
    {
      name: 'Grafting (Scion grafting, Thread grafting, Approach grafting)',
      description: 'Grafting is rarely used on Jade Tree as succulents propagate easily from cuttings and grafting success rates are low. Not a recommended technique for this species.',
      timing: 'Not recommended for succulents.',
      maturityStage: 'Not applicable.',
      notRecommended: true
    },
    {
      name: 'Jin (Deadwood Technique)',
      description: 'Jin is not recommended for Jade Tree due to succulent nature - exposed tissue will rot. Not a suitable technique for this species.',
      timing: 'Not recommended.',
      maturityStage: 'Not applicable.',
      notRecommended: true
    },
    {
      name: 'Shari (Trunk Deadwood Technique)',
      description: 'Shari is not recommended for Jade Tree due to succulent nature. Not applicable to succulents.',
      timing: 'Not recommended for this species.',
      maturityStage: 'Not applicable.',
      notRecommended: true
    },
    {
      name: 'Nebari Development (Surface Roots)',
      description: 'Jade Tree can develop good surface roots. Techniques like root pruning, strategic repotting, and root exposure enhance radial root spread.',
      timing: 'Work on nebari during spring repotting. Can be developed over multiple years.',
      maturityStage: 'Begin developing nebari from young age (2-3 years) for best results.',
      notRecommended: false
    },
    {
      name: 'Carving',
      description: 'Carving is not recommended for Jade Tree due to soft succulent tissue that will rot and not heal properly. Not a suitable technique for this species.',
      timing: 'Not recommended.',
      maturityStage: 'Not applicable.',
      notRecommended: true
    },
    {
      name: 'Air Layering',
      description: 'Air layering is not necessary for Jade Tree as succulents propagate extremely easily from cuttings. Simply cutting and planting is more effective.',
      timing: 'Not recommended - use cuttings instead.',
      maturityStage: 'Not applicable.',
      notRecommended: true
    },
    {
      name: 'Fertilizing',
      description: 'Jade Tree  benefits from regular fertilization during growing season. Use diluted balanced fertilizer - succulents need less feeding.',
      timing: 'Monthly during growing season. Reduce in winter.',
      maturityStage: 'Begin fertilizing once tree is established and actively growing.',
      notRecommended: false
    },
    {
      name: 'Pest and Disease Management',
      description: 'Jade Tree can be affected by mealybugs, scale insects, root rot from overwatering. Avoid overwatering to prevent root rot. Treat with appropriate organic or chemical controls when needed.',
      timing: 'Monitor regularly throughout growing season. Treat immediately upon detection.',
      maturityStage: 'Applicable to all stages of development.',
      notRecommended: false
    },
    {
      name: 'Watering and Humidity Control',
      description: 'Jade Tree prefers infrequent watering - allow soil to dry between waterings. Water deeply but infrequently. Prefers low humidity, avoid misting.',
      timing: 'Water as needed based on soil moisture, temperature, and season. Minimal watering in winter.',
      maturityStage: 'Critical for all stages of development.',
      notRecommended: false
    }
  ],
    images: {
      developmentStages: {
        early: '/bonsai_photos/placeholder/placeholder_early.jpg',
        middle: '/bonsai_photos/placeholder/placeholder_middle.jpg',
        mature: '/bonsai_photos/placeholder/placeholder_mature.jpg'
      },
      seasons: {
        spring: '/bonsai_photos/placeholder/placeholder_spring.jpg',
        summer: '/bonsai_photos/placeholder/placeholder_summer.jpg',
        autumn: '/bonsai_photos/placeholder/placeholder_autumn.jpg',
        winter: '/bonsai_photos/placeholder/placeholder_winter.jpg'
      },
      styles: {},
      nature: {}
    },
    imageCredits: {}
  },
  {
    id: 'fukien-tea',
    scientificName: 'Carmona retusa',
    commonName: 'Fukien Tea',
    group: 'Boraginaceae',
    temperatureMin: 13,
    temperatureMax: 24,
    sunExposure: 'Bright indirect light',
    position: 'Indoor',
    leafType: 'Evergreen',
    climate: 'Tropical',
    flowering: 'Small white flowers year-round',
    nativeRegion: 'Southern China, Southeast Asia',
    difficultyLevel: 'Beginner',
    category: 'Beginner',
    careTips: {
      general: 'Popular indoor bonsai with small dark green leaves and white flowers that can appear year-round. Develops attractive light gray bark with age. Prefers warm, humid conditions.',
      soilType: 'Well-draining bonsai mix, slightly acidic pH 6.0-6.5.',
      feeding: 'Fertilize every 2 weeks during spring through fall, monthly in winter.',
      watering: 'Keep soil consistently moist but not waterlogged. Water when top layer begins to dry.'
    },
    bonsaiStyles: ['Informal Upright', 'Slanting', 'Cascade', 'Root-over-Rock'],
    techniques: [
    {
      name: 'Root Pruning',
      description: 'Fukien Tea tolerates root pruning well. Remove up to 1/3 of root mass during repotting to encourage fine feeder roots.',
      timing: 'During growing season repotting when tree is actively growing.',
      maturityStage: 'Can begin root pruning during first repotting after 1-2 years.',
      notRecommended: false
    },
    {
      name: 'Defoliation (Total, Partial)',
      description: 'Defoliation reduces leaf size, encourages ramification, and allows light to interior branches. Fukien Tea can tolerate defoliation when healthy and vigorous.',
      timing: 'Mid-summer (June-July) after first flush has hardened. Only defoliate healthy, vigorous trees. Can be done annually or every other year for deciduous species.',
      maturityStage: 'Only on established, healthy trees (minimum 3-4 years old). Not recommended for weak or recently repotted trees.',
      notRecommended: false
    },
    {
      name: 'Pinching',
      description: 'Pinching new growth encourages ramification and compact growth. Useful technique for Fukien Tea to develop dense foliage pads.',
      timing: 'Throughout growing season. Pinch new shoots back to 1-2 leaves once they extend 3-4 leaves.',
      maturityStage: 'Can begin on young trees once vigorous growth is established.',
      notRecommended: false
    },
    {
      name: 'Grafting (Scion grafting, Thread grafting, Approach grafting)',
      description: 'Fukien Tea accepts grafts well. Thread grafting can add branches in desired locations. Approach grafting useful for trunk fusion or adding roots.',
      timing: 'Best during active growing season (late spring to early summer) when sap flow is strong.',
      maturityStage: 'Perform on established trees (3-5 years old) with good vigor.',
      notRecommended: false
    },
    {
      name: 'Jin (Deadwood Technique)',
      description: 'Can be created on Fukien Tea. The wood must be treated with lime sulfur to prevent rot. Creates dramatic aged appearance.',
      timing: 'Can be done during growing season when bark peels more easily. Apply lime sulfur for preservation and bleaching.',
      maturityStage: 'Best on mature trees with established branches. Not recommended for young trees.',
      notRecommended: false
    },
    {
      name: 'Shari (Trunk Deadwood Technique)',
      description: 'Shari is not recommended for Fukien Tea due to tendency for exposed wood to rot quickly. Deciduous and broadleaf evergreen trees rarely use this technique.',
      timing: 'Not recommended for this species.',
      maturityStage: 'Not applicable.',
      notRecommended: true
    },
    {
      name: 'Nebari Development (Surface Roots)',
      description: 'Fukien Tea can develop good surface roots. Techniques like root pruning, ground layering, and air layering enhance radial root spread.',
      timing: 'Work on nebari during spring repotting. Can be developed over multiple years.',
      maturityStage: 'Begin developing nebari from young age (2-3 years) for best results.',
      notRecommended: false
    },
    {
      name: 'Carving',
      description: 'Carving can be done on Fukien Tea to create hollows or refine deadwood. Requires thorough treatment with wood hardener and sealant to prevent rot.',
      timing: 'Best during growing season when wood is easier to work. Treat immediately with preservatives.',
      maturityStage: 'Only on mature trees. Limited use due to rot susceptibility.',
      notRecommended: false
    },
    {
      name: 'Air Layering',
      description: 'Fukien Tea responds well to air layering. Very effective technique for creating new trees from branches or improving trunk taper and nebari.',
      timing: 'Late spring to early summer when tree is in active growth. Roots typically form within 2-3 months.',
      maturityStage: 'Can be performed on healthy branches of various sizes. Works on both young and mature trees.',
      notRecommended: false
    },
    {
      name: 'Fertilizing',
      description: 'Fukien Tea  benefits from regular fertilization during growing season. Use balanced fertilizer or slightly higher nitrogen in spring.',
      timing: 'Every 2-3 weeks during growing season. Reduce in winter.',
      maturityStage: 'Begin fertilizing once tree is established and actively growing.',
      notRecommended: false
    },
    {
      name: 'Pest and Disease Management',
      description: 'Fukien Tea can be affected by aphids, spider mites, scale insects. Good air circulation and proper watering prevent most issues. Treat with appropriate organic or chemical controls when needed.',
      timing: 'Monitor regularly throughout growing season. Treat immediately upon detection.',
      maturityStage: 'Applicable to all stages of development.',
      notRecommended: false
    },
    {
      name: 'Watering and Humidity Control',
      description: 'Fukien Tea prefers consistent moisture but good drainage. Allow topsoil to dry slightly between waterings. Requires high humidity, mist regularly.',
      timing: 'Water as needed based on soil moisture, temperature, and season. More frequent in summer, reduced in winter.',
      maturityStage: 'Critical for all stages of development.',
      notRecommended: false
    }
  ],
    images: {
      developmentStages: {
        early: '/bonsai_photos/placeholder/placeholder_early.jpg',
        middle: '/bonsai_photos/placeholder/placeholder_middle.jpg',
        mature: '/bonsai_photos/placeholder/placeholder_mature.jpg'
      },
      seasons: {
        spring: '/bonsai_photos/placeholder/placeholder_spring.jpg',
        summer: '/bonsai_photos/placeholder/placeholder_summer.jpg',
        autumn: '/bonsai_photos/placeholder/placeholder_autumn.jpg',
        winter: '/bonsai_photos/placeholder/placeholder_winter.jpg'
      },
      styles: {},
      nature: {}
    },
    imageCredits: {}
  },
  {
    id: 'dwarf-schefflera',
    scientificName: 'Schefflera arboricola',
    commonName: 'Dwarf Schefflera, Umbrella Tree',
    group: 'Araliaceae',
    temperatureMin: 10,
    temperatureMax: 30,
    sunExposure: 'Bright indirect to low light',
    position: 'Indoor',
    leafType: 'Evergreen',
    climate: 'Tropical',
    flowering: 'Rare indoors',
    nativeRegion: 'Taiwan, Hainan',
    difficultyLevel: 'Beginner',
    category: 'Beginner',
    careTips: {
      general: 'Extremely hardy indoor bonsai with distinctive umbrella-like leaf clusters. Very forgiving of neglect and poor conditions. Develops thick trunk and can produce aerial roots in humid conditions.',
      soilType: 'Well-draining general bonsai mix.',
      feeding: 'Fertilize every 2-3 weeks during spring through fall, monthly in winter.',
      watering: 'Water when top inch of soil dries. Tolerates some neglect and irregular watering.'
    },
    bonsaiStyles: ['Informal Upright', 'Slanting', 'Root-over-Rock', 'Banyan'],
    techniques: [
    {
      name: 'Root Pruning',
      description: 'Dwarf Schefflera tolerates root pruning well. Remove up to 1/3 of root mass during repotting to encourage fine feeder roots.',
      timing: 'During growing season repotting when tree is actively growing.',
      maturityStage: 'Can begin root pruning during first repotting after 1-2 years.',
      notRecommended: false
    },
    {
      name: 'Defoliation (Total, Partial)',
      description: 'Defoliation reduces leaf size, encourages ramification, and allows light to interior branches. Dwarf Schefflera can tolerate defoliation when healthy and vigorous.',
      timing: 'Mid-summer (June-July) after first flush has hardened. Only defoliate healthy, vigorous trees. Can be done annually or every other year for deciduous species.',
      maturityStage: 'Only on established, healthy trees (minimum 3-4 years old). Not recommended for weak or recently repotted trees.',
      notRecommended: false
    },
    {
      name: 'Pinching',
      description: 'Pinching new growth encourages ramification and compact growth. Useful technique for Dwarf Schefflera to develop dense foliage pads.',
      timing: 'Throughout growing season. Pinch new shoots back to 1-2 leaves once they extend 3-4 leaves.',
      maturityStage: 'Can begin on young trees once vigorous growth is established.',
      notRecommended: false
    },
    {
      name: 'Grafting (Scion grafting, Thread grafting, Approach grafting)',
      description: 'Dwarf Schefflera accepts grafts well. Thread grafting can add branches in desired locations. Approach grafting useful for trunk fusion or adding roots.',
      timing: 'Best during active growing season (late spring to early summer) when sap flow is strong.',
      maturityStage: 'Perform on established trees (3-5 years old) with good vigor.',
      notRecommended: false
    },
    {
      name: 'Jin (Deadwood Technique)',
      description: 'Jin is not recommended for Dwarf Schefflera due to soft wood that rots easily. Not a suitable technique for this species.',
      timing: 'Not recommended.',
      maturityStage: 'Not applicable.',
      notRecommended: true
    },
    {
      name: 'Shari (Trunk Deadwood Technique)',
      description: 'Shari is not recommended for Dwarf Schefflera due to tendency for exposed wood to rot quickly. Deciduous and broadleaf evergreen trees rarely use this technique.',
      timing: 'Not recommended for this species.',
      maturityStage: 'Not applicable.',
      notRecommended: true
    },
    {
      name: 'Nebari Development (Surface Roots)',
      description: 'Dwarf Schefflera can develop good surface roots. Techniques like root pruning, ground layering, and air layering enhance radial root spread.',
      timing: 'Work on nebari during spring repotting. Can be developed over multiple years.',
      maturityStage: 'Begin developing nebari from young age (2-3 years) for best results.',
      notRecommended: false
    },
    {
      name: 'Carving',
      description: 'Carving is not recommended for Dwarf Schefflera due to soft wood prone to rot. Not a suitable technique for this species.',
      timing: 'Not recommended.',
      maturityStage: 'Not applicable.',
      notRecommended: true
    },
    {
      name: 'Air Layering',
      description: 'Dwarf Schefflera responds well to air layering. Very effective technique for creating new trees from branches or improving trunk taper and nebari.',
      timing: 'Late spring to early summer when tree is in active growth. Roots typically form within 2-3 months.',
      maturityStage: 'Can be performed on healthy branches of various sizes. Works on both young and mature trees.',
      notRecommended: false
    },
    {
      name: 'Fertilizing',
      description: 'Dwarf Schefflera  benefits from regular fertilization during growing season. Use balanced fertilizer or slightly higher nitrogen in spring.',
      timing: 'Every 2-3 weeks during growing season. Reduce in winter.',
      maturityStage: 'Begin fertilizing once tree is established and actively growing.',
      notRecommended: false
    },
    {
      name: 'Pest and Disease Management',
      description: 'Dwarf Schefflera can be affected by aphids, spider mites, scale insects. Good air circulation and proper watering prevent most issues. Treat with appropriate organic or chemical controls when needed.',
      timing: 'Monitor regularly throughout growing season. Treat immediately upon detection.',
      maturityStage: 'Applicable to all stages of development.',
      notRecommended: false
    },
    {
      name: 'Watering and Humidity Control',
      description: 'Dwarf Schefflera prefers consistent moisture but good drainage. Allow topsoil to dry slightly between waterings. Requires high humidity, mist regularly.',
      timing: 'Water as needed based on soil moisture, temperature, and season. More frequent in summer, reduced in winter.',
      maturityStage: 'Critical for all stages of development.',
      notRecommended: false
    }
  ],
    images: {
      developmentStages: {
        early: '/bonsai_photos/placeholder/placeholder_early.jpg',
        middle: '/bonsai_photos/placeholder/placeholder_middle.jpg',
        mature: '/bonsai_photos/placeholder/placeholder_mature.jpg'
      },
      seasons: {
        spring: '/bonsai_photos/placeholder/placeholder_spring.jpg',
        summer: '/bonsai_photos/placeholder/placeholder_summer.jpg',
        autumn: '/bonsai_photos/placeholder/placeholder_autumn.jpg',
        winter: '/bonsai_photos/placeholder/placeholder_winter.jpg'
      },
      styles: {},
      nature: {}
    },
    imageCredits: {}
  },
  {
    id: 'boxwood',
    scientificName: 'Buxus sempervirens',
    commonName: 'Boxwood, Common Box',
    group: 'Buxaceae',
    temperatureMin: -10,
    temperatureMax: 24,
    sunExposure: 'Full sun to partial shade',
    position: 'Outdoor',
    leafType: 'Evergreen',
    climate: 'Temperate',
    flowering: 'Inconspicuous',
    nativeRegion: 'Europe, Mediterranean, Asia',
    difficultyLevel: 'Beginner',
    category: 'Beginner',
    careTips: {
      general: 'Classic European bonsai with small evergreen leaves. Very hardy and responds excellently to pruning. Develops fine ramification naturally. Excellent for topiary-style bonsai and formal designs.',
      soilType: 'Well-draining bonsai mix, slightly alkaline pH 6.5-7.5.',
      feeding: 'Fertilize every 2 weeks during spring through fall.',
      watering: 'Keep evenly moist. Water regularly, especially during hot weather.'
    },
    bonsaiStyles: ['Formal Upright', 'Informal Upright', 'Broom', 'Cascade'],
    techniques: [
    {
      name: 'Root Pruning',
      description: 'Boxwood tolerates root pruning well. Remove up to 1/3 of root mass during repotting to encourage fine feeder roots.',
      timing: 'During growing season repotting when tree is actively growing.',
      maturityStage: 'Can begin root pruning during first repotting after 1-2 years.',
      notRecommended: false
    },
    {
      name: 'Defoliation (Total, Partial)',
      description: 'Defoliation reduces leaf size, encourages ramification, and allows light to interior branches. Boxwood can tolerate defoliation when healthy and vigorous.',
      timing: 'Mid-summer (June-July) after first flush has hardened. Only defoliate healthy, vigorous trees. Can be done annually or every other year for deciduous species.',
      maturityStage: 'Only on established, healthy trees (minimum 3-4 years old). Not recommended for weak or recently repotted trees.',
      notRecommended: false
    },
    {
      name: 'Pinching',
      description: 'Pinching new growth encourages ramification and compact growth. Useful technique for Boxwood to develop dense foliage pads.',
      timing: 'Throughout growing season. Pinch new shoots back to 1-2 leaves once they extend 3-4 leaves.',
      maturityStage: 'Can begin on young trees once vigorous growth is established.',
      notRecommended: false
    },
    {
      name: 'Grafting (Scion grafting, Thread grafting, Approach grafting)',
      description: 'Boxwood accepts grafts well. Thread grafting can add branches in desired locations. Approach grafting useful for trunk fusion or adding roots.',
      timing: 'Best during active growing season (late spring to early summer) when sap flow is strong.',
      maturityStage: 'Perform on established trees (3-5 years old) with good vigor.',
      notRecommended: false
    },
    {
      name: 'Jin (Deadwood Technique)',
      description: 'Can be created on Boxwood. The wood must be treated with lime sulfur to prevent rot. Creates dramatic aged appearance.',
      timing: 'Can be done during growing season when bark peels more easily. Apply lime sulfur for preservation and bleaching.',
      maturityStage: 'Best on mature trees with established branches. Not recommended for young trees.',
      notRecommended: false
    },
    {
      name: 'Shari (Trunk Deadwood Technique)',
      description: 'Shari is not recommended for Boxwood due to tendency for exposed wood to rot quickly. Deciduous and broadleaf evergreen trees rarely use this technique.',
      timing: 'Not recommended for this species.',
      maturityStage: 'Not applicable.',
      notRecommended: true
    },
    {
      name: 'Nebari Development (Surface Roots)',
      description: 'Boxwood can develop good surface roots. Techniques like root pruning, ground layering, and air layering enhance radial root spread.',
      timing: 'Work on nebari during spring repotting. Can be developed over multiple years.',
      maturityStage: 'Begin developing nebari from young age (2-3 years) for best results.',
      notRecommended: false
    },
    {
      name: 'Carving',
      description: 'Carving can be done on Boxwood to create hollows or refine deadwood. Requires thorough treatment with wood hardener and sealant to prevent rot.',
      timing: 'Best during growing season when wood is easier to work. Treat immediately with preservatives.',
      maturityStage: 'Only on mature trees. Limited use due to rot susceptibility.',
      notRecommended: false
    },
    {
      name: 'Air Layering',
      description: 'Boxwood responds well to air layering. Very effective technique for creating new trees from branches or improving trunk taper and nebari.',
      timing: 'Late spring to early summer when tree is in active growth. Roots typically form within 2-3 months.',
      maturityStage: 'Can be performed on healthy branches of various sizes. Works on both young and mature trees.',
      notRecommended: false
    },
    {
      name: 'Fertilizing',
      description: 'Boxwood  benefits from regular fertilization during growing season. Use balanced fertilizer or slightly higher nitrogen in spring.',
      timing: 'Every 2-3 weeks during growing season. Reduce in winter.',
      maturityStage: 'Begin fertilizing once tree is established and actively growing.',
      notRecommended: false
    },
    {
      name: 'Pest and Disease Management',
      description: 'Boxwood can be affected by aphids, spider mites, scale insects. Good air circulation and proper watering prevent most issues. Treat with appropriate organic or chemical controls when needed.',
      timing: 'Monitor regularly throughout growing season. Treat immediately upon detection.',
      maturityStage: 'Applicable to all stages of development.',
      notRecommended: false
    },
    {
      name: 'Watering and Humidity Control',
      description: 'Boxwood prefers consistent moisture but good drainage. Allow topsoil to dry slightly between waterings. Appreciates occasional misting in dry environments.',
      timing: 'Water as needed based on soil moisture, temperature, and season. More frequent in summer, reduced in winter.',
      maturityStage: 'Critical for all stages of development.',
      notRecommended: false
    }
  ],
    images: {
      developmentStages: {
        early: '/bonsai_photos/placeholder/placeholder_early.jpg',
        middle: '/bonsai_photos/placeholder/placeholder_middle.jpg',
        mature: '/bonsai_photos/placeholder/placeholder_mature.jpg'
      },
      seasons: {
        spring: '/bonsai_photos/placeholder/placeholder_spring.jpg',
        summer: '/bonsai_photos/placeholder/placeholder_summer.jpg',
        autumn: '/bonsai_photos/placeholder/placeholder_autumn.jpg',
        winter: '/bonsai_photos/placeholder/placeholder_winter.jpg'
      },
      styles: {},
      nature: {}
    },
    imageCredits: {}
  },
  // BEGINNER SPECIES - PHASE 2
  {
    id: 'cotoneaster',
    scientificName: 'Cotoneaster horizontalis',
    commonName: 'Cotoneaster, Rock Cotoneaster',
    group: 'Rosaceae',
    temperatureMin: -15,
    temperatureMax: 30,
    sunExposure: 'Full sun to partial shade',
    position: 'Outdoor',
    leafType: 'Deciduous',
    climate: 'Temperate',
    flowering: 'Small pink-white flowers in spring, red berries in fall',
    nativeRegion: 'China',
    difficultyLevel: 'Beginner',
    category: 'Beginner',
    careTips: {
      general: 'Cotoneaster is an excellent beginner species with small leaves, attractive flowers, and bright red berries. Very hardy and forgiving. The horizontal branching pattern makes it naturally suited for bonsai. Tolerates pruning well and develops fine ramification.',
      soilType: 'Well-draining bonsai mix. Tolerates various soil types.',
      feeding: 'Fertilize every 2 weeks during spring through fall with balanced fertilizer.',
      watering: 'Water regularly when soil surface dries. Tolerates some drought but prefers consistent moisture during growing season.'
    },
    bonsaiStyles: ['Cascade', 'Semi-Cascade', 'Informal Upright', 'Root-over-Rock'],
    techniques: [
    {
      name: 'Root Pruning',
      description: 'Cotoneaster tolerates root pruning well. Remove up to 1/3 of root mass during repotting to encourage fine feeder roots.',
      timing: 'During spring repotting when tree is entering active growth.',
      maturityStage: 'Can begin root pruning during first repotting after 1-2 years.',
      notRecommended: false
    },
    {
      name: 'Defoliation (Total, Partial)',
      description: 'Defoliation reduces leaf size, encourages ramification, and allows light to interior branches. Cotoneaster responds well to defoliation when healthy and vigorous.',
      timing: 'Mid-summer (June-July) after first flush has hardened. Only defoliate healthy, vigorous trees. Can be done annually or every other year for deciduous species.',
      maturityStage: 'Only on established, healthy trees (minimum 3-4 years old). Not recommended for weak or recently repotted trees.',
      notRecommended: false
    },
    {
      name: 'Pinching',
      description: 'Pinching new growth encourages ramification and compact growth. Very effective technique for Cotoneaster to develop dense foliage pads.',
      timing: 'Throughout growing season. Pinch new shoots back to 1-2 leaves once they extend 3-4 leaves.',
      maturityStage: 'Can begin on young trees once vigorous growth is established.',
      notRecommended: false
    },
    {
      name: 'Grafting (Scion grafting, Thread grafting, Approach grafting)',
      description: 'Cotoneaster accepts grafts well. Thread grafting can add branches in desired locations. Approach grafting useful for trunk fusion or adding roots.',
      timing: 'Best during active growing season (late spring to early summer) when sap flow is strong.',
      maturityStage: 'Perform on established trees (3-5 years old) with good vigor.',
      notRecommended: false
    },
    {
      name: 'Jin (Deadwood Technique)',
      description: 'Can be created on Cotoneaster. The wood must be treated with lime sulfur to prevent rot. Creates dramatic aged appearance.',
      timing: 'Can be done during growing season when bark peels more easily. Apply lime sulfur for preservation and bleaching.',
      maturityStage: 'Best on mature trees with established branches. Not recommended for young trees.',
      notRecommended: false
    },
    {
      name: 'Shari (Trunk Deadwood Technique)',
      description: 'Shari is not recommended for Cotoneaster due to tendency for exposed wood to rot quickly. Deciduous and broadleaf evergreen trees rarely use this technique.',
      timing: 'Not recommended for this species.',
      maturityStage: 'Not applicable.',
      notRecommended: true
    },
    {
      name: 'Nebari Development (Surface Roots)',
      description: 'Cotoneaster develops excellent nebari naturally. Techniques like root pruning, ground layering, and air layering enhance radial root spread.',
      timing: 'Work on nebari during spring repotting. Can be developed over multiple years.',
      maturityStage: 'Begin developing nebari from young age (2-3 years) for best results.',
      notRecommended: false
    },
    {
      name: 'Carving',
      description: 'Carving can be done on Cotoneaster to create hollows or refine deadwood. Requires thorough treatment with wood hardener and sealant to prevent rot.',
      timing: 'Best during growing season when wood is easier to work. Treat immediately with preservatives.',
      maturityStage: 'Only on mature trees. Limited use due to rot susceptibility.',
      notRecommended: false
    },
    {
      name: 'Air Layering',
      description: 'Cotoneaster responds excellently to air layering. Very effective technique for creating new trees from branches or improving trunk taper and nebari.',
      timing: 'Late spring to early summer when tree is in active growth. Roots typically form within 2-3 months.',
      maturityStage: 'Can be performed on healthy branches of various sizes. Works on both young and mature trees.',
      notRecommended: false
    },
    {
      name: 'Fertilizing',
      description: 'Cotoneaster is a vigorous grower and benefits from regular fertilization during growing season. Use balanced fertilizer or slightly higher nitrogen in spring.',
      timing: 'Every 2-3 weeks during spring through autumn. Reduce or stop during winter dormancy.',
      maturityStage: 'Begin fertilizing once tree is established and actively growing.',
      notRecommended: false
    },
    {
      name: 'Pest and Disease Management',
      description: 'Cotoneaster can be affected by aphids, spider mites, scale insects. Good air circulation and proper watering prevent most issues. Treat with appropriate organic or chemical controls when needed.',
      timing: 'Monitor regularly throughout growing season. Treat immediately upon detection.',
      maturityStage: 'Applicable to all stages of development.',
      notRecommended: false
    },
    {
      name: 'Watering and Humidity Control',
      description: 'Cotoneaster prefers consistent moisture but good drainage. Allow topsoil to dry slightly between waterings. Appreciates occasional misting in dry environments.',
      timing: 'Water as needed based on soil moisture, temperature, and season. More frequent in summer, reduced in winter.',
      maturityStage: 'Critical for all stages of development.',
      notRecommended: false
    }
  ],
    images: {
      developmentStages: {
        early: '/bonsai_photos/placeholder/placeholder_early.jpg',
        middle: '/bonsai_photos/placeholder/placeholder_middle.jpg',
        mature: '/bonsai_photos/placeholder/placeholder_mature.jpg'
      },
      seasons: {
        spring: '/bonsai_photos/placeholder/placeholder_spring.jpg',
        summer: '/bonsai_photos/placeholder/placeholder_summer.jpg',
        autumn: '/bonsai_photos/placeholder/placeholder_autumn.jpg',
        winter: '/bonsai_photos/placeholder/placeholder_winter.jpg'
      },
      styles: {},
      nature: {}
    },
    imageCredits: {}
  },
  {
    id: 'privet',
    scientificName: 'Ligustrum sinense',
    commonName: 'Privet, Chinese Privet',
    group: 'Oleaceae',
    temperatureMin: -10,
    temperatureMax: 35,
    sunExposure: 'Full sun to partial shade',
    position: 'Outdoor',
    leafType: 'Semi-evergreen',
    climate: 'Temperate',
    flowering: 'Small white fragrant flowers in summer',
    nativeRegion: 'China',
    difficultyLevel: 'Beginner',
    category: 'Beginner',
    careTips: {
      general: 'Privet is extremely hardy and forgiving, making it perfect for beginners. Fast-growing with small leaves that reduce well. Develops thick trunk quickly. Tolerates heavy pruning and neglect. Fragrant white flowers appear in summer.',
      soilType: 'Well-draining bonsai mix. Very adaptable to various soil types.',
      feeding: 'Fertilize every 2 weeks during spring through fall. Responds well to feeding.',
      watering: 'Water regularly when soil surface dries. Very tolerant of irregular watering.'
    },
    bonsaiStyles: ['Informal Upright', 'Formal Upright', 'Broom', 'Cascade'],
    techniques: [
    {
      name: 'Root Pruning',
      description: 'Privet tolerates root pruning well. Remove up to 1/3 of root mass during repotting to encourage fine feeder roots.',
      timing: 'During growing season repotting when tree is actively growing.',
      maturityStage: 'Can begin root pruning during first repotting after 1-2 years.',
      notRecommended: false
    },
    {
      name: 'Defoliation (Total, Partial)',
      description: 'Defoliation reduces leaf size, encourages ramification, and allows light to interior branches. Privet can tolerate defoliation when healthy and vigorous.',
      timing: 'Mid-summer (June-July) after first flush has hardened. Only defoliate healthy, vigorous trees. Can be done annually or every other year for deciduous species.',
      maturityStage: 'Only on established, healthy trees (minimum 3-4 years old). Not recommended for weak or recently repotted trees.',
      notRecommended: false
    },
    {
      name: 'Pinching',
      description: 'Pinching new growth encourages ramification and compact growth. Useful technique for Privet to develop dense foliage pads.',
      timing: 'Throughout growing season. Pinch new shoots back to 1-2 leaves once they extend 3-4 leaves.',
      maturityStage: 'Can begin on young trees once vigorous growth is established.',
      notRecommended: false
    },
    {
      name: 'Grafting (Scion grafting, Thread grafting, Approach grafting)',
      description: 'Privet accepts grafts well. Thread grafting can add branches in desired locations. Approach grafting useful for trunk fusion or adding roots.',
      timing: 'Best during active growing season (late spring to early summer) when sap flow is strong.',
      maturityStage: 'Perform on established trees (3-5 years old) with good vigor.',
      notRecommended: false
    },
    {
      name: 'Jin (Deadwood Technique)',
      description: 'Can be created on Privet. The wood must be treated with lime sulfur to prevent rot. Creates dramatic aged appearance.',
      timing: 'Can be done during growing season when bark peels more easily. Apply lime sulfur for preservation and bleaching.',
      maturityStage: 'Best on mature trees with established branches. Not recommended for young trees.',
      notRecommended: false
    },
    {
      name: 'Shari (Trunk Deadwood Technique)',
      description: 'Shari is not recommended for Privet due to tendency for exposed wood to rot quickly. Deciduous and broadleaf evergreen trees rarely use this technique.',
      timing: 'Not recommended for this species.',
      maturityStage: 'Not applicable.',
      notRecommended: true
    },
    {
      name: 'Nebari Development (Surface Roots)',
      description: 'Privet can develop good surface roots. Techniques like root pruning, ground layering, and air layering enhance radial root spread.',
      timing: 'Work on nebari during spring repotting. Can be developed over multiple years.',
      maturityStage: 'Begin developing nebari from young age (2-3 years) for best results.',
      notRecommended: false
    },
    {
      name: 'Carving',
      description: 'Carving can be done on Privet to create hollows or refine deadwood. Requires thorough treatment with wood hardener and sealant to prevent rot.',
      timing: 'Best during growing season when wood is easier to work. Treat immediately with preservatives.',
      maturityStage: 'Only on mature trees. Limited use due to rot susceptibility.',
      notRecommended: false
    },
    {
      name: 'Air Layering',
      description: 'Privet responds well to air layering. Very effective technique for creating new trees from branches or improving trunk taper and nebari.',
      timing: 'Late spring to early summer when tree is in active growth. Roots typically form within 2-3 months.',
      maturityStage: 'Can be performed on healthy branches of various sizes. Works on both young and mature trees.',
      notRecommended: false
    },
    {
      name: 'Fertilizing',
      description: 'Privet  benefits from regular fertilization during growing season. Use balanced fertilizer or slightly higher nitrogen in spring.',
      timing: 'Every 2-3 weeks during growing season. Reduce in winter.',
      maturityStage: 'Begin fertilizing once tree is established and actively growing.',
      notRecommended: false
    },
    {
      name: 'Pest and Disease Management',
      description: 'Privet can be affected by aphids, spider mites, scale insects. Good air circulation and proper watering prevent most issues. Treat with appropriate organic or chemical controls when needed.',
      timing: 'Monitor regularly throughout growing season. Treat immediately upon detection.',
      maturityStage: 'Applicable to all stages of development.',
      notRecommended: false
    },
    {
      name: 'Watering and Humidity Control',
      description: 'Privet prefers consistent moisture but good drainage. Allow topsoil to dry slightly between waterings. Appreciates occasional misting in dry environments.',
      timing: 'Water as needed based on soil moisture, temperature, and season. More frequent in summer, reduced in winter.',
      maturityStage: 'Critical for all stages of development.',
      notRecommended: false
    }
  ],
    images: {
      developmentStages: {
        early: '/bonsai_photos/placeholder/placeholder_early.jpg',
        middle: '/bonsai_photos/placeholder/placeholder_middle.jpg',
        mature: '/bonsai_photos/placeholder/placeholder_mature.jpg'
      },
      seasons: {
        spring: '/bonsai_photos/placeholder/placeholder_spring.jpg',
        summer: '/bonsai_photos/placeholder/placeholder_summer.jpg',
        autumn: '/bonsai_photos/placeholder/placeholder_autumn.jpg',
        winter: '/bonsai_photos/placeholder/placeholder_winter.jpg'
      },
      styles: {},
      nature: {}
    },
    imageCredits: {}
  },
  {
    id: 'elephant-bush',
    scientificName: 'Portulacaria afra',
    commonName: 'Elephant Bush, Dwarf Jade',
    group: 'Didiereaceae',
    temperatureMin: 5,
    temperatureMax: 35,
    sunExposure: 'Full sun to bright indirect light',
    position: 'Indoor/Outdoor',
    leafType: 'Evergreen Succulent',
    climate: 'Subtropical',
    flowering: 'Small pink flowers (rare in cultivation)',
    nativeRegion: 'South Africa',
    difficultyLevel: 'Beginner',
    category: 'Beginner',
    careTips: {
      general: 'Elephant Bush is a succulent that is extremely easy to care for and perfect for absolute beginners. Small round leaves on reddish stems create an attractive miniature tree appearance. Very forgiving of neglect and irregular watering. Grows quickly and develops thick trunk.',
      soilType: 'Well-draining succulent mix with excellent drainage. Essential to prevent root rot.',
      feeding: 'Fertilize monthly during spring through fall with half-strength balanced fertilizer. Light feeder.',
      watering: 'Water sparingly. Allow soil to dry completely between waterings. More drought-tolerant than Jade tree. Overwatering is the main cause of problems.'
    },
    bonsaiStyles: ['Informal Upright', 'Slanting', 'Cascade', 'Multi-trunk'],
    techniques: [
    {
      name: 'Root Pruning',
      description: 'Elephant Bush requires careful root pruning with caution. Remove up to 1/4 of root mass during repotting to encourage fine feeder roots. Succulents are sensitive to root damage.',
      timing: 'During growing season repotting when tree is actively growing.',
      maturityStage: 'Can begin root pruning during first repotting after 1-2 years.',
      notRecommended: false
    },
    {
      name: 'Defoliation (Total, Partial)',
      description: 'Defoliation is not recommended for Elephant Bush. Succulents store water in leaves and defoliation causes stress. Selective leaf removal only when necessary.',
      timing: 'Not recommended as a regular technique.',
      maturityStage: 'Not applicable.',
      notRecommended: true
    },
    {
      name: 'Pinching',
      description: 'Pinching new growth encourages ramification and branching. Useful technique for Elephant Bush to develop fuller canopy.',
      timing: 'Throughout growing season. Pinch new shoots back to desired length once they extend several nodes.',
      maturityStage: 'Can begin on young trees once vigorous growth is established.',
      notRecommended: false
    },
    {
      name: 'Grafting (Scion grafting, Thread grafting, Approach grafting)',
      description: 'Grafting is rarely used on Elephant Bush as succulents propagate easily from cuttings and grafting success rates are low. Not a recommended technique for this species.',
      timing: 'Not recommended for succulents.',
      maturityStage: 'Not applicable.',
      notRecommended: true
    },
    {
      name: 'Jin (Deadwood Technique)',
      description: 'Jin is not recommended for Elephant Bush due to succulent nature - exposed tissue will rot. Not a suitable technique for this species.',
      timing: 'Not recommended.',
      maturityStage: 'Not applicable.',
      notRecommended: true
    },
    {
      name: 'Shari (Trunk Deadwood Technique)',
      description: 'Shari is not recommended for Elephant Bush due to succulent nature. Not applicable to succulents.',
      timing: 'Not recommended for this species.',
      maturityStage: 'Not applicable.',
      notRecommended: true
    },
    {
      name: 'Nebari Development (Surface Roots)',
      description: 'Elephant Bush can develop good surface roots. Techniques like root pruning, strategic repotting, and root exposure enhance radial root spread.',
      timing: 'Work on nebari during spring repotting. Can be developed over multiple years.',
      maturityStage: 'Begin developing nebari from young age (2-3 years) for best results.',
      notRecommended: false
    },
    {
      name: 'Carving',
      description: 'Carving is not recommended for Elephant Bush due to soft succulent tissue that will rot and not heal properly. Not a suitable technique for this species.',
      timing: 'Not recommended.',
      maturityStage: 'Not applicable.',
      notRecommended: true
    },
    {
      name: 'Air Layering',
      description: 'Air layering is not necessary for Elephant Bush as succulents propagate extremely easily from cuttings. Simply cutting and planting is more effective.',
      timing: 'Not recommended - use cuttings instead.',
      maturityStage: 'Not applicable.',
      notRecommended: true
    },
    {
      name: 'Fertilizing',
      description: 'Elephant Bush  benefits from regular fertilization during growing season. Use diluted balanced fertilizer - succulents need less feeding.',
      timing: 'Monthly during growing season. Reduce in winter.',
      maturityStage: 'Begin fertilizing once tree is established and actively growing.',
      notRecommended: false
    },
    {
      name: 'Pest and Disease Management',
      description: 'Elephant Bush can be affected by mealybugs, scale insects, root rot from overwatering. Avoid overwatering to prevent root rot. Treat with appropriate organic or chemical controls when needed.',
      timing: 'Monitor regularly throughout growing season. Treat immediately upon detection.',
      maturityStage: 'Applicable to all stages of development.',
      notRecommended: false
    },
    {
      name: 'Watering and Humidity Control',
      description: 'Elephant Bush prefers infrequent watering - allow soil to dry between waterings. Water deeply but infrequently. Prefers low humidity, avoid misting.',
      timing: 'Water as needed based on soil moisture, temperature, and season. Minimal watering in winter.',
      maturityStage: 'Critical for all stages of development.',
      notRecommended: false
    }
  ],
    images: {
      developmentStages: {
        early: '/bonsai_photos/placeholder/placeholder_early.jpg',
        middle: '/bonsai_photos/placeholder/placeholder_middle.jpg',
        mature: '/bonsai_photos/placeholder/placeholder_mature.jpg'
      },
      seasons: {
        spring: '/bonsai_photos/placeholder/placeholder_spring.jpg',
        summer: '/bonsai_photos/placeholder/placeholder_summer.jpg',
        autumn: '/bonsai_photos/placeholder/placeholder_autumn.jpg',
        winter: '/bonsai_photos/placeholder/placeholder_winter.jpg'
      },
      styles: {},
      nature: {}
    },
    imageCredits: {}
  },
  // INTERMEDIATE SPECIES - PHASE 2
  {
    id: 'azalea',
    scientificName: 'Rhododendron indicum',
    commonName: 'Satsuki Azalea, Azalea',
    group: 'Ericaceae',
    temperatureMin: -5,
    temperatureMax: 30,
    sunExposure: 'Partial shade to full sun',
    position: 'Outdoor',
    leafType: 'Evergreen',
    climate: 'Temperate',
    flowering: 'Spectacular flowers in late spring (pink, red, white, purple)',
    nativeRegion: 'Japan, China',
    difficultyLevel: 'Intermediate',
    category: 'Intermediate',
    careTips: {
      general: 'Satsuki Azalea is one of the most popular flowering bonsai species, especially in Japan. Produces spectacular blooms in late spring. Requires acidic soil and consistent moisture. The timing of flowering can be controlled through careful watering and temperature management.',
      soilType: 'Acidic bonsai mix with kanuma soil. pH 4.5-6.0 essential. Never use alkaline soil.',
      feeding: 'Use acid-loving plant fertilizer. Feed after flowering through fall. Do not fertilize during flowering or in winter.',
      watering: 'Keep consistently moist but not waterlogged. Use rainwater or acidified water if tap water is alkaline. Never let soil dry out completely.'
    },
    bonsaiStyles: ['Informal Upright', 'Cascade', 'Semi-Cascade', 'Multi-trunk'],
    techniques: [
    {
      name: 'Root Pruning',
      description: 'Azalea tolerates root pruning well. Remove up to 1/3 of root mass during repotting to encourage fine feeder roots.',
      timing: 'During growing season repotting when tree is actively growing.',
      maturityStage: 'Can begin root pruning during first repotting after 1-2 years.',
      notRecommended: false
    },
    {
      name: 'Defoliation (Total, Partial)',
      description: 'Defoliation reduces leaf size, encourages ramification, and allows light to interior branches. Azalea can tolerate defoliation when healthy and vigorous.',
      timing: 'Mid-summer (June-July) after first flush has hardened. Only defoliate healthy, vigorous trees. Can be done annually or every other year for deciduous species.',
      maturityStage: 'Only on established, healthy trees (minimum 3-4 years old). Not recommended for weak or recently repotted trees.',
      notRecommended: false
    },
    {
      name: 'Pinching',
      description: 'Pinching new growth encourages ramification and compact growth. Useful technique for Azalea to develop dense foliage pads.',
      timing: 'Throughout growing season. Pinch new shoots back to 1-2 leaves once they extend 3-4 leaves.',
      maturityStage: 'Can begin on young trees once vigorous growth is established.',
      notRecommended: false
    },
    {
      name: 'Grafting (Scion grafting, Thread grafting, Approach grafting)',
      description: 'Azalea accepts grafts well. Thread grafting can add branches in desired locations. Approach grafting useful for trunk fusion or adding roots.',
      timing: 'Best during active growing season (late spring to early summer) when sap flow is strong.',
      maturityStage: 'Perform on established trees (3-5 years old) with good vigor.',
      notRecommended: false
    },
    {
      name: 'Jin (Deadwood Technique)',
      description: 'Can be created on Azalea. The wood must be treated with lime sulfur to prevent rot. Creates dramatic aged appearance.',
      timing: 'Can be done during growing season when bark peels more easily. Apply lime sulfur for preservation and bleaching.',
      maturityStage: 'Best on mature trees with established branches. Not recommended for young trees.',
      notRecommended: false
    },
    {
      name: 'Shari (Trunk Deadwood Technique)',
      description: 'Shari is not recommended for Azalea due to tendency for exposed wood to rot quickly. Deciduous and broadleaf evergreen trees rarely use this technique.',
      timing: 'Not recommended for this species.',
      maturityStage: 'Not applicable.',
      notRecommended: true
    },
    {
      name: 'Nebari Development (Surface Roots)',
      description: 'Azalea can develop good surface roots. Techniques like root pruning, ground layering, and air layering enhance radial root spread.',
      timing: 'Work on nebari during spring repotting. Can be developed over multiple years.',
      maturityStage: 'Begin developing nebari from young age (2-3 years) for best results.',
      notRecommended: false
    },
    {
      name: 'Carving',
      description: 'Carving can be done on Azalea to create hollows or refine deadwood. Requires thorough treatment with wood hardener and sealant to prevent rot.',
      timing: 'Best during growing season when wood is easier to work. Treat immediately with preservatives.',
      maturityStage: 'Only on mature trees. Limited use due to rot susceptibility.',
      notRecommended: false
    },
    {
      name: 'Air Layering',
      description: 'Azalea responds well to air layering. Very effective technique for creating new trees from branches or improving trunk taper and nebari.',
      timing: 'Late spring to early summer when tree is in active growth. Roots typically form within 2-3 months.',
      maturityStage: 'Can be performed on healthy branches of various sizes. Works on both young and mature trees.',
      notRecommended: false
    },
    {
      name: 'Fertilizing',
      description: 'Azalea  benefits from regular fertilization during growing season. Use balanced fertilizer or slightly higher nitrogen in spring.',
      timing: 'Every 2-3 weeks during growing season. Reduce in winter.',
      maturityStage: 'Begin fertilizing once tree is established and actively growing.',
      notRecommended: false
    },
    {
      name: 'Pest and Disease Management',
      description: 'Azalea can be affected by aphids, spider mites, scale insects. Good air circulation and proper watering prevent most issues. Treat with appropriate organic or chemical controls when needed.',
      timing: 'Monitor regularly throughout growing season. Treat immediately upon detection.',
      maturityStage: 'Applicable to all stages of development.',
      notRecommended: false
    },
    {
      name: 'Watering and Humidity Control',
      description: 'Azalea prefers consistent moisture but good drainage. Allow topsoil to dry slightly between waterings. Appreciates occasional misting in dry environments.',
      timing: 'Water as needed based on soil moisture, temperature, and season. More frequent in summer, reduced in winter.',
      maturityStage: 'Critical for all stages of development.',
      notRecommended: false
    }
  ],
    images: {
      developmentStages: {
        early: '/bonsai_photos/placeholder/placeholder_early.jpg',
        middle: '/bonsai_photos/placeholder/placeholder_middle.jpg',
        mature: '/bonsai_photos/placeholder/placeholder_mature.jpg'
      },
      seasons: {
        spring: '/bonsai_photos/placeholder/placeholder_spring.jpg',
        summer: '/bonsai_photos/placeholder/placeholder_summer.jpg',
        autumn: '/bonsai_photos/placeholder/placeholder_autumn.jpg',
        winter: '/bonsai_photos/placeholder/placeholder_winter.jpg'
      },
      styles: {},
      nature: {}
    },
    imageCredits: {}
  },
  {
    id: 'serissa',
    scientificName: 'Serissa japonica',
    commonName: 'Serissa, Tree of a Thousand Stars',
    group: 'Rubiaceae',
    temperatureMin: 10,
    temperatureMax: 30,
    sunExposure: 'Bright indirect light to partial sun',
    position: 'Indoor/Outdoor',
    leafType: 'Evergreen',
    climate: 'Subtropical',
    flowering: 'Small white or pink flowers year-round',
    nativeRegion: 'Southeast Asia',
    difficultyLevel: 'Intermediate',
    category: 'Intermediate',
    careTips: {
      general: 'Known as Tree of a Thousand Stars for its abundant small white flowers. Tiny leaves and fine branching create delicate appearance. Can be temperamental about changes in environment - dislikes being moved. Flowers can appear year-round with proper care. Develops attractive gnarled bark with age.',
      soilType: 'Well-draining bonsai mix, slightly acidic pH 6.0-6.5.',
      feeding: 'Fertilize every 2 weeks during spring through fall. Reduce to monthly in winter. Increase fertilizing when flowers appear.',
      watering: 'Keep soil evenly moist but not waterlogged. Sensitive to both overwatering and underwatering. Dislikes sudden changes in watering routine.'
    },
    bonsaiStyles: ['Informal Upright', 'Root-over-Rock', 'Cascade', 'Broom'],
    techniques: [
    {
      name: 'Root Pruning',
      description: 'Serissa tolerates root pruning well. Remove up to 1/3 of root mass during repotting to encourage fine feeder roots.',
      timing: 'During growing season repotting when tree is actively growing.',
      maturityStage: 'Can begin root pruning during first repotting after 1-2 years.',
      notRecommended: false
    },
    {
      name: 'Defoliation (Total, Partial)',
      description: 'Defoliation reduces leaf size, encourages ramification, and allows light to interior branches. Serissa can tolerate defoliation when healthy and vigorous.',
      timing: 'Mid-summer (June-July) after first flush has hardened. Only defoliate healthy, vigorous trees. Can be done annually or every other year for deciduous species.',
      maturityStage: 'Only on established, healthy trees (minimum 3-4 years old). Not recommended for weak or recently repotted trees.',
      notRecommended: false
    },
    {
      name: 'Pinching',
      description: 'Pinching new growth encourages ramification and compact growth. Useful technique for Serissa to develop dense foliage pads.',
      timing: 'Throughout growing season. Pinch new shoots back to 1-2 leaves once they extend 3-4 leaves.',
      maturityStage: 'Can begin on young trees once vigorous growth is established.',
      notRecommended: false
    },
    {
      name: 'Grafting (Scion grafting, Thread grafting, Approach grafting)',
      description: 'Serissa accepts grafts well. Thread grafting can add branches in desired locations. Approach grafting useful for trunk fusion or adding roots.',
      timing: 'Best during active growing season (late spring to early summer) when sap flow is strong.',
      maturityStage: 'Perform on established trees (3-5 years old) with good vigor.',
      notRecommended: false
    },
    {
      name: 'Jin (Deadwood Technique)',
      description: 'Can be created on Serissa. The wood must be treated with lime sulfur to prevent rot. Creates dramatic aged appearance.',
      timing: 'Can be done during growing season when bark peels more easily. Apply lime sulfur for preservation and bleaching.',
      maturityStage: 'Best on mature trees with established branches. Not recommended for young trees.',
      notRecommended: false
    },
    {
      name: 'Shari (Trunk Deadwood Technique)',
      description: 'Shari is not recommended for Serissa due to tendency for exposed wood to rot quickly. Deciduous and broadleaf evergreen trees rarely use this technique.',
      timing: 'Not recommended for this species.',
      maturityStage: 'Not applicable.',
      notRecommended: true
    },
    {
      name: 'Nebari Development (Surface Roots)',
      description: 'Serissa can develop good surface roots. Techniques like root pruning, ground layering, and air layering enhance radial root spread.',
      timing: 'Work on nebari during spring repotting. Can be developed over multiple years.',
      maturityStage: 'Begin developing nebari from young age (2-3 years) for best results.',
      notRecommended: false
    },
    {
      name: 'Carving',
      description: 'Carving can be done on Serissa to create hollows or refine deadwood. Requires thorough treatment with wood hardener and sealant to prevent rot.',
      timing: 'Best during growing season when wood is easier to work. Treat immediately with preservatives.',
      maturityStage: 'Only on mature trees. Limited use due to rot susceptibility.',
      notRecommended: false
    },
    {
      name: 'Air Layering',
      description: 'Serissa responds well to air layering. Very effective technique for creating new trees from branches or improving trunk taper and nebari.',
      timing: 'Late spring to early summer when tree is in active growth. Roots typically form within 2-3 months.',
      maturityStage: 'Can be performed on healthy branches of various sizes. Works on both young and mature trees.',
      notRecommended: false
    },
    {
      name: 'Fertilizing',
      description: 'Serissa  benefits from regular fertilization during growing season. Use balanced fertilizer or slightly higher nitrogen in spring.',
      timing: 'Every 2-3 weeks during growing season. Reduce in winter.',
      maturityStage: 'Begin fertilizing once tree is established and actively growing.',
      notRecommended: false
    },
    {
      name: 'Pest and Disease Management',
      description: 'Serissa can be affected by aphids, spider mites, scale insects. Good air circulation and proper watering prevent most issues. Treat with appropriate organic or chemical controls when needed.',
      timing: 'Monitor regularly throughout growing season. Treat immediately upon detection.',
      maturityStage: 'Applicable to all stages of development.',
      notRecommended: false
    },
    {
      name: 'Watering and Humidity Control',
      description: 'Serissa prefers consistent moisture but good drainage. Allow topsoil to dry slightly between waterings. Appreciates occasional misting in dry environments.',
      timing: 'Water as needed based on soil moisture, temperature, and season. More frequent in summer, reduced in winter.',
      maturityStage: 'Critical for all stages of development.',
      notRecommended: false
    }
  ],
    images: {
      developmentStages: {
        early: '/bonsai_photos/placeholder/placeholder_early.jpg',
        middle: '/bonsai_photos/placeholder/placeholder_middle.jpg',
        mature: '/bonsai_photos/placeholder/placeholder_mature.jpg'
      },
      seasons: {
        spring: '/bonsai_photos/placeholder/placeholder_spring.jpg',
        summer: '/bonsai_photos/placeholder/placeholder_summer.jpg',
        autumn: '/bonsai_photos/placeholder/placeholder_autumn.jpg',
        winter: '/bonsai_photos/placeholder/placeholder_winter.jpg'
      },
      styles: {},
      nature: {}
    },
    imageCredits: {}
  },
  {
    id: 'olive',
    scientificName: 'Olea europaea',
    commonName: 'Olive, European Olive',
    group: 'Oleaceae',
    temperatureMin: -5,
    temperatureMax: 40,
    sunExposure: 'Full sun',
    position: 'Outdoor',
    leafType: 'Evergreen',
    climate: 'Mediterranean',
    flowering: 'Small white flowers in spring, may produce olives',
    nativeRegion: 'Mediterranean',
    difficultyLevel: 'Intermediate',
    category: 'Intermediate',
    careTips: {
      general: 'Mediterranean classic with silvery-green leaves and gnarled bark. Very drought-tolerant once established. Loves full sun and heat. Can produce small olives. Develops thick, twisted trunk with age creating ancient appearance. Requires winter dormancy period with cooler temperatures.',
      soilType: 'Well-draining bonsai mix. Tolerates poor, rocky soil. Good drainage essential.',
      feeding: 'Fertilize every 2-3 weeks during spring through fall. Reduce in winter.',
      watering: 'Water when soil surface dries. Drought-tolerant but grows better with regular watering during growing season. Reduce watering in winter.'
    },
    bonsaiStyles: ['Informal Upright', 'Slanting', 'Literati', 'Multi-trunk'],
    techniques: [
    {
      name: 'Root Pruning',
      description: 'Olive tolerates root pruning well. Remove up to 1/3 of root mass during repotting to encourage fine feeder roots.',
      timing: 'During growing season repotting when tree is actively growing.',
      maturityStage: 'Can begin root pruning during first repotting after 1-2 years.',
      notRecommended: false
    },
    {
      name: 'Defoliation (Total, Partial)',
      description: 'Defoliation reduces leaf size, encourages ramification, and allows light to interior branches. Olive can tolerate defoliation when healthy and vigorous.',
      timing: 'Mid-summer (June-July) after first flush has hardened. Only defoliate healthy, vigorous trees. Can be done annually or every other year for deciduous species.',
      maturityStage: 'Only on established, healthy trees (minimum 3-4 years old). Not recommended for weak or recently repotted trees.',
      notRecommended: false
    },
    {
      name: 'Pinching',
      description: 'Pinching new growth encourages ramification and compact growth. Useful technique for Olive to develop dense foliage pads.',
      timing: 'Throughout growing season. Pinch new shoots back to 1-2 leaves once they extend 3-4 leaves.',
      maturityStage: 'Can begin on young trees once vigorous growth is established.',
      notRecommended: false
    },
    {
      name: 'Grafting (Scion grafting, Thread grafting, Approach grafting)',
      description: 'Olive accepts grafts well. Thread grafting can add branches in desired locations. Approach grafting useful for trunk fusion or adding roots.',
      timing: 'Best during active growing season (late spring to early summer) when sap flow is strong.',
      maturityStage: 'Perform on established trees (3-5 years old) with good vigor.',
      notRecommended: false
    },
    {
      name: 'Jin (Deadwood Technique)',
      description: 'Can be created on Olive. The wood must be treated with lime sulfur to prevent rot. Creates dramatic aged appearance.',
      timing: 'Can be done during growing season when bark peels more easily. Apply lime sulfur for preservation and bleaching.',
      maturityStage: 'Best on mature trees with established branches. Not recommended for young trees.',
      notRecommended: false
    },
    {
      name: 'Shari (Trunk Deadwood Technique)',
      description: 'Shari is not recommended for Olive due to tendency for exposed wood to rot quickly. Deciduous and broadleaf evergreen trees rarely use this technique.',
      timing: 'Not recommended for this species.',
      maturityStage: 'Not applicable.',
      notRecommended: true
    },
    {
      name: 'Nebari Development (Surface Roots)',
      description: 'Olive can develop good surface roots. Techniques like root pruning, ground layering, and air layering enhance radial root spread.',
      timing: 'Work on nebari during spring repotting. Can be developed over multiple years.',
      maturityStage: 'Begin developing nebari from young age (2-3 years) for best results.',
      notRecommended: false
    },
    {
      name: 'Carving',
      description: 'Carving can be done on Olive to create hollows or refine deadwood. Requires thorough treatment with wood hardener and sealant to prevent rot.',
      timing: 'Best during growing season when wood is easier to work. Treat immediately with preservatives.',
      maturityStage: 'Only on mature trees. Limited use due to rot susceptibility.',
      notRecommended: false
    },
    {
      name: 'Air Layering',
      description: 'Olive responds well to air layering. Very effective technique for creating new trees from branches or improving trunk taper and nebari.',
      timing: 'Late spring to early summer when tree is in active growth. Roots typically form within 2-3 months.',
      maturityStage: 'Can be performed on healthy branches of various sizes. Works on both young and mature trees.',
      notRecommended: false
    },
    {
      name: 'Fertilizing',
      description: 'Olive  benefits from regular fertilization during growing season. Use balanced fertilizer or slightly higher nitrogen in spring.',
      timing: 'Every 2-3 weeks during growing season. Reduce in winter.',
      maturityStage: 'Begin fertilizing once tree is established and actively growing.',
      notRecommended: false
    },
    {
      name: 'Pest and Disease Management',
      description: 'Olive can be affected by aphids, spider mites, scale insects. Good air circulation and proper watering prevent most issues. Treat with appropriate organic or chemical controls when needed.',
      timing: 'Monitor regularly throughout growing season. Treat immediately upon detection.',
      maturityStage: 'Applicable to all stages of development.',
      notRecommended: false
    },
    {
      name: 'Watering and Humidity Control',
      description: 'Olive prefers consistent moisture but good drainage. Allow topsoil to dry slightly between waterings. Appreciates occasional misting in dry environments.',
      timing: 'Water as needed based on soil moisture, temperature, and season. More frequent in summer, reduced in winter.',
      maturityStage: 'Critical for all stages of development.',
      notRecommended: false
    }
  ],
    images: {
      developmentStages: {
        early: '/bonsai_photos/placeholder/placeholder_early.jpg',
        middle: '/bonsai_photos/placeholder/placeholder_middle.jpg',
        mature: '/bonsai_photos/placeholder/placeholder_mature.jpg'
      },
      seasons: {
        spring: '/bonsai_photos/placeholder/placeholder_spring.jpg',
        summer: '/bonsai_photos/placeholder/placeholder_summer.jpg',
        autumn: '/bonsai_photos/placeholder/placeholder_autumn.jpg',
        winter: '/bonsai_photos/placeholder/placeholder_winter.jpg'
      },
      styles: {},
      nature: {}
    },
    imageCredits: {}
  },
  {
    id: 'trident-maple',
    scientificName: 'Acer buergerianum',
    commonName: 'Trident Maple',
    group: 'Sapindaceae',
    temperatureMin: -15,
    temperatureMax: 35,
    sunExposure: 'Full sun to partial shade',
    position: 'Outdoor',
    leafType: 'Deciduous',
    climate: 'Temperate',
    flowering: 'Inconspicuous',
    nativeRegion: 'China, Japan, Korea',
    difficultyLevel: 'Intermediate',
    category: 'Intermediate',
    careTips: {
      general: 'Trident Maple is one of the most popular deciduous bonsai species. Three-lobed leaves turn brilliant orange and red in autumn. Develops excellent ramification and attractive flaking bark with age. Vigorous grower that responds well to training. Requires winter dormancy.',
      soilType: 'Well-draining bonsai mix with good water retention.',
      feeding: 'Fertilize every 2 weeks during spring through fall with balanced fertilizer. Stop fertilizing in late summer to harden off growth for winter.',
      watering: 'Keep consistently moist during growing season. Water daily in summer heat. Reduce watering in winter but do not let soil dry completely.'
    },
    bonsaiStyles: ['Broom', 'Informal Upright', 'Formal Upright', 'Root-over-Rock'],
    techniques: [
    {
      name: 'Root Pruning',
      description: 'Trident Maple tolerates root pruning well. Remove up to 1/3 of root mass during repotting to encourage fine feeder roots.',
      timing: 'During spring repotting when tree is entering active growth.',
      maturityStage: 'Can begin root pruning during first repotting after 1-2 years.',
      notRecommended: false
    },
    {
      name: 'Defoliation (Total, Partial)',
      description: 'Defoliation reduces leaf size, encourages ramification, and allows light to interior branches. Trident Maple responds well to defoliation when healthy and vigorous.',
      timing: 'Mid-summer (June-July) after first flush has hardened. Only defoliate healthy, vigorous trees. Can be done annually or every other year for deciduous species.',
      maturityStage: 'Only on established, healthy trees (minimum 3-4 years old). Not recommended for weak or recently repotted trees.',
      notRecommended: false
    },
    {
      name: 'Pinching',
      description: 'Pinching new growth encourages ramification and compact growth. Very effective technique for Trident Maple to develop dense foliage pads.',
      timing: 'Throughout growing season. Pinch new shoots back to 1-2 leaves once they extend 3-4 leaves.',
      maturityStage: 'Can begin on young trees once vigorous growth is established.',
      notRecommended: false
    },
    {
      name: 'Grafting (Scion grafting, Thread grafting, Approach grafting)',
      description: 'Trident Maple accepts grafts well. Thread grafting can add branches in desired locations. Approach grafting useful for trunk fusion or adding roots.',
      timing: 'Best during active growing season (late spring to early summer) when sap flow is strong.',
      maturityStage: 'Perform on established trees (3-5 years old) with good vigor.',
      notRecommended: false
    },
    {
      name: 'Jin (Deadwood Technique)',
      description: 'Can be created on Trident Maple. The wood must be treated with lime sulfur to prevent rot. Creates dramatic aged appearance.',
      timing: 'Can be done during growing season when bark peels more easily. Apply lime sulfur for preservation and bleaching.',
      maturityStage: 'Best on mature trees with established branches. Not recommended for young trees.',
      notRecommended: false
    },
    {
      name: 'Shari (Trunk Deadwood Technique)',
      description: 'Shari is not recommended for Trident Maple due to tendency for exposed wood to rot quickly. Deciduous and broadleaf evergreen trees rarely use this technique.',
      timing: 'Not recommended for this species.',
      maturityStage: 'Not applicable.',
      notRecommended: true
    },
    {
      name: 'Nebari Development (Surface Roots)',
      description: 'Trident Maple develops excellent nebari naturally. Techniques like root pruning, ground layering, and air layering enhance radial root spread.',
      timing: 'Work on nebari during spring repotting. Can be developed over multiple years.',
      maturityStage: 'Begin developing nebari from young age (2-3 years) for best results.',
      notRecommended: false
    },
    {
      name: 'Carving',
      description: 'Carving can be done on Trident Maple to create hollows or refine deadwood. Requires thorough treatment with wood hardener and sealant to prevent rot.',
      timing: 'Best during growing season when wood is easier to work. Treat immediately with preservatives.',
      maturityStage: 'Only on mature trees. Limited use due to rot susceptibility.',
      notRecommended: false
    },
    {
      name: 'Air Layering',
      description: 'Trident Maple responds excellently to air layering. Very effective technique for creating new trees from branches or improving trunk taper and nebari.',
      timing: 'Late spring to early summer when tree is in active growth. Roots typically form within 2-3 months.',
      maturityStage: 'Can be performed on healthy branches of various sizes. Works on both young and mature trees.',
      notRecommended: false
    },
    {
      name: 'Fertilizing',
      description: 'Trident Maple is a vigorous grower and benefits from regular fertilization during growing season. Use balanced fertilizer or slightly higher nitrogen in spring.',
      timing: 'Every 2-3 weeks during spring through autumn. Reduce or stop during winter dormancy.',
      maturityStage: 'Begin fertilizing once tree is established and actively growing.',
      notRecommended: false
    },
    {
      name: 'Pest and Disease Management',
      description: 'Trident Maple can be affected by aphids, spider mites, scale insects. Good air circulation and proper watering prevent most issues. Treat with appropriate organic or chemical controls when needed.',
      timing: 'Monitor regularly throughout growing season. Treat immediately upon detection.',
      maturityStage: 'Applicable to all stages of development.',
      notRecommended: false
    },
    {
      name: 'Watering and Humidity Control',
      description: 'Trident Maple prefers consistent moisture but good drainage. Allow topsoil to dry slightly between waterings. Appreciates occasional misting in dry environments.',
      timing: 'Water as needed based on soil moisture, temperature, and season. More frequent in summer, reduced in winter.',
      maturityStage: 'Critical for all stages of development.',
      notRecommended: false
    }
  ],
    images: {
      developmentStages: {
        early: '/bonsai_photos/placeholder/placeholder_early.jpg',
        middle: '/bonsai_photos/placeholder/placeholder_middle.jpg',
        mature: '/bonsai_photos/placeholder/placeholder_mature.jpg'
      },
      seasons: {
        spring: '/bonsai_photos/placeholder/placeholder_spring.jpg',
        summer: '/bonsai_photos/placeholder/placeholder_summer.jpg',
        autumn: '/bonsai_photos/placeholder/placeholder_autumn.jpg',
        winter: '/bonsai_photos/placeholder/placeholder_winter.jpg'
      },
      styles: {},
      nature: {}
    },
    imageCredits: {}
  },
  {
    id: 'pomegranate',
    scientificName: 'Punica granatum',
    commonName: 'Pomegranate',
    group: 'Lythraceae',
    temperatureMin: -5,
    temperatureMax: 40,
    sunExposure: 'Full sun',
    position: 'Outdoor',
    leafType: 'Deciduous',
    climate: 'Mediterranean',
    flowering: 'Orange-red flowers in summer, small fruits',
    nativeRegion: 'Mediterranean, Middle East',
    difficultyLevel: 'Intermediate',
    category: 'Intermediate',
    careTips: {
      general: 'Pomegranate produces spectacular orange-red flowers and miniature fruits. Dwarf varieties are ideal for bonsai. Loves heat and full sun. Develops attractive flaking bark. Flowers appear on new growth. Requires winter dormancy in cooler climates.',
      soilType: 'Well-draining bonsai mix. Tolerates various soil types.',
      feeding: 'Fertilize every 2 weeks during spring through fall. Increase phosphorus during flowering season.',
      watering: 'Water regularly during growing season. Reduce watering in winter. Tolerates some drought but flowers better with consistent moisture.'
    },
    bonsaiStyles: ['Informal Upright', 'Slanting', 'Multi-trunk', 'Root-over-Rock'],
    techniques: [
    {
      name: 'Root Pruning',
      description: 'Pomegranate tolerates root pruning well. Remove up to 1/3 of root mass during repotting to encourage fine feeder roots.',
      timing: 'During spring repotting when tree is entering active growth.',
      maturityStage: 'Can begin root pruning during first repotting after 1-2 years.',
      notRecommended: false
    },
    {
      name: 'Defoliation (Total, Partial)',
      description: 'Defoliation reduces leaf size, encourages ramification, and allows light to interior branches. Pomegranate responds well to defoliation when healthy and vigorous.',
      timing: 'Mid-summer (June-July) after first flush has hardened. Only defoliate healthy, vigorous trees. Can be done annually or every other year for deciduous species.',
      maturityStage: 'Only on established, healthy trees (minimum 3-4 years old). Not recommended for weak or recently repotted trees.',
      notRecommended: false
    },
    {
      name: 'Pinching',
      description: 'Pinching new growth encourages ramification and compact growth. Very effective technique for Pomegranate to develop dense foliage pads.',
      timing: 'Throughout growing season. Pinch new shoots back to 1-2 leaves once they extend 3-4 leaves.',
      maturityStage: 'Can begin on young trees once vigorous growth is established.',
      notRecommended: false
    },
    {
      name: 'Grafting (Scion grafting, Thread grafting, Approach grafting)',
      description: 'Pomegranate accepts grafts well. Thread grafting can add branches in desired locations. Approach grafting useful for trunk fusion or adding roots.',
      timing: 'Best during active growing season (late spring to early summer) when sap flow is strong.',
      maturityStage: 'Perform on established trees (3-5 years old) with good vigor.',
      notRecommended: false
    },
    {
      name: 'Jin (Deadwood Technique)',
      description: 'Can be created on Pomegranate. The wood must be treated with lime sulfur to prevent rot. Creates dramatic aged appearance.',
      timing: 'Can be done during growing season when bark peels more easily. Apply lime sulfur for preservation and bleaching.',
      maturityStage: 'Best on mature trees with established branches. Not recommended for young trees.',
      notRecommended: false
    },
    {
      name: 'Shari (Trunk Deadwood Technique)',
      description: 'Shari is not recommended for Pomegranate due to tendency for exposed wood to rot quickly. Deciduous and broadleaf evergreen trees rarely use this technique.',
      timing: 'Not recommended for this species.',
      maturityStage: 'Not applicable.',
      notRecommended: true
    },
    {
      name: 'Nebari Development (Surface Roots)',
      description: 'Pomegranate develops excellent nebari naturally. Techniques like root pruning, ground layering, and air layering enhance radial root spread.',
      timing: 'Work on nebari during spring repotting. Can be developed over multiple years.',
      maturityStage: 'Begin developing nebari from young age (2-3 years) for best results.',
      notRecommended: false
    },
    {
      name: 'Carving',
      description: 'Carving can be done on Pomegranate to create hollows or refine deadwood. Requires thorough treatment with wood hardener and sealant to prevent rot.',
      timing: 'Best during growing season when wood is easier to work. Treat immediately with preservatives.',
      maturityStage: 'Only on mature trees. Limited use due to rot susceptibility.',
      notRecommended: false
    },
    {
      name: 'Air Layering',
      description: 'Pomegranate responds excellently to air layering. Very effective technique for creating new trees from branches or improving trunk taper and nebari.',
      timing: 'Late spring to early summer when tree is in active growth. Roots typically form within 2-3 months.',
      maturityStage: 'Can be performed on healthy branches of various sizes. Works on both young and mature trees.',
      notRecommended: false
    },
    {
      name: 'Fertilizing',
      description: 'Pomegranate is a vigorous grower and benefits from regular fertilization during growing season. Use balanced fertilizer or slightly higher nitrogen in spring.',
      timing: 'Every 2-3 weeks during spring through autumn. Reduce or stop during winter dormancy.',
      maturityStage: 'Begin fertilizing once tree is established and actively growing.',
      notRecommended: false
    },
    {
      name: 'Pest and Disease Management',
      description: 'Pomegranate can be affected by aphids, spider mites, scale insects. Good air circulation and proper watering prevent most issues. Treat with appropriate organic or chemical controls when needed.',
      timing: 'Monitor regularly throughout growing season. Treat immediately upon detection.',
      maturityStage: 'Applicable to all stages of development.',
      notRecommended: false
    },
    {
      name: 'Watering and Humidity Control',
      description: 'Pomegranate prefers consistent moisture but good drainage. Allow topsoil to dry slightly between waterings. Appreciates occasional misting in dry environments.',
      timing: 'Water as needed based on soil moisture, temperature, and season. More frequent in summer, reduced in winter.',
      maturityStage: 'Critical for all stages of development.',
      notRecommended: false
    }
  ],
    images: {
      developmentStages: {
        early: '/bonsai_photos/placeholder/placeholder_early.jpg',
        middle: '/bonsai_photos/placeholder/placeholder_middle.jpg',
        mature: '/bonsai_photos/placeholder/placeholder_mature.jpg'
      },
      seasons: {
        spring: '/bonsai_photos/placeholder/placeholder_spring.jpg',
        summer: '/bonsai_photos/placeholder/placeholder_summer.jpg',
        autumn: '/bonsai_photos/placeholder/placeholder_autumn.jpg',
        winter: '/bonsai_photos/placeholder/placeholder_winter.jpg'
      },
      styles: {},
      nature: {}
    },
    imageCredits: {}
  },
  // ADVANCED SPECIES - PHASE 2
  {
    id: 'japanese-black-pine',
    scientificName: 'Pinus thunbergii',
    commonName: 'Japanese Black Pine',
    group: 'Pinaceae',
    temperatureMin: -15,
    temperatureMax: 35,
    sunExposure: 'Full sun',
    position: 'Outdoor',
    leafType: 'Evergreen Conifer',
    climate: 'Temperate',
    flowering: 'Cones',
    nativeRegion: 'Japan, Korea',
    difficultyLevel: 'Advanced',
    category: 'Advanced',
    careTips: {
      general: 'Japanese Black Pine is one of the most classic and revered bonsai species in Japan. Requires specific techniques including candle pinching, needle plucking, and careful timing. Develops thick, rugged bark and dense needle pads with proper care. Requires full sun and excellent air circulation. Not recommended for beginners.',
      soilType: 'Well-draining bonsai mix with high percentage of inorganic components (akadama, pumice, lava rock).',
      feeding: 'Fertilize moderately during spring and fall. Reduce nitrogen in late summer. Do not overfeed or needles will become too long.',
      watering: 'Water when soil surface dries. Good drainage essential. Reduce watering in winter but do not let soil dry completely.'
    },
    bonsaiStyles: ['Informal Upright', 'Formal Upright', 'Literati', 'Windswept'],
    techniques: [
    {
      name: 'Pruning (Structural & Maintenance)',
      description: 'Japanese Black Pine requires careful pruning. Never remove all needles from a branch as it will die. Prune back to areas with needles. Structural pruning creates the basic framework.',
      timing: 'Structural pruning in late autumn to winter when sap flow is minimal. Avoid heavy pruning during active growth.',
      maturityStage: 'Begin structural pruning after 3-4 years when tree has developed sufficient vigor.',
      notRecommended: false
    },
    {
      name: 'Root Pruning',
      description: 'Japanese Black Pine tolerates root pruning but is more sensitive than deciduous species. Remove no more than 1/4 to 1/3 of root mass. Mycorrhizal fungi in roots are important for health.',
      timing: 'During spring repotting, just before new growth begins.',
      maturityStage: 'Can begin root pruning after 2-3 years, but be conservative with young trees.',
      notRecommended: false
    },
    {
      name: 'Defoliation (Total, Partial)',
      description: 'Total defoliation is not applicable to Japanese Black Pine. Conifers do not regenerate from bare wood. Needle plucking (already listed separately) is the appropriate technique for needle reduction.',
      timing: 'Not applicable for conifers.',
      maturityStage: 'Not applicable.',
      notRecommended: true
    },
    {
      name: 'Pinching',
      description: 'Traditional pinching is not used on Japanese Black Pine. Candle pinching (already listed separately) is the appropriate technique for controlling growth and encouraging back-budding in pines.',
      timing: 'See candle pinching technique.',
      maturityStage: 'See candle pinching technique.',
      notRecommended: true
    },
    {
      name: 'Grafting (Scion grafting, Thread grafting, Approach grafting)',
      description: 'Japanese Black Pine can be grafted to add branches or improve foliage characteristics. Thread grafting is particularly useful for adding branches in bare areas. Requires skill and patience.',
      timing: 'Best in late winter to early spring before new growth begins.',
      maturityStage: 'Perform on established trees (5+ years old) with good vigor.',
      notRecommended: false
    },
    {
      name: 'Jin (Deadwood Technique)',
      description: 'Jin is a classic and essential technique for Japanese Black Pine. Pines naturally develop deadwood in nature. Creates dramatic aged appearance. Treat with lime sulfur for preservation and bleaching.',
      timing: 'Can be done year-round, but easier during growing season when bark peels more readily. Apply lime sulfur treatment.',
      maturityStage: 'Can begin on trees 5+ years old. Essential technique for creating aged pine bonsai.',
      notRecommended: false
    },
    {
      name: 'Shari (Trunk Deadwood Technique)',
      description: 'Shari is a classic technique for Japanese Black Pine, creating dramatic trunk deadwood features. Must be carefully carved and treated with lime sulfur. Creates the appearance of lightning strikes or natural aging.',
      timing: 'Best during growing season for easier bark removal. Apply lime sulfur treatment after carving.',
      maturityStage: 'Only on mature, well-established trees with thick trunks (8+ years old).',
      notRecommended: false
    },
    {
      name: 'Nebari Development (Surface Roots)',
      description: 'Japanese Black Pine can develop good surface roots but requires patience. Techniques like strategic root pruning during repotting and gradual soil removal expose roots. Radial root spread is important for stability and aesthetics.',
      timing: 'Work on nebari during spring repotting. Develop gradually over many years.',
      maturityStage: 'Begin developing nebari from young age (3-4 years) for best long-term results.',
      notRecommended: false
    },
    {
      name: 'Carving',
      description: 'Carving is common and highly valued on Japanese Black Pine. Pine wood is excellent for carving deadwood features. Creates dramatic jin and shari. Use rotary tools and hand carving tools. Treat with lime sulfur.',
      timing: 'Can be done year-round but easier during growing season. Treat immediately with lime sulfur for preservation.',
      maturityStage: 'Suitable for mature trees. Essential skill for advanced pine bonsai.',
      notRecommended: false
    },
    {
      name: 'Air Layering',
      description: 'Air layering is possible but challenging on Japanese Black Pine. Pines root slowly and success rates are lower than deciduous species. Requires patience (often 1-2 years) and careful technique. Best on younger branches.',
      timing: 'Late spring. May take 12-24 months for adequate roots to form.',
      maturityStage: 'Best on younger, more vigorous branches (3-5 years old). Success rate decreases with age.',
      notRecommended: false
    },
    {
      name: 'Fertilizing',
      description: 'Japanese Black Pine requires regular but moderate fertilization. Use balanced fertilizer or slightly higher nitrogen in spring for needle growth. Reduce nitrogen in late summer to harden growth for winter.',
      timing: 'Every 3-4 weeks during growing season (spring through early autumn). Reduce or stop in late autumn and winter.',
      maturityStage: 'Begin fertilizing once tree is established and actively growing.',
      notRecommended: false
    },
    {
      name: 'Pest and Disease Management',
      description: 'Japanese Black Pine can be affected by spider mites, scale insects, adelgids, and needle cast diseases. Good air circulation is essential. Monitor regularly for pests. Treat promptly with appropriate controls.',
      timing: 'Monitor regularly throughout year. Treat immediately upon detection. Preventive spraying in spring may be beneficial.',
      maturityStage: 'Applicable to all stages of development.',
      notRecommended: false
    },
    {
      name: 'Watering and Humidity Control',
      description: 'Japanese Black Pine prefers consistent moisture but excellent drainage. Never allow to dry completely as pines are sensitive to drought. Prefers moderate humidity. Avoid overhead watering in evening to prevent fungal issues.',
      timing: 'Water as needed to keep soil consistently moist but not waterlogged. More frequent in summer, reduced but consistent in winter.',
      maturityStage: 'Critical for all stages of development. Young pines especially sensitive to drying out.',
      notRecommended: false
    }
  ],
    images: {
      developmentStages: {
        early: '/bonsai_photos/placeholder/placeholder_early.jpg',
        middle: '/bonsai_photos/placeholder/placeholder_middle.jpg',
        mature: '/bonsai_photos/placeholder/placeholder_mature.jpg'
      },
      seasons: {
        spring: '/bonsai_photos/placeholder/placeholder_spring.jpg',
        summer: '/bonsai_photos/placeholder/placeholder_summer.jpg',
        autumn: '/bonsai_photos/placeholder/placeholder_autumn.jpg',
        winter: '/bonsai_photos/placeholder/placeholder_winter.jpg'
      },
      styles: {},
      nature: {}
    },
    imageCredits: {}
  },
  {
    id: 'japanese-white-pine',
    scientificName: 'Pinus parviflora',
    commonName: 'Japanese White Pine',
    group: 'Pinaceae',
    temperatureMin: -20,
    temperatureMax: 30,
    sunExposure: 'Full sun',
    position: 'Outdoor',
    leafType: 'Evergreen Conifer',
    climate: 'Temperate',
    flowering: 'Cones',
    nativeRegion: 'Japan',
    difficultyLevel: 'Advanced',
    category: 'Advanced',
    careTips: {
      general: 'Japanese White Pine is considered the pinnacle of bonsai artistry. Shorter needles than Black Pine with bluish-green color. Requires advanced techniques and years of patient development. Often grafted onto Black Pine rootstock for vigor. Extremely valuable specimens can be worth tens of thousands of dollars.',
      soilType: 'Well-draining bonsai mix with high percentage of inorganic components. Excellent drainage critical.',
      feeding: 'Fertilize moderately during spring and fall. Low nitrogen to keep needles short. Specialized pine fertilizer recommended.',
      watering: 'Water when soil surface dries. Excellent drainage essential. More sensitive to overwatering than Black Pine.'
    },
    bonsaiStyles: ['Informal Upright', 'Formal Upright', 'Literati', 'Cascade'],
    techniques: [
    {
      name: 'Pruning (Structural & Maintenance)',
      description: 'Japanese White Pine requires careful pruning. Never remove all needles from a branch as it will die. Prune back to areas with needles. Structural pruning creates the basic framework.',
      timing: 'Structural pruning in late autumn to winter when sap flow is minimal. Avoid heavy pruning during active growth.',
      maturityStage: 'Begin structural pruning after 3-4 years when tree has developed sufficient vigor.',
      notRecommended: false
    },
    {
      name: 'Root Pruning',
      description: 'Japanese White Pine tolerates root pruning but is more sensitive than deciduous species. Remove no more than 1/4 to 1/3 of root mass. Mycorrhizal fungi in roots are important for health.',
      timing: 'During spring repotting, just before new growth begins.',
      maturityStage: 'Can begin root pruning after 2-3 years, but be conservative with young trees.',
      notRecommended: false
    },
    {
      name: 'Defoliation (Total, Partial)',
      description: 'Total defoliation is not applicable to Japanese White Pine. Conifers do not regenerate from bare wood. Needle plucking (already listed separately) is the appropriate technique for needle reduction.',
      timing: 'Not applicable for conifers.',
      maturityStage: 'Not applicable.',
      notRecommended: true
    },
    {
      name: 'Pinching',
      description: 'Traditional pinching is not used on Japanese White Pine. Candle pinching (already listed separately) is the appropriate technique for controlling growth and encouraging back-budding in pines.',
      timing: 'See candle pinching technique.',
      maturityStage: 'See candle pinching technique.',
      notRecommended: true
    },
    {
      name: 'Grafting (Scion grafting, Thread grafting, Approach grafting)',
      description: 'Japanese White Pine can be grafted to add branches or improve foliage characteristics. Thread grafting is particularly useful for adding branches in bare areas. Requires skill and patience.',
      timing: 'Best in late winter to early spring before new growth begins.',
      maturityStage: 'Perform on established trees (5+ years old) with good vigor.',
      notRecommended: false
    },
    {
      name: 'Jin (Deadwood Technique)',
      description: 'Jin is a classic and essential technique for Japanese White Pine. Pines naturally develop deadwood in nature. Creates dramatic aged appearance. Treat with lime sulfur for preservation and bleaching.',
      timing: 'Can be done year-round, but easier during growing season when bark peels more readily. Apply lime sulfur treatment.',
      maturityStage: 'Can begin on trees 5+ years old. Essential technique for creating aged pine bonsai.',
      notRecommended: false
    },
    {
      name: 'Shari (Trunk Deadwood Technique)',
      description: 'Shari is a classic technique for Japanese White Pine, creating dramatic trunk deadwood features. Must be carefully carved and treated with lime sulfur. Creates the appearance of lightning strikes or natural aging.',
      timing: 'Best during growing season for easier bark removal. Apply lime sulfur treatment after carving.',
      maturityStage: 'Only on mature, well-established trees with thick trunks (8+ years old).',
      notRecommended: false
    },
    {
      name: 'Nebari Development (Surface Roots)',
      description: 'Japanese White Pine can develop good surface roots but requires patience. Techniques like strategic root pruning during repotting and gradual soil removal expose roots. Radial root spread is important for stability and aesthetics.',
      timing: 'Work on nebari during spring repotting. Develop gradually over many years.',
      maturityStage: 'Begin developing nebari from young age (3-4 years) for best long-term results.',
      notRecommended: false
    },
    {
      name: 'Carving',
      description: 'Carving is common and highly valued on Japanese White Pine. Pine wood is excellent for carving deadwood features. Creates dramatic jin and shari. Use rotary tools and hand carving tools. Treat with lime sulfur.',
      timing: 'Can be done year-round but easier during growing season. Treat immediately with lime sulfur for preservation.',
      maturityStage: 'Suitable for mature trees. Essential skill for advanced pine bonsai.',
      notRecommended: false
    },
    {
      name: 'Air Layering',
      description: 'Air layering is possible but challenging on Japanese White Pine. Pines root slowly and success rates are lower than deciduous species. Requires patience (often 1-2 years) and careful technique. Best on younger branches.',
      timing: 'Late spring. May take 12-24 months for adequate roots to form.',
      maturityStage: 'Best on younger, more vigorous branches (3-5 years old). Success rate decreases with age.',
      notRecommended: false
    },
    {
      name: 'Fertilizing',
      description: 'Japanese White Pine requires regular but moderate fertilization. Use balanced fertilizer or slightly higher nitrogen in spring for needle growth. Reduce nitrogen in late summer to harden growth for winter.',
      timing: 'Every 3-4 weeks during growing season (spring through early autumn). Reduce or stop in late autumn and winter.',
      maturityStage: 'Begin fertilizing once tree is established and actively growing.',
      notRecommended: false
    },
    {
      name: 'Pest and Disease Management',
      description: 'Japanese White Pine can be affected by spider mites, scale insects, adelgids, and needle cast diseases. Good air circulation is essential. Monitor regularly for pests. Treat promptly with appropriate controls.',
      timing: 'Monitor regularly throughout year. Treat immediately upon detection. Preventive spraying in spring may be beneficial.',
      maturityStage: 'Applicable to all stages of development.',
      notRecommended: false
    },
    {
      name: 'Watering and Humidity Control',
      description: 'Japanese White Pine prefers consistent moisture but excellent drainage. Never allow to dry completely as pines are sensitive to drought. Prefers moderate humidity. Avoid overhead watering in evening to prevent fungal issues.',
      timing: 'Water as needed to keep soil consistently moist but not waterlogged. More frequent in summer, reduced but consistent in winter.',
      maturityStage: 'Critical for all stages of development. Young pines especially sensitive to drying out.',
      notRecommended: false
    }
  ],
    images: {
      developmentStages: {
        early: '/bonsai_photos/placeholder/placeholder_early.jpg',
        middle: '/bonsai_photos/placeholder/placeholder_middle.jpg',
        mature: '/bonsai_photos/placeholder/placeholder_mature.jpg'
      },
      seasons: {
        spring: '/bonsai_photos/placeholder/placeholder_spring.jpg',
        summer: '/bonsai_photos/placeholder/placeholder_summer.jpg',
        autumn: '/bonsai_photos/placeholder/placeholder_autumn.jpg',
        winter: '/bonsai_photos/placeholder/placeholder_winter.jpg'
      },
      styles: {},
      nature: {}
    },
    imageCredits: {}
  }
];

export const getDifficultyBadgeClass = (level: string) => {
  switch (level) {
    case 'Beginner':
      return 'bg-green-100 text-green-800';
    case 'Intermediate':
      return 'bg-yellow-100 text-yellow-800';
    case 'Expert':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export const getClimateIcon = (climate: string) => {
  switch (climate) {
    case 'Tropical':
      return '☀️';
    case 'Subtropical':
      return '🌤️';
    case 'Temperate':
      return '🍂';
    case 'Mediterranean':
      return '🌿';
    default:
      return '❓';
  }
};

