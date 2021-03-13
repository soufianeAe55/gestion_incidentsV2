<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}"> 
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Admin Space</title>

    <!-- Scripts -->
   
    
    
   
    
    <link rel="stylesheet" href="{{ asset('vendors/ti-icons/css/themify-icons.css')}}">
    <link rel="stylesheet" href="{{ asset('vendors/base/vendor.bundle.base.css')}}">
  <!-- endinject -->
  <!-- plugin css for this page -->
  <!-- End plugin css for this page -->
  <!-- inject:css -->
  <link rel="stylesheet" href="{{ asset('css/styleadmin.css')}}">
    <!-- Fonts -->
  
  

    <!-- Styles -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
  
    <link rel="stylesheet" href="{{asset('css/bootstrap.min.css')}}" >
   
   <style>

     
#divside{font-family: "Roboto", sans-serif;
    font-weight: 700;}
     #app{
        background: #dddce1;
     }
    
     
        </style>
</head>
<body>
<nav class="sidebar sidebar-offcanvas" id="sidebar">
    <div id="divside">
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link" href="#">
           
              <i class="ti-shield menu-icon"></i>
              <span class="menu-title">Dashboard</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
              <i class="ti-palette menu-icon"></i>
              <span class="menu-title">UI Elements</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="ui-basic">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item"> <a class="nav-link" href="pages/ui-features/buttons.html">Buttons</a></li>
                <li class="nav-item"> <a class="nav-link" href="pages/ui-features/typography.html">Typography</a></li>
              </ul>
            </div>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="{{ route('Add.Mat') }}">
              <i class="ti-layout-list-post menu-icon"></i>
              <span class="menu-title">Verfier Les Materiels</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="{{ route('Aff.Mat') }}">
              <i class="ti-view-list-alt menu-icon"></i>
              <span class="menu-title">Afficher Les materiels</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="{{ route('Aff.Inc') }}">
              <i class="ti-view-list-alt menu-icon"></i>
              <span class="menu-title">Afficher Les incidents</span>
            </a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="{{ route('Aff.Up') }}">
              <i class="ti-view-list-alt menu-icon"></i>
              <span class="menu-title">Mise a Jour</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
              <i class="ti-user menu-icon"></i>
              <span class="menu-title">User Pages</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="auth">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item"> <a class="nav-link" href="pages/samples/login.html"> Login </a></li>
                <li class="nav-item"> <a class="nav-link" href="pages/samples/login-2.html"> Login 2 </a></li>
                <li class="nav-item"> <a class="nav-link" href="pages/samples/register.html"> Register </a></li>
                <li class="nav-item"> <a class="nav-link" href="pages/samples/register-2.html"> Register 2 </a></li>
                <li class="nav-item"> <a class="nav-link" href="pages/samples/lock-screen.html"> Lockscreen </a></li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="documentation/documentation.html">
              <i class="ti-write menu-icon"></i>
              <span class="menu-title">Documentation</span>
            </a>
          </li>
        </ul>
</div>
      </nav>
<script src="{{ asset('vendors/base/vendor.bundle.base.js')}}"></script>
  <!-- endinject -->
  <!-- Plugin js for this page-->
  <script src="{{ asset('vendors/chart.js/Chart.min.js')}}"></script>
  <!-- End plugin js for this page-->
  <!-- inject:js -->
  <script src="{{ asset('js/off-canvas.js')}}"></script>
  <script src="{{ asset('js/hoverable-collapse.js')}}"></script>
  <script src="{{ asset('js/template.js')}}"></script>
  <script src="{{ asset('js/todolist.js')}}"></script>
  <!-- endinject -->
  <!-- Custom js for this page-->
  <script src="{{ asset('js/dashboard.js')}}"></script>
  </body>
</html>