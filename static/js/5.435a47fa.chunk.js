(this["webpackJsonpmuseable-react"]=this["webpackJsonpmuseable-react"]||[]).push([[5],{344:function(e,t,a){"use strict";a.r(t);var r=a(211),s=a(212),n=a(216),l=a(213),c=a(215),i=a(0),o=a.n(i),m=a(17),u=a(343),p=a(341),h=a(32),b=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=o.a.createElement("div",{className:"artist-info-card"},o.a.createElement("div",{className:"artist-info-card-header"},o.a.createElement("h1",null,this.props.artist.artist.name)),o.a.createElement("div",{className:"artist-info-card-subtitle"},o.a.createElement("p",{className:"subtitle-item"},"Total Listeners:  ",this.props.artist.artist.stats.listeners," Play Count: ",this.props.artist.artist.stats.playcount)),o.a.createElement("div",{className:"artist-info-card-bio"},o.a.createElement("h3",{className:"bio-title"},"About:"),o.a.createElement("p",{className:"bio"},this.props.artist.artist.bio.summary)));return o.a.createElement("div",null,e)}}]),a}(i.Component),d=Object(m.c)((function(e){return{artist:e.artist}}))(b),v=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.props.searchTopTracks(this.props.artist),this.props.searchTopAlbums(this.props.artist),console.log(this.props.topAlbums.topalbums.album[0].name)}},{key:"listItem",value:function(){var e=this.props.topTracks.toptracks.track.slice(0,20).map((function(e){return o.a.createElement("li",{key:e.name},o.a.createElement("div",{className:"inline"},o.a.createElement("h5",{className:"inline-text"},e.name),o.a.createElement("p",{className:"inline-text"},e.playcount),o.a.createElement("p",{className:"inline-text"},e.listeners),o.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},"Check out The Song!")))})),t=this.props.topAlbums.topalbums.album.slice(0,10).map((function(e){return o.a.createElement("li",{key:e.name},o.a.createElement("div",{className:"inline"},o.a.createElement("h5",{className:"inline-text"},e.name),o.a.createElement("p",{className:"inline-text"},e.playcount),o.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},"Check Out The Album!")))}));switch(this.props.queryType){case"TopAlbums":return t;case"TopTracks":default:return e}}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,this.listItem())}}]),a}(i.Component),E=Object(m.c)((function(e){return{topTracks:e.artist.topTracks,topAlbums:e.artist.topAlbums}}),{searchTopTracks:h.f,searchTopAlbums:h.e})(v);var f=function(e){return o.a.createElement("ul",{className:"list"},o.a.createElement(E,{queryType:e.type,artist:e.artist}))},k=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).handleChange=function(e,t){var a=t.value;s.setState({value:a})},s.state={value:"TopTracks"},s.handleChange=s.handleChange.bind(Object(n.a)(s)),s}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.artist;this.props.searchArtistInfo(e)}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(d,null),o.a.createElement("div",{className:"item-list"},o.a.createElement("div",{className:"list-select"},o.a.createElement(u.a,null,o.a.createElement(u.a.Field,null,o.a.createElement(p.a,{label:"Top Tracks",name:"radioGroup",value:"TopTracks",checked:"TopTracks"===this.state.value,onChange:this.handleChange}),o.a.createElement(p.a,{label:"Top Albums",name:"radioGroup",value:"TopAlbums",checked:"TopAlbums"===this.state.value,onChange:this.handleChange}))),o.a.createElement("div",{className:"top-items-container"},o.a.createElement(f,{type:this.state.value,artist:this.props.match.params.artist})))))}}]),a}(i.Component);t.default=Object(m.c)(null,{searchArtistInfo:h.d})(k)}}]);
//# sourceMappingURL=5.435a47fa.chunk.js.map