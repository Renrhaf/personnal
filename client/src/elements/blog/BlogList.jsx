import React, { Component , Fragment } from "react";

class BLogList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      articles: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/articles")
      .then(res => res.json())
      .then(
          (result) => {
            this.setState({
              isLoaded: true,
              articles: result
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error: error
            });
          }
      )
  }

  render() {
    const { error, isLoaded, articles } = this.state;
    if (error) {
      return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Chargement...</div>;
    } else {
      return (
          <Fragment>
            <div className="row">
              {articles.map((value , i) => (
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                    <div className="blog blog-style--1">
                      <div className="thumbnail">
                        <a href={value.link}>
                          <img className="w-100" src={value.thumbnail} alt={value.title} />
                        </a>
                      </div>
                      <div className="content">
                        <p className="blogtype">{value.categories}</p>
                        <h4 className="title"><a href={value.link}>{value.title}</a></h4>
                        <div className="blog-btn">
                          <a className="rn-btn text-white" href={value.link}>Lire la suite</a>
                        </div>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </Fragment>
      );
    }
  }
}
export default BLogList;
