import './App.css';
import React, {Component, lazy, Suspense} from "react";
import {Router, Route, Switch, Redirect} from "react-router-dom";
import history from "./history";
import ScrollTop from 'services/ScrollTop'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import BookRepository from "./repo/BookRepository";
import CountryRepository from "./repo/CountryRepository";
import AuthorRepository from "./repo/AuthorRepository";
import CategoryRepository from "./repo/CategoryRepository";
import Layout from "./components/Layout";
import {PrivateRoute} from "./services/PrivateRoute";

const Home = lazy(() => import("./components/Home"));
const AuthorForm = lazy(() => import("./components/AuthorForm"));
const AuthorProfile = lazy(() => import("./components/AuthorProfile"));
const BookForm = lazy(() => import("./components/BookForm"));
const Books = lazy(() => import("./components/Books"));
const SignInForm = lazy(() => import("./components/SignInForm"));
const ShelfComponent = lazy(() => import("./components/ShelfComponent"));
const AuthorShelfComponent = lazy(() => import("./components/AuthorShelfComponent"));
const PostsComponent = lazy(() => import("./components/PostsComponent"));
const Carousel = lazy(() => import("./components/Carousel"));

let items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const routes = [
    {path: "/", exact: true, component: Home},
    {path: "/author_form", exact: true, component: AuthorForm},
    {path: "/book_form", exact: true, component: BookForm},
    {path: "/books", exact: true, component: Books},
    {path: "/sign_in", exact: true, component: SignInForm},
    {path: "/shelf", exact: true, component: ShelfComponent},
    {path: "/author/shelf", exact: true, component: AuthorShelfComponent},
    {path: "/posts", exact: true, component: PostsComponent},
];


const images = [
    'https://picsum.photos/400/300/?image=926',
    'https://picsum.photos/400/300/?image=925',
    'https://picsum.photos/400/300/?image=924',
    'https://picsum.photos/400/300/?image=923',
    'https://picsum.photos/400/300/?image=922',
    'https://picsum.photos/400/300/?image=921',
];

/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
let hasOwn = {}.hasOwnProperty;

const classNames = (...args) => {
    let classes = [];

    for (let i = 0; i < args.length; i++) {
        let arg = args[i];
        if (!arg) continue;

        let argType = typeof arg;

        if (argType === 'string' || argType === 'number') {
            classes.push(arg);
        } else if (Array.isArray(arg) && arg.length) {
            let inner = classNames.apply(null, arg);
            if (inner) {
                classes.push(inner);
            }
        } else if (argType === 'object') {
            for (let key in arg) {
                if (Object.hasOwnProperty.call(arg, key) && arg[key]) {
                    classes.push(key);
                }
            }
        }
    }

    return classes.join(' ');
}

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: [],
            authors: [],
            countries: [],
            categories: [],
            selectedBook: {}
        }
    }

    componentDidMount() {
        this.loadBooks();
        this.loadCounties();
        // this.loadAuthors();
    }

    loadBooks = () => {
        BookRepository.fetchBooksTop()
            .then((data) => {
                this.setState({
                    books: data.data
                })
            });
    }

    loadAuthors = () => {
        BookRepository.fetchAuthors()
            .then((data) => {
                this.setState({
                    authors: data.data
                })
            });
    }

    addBook = (name, category, authorId, availableCopies) => {
        BookRepository.createBook(name, category, authorId, availableCopies)
            .then(() => {
                this.loadBooks();
            });
    }

    createAuthor = (firstName, lastName, slogan, username, password, email, phoneNumber, address, city, countryId) => {
        AuthorRepository.createAuthor(firstName, lastName, slogan, username, password, email, phoneNumber, address, city, countryId)
            .then((r) => {
                if (r.status === 201) {
                    return <Redirect to={"/author_profile"}/>;
                }
                window.alert("Someting Went Wrong!")
                return <Redirect to={"/author_form"}/>
            });
    }

    deleteBook = (id) => {
        BookRepository.deleteBook(id)
            .then(() => {
                this.loadBooks();
            });
    }

    editBook = (id, name, category, authorId, availableCopies) => {
        BookRepository.editBook(id, name, category, authorId, availableCopies)
            .then(() => {
                this.loadBooks();
            });
    }

    getBook = (id) => {
        BookRepository.getBookById(id)
            .then((data) => {
                this.setState({
                    selectedBook: data.data
                })
            })
    }

    markAsTaken = (id) => {
        BookRepository.markAsTaken(id)
            .then(() => {
                this.loadBooks();
            });
    }

    loadCounties() {
        CountryRepository.fetchCountries().then((data) => {
            this.setState({
                countries: data.data
            })
        });
    }

    //doim pastda render bolsin
    render() {
        const { auth } = this.props;
        const { isAuthenticated, user} = auth;


        return (
            <>
                <Router {...{history}}>
                <Layout>
                    <Suspense fallback={<div>Loading</div>}>
                        <Switch>
                            {routes.map((route, key) => {
                                return (
                                    <Route
                                        key={key}
                                        path={route.path}
                                        component={ScrollTop(route.component)}
                                        exact
                                    />
                                )
                            })
                            }
                            {/*<Route*/}
                            {/*    key={'carousel'}*/}
                            {/*    path={'/carousel'}*/}
                            {/*    exact={true}*/}
                            {/*><Carousel images={images}/>*/}
                            {/*    <p className="flavor-text">React carousel</p>*/}
                            {/*</Route>*/}
                            <PrivateRoute
                                path='/author_profile'
                                exact={true}
                                component={AuthorProfile}
                            />

                        </Switch>
                    </Suspense>
                </Layout>
                    </Router>
                {/*<div>*/}
                {/*    <div>*/}
                {/*        <Navbar/>*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <Switch>*/}
                {/*            /!*<Route exact={true} path="/">*!/*/}
                {/*            /!*    <Home/>*!/*/}
                {/*            /!*    <BeginSection/>*!/*/}
                {/*            /!*    <Libraries/>*!/*/}
                {/*            /!*    <Books/>*!/*/}
                {/*            /!*    <BottomContainer/>*!/*/}
                {/*            /!*</Route>*!/*/}
                {/*            /!*<Route exact={true}  path="/sign_up">*!/*/}

                {/*            /!*</Route>*!/*/}
                {/*            /!*<Route exact={true} path={"/author_form"}>*!/*/}
                {/*            /!*    <AuthorForm countries={this.state.countries}/>*!/*/}
                {/*            /!*</Route>*!/*/}
                {/*            /!*<Route exact={true} path={"/author_profile"}>*!/*/}
                {/*            /!*    <AuthorProfile/>*!/*/}
                {/*            /!*</Route>*!/*/}
                {/*            /!*<Route exact={true} path={"/books"}>*!/*/}
                {/*            /!*    <Books/>*!/*/}
                {/*            /!*</Route>*!/*/}
                {/*            /!*<Route exact={true} path={"/posts"}>*!/*/}

                {/*            /!*</Route>*!/*/}
                {/*            /!*<Route exact={true} path={"/book_form"}>*!/*/}
                {/*            /!*    <BookForm categories={this.state.categories}/>*!/*/}
                {/*            /!*</Route>*!/*/}
                {/*            /!*<Route exact={true} path={"/sign_in"}>*!/*/}
                {/*            /!*    <SignInForm/>*!/*/}
                {/*            /!*</Route>*!/*/}
                {/*        </Switch>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </>
        );
    }
}



const mapStateToProps = state => ({
    auth: state.auth
});


const mapDispatchToProps = (dispatch) => bindActionCreators(
    {},
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(App);