import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";
import $ from "https://esm.sh/jquery";



function App(){
  const obj1=[
                       {
                           v_id : "01",
                           src :"https://cdn.pixabay.com/video/2024/09/21/232561_tiny.mp4"
                        },
                         {
                           v_id : "02",
                           src : "https://cdn.pixabay.com/video/2024/09/24/233024_large.mp4"
                         },
                         {
                           v_id : "03",
                           src : "https://cdn.pixabay.com/video/2024/06/10/216058_large.mp4"
                         },
                         {
                           v_id : "04",
                           src : "https://cdn.pixabay.com/video/2024/07/27/223459_large.mp4"
                         }
                    ];
  
// function hndleclick(argl){
  
//    $('#ft2').on("click",
//                 function(argl)
//                 {
//                     // let x = document.getElementById("vid");
//                     //  x.src = argl; 
//                  $("#vid").attr( "src", `${argl}` );
//                 }
//                )
  
//   `${argl}`
// }  
  
  
  
  return (
    <>
   
        
      <div className="dVc">
          

        <div>
         <div className="grid_Scrn">       
                  <div id="img1"><a href="https://pixabay.com/illustrations/ai-generated-car-vehicle-sports-car-9046604/"  target="_blank"></a></div>
                  <div id="img2"><a /></div>
                  <div id="img3"><a /></div>
                  <div id="img4"><a /></div>
                  <br></br>
         </div>
          
           
        </div>
          
        <div>
                     <carousel id="myCarousel">
                                    <a id="left_btn" role="button" href="#myCarousel" data-slide="prev"></a>
                                    <div className="imgList">
                                      <img src="https://img.freepik.com/premium-photo/time-sunset-vintage-alarm-clock-rocks-with-beautiful-sunset-background-perfect-themes-time-nature-tranquility_1227333-2409.jpg?w=900" alt="Moment_pic_Nature" height="100px" width="300px"/>
                                      <div className="imglist">
                                        <img id="l_img2" src="https://img.freepik.com/premium-photo/objectified-abstract-portrait-made-from-random-objects_1245763-116933.jpg?w=740" alt="crdart" width="145px" height="50px"/>

                                        <img id="l_img3" src="https://img.freepik.com/free-photo/digital-art-ai-technology-background_23-2151719562.jpg?t=st=1727529929~exp=1727533529~hmac=9dd37ef9ecf07bcb0a19b0a25f770063a8a31f42388033c8e180a4e60786b653&w=740" alt="grlpic" width="145px" height="50px"/>
                                      </div>
                                    </div>

                                    <a id="Right_btn" href="#myCarousel" role="button" data-slide="next"></a>
                      </carousel>
       </div>  
        
       <div className="wndw2">

                  <iframe  id="vid" width="299" height="250" src="https://cdn.pixabay.com/video/2016/09/21/5364-183788428_medium.mp4">
                  </iframe>
                </div>

        <div className="footr_1">

                          <div id="ft2" onClick={()=>
                                    {
                                      document.getElementById("vid").src = "https://cdn.pixabay.com/video/2024/09/21/232561_tiny.mp4";
                                    }}  >


                              <video class="ft2" autoplay loop muted>
                                <source  src="https://cdn.pixabay.com/video/2024/09/21/232561_tiny.mp4" type="video/mp4" />
                              </video>
                            </div>


                            <div class="ft3" onClick={()=>
                                    {
                                      document.getElementById("vid").src = "https://cdn.pixabay.com/video/2024/09/24/233024_large.mp4";
                                    }}>
                              <video class="ft3" autoplay loop muted>
                                <source
                                  src="https://cdn.pixabay.com/video/2024/09/24/233024_large.mp4"
                                  type="video/mp4"
                                />
                              </video>
                            </div>
                            <div class="ft4" onClick={()=>
                                    {
                                      document.getElementById("vid").src = "https://cdn.pixabay.com/video/2024/06/10/216058_large.mp4";
                                    }}> 
                              <video class="ft3" autoplay loop muted>
                                <source
                                  src="https://cdn.pixabay.com/video/2024/06/10/216058_large.mp4"
                                  type="video/mp4"
                                />
                              </video>
                            </div>
                            <div class="ft5" onClick={()=>
                                    {
                                      document.getElementById("vid").src ="https://cdn.pixabay.com/video/2024/07/27/223459_large.mp4";
                                    }}>
                              <video class="ft5" autoplay loop muted>
                                <source
                                  src="https://cdn.pixabay.com/video/2024/07/27/223459_large.mp4"
                                  type="video/mp4"
                                />
                              </video>
                            </div>
                           
          
                          </div>  
                              <div id="mbtn" onclick={()=>{ 
            document.getElementsByClassName("dVc").toggle($(".dVc").css("background-color : black"));
                                              }}>
                              </div>
        
                      
           </div>
    
      
    </>
  )
}
ReactDOM.render(< App/>,document.getElementById("root"));
  

