<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">

        <div class="course-grid">

            <xsl:for-each select="courses/course">

                <div class="course-card">

                    <div class="course-icon">📚</div>

                    <div class="course-code">
                        <xsl:value-of select="code"/>
                    </div>

                    <h3>
                        <xsl:value-of select="name"/>
                    </h3>

                    <span class="course-type">
                        <xsl:value-of select="type"/>
                    </span>

                    <div class="course-details">

                        <div>
                            <strong>Credits</strong>
                            <span>
                                <xsl:value-of select="credits"/>
                            </span>
                        </div>

                        <div>
                            <strong>Students</strong>
                            <span class="enrollment-number">
                                <xsl:value-of select="enrollment"/>
                            </span>
                        </div>

                    </div>

                    <button
                        class="select-course-btn"
                        onclick="selectCourse('{code}')">

                        Enroll in Course

                    </button>

                </div>

            </xsl:for-each>

        </div>

    </xsl:template>

</xsl:stylesheet>