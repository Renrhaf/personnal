import React ,{ Component }from "react";
import { FiSmartphone , FiTrendingUp , FiMonitor, FiHardDrive, FiLifeBuoy, FiSearch } from "react-icons/fi";

const ServiceList = [
    {
        icon: <FiMonitor />,
        title: 'Création de site web',
        description: 'Conception du site de vos rêves, selon votre budget et vos besoins.'
    },
    {
        icon: <FiSmartphone />,
        title: 'Développement applicatif',
        description: 'Analyse et développement d\'applications web, ou mobiles (pour Android et iOS).'
    },
    {
        icon: <FiHardDrive />,
        title: 'Hébergement',
        description: 'Définition et mise en place de l\'environnement adapté pour le fonctionnement de votre site et/ou application.'
    },
    {
        icon: <FiSearch />,
        title: 'Audit technique',
        description: 'Vous vous questionnez sur la qualité du code de votre site ? Je vous propose une étude selon votre besoin : performance, sécurité, accessibilité, etc. '
    },
    {
        icon: <FiTrendingUp />,
        title: 'Référencement & suivi',
        description: 'Mise en place d\'une stratégie pour améliorer le référence de votre site et suivi des métriques des campagnes menées.'
    },
    {
        icon: <FiLifeBuoy />,
        title: 'Formation & mentorat',
        description: 'Partage de mon expertise auprès de vos collaborateurs ou de vous-même au travers de formations et/ou de mentorat.'
    }
]


class ServiceThree extends Component{
    render(){
        const {column } = this.props;
        const ServiceContent = ServiceList.slice(0 , this.props.item);

        return(
            <React.Fragment>
                <div className="row">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                            <a href="/service-details">
                                <div className="service service__style--2">
                                    <div className="icon">
                                        {val.icon}
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                        <p>{val.description}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceThree;
