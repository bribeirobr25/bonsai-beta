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

