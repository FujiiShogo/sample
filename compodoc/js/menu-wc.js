'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nestjs-graphql-sample documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthzModule.html" data-type="entity-link" >AuthzModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthzModule-f8fd21acb9b45c1ca1a909151b360e14bb9de4978bfbabe395df736c7f571b52cb6e3306735c589816898cc1ef986752f36f736708725c4eb82c0ccfba016cf4"' : 'data-target="#xs-injectables-links-module-AuthzModule-f8fd21acb9b45c1ca1a909151b360e14bb9de4978bfbabe395df736c7f571b52cb6e3306735c589816898cc1ef986752f36f736708725c4eb82c0ccfba016cf4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthzModule-f8fd21acb9b45c1ca1a909151b360e14bb9de4978bfbabe395df736c7f571b52cb6e3306735c589816898cc1ef986752f36f736708725c4eb82c0ccfba016cf4"' :
                                        'id="xs-injectables-links-module-AuthzModule-f8fd21acb9b45c1ca1a909151b360e14bb9de4978bfbabe395df736c7f571b52cb6e3306735c589816898cc1ef986752f36f736708725c4eb82c0ccfba016cf4"' }>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatabaseModule.html" data-type="entity-link" >DatabaseModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-DatabaseModule-b2f0ce57fc22b4d14eb34621117eb1c8a5c94d7e5491a26742bc8a826e8c641532bbe944302b0bcf40974b642cb65c314ad016e900b1abff0a00a122d849c481"' : 'data-target="#xs-injectables-links-module-DatabaseModule-b2f0ce57fc22b4d14eb34621117eb1c8a5c94d7e5491a26742bc8a826e8c641532bbe944302b0bcf40974b642cb65c314ad016e900b1abff0a00a122d849c481"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DatabaseModule-b2f0ce57fc22b4d14eb34621117eb1c8a5c94d7e5491a26742bc8a826e8c641532bbe944302b0bcf40974b642cb65c314ad016e900b1abff0a00a122d849c481"' :
                                        'id="xs-injectables-links-module-DatabaseModule-b2f0ce57fc22b4d14eb34621117eb1c8a5c94d7e5491a26742bc8a826e8c641532bbe944302b0bcf40974b642cb65c314ad016e900b1abff0a00a122d849c481"' }>
                                        <li class="link">
                                            <a href="injectables/PostsDataInitializer.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsDataInitializer</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GqlApiModule.html" data-type="entity-link" >GqlApiModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-GqlApiModule-9f2eda9d276e9ddbaa2fa7cba0514a5f7b6d389b77ffb3cb0426b6e3d16988b7c69f5a2e7c4af76c78c0ef9019bb0a6243fb5ad0afb850daba31d112f1c45f30"' : 'data-target="#xs-injectables-links-module-GqlApiModule-9f2eda9d276e9ddbaa2fa7cba0514a5f7b6d389b77ffb3cb0426b6e3d16988b7c69f5a2e7c4af76c78c0ef9019bb0a6243fb5ad0afb850daba31d112f1c45f30"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GqlApiModule-9f2eda9d276e9ddbaa2fa7cba0514a5f7b6d389b77ffb3cb0426b6e3d16988b7c69f5a2e7c4af76c78c0ef9019bb0a6243fb5ad0afb850daba31d112f1c45f30"' :
                                        'id="xs-injectables-links-module-GqlApiModule-9f2eda9d276e9ddbaa2fa7cba0514a5f7b6d389b77ffb3cb0426b6e3d16988b7c69f5a2e7c4af76c78c0ef9019bb0a6243fb5ad0afb850daba31d112f1c45f30"' }>
                                        <li class="link">
                                            <a href="injectables/PostsLoaders.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsLoaders</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#entities-links"' :
                                'data-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/CommentEntity.html" data-type="entity-link" >CommentEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/PostEntity.html" data-type="entity-link" >PostEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/UserEntity.html" data-type="entity-link" >UserEntity</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Comment.html" data-type="entity-link" >Comment</a>
                            </li>
                            <li class="link">
                                <a href="classes/CommentInput.html" data-type="entity-link" >CommentInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/CommentRepository.html" data-type="entity-link" >CommentRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/DateScalar.html" data-type="entity-link" >DateScalar</a>
                            </li>
                            <li class="link">
                                <a href="classes/HttpExceptionFilter.html" data-type="entity-link" >HttpExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoggingPlugin.html" data-type="entity-link" >LoggingPlugin</a>
                            </li>
                            <li class="link">
                                <a href="classes/Post.html" data-type="entity-link" >Post</a>
                            </li>
                            <li class="link">
                                <a href="classes/PostInput.html" data-type="entity-link" >PostInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/PostNotFoundError.html" data-type="entity-link" >PostNotFoundError</a>
                            </li>
                            <li class="link">
                                <a href="classes/PostRepository.html" data-type="entity-link" >PostRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/PostsArgs.html" data-type="entity-link" >PostsArgs</a>
                            </li>
                            <li class="link">
                                <a href="classes/PostsResolver.html" data-type="entity-link" >PostsResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserResult.html" data-type="entity-link" >UpdateUserResult</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpperCaseDirective.html" data-type="entity-link" >UpperCaseDirective</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserNotFoundError.html" data-type="entity-link" >UserNotFoundError</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserRepository.html" data-type="entity-link" >UserRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/UsersResolver.html" data-type="entity-link" >UsersResolver</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostsLoaders.html" data-type="entity-link" >PostsLoaders</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/HasPermissionsGuard.html" data-type="entity-link" >HasPermissionsGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AuthenticatedRequest.html" data-type="entity-link" >AuthenticatedRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/JwtPayload.html" data-type="entity-link" >JwtPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserPrincipal.html" data-type="entity-link" >UserPrincipal</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});