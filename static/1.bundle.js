webpackJsonp([1],{324:function(e,t,n){var r=n(98),a=r&&r.__esModule?function(){return r["default"]}:function(){return r};Object.defineProperty(a,"a",{get:a});var i=n(99),u=i&&i.__esModule?function(){return i["default"]}:function(){return i};Object.defineProperty(u,"a",{get:u});var o=n(100),c=o&&o.__esModule?function(){return o["default"]}:function(){return o};Object.defineProperty(c,"a",{get:c});var d=n(102),l=d&&d.__esModule?function(){return d["default"]}:function(){return d};Object.defineProperty(l,"a",{get:l});var f=n(101),s=f&&f.__esModule?function(){return f["default"]}:function(){return f};Object.defineProperty(s,"a",{get:s});var b=n(3),h=b&&b.__esModule?function(){return b["default"]}:function(){return b};Object.defineProperty(h,"a",{get:h});var p=n(165),_=n(327),m=function(e){function t(e){u.a.bind()(this,t);var n=l.a.bind()(this,(t.__proto__||a.a.bind()(t)).call(this,e));return n.state={name:"Getting beer...",description:"\n      Pop-up before they sold out plaid, selvage ethical ugh banh mi. Sartorial coloring book pour-over,\n      literally deep v kale chips PBR&B. Ugh hashtag chambray, hot chicken hella synth try-hard VHS cred gentrify pinterest.\n      Blue bottle dreamcatcher selfies, gastropub retro asymmetrical mumblecore. Chia brunch fam vape banjo,\n      cardigan vice health goth ramps organic marfa. Quinoa gentrify +1 keffiyeh pitchfork, actually bushwick marfa\n      meditation narwhal subway tile. Ethical listicle leggings mixtape.\n      ",ibu:"",abv:""},n}return s.a.bind()(t,e),c.a.bind()(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://crossorigin.me/http://api.brewerydb.com/v2/beer/"+this.props.params.id+"?key=c0b90d19385d7dabee991e89c24ea711",{mode:"cors"}).then(function(e){return e.json()}).then(function(t){console.log(t.data),e.setState({name:t.data.name,description:t.data.description,ibu:t.data.ibu,abv:t.data.abv})})["catch"](function(e){console.log(e)})}},{key:"render",value:function(){return h.a.createElement("section",null,h.a.createElement(p.a,{title:this.state.name,className:"header-dark"}),h.a.createElement(_.a,{desc:this.state.description,ibu:this.state.ibu,abv:this.state.abv}))}}]),t}(h.a.Component);t["default"]=m},327:function(e,t,n){var r=n(98),a=r&&r.__esModule?function(){return r["default"]}:function(){return r};Object.defineProperty(a,"a",{get:a});var i=n(99),u=i&&i.__esModule?function(){return i["default"]}:function(){return i};Object.defineProperty(u,"a",{get:u});var o=n(100),c=o&&o.__esModule?function(){return o["default"]}:function(){return o};Object.defineProperty(c,"a",{get:c});var d=n(102),l=d&&d.__esModule?function(){return d["default"]}:function(){return d};Object.defineProperty(l,"a",{get:l});var f=n(101),s=f&&f.__esModule?function(){return f["default"]}:function(){return f};Object.defineProperty(s,"a",{get:s});var b=n(3),h=b&&b.__esModule?function(){return b["default"]}:function(){return b};Object.defineProperty(h,"a",{get:h});var p=n(329),_=p&&p.__esModule?function(){return p["default"]}:function(){return p};Object.defineProperty(_,"a",{get:_});var m=function(e){function t(e){return u.a.bind()(this,t),l.a.bind()(this,(t.__proto__||a.a.bind()(t)).call(this,e))}return s.a.bind()(t,e),c.a.bind()(t,[{key:"render",value:function(){return h.a.createElement("div",{className:"beerCard"},h.a.createElement("h3",null,"IBU: ",this.props.ibu),h.a.createElement("h3",null,"ABV: ",this.props.abv),h.a.createElement("p",null,this.props.desc))}}]),t}(h.a.Component);t.a=m},329:function(e,t){}});