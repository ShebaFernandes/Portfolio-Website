import './style.scss';

const PageHeaderContent = ({ headerText, icon }) => {
    return (
        <div className="page-header-content">
            <h2 className="header-text">{headerText}</h2>
            <span className="header-icon">{icon}</span>
        </div>
    );
};

export default PageHeaderContent;
