
export function filterCourses(courses,{q='',area='',school=''}){
 const term=q.toLowerCase().trim();
 return courses.filter(c=>{
  const text=[c.title,c.area,c.summary,c.schools.join(' ')].join(' ').toLowerCase();
  return (!term||text.includes(term)) && (!area||c.area===area) && (!school||c.schools.includes(school));
 });
}
