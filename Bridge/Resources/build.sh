#! /bin/bash
jsbfile="Bridge.jsb"
jsfile="bridge.js"
jsminf="bridge.min.js"
ts="$(date +%Y%m%d%H%M%S)"
tmpbrjs="bridge-${ts}.js"

echo "$(date) - Building ${jsfile} and ${jsminf}"
cd ../../Resources || {
 if [ ! -e "${jsbfile}" ]; then
  echo "Unable to move to ../../Resources. Current WD: '$(pwd)'."
  exit 1
 fi
 # else, we're probably running build.sh from the directory itself
}

if [ ! -e "${jsbfile}" ]; then
 echo "Unable to locate '${jsbfile}'."
 exit 1
fi

filelist="$(cat "${jsbfile}" | grep "<include name=" | sed "s/^.*<include name=\"\(.*\)\" *\/>.*\$/\1/")"

echo "Merging $(echo "${filelist}" | wc -l) files."
if [ -e "${tmpbrjs}" ]; then
 rm "${tmpbrjs}" || {
  echo "Unable to remove '${tmpbrjs}'."
  exit 1
 }
fi

for file in ${filelist}; do
 if [ -e "${file}" ]; then
#  echo "
#// @source ${file}
#" >> "${tmpbrjs}"
  cat "${file}" >> "${tmpbrjs}"
  echo "" >> "${tmpbrjs}" # add EOL at EOF. :)
 else
  echo "File '${file}' not found."
  exit 1
 fi
done

cp "${tmpbrjs}" "${jsfile}"
mv "${tmpbrjs}" "${jsminf}"

echo "Minifying '${jsminf}'."
sedcmd="s#(^|^.*[^:])//.*\$#\1#g;s/^ *//g;s/ *\$//g;s/  +/ /g;/^ *\$/d"
if [ "$(uname -s)" == "Darwin" ]; then
 sed -i '' -E -e "s/	/ /g" "${jsminf}" # Replate tab chars
 LC_ALL=C sed -i '' -E -e "${sedcmd}" "${jsminf}"
else
 # TODO: Check on linux!
 sed -i -E -e "s/\t/ /g" "${jsminf}" # Replace tab chars
 sed -i -E -e "${sedcmd}" "${jsminf}"
fi
cat "${jsminf}" | tr '\n' ' ' > "${tmpbrjs}"
mv "${tmpbrjs}" "${jsminf}"

echo "$(date) - Done building ${jsfile}."
