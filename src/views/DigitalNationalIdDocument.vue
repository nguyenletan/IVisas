<template>

  <div id="digital-national-id-doc">
    <div class="back-link container">

      <a @click="$router.go(-1)" href="javascript:void(0);">Back</a>

    </div>
    <div class="container container-border">
      <div class="row justify-content-between align-items-center" id="header">
        <div class="col-auto"><img class="ddr-logo" src="@/assets/images/ddr-doc.png"/></div>
        <div class="col-auto doc-no">NO:&nbsp;<span class="underline"></span></div>
      </div>

      <div class="content">

        <h1>Digital National ID</h1>
        <div class="row justify-content-between">
          <div class="col-6 left-content">
            <div class="doc-row">
              <label>First Name:</label>
              <span class="underline">Alice </span>
            </div>
            <div class="doc-row">
              <label>Date of Birth:</label>
              <span class="underline">15/01/2019</span>
            </div>
            <div class="doc-row">
              <label>ID Number:</label>
              <span class="underline id-number">123-456-7890</span>
            </div>
          </div>
          <div class="col-6 right-content">
            <div class="doc-row">
              <label>Last Name:</label>
              <span class="underline">Edward</span>
            </div>
            <div class="doc-row">
              <label>Place of Birth:</label>
              <span class="underline">London</span>
            </div>
          </div>
        </div>

        <div class="row address">
          <div class="col-12">
            <div class="doc-row">
              <label>Address:</label>
              <span class="underline">61 Wellfield Road Roath Cardiff CF24 3DG</span>
            </div>
          </div>
        </div>

        <div class="row justify-content-between">
          <div class="col-6 left-content">
            <div class="doc-row">
              <label>Issue Date:</label>
              <span class="underline id-number">02/24/2014</span>
            </div>
          </div>
          <div class="col-6 right-content">
            <div class="doc-row">
              <label>Issue By:</label>
              <span class="underline">WMA Office</span>
            </div>

          </div>
        </div>

        <div class="row id-card-image">
          <div class="col-12 m-auto">
            <img class="embed-responsive" src="@/assets/images/ID-card-image.png" alt="ID-card-image.png"/>
          </div>
        </div>

        <div class="row signature justify-content-between">
          <div class="col-6 stamp">
            <img class="embed-responsive stamp-image" src="@/assets/images/stamp.png" alt="stamp"/>
          </div>
          <div class="col-6 text-right">
            <p>Department of Residence Registration</p>
            <p>01st August 2018</p>
            <div class="signature-image text-right">

                <img class="embed-responsive" src="@/assets/images/signature.png" alt="signature"/>

            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

</template>

<script>
import "@/assets/styles/digital-national-id-doc.scss";

export default {
  name: "DigitalNationIdDoc"
};
</script>

<style>
</style>
