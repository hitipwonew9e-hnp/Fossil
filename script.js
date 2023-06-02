
  let zminna1 = {
    data() {
        return {
          imgArr1: [
            { name: 'Carlie Three-Hand Black Eco Leather Watch 1.jpg', title: 'фото 1' },
            { name: 'Carlie Three-Hand Black Eco Leather Watch 2.jpg', title: 'фото 1' },
            { name: 'Carlie Three-Hand Black Eco Leather Watch 3.jpg', title: 'фото 1' },
            { name: 'Carlie Three-Hand Black Eco Leather Watch 4.jpg', title: 'фото 1' },
            { name: 'Carlie Three-Hand Black Eco Leather Watch 5.jpg', title: 'фото 1' },
           
        ],
            i1: 0,


        }
    },
    methods: {
        next() {
          this.i1++
         if( this.i1 > this.imgArr1.length-1){
            this.i1=0
         }
        },
        prev() {
           this.i1--
            if (this.i1 < 0) {
                this.i1 = this.imgArr1.length-1;
            }
        }
    },
}
Vue.createApp(zminna1).mount('.my-slider1')


let zminna2 = {
  data() {
      return {
        imgArr2: [
          { name: 'Carlie Three-Hand Rose-Gold-Tone Stainless Steel Watch 1.jpg', title: 'фото 1' },
          { name: 'Carlie Three-Hand Rose-Gold-Tone Stainless Steel Watch 2.jpg', title: 'фото 1' },
          { name: 'Carlie Three-Hand Rose-Gold-Tone Stainless Steel Watch 3.jpg', title: 'фото 1' },
      ],
          i2: 0,


      }
  },
  methods: {
      next() {
        this.i2++
       if( this.i2 > this.imgArr2.length-1){
          this.i2=0
       }
      },
      prev() {
         this.i2--
          if (this.i2 < 0) {
              this.i2 = this.imgArr2.length-1;
          }
      }
  },
}
Vue.createApp(zminna2).mount('.my-slider2')


let zminna3 = {
    data() {
        return {
          imgArr3: [
            { name: 'FB-01 Three-Hand Black Ceramic Watch 1.jpg', title: 'фото 1' },
            { name: 'FB-01 Three-Hand Black Ceramic Watch 2.jpg', title: 'фото 1' },
            { name: 'FB-01 Three-Hand Black Ceramic Watch 3.jpg', title: 'фото 1' },
            { name: 'FB-01 Three-Hand Black Ceramic Watch 4.jpg', title: 'фото 1' },
          

        ],
            i3: 0,
  
  
        }
    },
    methods: {
        next() {
          this.i3++
         if( this.i3 > this.imgArr3.length-1){
            this.i3=0
         }
        },
        prev() {
           this.i3--
            if (this.i3 < 0) {
                this.i3 = this.imgArr3.length-1;
            }
        }
    },
}
Vue.createApp(zminna3).mount('.my-slider3')


let zminna4 = {
    data() {
        return {
          imgArr4: [
{ name: 'Heritage Automatic Gold-Tone Stainless Steel Watch 1.jpg', title: 'фото 1' },
{ name: 'Heritage Automatic Gold-Tone Stainless Steel Watch 2.jpg', title: 'фото 1' },
{ name: 'Heritage Automatic Gold-Tone Stainless Steel Watch 3.jpg', title: 'фото 1' },
{ name: 'Heritage Automatic Gold-Tone Stainless Steel Watch 4.jpg', title: 'фото 1' },
{ name: 'Heritage Automatic Gold-Tone Stainless Steel Watch 5.jpg', title: 'фото 1' },
{ name: 'Heritage Automatic Gold-Tone Stainless Steel Watch 6.jpg', title: 'фото 1' },
          

        ],
            i4: 0,
  
  
        }
    },
    methods: {
        next() {
          this.i4++
         if( this.i4 > this.imgArr4.length-1){
            this.i4=0
         }
        },
        prev() {
           this.i4--
            if (this.i4 < 0) {
                this.i4 = this.imgArr4.length-1;
            }
        }
    },
}
Vue.createApp(zminna4).mount('.my-slider4')


let zminna5 = {
      data() {
          return {
            imgArr5: [
                { name: 'Inscription Automatic Gold-Tone Stainless Steel Watch 1.jpg', title: 'фото 1' },
                { name: 'Inscription Automatic Gold-Tone Stainless Steel Watch 2.jpg', title: 'фото 1' },
                { name: 'Inscription Automatic Gold-Tone Stainless Steel Watch 3.jpg', title: 'фото 1' },
                { name: 'Inscription Automatic Gold-Tone Stainless Steel Watch 4.jpg', title: 'фото 1' },
                
          ],
              i5: 0,
    
    
          }
      },
      methods: {
          next() {
            this.i5++
           if( this.i5 > this.imgArr5.length-1){
              this.i5=0
           }
          },
          prev() {
             this.i5--
              if (this.i5 < 0) {
                  this.i5 = this.imgArr5.length-1;
              }
          }
      },
}
Vue.createApp(zminna5).mount('.my-slider5')
  
  
let zminna6 = {
      data() {
          return {
            imgArr6: [
              { name: 'Neutra Chronograph Stainless Steel Watch 1.jpg', title: 'фото 1' },
              { name: 'Neutra Chronograph Stainless Steel Watch 2.jpg', title: 'фото 1' },
              { name: 'Neutra Chronograph Stainless Steel Watch 3.jpg', title: 'фото 1' },
              { name: 'Neutra Chronograph Stainless Steel Watch 4.jpg', title: 'фото 1' },
       
          ],
              i6: 0,
    
    
          }
      },
      methods: {
          next() {
            this.i6++
           if( this.i6 > this.imgArr6.length-1){
              this.i6=0
           }
          },
          prev() {
             this.i6--
              if (this.i6 < 0) {
                  this.i6 = this.imgArr6.length-1;
              }
          }
      },
}
Vue.createApp(zminna6).mount('.my-slider6')

let zminna7 = {
        data() {
            return {
              imgArr7: [
             
                { name: 'Raquel Three-Hand Date Black Eco Leather Watch 3.jpg', title: 'фото 1' },
                { name: 'Raquel Three-Hand Date Black Eco Leather Watch 2.jpg', title: 'фото 1' },
                { name: 'Raquel Three-Hand Date Black Eco Leather Watch 1.jpg', title: 'фото 1' },
                { name: 'Raquel Three-Hand Date Black Eco Leather Watch 4.jpg', title: 'фото 1' },
            ],
                i7: 0,
      
      
            }
        },
        methods: {
            next() {
              this.i7++
             if( this.i7 > this.imgArr7.length-1){
                this.i7=0
             }
            },
            prev() {
               this.i7--
                if (this.i7 < 0) {
                    this.i7 = this.imgArr7.length-1;
                }
            }
        },
}
Vue.createApp(zminna7).mount('.my-slider7')

let zminna8 = {
    data() {
        return {
          imgArr8: [
            { name: 'Stella Gen 6 Hybrid Smartwatch Rose Gold-Tone Stainless Steel 1.jpg', title: 'фото 1' },
            { name: 'Stella Gen 6 Hybrid Smartwatch Rose Gold-Tone Stainless Steel 2.jpg', title: 'фото 1' },
            { name: 'Stella Gen 6 Hybrid Smartwatch Rose Gold-Tone Stainless Steel 3.jpg', title: 'фото 1' },
            { name: 'Stella Gen 6 Hybrid Smartwatch Rose Gold-Tone Stainless Steel 4.jpg', title: 'фото 1' },
            { name: 'Stella Gen 6 Hybrid Smartwatch Rose Gold-Tone Stainless Steel 5.jpg', title: 'фото 1' },
            { name: 'Stella Gen 6 Hybrid Smartwatch Rose Gold-Tone Stainless Steel 6.jpg', title: 'фото 1' },
           
        ],
            i8: 0,
  
  
        }
    },
    methods: {
        next() {
          this.i8++
         if( this.i8 > this.imgArr8.length-1){
            this.i8=0
         }
        },
        prev() {
           this.i8--
            if (this.i8 < 0) {
                this.i8 = this.imgArr8.length-1;
            }
        }
    },
}
Vue.createApp(zminna8).mount('.my-slider8')


$(window).ready(function(){
    $(".boton").wrapInner('<div class=botontext></div>');
        
        $(".botontext").clone().appendTo( $(".boton") );
        
        $(".boton").append('<span class="twist"></span><span class="twist"></span><span class="twist"></span><span class="twist"></span>');
        
        $(".twist").css("width", "25%").css("width", "+=3px");
    });

    function myFunction() {
        var x = document.getElementById("container-md");
        if (x.style.display === "block")  {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      } 


      function myFunction2() {
        var button = document.getElementById("show-more-btn");
      
        if (button.innerText === "Показати більше") {
          button.innerText = "Приховати";
        } else {
          button.innerText = "Показати більше";
        }
      }





