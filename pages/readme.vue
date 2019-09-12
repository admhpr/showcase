<template>
  <section-container title="README">
    <template v-slot:content>
      <div class="row">
        <div class="col-md-12">
          <pre class="readme">     

            This is a way for me to give a recruiter, manager, team mate (present or future) some context of who I am 
            and what I'm about.    

            This is not a resume, just a high level over view.

            ## About Me

            ### Personal

            - I have travelled extensively and lived in a number of countries and states.

            - I love to snowboard, surf and wakeboard and don't do it nearly as much as I'd like to.

            - I value family, friends, truth, creativity, thought, care, exercise, disciplined practice and a 
              good laugh now and again.

            - I want to have a meaningful live and positively impact others around me.

            ### Professional

            - I am full stack developer, but often find myself tinkering with the frontend.

            - My primary language is JavaScript. I can also write PHP, Python and I am happy to learn any other language or 
              framework aslong as I am given the time and resources to do so.

            - I have used strongly typed languages such as TypeScript (and a little Java in school) and enjoy using them.

            - I like to work in teams that communicate well and open the doors to collabaration.

            - A big motivator for me is being given a small section of the work week to improve my skillset relevant to the 
              job at hand.

            - I really love writing code and always strive to make it readable and maintainable. 
            
            ## My Current Toolbelt:

            - Node on the server side. I am open to new approaches and languages.
            
            - Databases - whatever SQL or NoSQL is just fine.
            
            - I quite like Vue on the front end but have used React alongside TypeScript along with
              jQuery, AngularJS, Knocokout (and a host of other JS libs).

            - I generally deploy to Digital Ocean, but have used AWS.

            - For managing projects, I just fit-in with whatever the team is using.

            - I have a some DevOps experience with Docker, Ansible and Terraform.

            - I use Linux for an OS (currently Arch), I can use other systems but I would rather not.

            - vim > nano

            That's about it, I look forward to working with you!

      </pre>
        </div>
      </div>
    </template>
  </section-container>
</template>

<script>
import SectionContainer from "~/components/containers/Section";
export default {
  components: {
    SectionContainer
  }
};
</script>

<style scoped>
.readme {
  padding: 1em;
  font-size: 23px;
}
</style>