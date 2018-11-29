<template>
  <div id="transcript-request-form">
    <div class="back-link container">
      <a @click="$router.go(-1);" href="javascript:void(0);">Back</a>
    </div>
    <div class="container container-border">
      <form class="" @submit="submit">
        <h1>Transcript Request Form</h1>
        <p class="description">
          Please provide certifited information below, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua.
        </p>

        <div class="row justify-content-center">
          <div class="col-8 m-auto">
            <vs-input
              name="first-name"
              v-validate="'required'"
              placeholder="First Name"
              data-vv-name="first-name"
              v-model="fistName"
              size="large"
              class="light-input"
              danger-text="The First Name is required"
              :danger="errors.has('first-name')"
            />
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-8 m-auto">
            <vs-input
              name="last-name"
              v-validate="'required'"
              placeholder="Last Name"
              data-vv-name="last-name"
              v-model="lastName"
              size="large"
              class="light-input"
              danger-text="The Last Name is required"
              :danger="errors.has('last-name')"
            />
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-8 m-auto">
            <v-dialog
              ref="dialog1"
              v-model="modalOfDOB"
              :return-value.sync="dateOfBirth"
              persistent
              lazy
              full-width
              width="290px"
            >
              <vs-input
                slot="activator"
                name="date-of-birth"
                v-validate="'required'"
                label="Date Of Birth"
                placeholder="Date Of Birth"
                v-model="computedDateFormatted"
                danger-text="The date of birth is required"
                size="large"
                class="light-input"
                :danger="errors.has('date-of-birth')"
                icon-after="true"
                icon="calendar_today"
              />

              <v-date-picker
                v-model="dateOfBirth"
                scrollable
                header-color="#0C63B7"
              >
                <v-spacer></v-spacer>
                <v-btn flat color="primary" @click="modalOfDOB = false;"
                  >Cancel</v-btn
                >
                <v-btn
                  flat
                  color="primary"
                  @click="$refs.dialog1.save(dateOfBirth);"
                  >OK</v-btn
                >
              </v-date-picker>
            </v-dialog>
            <!--
              <vs-input
                name="date-of-birth"
                v-validate="'required'"
                placeholder="Date of Birth"
                data-vv-name="date-of-birth"
                v-model="dateOfBirth"
                size="large"
                class="light-input"
                danger-text="The Date of Birth is required"
                :danger="errors.has('date-of-birth')"
              />
            -->
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-8 m-auto">
            <vs-input
              name="place-of-birth"
              v-validate="'required'"
              placeholder="Place of Birth"
              data-vv-name="place-of-birth"
              v-model="placeOfBirth"
              size="large"
              class="light-input"
              danger-text="The Place of Birth is required"
              :danger="errors.has('place-of-birth')"
            />
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="col-8 m-auto">
            <vs-input
              name="national-id"
              v-validate="'required'"
              placeholder="National ID Number"
              data-vv-name="national-id"
              v-model="nationalId"
              size="large"
              class="light-input"
              danger-text="The National ID Number is required"
              :danger="errors.has('national-id')"
            />
          </div>
        </div>

        <div class="row">
          <div class="col-auto m-auto">
            <vs-button type="submit" class="big-btn light-btn">
              CHECK CREDENTIALS
            </vs-button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import "@/assets/styles/form-request.scss";

export default {
  name: "TranscriptRequestFormTranscriptRequestForm",
  data: function() {
    return {
      fistName: null,
      lastName: null,
      nationalId: null,
      placeOfBirth: null,
      dateOfBirth: null,
      graduationStatus: null,
      modalOfDOB: false
    };
  },
  computed: {
    computedDateFormatted() {
      //this.dobFormatted = this.formatDate(this.dateOfBirth);
      return this.formatDate(this.dateOfBirth);
    }
  },
  methods: {
    submit: function(e) {
      e.preventDefault();
      // let that = this;

      this.$validator.validateAll().then(result => {
        this.isValid = !!result;
        if (this.isValid === true) {
          this.$router.push("user-send-request-successfully");
          return;

          /*let api_url =
            process.env.VUE_APP_HYPERLEDGER_API + "transcript-request";
          this.callFecth(
            api_url,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json; charset=utf-8"
              },
              body: JSON.stringify({})
            },
            function() {
              // that.$router.push("register-success");
            }
          );*/
        }
      });
    },
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${day}/${month}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    }
  }
};
</script>

<style></style>
