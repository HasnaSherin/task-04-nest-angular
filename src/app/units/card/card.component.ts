                                                                                                                                                                            
                                                                                                                                                                            
                                                                                                                                                                            
                                                                                                                                                                            
                                                                                                                                                                            
                                                                                                                                                                            
                                                                                                                                                                            
                                                                                                                                                                            
                                                                                                                                                                            
                                                                                                                                                                            
                                                                                                                                                                            
                                                                                                                                                                            
                                                                                                                                                                            
                                                                                                                                                                            import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  departments=[
    {
      id:1,
      Title:"BFS",
      Image:"../../../assets/bfs.jpg",
      description:"The Banking and Financial Services (BFS) Group at NeST Digital has established itself with over two decades of experience as a pioneer and leader in the GCC market by providing payment platform solutions – advanced payment solutions based on scalable microarchitecture & technology implemented to over 30 leading financial institutions is a testimony to its established credentials. "
    },
    {
      id:2,
      Title:"GIS",
      Image:"../../../assets/gis.jpg",
      description:"NeST GIS is a products and services entity under NeST Digital Technologies, offering advanced geospatial solutions with a focus on government, cadastral, utilities, transportation and facilities management.One of the NeST’s key differentiators in the industry is that it is a software development company that has added GIS as a horizontal technology focus area, rather than a ‘mapping’ company attempting software development in GIS. We help to GIS‐enable the business processes of our clients."
    },
    {
      id:3,
      Title:"Aerospace",
      Image:"../../../assets/aerospace.jpg",
      description:"NeST Digital partners with prime Global Aerospace OEMs bringing unmatched value to its customers and contributing to evolving modernization of aviation technologies. We have expertise in vertically integrated supply chain solutions for various domains such as Design & Engineering, Manufacturing, Plastics, Metal, System Integration, Cable Harness, Software Services, and AM support. "
    },
    {
      id:4,
      Title:"Healthcare",
      Image:"../../../assets/health.jpg",
      description:"Healthcare software development is vital for modern healthcare systems. With advancing technology, providers rely on software solutions to streamline operations, improve patient care, and boost outcomes. NeST Digital offers a range of healthcare software solutions, from patient monitoring to virtual reality simulations for medical training.These solutions enhance communication, provide real-time patient information, and increase engagement. Embrace the power of technology in healthcare with NeST Digital! "
    },
    {
      id:5,
      Title:"Insurance",
      Image:"../../../assets/insurance.jpg",
      description:"Leveraging our rich technical & domain expertise and competitive cost advantages, NeST works with Insurance solution platform providers and technology companies.We deliver Digital solutions, Product implementation, development, maintenance, migration and sustenance services relating to Core Insurance Administration products, applications, compliance, automated back-office operations and enhanced customer experience. "
    },
    {
      id:6,
      Title:"Mobility",
      Image:"../../../assets/mobility.jpg",
      description:"Providing better solutions for overcoming the challenges of the technology curve, competition and increasing customer expectations.Capitalizing on the prowess of electronics to upgrade various systems used in vehicles to communicate, monitor, control, navigate and entertain."
    },
    {
      id:7,
      Title:"Industrial",
      Image:"../../../assets/industrial.png",
      description:"Our three decades of presence in the Manufacturing & Energy segment and the acquired domain knowledge form the foundation of our offerings to our world-leading customers.Our knowledge of plant/equipment operational challenges (including OT and IT layer) and expertise in digital technologies is a unique combination, helping us to be a the most valued partner to our customers. We operate in Hi-Tech Factory Automation, Building Automation, Power & Smart Grid, O&G, Water and Equipment & Tools sub-verticals. "
    },
    {
      id:8,
      Title:"Locomotive",
      Image:"../../../assets/locomotive.jpg",
      description:"At NeST Digital, we are committed to delivering high-quality solutions that drive innovation in the locomotive sector.Our competencies in infotainment and displays, rolling stock body control units, and rolling stock power electronics enable us to meet the evolving needs of the industry, providing our clients with state-of-the-art technologies that elevate their locomotive systems to new heights."

 
    }
  ];

}
