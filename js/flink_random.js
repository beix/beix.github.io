var flink_random = { 
    saveData: (e,t)=>{
        localStorage.setItem(e, JSON.stringify({
            time: Date.now(),
            data: t
        }))
    },
    loadData: (e,t)=>{
        let n = JSON.parse(localStorage.getItem(e));
        if (n) {
            let e = Date.now() - n.time;
            if (e < 60 * t * 1e3 && e > -1)
                return n.data
        }
        return 0
    },

    randomLink: ()=>{
        let e = flink_random.loadData("links", 30);
        if (e) {
            let t = document.querySelectorAll(".ft-img-group .img-group-item a");
            let c = document.querySelectorAll(".ft-img-group .img-group-item img");
			
            if (!t.length||!c.length)
                return;
			
            for (let n = 0; n < 7; n++) {
				let o = parseInt(Math.random() * e.length);
				// let linkData = e[o];
				// let footerItem = t[n];
				// let linkElement = footerItem.querySelector('a');
				// let imgElement = footerItem.querySelector('img');
				t[n].href = e[o].link;
				t[n].title = e[o].name;
				c[n].src = e[o].avatar;								
                // let o = parseInt(Math.random() * e.length);
				// t[n].href = e[o].link,
				// t[n].title = e[o].name,
                // t[n].src = e[o].avatar, // changed to display link instead of name        
                e.splice(o, 1)
            }
        } else{
            fetch("/link.json").then((e=>e.json())).then((e=>{
                flink_random.saveData("links", e.link_list),
                flink_random.randomLink()
            }
            ))
        }
	
    },
}

flink_random.randomLink();