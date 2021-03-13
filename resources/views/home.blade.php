@extends('layouts.app')

@section('content')



            
<div id="cont"> 

<div id="test"> </div>
<div id='example'> </div>


<div id='react-div'> </div>


        </div>
      
       
        
                
                    @if (session('status'))
                        <div >
                            {{ session('status') }}
                        </div>
                    @endif

                    
                    
                
       

@endsection
