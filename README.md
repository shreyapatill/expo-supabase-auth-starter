# expo-supabase-auth-starter
starter authentication app built with Expo and Supabase

Followed this tutorial: https://supabase.com/docs/guides/getting-started/tutorials/with-expo-react-native?queryGroups=auth-store&auth-store=secure-store

create new project in supabase dashboard https://supabase.com/dashboard/projects (note password)
run user management starter on SQL editor > Quickstarts > User Management Starter > Ctrl + enter to run query https://supabase.com/dashboard/project/_/sql/new

supbase setup-
npx supabase login
npx supabase init
npx supabase link --project-ref <project-id>
# You can get <project-id> from your project's dashboard URL: https://supabase.com/dashboard/project/<project-id>

make sure you have desktop docker running
docker --version
docker info

npx supabase db pull


create expo project
npx create-expo-app -t expo-template-blank-typescript expo-user-management
cd .\expo-user-management\
npx expo install @supabase/supabase-js @react-native-async-storage/async-storage @rneui/themed
npm install @supabase/supabase-js
npm install @rneui/themed @react-native-async-storage/async-storage
npm install aes-js react-native-get-random-values
npx expo install expo-secure-store
npm install --save-dev @types/aes-js
