var locationSearch = new autoComplete({
            selector: '#advanced-demo',
            minChars: 1,
            source: function(term, suggest){
                term = term.toLowerCase();
                var choices = [['St. Mary\'s Hall'], ['Financial Aid'], ['Registrar'], ['Business Office'], ['Public Safety'], ['Cafeteria'], ['The Carl and Celia Berta Gellert Library'], ['Library Lawn'], ['Walter Gleason Gym'], ['Campus Center'], ['Academic Success Center'], ['Admissions'], ['International Student Office'], ['Student Life & Leadership Office'], ['The Quad'], ['Writing Center'], ['Cunningham Chapel Annex'], ['Center for Spirituality'], ['Julie Billiart Hall'], ['Dean of Students/Student Affairs'], ['Career Services'], ['St. Joseph Hall'], ['Housing'], ['Carroll Apartments'],['Kane Apartments'], ['Wilkie Apartments'], ['Koret Athletic Field'], ['Toso Residences'], ['Human Resources'], ['Administration'], ['New Hall'], ['Counseling and Health Services'], ['Taube Center'], ['NDNU Theatre'], ['Ralston Hall'], ['Wiegand Gallery'], ['Madison Art Center'], ['Cuvilly Hall'], ['Bookstore'], ['Gavin Hall'],['Mailing Center'],['Interfaith Prayer Space'],['Campanile'],['Province Center'],['Ralston Hall Annex']];
                var suggestions = [];
                for (i=0;i<choices.length;i++)
                    if (~(choices[i][0]+' '+choices[i][1]).toLowerCase().indexOf(term)) suggestions.push(choices[i]);
                suggest(suggestions);
            },
            renderItem: function (item, search){
                search = search.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&amp;');
                var re = new RegExp("(" + search.split(' ').join('|') + ")", "gi");
                return '<div class="autocomplete-suggestion" data-langname="'+item[0]+'" data-lang="'+item[1]+'" data-  val="'+search+'">'+item[0].replace(re, "<b>$1</b>")+'</div>';
            },
            onSelect: function(e, term, item){
                console.log('Item "'+item.getAttribute('data-langname')+' ('+item.getAttribute('data-lang')+')" selected by '+  (e.type == 'keydown' ? 'pressing enter' : 'mouse click')+'.');
                document.getElementById('advanced-demo').value = item.getAttribute('data-langname');
            }
        });
