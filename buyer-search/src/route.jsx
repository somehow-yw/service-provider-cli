/**
 * Created by Doden on 2017.03.03
 */

// import {Router, hashHistory} from 'react-router';
let {Router, hashHistory} = ReactRouter;

class Route extends React.Component {
    constructor(props) {
        super(props);
        this.rootRoute = {};
    }

    componentWillMount(){
        this.rootRoute = {
            path: '/',
            component: require('./pages/entry.jsx').default,
            childRoutes:[
                {
                    path: '/buyer/buy',
                    component: require('./pages/buy/search/search.jsx').default,
                    childRoutes:[
                        {
                            path: 'result',
                            component: require('./pages/buy/result/goodsPage.jsx').default,
                            childRoutes:[
                                {
                                    path: 'goodsInfo',
                                    component: require('./pages/goodsInfo/goodsInfo.jsx').default
                                },
                                {
                                    path: 'searchHistory',
                                    component: require('./pages/buy/result/searchHistory.jsx').default
                                }
                            ]
                        },
                        {
                            path: 'searchHistory',
                            component: require('./pages/buy/result/searchHistory.jsx').default
                        }
                    ]
                },
                {
                    path: '/buyer/collection',
                    component: require('./pages/collection/collection.jsx').default
                },
                {
                    path: '/buyer/goodsInfo',
                    component: require('./pages/goodsInfo/goodsInfo.jsx').default
                }
            ]
        };
    }

    render() {
        return(<Router history={hashHistory} routes={this.rootRoute} />);
    }
}

export default Route;