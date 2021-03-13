@extends('layouts.admin')

@section('content')
@include('pages.Menu');
              

              
                    @if (session('status'))
                        
                            {{ session('status') }}
                        
                    @endif

                  
                
            
        
    

@endsection
