<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}"> 
<head>
<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Verifier Les Materiels</title>
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>

    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <script src="{{ asset('js/bootstrap.min.js') }}" type="text/javascript" ></script>
    <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/gijgo@1.9.13/js/gijgo.min.js" type="text/javascript"></script>
    <link href="https://unpkg.com/gijgo@1.9.13/css/gijgo.min.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="{{ asset('vendors/ti-icons/css/themify-icons.css')}}">
    <link rel="stylesheet" href="{{ asset('vendors/base/vendor.bundle.base.css')}}">
    <link rel="stylesheet" href="{{asset('css/styleadmin.css')}}">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="{{asset('css/bootstrap.min.css')}}" >
    <link rel="stylesheet" href="{{asset('fonts/material-icon/css/material-design-iconic-font.min.css')}}">
    <link rel="stylesheet" href="{{asset('vendors/nouislider/nouislider.min.css')}}">
    <script src="{{ asset('js/app.js') }}" defer></script>
   <style> 
    #nav{
        height:80px;
        background: rgb(255, 255, 255);
     }
     #appl{
        background: #dddce1;
        height:800px;
     }
     #conta{
       width:900px;
       margin-left: 90px;
       margin-right: 0px;
       margin-top: 0px;
       position: absolute;
       top : 130px;
       left: 220px;
       padding-left: 10px;

     }
     #divside{
      
       font-family: "Roboto", sans-serif;
    font-weight: 700;
  }
 
    </style>
</head>
<body>
<div id="appl">
@include('layouts.admin')
@include('pages.Menu')
<div id="conta">
<div id='react-mat'> </div>

</div>



</div>

</body>
</html>