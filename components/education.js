import html from '../utils/html.js'
import markdown from '../utils/markdown.js'
import Duration from './duration.js'
import Link from './link.js'

export default function Education(education = []) {
  return (
    education.length > 0 &&
    html`
      <section id="education">
        <h3>Education</h3>
        <div class="stack">
          ${education.map(
            ({
              area,
              courses = [],
              institution,
              startDate,
              endDate,
              studyType,
              url,
            }) => html`
              <article>
                <header>
                  <h4>${Link(url, institution)}</h4>
                  <div class="meta">
                    ${area && html`<strong>${area}</strong>`}
                    <div>${Duration(startDate, endDate)}</div>
                  </div>
                </header>
                ${studyType && markdown(studyType)}
                ${courses.length > 0 &&
                html`
                  <h5>Courses</h5>
                  <ul class="tag-list">
                    ${courses.map(course => html`<li>${markdown(course)}</li>`)}
                  </ul>
                `}
              </article>
            `,
          )}
        </div>
      </section>
    `
  )
}
