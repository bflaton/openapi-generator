(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{280:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return c}));var n=a(1),i=a(9),o=(a(0),a(298)),r={id:"contributing",title:"Guidelines For Contributing",sidebar_label:"Guidelines"},s={id:"contributing",title:"Guidelines For Contributing",description:"## Before submitting an issue",source:"@site/../docs/contributing.md",permalink:"/docs/contributing",editUrl:"https://github.com/OpenAPITools/openapi-generator/edit/master/website/../docs/contributing.md",lastUpdatedBy:"Jim Schubert",lastUpdatedAt:1582495177,sidebar_label:"Guidelines",sidebar:"docs",previous:{title:"Workflow Integrations",permalink:"/docs/integrations"},next:{title:"Code of Conduct",permalink:"/docs/code-of-conduct"}},l=[{value:"Before submitting an issue",id:"before-submitting-an-issue",children:[]},{value:"Before submitting a PR",id:"before-submitting-a-pr",children:[]},{value:"How to contribute",id:"how-to-contribute",children:[{value:"git",id:"git",children:[]},{value:"Branches",id:"branches",children:[]},{value:"Code generators",id:"code-generators",children:[]},{value:"Templates",id:"templates",children:[]},{value:"Style guide",id:"style-guide",children:[]},{value:"Testing",id:"testing",children:[]},{value:"Tips",id:"tips",children:[]}]}],b={rightToc:l};function c(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"before-submitting-an-issue"},"Before submitting an issue"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If you're not using the latest master to generate API clients or server stubs, please give it another try by pulling the latest master as the issue may have already been addressed. Ref: ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/openapitools/openapi-generator#getting-started"}),"Getting Started")),Object(o.b)("li",{parentName:"ul"},"Search the ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/openapitools/openapi-generator/issues"}),"open issue")," and ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/openapitools/openapi-generator/issues?q=is%3Aissue+is%3Aclosed"}),"closed issue")," to ensure no one else has reported something similar before."),Object(o.b)("li",{parentName:"ul"},"File an ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/openapitools/openapi-generator/issues/new"}),"issue ticket")," by providing all the required information."),Object(o.b)("li",{parentName:"ul"},"Test with the latest master by building the JAR locally to see if the issue has already been addressed."),Object(o.b)("li",{parentName:"ul"},'You can also make a suggestion or ask a question by opening an "issue".')),Object(o.b)("h2",{id:"before-submitting-a-pr"},"Before submitting a PR"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Search the ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/openapitools/openapi-generator/issues"}),"open issue")," to ensure no one else has reported something similar and no one is actively working on similar proposed change."),Object(o.b)("li",{parentName:"ul"},"If no one has suggested something similar, open an ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/openapitools/openapi-generator/issues"}),'"issue"')," with your suggestion to gather feedback from the community."),Object(o.b)("li",{parentName:"ul"},"If you're adding a new option to a generator, please consider using the ",Object(o.b)("inlineCode",{parentName:"li"},"-t")," option with customized templates instead or start a discussion first by opening an issue as we want to avoid adding too many options to the generator."),Object(o.b)("li",{parentName:"ul"},"It's recommended to ",Object(o.b)("strong",{parentName:"li"},"create a new git branch")," for the change so that the merge commit message looks nicer in the commit history.")),Object(o.b)("h2",{id:"how-to-contribute"},"How to contribute"),Object(o.b)("h3",{id:"git"},"git"),Object(o.b)("p",null,"If you're new to git, you may find the following FAQs useful:"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/openapitools/openapi-generator/wiki/FAQ#git"}),"https://github.com/openapitools/openapi-generator/wiki/FAQ#git")),Object(o.b)("h3",{id:"branches"},"Branches"),Object(o.b)("p",null,"Please file the pull request against the correct branch, e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"master")," for non-breaking changes. See the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/OpenAPITools/openapi-generator/wiki/Git-Branches"}),"Git Branches")," page for more information."),Object(o.b)("h3",{id:"code-generators"},"Code generators"),Object(o.b)("p",null,"All the code generators can be found in ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/openapitools/openapi-generator/tree/master/modules/openapi-generator/src/main/java/org/openapitools/codegen/languages"}),"modules/openapi-generator/src/main/java/org/openapitools/codegen/languages")),Object(o.b)("p",null,"If you want to add a new generator, follow the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://openapi-generator.tech/docs/new-generator"}),"new-generator")," guide. "),Object(o.b)("h3",{id:"templates"},"Templates"),Object(o.b)("p",null,"All the templates (",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://mustache.github.io/"}),"mustache"),") can be found in ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/openapitools/openapi-generator/tree/master/modules/openapi-generator/src/main/resources"}),"modules/openapi-generator/src/main/resources"),"."),Object(o.b)("p",null,"For a list of variables available in the template, please refer to this ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/openapitools/openapi-generator/wiki/Mustache-Template-Variables"}),"page")),Object(o.b)("h3",{id:"style-guide"},"Style guide"),Object(o.b)("p",null,"Code change should conform to the programming style guide of the respective languages:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Ada: ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://en.wikibooks.org/wiki/Ada_Style_Guide/Source_Code_Presentation"}),"https://en.wikibooks.org/wiki/Ada_Style_Guide/Source_Code_Presentation")),Object(o.b)("li",{parentName:"ul"},"Android: ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://source.android.com/source/code-style.html"}),"https://source.android.com/source/code-style.html")),Object(o.b)("li",{parentName:"ul"},"Bash: ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/bahamas10/bash-style-guide"}),"https://github.com/bahamas10/bash-style-guide")),Object(o.b)("li",{parentName:"ul"},"C#: ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://msdn.microsoft.com/en-us/library/vstudio/ff926074.aspx"}),"https://msdn.microsoft.com/en-us/library/vstudio/ff926074.aspx")),Object(o.b)("li",{parentName:"ul"},"C++: ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://google.github.io/styleguide/cppguide.html"}),"https://google.github.io/styleguide/cppguide.html")),Object(o.b)("li",{parentName:"ul"},"C++ (Tizen): ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://wiki.tizen.org/Native_Platform_Coding_Idiom_and_Style_Guide#C.2B.2B_Coding_Style"}),"https://wiki.tizen.org/Native_Platform_Coding_Idiom_and_Style_Guide#C.2B.2B_Coding_Style")),Object(o.b)("li",{parentName:"ul"},"Clojure: ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/bbatsov/clojure-style-guide"}),"https://github.com/bbatsov/clojure-style-guide")),Object(o.b)("li",{parentName:"ul"},"Dart: ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.dartlang.org/guides/language/effective-dart/style"}),"https://www.dartlang.org/guides/language/effective-dart/style")),Object(o.b)("li",{parentName:"ul"},"Elixir: ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/christopheradams/elixir_style_guide"}),"https://github.com/christopheradams/elixir_style_guide")),Object(o.b)("li",{parentName:"ul"},"Eiffel: ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.eiffel.org/doc/eiffel/Coding%20Standards"}),"https://www.eiffel.org/doc/eiffel/Coding%20Standards")),Object(o.b)("li",{parentName:"ul"},"Erlang: ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/inaka/erlang_guidelines"}),"https://github.com/inaka/erlang_guidelines")),Object(o.b)("li",{parentName:"ul"},"Haskell: ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/tibbe/haskell-style-guide/blob/master/haskell-style.md"}),"https://github.com/tibbe/haskell-style-guide/blob/master/haskell-style.md")),Object(o.b)("li",{parentName:"ul"},"Java: ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://google.github.io/styleguide/javaguide.html"}),"https://google.github.io/styleguide/javaguide.html")),Object(o.b)("li",{parentName:"ul"},"JavaScript: ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/airbnb/javascript/"}),"https://github.com/airbnb/javascript/")),Object(o.b)("li",{parentName:"ul"},"Kotlin: ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://kotlinlang.org/docs/reference/coding-conventions.html"}),"https://kotlinlang.org/docs/reference/coding-conventions.html")),Object(o.b)("li",{parentName:"ul"},"Groovy: ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"http://groovy-lang.org/style-guide.html"}),"http://groovy-lang.org/style-guide.html")),Object(o.b)("li",{parentName:"ul"},"Go: ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/golang/go/wiki/CodeReviewComments"}),"https://github.com/golang/go/wiki/CodeReviewComments")),Object(o.b)("li",{parentName:"ul"},"ObjC: ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/NYTimes/objective-c-style-guide"}),"https://github.com/NYTimes/objective-c-style-guide")),Object(o.b)("li",{parentName:"ul"},"Perl: ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"http://perldoc.perl.org/perlstyle.html"}),"http://perldoc.perl.org/perlstyle.html")),Object(o.b)("li",{parentName:"ul"},"PHP: ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-12-extended-coding-style-guide.md"}),"https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-12-extended-coding-style-guide.md")),Object(o.b)("li",{parentName:"ul"},"PowerShell: ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://msdn.microsoft.com/en-us/library/dd878270(v=vs.85).aspx"}),"https://msdn.microsoft.com/en-us/library/dd878270(v=vs.85).aspx")),Object(o.b)("li",{parentName:"ul"},"Python: ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.python.org/dev/peps/pep-0008/"}),"https://www.python.org/dev/peps/pep-0008/")),Object(o.b)("li",{parentName:"ul"},"R: ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://google.github.io/styleguide/Rguide.xml"}),"https://google.github.io/styleguide/Rguide.xml")),Object(o.b)("li",{parentName:"ul"},"Ruby: ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/bbatsov/ruby-style-guide"}),"https://github.com/bbatsov/ruby-style-guide")),Object(o.b)("li",{parentName:"ul"},"Rust: ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/rust-lang-nursery/fmt-rfcs/blob/master/guide/guide.md"}),"https://github.com/rust-lang-nursery/fmt-rfcs/blob/master/guide/guide.md")," (the default ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/rust-lang-nursery/rustfmt"}),"rustfmt")," configuration)"),Object(o.b)("li",{parentName:"ul"},"Scala: ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"http://docs.scala-lang.org/style/"}),"http://docs.scala-lang.org/style/")),Object(o.b)("li",{parentName:"ul"},"Swift: ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.apple.com/library/prerelease/ios/documentation/Swift/Conceptual/Swift_Programming_Language/TheBasics.html"}),"Apple Developer")),Object(o.b)("li",{parentName:"ul"},"TypeScript: ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines"}),"https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines"))),Object(o.b)("p",null,"For other languages, feel free to suggest."),Object(o.b)("p",null,"You may find the current code base not 100% conform to the coding style and we welcome contributions to fix those."),Object(o.b)("p",null,"For ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md#vendorExtensions"}),"Vendor Extensions"),", please follow the naming convention below:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"For general vendor extension, use lower case and hyphen. e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"x-is-unique"),", ",Object(o.b)("inlineCode",{parentName:"li"},"x-content-type")),Object(o.b)("li",{parentName:"ul"},"For language-specified vendor extension, put it in the form of ",Object(o.b)("inlineCode",{parentName:"li"},"x-{lang}-{extension-name}"),". e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"x-objc-operation-id"),", ",Object(o.b)("inlineCode",{parentName:"li"},"x-java-feign-retry-limit")),Object(o.b)("li",{parentName:"ul"},"For a list of existing vendor extensions in use, please refer to ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/openapitools/openapi-generator/wiki/Vendor-Extensions"}),"https://github.com/openapitools/openapi-generator/wiki/Vendor-Extensions"),". If you've added new vendor extensions as part of your PR, please update the wiki page.")),Object(o.b)("h3",{id:"testing"},"Testing"),Object(o.b)("p",null,"To add test cases (optional) covering the change in the code generator, please refer to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/openapitools/openapi-generator/tree/master/modules/openapi-generator/src/test/java/org/openapitools/codegen"}),"modules/openapi-generator/src/test/java/org/openapitools/codegen")),Object(o.b)("p",null,"To test the templates, please perform the following:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Update the Petstore sample by running the shell scripts under ",Object(o.b)("inlineCode",{parentName:"li"},"bin")," and ",Object(o.b)("inlineCode",{parentName:"li"},"bin/openapi3")," folder. For example, run ",Object(o.b)("inlineCode",{parentName:"li"},"./bin/python-petstore.sh")," and ",Object(o.b)("inlineCode",{parentName:"li"},"./bin/openapi3/python-petstore.sh")," to update the Python PetStore API client under ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/openapitools/openapi-generator/tree/master/samples/client/petstore/python"}),Object(o.b)("inlineCode",{parentName:"a"},"samples/client/petstore/python"))," and ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/openapitools/openapi-generator/tree/master/samples/openapi3/client/petstore/python"}),Object(o.b)("inlineCode",{parentName:"a"},"samples/openapi3/client/petstore/python")),". For Windows, the batch files can be found under ",Object(o.b)("inlineCode",{parentName:"li"},"bin\\windows")," folder. (If you find that there are new files generated or unexpected changes as a result of the update, that's not unusual as the test cases are added to the OpenAPI spec from time to time. If you've questions or concerns, please open a ticket to start a discussion)"),Object(o.b)("li",{parentName:"ul"},"Run the tests in the sample folder using maven ",Object(o.b)("inlineCode",{parentName:"li"},"mvn integration-test -rf :<artifactId>"),", e.g. open a shell in ",Object(o.b)("inlineCode",{parentName:"li"},"samples/client/petstore/python"),", run ",Object(o.b)("inlineCode",{parentName:"li"},"mvn integration-test -rf :PythonPetstoreClientTests"),". The artifactId of the project can be found in the pom.xml file. (some languages may not contain unit testing for Petstore and we're looking for contribution from the community to implement those tests)"),Object(o.b)("li",{parentName:"ul"},"Finally, git commit the updated samples files: ",Object(o.b)("inlineCode",{parentName:"li"},"git commit -a"),"\n(",Object(o.b)("inlineCode",{parentName:"li"},"git add -A")," if added files with new test cases)"),Object(o.b)("li",{parentName:"ul"},"For new test cases, please add to the ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/OpenAPITools/openapi-generator/blob/master/modules/openapi-generator/src/test/resources/2_0/petstore-with-fake-endpoints-models-for-testing.yaml"}),"Fake Petstore spec"))),Object(o.b)("p",null,"To start the CI tests, you can run ",Object(o.b)("inlineCode",{parentName:"p"},"mvn verify -Psamples")," (assuming you've all the required tools installed to run tests for different languages) or you can leverage ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://travis-ci.org"}),"http://travis-ci.org")," to run the CI tests by adding your own openapi-generator repository."),Object(o.b)("h3",{id:"tips"},"Tips"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Smaller changes are easier to review"),Object(o.b)("li",{parentName:"ul"},"[Optional]"," For bug fixes, provide a OpenAPI Spec to repeat the issue so that the reviewer can use it to confirm the fix"),Object(o.b)("li",{parentName:"ul"},"Add test case(s) to cover the change"),Object(o.b)("li",{parentName:"ul"},"Document the fix in the code to make the code more readable"),Object(o.b)("li",{parentName:"ul"},"Make sure test cases passed after the change (one way is to leverage ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://travis-ci.org/"}),"https://travis-ci.org/")," to run the CI tests)"),Object(o.b)("li",{parentName:"ul"},"File a PR with meaningful title, description and commit messages."),Object(o.b)("li",{parentName:"ul"},"Recommended git settings",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"git config core.autocrlf input")," to tell Git convert CRLF to LF on commit but not the other way around "))),Object(o.b)("li",{parentName:"ul"},'To close an issue (e.g. issue 1542) automatically after a PR is merged, use keywords "fix", "close", "resolve" in the PR description, e.g. ',Object(o.b)("inlineCode",{parentName:"li"},"fix #1542"),". (Ref: ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://help.github.com/articles/closing-issues-using-keywords/"}),"closing issues using keywords"),")")))}c.isMDXComponent=!0},298:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var b=i.a.createContext({}),c=function(e){var t=i.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):s({},t,{},e)),a},p=function(e){var t=c(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=c(a),m=n,h=p["".concat(r,".").concat(m)]||p[m]||u[m]||o;return a?i.a.createElement(h,s({ref:t},b,{components:a})):i.a.createElement(h,s({ref:t},b))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var b=2;b<o;b++)r[b]=a[b];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);