import { Breadcrumb } from "@/components/Breadcrumb"

export default function LorePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "Conocimientos", href: "/lore" }]} />
      <h1 className="text-4xl font-bold mb-8 text-primary text-shadow">Sabiduría Ancestral</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-secondary">El Mito de Cthulhu</h2>
        <p className="mb-4">
          El Mito de Cthulhu es un universo ficticio compartido, originado en las obras del escritor de horror
          estadounidense H. P. Lovecraft. Se centra en la idea de que la Tierra una vez fue gobernada por una antigua
          raza de seres conocidos como los Primigenios, que ahora yacen dormidos pero siempre presentes, esperando
          reclamar su dominio.
        </p>
        <p className="mb-4">
          Estas entidades cósmicas a menudo se representan como tan vastas e incomprensibles que la mera visión de ellas
          puede llevar a los humanos a la locura. El más famoso de estos seres es Cthulhu, una entidad colosal descrita
          como parte pulpo, parte dragón y parte caricatura humana.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-secondary">Conceptos Clave</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="text-primary">Indiferencia Cósmica:</span> El universo es vasto e indiferente, y la
            humanidad es insignificante en el gran esquema de las cosas.
          </li>
          <li>
            <span className="text-primary">Conocimiento Prohibido:</span> Hay verdades en el universo que es mejor dejar
            desconocidas, ya que aprenderlas puede llevar a la locura o algo peor.
          </li>
          <li>
            <span className="text-primary">Geometría No Euclidiana:</span> Los Primigenios a menudo habitan espacios que
            desafían la física y la geometría convencionales.
          </li>
          <li>
            <span className="text-primary">Civilizaciones Antiguas:</span> Culturas perdidas hace mucho tiempo que
            tuvieron contacto con los Primigenios y dejaron artefactos de gran y terrible poder.
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-secondary">Entidades Notables</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-primary">Cthulhu</h3>
            <p>
              Una entidad cósmica de inmenso tamaño y poder, a menudo representada como una mezcla de pulpo, dragón y
              humano. Duerme en la ciudad hundida de R'lyeh, esperando levantarse de nuevo.
            </p>
          </div>
          <div className="bg-card p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-primary">Nyarlathotep</h3>
            <p>
              Conocido como el Caos Reptante, Nyarlathotep es un cambiaformas y mensajero de los Dioses Exteriores. A
              diferencia de otras entidades, a menudo camina entre los humanos, sembrando discordia y locura.
            </p>
          </div>
          <div className="bg-card p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-primary">Azathoth</h3>
            <p>
              El Dios Idiota Ciego, Azathoth es un caos nuclear caótico que yace en el centro del universo. Se dice que
              si alguna vez despierta, la realidad tal como la conocemos dejará de existir.
            </p>
          </div>
          <div className="bg-card p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-primary">Yog-Sothoth</h3>
            <p>
              El Todo-en-Uno y Uno-en-Todo, Yog-Sothoth existe fuera del tiempo y el espacio convencionales. Es
              omnisciente y coexistente con todo el tiempo y el espacio.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-secondary">Explorando el Mito</h2>
        <p className="mb-4">
          El Mito de Cthulhu se ha expandido mucho más allá de las obras originales de Lovecraft, con muchos autores
          contribuyendo a este universo compartido. A medida que te sumerjas en nuestros Tomos Arcanos, encontrarás
          historias que exploran estos temas y entidades, cada una ofreciendo un vistazo al vasto e indiferente cosmos
          que yace justo más allá de nuestra percepción.
        </p>
        <p>
          Recuerda, mientras exploras estos relatos de horror cósmico, que algunos conocimientos tienen un gran costo.
          El velo entre la cordura y la locura es delgado, y las verdades del universo no siempre son amables con la
          mente humana. Procede con precaución, y que tus viajes a través del Mito sean tanto emocionantes como
          esclarecedores.
        </p>
      </section>
    </div>
  )
}