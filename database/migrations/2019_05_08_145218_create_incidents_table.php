<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateIncidentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('incidents', function (Blueprint $table) {
            $table->increments('id');
            $table->string('id_materiel');
            $table->string('Type_inc');
            $table->string('Des_inc');
            $table->string('Pk_date');
            $table->string('nom_coll');
            $table->string('Nom_collabSI');
            $table->string('com_SI');
            $table->string('Date_Traitement');
            $table->string('conseil_ut');
            $table->string('disponible');
            $table->string('delete');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('incidents');
    }
}
