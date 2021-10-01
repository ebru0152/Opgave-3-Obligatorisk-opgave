Vue.createApp({

    data() {

        return {

            Word: null,
            Word1: null,
            Word2: null,
            Message: null
        }

    },

    methods: {
        Print(Word)
        {
            if(!Word)
            {
                Word = "write a word"
            }
            this.Message = Word
        },
        
        LowerCase: function()
        {
            this.Word1 = this.Word.toLowerCase();
        },

        UpperCase: function()
        {
            this.Word2 = this.Word.toUpperCase();
        }

    }

}).mount("#app")