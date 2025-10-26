import type { BonsaiSpecies } from '../types/bonsai';

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
    difficultyLevel: 'Expert',
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
    difficultyLevel: 'Expert',
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
  },
  {
    id: 'hawaiian-umbrella',
    scientificName: 'Schefflera arboricola',
    commonName: 'Hawaiian Umbrella (Schefflera arboricola)',
    group: 'Various',
    temperatureMin: 18,
    temperatureMax: 10,
    sunExposure: 'Bright indirect light',
    position: 'Indoor',
    leafType: 'Evergreen Broadleaf',
    climate: 'Tropical',
    flowering: 'Yes',
    nativeRegion: 'Taiwan and Hainan Province, China (also common in Southeast Asia and sometimes cited as Australia).',
    difficultyLevel: 'Beginner',
    category: 'Beginner',
    careTips: {
      general: 'Wiring is not a promising technique as the wood is soft and brittle. Shaping is primarily achieved through constant pruning. The species is excellent for developing aerial roots (Banyan style) and is ...',
      soilType: 'use a standard bonsai soil mix. feeding: liquid fertilizer weekly from spring to autumn, and monthly in winter. solid organic fertilizer can be used i',
      feeding: 'liquid fertilizer weekly from spring to autumn, and monthly in winter. solid organic fertilizer can be used in summer.',
      watering: 'likes moist soil; do not let the rootball dry out. water more cautiously in winter. soil: use a standard bonsai soil mix. feeding: liquid fertilizer w'
    },
    bonsaiStyles: ['Informal Upright', 'Formal Upright', 'Slanting'],
    techniques: [
      {
        name: 'Pruning (Structural & Maintenance)',
        description: 'Pruning is the primary technique to shape Hawaiian Umbrella bonsai due to its soft, brittle wood which does not respond well to wiring. Structural pruning should be done to establish the main framework, while regular maintenance pruning encourages the dense, compact growth of its compound leaves and radial leaf arrangement. It also helps in directing energy to aerial root development for Banyan or root-over-rock styles.',
        timing: 'Late spring through summer when growth is active',
        maturityStage: 'Begin as soon as the tree has sufficient branches to shape, usually after 1-2 years',
        notRecommended: false
      },
      {
        name: 'Wiring',
        description: 'Wiring is generally not recommended for Schefflera arboricola because the branches have soft, brittle wood that breaks easily under bending stress. Instead, shaping should rely on pruning and natural growth patterns.',
        timing: 'N/A',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Repotting',
        description: 'Repotting Hawaiian Umbrella bonsai is essential every 2-3 years to refresh soil and prevent root-bound conditions. Use a standard bonsai soil mix with good drainage. Repotting also provides an opportunity to inspect roots and encourage aerial root development by slightly exposing them if desired.',
        timing: 'Early spring before new growth begins',
        maturityStage: 'Start from young bonsai, around 1-2 years old',
        notRecommended: false
      },
      {
        name: 'Root Pruning',
        description: 'Root pruning is performed during repotting to maintain a compact root system and promote healthy growth. For Schefflera, root pruning should be moderate to avoid excessive stress, as the species prefers moist conditions and can be sensitive to root damage.',
        timing: 'Early spring during repotting',
        maturityStage: 'After initial establishment, usually 1-2 years',
        notRecommended: false
      },
      {
        name: 'Defoliation',
        description: 'Defoliation is not commonly practiced on Hawaiian Umbrella bonsai because the compound, radially arranged leaves do not respond well to complete leaf removal. Partial leaf pruning or selective leaf trimming is preferable to maintain foliage density and health.',
        timing: 'If applied, late spring to early summer',
        maturityStage: 'Only on mature bonsai with strong growth',
        notRecommended: true
      },
      {
        name: 'Pinching',
        description: 'Pinching new shoots encourages bushier growth and helps maintain compact foliage on Schefflera bonsai. This technique is especially useful for developing a dense canopy in forest or root-over-rock styles. Pinching should be done carefully to avoid damaging soft branches.',
        timing: 'Throughout the active growing season from spring to early autumn',
        maturityStage: 'From young saplings onwards',
        notRecommended: false
      },
      {
        name: 'Grafting',
        description: 'Grafting is rarely needed for Hawaiian Umbrella bonsai due to its vigorous growth and ease of propagation through cuttings. Additionally, the soft wood and brittle branches make grafting challenging and less reliable.',
        timing: 'N/A',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Jin (Deadwood Technique)',
        description: 'Creating jins is not typically practiced on Schefflera arboricola because its soft, brittle wood does not lend itself well to deadwood techniques. Attempting jin can damage the tree unnecessarily and detract from its natural aesthetic.',
        timing: 'N/A',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Shari (Trunk Deadwood Technique)',
        description: 'Shari is not suitable for Hawaiian Umbrella bonsai due to the softness and brittleness of its trunk wood. The species is better showcased with lush foliage and aerial roots rather than deadwood features.',
        timing: 'N/A',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Nebari Development (Surface Roots)',
        description: 'Developing an attractive nebari is important for Schefflera bonsai, especially in root-over-rock styles. Encouraging radial surface root spread during repotting and root pruning helps create a stable and visually pleasing base.',
        timing: 'Early spring during repotting or root pruning',
        maturityStage: 'After initial 2-3 years when roots are established',
        notRecommended: false
      },
      {
        name: 'Carving',
        description: 'Carving is not recommended for this species due to the soft and brittle nature of its wood, which does not hold carved details well and may cause damage to the tree.',
        timing: 'N/A',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Air Layering',
        description: 'Air layering is an effective propagation method for Schefflera arboricola. It can be used to create new plants or develop multiple trunks in a forest style. The technique encourages root formation on branches, supporting aerial root development.',
        timing: 'Late spring to early summer when growth is vigorous',
        maturityStage: 'From semi-mature bonsai or healthy branches of mature plants',
        notRecommended: false
      },
      {
        name: 'Fertilizing',
        description: 'Regular fertilizing supports the fast growth and lush foliage of Hawaiian Umbrella bonsai. Use a balanced liquid fertilizer weekly from spring to autumn and reduce frequency to monthly in winter. Solid organic fertilizers can be applied in summer for sustained nutrition.',
        timing: 'Spring through autumn weekly; winter monthly; solid fertilizer in summer',
        maturityStage: 'Start once the bonsai is established, usually after 1 year',
        notRecommended: false
      },
      {
        name: 'Pest and Disease Management',
        description: 'Schefflera arboricola is generally pest-resistant, but occasional scale infestations can occur. Regular inspection and early treatment with horticultural oils or insecticidal soaps help maintain tree health. Good air circulation and avoiding waterlogging reduce disease risks.',
        timing: 'Monitor year-round, with increased vigilance in spring and summer',
        maturityStage: 'All maturity stages',
        notRecommended: false
      },
      {
        name: 'Watering and Humidity Control',
        description: 'Maintaining consistently moist soil is critical for Hawaiian Umbrella bonsai, avoiding drying of the rootball. Water thoroughly when the topsoil begins to dry, but reduce watering cautiously during winter dormancy. Increasing ambient humidity benefits foliage health indoors.',
        timing: 'Water as needed year-round; cautious reduction in winter; maintain humidity especially in dry indoor environments',
        maturityStage: 'All stages from young saplings to mature bonsai',
        notRecommended: false
      }
    ],
    images: {
      developmentStages: {
        early: '/bonsai_photos/placeholder/early.jpg',
        middle: '/bonsai_photos/placeholder/middle.jpg',
        mature: '/bonsai_photos/placeholder/mature.jpg'
      },
      seasons: {
        spring: '/bonsai_photos/placeholder/spring.jpg',
        summer: '/bonsai_photos/placeholder/summer.jpg',
        autumn: '/bonsai_photos/placeholder/autumn.jpg',
        winter: '/bonsai_photos/placeholder/winter.jpg'
      },
      styles: {},
      nature: {}
    },
    imageCredits: {}
  },
  {
    id: 'tiger-bark-ficus',
    scientificName: 'Ficus microcarpa \'Tigerbark\'',
    commonName: 'Tiger Bark Ficus (Ficus microcarpa \'Tigerbark\')',
    group: 'Various',
    temperatureMin: 15,
    temperatureMax: 27,
    sunExposure: 'Full sun',
    position: 'Indoor (can be outdoor in summer)',
    leafType: 'Evergreen Broadleaf',
    climate: 'Tropical',
    flowering: 'Inconspicuous',
    nativeRegion: 'Tropical Asia, West Pacific islands, and Australia',
    difficultyLevel: 'Beginner',
    category: 'Beginner',
    careTips: {
      general: 'The \'Tigerbark\' variety is known for its distinctive brown-grey bark with white stripes. It is fast-growing and very tolerant of mistakes, making it ideal for beginners. Like other Ficus species, it p...',
      soilType: 'Well-draining bonsai soil mix',
      feeding: 'Regular fertilization during growing season',
      watering: 'Keep soil moderately moist, avoid overwatering'
    },
    bonsaiStyles: ['Informal Upright', 'Formal Upright', 'Slanting'],
    techniques: [
      {
        name: 'Pruning (Structural & Maintenance)',
        description: 'Tiger Bark Ficus responds well to both structural and maintenance pruning due to its vigorous growth habit. Structural pruning should focus on establishing the main branches and desired style, while maintenance pruning helps keep the dense foliage compact and encourages ramification. Avoid heavy pruning in cold or low light conditions to prevent stress.',
        timing: 'Early spring to early autumn, preferably during active growth periods (March to September). Avoid pruning in winter or when temperatures drop below 15°C (60°F).',
        maturityStage: 'Can begin structural pruning once the tree has developed primary branches, usually after 1-2 years of growth. Maintenance pruning can be ongoing as soon as the tree is actively growing.',
        notRecommended: false
      },
      {
        name: 'Wiring',
        description: 'Wiring Tiger Bark Ficus is effective for shaping its flexible branches and trunk, especially to refine informal upright, slanting, and banyan styles. Use aluminum or annealed copper wire, taking care to avoid damaging the sensitive bark. Due to rapid growth, wiring should be monitored and removed or adjusted every 4-6 weeks to prevent wire scars.',
        timing: 'Best applied during active growth in spring through early autumn (March to September). Avoid wiring during cold or dormant periods.',
        maturityStage: 'Once the branches have sufficient lignification, typically after 1 year or when branches are thick enough to hold shape without snapping.',
        notRecommended: false
      },
      {
        name: 'Repotting',
        description: 'Repotting every two years in spring is ideal for Tiger Bark Ficus to refresh soil and support vigorous root growth. Use a well-draining bonsai soil mix to prevent waterlogging and root rot. Repotting also provides an opportunity to inspect root health and perform root pruning.',
        timing: 'Early spring, just before the onset of active growth (March to April). Avoid repotting in cold or dormant seasons.',
        maturityStage: 'From young saplings onward; repotting can be done annually when the tree is very young, then every two years as it matures.',
        notRecommended: false
      },
      {
        name: 'Root Pruning',
        description: 'Root pruning is highly tolerated by Tiger Bark Ficus and is essential during repotting to maintain a compact root system and encourage fine root development. Heavy root pruning can be done safely due to the species’ vigorous recovery rate. Always ensure roots are trimmed with clean tools and the tree is well-watered afterward.',
        timing: 'During repotting in early spring (March to April) to coincide with the start of active growth.',
        maturityStage: 'Appropriate as soon as the tree develops a root system capable of supporting the foliage, usually after the first year.',
        notRecommended: false
      },
      {
        name: 'Defoliation',
        description: 'Partial defoliation can be used sparingly to promote back-budding and refine branch ramification, but full defoliation is generally not recommended due to the risk of stress. The Tiger Bark Ficus’ evergreen nature means it relies on leaves year-round, so aggressive defoliation may weaken the tree.',
        timing: 'Partial defoliation can be done in late spring to early summer (May to June) during active growth.',
        maturityStage: 'Recommended only on mature trees with strong vigor, typically after 3-4 years.',
        notRecommended: false
      },
      {
        name: 'Pinching',
        description: 'Pinching new growth tips encourages denser foliage and finer ramification in Tiger Bark Ficus. This technique is especially useful in spring and summer when growth is rapid. Use fingernails or scissors to remove soft new shoots without damaging underlying branches.',
        timing: 'Throughout the active growing season, mainly from spring to early autumn (March to September).',
        maturityStage: 'Suitable from young saplings onward, once the tree is actively growing.',
        notRecommended: false
      },
      {
        name: 'Grafting',
        description: 'Grafting is rarely necessary for Tiger Bark Ficus as it grows readily from cuttings and air layering. However, grafting can be used to add branches for style refinement or to repair damage, though it requires careful technique due to the latex sap that may interfere with graft union.',
        timing: 'Best performed in spring (March to April) when sap flow is active.',
        maturityStage: 'Ideal for mature trees or well-established young trees, typically 2+ years old.',
        notRecommended: false
      },
      {
        name: 'Jin (Deadwood Technique)',
        description: 'Creating jin on Tiger Bark Ficus can add dramatic aged character, especially in banyan and root-over-rock styles. However, due to the species’ smooth, tiger-striped bark, deadwood features should be applied carefully to avoid disrupting the bark pattern excessively. Select branches that are naturally dying or thick enough to support carving.',
        timing: 'Any time during active growth seasons (spring to autumn), but ideally when the tree is healthy and vigorous.',
        maturityStage: 'Best on mature trees with well-developed branches, usually after 5 years.',
        notRecommended: false
      },
      {
        name: 'Shari (Trunk Deadwood Technique)',
        description: 'Shari is suitable for Tiger Bark Ficus to emphasize the unique tiger-striped bark by exposing deadwood on the trunk. This enhances the aged appearance and contrasts with the living bark. Due to the species’ fast growth, shari can heal well but must be done carefully to avoid excessive sap loss.',
        timing: 'During the growing season (spring to early autumn) when the tree can heal quickly.',
        maturityStage: 'Recommended for mature specimens with thick trunks, typically 5+ years old.',
        notRecommended: false
      },
      {
        name: 'Nebari Development (Surface Roots)',
        description: 'Developing nebari on Tiger Bark Ficus requires patience and consistent root exposure, as the species naturally produces surface roots but optimal nebari is challenging without very high humidity. Techniques include root pruning, gradual soil removal, and root spreading during repotting to encourage radial root growth.',
        timing: 'Ongoing process, with root work best done during repotting in spring (March to April).',
        maturityStage: 'Begin nebari development from young trees (1-3 years) to shape roots early.',
        notRecommended: false
      },
      {
        name: 'Carving',
        description: 'Carving can be used for artistic deadwood or texture enhancement on Tiger Bark Ficus, but should be approached cautiously due to the species’ latex sap and delicate bark. Use sharp, precise tools and avoid deep cuts that may damage the living tissue beneath the bark.',
        timing: 'Any time during active growth when the tree is healthy, ideally spring to early autumn.',
        maturityStage: 'Best performed on mature trees with established bark and trunk, 4+ years old.',
        notRecommended: false
      },
      {
        name: 'Air Layering',
        description: 'Air layering is an excellent propagation method for Tiger Bark Ficus due to its vigorous root formation and latex-rich sap which can be easily managed with proper sealing. This technique is useful for creating new bonsai or developing nebari and aerial roots, especially for banyan styles.',
        timing: 'Best done in late spring to early summer (May to June) when sap flow is strong.',
        maturityStage: 'Can be performed on semi-mature to mature branches, typically 2+ years old.',
        notRecommended: false
      },
      {
        name: 'Fertilizing',
        description: 'Regular fertilization with a balanced liquid fertilizer supports the rapid growth and vibrant foliage of Tiger Bark Ficus. Increase feeding frequency during the active growing season, reducing or stopping during winter dormancy. Avoid over-fertilizing which can cause salt buildup in the soil.',
        timing: 'Monthly from early spring through early autumn (March to September); reduce or stop in winter.',
        maturityStage: 'Begin fertilizing once the tree shows active growth, usually after first year.',
        notRecommended: false
      },
      {
        name: 'Pest and Disease Management',
        description: 'Tiger Bark Ficus is susceptible to common indoor pests such as scale, spider mites, and mealybugs. Regular inspection and prompt treatment with insecticidal soap or neem oil is recommended. Good air circulation, avoiding overwatering, and maintaining tree vigor help prevent disease.',
        timing: 'Year-round vigilance; particularly important during warm, humid months when pests proliferate.',
        maturityStage: 'Apply pest management as soon as the tree is established and growing indoors or outdoors.',
        notRecommended: false
      },
      {
        name: 'Watering and Humidity Control',
        description: 'Tiger Bark Ficus requires watering when the topsoil is slightly dry to the touch, ensuring thorough saturation without waterlogging. Maintaining moderate to high humidity indoors supports foliage health, but near 100% humidity is needed to encourage aerial roots and nebari development, which is challenging in typical home environments.',
        timing: 'Water as needed throughout the year, more frequently during active growth (spring to autumn). Use humidity trays or misting year-round to maintain adequate humidity.',
        maturityStage: 'Essential care from the seedling stage onward.',
        notRecommended: false
      }
    ],
    images: {
      developmentStages: {
        early: '/bonsai_photos/placeholder/early.jpg',
        middle: '/bonsai_photos/placeholder/middle.jpg',
        mature: '/bonsai_photos/placeholder/mature.jpg'
      },
      seasons: {
        spring: '/bonsai_photos/placeholder/spring.jpg',
        summer: '/bonsai_photos/placeholder/summer.jpg',
        autumn: '/bonsai_photos/placeholder/autumn.jpg',
        winter: '/bonsai_photos/placeholder/winter.jpg'
      },
      styles: {},
      nature: {}
    },
    imageCredits: {}
  },
  {
    id: 'zelkova-serrata',
    scientificName: 'Zelkova serrata',
    commonName: 'Zelkova serrata (Japanese Elm)',
    group: 'Various',
    temperatureMin: -5,
    temperatureMax: 27,
    sunExposure: 'Full sun',
    position: 'Outdoor',
    leafType: 'Deciduous',
    climate: 'Temperate',
    flowering: 'Purple/Blue flowers',
    nativeRegion: 'Japan, Korea, and Taiwan',
    difficultyLevel: 'Intermediate',
    category: 'Intermediate',
    careTips: {
      general: '**Common Names:** Japanese Elm, Japanese Greybark Elm, Zelkova. **Leaf Type:** Deciduous, simple, ovate to oblong-ovate leaves with serrated margins. Leaves turn yellow, orange, red, and purple in aut...',
      soilType: 'Well-draining bonsai soil mix',
      feeding: 'Regular fertilization during growing season',
      watering: 'Keep soil moderately moist, avoid overwatering'
    },
    bonsaiStyles: ['Informal Upright', 'Formal Upright', 'Slanting'],
    techniques: [
      {
        name: 'Pruning (Structural & Maintenance)',
        description: 'Structural pruning in Zelkova serrata focuses on establishing a strong, upright trunk and well-spaced primary branches to support its classic broom (Hokidachi) style. Maintenance pruning involves cutting back new shoots to 2 leaves once they have developed 4-6 leaves to encourage compact growth and finer ramification without causing large wounds, which can scar easily on Zelkova bark.',
        timing: 'Late winter to early spring, before bud break, for structural pruning; maintenance pruning throughout the growing season as shoots extend.',
        maturityStage: 'Begin structural pruning once the tree has developed a stable trunk and primary branches, usually at 2-3 years; maintenance pruning can start earlier on young saplings.',
        notRecommended: false
      },
      {
        name: 'Wiring',
        description: 'Wiring Zelkova serrata is best done during dormancy when branches are flexible but less prone to damage, typically in late winter or early spring before bud swell. Avoid wiring in summer to prevent bark damage and scarring, as the bark is delicate and susceptible to marks. Use gentle wiring techniques and monitor frequently to prevent wire cutting into the bark.',
        timing: 'Late winter to early spring, before buds open; wiring can also be done in autumn after leaf drop but before severe frost.',
        maturityStage: 'Start wiring when the branches are thick enough to hold shape but still flexible, typically from 2-3 years onward.',
        notRecommended: false
      },
      {
        name: 'Repotting',
        description: 'Repotting Zelkova serrata should be done every 2-3 years to refresh soil and maintain root health, using a well-draining soil mix amended with Fuji grit for optimal drainage. Care should be taken to avoid damaging the fine root hairs. Repotting is best performed in early spring before active growth begins to minimize stress.',
        timing: 'Early spring, just before bud break.',
        maturityStage: 'Begin repotting young trees at 2 years; continue regularly throughout maturity.',
        notRecommended: false
      },
      {
        name: 'Root Pruning',
        description: 'Root pruning is essential during repotting to encourage a dense nebari and fine feeder roots. For Zelkova serrata, carefully prune larger roots while preserving fibrous roots, trimming back to healthy tissue to prevent dieback. Root pruning should be moderate to avoid excessive stress on the tree, given its sensitivity to over-pruning.',
        timing: 'Early spring during repotting, before bud break.',
        maturityStage: 'Start root pruning from 2 years onward, especially when establishing nebari.',
        notRecommended: false
      },
      {
        name: 'Defoliation',
        description: 'Defoliation is highly effective on Zelkova serrata to reduce leaf size and increase ramification. Young trees respond well to full defoliation in June, while older specimens should be given partial defoliation to avoid excessive stress. This technique encourages back-budding and refines branch structure but should be done only on healthy, vigorously growing trees.',
        timing: 'Mid to late June during active growth in warm weather.',
        maturityStage: 'Begin partial defoliation on trees aged 3 years and older; full defoliation is best reserved for vigorous young trees around 2-3 years old.',
        notRecommended: false
      },
      {
        name: 'Pinching',
        description: 'Pinching new shoots on Zelkova serrata helps maintain compact growth and refines branch ramification without causing large wounds. Pinch back soft, elongating shoots during the growing season once they have extended beyond 4-6 leaves, promoting lateral bud activation and denser foliage pads.',
        timing: 'Throughout the growing season, especially late spring through summer.',
        maturityStage: 'Begin pinching from the seedling stage onward as shoots develop.',
        notRecommended: false
      },
      {
        name: 'Grafting',
        description: 'Grafting is rarely required for Zelkova serrata bonsai since the species readily produces healthy branches and roots. However, it can be used to replace damaged branches or improve nebari by approach grafting young roots or branches. Due to the species\' vigorous growth, grafting should be done in early spring when sap flow is active.',
        timing: 'Early spring before bud break for best success.',
        maturityStage: 'Use grafting from 2-3 years onward when structural modifications are needed.',
        notRecommended: false
      },
      {
        name: 'Jin (Deadwood Technique)',
        description: 'Creating jin on Zelkova serrata is generally not recommended as the species naturally has smooth bark and does not lend itself well to deadwood features; additionally, the delicate bark may scar excessively. If jin is applied, it should be minimal and done cautiously to avoid weakening the tree.',
        timing: 'If applied, late autumn or winter when the tree is dormant.',
        maturityStage: 'Only on mature trees (5+ years) with a thick trunk.',
        notRecommended: true
      },
      {
        name: 'Shari (Trunk Deadwood Technique)',
        description: 'Shari is not typically suitable for Zelkova serrata because its bark scars easily and the species prefers a natural, clean trunk appearance to highlight its graceful form. Applying shari can cause long-lasting wounds and increase vulnerability to pests and diseases.',
        timing: 'Not recommended.',
        maturityStage: 'Not applicable.',
        notRecommended: true
      },
      {
        name: 'Nebari Development (Surface Roots)',
        description: 'Developing a broad, evenly spread nebari is critical for Zelkova serrata to achieve the classic broom style aesthetic. Techniques include careful root pruning during repotting, root spreading, and occasional approach grafting of roots. Encouraging surface roots improves stability and visual balance.',
        timing: 'Nebari work is best done during repotting in early spring or early autumn when the tree is less stressed.',
        maturityStage: 'Start nebari development early, from 1-2 years onward, continuing throughout the tree\'s life.',
        notRecommended: false
      },
      {
        name: 'Carving',
        description: 'Carving is generally not advised for Zelkova serrata bonsai because the species\' delicate bark and wood heal slowly and are prone to scarring. Minor carving or shaping can be done on dead branches only, but large or deep carving should be avoided to maintain tree health and aesthetics.',
        timing: 'If necessary, during winter dormancy to minimize stress.',
        maturityStage: 'Only on mature specimens with thick branches, typically 5 years or older.',
        notRecommended: true
      },
      {
        name: 'Air Layering',
        description: 'Air layering is an effective propagation method for Zelkova serrata to produce new bonsai specimens or improve nebari by creating new trunks from existing branches. Perform air layering in late spring to early summer when sap flow is strong for successful root development.',
        timing: 'Late spring to early summer (May to July).',
        maturityStage: 'Use on healthy semi-mature to mature trees (3+ years).',
        notRecommended: false
      },
      {
        name: 'Fertilizing',
        description: 'Zelkova serrata benefits from regular feeding during the growing season to support vigorous growth and vibrant autumn leaf coloration. Use a balanced N-P-K fertilizer monthly if solid organic or weekly if liquid from spring through fall, avoiding overfeeding, which can cause excessive, weak growth.',
        timing: 'Spring through fall during active growth (March to October).',
        maturityStage: 'Begin fertilizing as soon as the tree is established and actively growing (1 year onward).',
        notRecommended: false
      },
      {
        name: 'Pest and Disease Management',
        description: 'Monitor Zelkova serrata regularly for common pests such as aphids, leaf miners, and scale insects which can cause leaf damage and weaken the tree. Use appropriate organic or chemical controls promptly and maintain good air circulation to prevent fungal diseases, especially in humid conditions.',
        timing: 'Year-round vigilance, with increased attention in spring and summer.',
        maturityStage: 'All stages require pest and disease management.',
        notRecommended: false
      },
      {
        name: 'Watering and Humidity Control',
        description: 'Maintain consistently moist soil for Zelkova serrata without waterlogging; the rootball should never dry out completely or become saturated. During the hottest weeks, provide semi-shade to reduce leaf burn and moderate humidity with occasional misting if the environment is dry, especially in summer.',
        timing: 'Water regularly during growing season (spring to fall); reduce but maintain moisture in winter.',
        maturityStage: 'All maturity stages require careful watering and humidity management.',
        notRecommended: false
      }
    ],
    images: {
      developmentStages: {
        early: '/bonsai_photos/placeholder/early.jpg',
        middle: '/bonsai_photos/placeholder/middle.jpg',
        mature: '/bonsai_photos/placeholder/mature.jpg'
      },
      seasons: {
        spring: '/bonsai_photos/placeholder/spring.jpg',
        summer: '/bonsai_photos/placeholder/summer.jpg',
        autumn: '/bonsai_photos/placeholder/autumn.jpg',
        winter: '/bonsai_photos/placeholder/winter.jpg'
      },
      styles: {},
      nature: {}
    },
    imageCredits: {}
  },
  {
    id: 'money-tree',
    scientificName: 'Pachira aquatica',
    commonName: 'Money Tree (Pachira aquatica)',
    group: 'Various',
    temperatureMin: 12,
    temperatureMax: 35,
    sunExposure: 'Bright indirect light',
    position: 'Indoor (can be outdoor in summer)',
    leafType: 'Evergreen Broadleaf',
    climate: 'Tropical',
    flowering: 'Yes',
    nativeRegion: 'Central America',
    difficultyLevel: 'Beginner',
    category: 'Beginner',
    careTips: {
      general: 'The Money Tree is a tropical, evergreen broadleaf species. It is often sold with a braided trunk, but experts advise choosing a single trunk or dissolving the braids as they can crush each other as th...',
      soilType: 'Well-draining bonsai soil mix',
      feeding: 'Regular fertilization during growing season',
      watering: 'Keep soil moderately moist, avoid overwatering'
    },
    bonsaiStyles: ['Informal Upright', 'Formal Upright', 'Slanting'],
    techniques: [
      {
        name: 'Pruning (Structural & Maintenance)',
        description: 'Pruning for Money Tree bonsai involves selectively trimming branches to maintain a compact shape and encourage bushier growth. Structural pruning should focus on removing crossing or inward-growing branches, while maintenance pruning involves pinching back new shoots to control leaf size and density. Due to its large leaves and limited ramification, pruning aims primarily at size control rather than intricate branch refinement.',
        timing: 'Late spring to early summer, during active growth period',
        maturityStage: 'Begin after 1 year of growth or once the tree has established a stable trunk',
        notRecommended: false
      },
      {
        name: 'Wiring',
        description: 'Wiring Money Tree bonsai should be done cautiously because its branches are relatively soft and can bruise easily. Wiring is mainly used to adjust general branch direction and enhance the natural informal upright or stump style. Avoid wiring heavily braided trunks as they can damage the bark and underlying tissue when thickening.',
        timing: 'Late spring to summer, when branches are pliable but not overly soft',
        maturityStage: 'When branches are at least a pencil thickness and flexible enough to be shaped without snapping',
        notRecommended: false
      },
      {
        name: 'Repotting',
        description: 'Repotting Money Tree bonsai every 2-3 years is essential to maintain healthy root growth and soil aeration. Use a fast-draining bonsai soil mix with a gravel layer at the base to prevent waterlogging. When repotting, remove no more than one-fourth of the root mass to avoid stress, and perform root pruning concurrently.',
        timing: 'Spring, before the onset of active growth, or mid-summer according to some growers',
        maturityStage: 'Starting when the tree is about 2 years old or when root-bound',
        notRecommended: false
      },
      {
        name: 'Root Pruning',
        description: 'Root pruning involves trimming the outer roots to prevent crowding and encourage finer root development. For Money Tree, root pruning should be gentle and limited to approximately 25% of the root mass during repotting to avoid shock. Careful root pruning supports the swollen trunk base\'s water reservoir function and overall tree vigor.',
        timing: 'During repotting in spring or mid-summer',
        maturityStage: 'Once the tree has developed a substantial root system, typically after 2 years',
        notRecommended: false
      },
      {
        name: 'Defoliation',
        description: 'Complete or partial defoliation is generally not recommended for Money Tree bonsai due to its large leaves and limited ability to produce fine ramification. Removing all leaves stresses the tree and rarely results in meaningful branch refinement. Instead, maintain foliage through regular pinching and selective pruning.',
        timing: 'N/A - not recommended',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Pinching',
        description: 'Pinching new shoots on Money Tree bonsai encourages denser foliage and controls leaf size without the harshness of hard pruning. Pinching is performed by pinching back soft new growth with fingers rather than cutting, which helps maintain a natural appearance and promotes bushier development.',
        timing: 'Throughout the growing season, especially in late spring through summer',
        maturityStage: 'Once the tree starts producing new shoots, usually within the first year',
        notRecommended: false
      },
      {
        name: 'Grafting',
        description: 'Grafting is rarely used or necessary for Money Tree bonsai because the species readily grows from cuttings and has a straightforward growth habit. Due to its tropical nature and soft wood, grafting is generally not practiced in bonsai styling for this species.',
        timing: 'N/A - not commonly applied',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Jin (Deadwood Technique)',
        description: 'Jin is not suitable for Money Tree bonsai as it is a tropical evergreen with soft bark and wood that do not lend themselves to deadwood carving. Attempting jin may cause unnecessary damage and increase susceptibility to disease.',
        timing: 'N/A',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Shari (Trunk Deadwood Technique)',
        description: 'Shari is not recommended for Money Tree bonsai due to its thin, smooth bark and tropical wood characteristics. Creating trunk deadwood would likely harm the tree’s health and contradict its natural aesthetics.',
        timing: 'N/A',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Nebari Development (Surface Roots)',
        description: 'Developing a prominent nebari on Money Tree bonsai is challenging but can be encouraged by careful root pruning and repotting. Exposing and training surface roots during repotting helps create a more balanced and stable appearance, complementing the swollen trunk base.',
        timing: 'During repotting in spring',
        maturityStage: 'From 2 years onward when roots are robust enough to tolerate manipulation',
        notRecommended: false
      },
      {
        name: 'Carving',
        description: 'Carving is not suitable for Money Tree bonsai as its soft wood and thin bark cannot sustain detailed carving work without damage. The species’ aesthetic is better maintained through natural growth and pruning rather than artificial shaping.',
        timing: 'N/A',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Air Layering',
        description: 'Air layering is an effective propagation technique for Money Tree bonsai, allowing new plants to be created from branches or the trunk. Given the species’ tropical nature and vigorous growth, air layering is best performed on healthy, semi-mature wood to encourage root formation.',
        timing: 'Late spring to early summer during active growth',
        maturityStage: 'When the tree is at least 2 years old and well-established',
        notRecommended: false
      },
      {
        name: 'Fertilizing',
        description: 'Regular fertilization is important for Money Tree bonsai to support its rapid growth and large leaves. Use a balanced liquid fertilizer at half strength monthly during the growing season, reducing or stopping feeding in winter. Foliar feeding every other month helps maintain leaf health and vigor.',
        timing: 'Monthly from spring through early autumn; foliar feeding every two months',
        maturityStage: 'Once the tree is actively growing and leaves have developed',
        notRecommended: false
      },
      {
        name: 'Pest and Disease Management',
        description: 'Money Tree bonsai is susceptible to common indoor pests like spider mites, mealybugs, and scale. Regular inspection and maintenance of humidity help prevent infestations. Use insecticidal soap or neem oil as needed and ensure good airflow to reduce fungal issues.',
        timing: 'Year-round vigilance, with increased monitoring during warmer months',
        maturityStage: 'From the seedling stage onward',
        notRecommended: false
      },
      {
        name: 'Watering and Humidity Control',
        description: 'Proper watering for Money Tree bonsai involves thoroughly soaking the soil until drainage occurs, then allowing the topsoil to dry slightly but never completely. Maintaining high humidity through misting and placing the pot on a tray of wet gravel supports foliage health and prevents leaf drop.',
        timing: 'Year-round; adjust watering frequency based on temperature and season',
        maturityStage: 'From the seedling stage onward',
        notRecommended: false
      }
    ],
    images: {
      developmentStages: {
        early: '/bonsai_photos/placeholder/early.jpg',
        middle: '/bonsai_photos/placeholder/middle.jpg',
        mature: '/bonsai_photos/placeholder/mature.jpg'
      },
      seasons: {
        spring: '/bonsai_photos/placeholder/spring.jpg',
        summer: '/bonsai_photos/placeholder/summer.jpg',
        autumn: '/bonsai_photos/placeholder/autumn.jpg',
        winter: '/bonsai_photos/placeholder/winter.jpg'
      },
      styles: {},
      nature: {}
    },
    imageCredits: {}
  },
  {
    id: 'sweet-plum',
    scientificName: 'Sageretia theezans',
    commonName: 'Sweet Plum (Sageretia theezans)',
    group: 'Various',
    temperatureMin: 2,
    temperatureMax: 22,
    sunExposure: 'Full sun',
    position: 'Indoor (can be outdoor in summer)',
    leafType: 'Evergreen Broadleaf',
    climate: 'Temperate',
    flowering: 'Purple/Blue flowers',
    nativeRegion: 'Southern China and Japan',
    difficultyLevel: 'Beginner',
    category: 'Beginner',
    careTips: {
      general: 'The Sweet Plum is a subtropical evergreen shrub. It features attractive, flaky bark that peels to reveal tones of red and tan, resembling a sycamore [1]. Young foliage is often reddish before maturing...',
      soilType: 'Well-draining bonsai soil mix',
      feeding: 'Regular fertilization during growing season',
      watering: 'Keep soil moderately moist, avoid overwatering'
    },
    bonsaiStyles: ['Informal Upright', 'Formal Upright', 'Slanting'],
    techniques: [
      {
        name: 'Pruning (Structural & Maintenance)',
        description: 'Sweet Plum responds well to both structural and maintenance pruning due to its flexible branches and dense foliage. Structural pruning should focus on developing a balanced branch structure while encouraging taper in the trunk, considering its slow trunk thickening. Maintenance pruning involves trimming back new shoots regularly to maintain the desired silhouette and encourage ramification.',
        timing: 'Late spring to early summer, after new growth has hardened off; light maintenance pruning can be done throughout the growing season.',
        maturityStage: 'Begin structural pruning after the tree has established a basic shape, typically from 2-3 years of age; maintenance pruning can start as soon as new shoots appear.',
        notRecommended: false
      },
      {
        name: 'Wiring',
        description: 'Wiring Sweet Plum branches is effective to shape its naturally flexible shoots and define style, such as Informal Upright or Pen-jing. Use soft aluminum or annealed copper wire, applying it carefully to avoid damage to the thin bark and flaky outer layers. Wiring should be closely monitored and removed promptly to prevent wire bite, especially since the species has a flaky bark texture.',
        timing: 'Early spring before the flush of new growth or late autumn when growth slows, avoiding the hot summer months to reduce stress.',
        maturityStage: 'Can begin wiring young trees from 1-2 years old when branches are pliable.',
        notRecommended: false
      },
      {
        name: 'Repotting',
        description: 'Repotting Sweet Plum is essential for maintaining root health and soil aeration, ideally using a well-draining mix with akadama and pumice. Mature specimens should be repotted every 4-5 years in mid-summer to avoid root shock and promote recovery during active growth. Avoid repotting during cold or dormant periods as the species is subtropical and sensitive to stress.',
        timing: 'Mid-summer (June to August), during active growth to facilitate recovery.',
        maturityStage: 'Start repotting young plants from the first or second year; mature bonsai follow the 4-5 year schedule.',
        notRecommended: false
      },
      {
        name: 'Root Pruning',
        description: 'Root pruning is critical for Sweet Plum due to its sensitivity to overwatering and root rot. When repotting, trim back fibrous roots carefully to encourage fine root development and improve drainage. Avoid excessive root pruning to prevent weakening the tree, as its root system supports the slow trunk thickening characteristic of the species.',
        timing: 'Simultaneously with repotting in mid-summer to maximize healing and root regeneration.',
        maturityStage: 'Appropriate from the first repotting onwards, typically after 1-2 years of growth.',
        notRecommended: false
      },
      {
        name: 'Defoliation',
        description: 'Defoliation is generally not recommended for Sweet Plum as its small leaves and slow growth may not tolerate full leaf removal well. Partial leaf thinning can be used sparingly to increase light penetration and air circulation within the canopy but complete defoliation can stress the tree and reduce vigor.',
        timing: 'If applied, partial defoliation should be done in late spring after strong new growth has developed.',
        maturityStage: 'Only on well-established bonsai over 5 years old with vigorous growth.',
        notRecommended: true
      },
      {
        name: 'Pinching',
        description: 'Pinching is an excellent technique for Sweet Plum to control new shoot length and promote dense, fine ramification. Regular pinching of tender shoots during the growing season encourages compact growth and prevents the tree from becoming leggy, particularly important given the species\' slow trunk development.',
        timing: 'Begin in spring as new shoots appear and continue through summer until growth starts to slow.',
        maturityStage: 'Effective from young saplings to mature bonsai throughout the life of the tree.',
        notRecommended: false
      },
      {
        name: 'Grafting',
        description: 'Grafting is rarely practiced with Sweet Plum bonsai due to the species\' slow growth and the availability of quality young stock. However, it can be used to introduce new branches or improve nebari on older trees, though success rates may be modest. Careful alignment and aftercare are essential because of the species\' sensitivity to stress.',
        timing: 'Early spring, just before the active growing season begins to maximize cambial activity.',
        maturityStage: 'Suitable only for mature bonsai with established trunks, typically older than 5 years.',
        notRecommended: false
      },
      {
        name: 'Jin (Deadwood Technique)',
        description: 'Creating jin on Sweet Plum can add dramatic aged character to the bonsai, especially in styles like Pen-jing or Classical Landscape. Because the bark is flaky and thin, jin should be created cautiously to avoid damaging live tissue. Use sharp tools to strip small branches or twigs cleanly, and seal with lime sulfur to protect the deadwood.',
        timing: 'Late autumn or early winter when growth has ceased and the tree is less active.',
        maturityStage: 'Best applied on mature bonsai with well-developed branches and bark character.',
        notRecommended: false
      },
      {
        name: 'Shari (Trunk Deadwood Technique)',
        description: 'Shari can be used to enhance the natural bark texture and highlight the peeling flaky bark of Sweet Plum, emulating the sycamore-like appearance. Care must be taken due to the species\' sensitivity; remove only small sections of bark and treat exposed wood with lime sulfur to prevent rot. Shari adds visual interest and highlights age in older specimens.',
        timing: 'Late autumn to early winter during dormancy to minimize stress.',
        maturityStage: 'Appropriate for mature bonsai with thick enough trunks to tolerate bark removal, generally 5+ years old.',
        notRecommended: false
      },
      {
        name: 'Nebari Development (Surface Roots)',
        description: 'Developing a strong nebari is important for Sweet Plum to visually anchor the tree and support slow trunk thickening. Gentle root pruning combined with spreading surface roots outward during repotting encourages an attractive radial root flare. Field-grown specimens often have good nebari, but young plants require careful training to improve root flare.',
        timing: 'During repotting in mid-summer to stimulate new root growth and allow shaping.',
        maturityStage: 'Start nebari development from early stages, 1-3 years after planting.',
        notRecommended: false
      },
      {
        name: 'Carving',
        description: 'Carving is a delicate technique for Sweet Plum due to the thin bark and slow growth; it can be used sparingly to create subtle trunk texture or simulate age-related scarring. Avoid deep or extensive carving that may expose too much live tissue or weaken the trunk. Use fine carving tools and follow up with sealing treatments to prevent infections.',
        timing: 'Late autumn or winter when the tree is dormant to reduce stress during healing.',
        maturityStage: 'Recommended only for mature bonsai with sturdy trunks, generally older than 5 years.',
        notRecommended: false
      },
      {
        name: 'Air Layering',
        description: 'Air layering is a practical propagation method for Sweet Plum, enabling the creation of new trees from mature branches while preserving desirable characteristics. The technique must be done during active growth in warm months to ensure successful root formation. Use sphagnum moss and plastic wrap to maintain moisture and check regularly for root development.',
        timing: 'Late spring through summer (May to August) during active growth periods.',
        maturityStage: 'Can be performed on semi-mature to mature trees with well-developed branches, at least 3 years old.',
        notRecommended: false
      },
      {
        name: 'Fertilizing',
        description: 'Sweet Plum benefits from regular feeding with a balanced liquid fertilizer diluted to half strength to avoid nutrient burn. Fertilize monthly during the growing season (spring to early autumn) to support steady, healthy growth and maintain leaf color. Avoid fertilizing in winter when the tree\'s metabolic activity slows.',
        timing: 'From spring (March) through early autumn (September), once per month.',
        maturityStage: 'Suitable for all maturity stages once the tree is actively growing.',
        notRecommended: false
      },
      {
        name: 'Pest and Disease Management',
        description: 'Sweet Plum is susceptible to common pests like aphids, scale, and spider mites, especially under indoor or low humidity conditions. Regular inspection and prompt treatment with insecticidal soap or horticultural oil are recommended. Maintaining high humidity and proper watering practices reduces vulnerability to fungal diseases.',
        timing: 'Year-round monitoring, with increased vigilance in spring and summer when pests are most active.',
        maturityStage: 'Important for all maturity stages to ensure long-term health.',
        notRecommended: false
      },
      {
        name: 'Watering and Humidity Control',
        description: 'Consistent watering is critical for Sweet Plum as it is highly sensitive to drought stress; the soil should be kept barely damp but never soggy. High humidity is also essential, particularly when grown indoors, which can be maintained by placing the pot on a tray with gravel and water. Avoid letting the topsoil dry out completely, as this is the leading cause of decline in this species.',
        timing: 'Daily to every other day during active growth; adjust frequency based on climate and season.',
        maturityStage: 'Vital for all stages of growth, from young saplings to mature bonsai.',
        notRecommended: false
      }
    ],
    images: {
      developmentStages: {
        early: '/bonsai_photos/placeholder/early.jpg',
        middle: '/bonsai_photos/placeholder/middle.jpg',
        mature: '/bonsai_photos/placeholder/mature.jpg'
      },
      seasons: {
        spring: '/bonsai_photos/placeholder/spring.jpg',
        summer: '/bonsai_photos/placeholder/summer.jpg',
        autumn: '/bonsai_photos/placeholder/autumn.jpg',
        winter: '/bonsai_photos/placeholder/winter.jpg'
      },
      styles: {},
      nature: {}
    },
    imageCredits: {}
  },
  {
    id: 'brush-cherry',
    scientificName: 'Syzygium paniculatum',
    commonName: 'Brush Cherry (Syzygium paniculatum)',
    group: 'Various',
    temperatureMin: 7,
    temperatureMax: 20,
    sunExposure: 'Full sun',
    position: 'Indoor (can be outdoor in summer)',
    leafType: 'Evergreen Broadleaf',
    climate: 'Subtropical',
    flowering: 'White flowers',
    nativeRegion: 'Australia and New Zealand',
    difficultyLevel: 'Intermediate',
    category: 'Intermediate',
    careTips: {
      general: '**Leaf Type & Characteristics:** Evergreen tree or shrub with dark green, glossy, lance-shaped leaves [1]. The new growth often emerges with an attractive reddish tint [2]. It produces small, fluffy w...',
      soilType: 'Well-draining bonsai soil mix',
      feeding: 'Regular fertilization during growing season',
      watering: 'Keep soil moderately moist, avoid overwatering'
    },
    bonsaiStyles: ['Informal Upright', 'Formal Upright', 'Slanting'],
    techniques: [
      {
        name: 'Pruning (Structural & Maintenance)',
        description: 'Brush Cherry is a vigorous grower requiring frequent pruning to maintain bonsai shape and encourage ramification. Structural pruning should be done carefully to avoid large cuts, as the species heals poorly; instead, focus on shortening new shoots with 6-8 pairs of leaves back to 1-2 pairs to maintain compact growth and preserve the tree’s attractive reddish new growth. Maintenance pruning also involves removing flowers to prevent energy diversion and maintain aesthetic form.',
        timing: 'Early spring before active growth starts and throughout the growing season (spring to autumn) as needed for maintenance.',
        maturityStage: 'Begin pruning once the tree has established a basic structure and is actively growing, typically from juvenile stage onward (1-2 years).',
        notRecommended: false
      },
      {
        name: 'Wiring',
        description: 'Wiring Brush Cherry should be done during active growth periods when branches are more flexible, but wires must be applied carefully and removed promptly to prevent scarring, as this species has delicate bark that scars easily. Due to its vigorous growth, wiring is often secondary to pruning for shaping, with lighter wiring preferred to avoid damage.',
        timing: 'Late spring to early autumn during active growth; avoid wiring in winter or dormant periods.',
        maturityStage: 'After the tree has developed sufficient branch structure, usually after 2 years of growth.',
        notRecommended: false
      },
      {
        name: 'Repotting',
        description: 'Brush Cherry benefits from repotting every two years in early to mid-spring before new growth begins, which supports healthy root development and vigor. Use a slightly acidic, well-draining bonsai soil mix to accommodate the species’ preference and avoid root rot.',
        timing: 'Early to mid-spring (before active growth, typically March to April).',
        maturityStage: 'From juvenile stage when the tree is actively growing and roots have filled the container, generally after the first year.',
        notRecommended: false
      },
      {
        name: 'Root Pruning',
        description: 'This species tolerates vigorous root pruning well and it is essential during repotting to maintain a compact root system and encourage fine roots. Root pruning also helps prevent waterlogging, which Brush Cherry is sensitive to, ensuring the soil remains well-drained and slightly acidic.',
        timing: 'Simultaneously with repotting, in early to mid-spring before the growing season.',
        maturityStage: 'Once the tree has established a root system dense enough to require maintenance, typically after 1-2 years in bonsai culture.',
        notRecommended: false
      },
      {
        name: 'Defoliation',
        description: 'Partial defoliation can be used cautiously on Brush Cherry to encourage back-budding and reduce leaf size, but complete defoliation is not recommended due to the species’ sensitivity and risk of stress or leaf drop. Defoliation should be moderate and combined with increased humidity and careful watering.',
        timing: 'Late spring to early summer during strong active growth and warm temperatures.',
        maturityStage: 'Apply only on mature trees with established ramification, generally 3+ years old.',
        notRecommended: false
      },
      {
        name: 'Pinching',
        description: 'Pinching new growth tips is an effective technique on Brush Cherry to control vigor and shape by preventing overly long shoots without causing large wounds. It helps maintain the compactness characteristic of good bonsai while preserving the attractive reddish new leaf color.',
        timing: 'Throughout the growing season, especially in spring and summer when new shoots emerge.',
        maturityStage: 'From juvenile stages onward as soon as new shoots appear.',
        notRecommended: false
      },
      {
        name: 'Grafting',
        description: 'Grafting is possible on Brush Cherry but generally not necessary due to its vigorous natural growth and ease of propagation; it may be used to repair damaged branches or improve branch placement but is not commonly applied in bonsai practice for this species.',
        timing: 'Early spring when sap flow begins and tissue is actively growing.',
        maturityStage: 'Only on well-established trees with sufficient vigor, generally 3+ years old.',
        notRecommended: false
      },
      {
        name: 'Jin (Deadwood Technique)',
        description: 'Creating jin on Brush Cherry is possible but should be done sparingly and carefully because the species’ wood is relatively soft and wounds heal poorly. Jin can be used to add aged character to branches but should only be applied on mature, healthy trees with good vigor to recover successfully.',
        timing: 'Late summer to early autumn when growth slows and the tree is less stressed.',
        maturityStage: 'Only on mature bonsai specimens, typically older than 5 years.',
        notRecommended: false
      },
      {
        name: 'Shari (Trunk Deadwood Technique)',
        description: 'Shari can be applied cautiously to Brush Cherry to create visual interest but large exposed deadwood areas should be avoided due to poor healing and risk of decay in this species. Small shari areas can be created on older specimens with careful maintenance and protection from moisture.',
        timing: 'Late summer during dry periods to reduce risk of fungal infection.',
        maturityStage: 'Mature, well-established trees older than 5 years with thick trunks.',
        notRecommended: false
      },
      {
        name: 'Nebari Development (Surface Roots)',
        description: 'Developing a strong nebari is important for Brush Cherry bonsai to provide stability and aesthetic appeal. Surface roots can be encouraged through root pruning during repotting and careful positioning of roots when planting. This species responds well to nebari work due to its vigorous root growth.',
        timing: 'During repotting in early spring and over successive years as roots thicken.',
        maturityStage: 'Begin nebari development from juvenile stage onward (1-2 years).',
        notRecommended: false
      },
      {
        name: 'Carving',
        description: 'Carving is generally not recommended for Brush Cherry due to its soft wood and poor healing capacity, which increases the risk of decay and aesthetic damage. Minor bark removal for shari or jin should be done with utmost care and limited scope.',
        timing: 'N/A due to unsuitability.',
        maturityStage: 'N/A.',
        notRecommended: true
      },
      {
        name: 'Air Layering',
        description: 'Air layering is an effective propagation technique for Brush Cherry to produce new bonsai specimens or to rescue branches for styling. The species roots readily from air layers due to its vigorous growth and semi-tropical nature.',
        timing: 'Late spring to early summer when growth is active and warm.',
        maturityStage: 'Any healthy branch on a mature tree, usually after 2+ years of growth.',
        notRecommended: false
      },
      {
        name: 'Fertilizing',
        description: 'Brush Cherry requires regular fertilizing every two weeks during the active growing season and every 4-5 weeks in winter, preferably with an acid-promoting fertilizer to support its preference for slightly acidic soil. Avoid fertilizing weak or newly repotted trees to prevent stress.',
        timing: 'Spring through autumn for heavy feeding; reduce frequency in winter.',
        maturityStage: 'From juvenile stage once the tree is actively growing.',
        notRecommended: false
      },
      {
        name: 'Pest and Disease Management',
        description: 'Due to its semi-tropical nature and evergreen foliage, Brush Cherry can be susceptible to fungal diseases in overly wet conditions and pests like aphids or scale. Regular inspection, good airflow, avoiding waterlogging, and appropriate treatments are essential for healthy bonsai.',
        timing: 'Year-round monitoring, with increased vigilance in warm, humid months.',
        maturityStage: 'From the earliest stages of bonsai cultivation.',
        notRecommended: false
      },
      {
        name: 'Watering and Humidity Control',
        description: 'Consistent watering to keep soil moist but not waterlogged is crucial for Brush Cherry, as it is sensitive to drying out and to salt or hard water damage. Using distilled or rainwater and providing humidity by misting helps maintain foliage health, especially in drier indoor or greenhouse environments.',
        timing: 'Year-round, with increased watering in hot summer months and reduced but never completely dry soil in winter.',
        maturityStage: 'From seedling stage onward.',
        notRecommended: false
      }
    ],
    images: {
      developmentStages: {
        early: '/bonsai_photos/placeholder/early.jpg',
        middle: '/bonsai_photos/placeholder/middle.jpg',
        mature: '/bonsai_photos/placeholder/mature.jpg'
      },
      seasons: {
        spring: '/bonsai_photos/placeholder/spring.jpg',
        summer: '/bonsai_photos/placeholder/summer.jpg',
        autumn: '/bonsai_photos/placeholder/autumn.jpg',
        winter: '/bonsai_photos/placeholder/winter.jpg'
      },
      styles: {},
      nature: {}
    },
    imageCredits: {}
  },
  {
    id: 'natal-plum',
    scientificName: 'Carissa macrocarpa',
    commonName: 'Natal Plum (Carissa macrocarpa)',
    group: 'Various',
    temperatureMin: 10,
    temperatureMax: 38,
    sunExposure: 'Full sun',
    position: 'Indoor (can be outdoor in summer)',
    leafType: 'Evergreen Broadleaf',
    climate: 'Temperate',
    flowering: 'White flowers',
    nativeRegion: 'Southern Africa (coastal regions)',
    difficultyLevel: 'Beginner',
    category: 'Beginner',
    careTips: {
      general: '**Foliage/Flowers/Fruit:** Evergreen shrub with dark green, leathery leaves. Produces fragrant white flowers followed by small, round, edible fruits (Natal Plums) that turn red when ripe. The fruits a...',
      soilType: 'Well-draining bonsai soil mix',
      feeding: 'Regular fertilization during growing season',
      watering: 'Keep soil moderately moist, avoid overwatering'
    },
    bonsaiStyles: ['Informal Upright', 'Formal Upright', 'Slanting'],
    techniques: [
      {
        name: 'Pruning (Structural & Maintenance)',
        description: 'Natal Plum responds exceptionally well to both structural and maintenance pruning due to its resilient nature and dense foliage. Structural pruning is used to define the overall shape and branch hierarchy, while maintenance pruning encourages bushier growth and refines the silhouette by selectively removing new shoots and overly vigorous branches.',
        timing: 'Best performed in late winter to early spring before active growth begins, with light maintenance pruning possible throughout the growing season (spring through early autumn).',
        maturityStage: 'Begin pruning once the plant has established a strong trunk and branch framework, typically after 1-2 years of growth.',
        notRecommended: false
      },
      {
        name: 'Wiring',
        description: 'Wiring Natal Plum is effective for shaping its flexible branches, but the species\' vigorous growth can cause wires to bite in quickly, so frequent monitoring is required. Use aluminum or annealed copper wire and apply it to semi-hardwood branches to create desired curves and branch placements.',
        timing: 'Wire in early spring when new growth is semi-hard but before peak growth accelerates, with careful removal or adjustment every 4-6 weeks to prevent scarring.',
        maturityStage: 'Start wiring once the branches are sufficiently thick to hold shape but still pliable, generally after 1 year of growth.',
        notRecommended: false
      },
      {
        name: 'Repotting',
        description: 'Natal Plum benefits from repotting every 1-3 years to refresh soil and encourage healthy root development, using a slightly acidic, well-draining bonsai soil mix. The root ball should be gently loosened, and no more than one-fourth of the root mass should be removed to avoid stressing the plant.',
        timing: 'Repot in early spring, just before the onset of active growth, when soil temperatures begin to rise and the plant shows signs of needing more space.',
        maturityStage: 'Begin repotting once the plant has a developed root system, typically after the first year of growth.',
        notRecommended: false
      },
      {
        name: 'Root Pruning',
        description: 'Root pruning is essential for maintaining the compact root system of Natal Plum and should be done carefully to avoid excessive stress. Trim back no more than 25% of the roots during repotting to maintain vigor and encourage fine feeder root growth.',
        timing: 'Perform root pruning simultaneously with repotting in early spring, before active sap flow starts.',
        maturityStage: 'Begin root pruning once the tree is established, usually after 1 year or when repotting is needed.',
        notRecommended: false
      },
      {
        name: 'Defoliation',
        description: 'Defoliation is generally not recommended for Natal Plum as it can cause undue stress and the species does not naturally respond with significant back-budding or leaf size reduction. The dense, leathery evergreen leaves are best maintained through regular pruning rather than leaf removal.',
        timing: 'N/A',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Pinching',
        description: 'Pinching new growth tips on Natal Plum is an effective way to promote denser foliage and refine branch structure without heavy pruning. This technique encourages lateral branching and maintains a compact canopy.',
        timing: 'Pinch actively growing shoots during the spring and summer growing seasons, removing soft tips every 2-3 weeks as needed.',
        maturityStage: 'Start pinching once the plant begins vigorous seasonal growth, typically after the first growing season.',
        notRecommended: false
      },
      {
        name: 'Grafting',
        description: 'Grafting is rarely necessary for Natal Plum bonsai as the species readily produces strong shoots and branches from cuttings and is resilient to pruning. However, grafting can be used to introduce specific cultivar traits or repair damaged branches.',
        timing: 'If grafting is pursued, early spring before active growth starts is optimal for successful union and healing.',
        maturityStage: 'Grafting can be performed on young to semi-mature material, once branches are sufficiently thick to support the graft.',
        notRecommended: false
      },
      {
        name: 'Jin (Deadwood Technique)',
        description: 'Creating jin on Natal Plum is possible to add character and aged appearance, but should be used sparingly due to its naturally smooth bark and evergreen nature. Deadwood features should be limited to small branches rather than the main trunk for a natural look.',
        timing: 'Best applied in late winter or early spring when the plant is dormant or just starting growth, ensuring minimal stress.',
        maturityStage: 'Suitable for mature specimens with well-developed branches, generally 3+ years old.',
        notRecommended: false
      },
      {
        name: 'Shari (Trunk Deadwood Technique)',
        description: 'Shari can be applied to Natal Plum to mimic natural bark loss, but due to the species’ smooth bark and evergreen habit, it is less common and must be done with care to avoid infection or excessive stress.',
        timing: 'Apply during the dormant period or early spring, and treat exposed areas with sealing compounds to prevent rot.',
        maturityStage: 'Recommended only on mature trees with thick trunks, generally after 3+ years of development.',
        notRecommended: false
      },
      {
        name: 'Nebari Development (Surface Roots)',
        description: 'Natal Plum naturally develops a decent nebari, but encouraging surface roots during early development enhances stability and visual appeal. During repotting, spread roots evenly and prune to promote radial root growth near the soil surface.',
        timing: 'Focus on nebari development during repotting in early spring when roots are actively growing.',
        maturityStage: 'Begin nebari training once the plant is young but has established roots, usually within the first 1-2 years.',
        notRecommended: false
      },
      {
        name: 'Carving',
        description: 'Carving techniques can be applied to Natal Plum to accentuate deadwood features or create artistic trunk textures, but must be approached cautiously due to the species\' smooth bark and susceptibility to fungal infections if wounds are not properly sealed.',
        timing: 'Perform carving during the dormant season and immediately apply wound sealant to prevent disease.',
        maturityStage: 'Appropriate only for mature specimens with thick, healthy wood, typically after 3+ years.',
        notRecommended: false
      },
      {
        name: 'Air Layering',
        description: 'Air layering is an effective propagation method for Natal Plum, allowing the creation of new plants with established root systems. This technique is useful for cloning desirable bonsai specimens or producing material with a thicker trunk.',
        timing: 'Best conducted in spring or early summer when sap flow is active, promoting root initiation.',
        maturityStage: 'Can be performed on semi-mature branches, usually after 1-2 years of growth.',
        notRecommended: false
      },
      {
        name: 'Fertilizing',
        description: 'Natal Plum thrives with regular feeding during the growing season using a balanced, water-soluble or acid-based fertilizer such as Miracid to support its preference for slightly acidic soil. Fertilize every two weeks from spring through early autumn, reducing or stopping in winter dormancy.',
        timing: 'Apply fertilizer from early spring to early autumn, coinciding with active growth periods.',
        maturityStage: 'Start fertilizing once the plant has established and begun active growth, typically after the first growing season.',
        notRecommended: false
      },
      {
        name: 'Pest and Disease Management',
        description: 'Although generally resilient, Natal Plum may be susceptible to fungal infections if overwatered, as well as spider mites and scale insects. Regular inspection, proper watering practices, and treatment with appropriate fungicides or insecticides when necessary help maintain plant health.',
        timing: 'Inspect regularly throughout the growing season, especially in warm, humid conditions; treat pests and diseases promptly upon detection.',
        maturityStage: 'Pest and disease management is important at all stages of growth.',
        notRecommended: false
      },
      {
        name: 'Watering and Humidity Control',
        description: 'Natal Plum requires moderate, consistent watering to keep soil moist but not soggy; overwatering can lead to root rot and fungal problems. It prefers outdoor placement with good air circulation and should be protected from frost by moving indoors or into a sheltered spot when temperatures approach 10°C (50°F).',
        timing: 'Water when the topsoil begins to dry out, increasing frequency during hot, dry weather and reducing in cooler months.',
        maturityStage: 'Proper watering is critical from seedling stage onward.',
        notRecommended: false
      }
    ],
    images: {
      developmentStages: {
        early: '/bonsai_photos/placeholder/early.jpg',
        middle: '/bonsai_photos/placeholder/middle.jpg',
        mature: '/bonsai_photos/placeholder/mature.jpg'
      },
      seasons: {
        spring: '/bonsai_photos/placeholder/spring.jpg',
        summer: '/bonsai_photos/placeholder/summer.jpg',
        autumn: '/bonsai_photos/placeholder/autumn.jpg',
        winter: '/bonsai_photos/placeholder/winter.jpg'
      },
      styles: {},
      nature: {}
    },
    imageCredits: {}
  },
  {
    id: 'cherry-blossom',
    scientificName: 'Prunus serrulata [2]',
    commonName: 'Cherry Blossom (Prunus serrulata)',
    group: 'Various',
    temperatureMin: -9,
    temperatureMax: 24,
    sunExposure: 'Full sun',
    position: 'Outdoor',
    leafType: 'Evergreen Broadleaf',
    climate: 'Temperate',
    flowering: 'White flowers',
    nativeRegion: 'China, Korea, and Japan [2]',
    difficultyLevel: 'Expert',
    category: 'Advanced',
    careTips: {
      general: '* **Dormancy and Temperature:** Requires a cool winter dormancy period of at least three months [1]. It is frost-hardy but must be protected from extremely low temperatures, especially in small bons...',
      soilType: 'Well-draining bonsai soil mix',
      feeding: 'Regular fertilization during growing season',
      watering: 'Keep soil moderately moist, avoid overwatering'
    },
    bonsaiStyles: ['Informal Upright', 'Formal Upright', 'Slanting'],
    techniques: [
      {
        name: 'Pruning (Structural & Maintenance)',
        description: 'Structural pruning in Prunus serrulata is best performed during late winter or early spring dormancy to avoid sap bleeding and stress. Maintenance pruning throughout the growing season helps manage branch density and encourages flowering by removing overly vigorous shoots, but care must be taken to avoid pruning during flowering or late fall to prevent dieback.',
        timing: 'Late winter to early spring for structural pruning; maintenance pruning in late spring to early summer',
        maturityStage: 'Begin structural pruning once the tree has established a stable branch framework, typically after 3-4 years',
        notRecommended: false
      },
      {
        name: 'Wiring',
        description: 'Wiring Prunus serrulata requires gentle handling due to its brittle mature branches that can snap easily. Wiring is best done during early spring before bud break or in late autumn when the wood is less flexible, ensuring minimal damage while shaping formal upright or informal styles.',
        timing: 'Early spring before bud break or late autumn after leaf drop',
        maturityStage: 'Start wiring when branches have reached sufficient thickness to hold shape, usually after 2-3 years',
        notRecommended: false
      },
      {
        name: 'Repotting',
        description: 'Repotting Cherry Blossom bonsai is essential every 2-3 years during the winter dormancy period to refresh soil and prevent root-bound conditions. This process minimizes stress by avoiding active growth periods and ensures the tree’s roots have adequate space and aeration in well-draining soil mixes.',
        timing: 'Winter dormancy, typically December to February',
        maturityStage: 'Begin repotting young specimens from the first or second year of cultivation',
        notRecommended: false
      },
      {
        name: 'Root Pruning',
        description: 'Root pruning should accompany repotting of Prunus serrulata during winter dormancy to maintain a compact root system and promote fine root growth. Care must be taken to avoid excessive root removal as this species can be sensitive to root shock.',
        timing: 'During winter dormancy, concurrent with repotting',
        maturityStage: 'Start root pruning when the tree is first repotted, generally after 1-2 years',
        notRecommended: false
      },
      {
        name: 'Defoliation',
        description: 'Defoliation is generally not recommended for Cherry Blossom bonsai due to its delicate leaf structure and tendency to stress when foliage is removed. The species\' flowering is best promoted through careful pruning and feeding, rather than leaf removal.',
        timing: 'Not recommended',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Pinching',
        description: 'Pinching new shoots in the growing season helps control vigor and encourages ramification in Prunus serrulata. This technique should be done carefully to avoid damaging flower buds, which form on previous year\'s growth, preserving spring blossom display.',
        timing: 'Late spring to early summer, after flowering and when new shoots begin elongating',
        maturityStage: 'Start pinching once the tree has developed a basic branch structure, typically after 2-3 years',
        notRecommended: false
      },
      {
        name: 'Grafting',
        description: 'Grafting is utilized in Cherry Blossom bonsai to repair damage or introduce desired flowering cultivars onto hardy rootstock. It requires precise timing and technique to ensure successful union and is mostly done during late winter dormancy.',
        timing: 'Late winter during dormancy, before sap flow starts',
        maturityStage: 'Suitable for mature specimens with established rootstock, usually after 3-4 years',
        notRecommended: false
      },
      {
        name: 'Jin (Deadwood Technique)',
        description: 'Creating jin on Prunus serrulata should be done sparingly and with caution due to its relatively thin bark and susceptibility to disease. When applied, it enhances aged appearance and is best executed on older branches during dormant seasons, followed by appropriate sealing to prevent decay.',
        timing: 'Winter dormancy period',
        maturityStage: 'Only on mature trees with well-developed wood, typically over 7 years',
        notRecommended: false
      },
      {
        name: 'Shari (Trunk Deadwood Technique)',
        description: 'Shari can be applied to older Cherry Blossom bonsai trunks to accentuate the gnarly, aged look characteristic of mature specimens. This technique is best reserved for advanced practitioners and is performed during dormancy with careful wood preservation to avoid fungal infections.',
        timing: 'Winter dormancy',
        maturityStage: 'Mature trees with thick trunks, usually over 10 years old',
        notRecommended: false
      },
      {
        name: 'Nebari Development (Surface Roots)',
        description: 'Developing a strong nebari is critical in Prunus serrulata to provide visual stability and enhance aesthetics. Techniques such as root pruning, careful soil placement during repotting, and selective root removal encourage surface root flare and radial root distribution.',
        timing: 'During repotting in winter dormancy',
        maturityStage: 'Begin nebari development early, from the first repotting (1-2 years)',
        notRecommended: false
      },
      {
        name: 'Carving',
        description: 'Carving techniques should be applied cautiously on Cherry Blossom bonsai due to its relatively soft wood and vulnerability to disease. When done, it is best reserved for accentuating deadwood features and performed during dormancy with subsequent wound sealing and monitoring.',
        timing: 'Winter dormancy',
        maturityStage: 'Only on mature specimens with durable wood, generally after 7 years',
        notRecommended: false
      },
      {
        name: 'Air Layering',
        description: 'Air layering in Prunus serrulata is an effective propagation technique to create new bonsai specimens or repair damaged branches. It should be performed in early spring when sap flow increases, ensuring good callus formation and root development.',
        timing: 'Early spring, just before active growth begins',
        maturityStage: 'Applicable to semi-mature or mature trees, 3+ years old',
        notRecommended: false
      },
      {
        name: 'Fertilizing',
        description: 'Monthly application of a balanced N-P-K fertilizer during the growing season supports vigorous growth and prolific flowering in Cherry Blossom bonsai. Avoid fertilizing immediately after repotting to prevent root burn and stress.',
        timing: 'Monthly from early spring through late summer; avoid immediately post-repot',
        maturityStage: 'Begin fertilization once the tree is established, around 1 year old',
        notRecommended: false
      },
      {
        name: 'Pest and Disease Management',
        description: 'Prunus serrulata is susceptible to aphids, caterpillars, blossom wilt, and peach leaf curl, requiring vigilant monitoring and timely interventions using horticultural oils, insecticidal soaps, and fungicides. Integrated pest management and good sanitation practices are essential to maintain tree health.',
        timing: 'Continuous monitoring during growing season; apply treatments as soon as symptoms or pests appear',
        maturityStage: 'All stages require pest and disease management',
        notRecommended: false
      },
      {
        name: 'Watering and Humidity Control',
        description: 'Consistent watering is critical for Cherry Blossom bonsai; soil should remain moist but never waterlogged, using distilled or soft water to avoid mineral buildup. During hot summer months, partial shade and increased humidity can prevent leaf scorching and dehydration.',
        timing: 'Year-round, with increased attention during hot summer days',
        maturityStage: 'All maturity stages require careful watering and humidity management',
        notRecommended: false
      }
    ],
    images: {
      developmentStages: {
        early: '/bonsai_photos/placeholder/early.jpg',
        middle: '/bonsai_photos/placeholder/middle.jpg',
        mature: '/bonsai_photos/placeholder/mature.jpg'
      },
      seasons: {
        spring: '/bonsai_photos/placeholder/spring.jpg',
        summer: '/bonsai_photos/placeholder/summer.jpg',
        autumn: '/bonsai_photos/placeholder/autumn.jpg',
        winter: '/bonsai_photos/placeholder/winter.jpg'
      },
      styles: {},
      nature: {}
    },
    imageCredits: {}
  },
  {
    id: 'wisteria-floribunda',
    scientificName: 'Wisteria floribunda',
    commonName: 'Wisteria floribunda (Japanese Wisteria)',
    group: 'Various',
    temperatureMin: -20,
    temperatureMax: -25,
    sunExposure: 'Full sun',
    position: 'Outdoor',
    leafType: 'Deciduous',
    climate: 'Temperate',
    flowering: 'Purple/Blue flowers',
    nativeRegion: 'Japan (also Wisteria sinensis from China)',
    difficultyLevel: 'Intermediate',
    category: 'Intermediate',
    careTips: {
      general: 'Deciduous vine with spectacular long drooping clusters of fragrant bluish-purple flowers in spring. Japanese Wisteria (W. floribunda) produces the longest flower clusters. Requires full sun for flower...',
      soilType: 'well-draining bonsai soil mix. feeding: high nitrogen in spring for growth, switch to low nitrogen/high phosphorus before flowering to promote blooms.',
      feeding: 'high nitrogen in spring for growth, switch to low nitrogen/high phosphorus before flowering to promote blooms. fertilize weekly during growing season.',
      watering: 'regular watering during growing season, keep slightly moist but not waterlogged. soil: well-draining bonsai soil mix. feeding: high nitrogen in spring'
    },
    bonsaiStyles: ['Informal Upright', 'Formal Upright', 'Slanting'],
    techniques: [
      {
        name: 'Pruning (Structural & Maintenance)',
        description: 'For Wisteria floribunda, structural pruning should be done in late winter or early spring before sap flow begins to shape the main framework, encouraging strong branch placement to support heavy flower clusters. Maintenance pruning is critical after flowering to remove excessive growth and promote flowering spurs, as Wisteria blooms on old wood and requires careful balancing of vegetative growth and flower bud development.',
        timing: 'Structural pruning: late winter (February-March); Maintenance pruning: immediately after flowering in late spring (May-June).',
        maturityStage: 'Begin structural pruning once the plant has developed a strong primary branch framework, typically after 3-4 years; maintenance pruning can start annually thereafter.',
        notRecommended: false
      },
      {
        name: 'Wiring',
        description: 'Wiring is used cautiously on Wisteria floribunda due to its vigorous growth and flexible, vine-like branches. Wiring is best applied to younger, semi-hardwood shoots to train branch direction, but care must be taken to avoid bark damage since the bark is thin and sensitive. Frequent monitoring and timely removal of wires are essential to prevent scarring.',
        timing: 'Early spring (March-April) when branches are semi-hardwood and flexible.',
        maturityStage: 'Start wiring when branches have sufficient lignification, generally from year 2 onwards.',
        notRecommended: false
      },
      {
        name: 'Repotting',
        description: 'Wisteria floribunda benefits from repotting every 2-3 years to refresh soil and accommodate vigorous root growth, which supports healthy flowering. Repotting should be done in early spring before bud break to minimize stress, using a well-draining mix to prevent root rot.',
        timing: 'Early spring (February-March) before sap flow begins.',
        maturityStage: 'Begin repotting from year 2 or when roots fill the container.',
        notRecommended: false
      },
      {
        name: 'Root Pruning',
        description: 'Root pruning during repotting is essential for Wisteria floribunda to control its vigorous root system and encourage fine feeder roots for nutrient uptake. Careful trimming of large roots with retention of fibrous roots promotes bonsai health and flowering potential.',
        timing: 'During repotting in early spring (February-March).',
        maturityStage: 'Start root pruning at first repotting (around year 2).',
        notRecommended: false
      },
      {
        name: 'Defoliation',
        description: 'Defoliation is generally not recommended for Wisteria floribunda as it is a deciduous vine that relies on its compound leaves for energy production during the growing season. Removing leaves may weaken the plant and reduce flowering potential, especially since flower buds form on old wood.',
        timing: 'N/A',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Pinching',
        description: 'Pinching new growth tips during the growing season helps control vigor in Wisteria floribunda and encourages denser branching and more flowering spurs. Pinching is especially effective during early summer to manage rampant growth and support flower production.',
        timing: 'Late spring to early summer (May-July) during active growth.',
        maturityStage: 'From year 2 onward when the plant exhibits vigorous shoot growth.',
        notRecommended: false
      },
      {
        name: 'Grafting',
        description: 'Grafting is used to propagate preferred cultivars or introduce flower color variations in Wisteria floribunda. Approach grafting onto established rootstocks is typically done in early spring to ensure cambial activity and good union formation.',
        timing: 'Early spring (February-March) before bud break.',
        maturityStage: 'Performed on young rootstocks, typically in nursery or early bonsai stages.',
        notRecommended: false
      },
      {
        name: 'Jin (Deadwood Technique)',
        description: 'Jin can be applied sparingly on Wisteria floribunda to create visual interest on older branches but should be used carefully since Wisteria wood is relatively soft and prone to decay. Limited deadwood work on secondary branches can mimic natural vine aging without compromising tree health.',
        timing: 'Late winter or early spring during dormancy.',
        maturityStage: 'Only mature trees with well-developed branches (5+ years).',
        notRecommended: false
      },
      {
        name: 'Shari (Trunk Deadwood Technique)',
        description: 'Shari is rarely used on Wisteria floribunda because the vine’s relatively thin trunk and softness make extensive trunk deadwood prone to rot and structural weakness. Instead, natural bark texture and lenticel patterns are usually emphasized.',
        timing: 'N/A',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Nebari Development (Surface Roots)',
        description: 'Developing a strong nebari in Wisteria floribunda is challenging due to its vine nature but can be encouraged by root pruning and training young roots to spread evenly. A balanced nebari helps stabilize the bonsai and supports vigorous growth and flowering.',
        timing: 'During repotting and root pruning in early spring (February-March).',
        maturityStage: 'Start from young plants (year 1-2) and maintain throughout development.',
        notRecommended: false
      },
      {
        name: 'Carving',
        description: 'Carving is generally not recommended on Wisteria floribunda due to its soft and fast-growing wood, which is prone to decay and damage. Preserving live tissue and promoting healthy bark is preferred over aggressive carving techniques.',
        timing: 'N/A',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Air Layering',
        description: 'Air layering is an effective propagation method for Wisteria floribunda, allowing the creation of new bonsai specimens with mature branches and flowers. It should be performed during active growth to maximize root development on the layered branch.',
        timing: 'Late spring to early summer (May-July) when sap flow is strong.',
        maturityStage: 'Can be done on semi-mature branches from year 2 onward.',
        notRecommended: false
      },
      {
        name: 'Fertilizing',
        description: 'Fertilizing Wisteria floribunda requires a seasonal approach: high nitrogen fertilizers in early spring promote vigorous vegetative growth, then switching to low nitrogen and high phosphorus fertilizers before flowering encourages abundant blooms. Weekly applications during the growing season ensure continuous nutrient availability.',
        timing: 'High nitrogen: early spring (March-April); low nitrogen/high phosphorus: mid to late spring (April-May) through flowering; continue weekly until late summer.',
        maturityStage: 'Begin from young bonsai stage (year 1) and continue annually.',
        notRecommended: false
      },
      {
        name: 'Pest and Disease Management',
        description: 'Wisteria floribunda is susceptible to aphids, scale insects, and fungal diseases like powdery mildew, especially in humid conditions. Regular inspection, prompt treatment with insecticidal soap or fungicides, and maintaining good air circulation are essential to bonsai health.',
        timing: 'Regular monitoring throughout growing season (spring to fall).',
        maturityStage: 'From early stages onward.',
        notRecommended: false
      },
      {
        name: 'Watering and Humidity Control',
        description: 'Wisteria floribunda requires consistent moisture during the growing season without waterlogging; soil should remain slightly moist to support vigorous growth and flowering. Good drainage is critical, and in hot weather, increased watering frequency and ambient humidity help prevent stress.',
        timing: 'Spring through early fall; increase watering in hot, dry conditions.',
        maturityStage: 'All maturity stages.',
        notRecommended: false
      }
    ],
    images: {
      developmentStages: {
        early: '/bonsai_photos/placeholder/early.jpg',
        middle: '/bonsai_photos/placeholder/middle.jpg',
        mature: '/bonsai_photos/placeholder/mature.jpg'
      },
      seasons: {
        spring: '/bonsai_photos/placeholder/spring.jpg',
        summer: '/bonsai_photos/placeholder/summer.jpg',
        autumn: '/bonsai_photos/placeholder/autumn.jpg',
        winter: '/bonsai_photos/placeholder/winter.jpg'
      },
      styles: {},
      nature: {}
    },
    imageCredits: {}
  },
  {
    id: 'crabapple',
    scientificName: 'Malus sylvestris',
    commonName: 'Crabapple (Malus sylvestris)',
    group: 'Various',
    temperatureMin: 4,
    temperatureMax: -35,
    sunExposure: 'Full sun',
    position: 'Outdoor',
    leafType: 'Evergreen Broadleaf',
    climate: 'Temperate',
    flowering: 'White flowers',
    nativeRegion: 'Europe (The genus Malus is native to the northern temperate zones of Europe, Asia, and North America) [2]',
    difficultyLevel: 'Beginner',
    category: 'Beginner',
    careTips: {
      general: '**Flowering and Fruiting:** Crabapples are highly valued for their pink-flushed white flowers in late Spring and the subsequent greenish-yellow, red-flushed fruit (up to 2cm) in Autumn [2]. **Pruning*...',
      soilType: 'Well-draining bonsai soil mix',
      feeding: 'Regular fertilization during growing season',
      watering: 'Keep soil moderately moist, avoid overwatering'
    },
    bonsaiStyles: ['Informal Upright', 'Formal Upright', 'Slanting'],
    techniques: [
      {
        name: 'Pruning (Structural & Maintenance)',
        description: 'For Crabapple bonsai, structural pruning is done in early spring before bud burst to establish the basic framework and remove crossing or inward-growing branches. Maintenance pruning involves cutting back new shoots to one or two leaves during spring and must be completed by late August to promote flower bud formation for the following year.',
        timing: 'Early spring (before bud burst) for structural; spring through late August for maintenance pruning',
        maturityStage: 'Begin as soon as the tree has developed a stable trunk and primary branches, typically 1-2 years after styling',
        notRecommended: false
      },
      {
        name: 'Wiring',
        description: 'Wiring Crabapple branches allows refinement of informal styles and branch placement, taking care due to moderate branch thickness and sap flow. Wiring is best done in early spring or late autumn when sap flow is lower, avoiding wiring during heavy growth to prevent scarring.',
        timing: 'Early spring before bud burst or late autumn after leaf drop',
        maturityStage: 'Once branches have sufficient lignification but are still flexible, usually from 2 years onward',
        notRecommended: false
      },
      {
        name: 'Repotting',
        description: 'Repot Crabapple bonsai annually in early spring before bud burst using a well-draining soil mix to prevent root rot. Crabapple’s vigorous root system benefits from annual root inspection and soil refresh to maintain health and vigor.',
        timing: 'Early spring, just before bud burst',
        maturityStage: 'From young saplings onward, annually',
        notRecommended: false
      },
      {
        name: 'Root Pruning',
        description: 'Root pruning should be performed during repotting in early spring to maintain a compact root system and promote fine root growth, carefully removing long thick roots while preserving fibrous roots for nutrient uptake.',
        timing: 'Early spring, during repotting before bud burst',
        maturityStage: 'From first repotting onward',
        notRecommended: false
      },
      {
        name: 'Defoliation',
        description: 'Defoliation is generally not recommended for Crabapple bonsai as the species has relatively small leaves and is a flowering and fruiting tree; leaf removal can reduce vigor and impede flower bud formation.',
        timing: 'N/A',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Pinching',
        description: 'Pinching new shoots in spring helps control excessive vegetative growth and encourages denser branching, essential for maintaining the delicate balance between growth and flower bud development in Crabapple bonsai.',
        timing: 'Spring, after new shoots have elongated slightly',
        maturityStage: 'From young trees with active growth onward',
        notRecommended: false
      },
      {
        name: 'Grafting',
        description: 'Grafting can be used to add branches or improve branch placement on Crabapple bonsai, especially to introduce desirable flower or fruiting characteristics; whip or side grafting is done in early spring.',
        timing: 'Early spring, before bud burst',
        maturityStage: 'From young to mature trees, when scion and rootstock are compatible',
        notRecommended: false
      },
      {
        name: 'Jin (Deadwood Technique)',
        description: 'Jin can be applied selectively on older branches of Crabapple bonsai to simulate natural aging or weather damage, but should be used sparingly to avoid detracting from the species’ delicate flowering and fruiting appearance.',
        timing: 'Late autumn or winter when the tree is dormant',
        maturityStage: 'On mature bonsai with established branch structure',
        notRecommended: false
      },
      {
        name: 'Shari (Trunk Deadwood Technique)',
        description: 'Shari can add character to mature Crabapple bonsai by exposing aged wood on the trunk; however, it must be done cautiously as Crabapple bark is relatively thin and the species is primarily valued for flowers and fruit rather than deadwood features.',
        timing: 'Winter during dormancy',
        maturityStage: 'On older, established bonsai with thick trunks',
        notRecommended: false
      },
      {
        name: 'Nebari Development (Surface Roots)',
        description: 'Encouraging a wide and balanced nebari is important for Crabapple bonsai to provide visual stability and enhance aesthetics; this is achieved through careful root pruning and possibly slight root spreading during repotting in early spring.',
        timing: 'Early spring during repotting',
        maturityStage: 'From first repotting onward',
        notRecommended: false
      },
      {
        name: 'Carving',
        description: 'Carving is not commonly used on Crabapple bonsai as the species’ beauty lies in its flowers and fruit, and excessive carving can weaken the tree or detract from its natural charm.',
        timing: 'N/A',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Air Layering',
        description: 'Air layering is effective for propagating Crabapple bonsai; it should be done in late spring or early summer when sap flow is active to encourage root formation on the layered branch.',
        timing: 'Late spring to early summer',
        maturityStage: 'From semi-mature trees with healthy branches',
        notRecommended: false
      },
      {
        name: 'Fertilizing',
        description: 'Feed Crabapple bonsai fortnightly with a balanced fertilizer from early spring until flowering; after flowering, cease feeding if fruiting is desired or continue feeding to encourage vegetative growth at the expense of fruit production.',
        timing: 'Fortnightly from early spring until flowering; adjust after flowering based on goals',
        maturityStage: 'From young growing trees onward',
        notRecommended: false
      },
      {
        name: 'Pest and Disease Management',
        description: 'Due to susceptibility to Aphids, Red spider mites, caterpillars, apple scab, and mildew, regular inspection and prompt treatment with appropriate organic or chemical controls are essential, especially in spring and summer when pests and diseases are most active.',
        timing: 'Spring through summer, with regular monitoring',
        maturityStage: 'All stages',
        notRecommended: false
      },
      {
        name: 'Watering and Humidity Control',
        description: 'Crabapple bonsai requires plentiful watering, especially during the fruiting season, ensuring the soil never dries out completely; good air circulation outdoors reduces humidity-related diseases, but avoid excessive dryness during hot periods.',
        timing: 'Consistent year-round, increased watering in fruiting season (late summer to autumn)',
        maturityStage: 'All stages',
        notRecommended: false
      }
    ],
    images: {
      developmentStages: {
        early: '/bonsai_photos/placeholder/early.jpg',
        middle: '/bonsai_photos/placeholder/middle.jpg',
        mature: '/bonsai_photos/placeholder/mature.jpg'
      },
      seasons: {
        spring: '/bonsai_photos/placeholder/spring.jpg',
        summer: '/bonsai_photos/placeholder/summer.jpg',
        autumn: '/bonsai_photos/placeholder/autumn.jpg',
        winter: '/bonsai_photos/placeholder/winter.jpg'
      },
      styles: {},
      nature: {}
    },
    imageCredits: {}
  },
  {
    id: 'hornbeam',
    scientificName: 'Carpinus betulus',
    commonName: 'Hornbeam (Carpinus betulus)',
    group: 'Various',
    temperatureMin: -26,
    temperatureMax: -10,
    sunExposure: 'Partial shade',
    position: 'Outdoor',
    leafType: 'Deciduous',
    climate: 'Temperate',
    flowering: 'Yes',
    nativeRegion: 'Europe and Western/South-East Asia',
    difficultyLevel: 'Beginner',
    category: 'Beginner',
    careTips: {
      general: '**Leaf Characteristics:** Deciduous, alternate, prominently veined, oval, and toothed leaves (5-7cm long), which reduce well with proper techniques (pruning and defoliation). The leaves turn clear yel...',
      soilType: 'Well-draining bonsai soil mix',
      feeding: 'Regular fertilization during growing season',
      watering: 'Keep soil moderately moist, avoid overwatering'
    },
    bonsaiStyles: ['Informal Upright', 'Formal Upright', 'Slanting'],
    techniques: [
      {
        name: 'Pruning (Structural & Maintenance)',
        description: 'Hornbeam responds exceptionally well to both structural and maintenance pruning due to its vigorous growth and ability to back-bud readily. Structural pruning is best used to establish the primary branch framework in young specimens, while maintenance pruning maintains ramification and leaf size by selectively removing shoots and branches to open the canopy and enhance light penetration.',
        timing: 'Late winter to early spring (February to March) before bud break for structural pruning; maintenance pruning can be done during the growing season (May to August).',
        maturityStage: 'Begin structural pruning from the sapling stage (1-3 years) and maintenance pruning once basic structure is established.',
        notRecommended: false
      },
      {
        name: 'Wiring',
        description: 'Hornbeam branches are flexible yet stiff enough to hold shape well when wired, making wiring an effective method to refine branch placement and trunk movement. Due to the rapid growth and thickening of branches, wiring should be monitored closely and removed within 2-3 months to prevent scarring.',
        timing: 'Early spring (March to April) after bud swell but before rapid shoot elongation is ideal; light wiring can also be done in late summer (August).',
        maturityStage: 'Start wiring once primary branches have developed, typically at 2-3 years of age.',
        notRecommended: false
      },
      {
        name: 'Repotting',
        description: 'Hornbeam benefits from repotting every 2-3 years to refresh soil and manage root growth, especially in younger bonsai. Use a well-draining, slightly acidic substrate with organic content such as akadama mixed with volcanic clay and peat. Care should be taken to avoid root damage, as Hornbeam roots are sensitive but regenerate quickly.',
        timing: 'Early spring (March) just before bud break is optimal, when roots are beginning to activate.',
        maturityStage: 'Begin repotting from the juvenile stage (1-2 years old) and continue regularly to maintain vigor.',
        notRecommended: false
      },
      {
        name: 'Root Pruning',
        description: 'Root pruning is essential to control Hornbeam bonsai size and encourage a dense, fibrous root system. It should be performed carefully during repotting by trimming off long, thick roots while preserving fine feeder roots. Hornbeam\'s fast root regeneration allows for relatively aggressive root pruning without long-term damage.',
        timing: 'During repotting in early spring (March) before bud break.',
        maturityStage: 'Start root pruning when bonsai is first established in a training pot (1-3 years).',
        notRecommended: false
      },
      {
        name: 'Defoliation',
        description: 'Hornbeam responds well to complete or partial defoliation, which helps reduce leaf size, increase ramification, and improve light penetration inside the canopy. Given its vigorous growth, defoliation can be done once or twice per growing season but must be followed by careful watering and feeding to support recovery.',
        timing: 'Late spring to early summer (May to June) after the initial flush of growth has hardened off.',
        maturityStage: 'Perform defoliation only on healthy, well-established bonsai that are at least 3-4 years old.',
        notRecommended: false
      },
      {
        name: 'Pinching',
        description: 'Pinching is highly effective on Hornbeam to encourage dense ramification and finer twig development. The recommended method is to allow shoots to grow to about 10 leaves, then pinch back to the first two leaves, which stimulates back-budding and compact growth habit.',
        timing: 'Throughout the active growing season (May to August), as new shoots reach the target length.',
        maturityStage: 'Begin pinching once the tree has established a basic branch structure, around 2-3 years old.',
        notRecommended: false
      },
      {
        name: 'Grafting',
        description: 'Grafting is occasionally used in Hornbeam to add finer branches or to improve branch placement, especially for medium to large bonsai. The species heals well, making approach grafting and side grafting effective techniques for refining ramification and correcting structural flaws.',
        timing: 'Early spring (March to April) just before bud break, when sap flow begins.',
        maturityStage: 'Use grafting on trees that have developed a sturdy trunk and primary branches, typically 3-5 years old.',
        notRecommended: false
      },
      {
        name: 'Jin (Deadwood Technique)',
        description: 'While Hornbeam is not typically prized for deadwood features, Jin can be applied sparingly to create naturalistic aged branch stubs or highlight artistic features. Due to the species’ vigorous healing and bark characteristics, jinning should be done carefully and allowed to weather naturally to avoid rapid decay.',
        timing: 'Late autumn or winter (November to January) when the tree is dormant for best drying and callusing.',
        maturityStage: 'Apply Jin only on mature bonsai with thick branches, usually over 5 years old.',
        notRecommended: false
      },
      {
        name: 'Shari (Trunk Deadwood Technique)',
        description: 'Shari is not commonly used on Hornbeam as its gray, fluted bark is a key aesthetic feature representing muscle-like strength. Removing bark can compromise the natural beauty and health of the trunk. If used, it should be minimal and very carefully executed to avoid weakening the tree.',
        timing: 'If applied, late winter (dormant season) for best healing, but generally not advised.',
        maturityStage: 'Only on very mature, robust trunks over 10 years old if necessary.',
        notRecommended: true
      },
      {
        name: 'Nebari Development (Surface Roots)',
        description: 'Developing a wide, stable nebari is important for Hornbeam bonsai to express strength and age. This is achieved by careful root pruning and spreading roots outward during repotting. Hornbeam’s rapid root growth facilitates nebari development, and exposing surface roots gradually by removing soil during the growing season enhances character.',
        timing: 'Nebari work is best done during repotting in early spring (March) and soil removal can be done progressively in summer.',
        maturityStage: 'Begin nebari development from the juvenile stage (1-3 years).',
        notRecommended: false
      },
      {
        name: 'Carving',
        description: 'Carving is generally not recommended for Hornbeam bonsai because the species lacks naturally occurring deadwood features and the bark’s fluted texture is a major aesthetic asset. Excessive carving risks damaging the living tissues and detracting from the tree’s natural muscular appearance.',
        timing: 'If performed, it should be minimal and done during dormancy (winter), but generally avoided.',
        maturityStage: 'Only on very mature trees with thick trunks, but generally discouraged.',
        notRecommended: true
      },
      {
        name: 'Air Layering',
        description: 'Air layering is highly successful in propagating Hornbeam due to its vigorous growth and good wound healing. This technique allows for creating new bonsai from mature branches or trunks and is especially useful for preserving desirable characteristics or creating multiple specimens from one tree.',
        timing: 'Late spring to early summer (May to July) when sap flow is active and healing is rapid.',
        maturityStage: 'Can be applied to semi-mature and mature trees, typically from 3 years onwards.',
        notRecommended: false
      },
      {
        name: 'Fertilizing',
        description: 'Hornbeam requires balanced feeding to support its fast growth and dense foliage. Young development-stage trees benefit from weekly feeding for a month after leaf break, followed by biweekly applications, while refined bonsai should receive organic slow-release fertilizer every 5-6 weeks from late spring to autumn to prevent excessive growth and maintain health.',
        timing: 'Start feeding immediately after leaf break in spring (March-April) through late autumn (September-October).',
        maturityStage: 'Begin regular fertilizing from the first year of growth; adjust frequency as the tree matures.',
        notRecommended: false
      },
      {
        name: 'Pest and Disease Management',
        description: 'Hornbeam bonsai may occasionally suffer from common pests such as aphids and scale, especially during warm months. Proactive inspection and treatment with insecticidal soap or neem oil are effective. Good aeration and proper watering reduce fungal diseases, which are otherwise rare in this robust species.',
        timing: 'Inspect regularly from spring through autumn; treat promptly upon detection of pests or disease.',
        maturityStage: 'Necessary at all stages of growth.',
        notRecommended: false
      },
      {
        name: 'Watering and Humidity Control',
        description: 'Hornbeam requires consistently moist soil without waterlogging; the surface should be allowed to dry slightly between waterings but never completely dry out. In hot summer climates, partial shade and increased humidity help prevent leaf scorch and stress. Outdoor placement with good airflow aids in maintaining optimal moisture balance.',
        timing: 'Year-round, adjusted seasonally for rainfall and temperature fluctuations.',
        maturityStage: 'Critical at all growth stages.',
        notRecommended: false
      }
    ],
    images: {
      developmentStages: {
        early: '/bonsai_photos/placeholder/early.jpg',
        middle: '/bonsai_photos/placeholder/middle.jpg',
        mature: '/bonsai_photos/placeholder/mature.jpg'
      },
      seasons: {
        spring: '/bonsai_photos/placeholder/spring.jpg',
        summer: '/bonsai_photos/placeholder/summer.jpg',
        autumn: '/bonsai_photos/placeholder/autumn.jpg',
        winter: '/bonsai_photos/placeholder/winter.jpg'
      },
      styles: {},
      nature: {}
    },
    imageCredits: {}
  },
  {
    id: 'hawthorn',
    scientificName: 'Crataegus monogyna',
    commonName: 'Hawthorn (Crataegus monogyna)',
    group: 'Various',
    temperatureMin: -20,
    temperatureMax: 32,
    sunExposure: 'Full sun',
    position: 'Outdoor',
    leafType: 'Deciduous',
    climate: 'Temperate',
    flowering: 'White flowers',
    nativeRegion: 'Europe, Northwest Africa, and Western Asia [4]',
    difficultyLevel: 'Intermediate',
    category: 'Intermediate',
    careTips: {
      general: '**Flowering/Fruiting:** Produces small white (sometimes pink or red) flowers in spring, followed by small red haws (apple-shaped fruit) in autumn. Trees may take many years (up to 10-20 from seed) to ...',
      soilType: 'Well-draining bonsai soil mix',
      feeding: 'Regular fertilization during growing season',
      watering: 'Keep soil moderately moist, avoid overwatering'
    },
    bonsaiStyles: ['Informal Upright', 'Formal Upright', 'Slanting'],
    techniques: [
      {
        name: 'Pruning (Structural & Maintenance)',
        description: 'For Hawthorn bonsai, structural pruning is best done in late winter to early spring before bud break to remove heavy branches and shape the basic framework. Maintenance pruning throughout the growing season encourages dense ramification and controls thorny growth, especially pruning heavily on the top and lightly at the base to promote strong second growth. Always seal large wounds to prevent slow healing and fungal infections.',
        timing: 'Late winter to early spring for structural pruning; light maintenance pruning during growing season (spring to early autumn).',
        maturityStage: 'Begin as soon as the tree has established a basic branch structure, typically 2-3 years after planting.',
        notRecommended: false
      },
      {
        name: 'Wiring',
        description: 'Hawthorn branches are flexible when young but become tough and brittle as they age, requiring careful wiring to avoid breakage. Remove thorns before wiring and prefer wiring in autumn or winter when foliage is minimal to better observe branch structure and reduce stress. Wiring can refine branch direction for informal and cascade styles but avoid wiring large, old branches.',
        timing: 'Autumn and winter, when the tree is dormant and leafless.',
        maturityStage: 'Start wiring young branches as soon as they are long enough to shape, usually after 1-2 years.',
        notRecommended: false
      },
      {
        name: 'Repotting',
        description: 'Hawthorn resents root disturbance, so repotting should be done carefully every 3-5 years in early spring, just before growth begins. Use a well-drained bonsai soil mix and prune up to one-third of the root mass only if the tree shows strong growth. Avoid repotting too frequently to prevent stress and reduced flowering potential.',
        timing: 'Early spring, just before bud break and active growth.',
        maturityStage: 'Begin repotting when the tree is established in a bonsai container, typically after 2-3 years.',
        notRecommended: false
      },
      {
        name: 'Root Pruning',
        description: 'Root pruning for Hawthorn should be moderate and done during repotting to maintain a balanced root-to-shoot ratio without excessive root loss. Prune no more than one-third of the roots, focusing on removing long, circling roots and promoting fine root growth. This technique helps sustain vigor and encourages flowering by preventing root-bound conditions.',
        timing: 'During repotting in early spring.',
        maturityStage: 'Once the tree has a developed root system, usually after 2-3 years in a bonsai pot.',
        notRecommended: false
      },
      {
        name: 'Defoliation',
        description: 'Partial defoliation can be used cautiously on Hawthorn to stimulate a second flush of smaller leaves and enhance ramification, but full defoliation is risky due to the species’ slower healing and potential for stress. It is best applied in mid-summer on healthy, vigorous specimens and avoided on young or weak trees.',
        timing: 'Mid to late summer during active growth.',
        maturityStage: 'Only on mature, vigorous trees typically over 5 years old.',
        notRecommended: false
      },
      {
        name: 'Pinching',
        description: 'Pinching new soft shoots helps maintain compact growth and encourages finer branching in Hawthorn bonsai. It is effective during the growing season to control vigor and promote flowering by directing energy towards fruit buds rather than excessive leaf production.',
        timing: 'Throughout the growing season, especially late spring through summer.',
        maturityStage: 'Begin once the tree has established secondary branches, generally after 2 years.',
        notRecommended: false
      },
      {
        name: 'Grafting',
        description: 'Grafting is used in Hawthorn bonsai primarily to introduce flowering or fruiting cultivars or to repair damaged branches. It requires skill as the species’ tough wood can be challenging to graft successfully; whip or approach grafting in late winter or early spring yields the best results.',
        timing: 'Late winter to early spring before sap flow starts.',
        maturityStage: 'Typically performed on established bonsai with a developed branch structure, after 3-5 years.',
        notRecommended: false
      },
      {
        name: 'Jin (Deadwood Technique)',
        description: 'Creating jin on Hawthorn is suitable due to its tough, durable wood and natural aging bark. Deadwood features add character and simulate natural weathering but should be applied with care to avoid excessive damage, especially since wounds heal slowly. Use jin to accentuate older branches or stubs in informal and cascade styles.',
        timing: 'Any time during the dormant season, preferably late winter.',
        maturityStage: 'Best on mature trees with thick, older branches, usually over 5 years old.',
        notRecommended: false
      },
      {
        name: 'Shari (Trunk Deadwood Technique)',
        description: 'Shari is effective on Hawthorn to showcase the rough, peeling bark and add aged character to the trunk. Because the species back-buds well on old wood, shari can be combined with trunk chopping to create dramatic deadwood features and encourage new growth. Wounds must be sealed properly to prevent fungal infections.',
        timing: 'Dormant season, late winter to early spring.',
        maturityStage: 'Recommended on mature specimens with thick trunks, typically over 7 years old.',
        notRecommended: false
      },
      {
        name: 'Nebari Development (Surface Roots)',
        description: 'Hawthorn naturally develops good surface roots which can be enhanced by careful root pruning and positioning during repotting. Exposing and spreading roots encourages a balanced and visually appealing nebari, critical for informal upright and slanting styles. Avoid excessive root disturbance to prevent stress.',
        timing: 'During repotting in early spring.',
        maturityStage: 'Begin nebari development once the tree is established and has a good root system, generally after 3 years.',
        notRecommended: false
      },
      {
        name: 'Carving',
        description: 'Due to its tough and durable wood, Hawthorn is well-suited for detailed carving to create deadwood features or enhance trunk character. Carving should be done carefully in dormant seasons and followed by sealing cuts to prevent decay. The species’ slow wound healing necessitates prudent removal of wood.',
        timing: 'Late winter when the tree is dormant.',
        maturityStage: 'Appropriate on mature trees with thick trunks and branches, typically over 7 years old.',
        notRecommended: false
      },
      {
        name: 'Air Layering',
        description: 'Air layering is an effective propagation method for Hawthorn, allowing the production of new trees with established root systems. Perform air layering in late spring to early summer when sap flow is active, ensuring good humidity and protection for the developing roots before separation.',
        timing: 'Late spring to early summer during active growth.',
        maturityStage: 'Can be done on semi-mature branches of older bonsai, generally after 3-4 years.',
        notRecommended: false
      },
      {
        name: 'Fertilizing',
        description: 'Hawthorn bonsai benefits from regular fertilizing every two weeks with liquid fertilizer or monthly with solid organic fertilizer during the growing season to support vigorous growth and flowering. Use a balanced fertilizer or one higher in phosphorus and potassium to encourage blooms and fruiting, avoiding excessive nitrogen which promotes leaf growth at the expense of flowers.',
        timing: 'From late winter through late autumn during active growth.',
        maturityStage: 'Start fertilizing once the tree is actively growing in spring, typically after 1 year.',
        notRecommended: false
      },
      {
        name: 'Pest and Disease Management',
        description: 'Good air circulation and careful watering are essential to prevent fungal diseases like powdery mildew common in Hawthorn. Monitor regularly for aphids, scale, and fungal infections; treat promptly with appropriate organic or chemical controls. Avoid overhead watering in humid conditions to reduce disease risk.',
        timing: 'Continuous monitoring, especially during warm and humid periods (spring and summer).',
        maturityStage: 'Necessary at all stages of development.',
        notRecommended: false
      },
      {
        name: 'Watering and Humidity Control',
        description: 'Hawthorn requires generous watering during the growing season with moist but well-drained soil to avoid root rot or leaf tip browning. In winter, keep roots slightly moist and protect the bonsai pot from prolonged wetness and strong frost. Ensure good air circulation to prevent high humidity-related fungal problems.',
        timing: 'Water regularly throughout the growing season; reduce but maintain slight moisture in winter.',
        maturityStage: 'Applicable at all stages.',
        notRecommended: false
      }
    ],
    images: {
      developmentStages: {
        early: '/bonsai_photos/placeholder/early.jpg',
        middle: '/bonsai_photos/placeholder/middle.jpg',
        mature: '/bonsai_photos/placeholder/mature.jpg'
      },
      seasons: {
        spring: '/bonsai_photos/placeholder/spring.jpg',
        summer: '/bonsai_photos/placeholder/summer.jpg',
        autumn: '/bonsai_photos/placeholder/autumn.jpg',
        winter: '/bonsai_photos/placeholder/winter.jpg'
      },
      styles: {},
      nature: {}
    },
    imageCredits: {}
  },
  {
    id: 'pyracantha',
    scientificName: 'Pyracantha (genus) - commonly Pyracantha angustifolia or Pyracantha coccinea',
    commonName: 'Pyracantha (Firethorn)',
    group: 'Various',
    temperatureMin: -10,
    temperatureMax: 12,
    sunExposure: 'Partial shade',
    position: 'Outdoor',
    leafType: 'Evergreen Broadleaf',
    climate: 'Mediterranean',
    flowering: 'White flowers',
    nativeRegion: 'Mediterranean countries and temperate zones of Asia',
    difficultyLevel: 'Intermediate',
    category: 'Intermediate',
    careTips: {
      general: 'Pyracantha is a broadleaf evergreen known for its small, fragrant white flowers in spring and abundant yellow, orange, or red berries from late summer to winter. It is vigorous and responds well to ha...',
      soilType: 'Well-draining bonsai soil mix',
      feeding: 'Regular fertilization during growing season',
      watering: 'Keep soil moderately moist, avoid overwatering'
    },
    bonsaiStyles: ['Informal Upright', 'Formal Upright', 'Slanting'],
    techniques: [
      {
        name: 'Pruning (Structural & Maintenance)',
        description: 'Pyracantha responds very well to both structural and maintenance pruning due to its vigorous growth and willingness to bud on old wood. Structural pruning is essential to establish the primary framework of the bonsai, removing unwanted branches and shaping the tree, while maintenance pruning encourages dense foliage and flowering. Sharp thorns require caution during pruning, and removing crossing or congested branches improves air circulation and overall aesthetics.',
        timing: 'Early spring (March to April), just before new growth begins; light maintenance pruning can be done throughout the growing season.',
        maturityStage: 'Begin pruning once the tree has established a basic branch structure, typically after 1-2 years of growth.',
        notRecommended: false
      },
      {
        name: 'Wiring',
        description: 'Wiring Pyracantha is challenging due to its strong, sharp thorns and stiff, brittle older branches. Wiring young, flexible shoots can be attempted carefully, but the thorns can cause injury and damage wiring materials. Therefore, wiring is generally discouraged; instead, using guy wires to shape branches with less risk of damage is preferable.',
        timing: 'If wiring young shoots, late spring to early summer when branches are pliable; avoid wiring older branches at any time.',
        maturityStage: 'Young saplings with flexible shoots, typically within the first 1-2 years.',
        notRecommended: true
      },
      {
        name: 'Repotting',
        description: 'Repotting Pyracantha bonsai every 2-3 years in early spring ensures healthy root growth and soil aeration. The species prefers well-draining, air-permeable bonsai soil such as an Akadama-based mix, and repotting is vital to prevent root bound conditions. Care should be taken to avoid damaging the root ball, and repotting before active growth resumes supports rapid recovery.',
        timing: 'Early spring (March), just before bud break and new growth.',
        maturityStage: 'When the tree has developed a significant root system, typically after the first year in a pot.',
        notRecommended: false
      },
      {
        name: 'Root Pruning',
        description: 'Root pruning is essential during repotting to maintain a compact, fibrous root system and encourage healthy new roots. Pyracantha tolerates root pruning well, but large, woody roots should be selectively trimmed while preserving fine feeder roots. This technique helps prevent root rot and supports balanced water uptake.',
        timing: 'At the time of repotting in early spring.',
        maturityStage: 'Once the bonsai has an established root system, usually after the first year in a container.',
        notRecommended: false
      },
      {
        name: 'Defoliation',
        description: 'Complete defoliation is generally not recommended on Pyracantha as it may stress the evergreen leaves and reduce flowering potential. However, selective leaf pruning or partial defoliation can be used in summer to reduce leaf size and increase ramification. This should be done cautiously to avoid weakening the tree.',
        timing: 'Partial defoliation can be attempted in mid to late summer, during active growth and warm conditions.',
        maturityStage: 'After the tree has reached intermediate maturity with well-established foliage, typically 3+ years.',
        notRecommended: true
      },
      {
        name: 'Pinching',
        description: 'Pinching new shoots on Pyracantha is an effective maintenance technique to encourage bushier growth and improve ramification. Pinching back soft, green tips during the growing season helps control vigor and promotes flowering and berry production. This technique is less invasive and preferred over heavy pruning for fine-tuning branch development.',
        timing: 'Throughout the growing season from late spring to early autumn when new shoots are actively growing.',
        maturityStage: 'Young to intermediate trees with actively growing shoots, typically from year 1 onward.',
        notRecommended: false
      },
      {
        name: 'Grafting',
        description: 'Grafting is rarely required for Pyracantha bonsai because the species is vigorous and readily propagated by cuttings. However, grafting can be used to attach high-quality scions to improve branch placement or replace damaged parts. Compatibility is typically high within Pyracantha species, but the technique requires skill and is more advanced.',
        timing: 'Early spring, just before the onset of active growth to ensure successful union.',
        maturityStage: 'Intermediate to mature bonsai when structural refinement or repair is needed.',
        notRecommended: false
      },
      {
        name: 'Jin (Deadwood Technique)',
        description: 'Creating jin on Pyracantha can add character by highlighting deadwood branches, but caution is necessary as the wood is brittle and can crack easily. Jin is best applied to small, thin branches rather than thick limbs, and should be done in late summer or early autumn to allow the wood to dry properly. This technique complements styles like Literati (Bunjin).',
        timing: 'Late summer to early autumn during warm, dry conditions for optimal drying.',
        maturityStage: 'Mature bonsai with well-developed branches, typically after 3-4 years or more.',
        notRecommended: false
      },
      {
        name: 'Shari (Trunk Deadwood Technique)',
        description: 'Shari can be applied to Pyracantha to create dramatic trunk deadwood features, but the species’ brittle older wood requires careful carving to prevent cracking. Using specialized carving tools and gradual removal of bark helps preserve tree health. Shari enhances the rugged appearance and is suited to styles emphasizing aged character.',
        timing: 'Late summer to early autumn to promote healing and drying of exposed wood.',
        maturityStage: 'Older, mature trees with thick trunks, generally 5 years or older.',
        notRecommended: false
      },
      {
        name: 'Nebari Development (Surface Roots)',
        description: 'Developing a good nebari is important for Pyracantha to provide visual stability and enhance overall aesthetics. Encouraging surface roots through careful root pruning and periodic soil removal exposes the flare of the root base. Due to the species’ vigorous roots, nebari development responds well to consistent attention during early growth stages.',
        timing: 'During repotting in early spring and periodically throughout the growing season by soil removal.',
        maturityStage: 'Start nebari development early, from year 1 or 2 onward.',
        notRecommended: false
      },
      {
        name: 'Carving',
        description: 'Carving on Pyracantha must be done with care due to the brittleness of older wood and the risk of splitting. Using fine carving tools, small deadwood features can be created without compromising structural integrity. Carving enhances artistic expression but should be limited to avoid excessive wounding.',
        timing: 'Late summer to early autumn when the wood is dry and healing is optimal.',
        maturityStage: 'Mature bonsai with hardened wood, generally after 3-4 years.',
        notRecommended: false
      },
      {
        name: 'Air Layering',
        description: 'Air layering is an effective propagation method for Pyracantha, allowing the creation of new bonsai from established branches or trunks. The species roots readily with this technique due to its vigorous nature. Care should be taken to select healthy branches and maintain moisture in the rooting medium during the process.',
        timing: 'Late spring to early summer when sap flow is strong and temperatures are warm.',
        maturityStage: 'Healthy, mature branches on established bonsai or stock plants, typically after 2-3 years.',
        notRecommended: false
      },
      {
        name: 'Fertilizing',
        description: 'Pyracantha bonsai benefits from regular feeding with a balanced liquid fertilizer every two weeks during the active growing season (spring to autumn). Fertilizer should be reduced or withheld during flowering and fruiting to avoid excessive vegetative growth. Using fertilizers with balanced NPK supports strong foliage, flower production, and berry development.',
        timing: 'From early spring (after bud break) through early autumn; reduce feeding during flowering and fruiting periods.',
        maturityStage: 'Begin fertilizing young plants once they are actively growing, usually after 6 months to 1 year.',
        notRecommended: false
      },
      {
        name: 'Pest and Disease Management',
        description: 'Pyracantha is susceptible to common pests such as aphids, scale insects, and spider mites, and fungal diseases like fire blight. Regular inspection and prompt treatment with insecticidal soap or fungicides are necessary to maintain health. Maintaining good air circulation and avoiding overwatering helps prevent disease development.',
        timing: 'Inspect regularly throughout the growing season; apply treatments as soon as pests or symptoms appear.',
        maturityStage: 'All maturity stages require vigilance, especially young and stressed trees.',
        notRecommended: false
      },
      {
        name: 'Watering and Humidity Control',
        description: 'Pyracantha bonsai requires frequent watering to maintain evenly moist soil without becoming waterlogged. The species prefers well-draining soil to prevent root rot and does not tolerate drought well. Outdoor placement with natural humidity is ideal; in dry or hot conditions, occasional misting can support foliage health.',
        timing: 'Water daily or as needed during the growing season; reduce frequency in winter but avoid complete drying.',
        maturityStage: 'All stages require consistent watering and humidity control.',
        notRecommended: false
      }
    ],
    images: {
      developmentStages: {
        early: '/bonsai_photos/placeholder/early.jpg',
        middle: '/bonsai_photos/placeholder/middle.jpg',
        mature: '/bonsai_photos/placeholder/mature.jpg'
      },
      seasons: {
        spring: '/bonsai_photos/placeholder/spring.jpg',
        summer: '/bonsai_photos/placeholder/summer.jpg',
        autumn: '/bonsai_photos/placeholder/autumn.jpg',
        winter: '/bonsai_photos/placeholder/winter.jpg'
      },
      styles: {},
      nature: {}
    },
    imageCredits: {}
  },
  {
    id: 'field-maple',
    scientificName: 'Acer campestre',
    commonName: 'Field Maple (Acer campestre)',
    group: 'Various',
    temperatureMin: 9,
    temperatureMax: -10,
    sunExposure: 'Full sun',
    position: 'Indoor/Outdoor',
    leafType: 'Evergreen Broadleaf',
    climate: 'Temperate',
    flowering: 'Inconspicuous',
    nativeRegion: 'Continental Europe, Britain, southwest Asia (Turkey to Caucasus), and north Africa (Atlas Mountains).',
    difficultyLevel: 'Beginner',
    category: 'Beginner',
    careTips: {
      general: 'The Field Maple is highly valued for its ability to **bud back excellently** and heal scars quickly, making it very responsive to pruning. It is one of the few maples that tolerates direct sunlight. F...',
      soilType: 'Well-draining bonsai soil mix',
      feeding: 'Regular fertilization during growing season',
      watering: 'Keep soil moderately moist, avoid overwatering'
    },
    bonsaiStyles: ['Informal Upright', 'Formal Upright', 'Slanting'],
    techniques: [
      {
        name: 'Pruning (Structural & Maintenance)',
        description: 'Field Maple responds very well to both structural and maintenance pruning due to its excellent bud back ability. Structural pruning should focus on establishing a strong branch framework during early growth, while frequent maintenance pruning prevents long internodes and encourages fine ramification.',
        timing: 'Late winter to early spring (before bud break) for structural pruning; maintenance pruning throughout the growing season as needed',
        maturityStage: 'Begin structural pruning once the tree has established a good root system and initial branch framework, typically after 2-3 years; maintenance pruning can start earlier',
        notRecommended: false
      },
      {
        name: 'Wiring',
        description: 'Wiring Field Maple is best done on newly hardened branches to minimize the risk of branch breakage. The species’ flexible wood allows for effective shaping, but wiring should be monitored closely and removed before branches thicken to avoid scarring.',
        timing: 'Late spring to early summer when shoots have hardened but are still pliable',
        maturityStage: 'Start wiring when branches are sufficiently developed, generally after the first year of growth',
        notRecommended: false
      },
      {
        name: 'Repotting',
        description: 'Due to its fast growth, Field Maple requires repotting every two years to refresh soil and encourage healthy root development. Repot in spring just before bud break to minimize stress and promote rapid recovery.',
        timing: 'Early spring, before buds open (March to April depending on climate)',
        maturityStage: 'Begin repotting once the tree is established in its bonsai container, typically from year 2 onwards',
        notRecommended: false
      },
      {
        name: 'Root Pruning',
        description: 'Root pruning is essential during repotting to maintain a compact root ball and promote fine feeder roots. Field Maple tolerates root pruning well, and it should be performed moderately to avoid excessive stress.',
        timing: 'At the time of repotting in early spring before bud break',
        maturityStage: 'After the tree has developed a robust root system, usually from year 2 or 3 onwards',
        notRecommended: false
      },
      {
        name: 'Defoliation',
        description: 'Annual defoliation in June is highly effective for Field Maple, reducing leaf size to under one inch and encouraging denser ramification. Partial defoliation can be used to reduce vigor and improve branch back budding.',
        timing: 'Full defoliation in early to mid-June when leaves are fully mature but not hardened',
        maturityStage: 'Only mature bonsai with well-developed branch structure should be defoliated, generally after 3-4 years',
        notRecommended: false
      },
      {
        name: 'Pinching',
        description: 'Pinching new growth in Field Maple helps to control vigor and maintain compact branch structure. It is especially useful during the early growing season to encourage back budding and prevent overly long internodes.',
        timing: 'Spring through early summer as new shoots elongate',
        maturityStage: 'Can be started as soon as shoots appear, even on young trees',
        notRecommended: false
      },
      {
        name: 'Grafting',
        description: 'Grafting is possible on Field Maple to add finer branches or improve nebari, thanks to its good healing capacity. Approach grafting carefully to ensure compatibility and successful union.',
        timing: 'Early spring before bud break or late summer when sap flow slows',
        maturityStage: 'Recommended on semi-mature to mature trees from year 3 onwards',
        notRecommended: false
      },
      {
        name: 'Jin (Deadwood Technique)',
        description: 'Creating jin on Field Maple can add dramatic character, as the species heals scars quickly. However, because the bark is relatively thin, jin work should be done carefully to avoid damaging live tissue.',
        timing: 'Late winter or early spring when the tree is dormant',
        maturityStage: 'Suitable for mature trees with thick branches, typically after 5 years',
        notRecommended: false
      },
      {
        name: 'Shari (Trunk Deadwood Technique)',
        description: 'Shari can be applied on older Field Maple specimens to simulate natural damage and age. The species’ fast healing helps the shari area to stabilize quickly, but care must be taken not to remove too much live bark.',
        timing: 'Dormant season, late winter to early spring',
        maturityStage: 'Only on mature trees with thick trunks, generally after 7-10 years',
        notRecommended: false
      },
      {
        name: 'Nebari Development (Surface Roots)',
        description: 'Field Maple naturally produces good nebari, but development can be enhanced by careful root pruning and exposing surface roots during early repotting stages. Encouraging radial root spread improves visual stability and aesthetics.',
        timing: 'During early repotting sessions in spring',
        maturityStage: 'Best started when the tree is young but established, typically within the first 3 years',
        notRecommended: false
      },
      {
        name: 'Carving',
        description: 'Carving techniques can be applied to Field Maple to create deadwood features or accentuate movement. Due to the species’ good healing response, carving scars close effectively, but avoid excessively deep cuts to prevent stress.',
        timing: 'Dormant season to minimize sap loss and stress',
        maturityStage: 'Recommended for mature trees with thick wood, generally after 5 years',
        notRecommended: false
      },
      {
        name: 'Air Layering',
        description: 'Air layering is an effective propagation method for Field Maple, leveraging its vigorous growth and healing ability. It allows for the production of new bonsai material with established roots in a relatively short time.',
        timing: 'Late spring to early summer when sap is flowing actively',
        maturityStage: 'Can be performed on semi-mature trees from year 2 onwards',
        notRecommended: false
      },
      {
        name: 'Fertilizing',
        description: 'Field Maple benefits from regular feeding every two weeks during the growing season with standard or half-strength liquid bonsai fertilizer. This supports its rapid growth and encourages dense foliage and strong branch development.',
        timing: 'From early spring (bud break) through late summer',
        maturityStage: 'Start fertilizing once active growth begins, usually year 1 onwards',
        notRecommended: false
      },
      {
        name: 'Pest and Disease Management',
        description: 'Field Maple is generally hardy but can be susceptible to common pests like aphids and scale; regular inspection and timely treatment are advised. Good air circulation and avoiding waterlogged soil help prevent fungal diseases.',
        timing: 'Regular monitoring throughout the growing season, especially spring and summer',
        maturityStage: 'All maturity stages require pest and disease vigilance',
        notRecommended: false
      },
      {
        name: 'Watering and Humidity Control',
        description: 'Field Maple prefers moderate watering to keep the soil evenly moist, especially when grown in full sun. Small bonsai may need protection from intense summer heat and more frequent watering, while watering should be reduced but maintained in winter.',
        timing: 'Daily to every few days during active growth in spring and summer; less frequent in winter',
        maturityStage: 'All maturity stages require consistent watering tailored to pot size and environmental conditions',
        notRecommended: false
      }
    ],
    images: {
      developmentStages: {
        early: '/bonsai_photos/placeholder/early.jpg',
        middle: '/bonsai_photos/placeholder/middle.jpg',
        mature: '/bonsai_photos/placeholder/mature.jpg'
      },
      seasons: {
        spring: '/bonsai_photos/placeholder/spring.jpg',
        summer: '/bonsai_photos/placeholder/summer.jpg',
        autumn: '/bonsai_photos/placeholder/autumn.jpg',
        winter: '/bonsai_photos/placeholder/winter.jpg'
      },
      styles: {},
      nature: {}
    },
    imageCredits: {}
  },
  {
    id: 'beech',
    scientificName: 'Fagus sylvatica',
    commonName: 'Beech (Fagus sylvatica)',
    group: 'Various',
    temperatureMin: -5,
    temperatureMax: -25,
    sunExposure: 'Partial shade',
    position: 'Outdoor',
    leafType: 'Deciduous',
    climate: 'Temperate',
    flowering: 'Inconspicuous',
    nativeRegion: 'Europe (specifically mentioned as common in the UK)',
    difficultyLevel: 'Intermediate',
    category: 'Intermediate',
    careTips: {
      general: '**Leaf Type/Characteristics:** Deciduous tree with beautiful foliage and nice autumn colors. The reddish-brown dry leaves sometimes cling to the branches until spring (marcescence). It has smooth, gre...',
      soilType: 'Well-draining bonsai soil mix',
      feeding: 'Regular fertilization during growing season',
      watering: 'Keep soil moderately moist, avoid overwatering'
    },
    bonsaiStyles: ['Informal Upright', 'Formal Upright', 'Slanting'],
    techniques: [
      {
        name: 'Pruning (Structural & Maintenance)',
        description: 'Structural pruning on Beech bonsai is crucial during winter dormancy to develop taper and branch movement, focusing on cutting back branches while always leaving at least one visible bud to prevent dieback. Maintenance pruning is done in early growing season to remove weak shoots and maintain shape, taking care to avoid over-pruning which can reduce ramification due to its slow and sporadic back-budding.',
        timing: 'Winter (December to February) for structural pruning; early spring (March to April) for maintenance pruning before bud break.',
        maturityStage: 'Begin structural pruning once the tree has developed a defined trunk and primary branching, typically from 3-5 years of age.',
        notRecommended: false
      },
      {
        name: 'Wiring',
        description: 'Wiring Beech bonsai is effective for shaping branches and trunk movement during the dormant season when the bark is smooth and less prone to damage. Due to the brittle nature of new shoots and the smooth bark, wiring must be done carefully and removed promptly to avoid scarring, ideally monitoring weekly during the growing season as branches thicken.',
        timing: 'Late winter (February to March) before bud break, with careful removal by early summer (June) to prevent bark damage.',
        maturityStage: 'Start wiring once branches have sufficient lignification, generally after 2-3 years of growth.',
        notRecommended: false
      },
      {
        name: 'Repotting',
        description: 'Beech bonsai require repotting every 2-3 years in early spring before bud break to refresh the acidic, loose soil mix, ensuring good drainage and organic content. Careful root handling is necessary due to the species\' sensitivity, and repotting into a slightly larger pot can encourage root development but avoid overpotting to maintain bonsai proportions.',
        timing: 'Early spring (March) before bud break, when the tree is still dormant or just starting to grow.',
        maturityStage: 'Repotting should begin once the tree is established in bonsai culture, typically from 3 years onward.',
        notRecommended: false
      },
      {
        name: 'Root Pruning',
        description: 'Root pruning is essential during repotting to maintain a compact root system and promote fine root growth in Beech bonsai, which supports the slow-growing, sporadic back-budding habit. It should be moderate, avoiding excessive root loss that can stress the tree, and aim to balance root and shoot growth for health and vigor.',
        timing: 'Early spring (March) during repotting, before the main sap flow starts.',
        maturityStage: 'After the first repotting, usually from year 3 onwards.',
        notRecommended: false
      },
      {
        name: 'Defoliation',
        description: 'Full defoliation is not recommended for Beech bonsai due to its poor response, but partial defoliation by selectively removing the largest leaves at branch tips allows better light penetration and encourages inner bud development and a second flush of growth. This technique aids in leaf size reduction and improved ramification while minimizing stress.',
        timing: 'Late spring to early summer (May to June) when new leaves have fully expanded.',
        maturityStage: 'Apply partial defoliation from 4-5 years of age once the tree shows consistent vigor.',
        notRecommended: false
      },
      {
        name: 'Pinching',
        description: 'Pinching back new shoots in Beech bonsai during spring stimulates a second flush of growth and encourages inner ramification, important for this slow-growing species with sporadic back-budding. Leave the first 2-3 leaves on each shoot to maintain energy for development and avoid over-pinching which can weaken the tree.',
        timing: 'Spring (April to May) during active shoot growth, after initial bud break.',
        maturityStage: 'Begin pinching once the tree has established a good branch structure, generally 3-4 years old.',
        notRecommended: false
      },
      {
        name: 'Grafting',
        description: 'Grafting can be used on Beech bonsai to improve branch placement or add finer ramification, though it is technically demanding due to the species\' slow growth and sporadic bud activity. Approach with caution and use compatible scion material; whip grafting or approach grafting during active growth can be successful.',
        timing: 'Early spring (March to April) when sap flow begins, or late summer (August) in some cases.',
        maturityStage: 'Suitable for semi-mature trees with established trunks, typically over 5 years old.',
        notRecommended: false
      },
      {
        name: 'Jin (Deadwood Technique)',
        description: 'Creating jin on Beech bonsai is possible but should be executed carefully due to the smooth, relatively delicate bark and slower healing capacity. Use jin sparingly to add aged character, focusing on dead branches or stubs rather than fresh wood to avoid excessive stress.',
        timing: 'Late winter to early spring (February to March) when the tree is dormant.',
        maturityStage: 'Best performed on mature trees with well-developed trunks and branches, 7 years or older.',
        notRecommended: false
      },
      {
        name: 'Shari (Trunk Deadwood Technique)',
        description: 'Shari can be applied on Beech bonsai to expose sections of smooth grey bark for aesthetic appeal, but it must be minimal and carefully maintained to prevent decay, as Beech wood is not highly resistant to rot. Avoid large shari areas; small, subtle strips work best to complement the natural bark texture.',
        timing: 'Winter (December to February) during dormancy to reduce stress.',
        maturityStage: 'Recommended only on well-established mature specimens, typically 7+ years old.',
        notRecommended: false
      },
      {
        name: 'Nebari Development (Surface Roots)',
        description: 'Developing a strong nebari in Beech bonsai involves careful root pruning and training during repotting to encourage evenly spread surface roots, which is crucial given the species’ slow growth and tendency for sporadic back-budding. Surface roots should be gently exposed and styled early to create the characteristic stability and visual balance.',
        timing: 'During repotting in early spring (March), with gradual exposure over seasons.',
        maturityStage: 'Begin nebari development from the early training stages, around 2-3 years old.',
        notRecommended: false
      },
      {
        name: 'Carving',
        description: 'Carving on Beech bonsai is limited by the species’ slower healing and the smooth bark; it is best reserved for minor aesthetic enhancements and should be shallow to prevent damage. Aggressive carving increases risk of infection and decay, so it is generally avoided except in mature trees with good vigor.',
        timing: 'Winter (December to February) during dormancy to minimize stress.',
        maturityStage: 'Only for mature, vigorous trees, ideally older than 7 years.',
        notRecommended: false
      },
      {
        name: 'Air Layering',
        description: 'Air layering is an effective propagation technique for Beech bonsai to produce new specimens or improve branch placement, but requires careful monitoring due to the species’ slow rooting and sensitivity to moisture levels. Use moss and plastic wrap to maintain humidity and remove layers once roots are well established, usually after several months.',
        timing: 'Late spring to early summer (May to July) when growth is active to maximize rooting potential.',
        maturityStage: 'Suitable for semi-mature trees, generally from 4 years old onward.',
        notRecommended: false
      },
      {
        name: 'Fertilizing',
        description: 'Beech bonsai benefit from regular feeding during the growing season with a balanced fertilizer applied every 1-2 months or weekly liquid feeding to support slow growth and encourage ramification. During advanced techniques like partial defoliation or pinching, increase feeding frequency to support recovery and vigor.',
        timing: 'Spring through summer (March to September), avoiding late autumn and winter dormancy.',
        maturityStage: 'Start fertilizing from early growth stages, about 1 year old, increasing as the tree matures.',
        notRecommended: false
      },
      {
        name: 'Pest and Disease Management',
        description: 'Beech bonsai require vigilant monitoring for common pests like aphids and scale, especially during spring and summer, and fungal diseases favored by poor aeration. Preventive measures include proper placement with good airflow, regular inspection, and timely treatment with insecticidal soaps or fungicides when necessary.',
        timing: 'Regular checks from early spring through late summer, with treatment as needed.',
        maturityStage: 'Applicable at all stages, from seedlings to mature bonsai.',
        notRecommended: false
      },
      {
        name: 'Watering and Humidity Control',
        description: 'Watering Beech bonsai demands frequent attention, ensuring soil never dries out completely but avoiding waterlogging, typically checking moisture twice daily during active growth. The tree prefers outdoor environments with good aeration and moderate humidity; avoid placing in dry, indoor conditions as it must remain outdoors year-round.',
        timing: 'Year-round care with increased watering frequency in spring and summer; reduce in winter but do not let soil dry out.',
        maturityStage: 'Essential care from the earliest stages of bonsai cultivation.',
        notRecommended: false
      }
    ],
    images: {
      developmentStages: {
        early: '/bonsai_photos/placeholder/early.jpg',
        middle: '/bonsai_photos/placeholder/middle.jpg',
        mature: '/bonsai_photos/placeholder/mature.jpg'
      },
      seasons: {
        spring: '/bonsai_photos/placeholder/spring.jpg',
        summer: '/bonsai_photos/placeholder/summer.jpg',
        autumn: '/bonsai_photos/placeholder/autumn.jpg',
        winter: '/bonsai_photos/placeholder/winter.jpg'
      },
      styles: {},
      nature: {}
    },
    imageCredits: {}
  },
  {
    id: 'european-elm',
    scientificName: 'Ulmus minor',
    commonName: 'European Elm (Ulmus minor)',
    group: 'Various',
    temperatureMin: 9,
    temperatureMax: 2,
    sunExposure: 'Full sun',
    position: 'Indoor (can be outdoor in summer)',
    leafType: 'Deciduous',
    climate: 'Temperate',
    flowering: 'Pink flowers',
    nativeRegion: 'Chiefly found in Asia Minor and Iran in south Europe, and in the Baltic Islands of Oland and Gotland in the north. Also found in France, Spain, Italy, Greece, southern Russia, and Ukraine.',
    difficultyLevel: 'Beginner',
    category: 'Beginner',
    careTips: {
      general: '**Common Names:** Field Elm, European Elm. The species is deciduous. **Leaf Type:** Deciduous, with leaves 6 to 15 cm in length with double-toothed edges. Leaves on mature trees are smooth and glossy....',
      soilType: 'Well-draining bonsai soil mix',
      feeding: 'Regular fertilization during growing season',
      watering: 'Keep soil moderately moist, avoid overwatering'
    },
    bonsaiStyles: ['Informal Upright', 'Formal Upright', 'Slanting'],
    techniques: [
      {
        name: 'Pruning (Structural & Maintenance)',
        description: 'For European Elm, structural pruning is essential to develop its characteristic broom style with a balanced, spreading canopy. Maintenance pruning involves regular trimming of new shoots and pinching back vigorous growth to maintain compact foliage pads and encourage ramification. Avoid heavy pruning during late autumn to prevent stress before dormancy.',
        timing: 'Structural pruning is best done in early spring before bud break (February to March), while maintenance pruning and pinching can occur throughout the growing season (spring to early autumn).',
        maturityStage: 'Begin structural pruning once the tree has established a basic trunk and primary branches, typically after 2-3 years; maintenance pruning is ongoing from then.',
        notRecommended: false
      },
      {
        name: 'Wiring',
        description: 'European Elm branches are flexible and respond well to wiring, allowing shaping at various stages. Use aluminum or annealed copper wire, matching wire thickness to branch size to avoid scarring. Wiring can be applied anytime, but it is most effective during active growth when branches are pliable.',
        timing: 'Apply wiring from early spring through summer, avoiding late autumn or winter when branches are brittle.',
        maturityStage: 'Start wiring when branches are thick enough to hold shape but still flexible, usually after the first year of branch development.',
        notRecommended: false
      },
      {
        name: 'Repotting',
        description: 'Repotting European Elm every 2-3 years is critical to refresh soil and encourage healthy root development. Use a well-draining mix with neutral to slightly alkaline pH (5-6, avoiding over 7). Repotting should involve gentle root pruning, preserving as much root mass as possible to prevent stress.',
        timing: 'Early spring (March) just before bud break is optimal for repotting to minimize shock and promote recovery.',
        maturityStage: 'Begin repotting once the tree has established a root system in the bonsai pot, usually after 1-2 years in cultivation.',
        notRecommended: false
      },
      {
        name: 'Root Pruning',
        description: 'Root pruning during repotting helps maintain a compact root ball and encourages fibrous root growth for nutrient uptake. For Ulmus minor, avoid excessive root removal; prune only about one-third of the roots, focusing on thick, woody roots while retaining finer roots.',
        timing: 'Perform root pruning concurrently with repotting in early spring before active growth starts.',
        maturityStage: 'Appropriate once the tree is established in bonsai culture and ready for repotting, typically after 1-2 years.',
        notRecommended: false
      },
      {
        name: 'Defoliation',
        description: 'Partial defoliation can be used on European Elm to reduce leaf size and increase ramification, but full defoliation is often too stressful due to its deciduous nature and susceptibility to disease. Partial defoliation should be limited to healthy, vigorous trees and only on select branches.',
        timing: 'Perform partial defoliation in late spring or early summer after strong leaf development.',
        maturityStage: 'Only on mature, well-established bonsai with good vigor, generally after 4-5 years of development.',
        notRecommended: false
      },
      {
        name: 'Pinching',
        description: 'Pinching back new shoots throughout the growing season is an effective way to control growth and promote dense branching in European Elm. This technique helps maintain the broom style by preventing overly long shoots and encouraging back budding.',
        timing: 'Begin pinching in late spring and continue through summer as new shoots appear.',
        maturityStage: 'Start as soon as the tree begins active growth and produces new shoots, usually after the first year.',
        notRecommended: false
      },
      {
        name: 'Grafting',
        description: 'Grafting is occasionally used to replace damaged branches or improve branch ramification in European Elm but is generally not necessary due to the species’ vigorous natural branching. It requires skill and is better suited for advanced practitioners.',
        timing: 'Grafting is best done in early spring before sap flow intensifies, typically late winter to early spring (February to March).',
        maturityStage: 'Recommended on mature bonsai with established trunks and branches, usually after 3-4 years of development.',
        notRecommended: false
      },
      {
        name: 'Jin (Deadwood Technique)',
        description: 'Creating jin on European Elm is not typical as the species naturally has smooth bark and a youthful appearance; deadwood features are uncommon in its natural form. However, selective jin can be applied on older or damaged branches to add character, but should be done sparingly.',
        timing: 'Apply jin during late winter or early spring when the tree is dormant to reduce stress and allow healing.',
        maturityStage: 'Best on older trees with thick branches, at least 5 years or more.',
        notRecommended: false
      },
      {
        name: 'Shari (Trunk Deadwood Technique)',
        description: 'Shari is rarely used on European Elm as its natural bark is smooth and does not typically display deadwood features. Creating shari can weaken the tree and increase susceptibility to disease, so this technique is generally avoided unless simulating aged character on very old specimens.',
        timing: 'If attempted, late winter to early spring is preferable to minimize stress.',
        maturityStage: 'Only on very mature, healthy trees older than 8 years.',
        notRecommended: true
      },
      {
        name: 'Nebari Development (Surface Roots)',
        description: 'Developing a well-spread nebari is important to the aesthetic of European Elm bonsai, enhancing stability and visual balance. Encourage surface root growth by careful root pruning during repotting and positioning the tree slightly elevated in the pot to expose roots.',
        timing: 'Nebari development is ongoing but best focused during repotting in early spring.',
        maturityStage: 'Begin nebari development early, from juvenile stages (1-2 years).',
        notRecommended: false
      },
      {
        name: 'Carving',
        description: 'Carving is generally not recommended on European Elm as it can cause unnecessary stress and increase vulnerability to Dutch Elm Disease and pests. The species’ natural form does not lend itself well to heavy carving, which can damage living tissues.',
        timing: 'N/A due to general avoidance of the technique.',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Air Layering',
        description: 'Air layering is an effective propagation method for European Elm, allowing the creation of new bonsai specimens with established root systems. This technique works well in late spring to early summer when sap flow is active and healing will be faster.',
        timing: 'Late spring to early summer (May to June) is optimal for air layering to ensure good callus formation.',
        maturityStage: 'Suitable on semi-mature branches of healthy trees, usually after 2-3 years of growth.',
        notRecommended: false
      },
      {
        name: 'Fertilizing',
        description: 'European Elm benefits from balanced, slow-release fertilizers applied in spring to support healthy growth. Avoid high-nitrogen fertilizers to reduce risk of Dutch Elm Disease and excessive, weak growth. Older trees require less frequent feeding, typically once or twice annually.',
        timing: 'Apply fertilizer in early spring (March to April) during active growth; additional light feeding may be done mid-summer if needed.',
        maturityStage: 'Begin fertilizing once the tree is established in bonsai culture, generally after the first year.',
        notRecommended: false
      },
      {
        name: 'Pest and Disease Management',
        description: 'Regular monitoring and early intervention are essential to manage aphids, leaf hoppers, gall mites, and especially Dutch Elm Disease in European Elm bonsai. Use appropriate insecticidal soaps or oils and maintain tree vigor through proper care to reduce susceptibility.',
        timing: 'Ongoing year-round vigilance is needed, with increased monitoring during spring and summer when pests are most active.',
        maturityStage: 'Start as soon as the tree is in cultivation.',
        notRecommended: false
      },
      {
        name: 'Watering and Humidity Control',
        description: 'European Elm requires consistent watering during the growing season, allowing the topsoil to dry slightly between waterings. Misting leaves can help maintain humidity, especially if kept indoors during winter. Avoid waterlogging, as the species prefers well-draining soil.',
        timing: 'Water regularly from spring through autumn; reduce frequency in winter when dormant.',
        maturityStage: 'Necessary from seedling stage onward.',
        notRecommended: false
      }
    ],
    images: {
      developmentStages: {
        early: '/bonsai_photos/placeholder/early.jpg',
        middle: '/bonsai_photos/placeholder/middle.jpg',
        mature: '/bonsai_photos/placeholder/mature.jpg'
      },
      seasons: {
        spring: '/bonsai_photos/placeholder/spring.jpg',
        summer: '/bonsai_photos/placeholder/summer.jpg',
        autumn: '/bonsai_photos/placeholder/autumn.jpg',
        winter: '/bonsai_photos/placeholder/winter.jpg'
      },
      styles: {},
      nature: {}
    },
    imageCredits: {}
  },
  {
    id: 'bald-cypress',
    scientificName: 'Taxodium distichum',
    commonName: 'Bald Cypress (Taxodium distichum)',
    group: 'Various',
    temperatureMin: 10,
    temperatureMax: -10,
    sunExposure: 'Full sun',
    position: 'Indoor/Outdoor',
    leafType: 'Deciduous',
    climate: 'Temperate',
    flowering: 'Inconspicuous',
    nativeRegion: 'Southern states of the USA, Mexico, and Guatemala',
    difficultyLevel: 'Intermediate',
    category: 'Intermediate',
    careTips: {
      general: 'The Bald Cypress is a deciduous conifer, with soft, needle-shaped leaves that turn a spectacular rust-brown/auburn before falling in autumn. It is a very vigorous grower, making it suitable for all si...',
      soilType: 'Well-draining bonsai soil mix',
      feeding: 'Regular fertilization during growing season',
      watering: 'Keep soil moderately moist, avoid overwatering'
    },
    bonsaiStyles: ['Informal Upright', 'Formal Upright', 'Slanting'],
    techniques: [
      {
        name: 'Pruning (Structural & Maintenance)',
        description: 'Bald Cypress responds well to hard pruning performed in late winter when the tree is still dormant, which encourages prolific budding and fine ramification. Maintenance pruning during the growing season focuses on thinning excessively vigorous shoots to balance energy and maintain the desired silhouette.',
        timing: 'Late winter (February to early March) for structural pruning; light maintenance pruning during the growing season (spring to early autumn)',
        maturityStage: 'Begin structural pruning once the tree has established a primary branch framework, usually after 3-5 years',
        notRecommended: false
      },
      {
        name: 'Wiring',
        description: 'Due to the Bald Cypress’s rapid growth and relatively soft bark, wiring must be applied carefully and monitored closely to avoid bark damage. Guy wires are often preferred for shaping thick branches or trunks, while thin branches can be wired but require frequent checking and adjustment.',
        timing: 'Apply wiring in early spring after the buds begin swelling but before shoot elongation; monitor and adjust every 2-4 weeks during the growing season',
        maturityStage: 'Start wiring when the branches have enough lignification to hold shape but remain flexible enough to bend without snapping, generally after 2-3 years',
        notRecommended: false
      },
      {
        name: 'Repotting',
        description: 'Bald Cypress benefits from annual repotting in spring as new buds start to extend, which supports its vigorous root growth and maintains soil health. Use a well-draining but moisture-retentive soil mix to accommodate its thirstiness without waterlogging.',
        timing: 'Early spring (March to April), just before or as buds break dormancy',
        maturityStage: 'Begin repotting after the first year once the tree has established a strong root system',
        notRecommended: false
      },
      {
        name: 'Root Pruning',
        description: 'Root pruning should be performed annually during repotting to control root mass and stimulate fine root development. Care should be taken not to remove too many large roots at once, as Bald Cypress has a vigorous root system that supports its fast growth.',
        timing: 'During spring repotting (March to April)',
        maturityStage: 'After 1-2 years when the root system has developed sufficiently to tolerate pruning',
        notRecommended: false
      },
      {
        name: 'Defoliation',
        description: 'Defoliation is generally not recommended for Bald Cypress because it is a deciduous conifer with soft needles that can be stressed by complete leaf removal. Partial trimming or selective thinning of overly dense foliage may be safer to maintain vigor without reducing photosynthesis drastically.',
        timing: 'Not applicable; partial thinning can be done during early summer if necessary',
        maturityStage: 'Not recommended at any stage due to species sensitivity',
        notRecommended: true
      },
      {
        name: 'Pinching',
        description: 'Pinching new shoots during active growth helps control vigor and encourages denser branching in Bald Cypress. This technique is effective for maintaining ramification and shaping smaller branches without causing significant stress.',
        timing: 'Late spring through summer (May to August), during active shoot growth',
        maturityStage: 'Start pinching after the tree has developed a basic branch structure, around 2-3 years old',
        notRecommended: false
      },
      {
        name: 'Grafting',
        description: 'Grafting is occasionally used to repair damaged branches or to introduce desired cultivars of Bald Cypress, though it is not commonly necessary due to the species’ vigorous growth and ease of propagation from cuttings. Approach grafting with care to ensure strong union.',
        timing: 'Early spring (March), when the tree is coming out of dormancy',
        maturityStage: 'Recommended for mature bonsai (5+ years) or when repairing specific branch structures',
        notRecommended: false
      },
      {
        name: 'Jin (Deadwood Technique)',
        description: 'Jin work is well-suited for Bald Cypress to simulate natural weathering and enhance aged appearance. The species’ soft wood allows for relatively easy creation of deadwood features, but care must be taken to preserve the tree’s health and avoid excessive injury.',
        timing: 'Late winter to early spring, before sap flow intensifies',
        maturityStage: 'Best performed on older trees with thicker branches or trunks (5+ years)',
        notRecommended: false
      },
      {
        name: 'Shari (Trunk Deadwood Technique)',
        description: 'Shari can be used effectively on Bald Cypress to emphasize age and character, particularly on larger trunks. Because the species has a vigorous healing ability, the exposed deadwood can be treated and preserved to create striking visual interest.',
        timing: 'Late winter, before the onset of active growth',
        maturityStage: 'Recommended for mature bonsai with well-developed trunks (7+ years)',
        notRecommended: false
      },
      {
        name: 'Nebari Development (Surface Roots)',
        description: 'Developing a wide, stable nebari is important for Bald Cypress to convey strength and balance. Encouraging surface root growth through root pruning, careful repotting, and training can enhance nebari, which is especially prominent in Formal and Informal Upright styles.',
        timing: 'During spring repotting and annual root pruning (March to April)',
        maturityStage: 'Begin nebari development after 3 years when root system is established',
        notRecommended: false
      },
      {
        name: 'Carving',
        description: 'Carving techniques can be applied to Bald Cypress deadwood features (such as jins and shari) to simulate natural erosion and texture. The soft wood allows for detailed work but must be done carefully to avoid weakening structural integrity.',
        timing: 'Late winter or early spring, prior to rapid growth and sap flow',
        maturityStage: 'Suitable for mature bonsai with existing deadwood (5+ years)',
        notRecommended: false
      },
      {
        name: 'Air Layering',
        description: 'Air layering is an effective propagation method for Bald Cypress, enabling the creation of new bonsai material or branch thickening. The technique takes advantage of the species\' vigorous root growth and is best done on healthy, semi-mature branches.',
        timing: 'Late spring to early summer (May to July), when growth is active',
        maturityStage: 'Appropriate for semi-mature or mature trees (3+ years)',
        notRecommended: false
      },
      {
        name: 'Fertilizing',
        description: 'Regular balanced fertilization every one to two weeks from spring through autumn is essential to support Bald Cypress’s vigorous growth. Use a fertilizer with balanced NPK values, adjusting for seasonal growth patterns and avoiding excessive nitrogen late in the season to prevent weak wood.',
        timing: 'From early spring (March) to late autumn (October), every 1-2 weeks',
        maturityStage: 'Begin fertilizing as soon as the tree is actively growing, typically after the first year',
        notRecommended: false
      },
      {
        name: 'Pest and Disease Management',
        description: 'Bald Cypress is generally hardy but can suffer from common pests such as aphids, spider mites, and scale insects. Regular inspection and prompt treatment with appropriate insecticides or organic controls are important, especially during warm growing seasons.',
        timing: 'Inspect regularly from spring to autumn; treat immediately upon pest detection',
        maturityStage: 'All maturity stages require monitoring',
        notRecommended: false
      },
      {
        name: 'Watering and Humidity Control',
        description: 'Maintaining consistently moist soil is critical for Bald Cypress bonsai, as it is a very thirsty species. Avoid allowing the soil to dry out completely; however, permanent standing water is not necessary. High ambient humidity is beneficial but not mandatory if watering is adequate.',
        timing: 'Year-round, with increased attention during the growing season (spring to autumn)',
        maturityStage: 'Necessary at all stages of development',
        notRecommended: false
      }
    ],
    images: {
      developmentStages: {
        early: '/bonsai_photos/placeholder/early.jpg',
        middle: '/bonsai_photos/placeholder/middle.jpg',
        mature: '/bonsai_photos/placeholder/mature.jpg'
      },
      seasons: {
        spring: '/bonsai_photos/placeholder/spring.jpg',
        summer: '/bonsai_photos/placeholder/summer.jpg',
        autumn: '/bonsai_photos/placeholder/autumn.jpg',
        winter: '/bonsai_photos/placeholder/winter.jpg'
      },
      styles: {},
      nature: {}
    },
    imageCredits: {}
  },
  {
    id: 'larch',
    scientificName: 'Larix decidua',
    commonName: 'Larch (Larix decidua)',
    group: 'Various',
    temperatureMin: -20,
    temperatureMax: -20,
    sunExposure: 'Full sun',
    position: 'Outdoor',
    leafType: 'Deciduous',
    climate: 'Temperate',
    flowering: 'Inconspicuous',
    nativeRegion: 'Central and Southern Europe (Alps and Carpathians)',
    difficultyLevel: 'Intermediate',
    category: 'Intermediate',
    careTips: {
      general: 'Deciduous conifer (loses needles in autumn). Popular for quickly thickening trunks, flaky bark, and fine ramification in winter. Repotting is difficult and should be done in the depths of winter (Janu...',
      soilType: 'well-draining, standard bonsai soil mix. fertilizing: high nitrogen feed in early spring to force vigorous growth, reduced for finished trees. low-nit',
      feeding: 'Regular fertilization during growing season',
      watering: 'keep evenly moist; very thirsty in summer. use rainwater or ericaceous fertilizer in hard-water areas. soil: well-draining, standard bonsai soil mix.'
    },
    bonsaiStyles: ['Informal Upright', 'Formal Upright', 'Slanting'],
    techniques: [
      {
        name: 'Pruning (Structural & Maintenance)',
        description: 'Structural pruning on Larix decidua is best done in late winter or autumn when the tree is dormant or just before bud break, allowing clear visibility of branch structure without foliage. Maintenance pruning involves removing overly vigorous shoots and cutting back long shoots in autumn to maintain ramification and encourage a dense branch structure, vital for this fast-growing deciduous conifer.',
        timing: 'Late winter (January/February) or autumn (October/November) during dormancy or just before bud break',
        maturityStage: 'Begin structural pruning once the tree has established a basic framework, typically from 3-5 years',
        notRecommended: false
      },
      {
        name: 'Wiring',
        description: 'Wiring Larix decidua is most effective in early spring when the tree is leafless, allowing precise shaping without needle interference. Since branches thicken rapidly during the growing season, wires should be checked regularly and removed or adjusted to prevent scarring or damage.',
        timing: 'Early spring (March), when bare of needles',
        maturityStage: 'Can start from young saplings once primary branches have developed, around 2-3 years',
        notRecommended: false
      },
      {
        name: 'Repotting',
        description: 'Repotting Larix decidua is challenging due to its sensitive root system and should only be done during full dormancy to minimize stress. The best window is mid-winter (January) or just before/after bud break to ensure quick recovery. Avoid bare-rooting or removing too much root mass to prevent decline.',
        timing: 'Mid-winter (January), or just before/after buds open (early spring)',
        maturityStage: 'Begin repotting carefully from 3-4 years when the root system is established',
        notRecommended: false
      },
      {
        name: 'Root Pruning',
        description: 'Root pruning for Larix decidua should be minimal and gentle, performed only during repotting in dormancy to avoid excessive stress. Heavy root pruning or bare-rooting is not recommended because the species is sensitive to root loss and may suffer from decline or dieback.',
        timing: 'Mid-winter (January) during repotting',
        maturityStage: 'Once the tree has a strong root system, typically after 3-4 years',
        notRecommended: false
      },
      {
        name: 'Defoliation',
        description: 'Defoliation is not suitable for Larix decidua because it is a deciduous conifer with delicate needles that naturally drop in autumn. Removing needles prematurely can weaken the tree and disrupt its natural growth cycle.',
        timing: 'Not applicable',
        maturityStage: 'Not applicable',
        notRecommended: true
      },
      {
        name: 'Pinching',
        description: 'Pinching new shoots during the vigorous summer growth period helps control length and encourages back budding and finer ramification in Larix decidua. This technique complements autumn pruning by maintaining compact growth without overly stressing the tree.',
        timing: 'Summer (June to August), during active growth',
        maturityStage: 'Effective from young saplings onwards (2+ years) to guide ramification',
        notRecommended: false
      },
      {
        name: 'Grafting',
        description: 'Grafting Larix decidua is possible but generally reserved for advanced bonsai artists seeking to improve branch placement or introduce specific characteristics. It should be performed in early spring before sap flow intensifies to ensure successful union.',
        timing: 'Early spring (March), before bud break',
        maturityStage: 'Recommended for mature trees (5+ years) or advanced practitioners',
        notRecommended: false
      },
      {
        name: 'Jin (Deadwood Technique)',
        description: 'Creating jin on Larix decidua takes advantage of its naturally flaky bark and rapid healing. Deadwood branches can be stripped to create striking jins, ideally during mid to late summer when sap flow is active, allowing the wood to dry and heal quickly.',
        timing: 'Mid to late summer (July to August), during active growth',
        maturityStage: 'Suitable for mature specimens with developed branches (5+ years)',
        notRecommended: false
      },
      {
        name: 'Shari (Trunk Deadwood Technique)',
        description: 'Shari can be applied to Larix decidua to highlight its textured bark and aged appearance, but should be done cautiously to avoid excessive damage. The best time is summer when the tree is actively growing to promote callusing and healing of exposed wood.',
        timing: 'Summer (June to August), during active sap flow',
        maturityStage: 'Appropriate for mature trees with thick trunks (7+ years)',
        notRecommended: false
      },
      {
        name: 'Nebari Development (Surface Roots)',
        description: 'Larix decidua develops attractive nebari with patience and root training. Encouraging surface roots during repotting by pruning deeper roots and positioning the tree slightly raised in the soil helps develop a strong and even root spread over years.',
        timing: 'During repotting in mid-winter (January)',
        maturityStage: 'Begin nebari development early, from 2-3 years onwards',
        notRecommended: false
      },
      {
        name: 'Carving',
        description: 'Carving on Larix decidua can enhance deadwood features but must be done with precision due to the species’ sensitive sapwood. Performing carving in summer maximizes healing, and treated deadwood should be sealed with lime sulfur to prevent decay.',
        timing: 'Summer (June to August), during active growth',
        maturityStage: 'Recommended on mature trees with established deadwood (7+ years)',
        notRecommended: false
      },
      {
        name: 'Air Layering',
        description: 'Air layering Larix decidua is effective for propagation or creating new bonsai from selected branches. Best performed in late spring or early summer when sap flow is strong to encourage root development.',
        timing: 'Late spring to early summer (May to June)',
        maturityStage: 'Suitable for semi-mature to mature branches (3+ years)',
        notRecommended: false
      },
      {
        name: 'Fertilizing',
        description: 'Larix decidua requires a high nitrogen fertilizer in early spring to promote vigorous shoot growth, followed by reduced feeding as the season progresses. From late summer onwards, use low nitrogen fertilizer to strengthen the tree for winter dormancy and needle drop.',
        timing: 'High nitrogen: early spring (March to April); low nitrogen: late summer to autumn (August to October)',
        maturityStage: 'Begin fertilizing established trees from 2 years onwards',
        notRecommended: false
      },
      {
        name: 'Pest and Disease Management',
        description: 'Larix decidua is generally hardy but can be susceptible to aphids, spider mites, and fungal issues when stressed. Regular inspection during active growth periods and maintaining good air circulation reduces risks; treat infestations promptly with appropriate organic or chemical controls.',
        timing: 'Monitor throughout growing season (spring to autumn)',
        maturityStage: 'All stages',
        notRecommended: false
      },
      {
        name: 'Watering and Humidity Control',
        description: 'Larix decidua is very thirsty in summer and requires evenly moist soil, preferably irrigated with rainwater or soft water in hard-water areas to prevent needle damage. Avoid waterlogging by using well-draining soil and ensure outdoor placement with sufficient humidity, especially during heat waves.',
        timing: 'Year-round; increased watering in summer (June to August)',
        maturityStage: 'All stages',
        notRecommended: false
      }
    ],
    images: {
      developmentStages: {
        early: '/bonsai_photos/placeholder/early.jpg',
        middle: '/bonsai_photos/placeholder/middle.jpg',
        mature: '/bonsai_photos/placeholder/mature.jpg'
      },
      seasons: {
        spring: '/bonsai_photos/placeholder/spring.jpg',
        summer: '/bonsai_photos/placeholder/summer.jpg',
        autumn: '/bonsai_photos/placeholder/autumn.jpg',
        winter: '/bonsai_photos/placeholder/winter.jpg'
      },
      styles: {},
      nature: {}
    },
    imageCredits: {}
  },
  {
    id: 'norway-spruce',
    scientificName: 'Picea abies',
    commonName: 'Norway Spruce (Picea abies)',
    group: 'Various',
    temperatureMin: 10,
    temperatureMax: 30,
    sunExposure: 'Full sun',
    position: 'Indoor',
    leafType: 'Evergreen Conifer',
    climate: 'Temperate',
    flowering: 'Inconspicuous',
    nativeRegion: 'Northern, Central, and Eastern Europe (including the European Alps, Balkan mountains, and Carpathians, extending north to Scandinavia) [2, 3].',
    difficultyLevel: 'Intermediate',
    category: 'Intermediate',
    careTips: {
      general: '**Bonsai Styles:** Suitable for all styles except Broom, and for all sizes, with small sizes best reserved for dwarf varieties [5]. **Dormancy:** Requires a period of winter dormancy and cannot be cul...',
      soilType: 'Well-draining bonsai soil mix',
      feeding: 'Regular fertilization during growing season',
      watering: 'Keep soil moderately moist, avoid overwatering'
    },
    bonsaiStyles: ['Informal Upright', 'Formal Upright', 'Slanting'],
    techniques: [
      {
        name: 'Pruning (Structural & Maintenance)',
        description: 'Norway Spruce requires careful pruning to maintain its conical shape and encourage interior branching. Structural pruning should focus on removing crossing or inward-growing branches during early spring, while maintenance pruning involves pinching back new shoots once they extend 2-3 cm, leaving 4-5 needle clusters to promote backbudding. Avoid heavy pruning on old wood as Norway Spruce seldom backbuds there.',
        timing: 'Structural pruning is best done in early spring before bud break; maintenance pruning (pinching) is done during active growth in late spring to summer.',
        maturityStage: 'Begin structural pruning once the tree has developed a stable branch structure, typically after 3-4 years; maintenance pruning can start earlier as soon as shoots develop.',
        notRecommended: false
      },
      {
        name: 'Wiring',
        description: 'Wiring Norway Spruce is challenging due to its flexible branches that tend to spring back after wiring removal. Wires should be applied carefully to avoid damage and left on longer than with other species, often requiring re-wiring to maintain branch position. Wiring is most effective on younger, more pliable branches; avoid wiring thick branches as the bark is fragile.',
        timing: 'Best done in late spring to early summer when branches are actively growing and flexible.',
        maturityStage: 'Start wiring once branches have sufficient length and flexibility, generally from the second or third growing season onward.',
        notRecommended: false
      },
      {
        name: 'Repotting',
        description: 'Repotting Norway Spruce should only be done when soil percolation is poor or the substrate has decomposed, rather than on a fixed schedule. When repotting, preserve a portion of the root ball to ensure survival and avoid excessive root disturbance. Use a well-draining, slightly acidic soil mix to maintain root health.',
        timing: 'Early spring before bud break or late summer to early autumn are optimal times for repotting.',
        maturityStage: 'Begin repotting young trees from 3-4 years old when rootbound or soil conditions require it.',
        notRecommended: false
      },
      {
        name: 'Root Pruning',
        description: 'Root pruning should be done carefully to retain a strong root ball, as Norway Spruce is sensitive to excessive root disturbance. When repotting, prune about one-third of the roots to encourage fine root growth without compromising stability. Avoid root pruning during dormancy or heat stress periods.',
        timing: 'Perform root pruning during repotting in early spring or late summer/early autumn.',
        maturityStage: 'Start root pruning when trees are established and being repotted, typically after 3-4 years.',
        notRecommended: false
      },
      {
        name: 'Defoliation',
        description: 'Defoliation is not recommended for Norway Spruce as it is a conifer with needle leaves, and removing foliage can stress the tree and reduce vigor. Norway Spruce does not respond well to full or partial leaf removal, which can lead to dieback or poor recovery.',
        timing: 'Not applicable.',
        maturityStage: 'Not applicable.',
        notRecommended: true
      },
      {
        name: 'Pinching',
        description: 'Pinching new shoots once they have extended 2-3 cm is essential for Norway Spruce to maintain ramification and encourage interior needle growth. Leave 4-5 needle clusters on each new shoot to stimulate backbudding, as this species does not backbud readily on old wood.',
        timing: 'During the active growing season, from late spring through summer.',
        maturityStage: 'Begin pinching as soon as shoots develop, from the first growing season onward.',
        notRecommended: false
      },
      {
        name: 'Grafting',
        description: 'Grafting Norway Spruce can be used to improve ramification or repair damaged branches but is generally challenging due to slow callus formation and poor backbudding on older wood. Scion wood should be taken from vigorous, healthy material, and grafts performed in early spring for best success.',
        timing: 'Early spring, just before bud break.',
        maturityStage: 'Suitable once the tree or rootstock is at least 2-3 years old and healthy.',
        notRecommended: false
      },
      {
        name: 'Jin (Deadwood Technique)',
        description: 'Creating jins on Norway Spruce can add dramatic deadwood features, but care must be taken due to the species’ relatively soft bark and resinous wood. Deadwood areas should be treated to prevent rot, and this technique is best applied to mature specimens to enhance character.',
        timing: 'Late summer to early autumn when the tree is actively growing and can compartmentalize wounds efficiently.',
        maturityStage: 'Recommended for mature trees at least 5 years old with well-developed trunks and branches.',
        notRecommended: false
      },
      {
        name: 'Shari (Trunk Deadwood Technique)',
        description: 'Shari enhances the aged appearance of Norway Spruce by exposing deadwood on the trunk; however, it should be done cautiously due to the species’ tendency to produce resin that can inhibit drying. Proper sealing and protection of the deadwood are necessary to prevent decay.',
        timing: 'Best performed in late summer or early autumn when sap flow is reduced but the tree is still growing.',
        maturityStage: 'Suitable on older specimens with thick trunks, typically older than 7 years.',
        notRecommended: false
      },
      {
        name: 'Nebari Development (Surface Roots)',
        description: 'Developing a strong nebari on Norway Spruce involves careful root pruning and training during repotting to encourage radial root spread near the soil surface. The species naturally produces a fibrous root system which can be guided to create an aesthetically pleasing nebari over several years.',
        timing: 'During repotting in early spring or late summer when root growth is active.',
        maturityStage: 'Start nebari development from early stages, around 2-3 years old.',
        notRecommended: false
      },
      {
        name: 'Carving',
        description: 'Carving on Norway Spruce is possible but must be done with caution due to its soft wood and resin production which can complicate drying and preservation. Use sharp tools and apply wood hardeners or preservatives to carved areas to maintain structural integrity.',
        timing: 'Late summer to early autumn when the tree is growing actively to enhance wound healing.',
        maturityStage: 'Recommended for mature trees with thick trunks and branches, generally over 5 years old.',
        notRecommended: false
      },
      {
        name: 'Air Layering',
        description: 'Air layering Norway Spruce can be used to propagate new trees or create new branches but is moderately difficult due to resin exudation and slow root formation. Use careful wound preparation and maintain moisture consistently during the layering process.',
        timing: 'Late spring to early summer when sap flow is active.',
        maturityStage: 'Suitable on semi-mature branches or trunks from 3-4 years onward.',
        notRecommended: false
      },
      {
        name: 'Fertilizing',
        description: 'Norway Spruce benefits from heavy fertilization during the growing season to encourage robust growth and needle development. Organic fertilizers applied weekly or bi-weekly from spring through early autumn help maintain vigor; lighter feeding can be done for refinement later in the season.',
        timing: 'From early spring (bud break) through late summer; reduce or stop feeding in winter dormancy.',
        maturityStage: 'Start fertilizing once the tree has established roots and leaf development, usually after first year.',
        notRecommended: false
      },
      {
        name: 'Pest and Disease Management',
        description: 'Norway Spruce is susceptible to common conifer pests such as aphids, spider mites, and fungal diseases like needle cast. Regular inspection and maintaining optimal cultural conditions, including good air circulation and watering practices, reduce risk. Use species-appropriate treatments promptly to avoid spread.',
        timing: 'Year-round monitoring, with increased vigilance during warm growing seasons.',
        maturityStage: 'Necessary at all stages of maturity.',
        notRecommended: false
      },
      {
        name: 'Watering and Humidity Control',
        description: 'Consistent watering is critical for Norway Spruce bonsai; water thoroughly as soon as the top half-inch of soil dries during the growing season, which may be daily. In winter, reduce watering but never allow the root ball to dry out completely. Maintaining ambient humidity helps prevent needle desiccation.',
        timing: 'Daily monitoring in spring and summer; reduced but regular watering in winter dormancy.',
        maturityStage: 'Essential at all stages from seedling to mature bonsai.',
        notRecommended: false
      }
    ],
    images: {
      developmentStages: {
        early: '/bonsai_photos/placeholder/early.jpg',
        middle: '/bonsai_photos/placeholder/middle.jpg',
        mature: '/bonsai_photos/placeholder/mature.jpg'
      },
      seasons: {
        spring: '/bonsai_photos/placeholder/spring.jpg',
        summer: '/bonsai_photos/placeholder/summer.jpg',
        autumn: '/bonsai_photos/placeholder/autumn.jpg',
        winter: '/bonsai_photos/placeholder/winter.jpg'
      },
      styles: {},
      nature: {}
    },
    imageCredits: {}
  },
  {
    id: 'cedar-of-lebanon',
    scientificName: 'Cedrus libani',
    commonName: 'Cedar of Lebanon (Cedrus libani)',
    group: 'Various',
    temperatureMin: -25,
    temperatureMax: -25,
    sunExposure: 'Full sun',
    position: 'Indoor (can be outdoor in summer)',
    leafType: 'Evergreen Conifer',
    climate: 'Mediterranean',
    flowering: 'Inconspicuous',
    nativeRegion: 'Mountains of Lebanon, Syria, and Turkey',
    difficultyLevel: 'Expert',
    category: 'Advanced',
    careTips: {
      general: 'Majestic evergreen conifer with distinctive horizontal branching and dark green needles in clusters. Slow-growing and long-lived. Develops thick, furrowed bark with age. Requires patience and experien...',
      soilType: 'well-draining, slightly alkaline soil preferred. feeding: moderate feeding spring through autumn, reduce in winter. positioning: outdoor species, need',
      feeding: 'moderate feeding spring through autumn, reduce in winter. positioning: outdoor species, needs cold winter dormancy.',
      watering: 'moderate watering, allow soil to dry slightly between waterings. avoid overwatering. soil: well-draining, slightly alkaline soil preferred. feeding: m'
    },
    bonsaiStyles: ['Informal Upright', 'Formal Upright', 'Slanting'],
    techniques: [
      {
        name: 'Pruning (Structural & Maintenance)',
        description: 'For Cedar of Lebanon, structural pruning focuses on maintaining the characteristic horizontal branching and open canopy. Remove inward-growing or crossing branches to preserve the tree’s majestic form, and trim back overly vigorous shoots to balance growth while respecting the slow growth habit.',
        timing: 'Late winter to early spring before bud break (February to March)',
        maturityStage: 'Begin after the tree has established a strong primary structure, typically 3-5 years',
        notRecommended: false
      },
      {
        name: 'Wiring',
        description: 'Wiring must be done with great care on Cedrus libani due to its brittle branches; use soft aluminum or annealed copper wire and apply gently to avoid breakage. Wiring is best used to shape primary branches and maintain the iconic horizontal tiered structure without forcing tight bends.',
        timing: 'Mid spring to early summer (April to June), when branches are more flexible but before hardened off',
        maturityStage: 'After initial structural pruning, usually 3-5 years old',
        notRecommended: false
      },
      {
        name: 'Repotting',
        description: 'Repotting should be conducted with caution, using well-draining, slightly alkaline bonsai soil to accommodate the species’ preference. Given its slow growth and sensitivity to root disturbance, repotting intervals can be extended to 3-5 years depending on root development.',
        timing: 'Early spring (March to April), just before active growth begins',
        maturityStage: 'When the tree is actively growing in its pot, typically after 2 years of establishment',
        notRecommended: false
      },
      {
        name: 'Root Pruning',
        description: 'Root pruning is essential to maintain health and size control but should be conservative due to the slow recovery rate of Cedrus libani. Focus on trimming only fibrous roots while preserving the thick, structural roots to encourage nebari development.',
        timing: 'During repotting, early spring before growth resumes',
        maturityStage: 'Starting from young nursery stock (2-3 years) and continuing cautiously as the tree matures',
        notRecommended: false
      },
      {
        name: 'Defoliation',
        description: 'Defoliation is not recommended for Cedar of Lebanon due to its needle structure and slow growth; removing needles can stress the tree and negatively impact vigor and photosynthesis.',
        timing: 'N/A',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Pinching',
        description: 'Pinching new shoots in late spring and summer helps maintain the compact, layered branch structure characteristic of Cedrus libani, promoting back-budding and finer ramification within the limits of its slow growth rate.',
        timing: 'Late spring through summer (May to August)',
        maturityStage: 'From juvenile stages onward (2-3 years), continuing throughout growth seasons',
        notRecommended: false
      },
      {
        name: 'Grafting',
        description: 'Grafting is occasionally used to improve branch placement or replace damaged sections, but due to the species’ slow growth and thick bark, it requires advanced skill and patience to achieve successful union.',
        timing: 'Late winter to early spring before sap flow (February to March)',
        maturityStage: 'After developing a stable rootstock and trunk, typically 5+ years',
        notRecommended: false
      },
      {
        name: 'Jin (Deadwood Technique)',
        description: 'Creating jin on Cedar of Lebanon enhances the aged, rugged appearance but must be done carefully to avoid damaging live tissue, as the species’ thick bark and slow healing require patience for proper callusing.',
        timing: 'Late autumn or early winter when growth slows (October to November)',
        maturityStage: 'Mature trees with well-developed trunks, usually 8+ years',
        notRecommended: false
      },
      {
        name: 'Shari (Trunk Deadwood Technique)',
        description: 'Shari accentuates the ancient look of Cedrus libani by exposing weathered wood on the trunk; it should be applied conservatively because the species’ slow growth delays wound closure and may increase vulnerability to pests or rot.',
        timing: 'Late autumn before dormancy (October to November)',
        maturityStage: 'Well-developed, mature bonsai with thick trunks, generally 8+ years',
        notRecommended: false
      },
      {
        name: 'Nebari Development (Surface Roots)',
        description: 'Nebari development is critical for the visual stability of Cedar of Lebanon bonsai; encouraging surface root flare by selective root pruning and positioning during early repotting stages enhances the majestic presence of the tree.',
        timing: 'During early repotting, typically in early spring (March to April)',
        maturityStage: 'Young trees, from nursery stage to 3-5 years',
        notRecommended: false
      },
      {
        name: 'Carving',
        description: 'Carving techniques can be used to accentuate deadwood features and create dramatic effects but must be approached with caution given the species’ slow healing and thick bark; use sharp tools and finish with lime sulfur to prevent decay.',
        timing: 'Late autumn or winter during dormancy (October to February)',
        maturityStage: 'Mature specimens with developed deadwood, 8+ years',
        notRecommended: false
      },
      {
        name: 'Air Layering',
        description: 'Air layering is an effective propagation method for Cedrus libani but requires patience as root formation is slow; ensure wounds are kept moist and shaded while maintaining good hygiene to prevent infection.',
        timing: 'Late spring to early summer when active growth is underway (May to June)',
        maturityStage: 'Healthy, vigorous trees at least 5 years old',
        notRecommended: false
      },
      {
        name: 'Fertilizing',
        description: 'Moderate fertilizing with balanced, slow-release fertilizers during the growing season supports the slow, steady growth of Cedar of Lebanon; reduce feeding in winter to respect dormancy and prevent salt build-up in soil.',
        timing: 'Spring through autumn (March to October)',
        maturityStage: 'From early juvenile stages onward',
        notRecommended: false
      },
      {
        name: 'Pest and Disease Management',
        description: 'Cedar of Lebanon is relatively resilient but can be susceptible to aphids, spider mites, and fungal infections; regular inspection, proper watering, and good airflow in outdoor settings reduce risk, with targeted organic treatments used when necessary.',
        timing: 'Year-round vigilance, with increased monitoring in warm, humid months (spring and summer)',
        maturityStage: 'All maturity stages',
        notRecommended: false
      },
      {
        name: 'Watering and Humidity Control',
        description: 'Watering should be moderate, allowing soil to dry slightly between sessions; overwatering can cause root rot, while drought tolerance improves once established. Humidity control is naturally managed outdoors, ensuring adequate air circulation and avoiding stagnant moisture.',
        timing: 'Adjust frequency seasonally: more frequent in summer, less in winter',
        maturityStage: 'All stages, with increased care during establishment phase (first 2-3 years)',
        notRecommended: false
      }
    ],
    images: {
      developmentStages: {
        early: '/bonsai_photos/placeholder/early.jpg',
        middle: '/bonsai_photos/placeholder/middle.jpg',
        mature: '/bonsai_photos/placeholder/mature.jpg'
      },
      seasons: {
        spring: '/bonsai_photos/placeholder/spring.jpg',
        summer: '/bonsai_photos/placeholder/summer.jpg',
        autumn: '/bonsai_photos/placeholder/autumn.jpg',
        winter: '/bonsai_photos/placeholder/winter.jpg'
      },
      styles: {},
      nature: {}
    },
    imageCredits: {}
  },
  {
    id: 'coast-redwood',
    scientificName: 'Sequoia sempervirens',
    commonName: 'Coast Redwood (Sequoia sempervirens)',
    group: 'Various',
    temperatureMin: 0,
    temperatureMax: 32,
    sunExposure: 'Partial shade',
    position: 'Outdoor',
    leafType: 'Evergreen Conifer',
    climate: 'Temperate',
    flowering: 'Yes',
    nativeRegion: 'Coastal regions of northern California and Oregon, USA',
    difficultyLevel: 'Beginner',
    category: 'Beginner',
    careTips: {
      general: '**Temperature:** Does not tolerate freezing temperatures (below 0°C/32°F) and must be protected from frost, especially in a container. It is a vigorous grower, making it suitable for larger bonsai sty...',
      soilType: 'Well-draining bonsai soil mix',
      feeding: 'Regular fertilization during growing season',
      watering: 'Keep soil moderately moist, avoid overwatering'
    },
    bonsaiStyles: ['Informal Upright', 'Formal Upright', 'Slanting'],
    techniques: [
      {
        name: 'Pruning (Structural & Maintenance)',
        description: 'Coast Redwood responds well to both structural and maintenance pruning due to its vigorous growth and ability to sprout new buds near scars. Structural pruning should focus on removing overly long internodes and unwanted branches in early spring before bud break to maintain desired form, while maintenance pruning can be done throughout the growing season to refine shape and encourage ramification.',
        timing: 'Early spring before new buds open for structural pruning; light maintenance pruning can be done throughout the growing season (spring to early autumn).',
        maturityStage: 'Begin pruning as soon as the young tree develops a strong primary branch structure, typically after the first year of growth.',
        notRecommended: false
      },
      {
        name: 'Wiring',
        description: 'Due to brittle branches, wiring Coast Redwood requires careful handling; use gentle bends or prefer guy wires to position branches without breaking. Wiring should be applied when branches are semi-flexible in early spring, and removed promptly to avoid wire marks as the tree grows quickly.',
        timing: 'Early spring when branches are still flexible but before vigorous growth accelerates.',
        maturityStage: 'Once branches have developed sufficient thickness to hold shape, usually after 2-3 years of growth.',
        notRecommended: false
      },
      {
        name: 'Repotting',
        description: 'Repot Coast Redwood every two years to refresh the moisture-retentive but well-draining soil, typically a blend of Akadama, lava rock, and pumice. This frequent repotting is necessary due to its vigorous root growth and preference for moist conditions, preventing root-bound stress and promoting healthy development.',
        timing: 'Early spring before bud break, in a frost-free environment.',
        maturityStage: 'From juvenile stages onward, ideally starting after the first growing season.',
        notRecommended: false
      },
      {
        name: 'Root Pruning',
        description: 'Root pruning should accompany repotting every two years to manage the extensive root system, removing thick, woody roots while preserving fine feeder roots to maintain moisture uptake. This encourages a compact root ball suitable for bonsai culture while avoiding root rot in moist conditions.',
        timing: 'Early spring during repotting, before active growth begins.',
        maturityStage: 'After initial establishment, typically from year 2 onwards.',
        notRecommended: false
      },
      {
        name: 'Defoliation',
        description: 'Defoliation is not recommended for Coast Redwood as it is an evergreen conifer with needle and scale-like foliage; removing foliage can stress the tree and impair photosynthesis. The species does not naturally shed leaves seasonally, so this technique does not align with its growth habits.',
        timing: 'N/A',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Pinching',
        description: 'Pinching new shoots on Coast Redwood during the growing season effectively controls vigorous growth and promotes finer branching. Pinching should be done once new shoots have extended 2-3 cm, encouraging back budding and denser foliage pads.',
        timing: 'Late spring through summer during active growth periods.',
        maturityStage: 'Once the bonsai has established healthy seasonal growth, generally after the first year.',
        notRecommended: false
      },
      {
        name: 'Grafting',
        description: 'Grafting is rarely needed for Coast Redwood bonsai due to its strong natural growth and easy sprouting of new buds near scars. However, it can be used to repair damage or improve branch placement if necessary, ideally performed in early spring when sap flow begins.',
        timing: 'Early spring before bud break.',
        maturityStage: 'Once a healthy rootstock and scion are available, typically after 2-3 years.',
        notRecommended: false
      },
      {
        name: 'Jin (Deadwood Technique)',
        description: 'Creating jin on Coast Redwood can add character but should be done cautiously due to the species’ vigorous healing response and brittleness of branches. Deadwood should be created on older, thicker branches or stubs, preferably in late summer to early autumn to allow wound callusing before winter.',
        timing: 'Late summer to early autumn under warm, dry conditions.',
        maturityStage: 'Mature bonsai with well-developed trunk and branches, generally after 5 years.',
        notRecommended: false
      },
      {
        name: 'Shari (Trunk Deadwood Technique)',
        description: 'Shari can be applied to Coast Redwood to simulate age and ruggedness, but given the species’ vigorous wound healing, the exposed deadwood areas may close quickly. Careful carving combined with treatments to preserve deadwood is required, ideally performed on mature specimens with thick trunks.',
        timing: 'Late summer to early autumn when the tree can heal wounds effectively.',
        maturityStage: 'Only on mature bonsai with substantial trunk girth, generally after 7+ years.',
        notRecommended: false
      },
      {
        name: 'Nebari Development (Surface Roots)',
        description: 'Developing a strong nebari is important for Coast Redwood as it supports its vigorous growth and large size in bonsai form. Encourage surface root development by careful root pruning and positioning during repotting; root flare should be gradually exposed by soil removal over successive repotting cycles.',
        timing: 'During repotting in early spring.',
        maturityStage: 'From juvenile stages onward, ideally beginning after the first root pruning sessions.',
        notRecommended: false
      },
      {
        name: 'Carving',
        description: 'Carving can enhance character in Coast Redwood bonsai but must consider the species’ vigorous healing and brittle branches. Use sharp tools and minimal carving to avoid unnecessary damage, focusing on older wood with slower healing to maintain deadwood features longer.',
        timing: 'Late summer to early autumn for optimal healing conditions.',
        maturityStage: 'On mature bonsai with thick wood, typically after 5 years.',
        notRecommended: false
      },
      {
        name: 'Air Layering',
        description: 'Air layering is an effective propagation method for Coast Redwood, allowing the development of new plants with established root systems. Perform in late spring or early summer when the tree is actively growing to ensure rapid root formation in the sphagnum moss-wrapped girdled branch.',
        timing: 'Late spring to early summer during active growth and warm temperatures.',
        maturityStage: 'On semi-mature to mature branches, generally after 3+ years of growth.',
        notRecommended: false
      },
      {
        name: 'Fertilizing',
        description: 'Monthly fertilization during the growing season (spring through early autumn) with a balanced bonsai fertilizer supports Coast Redwood’s vigorous growth and dense foliage development. Time-release granules are recommended for consistent nutrient supply without risk of overfeeding in moist soil conditions.',
        timing: 'Monthly from early spring to early autumn.',
        maturityStage: 'From early seedling stage onward, increasing frequency as the tree grows.',
        notRecommended: false
      },
      {
        name: 'Pest and Disease Management',
        description: 'Regular inspection for common pests such as spider mites and aphids is crucial for Coast Redwood due to its outdoor cultivation and moisture-rich environment. Use organic insecticides or horticultural oils and ensure good air circulation to prevent fungal diseases, especially root rot from excessive moisture.',
        timing: 'Ongoing year-round monitoring with intensified checks in late spring and summer.',
        maturityStage: 'At all stages of growth.',
        notRecommended: false
      },
      {
        name: 'Watering and Humidity Control',
        description: 'Coast Redwood requires consistently moist soil without waterlogging; watering should be frequent, especially in warm weather, using well-draining but moisture-retentive soil. Maintain ambient humidity with occasional misting during dry periods, but avoid foliage saturation in hot sun to prevent needle burn.',
        timing: 'Daily to several times per week depending on temperature and season; increased frequency during hot summer months.',
        maturityStage: 'All growth stages require attentive watering and humidity management.',
        notRecommended: false
      }
    ],
    images: {
      developmentStages: {
        early: '/bonsai_photos/placeholder/early.jpg',
        middle: '/bonsai_photos/placeholder/middle.jpg',
        mature: '/bonsai_photos/placeholder/mature.jpg'
      },
      seasons: {
        spring: '/bonsai_photos/placeholder/spring.jpg',
        summer: '/bonsai_photos/placeholder/summer.jpg',
        autumn: '/bonsai_photos/placeholder/autumn.jpg',
        winter: '/bonsai_photos/placeholder/winter.jpg'
      },
      styles: {},
      nature: {}
    },
    imageCredits: {}
  },
  {
    id: 'buddhist-pine',
    scientificName: 'Podocarpus macrophyllus',
    commonName: 'Buddhist Pine (Podocarpus macrophyllus)',
    group: 'Various',
    temperatureMin: 10,
    temperatureMax: 20,
    sunExposure: 'Partial shade',
    position: 'Indoor (can be outdoor in summer)',
    leafType: 'Evergreen Conifer',
    climate: 'Temperate',
    flowering: 'Purple/Blue flowers',
    nativeRegion: 'Southern China, Japan, Myanmar, and Taiwan [5, 8]',
    difficultyLevel: 'Intermediate',
    category: 'Intermediate',
    careTips: {
      general: '**Leaf Type:** Evergreen, dark green narrow, lanceolate leaves that resemble yew needles. **Flowering/Fruit:** Inconspicuous flowers are followed by fleshy, purple, small, edible fruits, though the se...',
      soilType: 'Well-draining bonsai soil mix',
      feeding: 'Regular fertilization during growing season',
      watering: 'Keep soil moderately moist, avoid overwatering'
    },
    bonsaiStyles: ['Informal Upright', 'Formal Upright', 'Slanting'],
    techniques: [
      {
        name: 'Pruning (Structural & Maintenance)',
        description: 'For Podocarpus macrophyllus, pruning involves cutting back new shoots to one or two leaves to promote dense ramification and a refined silhouette. Structural pruning is best done to define primary branches in young trees, while maintenance pruning keeps the foliage compact and needle length short to avoid leggy growth.',
        timing: 'Spring to early summer when the tree is actively growing',
        maturityStage: 'Begin at juvenile stage once the tree has established a basic branch structure',
        notRecommended: false
      },
      {
        name: 'Wiring',
        description: 'Wiring Podocarpus macrophyllus is feasible on young, flexible branches to shape the bonsai, but care must be taken as older wood becomes rigid and can crack. Use softer wiring materials and avoid wiring during cold or very dry periods to prevent damage.',
        timing: 'Late winter to early spring before new growth starts, or early summer when branches are supple',
        maturityStage: 'Start wiring when branches are sufficiently strong but still flexible, typically in young to semi-mature trees',
        notRecommended: false
      },
      {
        name: 'Repotting',
        description: 'Repotting should be done every 2-3 years in spring as new growth begins, using a well-draining bonsai soil mix to prevent root rot. This timing supports root recovery and growth after moderate root pruning.',
        timing: 'Early spring, just before or as new shoots emerge',
        maturityStage: 'Suitable for trees that have established a good root system, usually from juvenile stage onward',
        notRecommended: false
      },
      {
        name: 'Root Pruning',
        description: 'Moderate root pruning is essential during repotting to maintain a balanced root-to-shoot ratio and encourage fine root development. For Podocarpus macrophyllus, avoid heavy root cutting to prevent stress due to its intermediate tolerance.',
        timing: 'During repotting in early spring',
        maturityStage: 'Once the bonsai has a well-developed root system, typically juvenile to mature trees',
        notRecommended: false
      },
      {
        name: 'Defoliation',
        description: 'Full defoliation is not recommended for Podocarpus macrophyllus as it has needle-like leaves and may not respond well. Partial leaf pruning by cutting back new growth is preferred to encourage compact foliage without stressing the tree.',
        timing: 'N/A – technique is generally unsuitable',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Pinching',
        description: 'Pinching new shoots by removing the soft tips encourages back budding and denser foliage in Podocarpus macrophyllus. This technique helps control needle length and refine branch structure without heavy pruning.',
        timing: 'Late spring through summer during active growth',
        maturityStage: 'Juvenile to mature trees with active growth',
        notRecommended: false
      },
      {
        name: 'Grafting',
        description: 'Grafting can be used to improve branch placement or repair damaged areas in Podocarpus macrophyllus, but requires skill due to moderate compatibility and slower healing compared to some species. Scion wood should be taken from healthy, vigorous material.',
        timing: 'Late winter to early spring before sap flow begins',
        maturityStage: 'Mature trees with established trunks and branches',
        notRecommended: false
      },
      {
        name: 'Jin (Deadwood Technique)',
        description: 'Creating jin on Podocarpus macrophyllus is possible but should be done cautiously as the wood can be dense and slow to weather. Jin is best applied on older branches that have naturally died back to enhance aged appearance.',
        timing: 'Late summer to early autumn when sap flow reduces',
        maturityStage: 'Mature trees with sufficient branch thickness',
        notRecommended: false
      },
      {
        name: 'Shari (Trunk Deadwood Technique)',
        description: 'Shari can be used sparingly on thick trunks of older Podocarpus macrophyllus to simulate natural weathering, but excessive stripping may harm the tree due to its delicate cambium layer. Careful application with protective sealants is recommended.',
        timing: 'Late summer or early autumn when growth slows',
        maturityStage: 'Older, mature trees with thick trunks',
        notRecommended: false
      },
      {
        name: 'Nebari Development (Surface Roots)',
        description: 'Developing nebari in Podocarpus macrophyllus requires attention during early growth stages by encouraging horizontal root growth during repotting and root pruning. Exposing surface roots gradually improves stability and aesthetic appeal.',
        timing: 'Early spring during repotting and root pruning',
        maturityStage: 'Juvenile trees starting foundational development',
        notRecommended: false
      },
      {
        name: 'Carving',
        description: 'Carving is occasionally used on older wood of Podocarpus macrophyllus to enhance deadwood features but should be executed with precision to avoid damaging living tissues. The dense wood demands sharp, specialized tools and patience.',
        timing: 'Late summer to early autumn when the tree is less active',
        maturityStage: 'Mature bonsai with established deadwood sections',
        notRecommended: false
      },
      {
        name: 'Air Layering',
        description: 'Air layering is an effective propagation method for Podocarpus macrophyllus, enabling new plants to be produced from mature branches. It should be done on healthy, semi-hardwood branches to ensure good rooting success.',
        timing: 'Late spring to early summer during active growth',
        maturityStage: 'Semi-mature to mature trees with flexible branches',
        notRecommended: false
      },
      {
        name: 'Fertilizing',
        description: 'Regular monthly fertilization during the growing season with balanced liquid or slow-release organic fertilizers supports healthy growth and foliage density in Podocarpus macrophyllus. Fertilizing should be reduced or halted during winter dormancy.',
        timing: 'Spring through late summer (active growth period)',
        maturityStage: 'All maturity stages once established',
        notRecommended: false
      },
      {
        name: 'Pest and Disease Management',
        description: 'Podocarpus macrophyllus is moderately resilient but can be susceptible to scale insects and fungal diseases in humid conditions. Regular inspection and prompt treatment with appropriate insecticides or fungicides are essential to maintain health.',
        timing: 'Year-round monitoring, with increased vigilance in warm, humid months',
        maturityStage: 'All stages',
        notRecommended: false
      },
      {
        name: 'Watering and Humidity Control',
        description: 'Maintaining slightly moist soil without overwatering is critical for Podocarpus macrophyllus; the soil surface should be allowed to dry slightly between waterings. Indoor trees benefit from increased humidity, especially during dry winter months, to prevent needle desiccation.',
        timing: 'Continuous; adjust frequency seasonally (more in summer, less in winter)',
        maturityStage: 'All stages',
        notRecommended: false
      }
    ],
    images: {
      developmentStages: {
        early: '/bonsai_photos/placeholder/early.jpg',
        middle: '/bonsai_photos/placeholder/middle.jpg',
        mature: '/bonsai_photos/placeholder/mature.jpg'
      },
      seasons: {
        spring: '/bonsai_photos/placeholder/spring.jpg',
        summer: '/bonsai_photos/placeholder/summer.jpg',
        autumn: '/bonsai_photos/placeholder/autumn.jpg',
        winter: '/bonsai_photos/placeholder/winter.jpg'
      },
      styles: {},
      nature: {}
    },
    imageCredits: {}
  },
  {
    id: 'blue-spruce',
    scientificName: 'Picea pungens',
    commonName: 'Blue Spruce (Picea pungens)',
    group: 'Various',
    temperatureMin: -40,
    temperatureMax: -20,
    sunExposure: 'Full sun',
    position: 'Indoor (can be outdoor in summer)',
    leafType: 'Evergreen Conifer',
    climate: 'Temperate',
    flowering: 'Inconspicuous',
    nativeRegion: 'Rocky Mountains of North America (Colorado, Utah, Wyoming)',
    difficultyLevel: 'Expert',
    category: 'Advanced',
    careTips: {
      general: 'Evergreen conifer famous for its striking blue-grey to silvery-blue needle color. Stiff, sharp needles arranged radially around branches. Slow-growing and requires patience. Develops attractive reddis...',
      soilType: 'acidic, well-draining soil mix. feeding: balanced fertilizer spring through autumn, reduce in winter. positioning: outdoor species, requires cold wint',
      feeding: 'balanced fertilizer spring through autumn, reduce in winter. positioning: outdoor species, requires cold winter dormancy.',
      watering: 'keep evenly moist, especially during growing season. mist foliage regularly. soil: acidic, well-draining soil mix. feeding: balanced fertilizer spring'
    },
    bonsaiStyles: ['Informal Upright', 'Formal Upright', 'Slanting'],
    techniques: [
      {
        name: 'Pruning (Structural & Maintenance)',
        description: 'Blue Spruce requires careful structural pruning to maintain its characteristic conical shape and encourage back-budding, which is naturally limited on older wood. Candle pruning in spring is essential to control shoot extension and promote denser foliage, while maintenance pruning throughout the growing season helps remove overly long or crossing branches without damaging the stiff needles.',
        timing: 'Early spring (April-May) for candle pruning; light maintenance pruning summer through early autumn',
        maturityStage: 'Begin structural pruning once the tree has established a strong trunk and primary branches, typically after 3-5 years',
        notRecommended: false
      },
      {
        name: 'Wiring',
        description: 'Wiring Blue Spruce must be done with caution due to its stiff, sharp needles and brittle branches. Use aluminum or annealed copper wire and apply it during early spring when branches are more pliable. Avoid wiring thick branches tightly to prevent breakage, and remove wires promptly to avoid scarring as the bark is relatively thin and can be damaged easily.',
        timing: 'Early spring (March-April), before new growth hardens',
        maturityStage: 'Start wiring young branches from 2-3 years old, avoiding wiring very thick branches until the tree is more mature',
        notRecommended: false
      },
      {
        name: 'Repotting',
        description: 'Repot Blue Spruce every 2-3 years in early spring before bud break to minimize root disturbance stress. Use acidic, well-draining soil to replicate natural conditions and carefully handle roots due to their sensitivity. Avoid repotting in hot or dry conditions to prevent desiccation and transplant shock.',
        timing: 'Early spring (March-April), before new growth begins',
        maturityStage: 'Begin repotting when the tree is 2-3 years old and established in its nursery pot',
        notRecommended: false
      },
      {
        name: 'Root Pruning',
        description: 'Root pruning should be done cautiously and in conjunction with repotting to maintain a fine root system without excessive disturbance. Remove thick, old roots and trim fibrous roots carefully to encourage a dense nebari. Excessive root pruning can severely stress Blue Spruce due to its sensitivity, so conservative cuts are advisable.',
        timing: 'Early spring during repotting (March-April)',
        maturityStage: 'Begin root pruning after the first 2-3 years when roots have developed sufficiently',
        notRecommended: false
      },
      {
        name: 'Defoliation',
        description: 'Defoliation is not recommended for Blue Spruce because its needles are stiff and sharp, and it lacks the ability to produce new foliage easily on older wood. Removing needles would cause unnecessary stress and could damage the tree’s photosynthetic capacity.',
        timing: 'N/A',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Pinching',
        description: 'Pinching new shoots is an effective way to control growth and encourage compactness in Blue Spruce. Since needles are stiff and sharp, pinch the soft candle growth in spring with fingers or fine scissors to promote back-budding and denser foliage pads without damaging mature needles.',
        timing: 'Spring (April-May) when candles are elongating',
        maturityStage: 'Suitable once the tree has established strong branches, usually after 2-3 years',
        notRecommended: false
      },
      {
        name: 'Grafting',
        description: 'Grafting is rarely used on Blue Spruce bonsai because its slow growth and difficulty in callusing reduce success rates. Additionally, the species’ natural form and color are usually propagated from seedlings or cuttings rather than grafting.',
        timing: 'If attempted, late winter or early spring before sap flow begins',
        maturityStage: 'For advanced practitioners on mature stock plants',
        notRecommended: true
      },
      {
        name: 'Jin (Deadwood Technique)',
        description: 'Creating jin on Blue Spruce can add dramatic deadwood features that contrast beautifully with its blue needles and reddish bark. However, because the bark is thin and branches brittle, jin should be applied selectively and carefully to avoid damaging living tissue.',
        timing: 'Late winter or early spring, when the tree is dormant',
        maturityStage: 'Best performed on mature bonsai with thick branches (5+ years old)',
        notRecommended: false
      },
      {
        name: 'Shari (Trunk Deadwood Technique)',
        description: 'Shari can enhance the aged appearance of Blue Spruce by exposing deadwood on the trunk, complementing its natural reddish-brown bark. Due to the species’ sensitivity to damage and slow healing, shari should be created conservatively and sealed promptly to prevent infection.',
        timing: 'Late winter during dormancy',
        maturityStage: 'Recommended only on well-established mature specimens (7+ years)',
        notRecommended: false
      },
      {
        name: 'Nebari Development (Surface Roots)',
        description: 'Developing a broad, even nebari is important for Blue Spruce to stabilize the tree and enhance aesthetics. Surface root flare develops slowly; careful root pruning and gradual exposure through soil removal during repotting encourage nebari visibility without stressing the roots.',
        timing: 'During repotting in early spring',
        maturityStage: 'From early development stages (2-3 years) onward',
        notRecommended: false
      },
      {
        name: 'Carving',
        description: 'Carving techniques can be used to emphasize deadwood features or create texture on trunks and branches of Blue Spruce. Due to its relatively thin bark and slow healing, carving must be minimal and protected with wound sealants to prevent decay and pest intrusion.',
        timing: 'Winter dormancy (December-February)',
        maturityStage: 'Only on mature bonsai with thick enough trunks (5+ years)',
        notRecommended: false
      },
      {
        name: 'Air Layering',
        description: 'Air layering is an uncommon propagation method for Blue Spruce but can be used to create new bonsai material without severing the parent plant’s root system. The process requires patience due to slow rooting and should be performed in early spring to optimize root development.',
        timing: 'Early spring (March-April)',
        maturityStage: 'On semi-mature branches from trees 3+ years old',
        notRecommended: false
      },
      {
        name: 'Fertilizing',
        description: 'Balanced, low-nitrogen fertilizer applied regularly from spring through autumn supports healthy growth and vivid blue needle coloration. Fertilizer should be reduced or withheld in winter to respect dormancy, and foliar feeding can help maintain needle color and vigor.',
        timing: 'Spring through autumn (April-October), avoid winter feeding',
        maturityStage: 'Start fertilizing after the tree is established (1-2 years old)',
        notRecommended: false
      },
      {
        name: 'Pest and Disease Management',
        description: 'Blue Spruce is susceptible to spider mites, aphids, and fungal needle casts, requiring vigilant monitoring especially in hot, dry conditions. Regular misting helps prevent spider mite infestation, and prompt treatment with appropriate insecticides or fungicides is necessary to maintain health.',
        timing: 'Year-round vigilance, increased monitoring in summer',
        maturityStage: 'All stages',
        notRecommended: false
      },
      {
        name: 'Watering and Humidity Control',
        description: 'Blue Spruce bonsai require evenly moist soil, particularly during active growth, without waterlogging. Regular misting of foliage maintains humidity and helps prevent needle browning, especially in dry air. Avoid prolonged dryness or drought stress, which can be detrimental.',
        timing: 'Consistent watering spring through autumn; reduce but do not cease in winter',
        maturityStage: 'All stages',
        notRecommended: false
      }
    ],
    images: {
      developmentStages: {
        early: '/bonsai_photos/placeholder/early.jpg',
        middle: '/bonsai_photos/placeholder/middle.jpg',
        mature: '/bonsai_photos/placeholder/mature.jpg'
      },
      seasons: {
        spring: '/bonsai_photos/placeholder/spring.jpg',
        summer: '/bonsai_photos/placeholder/summer.jpg',
        autumn: '/bonsai_photos/placeholder/autumn.jpg',
        winter: '/bonsai_photos/placeholder/winter.jpg'
      },
      styles: {},
      nature: {}
    },
    imageCredits: {}
  },
  {
    id: 'brazilian-rain-tree',
    scientificName: 'Pithecellobium tortum (Synonym: Chloroleucon tortum)',
    commonName: 'Brazilian Rain Tree',
    group: 'Deciduous',
    temperatureMin: 7,
    temperatureMax: 45,
    sunExposure: 'Requires **full sun** for best health and compact',
    position: 'Primarily an **Outdoor** tree during the growing s',
    leafType: 'Deciduous',
    climate: 'Tropical',
    flowering: 'Spring',
    nativeRegion: 'Native to the **rainforests of Brazil and Paraguay**, particularly in the Brazilian *restinga* (coas',
    difficultyLevel: 'Beginner',
    category: 'Beginner',
    careTips: {
      general: 'Vigorous, fast-growing tropical hardwood with a tendency for a flat, twisting trunk and a zigzag branch pattern. It is known for its ability to back-bud readily, even on old wood, making it highly ada',
      soilType: 'A **well-draining soil mix** is essential to prevent root rot. A common recommendation is a standard',
      feeding: 'Regular fertilization during growing season',
      watering: 'Requires **even, regular watering**. The soil should be kept **evenly moist** but must not be allowe'
    },
    bonsaiStyles: ['Informal Upright', 'Formal Upright', 'Slanting'],
    techniques: [
      {
        name: 'Structural Pruning',
        description: 'For Brazilian Rain Tree bonsai, structural pruning focuses on maintaining the natural zigzag branch pattern and managing vigorous growth. Remove overly long or crossing branches to preserve the characteristic twisted form, while carefully thinning dense foliage to enhance light penetration. Prune ba',
        timing: 'Early spring before the active growth season or late summer after strong growth flushes.',
        maturityStage: 'After 2-3 years of growth.',
        notRecommended: false
      },
      {
        name: 'Maintenance Pruning',
        description: 'Regular maintenance pruning is essential to control the rapid, vigorous growth of the Brazilian Rain Tree. Pinch or trim new shoots frequently to maintain compact foliage pads and prevent legginess. Remove any weak or spindly growth to focus energy on stronger branches. This helps sustain the tree’s',
        timing: 'Throughout the growing season, approximately every 2-4 weeks.',
        maturityStage: 'After initial training, typically from year 1 onward.',
        notRecommended: false
      },
      {
        name: 'Wiring Technique',
        description: 'Use medium to fine aluminum or annealed copper wire to gently shape the naturally zigzagging branches without damaging thorns. Wire branches individually, avoiding wiring over thorns to prevent injury. Because the species grows rapidly, check wiring every 2 weeks to prevent wire cutting into bark. W',
        timing: 'Wire in late winter or early spring before growth resumes; monitor and adjust wiring every 2 weeks i',
        maturityStage: 'After 2-3 years once branch structure begins to develop.',
        notRecommended: false
      },
      {
        name: 'Repotting',
        description: 'Repot Brazilian Rain Tree bonsai every 2-3 years using a well-draining mix such as Akadama, pumice, and lava rock, or sandy loam to prevent root rot. Repotting is best done in early spring just before new growth to reduce stress. Avoid repotting during cold or dormant periods, as the tree is sensiti',
        timing: 'Early spring, before the onset of active growth (March-April in temperate zones).',
        maturityStage: 'From the second year onward.',
        notRecommended: false
      },
      {
        name: 'Root Pruning',
        description: 'During repotting, prune roots conservatively to encourage a dense, fibrous root ball while preserving enough feeder roots to support vigorous growth. Trim long, thick roots and remove any rotten or damaged roots carefully. The species tolerates root pruning well but should not be over-pruned as it c',
        timing: 'At each repotting session, typically every 2-3 years in early spring.',
        maturityStage: 'Starting from year 2 after initial establishment.',
        notRecommended: false
      },
      {
        name: 'Defoliation',
        description: 'Defoliation is generally not recommended for Brazilian Rain Tree bonsai because its small compound leaflets naturally fold at night and the tree relies on its leaf surface area for vigorous growth. Heavy defoliation can stress the tree and reduce flowering potential. Light leaf pruning to remove dam',
        timing: 'Not recommended; if performed, only very light selective leaf trimming in early summer.',
        maturityStage: 'Mature trees only, and then with caution.',
        notRecommended: true
      },
      {
        name: 'Pinching',
        description: 'Pinching new growth tips regularly helps maintain the compact, dense foliage characteristic of Brazilian Rain Tree bonsai. Use fingers or scissors to pinch back soft terminal shoots once they have produced 3-4 pairs of leaflets. This encourages branching and prevents long, leggy shoots that disrupt',
        timing: 'Throughout the active growing season, every 2-3 weeks.',
        maturityStage: 'From year 1 onward.',
        notRecommended: false
      },
      {
        name: 'Grafting',
        description: 'Grafting is seldom used on Brazilian Rain Tree bonsai due to its vigorous back-budding ability on old wood. However, it can be employed to repair damaged branches or introduce new branch placement when necessary. Use approach grafting or side grafting during active growth to ensure strong union.',
        timing: 'Late spring to early summer when sap flow is active.',
        maturityStage: 'Mature trees only with established trunk and branch structure.',
        notRecommended: false
      },
      {
        name: 'Jin (Deadwood)',
        description: 'Creating jin (deadwood branches) is generally not suitable for Brazilian Rain Tree bonsai as its natural character is lush and vigorous with no tendency for natural branch dieback. Additionally, the thorns and delicate bark can be damaged during jin carving, which may invite pests or disease.',
        timing: 'N/A',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Shari (Trunk Deadwood)',
        description: 'Shari is not recommended on Brazilian Rain Tree due to its tropical hardwood nature and smooth bark, which does not respond well to deadwood techniques. Carving the trunk risks long-term health and reduces the natural appeal of the twisted, living trunk.',
        timing: 'N/A',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Nebari Development',
        description: 'To develop a strong nebari, prune roots evenly during repotting and encourage radial root growth by trimming longer roots and positioning the tree slightly elevated in the pot. Early training using guy wires on roots can help flare them out to create a balanced base. Maintaining a flat trunk flare c',
        timing: 'Begin nebari training from year 1 and continue during each repotting every 2-3 years.',
        maturityStage: 'Begin after initial establishment, from 1 year onward.',
        notRecommended: false
      },
      {
        name: 'Carving',
        description: 'Carving is generally discouraged on Brazilian Rain Tree bonsai as the species does not produce durable deadwood and is prone to infection if damaged. The natural twisted trunk and zigzag branches provide sufficient character without artificial carving. Focus on natural shaping through pruning and wi',
        timing: 'N/A',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Air Layering',
        description: 'Air layering can be used to propagate Brazilian Rain Tree bonsai or to create new branches for grafting or styling. Select healthy, semi-hardwood branches in late spring or early summer, remove a ring of bark about 2-3 cm wide, apply rooting hormone, and wrap with moist sphagnum moss and plastic. Ke',
        timing: 'Late spring to early summer during active growth.',
        maturityStage: 'From 2 years onward with healthy branches.',
        notRecommended: false
      },
      {
        name: 'Fertilizing',
        description: 'Fertilize Brazilian Rain Tree bonsai monthly during the growing season with a balanced NPK fertilizer (e.g., 10-10-10) diluted to half strength. Supplement with micronutrients to support vigorous leaf and flower development. Reduce feeding frequency in late summer to prepare for dormancy, and withho',
        timing: 'Monthly from early spring through late summer; no fertilizing in winter.',
        maturityStage: 'From first year onward.',
        notRecommended: false
      },
      {
        name: 'Pest and Disease Management',
        description: 'Monitor Brazilian Rain Tree bonsai regularly for common pests such as aphids, spider mites, and scale insects, which thrive in warm, humid environments. Use insecticidal soap or neem oil sprays promptly if infestations appear. Prevent fungal root rot by ensuring excellent drainage and avoiding water',
        timing: 'Inspect monthly during growing season; treat as needed.',
        maturityStage: 'All maturity stages.',
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
    id: 'jacaranda-blue-jacaranda',
    scientificName: 'Jacaranda mimosifolia',
    commonName: 'Jacaranda (Blue Jacaranda)',
    group: 'Deciduous',
    temperatureMin: 15,
    temperatureMax: 59,
    sunExposure: 'Needs a lot of light, preferably **6 to 8 hours a',
    position: 'Outdoor in warm climates (above 15°C/59°F). Must b',
    leafType: 'Deciduous',
    climate: 'Temperate',
    flowering: 'Spring',
    nativeRegion: 'South-central South America, primarily native to **southern Brazil, Paraguay, northern Argentina** (',
    difficultyLevel: 'Expert',
    category: 'Advanced',
    careTips: {
      general: 'Fast-growing, semi-evergreen tree (can be deciduous in winter/low light). The tree\'s main challenge for bonsai is its large compound leaves (up to 5 cm long in nature) which do not reduce easily, maki',
      soilType: 'A **well-draining soil mix** is essential. Repotting is recommended every second year in spring. Spe',
      feeding: 'Regular fertilization during growing season',
      watering: 'Keep the rootball **slightly moist**. Water moderately, ensuring the soil does not dry out completel'
    },
    bonsaiStyles: ['Informal Upright', 'Formal Upright', 'Slanting'],
    techniques: [
      {
        name: 'Structural Pruning',
        description: 'Perform strong structural pruning in early spring just before active growth begins. Remove long shoots back to one or two leaf pairs to maintain scale and encourage ramification. This species responds well to cutting back vigorous shoots but avoid heavy pruning late in the season to prevent stress b',
        timing: 'Early spring (before active growth)',
        maturityStage: 'After 2-3 years',
        notRecommended: false
      },
      {
        name: 'Maintenance Pruning',
        description: 'Regularly pinch or cut back new shoots after 4-5 leaf pairs develop to keep foliage compact and encourage back-budding. This species produces strong new growth which should be shortened to maintain branch thickness and leaf size appropriate for bonsai scale. Maintenance pruning also helps stimulate',
        timing: 'Throughout growing season (spring to early summer), every 2-3 weeks',
        maturityStage: 'After 1 year',
        notRecommended: false
      },
      {
        name: 'Wiring with Caution',
        description: 'Use wiring to shape young branches when shoots are semi-hardwood, typically late spring to early summer. Due to rapid growth and flexible branches, wiring can be effective but must be removed within three months to prevent branch scarring and damage. Avoid wiring old or thick branches as the bark is',
        timing: 'Late spring to early summer; remove wire within 3 months',
        maturityStage: 'After 1-2 years',
        notRecommended: false
      },
      {
        name: 'Spring Repotting with Soil Refresh',
        description: 'Repot every two years in early spring just before growth resumes, using a well-draining acidic to neutral bonsai soil mix (50% Akadama, 20% pumice, 25% lava rock, 5% coarse sand). This timing minimizes stress and promotes root recovery. Avoid repotting during growth slowdown or cold periods to preve',
        timing: 'Early spring every 2 years',
        maturityStage: 'After 2-3 years',
        notRecommended: false
      },
      {
        name: 'Moderate Root Pruning',
        description: 'At repotting, prune back roots moderately to maintain a compact root system, cutting large thick roots and preserving fine feeder roots. This species tolerates root pruning well in spring but avoid excessive pruning which can reduce water uptake and stress the tree. Ensure roots are not left waterlo',
        timing: 'During repotting in early spring',
        maturityStage: 'After 2-3 years',
        notRecommended: false
      },
      {
        name: 'Selective Defoliation to Reduce Leaf Size',
        description: 'Perform partial defoliation in late spring to early summer to stimulate the growth of smaller leaves and increase ramification. Due to the species’ large compound bipinnate leaves, complete defoliation can be stressful; instead, remove only older or larger leaflets selectively. This helps maintain s',
        timing: 'Late spring to early summer, on warm, stable days',
        maturityStage: 'After 3-4 years',
        notRecommended: false
      },
      {
        name: 'Pinching New Shoots',
        description: 'Pinch back new shoots as soon as they reach four or five leaf pairs to limit elongation and encourage dense branching. Use finger pinching rather than cutting to avoid injury and to promote multiple shoot buds. This technique keeps the tree compact and helps manage the large leaf size characteristic',
        timing: 'Throughout active growth (spring through early summer)',
        maturityStage: 'After 1 year',
        notRecommended: false
      },
      {
        name: 'Grafting for Branch Improvement',
        description: 'Grafting is occasionally used to introduce desired branch characteristics or flower-producing branches, but it is not commonly necessary due to the tree’s vigorous growth. If used, graft in early spring before growth starts, ensuring compatibility and sterile technique to prevent infection. It can h',
        timing: 'Early spring before growth begins',
        maturityStage: 'After 3 years',
        notRecommended: false
      },
      {
        name: 'Jin (Deadwood) Creation',
        description: 'Creating jin is generally not recommended on Jacaranda due to its relatively thin and delicate bark which can be easily damaged and slow to heal. The species’ natural beauty lies in its smooth bark and vibrant flowers rather than deadwood features. If jin is desired, only very minor deadwood work on',
        timing: 'If done, late summer or early autumn during active growth',
        maturityStage: 'Mature trees only',
        notRecommended: true
      },
      {
        name: 'Shari (Trunk Deadwood)',
        description: 'Shari is not recommended for Jacaranda bonsai because the thin, scaly bark does not lend itself well to trunk deadwood techniques and the species generally does not develop large trunk taper suitable for shari. Attempting shari can cause excessive stress and risk of infection. Focus should be on hea',
        timing: 'Not applicable',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Nebari Development by Root Pruning and Trunk Flare Encouragement',
        description: 'To develop a good nebari, prune surface roots during repotting and position the tree slightly tilted to encourage outward root spread. Gently remove soil around the base in early spring to expose and clean roots, stimulating flare and stability. Avoid heavy root pruning near the nebari to prevent we',
        timing: 'Early spring during repotting and soil exposure',
        maturityStage: 'After 3 years',
        notRecommended: false
      },
      {
        name: 'Carving',
        description: 'Carving is generally not recommended for Jacaranda bonsai due to the delicate, thin bark and the risk of introducing disease or slowing healing. The species’ aesthetic value lies in its natural form, flowers, and foliage rather than deadwood features. Avoid carving unless performed by an expert on m',
        timing: 'Not recommended',
        maturityStage: 'Mature trees only',
        notRecommended: true
      },
      {
        name: 'Air Layering for Propagation',
        description: 'Air layering can be successfully used in summer to propagate Jacaranda bonsai, especially to create new trunks or branches for styling. Select vigorous semi-hardwood branches, wound the bark carefully, apply rooting hormone, and wrap with moist sphagnum moss and plastic. Keep the layer warm and mois',
        timing: 'Summer (warm, active growth period)',
        maturityStage: 'After 2 years',
        notRecommended: false
      },
      {
        name: 'Fertilizing with Balanced NPK',
        description: 'Fertilize monthly during the active growth period from spring to early autumn using a balanced, slow-release fertilizer with equal NPK values or slightly higher phosphorus to promote flowering. Reduce feeding in winter, and avoid high nitrogen fertilizers late in the season to prevent excessive soft',
        timing: 'Monthly from early spring to early autumn',
        maturityStage: 'After 1 year',
        notRecommended: false
      },
      {
        name: 'Watering and Humidity Control',
        description: 'Maintain consistently moist but not waterlogged soil, watering thoroughly when the top 1-2 cm of soil feels dry. Jacaranda requires moderate humidity; misting foliage during dry indoor winter conditions can prevent leaf drop. Avoid letting the rootball dry out completely or remain soggy, as both ext',
        timing: 'Throughout growing season; daily checks in hot/dry weather',
        maturityStage: 'After planting',
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
    id: 'weeping-fig',
    scientificName: 'Ficus benjamina',
    commonName: 'Weeping Fig',
    group: 'Deciduous',
    temperatureMin: 18,
    temperatureMax: 29,
    sunExposure: 'Requires a lot of bright light, preferably full su',
    position: 'Primarily Indoor. Can be kept outdoors in summer w',
    leafType: 'Deciduous',
    climate: 'Temperate',
    flowering: 'Spring',
    nativeRegion: 'Southeastern Asia and Australia, with its range extending from India to northern Australia and the s',
    difficultyLevel: 'Beginner',
    category: 'Beginner',
    careTips: {
      general: 'Fast growth rate. Known for its beautiful umbrella-like canopy and thin, gracefully drooping branches. Responds very well to pruning and can be defoliated to reduce leaf size and increase branching de',
      soilType: 'Requires a well-draining soil mixture. Preferred composition includes mostly sand and other aggregat',
      feeding: 'Regular fertilization during growing season',
      watering: 'Water thoroughly when the top layer of soil begins to dry out (top inch). Avoid letting the soil dry'
    },
    bonsaiStyles: ['Informal Upright', 'Formal Upright', 'Slanting'],
    techniques: [
      {
        name: 'Structural Pruning',
        description: 'Conduct structural pruning during early spring before active growth begins to shape the primary branch framework. Remove crossing, inward-growing, or excessively thick branches to maintain the weeping, graceful canopy characteristic of Ficus benjamina. Cut just above a node to encourage outward grow',
        timing: 'Early spring (before new growth)',
        maturityStage: 'After 2 years',
        notRecommended: false
      },
      {
        name: 'Maintenance Pruning',
        description: 'Regularly prune new shoots throughout the growing season to control size and shape, focusing on pinching back shoots to maintain the drooping branch habit. Remove any dead or unhealthy foliage promptly to prevent disease. Maintenance pruning encourages denser branching and smaller leaves, which impr',
        timing: 'Throughout growing season (spring to early autumn), every 2-4 weeks',
        maturityStage: 'After 1 year',
        notRecommended: false
      },
      {
        name: 'Wiring with Soft Aluminum',
        description: 'Use soft aluminum wire to gently shape the flexible, thin branches without damaging the delicate bark or causing excessive latex sap flow. Avoid wiring during periods of heavy sap flow (early spring) to reduce stress and potential sap sap loss. Wiring should be done carefully to maintain the charact',
        timing: 'Late spring to late summer, avoid early spring',
        maturityStage: 'After 1 year',
        notRecommended: false
      },
      {
        name: 'Spring Repotting with Root Inspection',
        description: 'Repot every two years in early spring just before the growth season starts to minimize transplant shock. Use a well-draining soil mix with a high sand and akadama component to prevent waterlogging. During repotting, carefully inspect and prune thickened or rotted roots to promote a fine root system,',
        timing: 'Early spring, every 2 years',
        maturityStage: 'After 2 years',
        notRecommended: false
      },
      {
        name: 'Root Pruning for Nebari Development',
        description: 'When repotting, prune large surface roots selectively to encourage a radial, evenly spread nebari. Remove any roots growing too deeply or unevenly to develop the classic exposed root base favored in bonsai aesthetics. This promotes stability and improves the visual impact of the bonsai’s base, espec',
        timing: 'During spring repotting every 2 years',
        maturityStage: 'After 3 years',
        notRecommended: false
      },
      {
        name: 'Defoliation to Reduce Leaf Size',
        description: 'Complete defoliation is recommended once or twice a year (early summer and mid-summer) to reduce large leaf size and promote finer branching with smaller leaves. Removing all leaves forces the tree to produce smaller replacement foliage, helping maintain scale appropriate for bonsai. Partial defolia',
        timing: 'Early summer and optionally mid-summer',
        maturityStage: 'After 3 years',
        notRecommended: false
      },
      {
        name: 'Pinching New Shoots',
        description: 'Pinch back new growth tips regularly during the growing season to encourage dense branching and maintain the weeping habit. Use fingers to nip shoot tips once they have grown 2-3 pairs of leaves, which prevents overly vigorous vertical growth and promotes lateral branch development. This technique i',
        timing: 'Spring through early autumn, every 2-3 weeks',
        maturityStage: 'After 1 year',
        notRecommended: false
      },
      {
        name: 'Grafting for Branch Development',
        description: 'Grafting is occasionally used to add finer branches or improve branch placement, especially in areas where natural branching is sparse. Scion wood should be taken from healthy, vigorous Ficus benjamina specimens and grafted in early spring for best success. This technique is useful for improving ram',
        timing: 'Early spring',
        maturityStage: 'After 3 years',
        notRecommended: false
      },
      {
        name: 'Jin (Deadwood) Technique',
        description: 'Jin is generally not recommended for Ficus benjamina due to its thin, flexible branches and delicate bark, which do not hold deadwood well and may heal too quickly, losing the desired aged effect. The species’ latex sap and rapid healing also inhibit long-lasting deadwood features. Instead, focus on',
        timing: 'N/A',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Shari (Trunk Deadwood) Technique',
        description: 'Shari is not typically suitable for Weeping Fig bonsai because the thin trunk bark and latex sap production complicate deadwood preservation. The species tends to heal wounds rapidly, which reduces the visual impact of shari. Attempting shari may also stress the tree unnecessarily given its preferen',
        timing: 'N/A',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Nebari Development via Root Over Rock',
        description: 'Leverage the species’ natural aerial root production by training roots over rocks and encouraging them to thicken during the growth season. Position the root collar over a flat rock surface and secure roots with soft ties to develop a natural-looking clasped-to-rock nebari. High humidity and consist',
        timing: 'Spring and summer (active growth period)',
        maturityStage: 'After 3 years',
        notRecommended: false
      },
      {
        name: 'Carving Techniques',
        description: 'Carving is generally not recommended for Ficus benjamina due to the thin trunk and rapid healing characteristics, which prevent deep, lasting carvings. The species’ latex sap can complicate carving, and wounds tend to heal quickly, reducing the visual effect. Instead, focus on live branch shaping an',
        timing: 'N/A',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Air Layering for Propagation and Nebari Improvement',
        description: 'Air layering is an effective propagation method for Ficus benjamina and can be used to create new specimens or improve nebari by encouraging new root growth on branches. Perform air layering in late spring or early summer when the tree is actively growing, maintaining high humidity to support root d',
        timing: 'Late spring to early summer',
        maturityStage: 'After 2 years',
        notRecommended: false
      },
      {
        name: 'Fertilizing with Balanced NPK and Micronutrients',
        description: 'Use a balanced, slow-release fertilizer (e.g., 10-10-10 NPK) with micronutrients monthly during the growing season to support the species’ fast growth and dense branching. Supplement with foliar feeding of liquid fertilizer every 2-3 weeks to promote leaf health and vigor. Reduce fertilization in wi',
        timing: 'Monthly during spring through early autumn; foliar feeding every 2-3 weeks',
        maturityStage: 'After 1 year',
        notRecommended: false
      },
      {
        name: 'Pest and Disease Management for Common Ficus Issues',
        description: 'Monitor regularly for pests like spider mites, scale insects, and aphids, which commonly affect Ficus benjamina indoors. Use insecticidal soap or neem oil as preventive and treatment measures. Maintain good air circulation and humidity control to reduce fungal infections and avoid overwatering to pr',
        timing: 'Inspect biweekly during growing season, treat as needed',
        maturityStage: 'All stages',
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
    id: 'yew-common-yew-european-yew',
    scientificName: 'Taxus baccata',
    commonName: 'Yew (Common Yew, European Yew)',
    group: 'Deciduous',
    temperatureMin: -17,
    temperatureMax: 8,
    sunExposure: 'Prefers a position with sufficient light, ranging',
    position: 'Outdoor. The Yew is an evergreen that requires a c',
    leafType: 'Deciduous',
    climate: 'Temperate',
    flowering: 'Spring',
    nativeRegion: 'Widespread across Eurasia and Northwest Africa, including Great Britain and Ireland.',
    difficultyLevel: 'Intermediate',
    category: 'Intermediate',
    careTips: {
      general: 'Very slow-growing, but can be vigorous when established. It is known for its ability to bud back from old wood, even on parts with no foliage, which is a major advantage for styling. The bark is thin,',
      soilType: 'A standard, well-draining bonsai soil mix is suitable. The soil mix should be slightly acidic, toler',
      feeding: 'Regular fertilization during growing season',
      watering: 'Requires plenty of water and needs significantly more than many other common bonsai species. The tre'
    },
    bonsaiStyles: ['Informal Upright', 'Formal Upright', 'Slanting'],
    techniques: [
      {
        name: 'Structural Pruning',
        description: 'Perform structural pruning on Taxus baccata primarily during late autumn or early winter when the tree is dormant. Remove large unwanted branches and shape the overall silhouette, taking advantage of its ability to bud back from old wood. Avoid heavy pruning of fresh growth in spring to prevent fros',
        timing: 'Late autumn to early winter (dormant period)',
        maturityStage: 'After 3-4 years or when basic structure is established',
        notRecommended: false
      },
      {
        name: 'Maintenance Pruning',
        description: 'Conduct maintenance pruning throughout the growing season to remove overly long shoots and maintain dense foliage pads. Pinch or cut back new growth selectively to encourage back-budding on old wood, a key advantage of Yew. Avoid removing too many needles at once, as the species relies on these for',
        timing: 'Spring through early autumn, as needed',
        maturityStage: 'After first year of growth',
        notRecommended: false
      },
      {
        name: 'Wiring Technique',
        description: 'Use aluminum or annealed copper wire to shape branches when the wood is flexible in late spring to early summer. Wire carefully, as Yew wood is hard but the bark is thin and prone to damage; place padding under wire to prevent scarring. Wiring can be left on for longer periods due to slow growth but',
        timing: 'Late spring to early summer; check monthly',
        maturityStage: 'After 2-3 years when branches have sufficient thickness',
        notRecommended: false
      },
      {
        name: 'Repotting Timing and Considerations',
        description: 'Repot Yew bonsai every 2 to 4 years during early spring before bud break to minimize stress. Use a slightly acidic, well-draining soil mix with Akadama, pumice, and lava rock, optionally adding organic humus in hot climates. Protect roots from frost exposure after repotting, especially in shallow po',
        timing: 'Early spring before bud break, every 2-4 years',
        maturityStage: 'After 2 years or once established in bonsai pot',
        notRecommended: false
      },
      {
        name: 'Root Pruning Approach',
        description: 'During repotting, prune roots conservatively by trimming thick, long roots to stimulate finer feeder root growth, which is essential for Yew\'s slow but vigorous root system. Avoid excessive root pruning to prevent stress, as the species is sensitive to root damage. Ensure the root ball is kept moist',
        timing: 'At repotting in early spring',
        maturityStage: 'After 2-3 years when roots are established',
        notRecommended: false
      },
      {
        name: 'Defoliation',
        description: 'Defoliation is generally not recommended for Taxus baccata bonsai because it is an evergreen conifer with needle-like foliage that does not respond well to leaf removal. Removing needles can weaken the tree and reduce its photosynthetic capacity. Instead, use pinching and pruning to control foliage',
        timing: 'Not recommended',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Pinching Technique',
        description: 'Pinch new soft growth regularly during the growing season to maintain compact foliage pads and stimulate back-budding on old wood. Use thumb and forefinger to remove the terminal shoots when they reach 2–3 cm in length, which helps promote denser branching. Avoid pinching too late in the season to p',
        timing: 'Spring through mid-summer, approximately every 2-3 weeks',
        maturityStage: 'After 1-2 years when shoots are vigorous',
        notRecommended: false
      },
      {
        name: 'Grafting',
        description: 'Grafting is occasionally used to repair damaged branches or to introduce desired male or female characteristics for aril production. It is best done in early spring using scion wood from healthy donor trees. Taxus baccata accepts grafts well, especially approach or side grafts, due to its vigorous c',
        timing: 'Early spring before bud break',
        maturityStage: 'After 3-5 years, mature stock preferred',
        notRecommended: false
      },
      {
        name: 'Jin (Deadwood) Technique',
        description: 'Yew wood’s hardness and longevity make it excellent for Jin creation. Remove selected branches and strip bark carefully to create naturalistic deadwood features. Due to thin bark, avoid damaging living tissue when carving Jin, and treat exposed wood with lime sulfur to prevent decay and enhance visu',
        timing: 'Late autumn to early winter or during dormant season',
        maturityStage: 'Mature trees with sufficiently thick branches',
        notRecommended: false
      },
      {
        name: 'Shari (Trunk Deadwood) Technique',
        description: 'Shari carving is highly suitable for Yew due to the hard, decay-resistant wood and thin bark. Carefully remove strips of bark and wood from the trunk to expose deadwood, creating dramatic aged effects. Use carving tools with precision to avoid damaging live cambium and apply lime sulfur promptly to',
        timing: 'Dormant season (late autumn to early winter)',
        maturityStage: 'Mature trees with thick trunks',
        notRecommended: false
      },
      {
        name: 'Nebari Development',
        description: 'Promote nebari by encouraging surface root growth and selectively removing competing roots during repotting. Position exposed roots in a radial pattern and gently comb them outward when repotting to enhance visual stability. Yew’s slow growth means nebari development is gradual; frequent root prunin',
        timing: 'At repotting intervals (every 2-4 years)',
        maturityStage: 'After 3-4 years when roots have developed',
        notRecommended: false
      },
      {
        name: 'Carving',
        description: 'Carving is recommended for Yew bonsai to create deadwood effects and enhance trunk and branch character. Use sharp, precise tools due to the wood’s hardness and thin bark. Carve slowly to avoid damaging living tissue and always follow with lime sulfur treatment to prevent decay and insect infestatio',
        timing: 'Dormant season (late autumn to early winter)',
        maturityStage: 'Mature bonsai with hardened wood',
        notRecommended: false
      },
      {
        name: 'Air Layering',
        description: 'Air layering can be used to propagate Yew or create new branches but requires careful timing and moisture control. Perform layering in early summer when sap flow is active, ensuring the moss medium stays moist and wrapped securely. Yew’s slow growth means rooting may take several months; protect the',
        timing: 'Early summer (active growth period)',
        maturityStage: 'Healthy, semi-mature branches',
        notRecommended: false
      },
      {
        name: 'Fertilizing Schedule',
        description: 'Apply a balanced, slow-release fertilizer or organic fertilizer from early spring to late summer to meet Yew’s nutrient demands during active growth. Use formulations with slightly acidic pH compatibility and moderate nitrogen to encourage healthy foliage without excessive elongation. Reduce or stop',
        timing: 'Early spring to late summer, monthly or per product instructions',
        maturityStage: 'After first year of growth',
        notRecommended: false
      },
      {
        name: 'Pest and Disease Management',
        description: 'Regularly inspect Yew bonsai for common pests such as scale insects, spider mites, and aphids, which can weaken the tree. Use insecticidal soaps or horticultural oils during growing seasons while avoiding application during extreme heat or cold. Yews are susceptible to root rot if overwatered, so ma',
        timing: 'Spring through autumn, weekly inspections recommended',
        maturityStage: 'All stages',
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
    id: 'english-oak',
    scientificName: 'Quercus robur',
    commonName: 'English Oak',
    group: 'Deciduous',
    temperatureMin: -5,
    temperatureMax: 23,
    sunExposure: 'Full sun during the growing season. Needs good air',
    position: 'Outdoor. It is a frost-hardy deciduous species tha',
    leafType: 'Deciduous',
    climate: 'Temperate',
    flowering: 'Spring',
    nativeRegion: 'Europe, North Africa, Southwest Asia. Specifically, the European Oak (Quercus robur) is native acros',
    difficultyLevel: 'Intermediate',
    category: 'Intermediate',
    careTips: {
      general: 'Vigorous, fast-growing deciduous tree. Features lobed leaves (up to 15cm in nature, reduced with bonsai techniques) and heavy branches that naturally bend outwards, developing a characteristic zigzagg',
      soilType: 'A highly free-draining, airy soil mix is essential to avoid constant wetness, which the species disl',
      feeding: 'Regular fertilization during growing season',
      watering: 'Water thoroughly when the topsoil begins to dry out, but avoid constant soil wetness. Water less in'
    },
    bonsaiStyles: ['Informal Upright', 'Formal Upright', 'Slanting'],
    techniques: [
      {
        name: 'Structural Pruning',
        description: 'Perform structural pruning in late winter to early spring before bud break to define the main branch framework. Focus on removing crossing, weak, or inward-growing branches to emphasize the characteristic zigzagging branch movement of English Oak. Retain some thicker branches to develop the heavy, o',
        timing: 'Late winter to early spring (pre-bud break), annually or biannually',
        maturityStage: 'After 3-4 years',
        notRecommended: false
      },
      {
        name: 'Maintenance Pruning',
        description: 'Carry out maintenance pruning in summer after the first flush of growth to shorten new shoots and maintain ramification. Pinch or cut back elongating shoots to encourage short internodes and denser branching, which is crucial to reduce large leaf size. Remove any shaded or weak branches promptly to',
        timing: 'Mid to late summer, annually',
        maturityStage: 'After 2 years',
        notRecommended: false
      },
      {
        name: 'Wiring with Soft Materials and Quick Removal',
        description: 'Use soft aluminum or annealed copper wire to shape branches carefully, avoiding damage to the sensitive, corky bark. Wiring should be done during early spring before bud swell or late summer after growth slows. Because the bark scars easily, wires must be checked every 2-3 weeks and removed promptly',
        timing: 'Early spring (pre-bud break) or late summer; check biweekly',
        maturityStage: 'After 2 years',
        notRecommended: false
      },
      {
        name: 'Repotting in Early Spring',
        description: 'Repot just before bud break in early spring to minimize stress and promote rapid root recovery. Use a highly free-draining, airy soil mix with components like Akadama, Pumice, and Lava rock to prevent root rot. Young trees should be repotted every 2 years, while mature specimens can extend to 3-5 ye',
        timing: 'Early spring (pre-bud break), every 2 years for young trees, every 3-5 years for mature',
        maturityStage: 'From first year after initial training',
        notRecommended: false
      },
      {
        name: 'Root Pruning with Moderate Root Ball Reduction',
        description: 'During repotting, prune roots moderately to encourage fine root development but avoid excessive root ball reduction which can stress this vigorous species. Retain thick, healthy roots to maintain vigor. Prune damaged or rotten roots and trim some of the larger roots to encourage feeder root growth i',
        timing: 'Early spring during repotting, every 2-5 years depending on age',
        maturityStage: 'After 2 years',
        notRecommended: false
      },
      {
        name: 'Partial Defoliation',
        description: 'Perform partial defoliation in early to mid-summer to reduce leaf size and increase ramification. Remove about 50% of mature leaves, focusing on large, shaded leaves to encourage the growth of smaller, shorter shoots. Full defoliation is generally not recommended due to risk of stress and slow recov',
        timing: 'Early to mid-summer, once per growing season',
        maturityStage: 'After 3 years',
        notRecommended: false
      },
      {
        name: 'Pinching New Shoots',
        description: 'Pinch soft, elongating shoots regularly during the growing season to encourage short internodes and dense branching. Use fingernails or scissors to pinch back new shoots when they reach 4-5 cm, removing the tip to stimulate lateral bud growth. This technique helps manage the species’ vigorous growth',
        timing: 'Late spring through summer, repeated every 2-3 weeks',
        maturityStage: 'After 1 year',
        notRecommended: false
      },
      {
        name: 'Grafting Not Recommended',
        description: 'Grafting is generally not successful or commonly used on English Oak bonsai due to poor compatibility and low success rates with cuttings and grafts. The species is easily propagated from seed, and bonsai development focuses on seed-grown plants. Attempting grafting may cause unnecessary stress and',
        timing: 'N/A',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Jin (Deadwood) Use on Select Branches',
        description: 'Creating jin is possible on English Oak but should be applied sparingly and on smaller secondary branches to avoid stressing the tree. Deadwood highlights the ancient, rugged character of the species but the vigorous sap flow can delay drying and preservation. Treat jin areas with lime sulfur to pro',
        timing: 'Late summer to early autumn, when growth slows',
        maturityStage: 'Mature trees only',
        notRecommended: false
      },
      {
        name: 'Shari (Trunk Deadwood) Generally Not Recommended',
        description: 'Shari carving on the trunk is generally discouraged for English Oak bonsai because the species naturally develops thick, corky bark that provides the aged appearance desired. Artificial trunk deadwood risks introducing decay and is less effective than preserving the natural bark character. If attemp',
        timing: 'N/A',
        maturityStage: 'Mature trees only',
        notRecommended: true
      },
      {
        name: 'Nebari Development by Root Flare Exposure',
        description: 'Develop nebari by gradually exposing and cleaning the root flare during repotting and root pruning. Remove excess soil around the base to reveal radial, evenly spaced roots that provide stability and aesthetic balance. Avoid aggressive root pruning that damages nebari roots and encourage outward roo',
        timing: 'During repotting (early spring), annually or biannually',
        maturityStage: 'After 2 years',
        notRecommended: false
      },
      {
        name: 'Carving Not Recommended',
        description: 'Carving is generally not recommended on English Oak bonsai due to the species’ delicate, corky bark and vigorous sap flow which can cause damage and slow healing. The natural bark texture and fissures develop with age and provide sufficient character without artificial carving. Focus instead on natu',
        timing: 'N/A',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Air Layering with Caution',
        description: 'Air layering is difficult and generally unreliable on English Oak due to poor rooting success and the species’ slow callusing. If attempted, do so in mid to late summer when sap flow is active. Use a clean cut, moss or rooting medium, and humidity wrap to encourage root formation. Monitor closely fo',
        timing: 'Mid to late summer',
        maturityStage: 'After 5 years (mature branches)',
        notRecommended: false
      },
      {
        name: 'Low Nitrogen Fertilizing Schedule',
        description: 'Use a balanced or low nitrogen fertilizer during the growing season to control vigorous growth and reduce large leaf size. Apply fertilizer monthly from early spring (bud break) until late summer, then reduce or stop feeding in autumn to prepare for dormancy. Organic slow-release fertilizers or liqu',
        timing: 'Monthly from early spring to late summer',
        maturityStage: 'After 1 year',
        notRecommended: false
      },
      {
        name: 'Powdery Mildew Prevention and Treatment',
        description: 'English Oak bonsai are susceptible to powdery mildew, especially in humid or shaded conditions. Prevent infection by ensuring full sun exposure, good air circulation, and avoiding overcrowding. Apply preventative fungicidal sprays in early spring and monitor regularly during warm, humid weather. If',
        timing: 'Preventative sprays early spring, treatment as needed during growing season',
        maturityStage: 'All maturity stages',
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
    id: 'rosemary',
    scientificName: 'Rosmarinus officinalis (syn. Salvia rosmarinus)',
    commonName: 'Rosemary',
    group: 'Deciduous',
    temperatureMin: 13,
    temperatureMax: 27,
    sunExposure: 'Requires **full sun** for 6 to 8 hours daily. When',
    position: 'Primarily an **Outdoor** species. It thrives outdo',
    leafType: 'Deciduous',
    climate: 'Temperate',
    flowering: 'Spring',
    nativeRegion: 'The Mediterranean region, including coastal areas of Southern Europe, North Africa, and Western Asia',
    difficultyLevel: 'Beginner',
    category: 'Beginner',
    careTips: {
      general: 'A slow to moderate grower that can reach up to 1.5 meters (5 feet) in its natural form. It is an evergreen with needle-like foliage and a woody stem that hardens well for bonsai. It responds well to f',
      soilType: 'A **sandy, well-draining** mix is crucial to prevent root rot. A suitable composition is a mix of in',
      feeding: 'Regular fertilization during growing season',
      watering: 'Water thoroughly only when the soil is dry to the touch, typically allowing the top **2-3 cm (1-2 in'
    },
    bonsaiStyles: ['Informal Upright', 'Formal Upright', 'Slanting'],
    techniques: [
      {
        name: 'Structural Pruning',
        description: 'Perform structural pruning during early spring before new growth starts to shape the main branches and establish the desired bonsai silhouette. Focus on removing overly long or crossing branches to encourage dense, compact growth typical of rosemary. Because the wood is brittle, cuts should be clean',
        timing: 'Early spring (before new growth)',
        maturityStage: 'After 2-3 years',
        notRecommended: false
      },
      {
        name: 'Maintenance Pruning',
        description: 'Maintain dense foliage by regularly trimming new shoots throughout the growing season, especially in late spring and summer. Pinch or prune back new growth to 2-3 sets of leaves to promote bushiness and reduce leaf size. This frequent maintenance is essential as rosemary responds vigorously to pruni',
        timing: 'Late spring through summer, every 2-4 weeks',
        maturityStage: 'After 1 year',
        notRecommended: false
      },
      {
        name: 'Gentle Wiring Technique',
        description: 'Use very thin, soft aluminum or annealed copper wire to gently shape branches, avoiding heavy wiring due to rosemary’s brittle stems which can easily snap. Wire only the youngest, most flexible branches and leave wiring on for a short period (4-6 weeks) to prevent damage. Alternatively, use the clip',
        timing: 'Early spring or early summer during active growth',
        maturityStage: 'After 2 years',
        notRecommended: false
      },
      {
        name: 'Repotting with Drainage Emphasis',
        description: 'Repot rosemary every 2-3 years in early spring before active growth begins, using a highly well-draining soil mix rich in inorganic components like pumice or lava rock. Ensure the pot has excellent drainage to prevent root rot. Minimize disturbance to roots during repotting due to sensitivity, and w',
        timing: 'Early spring (March-April)',
        maturityStage: 'After 1 year',
        notRecommended: false
      },
      {
        name: 'Conservative Root Pruning',
        description: 'Perform root pruning during repotting by carefully trimming only about 20-30% of the root mass to avoid shock, focusing on removing damaged or overly long roots. Use sterilized tools to prevent infection and ensure rapid healing. Avoid aggressive root pruning as rosemary is sensitive and can decline',
        timing: 'During repotting in early spring',
        maturityStage: 'After 2 years',
        notRecommended: false
      },
      {
        name: 'No Defoliation',
        description: 'Defoliation is not recommended for rosemary bonsai because the needle-like leaves are small and the species does not respond well to complete leaf removal. Removing all foliage can stress the plant and reduce its ability to photosynthesize, leading to decline. Instead, manage leaf size and density t',
        timing: 'N/A',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Pinching New Growth',
        description: 'Pinch back soft new shoots regularly during the growing season by using fingers to nip off the tips just beyond 2-3 sets of leaves. This technique encourages lateral branching and denser foliage, which is important for reducing leaf size on rosemary bonsai. Avoid cutting with scissors as pinching pr',
        timing: 'Late spring through summer, every 1-3 weeks',
        maturityStage: 'After 1 year',
        notRecommended: false
      },
      {
        name: 'Grafting Not Commonly Used',
        description: 'Grafting is generally not used on rosemary bonsai due to the species’ natural tendency to branch well and the fragility of its woody stems. Most shaping can be achieved through pruning and pinching, making grafting unnecessary. Additionally, rosemary’s brittle wood makes graft unions difficult to ma',
        timing: 'N/A',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Jin (Deadwood) Not Recommended',
        description: 'Creating jin or deadwood features is not recommended on rosemary bonsai because the brittle branches and thin bark do not respond well to deadwood techniques. Attempting to create jin can easily damage the plant and compromise its health. The natural aged look of rosemary is better achieved through',
        timing: 'N/A',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Shari (Trunk Deadwood) Not Recommended',
        description: 'Shari is not suitable for rosemary bonsai since its bark is thin and the wood brittle, making it prone to damage and decay when stripped. The species’ natural aesthetic relies more on dense foliage and textured woody stems rather than deadwood features. Focus instead on maintaining healthy bark and',
        timing: 'N/A',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Nebari Development via Surface Root Exposure',
        description: 'Encourage nebari development by gently exposing surface roots during repotting and pruning to create a stable, aesthetically pleasing root flare. Avoid heavy root pruning near the base to maintain healthy roots supporting the nebari. Using a shallow pot and maintaining consistent watering encourages',
        timing: 'During repotting every 2-3 years (early spring)',
        maturityStage: 'After 3 years',
        notRecommended: false
      },
      {
        name: 'Carving Not Recommended',
        description: 'Carving is not advised on rosemary bonsai due to its brittle wood and thin bark, which do not tolerate carving techniques well. Attempting carving can cause irreversible damage and weaken branch or trunk structure. It is better to rely on natural aging, pruning, and shaping methods to develop charac',
        timing: 'N/A',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Air Layering with Moisture Caution',
        description: 'Air layering can be used to propagate rosemary but must be done in late spring or early summer when the plant is actively growing. Use a well-draining medium like sphagnum moss wrapped around the wounded branch and keep it moist but not waterlogged to prevent rot. Due to the plant’s sensitivity to e',
        timing: 'Late spring to early summer',
        maturityStage: 'After 2 years',
        notRecommended: false
      },
      {
        name: 'Balanced Fertilizing Schedule',
        description: 'Fertilize rosemary bonsai moderately during the active growing season (spring through early fall) using a balanced, diluted fertilizer with a ratio such as 10-10-10 or 14-14-14. Apply fertilizer every 4-6 weeks at half the recommended strength to avoid salt buildup and root damage. Avoid fertilizing',
        timing: 'Spring to early fall, every 4-6 weeks',
        maturityStage: 'After 1 year',
        notRecommended: false
      },
      {
        name: 'Pest and Disease Management Focused on Root Rot and Spider Mites',
        description: 'Monitor rosemary bonsai closely for root rot caused by overwatering and poor drainage, which is the most significant threat. Ensure good air circulation and avoid waterlogged soil. Also check for spider mites during hot, dry weather and treat promptly with insecticidal soap or neem oil if detected.',
        timing: 'Year-round, with increased vigilance in spring and summer',
        maturityStage: 'All stages',
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
    id: 'japanese-apricot-ume',
    scientificName: 'Prunus mume',
    commonName: 'Japanese Apricot Ume',
    group: 'Deciduous',
    temperatureMin: 4,
    temperatureMax: 4,
    sunExposure: 'Full sunlight. Requires at least 5 to 6 hours of d',
    position: 'Outdoor. Requires a cold dormancy period with temp',
    leafType: 'Deciduous',
    climate: 'Temperate',
    flowering: 'Spring',
    nativeRegion: 'East Asia, specifically native to China (South-Central) and has been widely cultivated in Japan, Kor',
    difficultyLevel: 'Intermediate',
    category: 'Intermediate',
    careTips: {
      general: 'Medium growth rate. Deciduous tree with small, delicate, ovate leaves with serrated margins. Produces highly fragrant white or pink flowers in late winter/early spring (often before leaves emerge) and',
      soilType: 'Well-drained, fertile soil with a neutral to slightly acidic pH. A common bonsai mix is 50% Akadama,',
      feeding: 'Regular fertilization during growing season',
      watering: 'Regularly, keeping the soil moderately moist but not waterlogged. Water as the soil surface becomes'
    },
    bonsaiStyles: ['Informal Upright', 'Formal Upright', 'Slanting'],
    techniques: [
      {
        name: 'Structural Pruning',
        description: 'For Japanese Apricot Ume, structural pruning focuses on reducing leggy growth and encouraging dense ramification. Remove long shoots early in spring before bud swell to avoid losing flower buds, selectively cutting back to two or three buds to maintain flowering potential. Avoid heavy pruning in lat',
        timing: 'Late winter to early spring before bud swell; light corrective pruning in summer.',
        maturityStage: 'After 2-3 years',
        notRecommended: false
      },
      {
        name: 'Maintenance Pruning',
        description: 'Regular maintenance pruning is essential to keep the tree compact and to prevent leggy branches which are common in Ume. Pinch or trim new growth during the growing season to encourage branching and improve flower bud formation. Remove any dead or brittle branches promptly to avoid breakage damage.',
        timing: 'Throughout growing season, especially late spring and summer.',
        maturityStage: 'After 1 year',
        notRecommended: false
      },
      {
        name: 'Wiring with Caution',
        description: 'Due to brittle older branches prone to breakage, wiring Ume requires gentle handling and thinner, flexible wire. Wire young shoots and only wire thicker branches in early spring when wood is slightly more pliable. Avoid wiring older branches or apply wire for short periods only, checking frequently',
        timing: 'Early spring before active growth; check and adjust wiring every 2-4 weeks.',
        maturityStage: 'After 2 years',
        notRecommended: false
      },
      {
        name: 'Repotting in Early Spring',
        description: 'Repot Japanese Apricot Ume just before bud swell in early spring to minimize root disturbance during active growth. Use a well-draining soil mix with Akadama, Pumice, and Lava rock to prevent waterlogging. Avoid repotting after flowering as the tree becomes sensitive, and root loss can reduce flower',
        timing: 'Late winter to very early spring before bud swell (February-March).',
        maturityStage: 'After 2-3 years',
        notRecommended: false
      },
      {
        name: 'Root Pruning with Care',
        description: 'Prune roots moderately during repotting, removing about one-third of the root mass, focusing on thick, old roots to encourage fine root development. Avoid heavy root pruning to prevent stress, as Ume is sensitive to root disturbance. Trim fibrous roots carefully and maintain a healthy root flare for',
        timing: 'During repotting in early spring before bud swell.',
        maturityStage: 'After 2-3 years',
        notRecommended: false
      },
      {
        name: 'Selective Defoliation',
        description: 'Defoliation is generally not recommended for Japanese Apricot Ume because it flowers early and has small, delicate leaves. Removing leaves can reduce carbohydrate reserves needed for early bloom and may stress the tree. However, light partial defoliation in midsummer can be used cautiously to improv',
        timing: 'Mid to late summer only if tree is vigorous and healthy.',
        maturityStage: 'Mature trees only',
        notRecommended: false
      },
      {
        name: 'Pinching New Shoots',
        description: 'Pinching is critical for controlling the leggy growth habit of Ume. When new shoots reach about 3-5 cm, pinch back to 1-2 buds to promote branching and flower bud formation. This maintains compact growth and encourages the development of multiple flowering sites. Continue pinching through the growin',
        timing: 'Spring through summer as new shoots develop.',
        maturityStage: 'After 1 year',
        notRecommended: false
      },
      {
        name: 'Grafting for Flower Color',
        description: 'Grafting is used primarily to propagate desired flower colors or forms in Japanese Apricot Ume, as seed-grown trees can be variable. Scion wood is grafted onto hardy rootstocks in late winter while dormant. This technique helps preserve specific cultivars and improves flowering quality. It requires',
        timing: 'Late winter during dormancy (January to February).',
        maturityStage: 'After 1 year for rootstock preparation.',
        notRecommended: false
      },
      {
        name: 'Jin (Deadwood) Application',
        description: 'Creating jin on Japanese Apricot Ume is possible but should be done sparingly due to brittle branches prone to breakage. Jin can add age character but avoid large or heavy deadwood areas. Focus on small, delicate deadwood on minor branches created during winter dormancy for aesthetics without compro',
        timing: 'Late winter during dormancy, after leaf drop and before bud swell.',
        maturityStage: 'Mature trees only',
        notRecommended: false
      },
      {
        name: 'Limited Shari (Trunk Deadwood)',
        description: 'Shari can be applied on older Ume trunks to enhance the aged appearance but must be limited and carefully executed due to the species’ sensitivity and brittle wood. Use small, shallow shari cuts to avoid weakening the trunk. Ensure wounds are sealed to prevent infection and moisture loss. This techn',
        timing: 'Late winter during dormancy, preferably on mature trees.',
        maturityStage: 'Mature trees only',
        notRecommended: false
      },
      {
        name: 'Nebari Development via Root Flare Exposure',
        description: 'Developing a strong nebari involves exposing and cleaning surface roots during repotting and root pruning. Japanese Apricot Ume responds well to root flare exposure to create a stable, appealing base. Gradually remove soil from around the roots over successive repottings to avoid shock. Encourage fi',
        timing: 'During repotting in early spring every 2-3 years.',
        maturityStage: 'After 3 years',
        notRecommended: false
      },
      {
        name: 'Avoid Carving',
        description: 'Carving is generally not recommended for Japanese Apricot Ume because of its brittle wood and susceptibility to damage. The risk of branch breakage and poor wound healing outweighs the aesthetic benefits. Instead, focus on natural aging techniques such as jin and limited shari applied carefully.',
        timing: 'N/A',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Air Layering with Early Spring Timing',
        description: 'Air layering can be used to propagate Japanese Apricot Ume, especially for clones with desirable traits. Perform air layering in early spring just before bud break to utilize active sap flow for successful rooting. Use sphagnum moss wrapped tightly and sealed with plastic film; keep the moss moist t',
        timing: 'Early spring before bud swell (February-March).',
        maturityStage: 'After 2 years',
        notRecommended: false
      },
      {
        name: 'Fertilizing for Flower and Growth Balance',
        description: 'Fertilize Japanese Apricot Ume regularly during the growing season with a balanced fertilizer higher in phosphorus to promote flowering (e.g., 10-15-10 NPK). Reduce nitrogen in early spring to encourage flower bud formation and increase nitrogen post-flowering to support leaf and branch growth. Appl',
        timing: 'Early spring to late summer every 2-3 weeks; no feeding in winter.',
        maturityStage: 'After 1 year',
        notRecommended: false
      },
      {
        name: 'Pest and Disease Management for Ume-specific Issues',
        description: 'Monitor for aphids, scale insects, and fungal diseases such as blossom blight and powdery mildew, which commonly affect Japanese Apricot Ume. Apply horticultural oils or insecticidal soaps early in spring before flowering to control pests. Use fungicides preventatively after flowering to reduce fung',
        timing: 'Early spring before flowering and post-flowering as needed.',
        maturityStage: 'All stages',
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
    id: 'scots-pine',
    scientificName: 'Pinus sylvestris',
    commonName: 'Scots Pine',
    group: 'Deciduous',
    temperatureMin: 18,
    temperatureMax: 27,
    sunExposure: 'Full sun is essential. Place in a location that re',
    position: 'Outdoor. Requires a period of cold dormancy and fu',
    leafType: 'Deciduous',
    climate: 'Temperate',
    flowering: 'Spring',
    nativeRegion: 'The only pine native to Northern Europe, with a vast natural range extending from Scotland and Spain',
    difficultyLevel: 'Expert',
    category: 'Advanced',
    careTips: {
      general: 'A single-flush pine species, meaning it produces only one flush of growth per year. It has a slower growth rate compared to two-flush pines. It buds easily and is known for its reddish, scaly bark on',
      soilType: 'Requires a very well-draining, porous, and aerated bonsai soil mix to prevent root rot, as pines dis',
      feeding: 'Regular fertilization during growing season',
      watering: 'Water regularly and thoroughly, allowing the top inch of the soil to dry out slightly between wateri'
    },
    bonsaiStyles: ['Informal Upright', 'Formal Upright', 'Slanting'],
    techniques: [
      {
        name: 'Structural Pruning',
        description: 'For Scots Pine, structural pruning focuses on selecting a dominant leader and removing competing branches to maintain a natural, aged profile. Cut back long, overly vigorous shoots after the single growth flush to encourage ramification and maintain compactness. Avoid heavy pruning of older, thick b',
        timing: 'Late spring to early summer, just after candle growth has hardened off',
        maturityStage: 'After 3-4 years',
        notRecommended: false
      },
      {
        name: 'Maintenance Pruning',
        description: 'Maintenance pruning involves pinching back candle growth to control needle length and density without decandling. This helps maintain the tree’s health and compact growth habit. Remove brown or yellow needles as they appear to promote photosynthesis efficiency. Avoid pruning during extreme heat to p',
        timing: 'Early summer, immediately after candle elongation; repeat as needed during growth period',
        maturityStage: 'From year 2 onwards',
        notRecommended: false
      },
      {
        name: 'Wiring with Caution',
        description: 'Wiring Scots Pine requires gentle handling due to their brittle branches. Use thin, flexible aluminum wire and avoid sharp bends to prevent breakage. Apply wiring in late winter or very early spring before bud break to allow branches to harden into shape. Remove wire promptly once set, typically wit',
        timing: 'Late winter to early spring, before bud swell',
        maturityStage: 'After 2 years, once branches are woody',
        notRecommended: false
      },
      {
        name: 'Spring Repotting',
        description: 'Repot Scots Pine in early spring before bud swell, using a fast-draining soil mix like 1:1:1 Akadama, Pumice, and Lava rock. This timing minimizes stress and supports root recovery during the growth flush. Avoid repotting during summer or late autumn due to heat stress and dormancy. Protect roots fr',
        timing: 'Early spring, before buds start swelling',
        maturityStage: 'Every 2-3 years, starting from year 3',
        notRecommended: false
      },
      {
        name: 'Conservative Root Pruning',
        description: 'Root pruning should be moderate to prevent excessive stress, focusing on removing large, circling roots and thinning the root ball to encourage new fine root growth. Avoid aggressive root cuts as Scots Pine roots are sensitive and slow to regenerate. Use sharp tools and perform root pruning during r',
        timing: 'During spring repotting, every 2-3 years',
        maturityStage: 'After 3 years',
        notRecommended: false
      },
      {
        name: 'Avoid Defoliation',
        description: 'Defoliation is not recommended for Scots Pine as it is a needle-bearing conifer with a single flush growth pattern. Removing needles stresses the tree and can reduce its vigor, potentially causing dieback. Instead, manage needle density through careful candle pinching and pruning.',
        timing: 'N/A',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Candle Pinching',
        description: 'Pinching the candles is essential for Scots Pine to control shoot length and encourage dense branching. Pinch the soft candle tips back by about half their length shortly after elongation but before needles fully expand. Do not decandle (remove entire candles) as this can be fatal. This technique ma',
        timing: 'Late spring to early summer, shortly after candle elongation',
        maturityStage: 'From year 2 onwards',
        notRecommended: false
      },
      {
        name: 'Grafting for Branch Improvement',
        description: 'Grafting is occasionally used to improve branch placement or add superior nebari wood on Scots Pine. Scion wood should be taken from healthy, vigorous trees and grafted in early spring. This technique is advanced and used selectively to enhance aesthetics or repair damaged areas.',
        timing: 'Early spring before bud break',
        maturityStage: 'Mature trees only',
        notRecommended: false
      },
      {
        name: 'Jin Creation',
        description: 'Creating Jin (deadwood branches) is highly suitable and valued on Scots Pine to enhance its rugged, aged appearance. Use sharp carving tools to strip bark from selected branches, then apply lime sulfur to preserve and bleach the deadwood. Perform Jin creation carefully on mature branches to prevent',
        timing: 'Late summer to early autumn, when growth slows',
        maturityStage: 'Mature trees only',
        notRecommended: false
      },
      {
        name: 'Shari Development',
        description: 'Shari (trunk deadwood) can be effectively developed on Scots Pine to showcase its naturally weathered bark and add character. Use carving tools and lime sulfur to create and preserve deadwood areas on the trunk. Avoid overly aggressive carving, as Scots Pine bark is delicate and flaky, especially on',
        timing: 'Late summer to early autumn',
        maturityStage: 'Mature trees only',
        notRecommended: false
      },
      {
        name: 'Nebari Enhancement',
        description: 'Developing a strong nebari on Scots Pine involves careful root pruning and positioning during repotting to encourage radial root spread. Remove deep or circling roots and position surface roots evenly around the trunk. Applying slight root flare by gently scraping bark near the base can stimulate ro',
        timing: 'During spring repotting every 2-3 years',
        maturityStage: 'After 3 years',
        notRecommended: false
      },
      {
        name: 'Carving with Care',
        description: 'Carving is recommended to enhance deadwood features but must be done cautiously due to the thin, flaky bark and brittle branches of Scots Pine. Use fine carving tools and work slowly to avoid damaging live tissue. Apply lime sulfur after carving to protect exposed wood and create a natural aged look',
        timing: 'Late summer to early autumn',
        maturityStage: 'Mature trees only',
        notRecommended: false
      },
      {
        name: 'Air Layering with Rooting Hormone',
        description: 'Air layering is occasionally used to propagate Scots Pine, especially for difficult-to-root specimens or to create new branches. Apply rooting hormone to encourage root formation, and wrap the layered section with moist sphagnum moss and plastic. Perform in late spring to early summer when the tree',
        timing: 'Late spring to early summer',
        maturityStage: 'After 3 years',
        notRecommended: false
      },
      {
        name: 'Seasonal Fertilizing',
        description: 'Fertilize Scots Pine monthly from early spring (after bud swell) through late summer with a balanced, low-nitrogen fertilizer to promote healthy growth without excessive elongation. Cease fertilizing in autumn to prepare the tree for dormancy. Use organic or slow-release fertilizers to support soil',
        timing: 'Monthly from early spring to late summer',
        maturityStage: 'From year 2 onwards',
        notRecommended: false
      },
      {
        name: 'Targeted Pest and Disease Management',
        description: 'Scots Pine is susceptible to aphids, pine needle scale, and root rot if overwatered. Inspect regularly for pests and treat infestations early with insecticidal soap or horticultural oil. Prevent root rot by ensuring fast-draining soil and avoiding overwatering. Protect the tree from harsh winter fre',
        timing: 'Inspect monthly during growing season; treat as needed',
        maturityStage: 'All stages',
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
    id: 'japanese-beech',
    scientificName: 'Fagus crenata',
    commonName: 'Japanese Beech',
    group: 'Deciduous',
    temperatureMin: 15,
    temperatureMax: 25,
    sunExposure: 'Full sun to partial shade. Requires a minimum of 4',
    position: 'Outdoor. It is a hardy, deciduous tree that requir',
    leafType: 'Deciduous',
    climate: 'Temperate',
    flowering: 'Spring',
    nativeRegion: 'Japan (native to the islands of Hokkaidô, Honshu, Kyushu, and Shikoku).',
    difficultyLevel: 'Beginner',
    category: 'Beginner',
    careTips: {
      general: 'Deciduous, marcescent (retains some dried leaves through winter). It is apically and distally dominant, with a single flush of growth per year, which is a key factor in its care. It has a smooth, silv',
      soilType: 'A highly porous, well-draining, and slightly acidic substrate is preferred. A common mix is 100% Aka',
      feeding: 'Regular fertilization during growing season',
      watering: 'Water as soon as the surface of the soil begins to dry out. It must never dry out completely, but ov'
    },
    bonsaiStyles: ['Informal Upright', 'Formal Upright', 'Slanting'],
    techniques: [
      {
        name: 'Structural Pruning',
        description: 'For Japanese Beech, structural pruning focuses on establishing a strong primary branch framework early on due to its apical dominance and single flush growth. Remove crossing or inward-growing branches during early spring just before bud break to avoid unnecessary stress. Preserve smooth bark areas',
        timing: 'Early spring, just before bud break',
        maturityStage: 'After 2-3 years',
        notRecommended: false
      },
      {
        name: 'Maintenance Pruning',
        description: 'Maintenance pruning involves removing unwanted shoots and thinning dense areas after the single annual growth flush in late summer or early autumn. Pinch back new shoots to encourage secondary branching but avoid cutting back too hard to prevent weakening the tree. Remove any damaged or diseased woo',
        timing: 'Late summer to early autumn, post-growth flush',
        maturityStage: 'After 2 years',
        notRecommended: false
      },
      {
        name: 'Wiring with Minimal Contact',
        description: 'Due to the Japanese Beech\'s smooth, easily scarred bark, wiring should be done carefully with minimal contact and monitored frequently. Use thin, flexible aluminum or annealed copper wire, and apply it loosely to avoid indentations. Wiring is best done in early spring or late autumn when the bark is',
        timing: 'Early spring or late autumn',
        maturityStage: 'After 3 years',
        notRecommended: false
      },
      {
        name: 'Repotting Timing and Technique',
        description: 'Repot Japanese Beech every 3-5 years during early spring before bud break when the tree is still dormant but root activity begins. Use a well-draining, slightly acidic substrate rich in akadama mixed with volcanic gravel. Avoid repotting during the growing season to prevent stress and reduce the ris',
        timing: 'Early spring, before bud break',
        maturityStage: 'After 3 years',
        notRecommended: false
      },
      {
        name: 'Root Pruning with Minimal Disturbance',
        description: 'Given the species\' sensitivity to root disturbance, root pruning should be minimal and limited to removing only large, unhealthy roots during repotting. Use clean, sharp tools to make precise cuts and avoid excessive root ball reduction to maintain vigor. After pruning, apply a root stimulator or my',
        timing: 'During repotting in early spring',
        maturityStage: 'After 3 years',
        notRecommended: false
      },
      {
        name: 'Defoliation Avoidance',
        description: 'Complete defoliation is generally not recommended for Japanese Beech due to its single annual growth flush and sensitivity to stress. Removing all leaves can weaken the tree and reduce energy reserves necessary for the next growth cycle. Instead, selective leaf trimming or partial thinning to improv',
        timing: 'Not applicable',
        maturityStage: 'All stages',
        notRecommended: true
      },
      {
        name: 'Pinching After Growth Flush',
        description: 'Pinching new shoots immediately after the single annual growth flush in late spring to early summer encourages denser secondary branching. Use clean fingernails or scissors to pinch back soft new growth just beyond 2-3 pairs of leaves, avoiding damage to buds. This technique promotes fine ramificati',
        timing: 'Late spring to early summer, soon after growth flush',
        maturityStage: 'After 2 years',
        notRecommended: false
      },
      {
        name: 'Grafting for Branch Improvement',
        description: 'Grafting is occasionally used on Japanese Beech to introduce desirable branch structures or improve ramification on older trees. Approach grafting in late winter or early spring using scion wood from vigorous, well-formed branches. This method compensates for slow natural growth and apical dominance',
        timing: 'Late winter to early spring, dormant period',
        maturityStage: 'Mature trees only',
        notRecommended: false
      },
      {
        name: 'Jin (Deadwood) Technique',
        description: 'Jin is generally not recommended on Japanese Beech because its bark is smooth and delicate, and deadwood creation can scar and detract from its natural elegance. The species’ aesthetic relies on clean, living bark surfaces and fine branching rather than rugged deadwood features. If jin is applied, i',
        timing: 'Not recommended',
        maturityStage: 'Mature trees only if applied',
        notRecommended: true
      },
      {
        name: 'Shari (Trunk Deadwood) Technique',
        description: 'Shari is not typically suitable for Japanese Beech due to the species’ smooth, silvery bark which scars easily and detracts from its natural beauty. Creating shari can cause irreversible damage and increase susceptibility to disease. Preservation of the intact bark and elegant trunk lines is the pre',
        timing: 'Not recommended',
        maturityStage: 'Mature trees only if applied',
        notRecommended: true
      },
      {
        name: 'Nebari Development via Surface Root Pruning',
        description: 'Enhance nebari by encouraging surface root spread during repotting through minimal root pruning and careful soil placement. Expose and prune thick roots slightly to promote radial root growth and stability. Position the tree in the pot to favor symmetrical root flare, avoiding root girdling. This te',
        timing: 'During repotting in early spring',
        maturityStage: 'After 3 years',
        notRecommended: false
      },
      {
        name: 'Carving Avoidance',
        description: 'Carving is generally discouraged on Japanese Beech due to its thin, smooth bark and slow healing tendency. Excessive carving risks permanent scarring and compromises tree health. Instead, natural shaping through pruning and wiring is preferred to maintain the species’ clean, elegant trunk and branch',
        timing: 'Not recommended',
        maturityStage: 'Mature trees only if applied',
        notRecommended: true
      },
      {
        name: 'Air Layering with Rooting Hormones',
        description: 'Air layering can be used to propagate Japanese Beech, especially for difficult-to-root specimens or to create new bonsai material from mature branches. Perform layering in late spring or early summer when sap flow is active, using rooting hormone to improve success rates. Wrap the wounded area with',
        timing: 'Late spring to early summer',
        maturityStage: 'After 3 years',
        notRecommended: false
      },
      {
        name: 'Seasonal Fertilizing Schedule',
        description: 'Fertilize Japanese Beech regularly from early spring after bud break through late summer using a balanced, slow-release fertilizer with slightly acidic pH. Reduce feeding in autumn to prepare the tree for dormancy and avoid fertilizing during winter dormancy. Use organic or mineral-based fertilizers',
        timing: 'Early spring to late summer, monthly or biweekly',
        maturityStage: 'After 1 year',
        notRecommended: false
      },
      {
        name: 'Pest and Disease Management',
        description: 'Japanese Beech is susceptible to aphids, scale insects, and fungal diseases like powdery mildew during humid conditions. Monitor trees regularly in spring and summer, treating infestations promptly with insecticidal soaps or horticultural oils. Improve air circulation and avoid overhead watering to',
        timing: 'Spring and summer, ongoing monitoring',
        maturityStage: 'All stages',
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
    id: 'crape-myrtle-or-crepe-myrtle',
    scientificName: 'Lagerstroemia indica',
    commonName: 'Crape Myrtle (or Crepe Myrtle)',
    group: 'Deciduous',
    temperatureMin: 24,
    temperatureMax: 32,
    sunExposure: 'Requires **full sun** (at least 6 hours of direct',
    position: 'Outdoor in warm climates, or protected outdoors/ov',
    leafType: 'Deciduous',
    climate: 'Temperate',
    flowering: 'Spring',
    nativeRegion: 'Subtropical regions of Asia and Australia. The species is widely cultivated and naturalized in many',
    difficultyLevel: 'Intermediate',
    category: 'Intermediate',
    careTips: {
      general: 'A subtropical deciduous tree with an upright habit and a moderate to fast growth rate, especially when young. It is highly amenable to pruning, which promotes dense ramification and smaller leaf size.',
      soilType: 'A well-draining, porous soil mix is essential. A common recommendation is a mix containing approxima',
      feeding: 'Regular fertilization during growing season',
      watering: 'Requires well-drained soil and should be watered thoroughly when the soil surface appears dry. **Wat'
    },
    bonsaiStyles: ['Informal Upright', 'Formal Upright', 'Slanting'],
    techniques: [
      {
        name: 'Structural Pruning',
        description: 'Perform heavy structural pruning in late winter or early spring before new growth begins to shape the tree\'s primary framework. Focus on removing crossing branches, inward-growing shoots, and overly vigorous vertical shoots to maintain an upright, balanced structure. This promotes strong branch rami',
        timing: 'Late winter to early spring (before bud break)',
        maturityStage: 'After 2-3 years',
        notRecommended: false
      },
      {
        name: 'Maintenance Pruning',
        description: 'Regularly prune throughout the growing season to pinch back new growth tips, encouraging dense ramification and smaller leaves. Remove any unwanted shoots immediately after flowering to stimulate new flowering wood and maintain desired shape. This keeps the silhouette compact and promotes continuous',
        timing: 'Spring through summer, especially after flowering flushes',
        maturityStage: 'After 1 year',
        notRecommended: false
      },
      {
        name: 'Wiring with Soft Aluminum Wire',
        description: 'Use soft aluminum wire for wiring branches to avoid damaging the smooth, peeling bark. Apply wiring in early spring when the tree is entering active growth to take advantage of pliable branches. Avoid wiring during summer heat to prevent bark scarring and remove wires promptly as branches harden.',
        timing: 'Early spring (bud swell to early leaf-out)',
        maturityStage: 'After 2 years',
        notRecommended: false
      },
      {
        name: 'Repotting in Early Spring',
        description: 'Repot crape myrtle bonsai in early spring before bud break to minimize stress. Use a well-draining soil mix with approximately 40% organic and 60% inorganic material to balance moisture retention and drainage. Avoid repotting during summer or autumn when the tree is flowering or entering dormancy.',
        timing: 'Late winter to early spring (before growth starts)',
        maturityStage: 'After 2-3 years',
        notRecommended: false
      },
      {
        name: 'Root Pruning During Repotting',
        description: 'During repotting, prune back approximately one-third of the root mass focusing on removing thick, woody roots while preserving fine feeder roots. This encourages a compact root system and improves nutrient uptake. Perform root pruning carefully to avoid excessive stress and allow recovery during the',
        timing: 'Concurrent with repotting in early spring',
        maturityStage: 'After 2-3 years',
        notRecommended: false
      },
      {
        name: 'Selective Defoliation',
        description: 'Partial defoliation can be used in mid-summer to reduce leaf size and encourage a second flush of smaller leaves, enhancing ramification. Avoid full defoliation as crape myrtle is deciduous and relies on foliage for energy storage. Only remove some mature leaves from vigorous shoots to balance energ',
        timing: 'Mid-summer (after first growth flush)',
        maturityStage: 'After 3 years',
        notRecommended: false
      },
      {
        name: 'Pinching New Shoots',
        description: 'Pinch back soft new shoots regularly during the growing season to promote dense branching and smaller leaves. Use finger pinching rather than cutting to avoid stressing the tissue and to encourage multiple shoot development. Pinching is essential after flowering since blooms form on new growth.',
        timing: 'Spring through summer, every 2-3 weeks',
        maturityStage: 'After 1 year',
        notRecommended: false
      },
      {
        name: 'Grafting for Flower Color or Branch Improvement',
        description: 'Grafting can be used to change flower color or improve branch placement on established trees, usually through approach grafting in early spring. It is effective because crape myrtle readily accepts grafts, allowing customization of floral display and refinement of branch structure without long-term',
        timing: 'Early spring (before active growth)',
        maturityStage: 'Mature trees only',
        notRecommended: false
      },
      {
        name: 'Jin (Deadwood) Creation',
        description: 'Creating jin on crape myrtle is suitable due to its naturally peeling bark and textured trunk. Deadwood can add visual interest, especially on older branches or stubs, but care must be taken to preserve the living bark and avoid fungal infection. Use sharp tools and apply lime sulfur to seal and ble',
        timing: 'Late winter or early spring when tree is dormant',
        maturityStage: 'Mature trees only',
        notRecommended: false
      },
      {
        name: 'Shari (Trunk Deadwood) Application',
        description: 'Shari is appropriate on crape myrtle due to its naturally peeling, smooth bark which can be artistically enhanced by removing sections of live bark to expose wood beneath. This technique highlights the tree’s natural texture but should be applied cautiously to avoid excessive damage and risk of dise',
        timing: 'Late winter during dormancy',
        maturityStage: 'Mature trees only',
        notRecommended: false
      },
      {
        name: 'Nebari Development by Root Pruning and Surface Roots',
        description: 'Encourage nebari by pruning thick roots during repotting and training surface roots to spread evenly around the trunk base. Plant the tree slightly higher in the soil to expose roots gradually, promoting a stable and aesthetically pleasing root flare. Regular root pruning every 2-3 years improves ne',
        timing: 'During repotting every 2-3 years, early spring',
        maturityStage: 'After 3 years',
        notRecommended: false
      },
      {
        name: 'Carving for Trunk Texture',
        description: 'Carving is generally not recommended on crape myrtle bonsai as the species’ natural beauty lies in its smooth, peeling bark and delicate flowers. Artificial carving can damage the thin bark and increase susceptibility to disease. Instead, emphasize natural bark characteristics through proper cultura',
        timing: 'N/A',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Air Layering for Propagation',
        description: 'Air layering is an effective propagation method for crape myrtle to produce clones with identical flower color and characteristics. Perform air layering in late spring or early summer when sap flow is active, using sphagnum moss and plastic wrap to encourage root formation on flexible, healthy branc',
        timing: 'Late spring to early summer',
        maturityStage: 'After 2 years',
        notRecommended: false
      },
      {
        name: 'Fertilizing with Balanced, Low Nitrogen Formula',
        description: 'Use a balanced fertilizer with a slightly lower nitrogen ratio during the growing season to promote flowering over excessive leafy growth. Apply every 2 weeks from early spring through summer, then reduce or stop fertilizing during dormancy. Organic fertilizers or slow-release formulas are recommend',
        timing: 'Early spring through summer, every 2 weeks',
        maturityStage: 'After 1 year',
        notRecommended: false
      },
      {
        name: 'Watering and Humidity Management',
        description: 'Water crape myrtle bonsai freely during the active growing season, ensuring thorough watering once or twice daily in hot, full sun conditions. Use well-draining soil to prevent root rot and reduce watering drastically during winter dormancy, maintaining barely moist soil. Although humidity control i',
        timing: 'Spring and summer daily watering; winter minimal watering',
        maturityStage: 'All stages',
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
    id: 'chinese-pepper',
    scientificName: 'Zanthoxylum piperitum',
    commonName: 'Chinese Pepper',
    group: 'Deciduous',
    temperatureMin: 10,
    temperatureMax: 50,
    sunExposure: 'Requires a lot of light. In summer (May to Septemb',
    position: 'Indoor in temperate climates, as it must be protec',
    leafType: 'Deciduous',
    climate: 'Temperate',
    flowering: 'Spring',
    nativeRegion: 'Asia, specifically common in the Himalaya, Japan, and Korea.',
    difficultyLevel: 'Beginner',
    category: 'Beginner',
    careTips: {
      general: 'A fast-growing species, capable of increasing in size by 5 to 10 cm per month in spring and summer with adequate fertilization and light. It typically grows as a large shrub, up to 2m (6ft) tall in na',
      soilType: 'A well-draining, slightly acidic to neutral soil mix is required. A recommended mix is Akadama, pumi',
      feeding: 'Regular fertilization during growing season',
      watering: 'Water thoroughly as soon as the surface of the soil becomes dry. It requires a lot of water in summe'
    },
    bonsaiStyles: ['Informal Upright', 'Formal Upright', 'Slanting'],
    techniques: [
      {
        name: 'Structural Pruning',
        description: 'Prune Zanthoxylum piperitum during early spring just before growth resumes to remove unwanted branches and shape the tree. Focus on cutting back vigorous, thorny branches to encourage a balanced structure and reduce sharp thorns near the main trunk for safer handling. Remove crossing or inward-growi',
        timing: 'Early spring (March-April) before active growth starts',
        maturityStage: 'After 2-3 years',
        notRecommended: false
      },
      {
        name: 'Maintenance Pruning',
        description: 'Perform light pruning throughout the growing season to maintain shape and encourage denser foliage. Pinch back new shoots regularly to control vigor and minimize excessive thorn development on young branches. Remove any dead or weak growth immediately to keep the tree healthy and attractive.',
        timing: 'Late spring through summer, every 4-6 weeks',
        maturityStage: 'After first year',
        notRecommended: false
      },
      {
        name: 'Wiring with Protective Padding',
        description: 'Use aluminum or annealed copper wire with soft padding to protect the bark and sharp thorns when wiring branches. Wire branches during late winter or early spring when the wood is still flexible, and wrap wires carefully to avoid damaging the delicate bark and spines. Remove wires after 6-8 weeks to',
        timing: 'Late winter to early spring (February-April)',
        maturityStage: 'After 2 years',
        notRecommended: false
      },
      {
        name: 'Spring Repotting',
        description: 'Repot Zanthoxylum piperitum every 2 years in early spring before new growth begins, using a well-draining mixture of Akadama, pumice, and humus in equal parts. Choose a slightly larger container to accommodate fast growth, and avoid repotting in hot summer months to prevent root stress. Ensure the r',
        timing: 'Early spring (March)',
        maturityStage: 'After 2-3 years',
        notRecommended: false
      },
      {
        name: 'Moderate Root Pruning',
        description: 'When repotting, prune back approximately one-third of the roots, focusing on long, thick roots to encourage fine root development in this fast-growing species. Avoid excessive root pruning to prevent stunting its vigorous growth. Use sterilized tools to prevent infection, especially due to the speci',
        timing: 'During repotting in early spring',
        maturityStage: 'After 2-3 years',
        notRecommended: false
      },
      {
        name: 'Selective Defoliation',
        description: 'Partial defoliation can be performed cautiously during midsummer to reduce leaf size and promote back-budding on older branches. Avoid full defoliation as the species’ small, glossy leaves are sensitive and the tree may not tolerate heavy leaf loss well. This technique also helps reduce excessive sh',
        timing: 'Mid to late summer (July-August)',
        maturityStage: 'Mature trees only (After 5 years)',
        notRecommended: false
      },
      {
        name: 'Regular Pinching',
        description: 'Pinch new shoots regularly during spring and summer to control growth and encourage bushier foliage. Remove the tip of each growing shoot once it has developed 4-6 leaflets to slow elongation and promote lateral branching. This also helps minimize the density of thorns on young growth, making the tr',
        timing: 'Spring through summer, every 2-3 weeks',
        maturityStage: 'After first year',
        notRecommended: false
      },
      {
        name: 'Grafting for Dioecious Selection',
        description: 'Grafting is employed to propagate female specimens on male rootstocks or vice versa, ensuring fruit and seed production. This technique helps maintain desired sex traits, as Zanthoxylum piperitum is dioecious and sex cannot be reliably determined until maturity. Perform grafting in early spring when',
        timing: 'Early spring (March-April)',
        maturityStage: 'After 3-4 years',
        notRecommended: false
      },
      {
        name: 'Jin (Deadwood) Creation',
        description: 'Creating jin on Zanthoxylum piperitum is generally not recommended due to the species’ soft bark and prominent thorns, which can make deadwood look unnatural and increase the risk of infection. However, minor jin can be created on older, thicker branches after careful preparation and treatment with',
        timing: 'Late summer to early autumn (August-September)',
        maturityStage: 'Mature trees only',
        notRecommended: true
      },
      {
        name: 'Shari (Trunk Deadwood) Application',
        description: 'Shari is not typically recommended on this species because the naturally thorny and textured bark provides sufficient visual interest. Removing bark for shari can expose vulnerable living tissue and increase disease risk. If used, it must be done with extreme care and treated promptly with appropria',
        timing: 'Not recommended',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Nebari Development by Surface Root Training',
        description: 'Encourage a wide, stable nebari by carefully spreading and fixing surface roots outward during repotting. Because the species has vigorous roots, maintaining visible surface roots enhances the bonsai’s aged appearance. Avoid deep root pruning near the nebari to preserve this feature and promote thic',
        timing: 'During repotting in early spring',
        maturityStage: 'After 3 years',
        notRecommended: false
      },
      {
        name: 'Carving',
        description: 'Carving is generally discouraged for Zanthoxylum piperitum due to its relatively soft wood and presence of thorns, which complicate detailed carving and increase risk of damage. The species’ natural bark texture and thorn patterns provide enough aesthetic interest without artificial carving. Minimal',
        timing: 'Not recommended',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Air Layering Propagation',
        description: 'Air layering is an effective propagation method for Zanthoxylum piperitum, performed in early summer when growth is vigorous. Select healthy branches free of excessive thorns, wound the bark, wrap sphagnum moss around the area, and cover with plastic to maintain moisture. Roots typically develop wit',
        timing: 'Early to mid-summer (June-July)',
        maturityStage: 'After 2 years',
        notRecommended: false
      },
      {
        name: 'Seasonal Fertilizing',
        description: 'Fertilize Zanthoxylum piperitum regularly from early spring through late summer using a balanced fertilizer with equal NPK (e.g., 10-10-10) and micronutrients to support its fast growth. Apply organic or slow-release fertilizers monthly and supplement with liquid fertilizer biweekly in peak growing',
        timing: 'March to September, monthly solid fertilizer, biweekly liquid fertilizer in summer',
        maturityStage: 'After first year',
        notRecommended: false
      },
      {
        name: 'Pest and Disease Management',
        description: 'Monitor for common pests such as aphids, spider mites, and scale insects, especially during warm months. Use insecticidal soap or neem oil treatments promptly to control infestations. Prevent fungal diseases by ensuring good air circulation, avoiding stagnant moisture in soil, and watering carefully',
        timing: 'Spring through autumn, weekly inspections',
        maturityStage: 'All stages',
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
    id: 'common-myrtle-also-known-as-myrtle-or-cerejeira',
    scientificName: 'Myrtus communis (often the compact variety, *Myrtus communis \'Compacta\'*, is used for bonsai)',
    commonName: 'Common Myrtle (also known as Myrtle or Cerejeira)',
    group: 'Deciduous',
    temperatureMin: 40,
    temperatureMax: 10,
    sunExposure: 'Requires **full sun** during spring and autumn. Du',
    position: '**Outdoor** during the growing season (spring to a',
    leafType: 'Deciduous',
    climate: 'Temperate',
    flowering: 'Spring',
    nativeRegion: '**Mediterranean region** and **Northern Africa**. Specific countries include Spain, Italy, Greece, a',
    difficultyLevel: 'Beginner',
    category: 'Beginner',
    careTips: {
      general: '**Fast-growing** and responds very well to pruning, making it excellent for ramification. It **back-buds readily**, even on old wood. It develops a cinnamon-colored bark that becomes lightly furrowed',
      soilType: 'Prefers a **lime-free**, **neutral to acidic** soil mix that is evenly moist but drains well. A reco',
      feeding: 'Regular fertilization during growing season',
      watering: 'Requires **frequent watering** to keep the soil **constantly moist** but not waterlogged. It is extr'
    },
    bonsaiStyles: ['Informal Upright', 'Formal Upright', 'Slanting'],
    techniques: [
      {
        name: 'Structural Pruning',
        description: 'Perform structural pruning in late winter or early spring before new growth begins to shape the primary branches and remove any crossing or weak branches. This species responds well to aggressive pruning due to its fast growth and strong back-budding ability, allowing you to create a balanced framew',
        timing: 'Late winter to early spring (before bud break)',
        maturityStage: 'After 2-3 years',
        notRecommended: false
      },
      {
        name: 'Maintenance Pruning',
        description: 'Pinch or prune new shoots regularly during the growing season to encourage branching and ramification, taking advantage of the Myrtle\'s rapid growth. Remove long shoots by cutting back to 2-3 pairs of leaves to maintain compact foliage pads. Always prune just above a leaf node to promote back-buddin',
        timing: 'Spring through early autumn, every 2-3 weeks',
        maturityStage: 'From first year',
        notRecommended: false
      },
      {
        name: 'Wiring',
        description: 'Use soft aluminum or annealed copper wire to shape branches during late winter or early spring when branches are less brittle. The flexible but woody nature of Myrtle branches requires careful wiring without excessive pressure to prevent snapping. Wiring should be left on no longer than 3-4 months d',
        timing: 'Late winter to early spring; remove wiring before late summer',
        maturityStage: 'After 1-2 years of growth',
        notRecommended: false
      },
      {
        name: 'Repotting',
        description: 'Repot mature Common Myrtle every 2 years in early spring before active growth starts, using a lime-free, acidic, well-draining substrate with added peat or Kanuma to maintain moisture and acidity. Ensure the root ball never dries out during repotting and avoid repotting in late summer or autumn to p',
        timing: 'Early spring, before bud break',
        maturityStage: 'From first year',
        notRecommended: false
      },
      {
        name: 'Root Pruning',
        description: 'During repotting, prune roots moderately by removing about one-third of the root mass, focusing on thick, woody roots to encourage fine root development. Avoid excessive root pruning, as Common Myrtle is sensitive to drying and root shock. Maintain a moist root ball during the process and repot imme',
        timing: 'At repotting, early spring',
        maturityStage: 'From first year',
        notRecommended: false
      },
      {
        name: 'Defoliation',
        description: 'Partial defoliation is recommended in early summer to reduce leaf size and improve light penetration to inner branches, promoting back-budding and finer ramification. Avoid complete defoliation as it can stress the plant severely, especially given its sensitivity to drying out. Defoliation also enco',
        timing: 'Early summer, after initial flush of growth',
        maturityStage: 'After 2-3 years',
        notRecommended: false
      },
      {
        name: 'Pinching',
        description: 'Pinch tender new growth regularly during the growing season by using fingers to nip off the soft tips of shoots, encouraging a bushier habit and denser foliage pads. This technique is preferred over cutting for young shoots as it stimulates more compact growth and maintains the tree’s natural fragra',
        timing: 'Spring to early autumn, every 1-2 weeks',
        maturityStage: 'From first year',
        notRecommended: false
      },
      {
        name: 'Grafting',
        description: 'Grafting is rarely necessary with Common Myrtle due to its strong natural back-budding and fast growth, but can be used to repair damaged branches or introduce specific cultivars. When performed, use approach grafting or whip-and-tongue grafting in early spring to ensure good cambial contact. Grafti',
        timing: 'Early spring, before bud break',
        maturityStage: 'After 3-4 years',
        notRecommended: false
      },
      {
        name: 'Jin (Deadwood) Technique',
        description: 'Creating Jin is generally not recommended on Common Myrtle because its bark is thin and cinnamon-colored, and it does not naturally develop robust deadwood features. Attempting Jin may cause excessive stress or infection. Instead, emphasize healthy bark and natural aging through pruning and careful',
        timing: 'N/A',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Shari (Trunk Deadwood) Technique',
        description: 'Shari is not advised for this species, as the thin, smooth cinnamon bark can be easily damaged and does not respond well to trunk carving. The aesthetic appeal of the Myrtle lies in its lively bark and foliage rather than deadwood features. Focus on trunk taper and bark development through cultural',
        timing: 'N/A',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Nebari Development',
        description: 'Develop the nebari by selecting and encouraging multiple surface roots during early growth, pruning vertical or deep roots to promote radial root spread. When repotting, comb out roots gently and prune selectively to maintain a flat, even root flare. Using a wider shallow container during early deve',
        timing: 'After first year, during repotting in early spring',
        maturityStage: 'From first year',
        notRecommended: false
      },
      {
        name: 'Carving',
        description: 'Carving is not recommended for Common Myrtle since its bark is delicate and prone to damage, and the species does not naturally develop features that benefit from carving. The tree’s charm comes from its lush foliage, flowers, and smooth bark, so keep the trunk clean and healthy instead of carving.',
        timing: 'N/A',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Air Layering',
        description: 'Air layering can be successfully used to propagate Common Myrtle, particularly in late spring or early summer when sap flow is active. Remove a ring of bark about 1-2 cm wide, apply rooting hormone, and wrap with moist sphagnum moss and plastic to maintain humidity. This technique allows for cloning',
        timing: 'Late spring to early summer',
        maturityStage: 'After 2 years',
        notRecommended: false
      },
      {
        name: 'Fertilizing',
        description: 'Feed Common Myrtle with a balanced, slow-release fertilizer or liquid fertilizer every 2-3 weeks during the growing season (spring to early autumn). Use fertilizers higher in nitrogen during spring to encourage leaf growth, then switch to balanced or slightly higher phosphorus and potassium to suppo',
        timing: 'Spring to early autumn, every 2-3 weeks',
        maturityStage: 'From first year',
        notRecommended: false
      },
      {
        name: 'Pest and Disease Management',
        description: 'Common Myrtle is susceptible to scale insects, spider mites, and fungal leaf spots, especially under poor air circulation or excessive humidity. Regularly inspect foliage and treat infestations early with horticultural oil or insecticidal soap. Maintain good airflow, avoid overwatering, and remove f',
        timing: 'Year-round monitoring, intensified in spring and summer',
        maturityStage: 'From first year',
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
    id: 'ash-european-ash',
    scientificName: 'Fraxinus excelsior',
    commonName: 'Ash (European Ash)',
    group: 'Deciduous',
    temperatureMin: -10,
    temperatureMax: -10,
    sunExposure: 'Full sun or partial shade. Full sun is suitable du',
    position: 'Outdoor. It is fully hardy and requires no special',
    leafType: 'Deciduous',
    climate: 'Temperate',
    flowering: 'Spring',
    nativeRegion: 'Europe and the Northern Hemisphere.',
    difficultyLevel: 'Expert',
    category: 'Advanced',
    careTips: {
      general: 'Vigorous, fast-growing, with a thick trunk. In nature, it grows to over 30 meters. Its strong growth requires continual hard pruning and annual repotting to maintain its shape. The species\' coarse hab',
      soilType: 'A well-draining soil mix with a neutral or slightly acidic pH value of 5-6, but not exceeding 7. Ann',
      feeding: 'Regular fertilization during growing season',
      watering: 'Regular and thorough watering is vital during the growing season; water as soon as the soil surface'
    },
    bonsaiStyles: ['Informal Upright', 'Formal Upright', 'Slanting'],
    techniques: [
      {
        name: 'Structural Pruning',
        description: 'For European Ash bonsai, structural pruning is essential to manage its vigorous growth and thick trunk. Remove large branches in early spring before bud break to shape the primary structure and maintain a balanced silhouette. Focus on cutting back strong, upright shoots to encourage lateral branchin',
        timing: 'Early spring, just before bud break',
        maturityStage: 'After 2-3 years',
        notRecommended: false
      },
      {
        name: 'Maintenance Pruning',
        description: 'Maintenance pruning involves regularly trimming back new shoots throughout the growing season to encourage ramification and finer branch development. Pinch or prune shoots back to 2-3 leaflets to reduce leaf size indirectly and improve branch density. This also prevents the tree from becoming leggy',
        timing: 'Late spring to early autumn, every 3-4 weeks',
        maturityStage: 'After 1 year',
        notRecommended: false
      },
      {
        name: 'Wiring with Flexible Aluminum Wire',
        description: 'Use flexible aluminum wire for wiring European Ash bonsai to accommodate the rapid and strong branch growth without cutting into the bark. Wiring should be applied carefully because Ash branches can thicken quickly; frequent checking and rewiring are necessary. Wiring thicker branches is best done i',
        timing: 'Dormant season (late autumn to early winter) for thick branches; late spring for finer branches; che',
        maturityStage: 'After 2 years',
        notRecommended: false
      },
      {
        name: 'Annual Repotting',
        description: 'European Ash requires annual repotting in early spring as buds begin to swell to refresh the soil and accommodate vigorous root growth. Use a well-draining, slightly acidic bonsai soil mix to prevent root rot and ensure moisture retention. Repotting stimulates healthy root development, which is cruc',
        timing: 'Early spring, just as buds start swelling',
        maturityStage: 'After 1 year',
        notRecommended: false
      },
      {
        name: 'Root Pruning with Careful Root Ball Reduction',
        description: 'When repotting, prune roughly one-third of the root ball to maintain compactness and encourage fine root growth. Given the Ash\'s vigorous roots, avoid excessive root pruning to prevent shock. Remove any thick, woody roots but preserve fibrous feeder roots to support healthy growth.',
        timing: 'During annual repotting in early spring',
        maturityStage: 'After 1 year',
        notRecommended: false
      },
      {
        name: 'Defoliation for Leaf Size Reduction',
        description: 'Defoliation is recommended once or twice per growing season to reduce the large compound leaves typical of European Ash. Removing leaves forces the tree to produce smaller leaflets upon regrowth, enhancing ramification and making the foliage more proportionate to bonsai scale. Complete defoliation s',
        timing: 'Late spring, after initial flush of growth; second time in mid to late summer if tree is vigorous',
        maturityStage: 'After 3 years',
        notRecommended: false
      },
      {
        name: 'Pinching New Shoots',
        description: 'Pinch back soft new shoots regularly to control vigorous growth and encourage branching. For Ash, pinch when shoots have 4-5 leaflets by removing the growing tip to stimulate side shoot development. This technique helps maintain a fine ramification structure and reduces the need for hard pruning.',
        timing: 'Throughout growing season, every 2-3 weeks as new shoots develop',
        maturityStage: 'After 1 year',
        notRecommended: false
      },
      {
        name: 'Grafting for Branch Improvement',
        description: 'Grafting is occasionally used to improve branch placement or add finer branches where natural ramification is poor. European Ash accepts grafts well in early spring before bud break. This technique helps refine the silhouette and adds character to mature bonsai with sparse branching.',
        timing: 'Early spring, just before bud break',
        maturityStage: 'Mature trees only',
        notRecommended: false
      },
      {
        name: 'Jin (Deadwood) Creation',
        description: 'Creating Jin on European Ash is suitable to highlight aged features and add visual interest, especially on larger bonsai. The thick trunk and coarse bark tolerate deadwood techniques well. Deadwood should be carefully carved and treated with lime sulfur to protect and brighten the wood, but avoid ex',
        timing: 'Late autumn to winter, during dormancy',
        maturityStage: 'Mature trees only',
        notRecommended: false
      },
      {
        name: 'Shari (Trunk Deadwood) Development',
        description: 'Shari can be applied to European Ash bonsai to simulate natural trunk scars or weathering, enhancing the aged appearance. Use sharp carving tools to remove bark in controlled sections, then treat with lime sulfur for protection. Because Ash wood is relatively soft, avoid deep shari that could compro',
        timing: 'Late autumn or winter when the tree is dormant',
        maturityStage: 'Mature trees only',
        notRecommended: false
      },
      {
        name: 'Nebari Development through Root Spread',
        description: 'To develop a strong nebari, European Ash bonsai should have surface roots gradually exposed by removing soil and gently spreading roots outward during repotting. Encourage outward root growth by pruning upward-growing roots and wiring surface roots if necessary. This technique improves stability and',
        timing: 'During annual spring repotting',
        maturityStage: 'After 2 years',
        notRecommended: false
      },
      {
        name: 'Carving for Character Lines',
        description: 'Carving is recommended on mature European Ash bonsai to accentuate natural bark texture and add character lines along the trunk or branches. Use appropriate bonsai carving tools and lime sulfur treatments to preserve the carved sections. Avoid over-carving due to the wood\'s relative softness and sus',
        timing: 'Winter dormancy',
        maturityStage: 'Mature trees only',
        notRecommended: false
      },
      {
        name: 'Air Layering for Propagation',
        description: 'Air layering is effective for propagating European Ash, especially to produce larger bonsai material with developed trunks. Perform air layering in late spring or early summer when sap flow is active to encourage root formation. Use a moss-based medium to retain moisture and wrap securely to prevent',
        timing: 'Late spring to early summer',
        maturityStage: 'After 2-3 years',
        notRecommended: false
      },
      {
        name: 'Seasonal Fertilizing Regimen',
        description: 'Fertilize European Ash bonsai regularly during the active growing season from early spring through late summer. Use a balanced, slow-release fertilizer with a slightly higher nitrogen ratio during spring for vigorous growth, then switch to a lower nitrogen formula in mid to late summer to promote ha',
        timing: 'Early spring to late summer, every 4-6 weeks',
        maturityStage: 'After 1 year',
        notRecommended: false
      },
      {
        name: 'Pest and Disease Monitoring',
        description: 'European Ash bonsai are susceptible to ash dieback (Hymenoscyphus fraxineus) in some regions, and common pests such as aphids, scale, and caterpillars. Regularly inspect the tree during spring and summer for symptoms like leaf wilting or lesions. Employ organic insecticidal soaps or horticultural oi',
        timing: 'Spring through autumn, weekly inspections',
        maturityStage: 'All stages',
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
    id: 'mugo-pine',
    scientificName: 'Pinus mugo',
    commonName: 'Mugo Pine',
    group: 'Deciduous',
    temperatureMin: -30,
    temperatureMax: -22,
    sunExposure: 'Full sun is required for maximum health and vigor.',
    position: 'Outdoor. Must remain outdoors all year long. Requi',
    leafType: 'Deciduous',
    climate: 'Temperate',
    flowering: 'Spring',
    nativeRegion: 'Central and Southern Europe, ranging from Spain to the Balkans and Central Europe to Bulgaria. It is',
    difficultyLevel: 'Intermediate',
    category: 'Intermediate',
    careTips: {
      general: 'Slow-growing, dense, and bushy. Naturally makes small needles, which is ideal for bonsai. The growth rate is slow, but it features tight needle growth, which provides a full look without a lengthy ram',
      soilType: 'A fast-draining, well-aerated soil mix is essential to prevent root rot. A mix of akadama, pumice, a',
      feeding: 'Regular fertilization during growing season',
      watering: 'Requires consistent and frequent watering, especially during hot weather, sometimes up to two or thr'
    },
    bonsaiStyles: ['Informal Upright', 'Formal Upright', 'Slanting'],
    techniques: [
      {
        name: 'Structural Pruning',
        description: 'For Mugo Pine, structural pruning focuses on removing thick, unwanted branches after the first flush of growth in early summer (June to July). Cut back overly vigorous shoots to maintain a balanced silhouette and encourage backbudding on older wood with needles still attached. Avoid heavy pruning in',
        timing: 'Early summer (June to July), after first flush of growth',
        maturityStage: 'After 3-4 years',
        notRecommended: false
      },
      {
        name: 'Maintenance Pruning',
        description: 'Regularly pinch or trim new candle growth during mid to late summer to keep needle length short and maintain dense foliage pads. Remove any dead or weak needles to promote air circulation and reduce disease risk. Avoid complete needle plucking as Mugo Pine backbuds better when old needles remain. Th',
        timing: 'Mid to late summer (July to August), repeat as needed',
        maturityStage: 'After 2 years',
        notRecommended: false
      },
      {
        name: 'Wiring Technique',
        description: 'Use soft aluminum or annealed copper wire for wiring Mugo Pine branches, applying moderate tension to avoid snapping brittle shoots. Wire branches after the first flush of growth in early summer (June), when shoots are still flexible but firm. Avoid wiring thick branches in winter due to risk of fro',
        timing: 'Early summer (June), remove wire by late summer',
        maturityStage: 'After 3 years',
        notRecommended: false
      },
      {
        name: 'Repotting Timing and Technique',
        description: 'Mugo Pine should be repotted in midsummer (July to August), uniquely after the first flush of new growth is cut back. This timing reduces stress and encourages rapid recovery. Use a fast-draining soil mix with akadama, pumice, and lava rock to prevent root rot. Avoid spring repotting as it can cause',
        timing: 'Midsummer (July to August), every 2-3 years',
        maturityStage: 'After 3-4 years',
        notRecommended: false
      },
      {
        name: 'Root Pruning Approach',
        description: 'During summer repotting, prune back 20-30% of the root mass, focusing on cutting away thick, old roots and preserving fine feeder roots. Avoid heavy root pruning in spring or winter to prevent shock. After root pruning, reduce watering slightly to encourage root regeneration but never let the soil d',
        timing: 'Midsummer (July to August) during repotting',
        maturityStage: 'After 3-4 years',
        notRecommended: false
      },
      {
        name: 'Defoliation',
        description: 'Defoliation is generally not recommended for Mugo Pine as this species does not respond well to complete needle removal. Instead, maintain foliage by selective pinching and trimming of candles to manage needle length and density. Complete defoliation can stress the tree and reduce vigor because Mugo',
        timing: 'Not recommended',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Pinching New Growth',
        description: 'Pinch candle growth after it elongates to about 2-3 cm in mid-summer to control needle size and promote dense foliage pads. Remove only the soft new growth tips, leaving older needles intact to encourage backbudding. Repeat pinching once or twice during the summer season for best results. This techn',
        timing: 'Mid to late summer (July to August), repeat once or twice',
        maturityStage: 'After 2 years',
        notRecommended: false
      },
      {
        name: 'Grafting',
        description: 'Grafting is occasionally used for Mugo Pine to propagate dwarf cultivars like \'Mops\' or to repair damaged branches but is not commonly necessary due to good natural growth habits. When performed, grafting is done in late spring or early summer. Ensure rootstock and scion have good compatibility and',
        timing: 'Late spring to early summer (May to June)',
        maturityStage: 'Young stock or nursery plants',
        notRecommended: false
      },
      {
        name: 'Jin (Deadwood) Technique',
        description: 'Creating Jin on Mugo Pine is suitable for enhancing the aged mountain tree aesthetic due to its naturally rugged appearance. Select dead branches or purposely strip bark on small branches during mid-summer when sap is flowing minimally. Use sharp tools and apply lime sulfur to preserve the deadwood',
        timing: 'Mid-summer (July to August)',
        maturityStage: 'Mature trees only',
        notRecommended: false
      },
      {
        name: 'Shari (Trunk Deadwood) Technique',
        description: 'Shari is appropriate for Mugo Pine to emphasize ancient character but must be applied conservatively. Remove bark from trunk areas in midsummer to minimize sap bleeding. Preserve live cambium edges carefully to ensure tree health. Treat exposed wood with lime sulfur to enhance appearance and prevent',
        timing: 'Mid-summer (July to August)',
        maturityStage: 'Mature trees only',
        notRecommended: false
      },
      {
        name: 'Nebari Development',
        description: 'To develop a strong nebari, encourage radial root growth by root pruning during midsummer repotting and avoid deep planting. Gently expose surface roots by removing soil around the base in early spring to promote thickening. Wiring surface roots can also help spread them evenly. Mugo Pine’s natural',
        timing: 'Root pruning and repotting in midsummer, soil exposure in early spring',
        maturityStage: 'After 4-5 years',
        notRecommended: false
      },
      {
        name: 'Carving',
        description: 'Carving is moderately recommended for Mugo Pine to enhance ruggedness but should be done with care due to slow healing. Use fine carving tools to create texture on small branches or trunks during the active growing season (summer) when healing ability is higher. Avoid deep or extensive carving that',
        timing: 'Summer (July to August)',
        maturityStage: 'Mature trees only',
        notRecommended: false
      },
      {
        name: 'Air Layering',
        description: 'Air layering can be used to propagate Mugo Pine but is challenging due to slow root formation. Perform air layering in late spring or early summer when sap flow is active to encourage root development. Use sphagnum moss and plastic wrap tightly secured to maintain moisture. Rooting may take 6-12 mon',
        timing: 'Late spring to early summer (May to June)',
        maturityStage: 'Young to semi-mature trees',
        notRecommended: false
      },
      {
        name: 'Fertilizing Schedule',
        description: 'Feed Mugo Pine with a balanced, low-nitrogen fertilizer from early spring (April) through mid-autumn (September) to support steady growth without overstimulating candle elongation. Use organic or slow-release fertilizers to maintain soil health. Reduce feeding in late summer after pinching to prepar',
        timing: 'April to September, monthly or bi-monthly',
        maturityStage: 'After 2 years',
        notRecommended: false
      },
      {
        name: 'Pest and Disease Management',
        description: 'Monitor for common pests such as aphids, scale insects, spider mites, and pine needle scale, especially during warm summer months. Use insecticidal soap or horticultural oil as needed, avoiding chemical treatments during high heat. Prevent root rot by ensuring excellent drainage and avoiding overwat',
        timing: 'Spring through early autumn, inspect weekly during growth',
        maturityStage: 'All stages',
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
    id: 'japanese-cedar',
    scientificName: 'Cryptomeria japonica',
    commonName: 'Japanese Cedar',
    group: 'Deciduous',
    temperatureMin: 18,
    temperatureMax: 27,
    sunExposure: 'Light position, out of direct, scorching summer su',
    position: 'Outdoor. Requires a cold winter dormancy period an',
    leafType: 'Deciduous',
    climate: 'Temperate',
    flowering: 'Spring',
    nativeRegion: 'Japan and China (specifically cool and moist forest regions).',
    difficultyLevel: 'Expert',
    category: 'Advanced',
    careTips: {
      general: 'Moderate root growth; can grow up to 50m in nature (bonsai size is controlled). Foliage is narrowly wedge-shaped, light-green to dark-green, and arranged in 5-ranked spirals. The bark is thick, red, a',
      soilType: 'Standard bonsai mix, which is typically a free-draining, moisture-retentive substrate. A common mix',
      feeding: 'Regular fertilization during growing season',
      watering: 'Requires constant moisture and high humidity; never allow the soil to dry out completely, especially'
    },
    bonsaiStyles: ['Informal Upright', 'Formal Upright', 'Slanting'],
    techniques: [
      {
        name: 'Structural Pruning',
        description: 'For Cryptomeria japonica, structural pruning should focus on establishing a strong primary branch framework while preserving the thick, fibrous bark by avoiding cuts too close to the trunk. Remove any crossing or inward-growing branches early in spring before sap flow increases. Cut back vigorous sh',
        timing: 'Early spring, before active sap flow begins',
        maturityStage: 'After 2-3 years',
        notRecommended: false
      },
      {
        name: 'Maintenance Pruning',
        description: 'Regular pinching and trimming of new shoots throughout the growing season prevents excessive elongation and promotes dense foliage pads. Use scissors to trim new growth tips rather than harsh cuts to protect the delicate cambium and bark. Remove any brown or damaged needles promptly to maintain heal',
        timing: 'Throughout the growing season, especially late spring to mid-summer',
        maturityStage: 'From sapling stage onward',
        notRecommended: false
      },
      {
        name: 'Wiring Technique',
        description: 'Wire Cryptomeria japonica branches carefully with aluminum or annealed copper wire, applying minimal tension to avoid damage to the bark which peels easily. Wrap wire with slightly larger spacing than usual to prevent bark scarring and check wires every 2-3 weeks to adjust or remove. Wiring is best',
        timing: 'Late spring to early summer; check every 2-3 weeks',
        maturityStage: 'After 2 years when branches are sufficiently woody',
        notRecommended: false
      },
      {
        name: 'Repotting',
        description: 'Repot Cryptomeria japonica every two years in mid-spring just before bud break to minimize stress and promote root recovery. Use a well-draining bonsai soil mix with Akadama, pumice, and lava rock to maintain moisture without waterlogging. Avoid repotting in summer or fall to prevent root damage dur',
        timing: 'Mid-spring, every 2 years',
        maturityStage: 'From 3 years onward',
        notRecommended: false
      },
      {
        name: 'Root Pruning',
        description: 'During repotting, prune approximately one-third of the roots focusing on thick, long roots to encourage finer root development and better substrate penetration. Avoid aggressive root pruning to preserve moisture absorption capacity, critical for this species’ moisture needs. Keep root pruning modera',
        timing: 'At repotting in mid-spring, every 2 years',
        maturityStage: 'From 3 years onward',
        notRecommended: false
      },
      {
        name: 'Defoliation',
        description: 'Defoliation is generally not recommended for Cryptomeria japonica as it has small, needle-like foliage which does not respond well to full leaf removal. Instead, selective trimming and pinching are preferred to control foliage density without causing excessive stress. Complete defoliation can weaken',
        timing: 'Not recommended; partial needle trim possible in mid-summer',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Pinching',
        description: 'Regular pinching of new shoot tips throughout the growing season is essential to maintain fine ramification and dense foliage pads in Cryptomeria japonica. Pinch back soft, light green new growth using fingers rather than cutting tools to minimize bark damage. This encourages back budding and preven',
        timing: 'Late spring through early autumn, reduced during peak summer heat',
        maturityStage: 'From sapling stage onward',
        notRecommended: false
      },
      {
        name: 'Grafting',
        description: 'Grafting is rarely used with Cryptomeria japonica bonsai because the species readily backbuds and grows well from cuttings. However, grafting can be employed to introduce dwarf or rare varieties such as \'Elegans nana\' onto vigorous rootstocks to combine vigor and compact growth. Use whip or approach',
        timing: 'Early spring before sap flow begins',
        maturityStage: 'After 3 years, on healthy stock',
        notRecommended: false
      },
      {
        name: 'Jin (Deadwood Technique)',
        description: 'Creating jin on Cryptomeria japonica is generally not recommended due to the species’ fibrous, peeling bark and cambium sensitivity, which can cause excessive damage and slow healing. If jin is desired for design purposes, it should be minimal and carefully executed on small branches to avoid compro',
        timing: 'Late winter to early spring when tree is dormant',
        maturityStage: 'Mature trees only',
        notRecommended: true
      },
      {
        name: 'Shari (Trunk Deadwood)',
        description: 'Shari is not typically recommended on Japanese Cedar bonsai because the thick, fibrous bark peels vertically and creating large deadwood areas risks damaging the cambium and overall tree vitality. Small shari accents can be attempted on older specimens with naturally peeling bark to simulate age, bu',
        timing: 'Late winter to early spring during dormancy',
        maturityStage: 'Mature trees only',
        notRecommended: true
      },
      {
        name: 'Nebari Development',
        description: 'To develop a strong, visually appealing nebari on Cryptomeria japonica, prune surface roots regularly during repotting to encourage radial root growth. Use shallow containers to restrict downward root growth and encourage roots to spread horizontally. Additionally, root pruning should be done conser',
        timing: 'At repotting in mid-spring every 2 years',
        maturityStage: 'From 3-5 years onward',
        notRecommended: false
      },
      {
        name: 'Carving',
        description: 'Carving is generally discouraged on Cryptomeria japonica due to its delicate cambium layer and peeling bark, which can separate easily from the wood beneath. Attempting deep carving or hollowing risks long-term health and structural integrity. Instead, focus on natural bark texture and shaping throu',
        timing: 'N/A',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Air Layering',
        description: 'Air layering can be successfully performed on Cryptomeria japonica to propagate desired branches or create new specimen trees. Select healthy, semi-hardwood branches in late spring or early summer, remove a 2-3 cm ring of bark carefully to avoid cambium damage, apply rooting hormone, and wrap with m',
        timing: 'Late spring to early summer',
        maturityStage: 'After 3 years, on vigorous healthy branches',
        notRecommended: false
      },
      {
        name: 'Fertilizing',
        description: 'Fertilize Cryptomeria japonica bonsai monthly during the active growing season (spring through early autumn) with a balanced, low-nitrogen fertilizer to encourage healthy foliage and root development without excessive elongation. Use organic or slow-release formulas to maintain steady nutrition. Red',
        timing: 'Monthly from early spring to early autumn; no fertilization in winter',
        maturityStage: 'From first year onward',
        notRecommended: false
      },
      {
        name: 'Pest and Disease Management',
        description: 'Cryptomeria japonica is susceptible to red spider mites, needle blight, and root rot if moisture levels are not well managed. Maintain high humidity by frequent misting of the foliage, especially during hot, dry periods, to prevent spider mite infestations and needle loss. Inspect regularly for sign',
        timing: 'Year-round inspection; increased vigilance in summer',
        maturityStage: 'From sapling stage onward',
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
    id: 'silver-birch',
    scientificName: 'Betula pendula',
    commonName: 'Silver Birch',
    group: 'Deciduous',
    temperatureMin: 24,
    temperatureMax: 75,
    sunExposure: 'Requires full sun in the morning and partial shade',
    position: 'Outdoor. Birches are frost-hardy and require expos',
    leafType: 'Deciduous',
    climate: 'Temperate',
    flowering: 'Spring',
    nativeRegion: 'Europe and Asia. The species is native to cooler climates across these continents.',
    difficultyLevel: 'Beginner',
    category: 'Beginner',
    careTips: {
      general: 'The tree is a deciduous species with a moderate growth rate, reaching 30-40 ft. tall and 15-30 ft. wide in its natural state. In bonsai, it is noted for its tendency to let branches die back without w',
      soilType: 'Moist, well-drained sandy loams. The tree prefers acidic soil (low pH), but is adaptable and will to',
      feeding: 'Regular fertilization during growing season',
      watering: 'Requires the soil to be **constantly moist**, but not waterlogged. The tree is sensitive to drought'
    },
    bonsaiStyles: ['Informal Upright', 'Formal Upright', 'Slanting'],
    techniques: [
      {
        name: 'Structural Pruning',
        description: 'For Silver Birch bonsai, structural pruning should focus on maintaining an open canopy to reduce branch dieback risk. Remove thick, inward-growing branches and any crossing limbs during early spring before bud break to encourage strong growth. Because the species suffers sudden branch dieback, it\'s',
        timing: 'Early spring (March) before bud break',
        maturityStage: 'After 2-3 years',
        notRecommended: false
      },
      {
        name: 'Maintenance Pruning',
        description: 'Prune new growth regularly during the growing season to maintain shape and encourage ramification. Pinch or cut back long shoots after 4-6 leaves appear, but avoid heavy pruning late in the season to reduce stress and dieback risk. Remove any dead or dying branches immediately to prevent pest infest',
        timing: 'Late spring through summer, every 2-3 weeks',
        maturityStage: 'After 1 year',
        notRecommended: false
      },
      {
        name: 'Wiring Technique',
        description: 'Silver Birch twigs are flexible but brittle in cold weather; wiring should be done in late spring or early summer when branches are supple. Use aluminum wire to avoid damaging delicate bark, and wrap loosely to prevent scarring, especially on young bark. Remove wire within 2-3 months to prevent bark',
        timing: 'Late spring to early summer',
        maturityStage: 'After 2 years',
        notRecommended: false
      },
      {
        name: 'Repotting Timing and Considerations',
        description: 'Repot Silver Birch bonsai in early spring just before bud swell to minimize root disturbance stress. Use a well-draining, moisture-retentive acidic bonsai mix with sandy loam base. Avoid repotting during hot or dry conditions to prevent shock and branch dieback. Repot every 2-3 years for young trees',
        timing: 'Early spring (March-April) before bud swell',
        maturityStage: 'After 1-2 years',
        notRecommended: false
      },
      {
        name: 'Root Pruning Approach',
        description: 'When repotting, prune roots conservatively to maintain a moist, fibrous root mass. Remove long, thick roots but retain fine feeder roots critical for moisture uptake. Excessive root pruning can stress the tree and trigger branch dieback, so root pruning should be minimal and precise.',
        timing: 'During repotting in early spring',
        maturityStage: 'After 1-2 years',
        notRecommended: false
      },
      {
        name: 'Defoliation',
        description: 'Full defoliation is generally not recommended for Silver Birch due to its moderate growth and sensitivity to stress, which can increase branch dieback risk. Partial defoliation can be applied sparingly after strong growth to improve ramification and light penetration but should be avoided in hot or',
        timing: 'After strong flush in early to mid-summer',
        maturityStage: 'After 3 years',
        notRecommended: false
      },
      {
        name: 'Pinching Technique',
        description: 'Pinch new shoots once they develop 4-6 leaves to encourage shorter internodes and finer ramification. Use finger pinching rather than scissors to avoid damaging delicate buds. Regular pinching helps maintain the elegant weeping habit typical of Silver Birch.',
        timing: 'Late spring through summer, every 2-3 weeks',
        maturityStage: 'After 1 year',
        notRecommended: false
      },
      {
        name: 'Grafting',
        description: 'Grafting is rarely used on Silver Birch bonsai due to its natural abundant branching, but can be employed to replace dead branches caused by dieback or to improve nebari. Use scion wood from healthy local Silver Birch and graft in early spring before bud break for best success.',
        timing: 'Early spring before bud break',
        maturityStage: 'Mature trees only',
        notRecommended: false
      },
      {
        name: 'Jin (Deadwood) Technique',
        description: 'Jin is suitable for Silver Birch, especially to replicate natural deadwood from branch dieback or storm damage. Use sharp carving tools to create realistic deadwood on flexible branches, but avoid excessive deadwood on young trees to maintain vigor. Seal exposed wood to prevent rot and insect infest',
        timing: 'Late summer to early autumn when growth slows',
        maturityStage: 'After 5 years',
        notRecommended: false
      },
      {
        name: 'Shari (Trunk Deadwood) Technique',
        description: 'Shari can be applied to mature Silver Birch bonsai to accentuate aged appearance, mimicking natural bark exfoliation and damage. Carve shallow, natural-looking strips on the trunk, particularly on the lower trunk where old bark darkens. Protect exposed wood with lime sulfur to enhance white bark con',
        timing: 'Late summer to early autumn',
        maturityStage: 'Mature trees only',
        notRecommended: false
      },
      {
        name: 'Nebari Development',
        description: 'Develop nebari by encouraging radial root growth during repotting and root pruning. Expose minor surface roots gradually by carefully removing soil and moss over several seasons. This species often has naturally good nebari, but regular maintenance prevents dominance of a single root and promotes ba',
        timing: 'During repotting and yearly maintenance',
        maturityStage: 'After 2 years',
        notRecommended: false
      },
      {
        name: 'Carving',
        description: 'Carving is recommended for mature Silver Birch bonsai to emphasize natural bark texture and aging. Use fine carving tools to replicate peeling bark or deadwood effects, mimicking the species characteristic exfoliating white bark. Avoid carving on young trees or during periods of stress to prevent da',
        timing: 'Late summer to early autumn',
        maturityStage: 'Mature trees only',
        notRecommended: false
      },
      {
        name: 'Air Layering',
        description: 'Air layering can be used to propagate Silver Birch or to create a new bonsai from a branch with dieback risk. Perform air layering in late spring or early summer when sap flow is strong. Use moist sphagnum moss and wrap securely to maintain moisture, ensuring quick root development in the moist envi',
        timing: 'Late spring to early summer',
        maturityStage: 'After 2-3 years',
        notRecommended: false
      },
      {
        name: 'Fertilizing Schedule and Type',
        description: 'Use a balanced, slow-release fertilizer with slightly acidic pH to match the species preference. Fertilize monthly from early spring through late summer, reducing frequency in autumn to prepare for dormancy. Avoid high nitrogen fertilizers in late season to prevent soft growth vulnerable to dieback',
        timing: 'Monthly from March to September',
        maturityStage: 'After 1 year',
        notRecommended: false
      },
      {
        name: 'Pest and Disease Management',
        description: 'Silver Birch is highly susceptible to Bronze Birch Borer; monitor regularly for borer holes and dieback symptoms. Maintain tree vigor through proper watering, pruning, and fertilizing to reduce susceptibility. Use systemic insecticides preventatively in early spring and apply horticultural oils on t',
        timing: 'Preventative treatments in early spring; monitoring year-round',
        maturityStage: 'All stages',
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
    id: 'mulberry-white-mulberry',
    scientificName: 'Morus alba',
    commonName: 'Mulberry (White Mulberry)',
    group: 'Deciduous',
    temperatureMin: 15,
    temperatureMax: 27,
    sunExposure: 'Requires a sunny location with a minimum of six ho',
    position: 'Outdoor. It is hardy in temperate climates but its',
    leafType: 'Deciduous',
    climate: 'Temperate',
    flowering: 'Spring',
    nativeRegion: 'Native to China, but widely cultivated and naturalized across Asia, Europe, and North America.',
    difficultyLevel: 'Beginner',
    category: 'Beginner',
    careTips: {
      general: 'The tree is a fast grower, which is beneficial for bonsai training. It is known for its elegant foliage, distinctive bark, and the ability to bear fruit (white, black, or red depending on the species/',
      soilType: 'Requires a well-draining soil mix that has a neutral or slightly higher pH value of 5-6, but not ove',
      feeding: 'Regular fertilization during growing season',
      watering: 'Requires regular watering across the growing season, with watering being vital during the hot summer'
    },
    bonsaiStyles: ['Informal Upright', 'Formal Upright', 'Slanting'],
    techniques: [
      {
        name: 'Structural Pruning',
        description: 'For White Mulberry bonsai, structural pruning focuses on establishing a strong framework early, removing any crossing or inward-growing branches to maintain open structure and airflow. Due to its fast growth, heavy pruning can be done in early spring before bud break to direct energy into selected b',
        timing: 'Early spring before bud break',
        maturityStage: 'After 2-3 years',
        notRecommended: false
      },
      {
        name: 'Maintenance Pruning',
        description: 'Maintenance pruning involves trimming back new shoots throughout the growing season to maintain shape and encourage dense foliage. Pinch or cut back long shoots after 4-6 leaves have formed to keep the tree compact and promote finer branching. This species can handle frequent maintenance pruning due',
        timing: 'Late spring through summer, as needed',
        maturityStage: 'After 1 year',
        notRecommended: false
      },
      {
        name: 'Wiring with Soft Aluminum or Annealed Copper',
        description: 'White Mulberry branches have moderate flexibility but can be brittle if wired when dry or in winter. Use soft aluminum or annealed copper wire to shape branches, applying wire soon after pruning when branches are actively growing and more pliable. Avoid wiring thick branches in late fall to prevent',
        timing: 'Spring and early summer',
        maturityStage: 'After 1-2 years',
        notRecommended: false
      },
      {
        name: 'Repotting in Early Spring',
        description: 'Repotting is best done in early spring before bud break to minimize transplant shock and allow for vigorous root recovery. Use a well-draining mix with neutral to slightly acidic pH (5-6) to support root health. Repot every 2 years for young trees and every 3 years for mature specimens, carefully tr',
        timing: 'Early spring (late winter to early March)',
        maturityStage: 'After 1-2 years',
        notRecommended: false
      },
      {
        name: 'Root Pruning',
        description: 'Root pruning should be done during repotting in early spring by trimming back up to one-third of the root mass, focusing on removing thick, woody roots while preserving fine feeder roots. This encourages a dense root ball and supports the species\' natural leaf size reduction. Avoid heavy root prunin',
        timing: 'Early spring during repotting',
        maturityStage: 'After 1-2 years',
        notRecommended: false
      },
      {
        name: 'Partial Defoliation',
        description: 'Partial defoliation is recommended to reduce leaf size and increase ramification but should be done cautiously as Morus alba has relatively large leaves. Remove roughly 50% of the leaves in mid-summer when the tree is vigorous to encourage a second flush of smaller leaves. Avoid full defoliation as',
        timing: 'Mid-summer (July to August)',
        maturityStage: 'After 3 years',
        notRecommended: false
      },
      {
        name: 'Pinching New Growth',
        description: 'Pinch back new shoots once they have developed 4-6 leaves by using thumb and forefinger to nip the shoot tips. This encourages lateral branching and denser foliage, which is essential for maintaining the bonsai shape. Repeat pinching every 2-3 weeks during the active growing season to control vigor',
        timing: 'Late spring through summer, every 2-3 weeks',
        maturityStage: 'After 1 year',
        notRecommended: false
      },
      {
        name: 'Grafting for Branch Development',
        description: 'Grafting is occasionally used to improve branch placement or add fruiting branches by approach or side grafting in early spring. Mulberry grafts readily onto compatible Morus rootstocks, allowing for correction of structural weaknesses or introduction of desired cultivars. It is beneficial for advan',
        timing: 'Early spring before bud break',
        maturityStage: 'Mature trees only',
        notRecommended: false
      },
      {
        name: 'Jin (Deadwood) Creation',
        description: 'Jin creation is suitable for White Mulberry to enhance aged appearance, especially on older branches. Because the wood is relatively soft, use sharp tools and treat the deadwood with lime sulfur to preserve and bleach it. Create jins on tapering branches to simulate natural die-back, but avoid overd',
        timing: 'Late winter or early spring, when the tree is dormant',
        maturityStage: 'Mature trees only',
        notRecommended: false
      },
      {
        name: 'Shari (Trunk Deadwood) Application',
        description: 'Shari can be applied to older, mature White Mulberry bonsai to emphasize trunk character and simulate natural injury. The deeply fissured bark of Morus alba provides an excellent backdrop for shari techniques. Remove bark carefully on one side of the trunk and treat exposed wood with lime sulfur. Av',
        timing: 'Late winter during dormancy',
        maturityStage: 'Mature trees only',
        notRecommended: false
      },
      {
        name: 'Nebari Development by Root Pruning and Surface Roots Exposure',
        description: 'To develop a strong nebari, root prune during repotting to encourage fine feeder roots near the surface. Gently expose surface roots by removing soil on the upper root flare during repotting and wiring roots lightly if needed. The species’ vigorous root growth responds well to this technique, improv',
        timing: 'Early spring during repotting',
        maturityStage: 'After 3 years',
        notRecommended: false
      },
      {
        name: 'Carving',
        description: 'Carving can be used sparingly on White Mulberry to enhance deadwood features or create artistic effects on the trunk or jin. Due to the wood’s softness and sap content, work carefully with sharp tools and seal wounds promptly. This technique is best reserved for mature trees with well-established he',
        timing: 'Late winter or early spring',
        maturityStage: 'Mature trees only',
        notRecommended: false
      },
      {
        name: 'Air Layering',
        description: 'Air layering is an effective propagation method for Morus alba bonsai, usually done in late spring or early summer when sap flow is strong. Select a healthy branch, remove a ring of bark about 2 cm wide, apply rooting hormone, and wrap with moist sphagnum moss and plastic. Root development typically',
        timing: 'Late spring to early summer',
        maturityStage: 'After 2 years',
        notRecommended: false
      },
      {
        name: 'Fertilizing with Balanced Fertilizer',
        description: 'Fertilize White Mulberry bonsai monthly during the growing season (spring through early fall) using a balanced fertilizer (e.g., 10-10-10 NPK) or a higher nitrogen formula early season to promote foliage, switching to a phosphorus-rich fertilizer before fruiting. Reduce feeding in late autumn and st',
        timing: 'Monthly from April to September',
        maturityStage: 'After 1 year',
        notRecommended: false
      },
      {
        name: 'Pest and Disease Management',
        description: 'White Mulberry bonsai is susceptible to pests like aphids, spider mites, and scale insects, especially in hot, dry conditions. Monitor regularly and treat infestations early with insecticidal soap or neem oil. Fungal diseases like powdery mildew can occur; maintain good air circulation and avoid ove',
        timing: 'Inspect monthly in growing season; dormant oil in late winter',
        maturityStage: 'All stages',
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
    id: 'bodhi-tree-sacred-fig-peepal-tree',
    scientificName: 'Ficus religiosa',
    commonName: 'Bodhi Tree (Sacred Fig, Peepal tree)',
    group: 'Deciduous',
    temperatureMin: 18,
    temperatureMax: 26,
    sunExposure: '**Bright sunlight** is essential. It thrives best',
    position: 'Primarily an **Outdoor** species in tropical and s',
    leafType: 'Deciduous',
    climate: 'Tropical',
    flowering: 'Spring',
    nativeRegion: 'Indian subcontinent and Southeast Asia, including **India, Nepal, Sri Lanka, Southwest China, Burma,',
    difficultyLevel: 'Intermediate',
    category: 'Intermediate',
    careTips: {
      general: 'Fast-growing species, especially in warm climates, which allows for rapid trunk development and styling. It is a semi-evergreen to deciduous tree with a tendency to develop aerial roots and a thick, b',
      soilType: 'Requires a highly draining, air-rich soil mix to prevent root rot. A common, effective composition i',
      feeding: 'Regular fertilization during growing season',
      watering: 'Requires **thorough watering** when the topsoil begins to feel **slightly dry to the touch**. Due to'
    },
    bonsaiStyles: ['Informal Upright', 'Formal Upright', 'Slanting'],
    techniques: [
      {
        name: 'Structural Pruning',
        description: 'For Bodhi trees, structural pruning focuses on establishing a strong primary branch framework early in the growing season. Remove crossing or inward-growing branches to promote outward growth and open canopy, enhancing light penetration and air circulation. Cut back vigorous shoots to encourage thic',
        timing: 'Early spring to late spring before active growth accelerates',
        maturityStage: 'After 1-2 years',
        notRecommended: false
      },
      {
        name: 'Maintenance Pruning',
        description: 'Maintenance pruning involves regularly trimming back new shoots to maintain the bonsai\'s shape and encourage finer ramification. This species responds well to cutting back to 2-3 leaf nodes to reduce large leaves naturally. Remove any dead or weak branches promptly to prevent disease and maintain vi',
        timing: 'Throughout growing season, especially spring and summer',
        maturityStage: 'After initial shape is developed, typically 2 years onward',
        notRecommended: false
      },
      {
        name: 'Wiring Technique',
        description: 'Bodhi tree branches have moderate flexibility but mature branches can harden quickly due to rapid growth. Use aluminum wire with moderate thickness, wrapping gently to avoid damaging the smooth bark which is prone to scarring. Wiring should be applied during early spring when branches are most pliab',
        timing: 'Early spring, remove wires within 6-8 weeks',
        maturityStage: 'After 1-2 years or when branches reach suitable thickness',
        notRecommended: false
      },
      {
        name: 'Repotting Timing and Considerations',
        description: 'Repot Bodhi bonsai every 2 years during early spring before bud swell to minimize stress and encourage root recovery. Use a well-draining 1:1:1 mix of Akadama, Pumice, and Lava rock to prevent root rot typical in this tropical species. Avoid repotting during cold or dormant periods, as growth halts',
        timing: 'Early spring before active growth',
        maturityStage: 'After 2 years',
        notRecommended: false
      },
      {
        name: 'Root Pruning Approach',
        description: 'When repotting, prune roots conservatively to maintain the extensive root ball typical of Bodhi trees and promote nebari development. Trim long, thick roots to encourage finer feeder roots but retain a strong root base. Avoid heavy root pruning as this species can be sensitive to root disturbance, e',
        timing: 'During repotting in early spring',
        maturityStage: 'After 2 years',
        notRecommended: false
      },
      {
        name: 'Defoliation',
        description: 'Partial defoliation is recommended to reduce large leaf size and increase ramification but should be done cautiously. Remove 30-50% of mature leaves during mid to late summer under strong light to avoid stress and sunburn. Complete defoliation is not advised as the species is semi-evergreen and reli',
        timing: 'Mid to late summer, under strong sunlight',
        maturityStage: 'After 3 years',
        notRecommended: false
      },
      {
        name: 'Pinching',
        description: 'Pinching back new growth tips encourages denser branching and reduces leaf size in Bodhi bonsai. Use fingertips to pinch soft, new shoots just beyond 2-3 pairs of leaves during active growth periods. This technique reduces the need for heavy pruning and maintains finer ramification. Frequent pinchin',
        timing: 'Spring through summer, every 2-3 weeks as shoots elongate',
        maturityStage: 'After 1 year',
        notRecommended: false
      },
      {
        name: 'Grafting',
        description: 'Grafting is rarely used on Bodhi bonsai as the species readily develops new shoots from cut branches and aerial roots. However, it may be applied to repair damaged branches or introduce specific branch styles. Use approach grafting during spring with compatible scions sourced from healthy individual',
        timing: 'Spring during active growth',
        maturityStage: 'After 3 years',
        notRecommended: false
      },
      {
        name: 'Jin (Deadwood) Technique',
        description: 'Creating Jin is generally not suitable for Bodhi bonsai because the species naturally has smooth, pale bark and does not typically develop deadwood features. Attempting Jin can appear unnatural and detract from its spiritual and aesthetic qualities. Furthermore, the tropical nature and smooth bark m',
        timing: 'N/A',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Shari (Trunk Deadwood)',
        description: 'Shari is not recommended for Bodhi bonsai as the species’ aesthetic relies on its smooth, light-colored bark and natural buttressed trunks. Removing bark to create deadwood scars increases risk of infections and negatively impacts health. Instead, focus on enhancing natural trunk curves and aerial r',
        timing: 'N/A',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Nebari Development',
        description: 'Develop nebari by spreading surface roots outward during repotting and selectively pruning thick roots to encourage fine feeder roots. The Bodhi’s natural buttressed trunk often produces prominent nebari which can be enhanced by slight root exposure and careful root pruning. Encourage aerial root fo',
        timing: 'During repotting in early spring and throughout growing season for aerial roots',
        maturityStage: 'After 2 years',
        notRecommended: false
      },
      {
        name: 'Carving',
        description: 'Carving techniques are generally not advised for Bodhi bonsai due to the species’ smooth, pale bark which scars easily and heals slowly. The tree’s natural beauty lies in its elegant trunk lines and smooth surface rather than in artificial deadwood features. If carving is attempted, it should be min',
        timing: 'Late summer or early fall to allow healing before winter',
        maturityStage: 'Mature trees only (5+ years)',
        notRecommended: true
      },
      {
        name: 'Air Layering',
        description: 'Air layering is an effective propagation method for Bodhi trees due to their vigorous growth and aerial root tendencies. Select healthy branches in late spring or early summer, strip a ring of bark, apply rooting hormone, and wrap with moist sphagnum moss and plastic. Keep the moss moist until roots',
        timing: 'Late spring to early summer',
        maturityStage: 'After 2 years',
        notRecommended: false
      },
      {
        name: 'Fertilizing Schedule and Type',
        description: 'Use a balanced fertilizer with equal NPK ratio (e.g., 10-10-10) during the growing season to support rapid growth and leaf development. Apply liquid fertilizer every 2 weeks from early spring through late summer, reducing frequency in autumn. Incorporate organic fertilizers or slow-release pellets t',
        timing: 'Early spring to late summer, every 2 weeks',
        maturityStage: 'After 1 year',
        notRecommended: false
      },
      {
        name: 'Pest and Disease Management',
        description: 'Monitor for common pests such as spider mites, aphids, scale insects, and mealybugs which thrive in warm, humid conditions favored by Bodhi trees. Use insecticidal soap or horticultural oil as first-line treatments. Prevent fungal root rot by ensuring well-draining soil and avoiding overwatering. Re',
        timing: 'Regularly during growing season, increase vigilance in warm, humid weather',
        maturityStage: 'All stages',
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
    id: 'desert-rose',
    scientificName: 'Adenium obesum',
    commonName: 'Desert Rose',
    group: 'Deciduous',
    temperatureMin: 18,
    temperatureMax: 32,
    sunExposure: 'Requires **bright, direct sunlight** for optimal g',
    position: 'Primarily an **outdoor** tree in warm climates. Mu',
    leafType: 'Deciduous',
    climate: 'Temperate',
    flowering: 'Spring',
    nativeRegion: 'Dry areas of **sub-Saharan Africa** (Sahel regions) and the **Arabian Peninsula**.',
    difficultyLevel: 'Intermediate',
    category: 'Intermediate',
    careTips: {
      general: 'Slow to moderate growth rate. The plant is a succulent, meaning it stores water in its thick, swollen trunk (caudex) and branches. The caudex is the primary aesthetic feature, developing a unique, bul',
      soilType: 'A highly **well-draining, gritty, or sandy mix** is essential to prevent root rot, as the plant is a',
      feeding: 'Regular fertilization during growing season',
      watering: 'Requires a strict **"soak-and-dry"** watering regimen. Water deeply only when the soil has completel'
    },
    bonsaiStyles: ['Informal Upright', 'Formal Upright', 'Slanting'],
    techniques: [
      {
        name: 'Structural Pruning',
        description: 'Perform structural pruning during early spring before the active growing season begins. Remove weak, leggy, or inward-growing branches to encourage a compact, balanced canopy and to highlight the caudex. Focus on creating a strong branch framework that supports flowering and sun exposure. Avoid heav',
        timing: 'Early spring, before new growth begins',
        maturityStage: 'After 1-2 years',
        notRecommended: false
      },
      {
        name: 'Maintenance Pruning',
        description: 'Regularly prune new shoots during the growing season to maintain shape and encourage branching. Pinch or cut back long shoots once they reach 4-6 leaves to promote bushier growth and more flowers. Remove any dead or unhealthy branches promptly to prevent disease and maintain vigor.',
        timing: 'Throughout growing season (spring to late summer), every 2-4 weeks',
        maturityStage: 'After initial shaping (1 year+)',
        notRecommended: false
      },
      {
        name: 'Wiring with Soft Aluminum Wire',
        description: 'Use soft aluminum wire to gently shape branches, as Desert Rose branches are succulent and brittle when dry. Wire in spring during active growth when branches are slightly flexible; avoid wiring when the plant is stressed or dormant. Keep wiring duration short (2-3 months) to prevent scarring on the',
        timing: 'Spring to early summer, remove within 2-3 months',
        maturityStage: 'After 2 years or when branches are thick enough',
        notRecommended: false
      },
      {
        name: 'Repotting with Caudex Exposure',
        description: 'Repot every 2-3 years in late winter or early spring before growth resumes, using a very well-draining, gritty soil mix. Gently expose or partially reveal the caudex above the soil line to enhance the bonsai’s aesthetic appeal. Avoid repotting during dormancy or hot summer months to reduce transplan',
        timing: 'Late winter to early spring, every 2-3 years',
        maturityStage: 'After 1 year of growth',
        notRecommended: false
      },
      {
        name: 'Root Pruning to Maintain Compact Root Ball',
        description: 'Trim roots carefully during repotting to maintain a compact root system that fits the bonsai pot. Remove long, thin roots and any rotten or damaged roots while preserving thick, healthy roots that support the caudex. Avoid excessive root pruning which can stress this succulent species and slow growt',
        timing: 'Every repotting cycle, late winter or early spring',
        maturityStage: 'After 1 year',
        notRecommended: false
      },
      {
        name: 'Avoid Defoliation',
        description: 'Defoliation is generally not recommended for Desert Rose bonsai because leaves are essential for photosynthesis and water storage during growth. Removing leaves stresses the plant and can reduce flowering. Instead, use pruning and pinching to control foliage density.',
        timing: 'N/A',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Pinching New Shoots',
        description: 'Pinch back new growth by removing the top 1-2 sets of leaves once shoots reach 4-6 leaves to encourage branching and compact growth. This technique helps maintain the bonsai’s shape and promotes more flowering sites without heavy pruning. Use clean fingers or scissors to avoid damaging soft stems.',
        timing: 'Throughout growing season, every 2-4 weeks as shoots develop',
        maturityStage: 'After 1 year',
        notRecommended: false
      },
      {
        name: 'Grafting for Flower Color or Branching',
        description: 'Grafting is occasionally used to combine desirable flower colors or improve branching patterns by attaching scions from superior specimens onto established rootstocks. Perform grafting in early spring when sap flow is increasing. Success rates vary, and the technique is generally reserved for advanc',
        timing: 'Early spring during active growth',
        maturityStage: 'Mature trees only (3+ years)',
        notRecommended: false
      },
      {
        name: 'Jin (Deadwood) Technique',
        description: 'Jin is generally not recommended on Desert Rose bonsai because the succulent, soft wood does not dry well and can easily rot. Deadwood features do not enhance the natural aesthetic of this species, which is prized for its smooth, swollen caudex and vibrant flowers.',
        timing: 'N/A',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Shari (Trunk Deadwood) Technique',
        description: 'Shari is typically unsuitable for Desert Rose bonsai due to the risk of infection and the soft, fleshy nature of the caudex. Removing bark exposes sensitive tissue prone to rapid decay. The natural swollen trunk should be preserved and showcased rather than damaged.',
        timing: 'N/A',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Nebari Development by Caudex Exposure',
        description: 'Encourage nebari development by gradually exposing the swollen caudex during repotting and carefully removing soil around the base. Avoid aggressive root pruning near the nebari to maintain stability. The caudex should be the visual focus, partially above soil and cleanly shaped to highlight its bul',
        timing: 'During repotting, every 2-3 years',
        maturityStage: 'After 1-2 years',
        notRecommended: false
      },
      {
        name: 'Carving for Aesthetic Enhancement',
        description: 'Carving is generally discouraged on Desert Rose bonsai because the trunk and branches are succulent and prone to rot and infection after wounding. The species’ natural beauty lies in its smooth caudex and vibrant flowers rather than deadwood effects or carved features.',
        timing: 'N/A',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Air Layering for Propagation',
        description: 'Air layering can be used to propagate Desert Rose bonsai but requires careful monitoring due to the plant’s succulent nature. Perform in late spring to early summer by wounding a healthy branch, applying rooting hormone, and wrapping with moist sphagnum moss and plastic. Maintain warmth and avoid ex',
        timing: 'Late spring to early summer',
        maturityStage: 'Mature trees (2-3 years+)',
        notRecommended: false
      },
      {
        name: 'Fertilizing with Balanced, Low-Nitrogen Formula',
        description: 'Apply a balanced, low-nitrogen fertilizer (e.g., NPK 10-10-10 or similar) every 3-4 weeks during the active growing season (spring through summer). Use diluted liquid fertilizer to avoid salt buildup in the gritty soil. Cease fertilizing during winter dormancy to prevent stressing the plant.',
        timing: 'Every 3-4 weeks, spring through summer',
        maturityStage: 'After 1 year',
        notRecommended: false
      },
      {
        name: 'Pest and Disease Management for Root Rot and Mealybugs',
        description: 'Monitor regularly for common pests such as mealybugs and spider mites, treating infestations promptly with insecticidal soap or neem oil. Prevent root rot by adhering strictly to soak-and-dry watering and using well-draining soil. Avoid overwatering during winter dormancy and ensure good airflow aro',
        timing: 'Inspect monthly during growing season; prevent year-round',
        maturityStage: 'All stages',
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
    id: 'baobab',
    scientificName: 'Adansonia digitata',
    commonName: 'Baobab',
    group: 'Deciduous',
    temperatureMin: 12,
    temperatureMax: 54,
    sunExposure: 'Requires a minimum of 6 hours of full sunlight per',
    position: 'Indoor. Must be kept in a warm environment and bro',
    leafType: 'Deciduous',
    climate: 'Temperate',
    flowering: 'Spring',
    nativeRegion: 'Dry savanna of the African lowlands south of the Sahara.',
    difficultyLevel: 'Expert',
    category: 'Advanced',
    careTips: {
      general: 'Very slow growth rate as a bonsai. Develops a massive, often bottle-shaped, deeply furrowed trunk. Drops leaves periodically, followed by simple elliptic leaves, and then hand-shaped leaves with 5 to',
      soilType: 'Highly porous, well-draining soil is essential to prevent root rot. A suggested mix is 60% good soil',
      feeding: 'Regular fertilization during growing season',
      watering: 'Very drought-tolerant and extremely sensitive to overwatering and root rot. Water sparingly, about o'
    },
    bonsaiStyles: ['Informal Upright', 'Formal Upright', 'Slanting'],
    techniques: [
      {
        name: 'Structural Pruning',
        description: 'For Baobab bonsai, structural pruning focuses on maintaining the natural bottle-shaped trunk and encouraging a wide, clunky branch structure that mimics its wild form. Remove weak, crossing, or inward-growing branches to open the canopy and emphasize the thick trunk. Avoid heavy pruning in one sessi',
        timing: 'Early spring to early summer during active growth',
        maturityStage: 'After 3-4 years',
        notRecommended: false
      },
      {
        name: 'Maintenance Pruning',
        description: 'Trim back new shoots lightly to maintain the desired canopy size and shape without removing more than 20% of foliage at once. This helps control the leaf size and encourages branching in thinner shoots. Remove any dead or diseased wood promptly to prevent infections. Maintenance pruning is critical',
        timing: 'Throughout the growing season, monthly',
        maturityStage: 'After 2 years',
        notRecommended: false
      },
      {
        name: 'Wiring Technique',
        description: 'Use thick, soft aluminum wire to shape branches gently, as Baobab branches are strong but brittle. Avoid tight wiring that could scar the bark; instead, use padding under wires to protect the thick bark. Wiring should be short term (max 2-3 months) to prevent damage, given the slow growth rate and t',
        timing: 'Late winter to early spring before active growth',
        maturityStage: 'After 3 years',
        notRecommended: false
      },
      {
        name: 'Repotting',
        description: 'Repot Baobab bonsai every 3-4 years to refresh soil and prevent root rot, using a highly porous, well-draining mix. Repotting is stressful, so do it during early spring before bud break to ensure recovery during the growing season. Avoid repotting during dormancy or extreme heat. Ensure the root bal',
        timing: 'Early spring, every 3-4 years',
        maturityStage: 'After 3 years',
        notRecommended: false
      },
      {
        name: 'Root Pruning',
        description: 'Perform conservative root pruning during repotting, removing no more than 20-30% of the root mass to avoid stressing the tree’s slow growth. Focus on cutting away circling or rotten roots and encourage fine root development by trimming thick roots selectively. Use sterilized tools to prevent infecti',
        timing: 'During repotting in early spring',
        maturityStage: 'After 3 years',
        notRecommended: false
      },
      {
        name: 'Defoliation',
        description: 'Full defoliation is not recommended for Baobab bonsai due to its slow growth and sensitivity to stress. Partial leaf trimming can be done to reduce leaf size and improve light penetration but avoid removing all leaves at once. Defoliation risks weakening the tree and reducing stored energy in the tr',
        timing: 'Not recommended',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Pinching',
        description: 'Pinch back soft new growth with fingers to encourage branching and smaller leaves without causing excessive stress. Pinching helps maintain the natural appearance and controls the canopy density. Do not remove more than 25% of new growth at once to avoid shock.',
        timing: 'Throughout the growing season, as new shoots appear',
        maturityStage: 'After 2 years',
        notRecommended: false
      },
      {
        name: 'Grafting',
        description: 'Grafting is rarely used on Baobab bonsai due to its slow growth and the difficulty of successful union. When desired, grafting can be done to repair damaged branches or add finer branchlets, but success rates are low. It requires precise timing and compatible scion wood from the same species.',
        timing: 'Late winter to early spring during sap flow',
        maturityStage: 'Mature trees only',
        notRecommended: false
      },
      {
        name: 'Jin (Deadwood)',
        description: 'Creating Jin is generally not suitable for Baobab bonsai because the species naturally forms a thick, protective bark and deadwood features do not align with its natural aesthetics. The thick bark and slow growth make Jin carving risky and visually incongruent.',
        timing: 'N/A',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Shari (Trunk Deadwood)',
        description: 'Shari is not recommended for Baobab bonsai as the species’ signature thick, corky bark and swollen trunk are key aesthetic features. Removing bark can expose the soft water-storing tissues underneath, risking infection and decay. Preservation of the natural trunk form is preferred.',
        timing: 'N/A',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Nebari Development',
        description: 'Encourage a wide, stable nebari by careful root pruning during repotting and by shallow planting. Avoid deep planting to prevent root rot. Gradually expose the root flare by removing soil around the base during growing seasons to mimic natural Baobab root exposure. The nebari should be broad and irr',
        timing: 'During repotting and growing season soil exposure',
        maturityStage: 'After 3 years',
        notRecommended: false
      },
      {
        name: 'Carving',
        description: 'Carving is not recommended due to the Baobab’s thick, water-storage trunk and slow healing rate. Carving risks damaging the internal water reservoir and compromising tree health. The natural, rugged trunk texture should be preserved to maintain authenticity.',
        timing: 'N/A',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Air Layering',
        description: 'Air layering can be used to propagate Baobab bonsai but requires warm, stable temperatures above 20°C and careful moisture control. The process is slow and should be done in late spring or early summer when the tree is actively growing. Use a well-draining sphagnum moss medium and wrap tightly to re',
        timing: 'Late spring to early summer',
        maturityStage: 'After 4 years',
        notRecommended: false
      },
      {
        name: 'Fertilizing',
        description: 'Use a balanced, low-nitrogen fertilizer sparingly during the growing season to avoid excessive foliage growth and maintain trunk development. Fertilize once every 6 weeks from early spring to late summer. Avoid fertilizing during dormancy. Organic slow-release or liquid fertilizers diluted to half s',
        timing: 'Early spring to late summer, every 6 weeks',
        maturityStage: 'After 2 years',
        notRecommended: false
      },
      {
        name: 'Pest and Disease Management',
        description: 'Monitor for common pests such as spider mites, aphids, and scale insects, which can stress Baobab bonsai. Use gentle insecticidal soaps or neem oil sprays to control infestations. Prevent root rot by avoiding overwatering and ensuring excellent drainage. Maintain good airflow and avoid high humidity',
        timing: 'Inspect monthly during growing season',
        maturityStage: 'All stages',
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
    id: 'guava',
    scientificName: 'Psidium guajava',
    commonName: 'Guava',
    group: 'Deciduous',
    temperatureMin: 20,
    temperatureMax: 32,
    sunExposure: 'High light requirement. Needs a minimum of **6 to',
    position: 'Outdoor in USDA zones 9b-11 (or where temperatures',
    leafType: 'Deciduous',
    climate: 'Temperate',
    flowering: 'Spring',
    nativeRegion: 'Tropical America.',
    difficultyLevel: 'Intermediate',
    category: 'Intermediate',
    careTips: {
      general: 'Fast-growing evergreen shrub or small tree, reaching up to 5 meters in nature. It has a grayish-brown trunk and leathery, oblong-elliptic, and large opposite leaves. The tree produces small, white, fr',
      soilType: 'Prefers a well-draining, slightly acidic to neutral soil with a pH between **5.0 and 7.0**. A recomm',
      feeding: 'Regular fertilization during growing season',
      watering: 'Moderate water requirement; the soil should not be allowed to dry out completely, as this can damage'
    },
    bonsaiStyles: ['Informal Upright', 'Formal Upright', 'Slanting'],
    techniques: [
      {
        name: 'Structural Pruning',
        description: 'Perform heavy structural pruning in early spring before new growth begins to manage the aggressive growth habit and maintain bonsai proportions. Remove thick branches that disrupt the design, focusing on encouraging ramification and a balanced canopy. This species responds well to hard pruning due t',
        timing: 'Early spring (before active growth, around late February to March)',
        maturityStage: 'After 2-3 years of growth',
        notRecommended: false
      },
      {
        name: 'Maintenance Pruning',
        description: 'Regularly prune new shoots throughout the growing season to control size and promote back-budding. Pinch or cut back vigorous shoots once they reach 5-7 cm to maintain compact branching. This frequent pruning is essential for guava bonsai due to its fast growth rate and tendency to produce large lea',
        timing: 'Late spring through early autumn, every 2-3 weeks',
        maturityStage: 'After first year',
        notRecommended: false
      },
      {
        name: 'Wiring with Soft Aluminum Wire',
        description: 'Use soft aluminum wire to gently shape branches, as guava wood is relatively flexible but can snap if bent too abruptly. Start wiring in late winter on dormant branches to reduce sap flow and branch brittleness. Avoid wiring thick branches that are overly rigid; instead, shape younger shoots to refi',
        timing: 'Late winter to early spring (February to March), rewiring as needed during growing season',
        maturityStage: 'After 1-2 years when branches are thick enough to wire',
        notRecommended: false
      },
      {
        name: 'Repotting in Early Spring',
        description: 'Repot guava bonsai every 2 years in early spring before new growth starts to prevent root-bound conditions and maintain soil health. Use a fast-draining substrate with a mix of Akadama and volcanic pumice to ensure moisture retention without waterlogging. Avoid repotting during active growth or wint',
        timing: 'Early spring (late February to March) every 2 years',
        maturityStage: 'After 2 years',
        notRecommended: false
      },
      {
        name: 'Root Pruning with Moderate Root Ball Reduction',
        description: 'During repotting, prune up to one-third of the root mass, focusing on removing thick, old roots and promoting fine root development. Guava roots regenerate quickly, so moderate pruning encourages healthy root structure and better nutrient uptake. Always maintain a balance between root and branch pru',
        timing: 'During repotting in early spring (late February to March)',
        maturityStage: 'After 2 years',
        notRecommended: false
      },
      {
        name: 'Defoliation for Leaf Size Reduction',
        description: 'Complete defoliation is recommended in mid-summer to reduce the naturally large leaf size and encourage the growth of smaller secondary leaves. Remove all leaves carefully after the tree has fully leafed out to stimulate a second flush of smaller foliage, improving bonsai aesthetics. Avoid defoliati',
        timing: 'Mid-summer (July) after strong growth flush',
        maturityStage: 'After 3 years',
        notRecommended: false
      },
      {
        name: 'Pinching New Shoots',
        description: 'Pinch back soft new shoots regularly once they reach 5-7 cm to control leaf size and promote dense branching. Use fingernails or sharp scissors to pinch rather than cut to avoid damage. This technique is essential for guava bonsai due to its rapid shoot elongation and large leaves.',
        timing: 'Late spring through early autumn, every 1-2 weeks',
        maturityStage: 'After first year',
        notRecommended: false
      },
      {
        name: 'Grafting for Branch Addition',
        description: 'Grafting is occasionally used to add or replace branches in guava bonsai to improve design or compensate for lost growth. Scion wood should be taken from healthy, vigorous shoots and grafted in late winter. This technique is useful because guava readily accepts grafts and heals quickly, but is not m',
        timing: 'Late winter (February to March)',
        maturityStage: 'After 3 years',
        notRecommended: false
      },
      {
        name: 'Jin (Deadwood) Technique',
        description: 'Jin is not typically recommended for guava bonsai because its bark and wood do not produce visually appealing deadwood features, and the species’ vigorous growth tends to heal wounds quickly. However, small jins can be created carefully on older branches to simulate age if desired, but should be don',
        timing: 'Mature specimens only, during dormant season',
        maturityStage: 'Mature trees only',
        notRecommended: true
      },
      {
        name: 'Shari (Trunk Deadwood) Technique',
        description: 'Shari is generally not recommended due to guava’s thin bark and aggressive healing which tends to close wounds rapidly, making deadwood features less distinct. The species’ natural patchy, peeling bark provides enough visual interest without the need for artificial deadwood. Avoid carving or strippi',
        timing: 'N/A',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Nebari Development by Root Flare Exposure',
        description: 'Expose and slightly prune surface roots during repotting to encourage wide, even nebari characteristic of mature guava trees. Position the tree in the pot so that prominent roots spread symmetrically around the trunk base. Avoid deep root pruning near the nebari to maintain stability and healthy roo',
        timing: 'During repotting every 2 years in early spring',
        maturityStage: 'After 2 years',
        notRecommended: false
      },
      {
        name: 'Carving Not Recommended',
        description: 'Carving is generally discouraged on guava bonsai because the wood is relatively soft and heals quickly, making carved scars less defined and potentially inviting disease. The natural textured, patchy bark provides enough character, so focus should remain on pruning and bark preservation instead of c',
        timing: 'N/A',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Air Layering for Propagation',
        description: 'Use air layering in late spring to early summer when sap flow is strong to propagate new guava bonsai from healthy, semi-hardwood branches. Keep the layered area moist and shaded to encourage rooting within 6-8 weeks. This method is preferred for producing genetically identical trees and maintaining',
        timing: 'Late spring to early summer (May to July)',
        maturityStage: 'After 2 years',
        notRecommended: false
      },
      {
        name: 'Fertilizing with Balanced Tropical Formula',
        description: 'Apply a balanced, slow-release fertilizer formulated for tropical fruit trees monthly during the growing season (spring through early autumn). Use a high nitrogen mix early in the season to promote foliage, shifting to higher potassium in late summer to support flowering and fruiting. Avoid fertiliz',
        timing: 'Monthly from March to September',
        maturityStage: 'After first year',
        notRecommended: false
      },
      {
        name: 'Watering and Humidity Control',
        description: 'Water thoroughly whenever the top 1-2 inches of soil feel dry, ensuring consistent moisture without waterlogging. Maintain high humidity (above 60%) especially indoors by misting or using humidity trays, as guava bonsai thrives in humid tropical conditions. Reduce watering frequency during winter bu',
        timing: 'Year-round with adjustments: frequent in spring/summer, reduced in winter',
        maturityStage: 'All stages',
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
    id: 'coast-banksia',
    scientificName: 'Banksia integrifolia',
    commonName: 'Coast Banksia',
    group: 'Deciduous',
    temperatureMin: 21,
    temperatureMax: 30,
    sunExposure: 'Requires **full sun** for compact and healthy grow',
    position: 'Outdoor. It requires full sun and protection from',
    leafType: 'Deciduous',
    climate: 'Temperate',
    flowering: 'Spring',
    nativeRegion: 'Australia\'s east coast, specifically from **Victoria** in the south to **Central Queensland** in the',
    difficultyLevel: 'Beginner',
    category: 'Beginner',
    careTips: {
      general: 'A fast-growing, vigorous tree type that can reach up to 25 meters (82 ft) in the wild. It has a rangy habit and naturally long internodes, which require consistent trimming and pinching to reduce. The',
      soilType: 'Requires a **well-draining, slightly acidic soil mix** with a neutral or slightly higher pH value of',
      feeding: 'Regular fertilization during growing season',
      watering: '**Drought-resistant**, but should be watered regularly. Allow the **top inch (approx. 2.5 cm) of soi'
    },
    bonsaiStyles: ['Informal Upright', 'Formal Upright', 'Slanting'],
    techniques: [
      {
        name: 'Structural Pruning',
        description: 'Perform structural pruning during late winter or early spring before active growth begins. Remove long, rangy branches to encourage a compact silhouette and reduce internode length. Focus on cutting back to strong buds or branches to maintain vigor, while preserving the thick trunk development chara',
        timing: 'Late winter to early spring',
        maturityStage: 'After 3 years',
        notRecommended: false
      },
      {
        name: 'Maintenance Pruning',
        description: 'Regularly trim new shoots during the growing season to control the tendency for long internodes and maintain dense foliage pads. Pinch or cut back new growth once it has produced 3-4 leaf pairs to encourage back budding and reduce leaf size. This ongoing pruning helps maintain the bonsai’s compact f',
        timing: 'Spring through summer, every 3-4 weeks',
        maturityStage: 'After 1 year',
        notRecommended: false
      },
      {
        name: 'Wiring Technique',
        description: 'Use medium-gauge anodized aluminum wire, applied carefully to avoid damaging the relatively brittle bark typical of the species. Wire branches after new growth has hardened off in late spring or early summer. Wiring should be left on for a short period (4-6 weeks) due to fast growth and risk of scar',
        timing: 'Late spring to early summer',
        maturityStage: 'After 2 years',
        notRecommended: false
      },
      {
        name: 'Repotting Timing and Technique',
        description: 'Repot every 2-3 years during early spring before bud break to minimize stress and maximize recovery. Carefully remove old soil, especially around proteoid roots, which are fragile and prone to damage. Use a well-draining, gritty mix low in phosphorus (e.g., Akadama, pumice, lava rock) to mimic nativ',
        timing: 'Early spring, every 2-3 years',
        maturityStage: 'After 2 years',
        notRecommended: false
      },
      {
        name: 'Root Pruning',
        description: 'During repotting, gently prune roots to remove thick, woody roots and especially any damaged or rotten proteoid roots. Proteoid roots should be trimmed carefully as they are crucial for nutrient uptake but sensitive to disturbance. Root pruning should focus on reducing root mass moderately to encour',
        timing: 'During repotting in early spring',
        maturityStage: 'After 2 years',
        notRecommended: false
      },
      {
        name: 'Defoliation',
        description: 'Partial defoliation can be applied in late spring to early summer to help reduce leaf size and encourage back budding but should be used sparingly. Complete defoliation is not recommended due to the species’ vigorous growth habit and risk of weakening the tree. Remove only 30-50% of mature leaves, f',
        timing: 'Late spring to early summer',
        maturityStage: 'After 3 years',
        notRecommended: false
      },
      {
        name: 'Pinching Technique',
        description: 'Pinch new growth tips regularly during the active growing season to control internode length and promote dense branching. Use finger pinching rather than scissors to avoid damaging surrounding tissues. Pinch when new shoots have produced 3-4 pairs of leaves; this encourages secondary branch developm',
        timing: 'Spring through summer, every 2-3 weeks',
        maturityStage: 'After 1 year',
        notRecommended: false
      },
      {
        name: 'Grafting',
        description: 'Grafting is rarely used with Coast Banksia bonsai as the species readily develops strong trunks and branches on its own. It may be considered for repair or refinement purposes but is generally not necessary due to the species’ vigorous growth and good back-budding. When used, grafting should be done',
        timing: 'Early spring',
        maturityStage: 'Mature trees only',
        notRecommended: false
      },
      {
        name: 'Jin (Deadwood) Formation',
        description: 'Creating jin is generally not recommended for Coast Banksia as the species naturally focuses energy on vigorous growth and deadwood features can look unnatural on its smooth bark. The species’ bark and wood do not lend themselves well to deadwood preservation, and unnecessary jin can stress the tree',
        timing: 'N/A',
        maturityStage: 'Mature trees only',
        notRecommended: true
      },
      {
        name: 'Shari (Trunk Deadwood)',
        description: 'Shari is also not typically recommended due to the species’ bark and growth characteristics. The Coast Banksia’s bark peels naturally in small patches, and artificially creating shari can damage the protective cambium and increase susceptibility to pathogens. Focus should be on healthy trunk develop',
        timing: 'N/A',
        maturityStage: 'Mature trees only',
        notRecommended: true
      },
      {
        name: 'Nebari Development',
        description: 'Encourage a wide, radial nebari by gently exposing and cleaning surface roots during repotting and root pruning. Select strong lateral roots early and prune competing roots to promote outward growth. Use shallow planting in a well-draining gritty mix to encourage surface root flare, which is charact',
        timing: 'Starting at repotting after 2 years, ongoing maintenance',
        maturityStage: 'After 2 years',
        notRecommended: false
      },
      {
        name: 'Carving',
        description: 'Carving is not recommended due to the species’ fast growth and delicate bark, which does not respond well to extensive manipulation. The wood tends to be soft and may not hold detailed carving well, increasing the risk of decay. Focus on natural shaping techniques like pruning and wiring instead.',
        timing: 'N/A',
        maturityStage: 'Mature trees only',
        notRecommended: true
      },
      {
        name: 'Air Layering',
        description: 'Air layering can be used to propagate Coast Banksia but requires careful timing and moisture management. Perform air layering in late spring when sap flow is active, using sphagnum moss and a breathable wrap to maintain humidity. Avoid excessive moisture to prevent rot, and monitor closely due to th',
        timing: 'Late spring',
        maturityStage: 'Mature trees only',
        notRecommended: false
      },
      {
        name: 'Fertilizing Schedule and Type',
        description: 'Use a low-phosphorus, balanced fertilizer (e.g., NPK 10-5-10) monthly during the growing season (spring through early autumn). Avoid high-phosphorus fertilizers to protect sensitive proteoid roots. Apply minimal or no fertilizer during winter when the tree is semi-dormant to prevent root rot and nut',
        timing: 'Monthly from early spring to early autumn',
        maturityStage: 'After 1 year',
        notRecommended: false
      },
      {
        name: 'Pest and Disease Management',
        description: 'Monitor regularly for common pests such as scale insects and aphids, which can infest dense foliage. Use horticultural oils or insecticidal soaps as needed, avoiding systemic chemicals that can harm proteoid roots. Prevent root rot by avoiding overwatering and ensuring excellent drainage, especially',
        timing: 'Year-round monitoring, treatment as needed',
        maturityStage: 'All stages',
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
    id: 'star-magnolia',
    scientificName: 'Magnolia stellata',
    commonName: 'Star Magnolia',
    group: 'Deciduous',
    temperatureMin: -10,
    temperatureMax: 14,
    sunExposure: 'Full sun or semi-shade. Full sun encourages better',
    position: 'Outdoor. It is frost-hardy and requires a cold per',
    leafType: 'Deciduous',
    climate: 'Temperate',
    flowering: 'Spring',
    nativeRegion: 'Japan (Specifically South Central Honshu).',
    difficultyLevel: 'Intermediate',
    category: 'Intermediate',
    careTips: {
      general: 'The Star Magnolia is a slow-growing, deciduous shrub or small tree. It has a dense, bushy habit and a slow growth rate, estimated at about 30 cm (1 foot) per year in the ground. The leaves are narrow',
      soilType: 'A basic, well-draining bonsai soil mix is sufficient. It dislikes lime/alkaline soil, preferring neu',
      feeding: 'Regular fertilization during growing season',
      watering: 'The rootball must be kept consistently moist but not waterlogged. Watering frequency depends on temp'
    },
    bonsaiStyles: ['Informal Upright', 'Formal Upright', 'Slanting'],
    techniques: [
      {
        name: 'Structural Pruning',
        description: 'Perform structural pruning immediately after flowering in late spring to early summer. This timing takes advantage of the tree\'s growth flush following bloom, allowing cuts to heal quickly and encouraging denser branching. Focus on removing crossing or inward-growing branches to maintain an informal',
        timing: 'Late spring to early summer, right after flowering',
        maturityStage: 'After 3-4 years',
        notRecommended: false
      },
      {
        name: 'Maintenance Pruning',
        description: 'Throughout the growing season, regularly pinch back new shoots after they have produced 2-3 pairs of leaves to encourage back budding and reduce leaf size over time. Remove any water sprouts or overly vigorous shoots to maintain the desired shape. Avoid pruning during the flowering period to prevent',
        timing: 'Summer, ongoing during active growth',
        maturityStage: 'After 2 years',
        notRecommended: false
      },
      {
        name: 'Wiring with Soft Aluminum Wire',
        description: 'Use soft aluminum wire to gently shape branches, as the wood is soft and prone to damage. Wire branches after the flowering period but before the new growth hardens, typically in late spring to early summer. Avoid wiring when branches are too brittle (late fall/winter) or too soft (early spring buds',
        timing: 'Late spring to early summer, post-flowering',
        maturityStage: 'After 3 years',
        notRecommended: false
      },
      {
        name: 'Repotting in Early Spring',
        description: 'Repot just before bud break in early spring to minimize stress and root damage. Use a well-draining, acidic bonsai soil mix with organic components to retain moisture without waterlogging. Avoid repotting in late summer or fall as the tree’s energy reserves are low and it will be vulnerable to frost',
        timing: 'Early spring, before bud break',
        maturityStage: 'After 3-4 years',
        notRecommended: false
      },
      {
        name: 'Root Pruning with Minimal Root Removal',
        description: 'During repotting, prune only about 20-30% of the roots to prevent excessive stress on the slow-growing, soft root system. Focus on removing long, circling roots and unhealthy portions, preserving as much fine root mass as possible to maintain moisture uptake. Use sharp, sterilized tools to avoid dam',
        timing: 'Early spring, during repotting',
        maturityStage: 'After 3-4 years',
        notRecommended: false
      },
      {
        name: 'Avoid Defoliation',
        description: 'Defoliation is generally not recommended for Star Magnolia bonsai due to the large leaf size and slow recovery rate. Removing leaves can stress the tree and potentially reduce flowering in the following season. Instead, manage leaf size through careful pinching and maintenance pruning to encourage s',
        timing: 'N/A',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Pinching New Shoots',
        description: 'Pinch back soft, new growth shoots once they have developed 2-3 pairs of leaves to stimulate back budding and reduce leaf size. Use clean fingernails or scissors to nip off the shoot tip without damaging surrounding tissue. This technique helps maintain compact growth and encourages flowering wood f',
        timing: 'Late spring through summer',
        maturityStage: 'After 2 years',
        notRecommended: false
      },
      {
        name: 'Grafting for Branch Improvement',
        description: 'Grafting is occasionally used to improve ramification or add flowering branches from a desirable cultivar. Due to the species’ slow growth and difficulty thickening the trunk, grafting can accelerate branch development and improve flower quality. Use whip-and-tongue or side-veneer grafting methods i',
        timing: 'Early spring, before bud break',
        maturityStage: 'After 4-5 years',
        notRecommended: false
      },
      {
        name: 'Jin (Deadwood) Application Not Recommended',
        description: 'Jin is not recommended on Star Magnolia bonsai due to the soft, rot-prone wood and the species’ natural smooth, light gray bark which does not lend itself well to deadwood aesthetics. Attempting jin may lead to rapid decay and weaken branch structure.',
        timing: 'N/A',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Shari (Trunk Deadwood) Not Suitable',
        description: 'Creating shari is generally unsuitable for Star Magnolia because of its soft wood and susceptibility to rot. The species’ bark and trunk characteristics do not support long-lasting deadwood features, and attempts may harm tree health.',
        timing: 'N/A',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Nebari Development through Surface Root Encouragement',
        description: 'Encourage nebari development by carefully pruning roots during repotting and positioning the tree slightly angled to expose surface roots. Lightly scrape soil from around the base to expose and encourage thickening of fine roots near the trunk flare. Due to slow growth, patience is required and neba',
        timing: 'At each repotting, early spring',
        maturityStage: 'After 3 years',
        notRecommended: false
      },
      {
        name: 'Carving Not Recommended',
        description: 'Carving techniques are not advised for Star Magnolia bonsai because of the soft, rot-prone wood. The species’ wood structure does not tolerate deep cuts or deadwood carving without rapid deterioration, which compromises tree health.',
        timing: 'N/A',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Air Layering for Propagation',
        description: 'Air layering is highly effective for Star Magnolia and can be performed in late spring to early summer when the tree is actively growing. Use moss or sphagnum wrapped with plastic to maintain moisture, and apply rooting hormone to encourage root development. This method produces clones with establis',
        timing: 'Late spring to early summer',
        maturityStage: 'After 2 years',
        notRecommended: false
      },
      {
        name: 'Fertilizing with Acid-Based Feed',
        description: 'Apply a balanced, acid-based fertilizer twice yearly in early spring (pre-bud break) and late summer to neutralize soil alkalinity and support flowering and root health. Use a slow-release or liquid fertilizer formulated for acid-loving plants with an NPK ratio around 10-10-10. Avoid high nitrogen f',
        timing: 'Early spring and late summer',
        maturityStage: 'After 1 year',
        notRecommended: false
      },
      {
        name: 'Pest and Disease Management Focused on Scale and Powdery Mildew',
        description: 'Regularly inspect for scale insects and powdery mildew, which are common issues in humid or poorly ventilated environments. Treat scale infestations with horticultural oil during dormancy or insecticidal soap in growing season, and improve air circulation to reduce mildew. Avoid overwatering and ens',
        timing: 'Year-round monitoring, treatment as needed',
        maturityStage: 'All stages',
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
    id: 'bay-laurel',
    scientificName: 'Laurus nobilis',
    commonName: 'Bay Laurel',
    group: 'Deciduous',
    temperatureMin: 7,
    temperatureMax: 27,
    sunExposure: 'Requires full sun to partial shade. Ideally, it ne',
    position: 'Outdoor, with seasonal indoor protection. It is ge',
    leafType: 'Deciduous',
    climate: 'Temperate',
    flowering: 'Spring',
    nativeRegion: 'Mediterranean region, including countries like Turkey, Greece, Italy, Spain, and North Africa.',
    difficultyLevel: 'Beginner',
    category: 'Beginner',
    careTips: {
      general: 'Slow-growing evergreen tree. In the landscape, it can reach 15-30 ft (4.7-9 m), but as bonsai, its growth is easily contained. It buds back readily from old wood and responds well to heavy pruning. Th',
      soilType: 'A highly porous, well-draining bonsai soil mix is essential to prevent root rot, which this species',
      feeding: 'Regular fertilization during growing season',
      watering: 'Requires regular and consistent watering, but the soil must be allowed to dry out slightly between w'
    },
    bonsaiStyles: ['Informal Upright', 'Formal Upright', 'Slanting'],
    techniques: [
      {
        name: 'Structural Pruning',
        description: 'Perform heavy structural pruning in early spring before new growth begins to shape the primary branches and reduce the overall size. Bay Laurel responds well to cutting back old wood, allowing for significant branch reduction to refine the silhouette. Remove any crossing or inward-growing branches t',
        timing: 'Early spring (before bud break)',
        maturityStage: 'After 2-3 years',
        notRecommended: false
      },
      {
        name: 'Maintenance Pruning',
        description: 'Perform light pruning throughout the growing season to maintain shape and encourage ramification. Pinch or cut back long shoots to one or two pairs of leaves to promote denser foliage pads. Regular removal of weak or leggy growth helps keep the canopy balanced and prevents shading of lower branches.',
        timing: 'Late spring through summer, as needed',
        maturityStage: 'After 1 year',
        notRecommended: false
      },
      {
        name: 'Wiring Technique',
        description: 'Use medium to heavy gauge anodized aluminum wire to shape branches, as Bay Laurel branches can be somewhat stiff and coarse. Wire young shoots and branches carefully to avoid damaging the leathery leaves. Wiring is best done in late winter or early spring before new growth starts to minimize branch',
        timing: 'Late winter to early spring (before bud break)',
        maturityStage: 'After 2 years',
        notRecommended: false
      },
      {
        name: 'Repotting',
        description: 'Repot Bay Laurel every 2-3 years in early spring just before new growth emerges. Use a highly porous, well-draining bonsai soil mix (e.g., Akadama, Pumice, Lava rock) to prevent root rot. Repotting is essential to refresh soil, control root size, and maintain tree health. Avoid repotting in hot summ',
        timing: 'Early spring (before bud break), every 2-3 years',
        maturityStage: 'After 2 years',
        notRecommended: false
      },
      {
        name: 'Root Pruning',
        description: 'Perform careful but heavy root pruning during repotting to manage the coarse, fleshy root system. Trim back large, thick roots while preserving fine feeder roots to maintain nutrient uptake. Bay Laurel roots are sensitive to overwatering and poor drainage, so root pruning helps prevent root rot by e',
        timing: 'During repotting in early spring',
        maturityStage: 'After 2 years',
        notRecommended: false
      },
      {
        name: 'Defoliation',
        description: 'Partial defoliation can be used in mid to late summer to reduce leaf size and promote back budding on Bay Laurel. Because the leaves are relatively large and leathery, full defoliation is stressful and not generally recommended. Instead, selectively remove some mature leaves to increase light penetr',
        timing: 'Mid to late summer (after strong growth has occurred)',
        maturityStage: 'Mature trees only (3+ years)',
        notRecommended: false
      },
      {
        name: 'Pinching',
        description: 'Pinch new shoots regularly during the growing season by removing the terminal bud once shoots have 4-6 leaves. This encourages lateral branching and denser foliage pads. Pinching is a gentle alternative to cutting and helps maintain a natural growth habit. Avoid pinching when temperatures exceed 27°',
        timing: 'Spring through early autumn, every 2-3 weeks during active growth',
        maturityStage: 'After first year',
        notRecommended: false
      },
      {
        name: 'Grafting',
        description: 'Grafting is rarely needed for Bay Laurel bonsai but can be used to add branches or change cultivar characteristics. Approach grafting in early spring using side or whip grafts on vigorous young branches. Success rates vary, so it is generally reserved for experienced growers aiming to improve branch',
        timing: 'Early spring (before bud break)',
        maturityStage: 'Mature trees only',
        notRecommended: false
      },
      {
        name: 'Jin (Deadwood)',
        description: 'Creating Jin (deadwood) is generally not suitable for Bay Laurel, as the species naturally has smooth bark and does not develop deadwood aesthetically. Attempting Jin can cause unnecessary stress and increase susceptibility to disease or rot. Focus on healthy, living wood styling for best results.',
        timing: 'N/A',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Shari (Trunk Deadwood)',
        description: 'Shari is not recommended for Bay Laurel bonsai because the species’ bark is thin and delicate, and exposing deadwood can lead to rapid decay. The aesthetic of Bay Laurel bonsai is best maintained with live, healthy bark and foliage, taking advantage of its natural dense canopy and smooth trunk.',
        timing: 'N/A',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Nebari Development',
        description: 'Develop nebari by encouraging surface root growth during early repotting cycles. Spread and prune thick roots evenly around the base to create a balanced and stable appearance. Using a slightly shallower soil depth encourages roots to grow outward rather than downward. Bay Laurel’s coarse root struc',
        timing: 'During repotting in early spring, ongoing for first 5 years',
        maturityStage: 'After 1 year',
        notRecommended: false
      },
      {
        name: 'Carving',
        description: 'Carving techniques are generally not recommended for Bay Laurel bonsai due to the soft, fleshy nature of its wood and the species’ susceptibility to rot and infection. Carving wounds heal slowly and increase risk of fungal issues. Focus on shaping through pruning and wiring instead.',
        timing: 'N/A',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Air Layering',
        description: 'Air layering can be used to propagate Bay Laurel bonsai and develop new trees with desired branch structure. Perform air layering in late spring to early summer when sap flow is active. Use sphagnum moss and plastic wrap to maintain moisture and ensure a clean cut to encourage root formation. This m',
        timing: 'Late spring to early summer',
        maturityStage: 'After 3 years',
        notRecommended: false
      },
      {
        name: 'Fertilizing',
        description: 'Feed Bay Laurel bonsai monthly during the active growing season (spring through early autumn) with a balanced, low-nitrogen fertilizer to promote healthy foliage and root development. Use organic or slow-release fertilizers to avoid salt buildup. Reduce feeding frequency significantly in winter to o',
        timing: 'Monthly from early spring to early autumn; sparingly in winter',
        maturityStage: 'After 1 year',
        notRecommended: false
      },
      {
        name: 'Pest and Disease Management',
        description: 'Bay Laurel bonsai is susceptible to scale insects, aphids, and root rot if overwatered. Inspect regularly and treat infestations promptly with horticultural oil or insecticidal soap. Maintain excellent drainage and avoid overwatering to prevent fungal diseases. Ensure good airflow and avoid prolonge',
        timing: 'Inspect monthly during growing season; treat as needed',
        maturityStage: 'After first year',
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
    id: 'fir',
    scientificName: 'Abies species',
    commonName: 'Fir',
    group: 'Deciduous',
    temperatureMin: -3,
    temperatureMax: 27,
    sunExposure: 'Full sun or partial shade. During the hottest week',
    position: 'Outdoor. Firs are frost-hardy, but when planted in',
    leafType: 'Deciduous',
    climate: 'Temperate',
    flowering: 'Spring',
    nativeRegion: 'Most temperate and mountainous zones of the Northern Hemisphere. Specific species like *Abies alba*',
    difficultyLevel: 'Expert',
    category: 'Advanced',
    careTips: {
      general: 'Slow-growing, typically taking about 10 years for a seedling to reach a viable stage for bonsai development. They are an elongating species with a pyramidal or conical crown shape and deep root system',
      soilType: 'Requires a well-draining, standard soil mixture. A common recommendation for conifers is a mix of 1/',
      feeding: 'Regular fertilization during growing season',
      watering: 'Water when the soil is slightly dry, not wet. They prefer it slightly dry, and over-watering is much'
    },
    bonsaiStyles: ['Informal Upright', 'Formal Upright', 'Slanting'],
    techniques: [
      {
        name: 'Structural Pruning',
        description: 'For Fir bonsai, structural pruning is essential to maintain the natural pyramidal shape and encourage back-budding. Remove long, vertical shoots that disrupt the conical silhouette during early spring before new growth fully hardens. Focus on cutting branches that cross or grow inward to maintain ai',
        timing: 'Early spring, just before active growth starts',
        maturityStage: 'After 3-4 years',
        notRecommended: false
      },
      {
        name: 'Maintenance Pruning',
        description: 'Maintenance pruning for Fir bonsai involves trimming new shoot growth multiple times during the growing season to keep branch length compact and encourage dense needle coverage. Use scissors to pinch back soft shoots rather than cutting old wood, as Firs back-bud poorly on old growth. Remove any dea',
        timing: 'Late spring through early autumn, every 4-6 weeks as growth occurs',
        maturityStage: 'After 2 years',
        notRecommended: false
      },
      {
        name: 'Wiring with Minimal Tension',
        description: 'Fir branches have flexible needles but relatively brittle wood; wiring should be done with light, even tension to avoid scarring or branch breakage. Use aluminum wire and apply it during late winter when the tree is dormant and the wood is more pliable. Avoid wiring thick branches; focus on shaping',
        timing: 'Late winter (dormant period), remove wire by late spring',
        maturityStage: 'After 3 years',
        notRecommended: false
      },
      {
        name: 'Repotting with Root Pruning in Early Spring',
        description: 'Fir bonsai require repotting every 2-3 years when young, extending intervals as the tree matures. Repot in early spring before bud break to minimize stress. Use a well-draining, inorganic-based soil mix. When repotting, prune roots carefully to maintain a balanced root-to-shoot ratio, removing about',
        timing: 'Early spring, before active growth',
        maturityStage: 'After 2 years for seedlings and young trees',
        notRecommended: false
      },
      {
        name: 'Root Pruning with Emphasis on Fine Root Preservation',
        description: 'When root pruning Fir bonsai, prioritize preserving fine roots essential for nutrient absorption, as this species is sensitive to root disturbance. Avoid aggressive root ball reduction; instead, selectively remove thick, woody roots while leaving a healthy network of finer roots intact. This encoura',
        timing: 'During repotting in early spring',
        maturityStage: 'After 2 years',
        notRecommended: false
      },
      {
        name: 'Defoliation Not Recommended',
        description: 'Complete or partial defoliation is not recommended for Fir species because their needles are slow to replace and the tree’s health can be severely compromised. Fir bonsai do not respond well to this stress, often resulting in poor needle regrowth and weakened vigor. Instead, rely on seasonal pruning',
        timing: 'N/A',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Pinching New Shoots',
        description: 'Pinching new shoots on Fir bonsai encourages compact growth and improves branch ramification. Use your fingers to pinch back soft, elongating shoots when they reach about 2-3 cm, rather than cutting with scissors, to avoid browning of cut tips. This technique helps maintain the species’ characterist',
        timing: 'Late spring through summer, as new shoots elongate',
        maturityStage: 'After 2 years',
        notRecommended: false
      },
      {
        name: 'Grafting for Branch Improvement',
        description: 'Grafting can be employed on Fir bonsai to improve branch placement or add finer ramification when natural branch development is insufficient. Scion wood should be taken from healthy, vigorous donor trees during early spring. Because Firs back-bud well, grafting is a useful technique but requires adv',
        timing: 'Early spring, before bud break',
        maturityStage: 'Mature trees only',
        notRecommended: false
      },
      {
        name: 'Jin (Deadwood) Technique',
        description: 'Jin carving is generally not suitable for Fir bonsai because their bark is relatively thin and smooth when young, and the wood tends to be brittle. Attempting jin often leads to rapid decay or unsightly damage. Instead, preserve the natural live wood and focus on shaping through pruning and wiring.',
        timing: 'N/A',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Shari (Trunk Deadwood) Technique',
        description: 'Shari is rarely recommended for Fir bonsai due to the species’ sensitivity to wood exposure and the smooth, grey bark that does not lend itself well to naturalistic deadwood effects. Exposing trunk wood risks fungal infection and structural weakness. Focus on healthy bark preservation and natural ag',
        timing: 'N/A',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Nebari Development by Surface Root Pruning',
        description: 'Developing a strong nebari is critical for Fir bonsai stability and aesthetics. Encourage surface root growth by removing excess soil around the root flare during repotting and pruning vertical or deep roots selectively. Wiring small surface roots early in development can help train them outward. Av',
        timing: 'During repotting in early spring, repeated every 2-3 years when young',
        maturityStage: 'After 2 years',
        notRecommended: false
      },
      {
        name: 'Carving Not Recommended',
        description: 'Carving techniques are not advised for Fir bonsai because their wood tends to be brittle and the bark thin, making the tree prone to damage and infection. Additionally, carving can disrupt the natural smooth bark aesthetic of young Firs. Instead, emphasize natural shaping through pruning and careful',
        timing: 'N/A',
        maturityStage: 'N/A',
        notRecommended: true
      },
      {
        name: 'Air Layering with Caution',
        description: 'Air layering can be used to propagate Fir bonsai but requires careful moisture and temperature control to prevent rot and ensure root development. Perform air layering in late spring to early summer when sap flow is active. Use well-draining sphagnum moss wrapped with plastic to maintain humidity, a',
        timing: 'Late spring to early summer',
        maturityStage: 'After 3 years',
        notRecommended: false
      },
      {
        name: 'Fertilizing with Low Nitrogen and Slow Release',
        description: 'Firs require careful fertilizing to promote compact growth without excessive elongation. Use a balanced or low-nitrogen fertilizer (e.g., NPK 6-8-6) applied monthly from early spring to early autumn. Avoid high nitrogen fertilizers to prevent overly vigorous, weak growth. In winter, reduce or stop f',
        timing: 'Monthly from March to September',
        maturityStage: 'After 2 years',
        notRecommended: false
      },
      {
        name: 'Watering with Controlled Moisture and Humidity',
        description: 'Fir bonsai prefer slightly dry soil conditions, so water only when the top 1-2 cm of soil feels dry to the touch, avoiding over-watering which can cause root rot. Thoroughly soak the soil when watering. Provide summer humidity by misting needles during hot days and shading midday sun to reduce heat',
        timing: 'Check daily during summer; water as needed, less frequent in cooler months',
        maturityStage: 'All stages',
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

