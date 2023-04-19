import React, { useState } from 'react';

const Documentation = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const topics = [
    { id: 1, title: 'Introduction', content: "According to the undertakings at the Kyoto Protocol in December 1997, the EU should reduce itsgreenhouse gas (GHGs) emissions in the 2008-12 period to a level that is 8% below their level of 1990.This is equivalent to a reduction of GHGs in 2010 by about 316 Mt CO2 from their 3938 Mt CO2-equivalent level in 1990.1The GHGs covered are CO2, methane, nitrous oxide, hydro-fluorocarbons,perfluorocarbons and sulphur hexafluoride. For the three synthetic gases the protocol allows countries the option of using 1995 as base year. The Protocol also allows a number of flexibility mechanisms in theattainment of targets. These include carbon emissions savings generated from changes in land use, such as reforestation, emissions reductions obtained from carbon credits either from implementing projects among Annex B2 countries (i.e. joint implementation) or through emissions savings from financing allowable projects in developing (non Annex B) countries by using the clean developing mechanism. Finally the protocol gives the opportunity to trade greenhouse gas emission permits across all Annex B countries.Another possibility would be to transfer the emission rights as part of investment project deals involving partners from different Annex B countries.Another possibility would be to transfer the emission rights as part of investment project deals involving partners from different Annex B countries. In the Kyoto Protocol, this is called ”joint implementation”.Similarly Annex B countries may obtain emission rights through investment projects involving a partner from Annex B and a partner outside Annex B. This is called “clean development mechanism” in the protocol. All these mechanisms may well prove to provide important ways to reduce greenhouse gas emissions in an efficient and flexible manner." },
    { id: 2, title: 'Impact', content: 'Biodiversity loss due to past global warming will continue to escalate with every increment of global warming (very high confidence). Near-term warming and increased frequency, severity and duration of extreme events will place many terrestrial, freshwater, coastal and marine ecosystems at high or very high risks of biodiversity loss (medium to very high confidence, depending on ecosystem)2. In terrestrial ecosystems, 3 to 14% of species assessed will likely face very high risk of extinction at global warming levels of 1.5°C, increasing up to to 39% at 4°C and to 48% at 5°C. Global warming will progressively weaken soil health and ecosystem services such as pollination, increase pressure from pests and diseases, and reduce marine animal biomass, undermining food productivity in many regions on land and in the ocean (medium confidence). Continued and accelerating sea level rise will encroach on coastal settlements and infrastructure (high confidence) and commit low-lying coastal ecosystems to submergence and loss (medium confidence). The number of people at risk from loss of biodiversity associated to climate change will progressively increase (medium confidence).Effective ecosystem conservation on approximately 30% to 50% of Earth’s land, freshwater and ocean areas, including all remaining areas with a high degree of naturalness and ecosystem integrity, will help protect biodiversity, build ecosystem resilience and ensure essential ecosystem services (high confidence).' },
    { id: 3, title: 'API Reference', content: 'You can collect more details on Climate Change using RapidAPI.Visit this site: https://rapidapi.com/studio' },
    { id: 4, title: 'Measures', content: 'Necessary foundations shall be established to effectively promote measures based on the Bill for Promotion of Measures to Cope with Global Warming (adopted by the Cabinet on 28 April 1998) that stipulates the responsibilities and actions of the national Government, local authorities, businesses, and citizens. The measures specified below shall be implemented upon the approval of the bill in the Diet.(1) Establishing Basic Policies Relating to the Prevention of Global Warming In order to achieve the comprehensive and systematic promotion of measures to prevent global warming by targeting the six GHGs and CO2 sinks, basic policies relating to basic directions and actions by each Government body shall be established based on the Bill for Promotion of Measures to Cope with Global Warming.(2) Comprehensively and Systematically Promoting Measures to Prevent Global Warming In accordance with the Bill for Promotion of Measures to Cope with Global Warming, observation and monitoring of changes in concentrations of GHGs shall be conducted, and comprehensive measures to prevent global warming shall be established and implemented. In addition, the plan relating to measures to limit GHG emissions resulting from the national Governments activities shall be established, and the plan and information about its implementation should be made public. Furthermore, the national Government should provide supporting measures of local authorities to limit GHG emissions, and through technical advice etc., promote activities of businesses, citizens, and non- Governmental organizations to limit GHG emissions..' }
  ];

  const handleTopicClick = (id) => {
    setSelectedTopic(id);
  }

  return (
    <div className="documentation">
      <div className="menu">
        <ul>
          {topics.map(topic => (
            <li key={topic.id} onClick={() => handleTopicClick(topic.id)}>
              {topic.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="content">
      <h1>A Technical Documentation on <span id="s">Global Warming!!</span></h1>
        {selectedTopic ? (
          <div>
            <h2>{topics.find(topic => topic.id === selectedTopic).title}</h2>
            <p>{topics.find(topic => topic.id === selectedTopic).content}</p>
          </div>
        ) : (
          <p>Please select a topic.</p>
        )}
      </div>
    </div>
  );
};

export default Documentation;
